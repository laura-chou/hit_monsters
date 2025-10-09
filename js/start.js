import { pathName } from "../js/common.js";

export const playAudioEffect = (src) => {
  const audio = new Audio();
  audio.src = `${pathName}music/${src}.mp3`;
  audio.play();
};