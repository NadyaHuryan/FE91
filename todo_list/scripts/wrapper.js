import { styleWrapper } from "./style.js";

 export const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.style.cssText = `${styleWrapper}`;