import {
  HTMLButtonCreator,
  WindowButtonCreator,
  AndroidButtonCreator
} from "./Button";

import { Dialog } from "./Button/Dialog";

enum Platform {
  WEB,
  WINDOWS,
  ANDROID
}

/**
 * Client Code
 */

(function T(platform: Platform) {
  let dialog: Dialog;
  switch (platform) {
    case Platform.WEB: {
      dialog = new HTMLButtonCreator();
      break;
    }
    case Platform.WINDOWS: {
      dialog = new WindowButtonCreator();
      break;
    }
    case Platform.ANDROID: {
      dialog = new AndroidButtonCreator();
      break;
    }
    default:
      throw new Error("Unsupported platform");
  }
  dialog.renderButton();
})(Platform.ANDROID);
