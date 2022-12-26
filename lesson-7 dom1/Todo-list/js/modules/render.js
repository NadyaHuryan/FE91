import { cssAddHeaderButton, cssHeaderDelete, cssRoot, cssHeader, cssWrapper, 
    cssAddHeaderInput} from "./style.js"

export let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.style.cssText = cssWrapper;

export let container = document.createElement("div");
        container.classList.add("container");

export let addHeaderButton = document.createElement("button");
        addHeaderButton.classList.add("header__add");
        addHeaderButton.innerHTML = `Add`;
        addHeaderButton.style.cssText = cssAddHeaderButton;

export let headerDelete = document.createElement("button");
        headerDelete.classList.add("header__delete");
        headerDelete.innerHTML = `Delete all`;
        headerDelete.style.cssText = cssHeaderDelete;

export let root = document.getElementById("root")
        root.style.cssText = cssRoot;

export let header = document.createElement("header");
        header.classList.add("header");
        header.style.cssText = cssHeader;

export let addHeaderInput = document.createElement("input");
    addHeaderInput.classList.add("header__input");
    addHeaderInput.setAttribute("type", "text");
    addHeaderInput.setAttribute("placeholder", "Enter todo …");
    addHeaderInput.style.cssText = cssAddHeaderInput;
