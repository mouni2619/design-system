import { Flex } from "antd";

import { Upload } from "@components/Upload/Upload";
import { BYTES_PER_MB, UPLOAD_TYPES } from "@components/Upload/constants";

const CAPTION_CLASS = "caption text-secondary";

const TYPES = Object.keys(UPLOAD_TYPES);

// A stand-in for an uploaded company logo.
const LOGO_URL =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48"><g fill="none" stroke="#1890ff" stroke-width="6">' +
      '<circle cx="16" cy="30" r="11"/><circle cx="48" cy="30" r="11"/></g>' +
      '<circle cx="16" cy="30" r="4" fill="#1890ff"/><circle cx="48" cy="30" r="4" fill="#1890ff"/></svg>',
  );

const IMAGE_FILE = {
  uid: "image",
  name: "Image.jpeg",
  size: 2 * BYTES_PER_MB,
  type: "image/jpeg",
  status: "done",
  url: "#",
};

const PDF_FILE = {
  uid: "pdf",
  name: "File.pdf",
  size: 2 * BYTES_PER_MB,
  type: "application/pdf",
  status: "done",
  url: "#",
};

const UPLOAD_ERROR = new Error("Upload failed");

// The design's six cards: done, failed and uploading, for an image and a PDF.
const FILE_STATES = [
  IMAGE_FILE,
  PDF_FILE,
  { ...IMAGE_FILE, uid: "image-error", status: "error", error: UPLOAD_ERROR },
  { ...PDF_FILE, uid: "pdf-error", status: "error", error: UPLOAD_ERROR },
  { ...IMAGE_FILE, uid: "image-uploading", status: "uploading", percent: 51 },
  { ...PDF_FILE, uid: "pdf-uploading", status: "uploading", percent: 51 },
];

const LOGO_FILE = {
  uid: "logo",
  name: "Mandark.jpeg",
  size: BYTES_PER_MB / 4,
  type: "image/jpeg",
  status: "done",
  url: LOGO_URL,
};

// Storybook has no server to upload to, so this counts each file to 100%.
function mockRequest({ onProgress, onSuccess }) {
  let percent = 0;

  function tick() {
    percent += 20;
    onProgress({ percent });
    if (percent >= 100) {
      clearInterval(timer);
      onSuccess("ok");
    }
  }

  const timer = setInterval(tick, 250);
}

export default {
  title: "Components/Upload",
  component: Upload,
  tags: ["autodocs"],
  args: {
    type: "any",
    maxSize: 1,
    multiple: true,
    customRequest: mockRequest,
  },
  argTypes: {
    type: { control: "inline-radio", options: TYPES },
    maxSize: { control: { type: "number", min: 1 }, description: "In megabytes." },
    multiple: { control: "boolean", description: "Ignored by `logo`, which holds one file." },
    fileList: { control: false },
    defaultFileList: { control: false },
    customRequest: { control: false },
    onChange: { action: "changed", control: false },
    onRemove: { action: "removed", control: false },
  },
  decorators: [
    function (Story) {
      return (
        <div className="w-50">
          <Story />
        </div>
      );
    },
  ],
};

export const Default = {};

// One dropzone per type. Drop a file on any of them to see it upload.
export const Types = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {TYPES.map(function (type) {
          return (
            <Flex key={type} vertical gap="small">
              <small className={CAPTION_CLASS}>{type}</small>
              <Upload {...args} type={type} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

// Done, failed and uploading cards under the zone.
export const FileStates = {
  args: {
    type: "document",
    defaultFileList: FILE_STATES,
  },
};

// One file at a time: a new pick adds to the list rather than several at once.
export const Single = {
  args: {
    type: "image",
    multiple: false,
  },
};

// The logo's four moments. Uploading and failed are ordinary cards under the
// zone; only a finished logo fills the zone. Replace, a click or a drop starts
// the cycle again.
const LOGO_STATES = [
  { label: "empty", files: [] },
  { label: "uploading", files: [{ ...LOGO_FILE, status: "uploading", percent: 51 }] },
  { label: "uploaded", files: [LOGO_FILE] },
  { label: "failed", files: [{ ...LOGO_FILE, status: "error", error: UPLOAD_ERROR }] },
];

export const Logo = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {LOGO_STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{state.label}</small>
              <Upload {...args} type="logo" defaultFileList={state.files} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
