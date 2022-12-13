import { styleContainer } from "./style.js";

  export const container = document.createElement("div");
  container.classList.add("container");
  container.style.cssText = `${styleContainer}`;