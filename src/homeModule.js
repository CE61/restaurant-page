import myImage from "./mae-mu-kID9sxbJ3BQ-unsplash.jpg";

const homeModule = ()=>{
    const content = document.createElement("div");
    content.id = "content";

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.innerHTML = "<span>Best in the business!</span>";

    const section1 = document.createElement("div");
    section1.classList.add("section1");
    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "It\'s no joke\; Grandma truly does have the best pastry-making skills in this whole town! Try her double chocolate chip cookies or her flaming, strawberry macarons. Careful though, the macarons aren't just piping hot, they're literally on <span class=\"fire\">fire!</span>";
    const img1 = document.createElement("img");
    img1.src = myImage;
    img1.alt = "Mae mu on Unsplash";
    section1.appendChild(paragraph1);
    section1.appendChild(img1);

    const section2 = document.createElement("div");
    section2.classList.add("section2");
    const paragraph2_1 = document.createElement("p");
    paragraph2_1.classList.add("section2-header");
    const paragraph2_2 = document.createElement("p");
    paragraph2_2.innerHTML = "Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm";
    section2.appendChild(paragraph2_1);
    section2.appendChild(paragraph2_2);

    const section3 = document.createElement("div");
    section3.classList.add("section3");
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Located in beautiful Fort Myers, Florida, off of Pine Ridge Road! Come and say hello!";
    section3.appendChild(paragraph3);

    content.appendChild(contentHeader);
    content.appendChild(section1);
    content.appendChild(section2);
    content.appendChild(section3);

    return content;
}

export default homeModule;