import grandmaPic from "./katie-franklin-9eNN3nmcwYM-unsplash.jpg";

const homeModule = ()=>{
    const content = document.createElement("div");
    content.id = "content";

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.innerHTML = "<span>Hit Grandma up!</span>";

    const grandmaBox = document.createElement("div");
    grandmaBox.classList.add("menuItem");
    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "<p><b>Grandma</b><br><br>Phone Number: [REDACTED]<br>Address:[REDACTED]</p>";
    const img1 = document.createElement("img");
    img1.src = grandmaPic;
    img1.alt = "Katie Franklin on Unsplash";
    grandmaBox.appendChild(paragraph1);
    grandmaBox.appendChild(img1);

    content.appendChild(contentHeader);
    content.appendChild(grandmaBox);
    return content;
}

export default homeModule;