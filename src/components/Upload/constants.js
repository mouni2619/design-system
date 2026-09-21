import { SpaceTokens } from "@tokens/space";
import { FontSize } from "@tokens/typography";

/**
 * Upload constants.
 */

/**
 * What each type of upload takes, and the words its dropzone uses. `accept` is
 * the file input's own attribute, so an empty one takes any file. A logo is an
 * image with room for only one.
 */
export const UPLOAD_TYPES = {
  any: { accept: "", formats: "Any", link: "Upload file" },
  document: {
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    formats: "PDF, DOC, DOCX, XLS or XLSX",
    link: "Upload file",
  },
  image: { accept: ".jpg,.jpeg,.png", formats: "JPEG or PNG", link: "Upload image" },
  logo: { accept: ".jpg,.jpeg,.png", formats: "JPEG or PNG", link: "Upload logo" },
};

export const DEFAULT_UPLOAD_TYPE = "any";

// In megabytes, as the dropzone writes it.
export const DEFAULT_UPLOAD_MAX_SIZE = 1;

export const BYTES_PER_KB = 1024;
export const BYTES_PER_MB = BYTES_PER_KB * 1024;

// The folder in the dropzone.
export const UPLOAD_DROP_ICON_SIZE = SpaceTokens.lg * 2;

// The file-type icon in a card's 40px badge, 8px in from each side.
export const UPLOAD_FILE_ICON_SIZE = SpaceTokens.lg;

// The bin at the end of a card, drawn at the h6 size.
export const UPLOAD_REMOVE_ICON_SIZE = FontSize.h6;

// A card's progress bar is a thin 4px rule, not the Progress default.
export const UPLOAD_PROGRESS_HEIGHT = SpaceTokens["3xs"];

// The square the current logo sits in, measured off the design.
export const LOGO_PREVIEW_SIZE = 100;
