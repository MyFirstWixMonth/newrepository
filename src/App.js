import wixAnimations from "wixAnimations";
import wixWindow from "wix-windoww";

const slider01Timeline = wixAnimations.timeline({ repeat: -1 });
const slider02Timeline = wixAnimations.timeline();

let logoExpand = wixAnimations.timeline();
let editorXlogoExpand = wixAnimations.timeline();

let fadeOptions = {
  duration: 300,
  delay: 0
};
