import "./style.css";
import homeModule from "./homeModule.js";
import menuModule from "./menuModule.js";
import aboutModule from "./aboutModule";

const homeTab = document.getElementById("homeTab");
const menuTab = document.getElementById("menuTab");
const aboutTab = document.getElementById("aboutTab");
const content = document.getElementById("content");

window.onload = ()=>{
    document.body.appendChild(homeModule());
    homeTab.addEventListener("click", ()=>{
        document.body.removeChild(document.getElementById("content"));
        document.body.appendChild(homeModule());
    });
    menuTab.addEventListener("click", ()=>{
        document.body.removeChild(document.getElementById("content"));
        document.body.appendChild(menuModule());
    });
    aboutTab.addEventListener("click", ()=>{
        document.body.removeChild(document.getElementById("content"));
        document.body.appendChild(aboutModule());
    });
}