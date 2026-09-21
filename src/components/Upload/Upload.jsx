import { Upload as AntUpload } from "antd";
import { FileText, FolderOpen, ImageIcon, Trash2 } from "lucide-react";
import { useState } from "react";

import { Icon } from "@components/Icon/Icon";
import { Link } from "@components/Link/Link";
import { Progress } from "@components/Progress/Progress";
import { BYTES_PER_KB, BYTES_PER_MB, DEFAULT_UPLOAD_MAX_SIZE, DEFAULT_UPLOAD_TYPE, LOGO_PREVIEW_SIZE, UPLOAD_DROP_ICON_SIZE, UPLOAD_FILE_ICON_SIZE, UPLOAD_PROGRESS_HEIGHT, UPLOAD_REMOVE_ICON_SIZE, UPLOAD_TYPES } from "@components/Upload/constants";
import { DaybreakBlue } from "@tokens/color";

/** A file size the way the design writes it: `2 MB`, or `340 KB` under a megabyte. */
function formatSize(bytes) {
  if (bytes >= BYTES_PER_MB) {
    return `${Number((bytes / BYTES_PER_MB).toFixed(1))} MB`;
  }
  return `${Math.max(Math.round(bytes / BYTES_PER_KB), 1)} KB`;
}

/** Whether a file's name ends in one of the extensions `accept` lists; any file does when it lists none. */
function hasAcceptedFormat(file, accept) {
  if (!accept) {
    return true;
  }
  const name = file.name.toLowerCase();
  return accept.split(",").some(function (extension) {
    return name.endsWith(extension);
  });
}

/**
 * One file in the list: a badge with its type, its name and size, and a bin.
 * A finished file's name is a Link that opens it; a failed one is red; one
 * still uploading shows a progress bar and its percent.
 */
function FileCard({ file = null, onRemove = null }) {
  // `error` as well as the status: antd re-marks a file "removed" while its
  // card fades out, and a failed one should stay red until it is gone.
  const isError = file.status === "error" || Boolean(file.error);
  const isUploading = file.status === "uploading";
  const FileIcon = (file.type || "").startsWith("image/") ? ImageIcon : FileText;
  const percent = Math.round(file.percent || 0);

  const borderClass = isError ? "border-danger" : "border-secondary-emp-5";
  const badgeClass = isError ? "bg-danger-emp-1 text-danger" : "bg-primary-emp-1 text-primary";
  const nameClass = isError ? "text-danger" : "text-primary";
  const detailClass = isError ? "text-danger" : "text-secondary";

  return (
    <div className={`d-flex align-items-center gap-2 p-3 bg-white border rounded-1 body ${borderClass}`}>
      <span className={`d-flex flex-shrink-0 p-2 rounded-1 ${badgeClass}`}>
        <FileIcon size={UPLOAD_FILE_ICON_SIZE} />
      </span>

      <div className="d-flex flex-column gap-1 flex-grow-1 overflow-hidden">
        {isError || isUploading ? (
          <span className={`fw-medium text-truncate ${nameClass}`}>{file.name}</span>
        ) : (
          <Link href={file.url} target="_blank" className="text-truncate">
            {file.name}
          </Link>
        )}
        {isUploading ? <Progress percent={percent} showInfo={false} height={UPLOAD_PROGRESS_HEIGHT} /> : null}
        <span className={detailClass}>{isUploading ? `${percent} %` : formatSize(file.size)}</span>
      </div>

      <Icon icon={Trash2} size={UPLOAD_REMOVE_ICON_SIZE} title="Remove" className={detailClass} onClick={onRemove} />
    </div>
  );
}

/**
 * A dashed dropzone that takes files by drag and drop or by the link in it.
 *
 * `type` decides what it accepts and what it says: `any` file, a `document`,
 * an `image`, or a `logo` — a single image. Files are listed below the zone,
 * one card each, showing their progress or failure; a logo leaves the list
 * once it has uploaded and fills the zone instead, with a preview, a Remove
 * link and a Replace link. A file over `maxSize` megabytes is not uploaded and
 * shows as a failed card.
 *
 * `onRemove` runs for a card's bin and for the logo's Remove link alike.
 * Everything else — `customRequest`, `action` — is antd's Upload.
 * Controlled when `fileList` is given, uncontrolled otherwise.
 *
 * ```jsx
 * <Upload type="document" />
 * <Upload type="image" multiple={false} maxSize={5} />
 * <Upload type="logo" defaultFileList={[currentLogo]} />
 * ```
 */
export function Upload({
  type = DEFAULT_UPLOAD_TYPE,
  maxSize = DEFAULT_UPLOAD_MAX_SIZE,
  multiple = true,
  fileList = null,
  defaultFileList = [],
  onChange = null,
  onRemove = null,
  ...rest
}) {
  const [innerFileList, setInnerFileList] = useState(defaultFileList);
  const files = fileList ?? innerFileList;

  const { accept, formats, link } = UPLOAD_TYPES[type] || UPLOAD_TYPES[DEFAULT_UPLOAD_TYPE];
  const isLogo = type === "logo";

  // A logo upload holds one file, and gets the logo box once it has uploaded.
  const logo = files[0];
  const showLogo = isLogo && logo?.status === "done";

  function handleChange(info) {
    setInnerFileList(info.fileList);
    if (onChange) {
      onChange(info);
    }
  }

  // Runs on each picked file; antd copies these fields onto its list entry.
  // The format check covers drops, which antd skips when one file is allowed.
  // The local `url` lets a name open its file and a logo preview.
  function prepareFile(file) {
    if (!hasAcceptedFormat(file, accept)) {
      return AntUpload.LIST_IGNORE;
    }
    file.url = URL.createObjectURL(file);
    if (file.size > maxSize * BYTES_PER_MB) {
      file.status = "error";
      file.error = new Error(`Larger than ${maxSize} MB`);
      return false;
    }
    return true;
  }

  // The zone opens the picker on a click or Enter, so Remove keeps both to
  // itself. Like a bin, it lets `onRemove` return `false` to keep the file.
  function handleRemoveLogo(event) {
    event.preventDefault();
    event.stopPropagation();
    if (onRemove && onRemove(logo) === false) {
      return;
    }
    handleChange({ file: { ...logo, status: "removed" }, fileList: [] });
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  function renderFile(originNode, file, list, actions) {
    return <FileCard file={file} onRemove={actions.remove} />;
  }

  let content;

  if (showLogo) {
    content = (
      <div className="d-flex align-items-stretch px-6 py-1 body text-secondary">
        <div className="col d-flex align-items-center gap-4 text-start">
          <img
            src={logo.url}
            alt={logo.name}
            width={LOGO_PREVIEW_SIZE}
            height={LOGO_PREVIEW_SIZE}
            className="flex-shrink-0 object-fit-contain p-4 border border-secondary-emp-4 rounded-1"
          />
          <div className="d-flex flex-column gap-2">
            <span>Current logo</span>
            <span>{logo.name}</span>
            {/* An `href` puts it in the tab order; the handler stops the jump. */}
            <Link href="#" onClick={handleRemoveLogo} onKeyDown={stopPropagation}>
              Remove
            </Link>
          </div>
        </div>

        {/* A rule above and below the OR, as tall as the preview. */}
        <div className="d-flex flex-column align-items-center gap-1">
          <span className="flex-grow-1 border-start border-secondary-emp-5" />
          OR
          <span className="flex-grow-1 border-start border-secondary-emp-5" />
        </div>

        <div className="col d-flex flex-column justify-content-center gap-2 text-end">
          <Link>Replace logo</Link>
          <span>Supported formats - {formats}</span>
          <span>Size - Max {maxSize} MB</span>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="d-flex flex-column align-items-center gap-2 py-8 body text-secondary">
        <FolderOpen size={UPLOAD_DROP_ICON_SIZE} fill={DaybreakBlue["blue-400"]} className="text-primary" />
        <span>
          Drag & Drop or <Link>{link}</Link>
        </span>
        <span>Supported formats - {formats}</span>
        <span>Size - Max {maxSize} MB</span>
      </div>
    );
  }

  return (
    <AntUpload.Dragger
      accept={accept}
      multiple={multiple && !isLogo}
      maxCount={isLogo ? 1 : undefined}
      fileList={files}
      beforeUpload={prepareFile}
      showUploadList={!showLogo}
      itemRender={renderFile}
      classNames={{ list: "d-flex flex-column gap-2 mt-2" }}
      onChange={handleChange}
      onRemove={onRemove}
      {...rest}
    >
      {content}
    </AntUpload.Dragger>
  );
}

export default Upload;
