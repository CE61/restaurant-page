import cookieImage from "./ellieelien-04yMqTmUeHQ-unsplash.jpg";
import hotChocolateImage from "./anna-bratiychuk-3w2AuRZeeSU-unsplash.jpg";
import skullImage from "./ahmed-adly-1PtM6b85sdw-unsplash.jpg";

const homeModule = ()=>{
    const content = document.createElement("div");
    content.id = "content";

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.innerHTML = "<span>Let's see what the chef's cookin'!</span>";

    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("menuItem");
    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "<p><b>Chocolate chip cookies</b><br><br><br>Grandma's finest cookies baked with chocolate chips.<br><br><b>$5.00</b></p>";
    const img1 = document.createElement("img");
    img1.src = cookieImage;
    img1.alt = "Ellie Elien on Unsplash";
    menuItem1.appendChild(paragraph1);
    menuItem1.appendChild(img1);

    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("menuItem");
    const paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "<p><b>Hot Chocolate</b><br><br>Hot chocolate poured into a small cup, topped with cream and chocolate syrup.<br><br><b>$2.00</b></p>";
    const img2 = document.createElement("img");
    img2.src = hotChocolateImage;
    img2.alt = "Anna Bratiychuk on Unsplash";
    menuItem2.appendChild(paragraph2);
    menuItem2.appendChild(img2);

    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("menuItem");
    const paragraph3 = document.createElement("p");
    paragraph3.innerHTML = "<p><b>Flaming Strawberry Macarons</b><br><br>Don't actually order this.<br><br><br><br><b>$100.00 (and a signed waiver)</b></p>";
    const img3 = document.createElement("img");
    img3.src = skullImage;
    img3.alt = "Ahmad Adly on Unsplash";
    menuItem3.appendChild(paragraph3);
    menuItem3.appendChild(img3);

    content.appendChild(contentHeader);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);

    return content;
}

export default homeModule;