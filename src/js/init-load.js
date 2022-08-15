import homeImg from "../assets/homebg.jpg";
export function initialLoad() {
    
    const content = document.querySelector('#content');
    content.replaceChildren();

    const imgDiv = document.createElement('div');
    content.appendChild(imgDiv);

    const presImg = document.createElement('img');
    presImg.classList.add("pres-img");
    presImg.src = homeImg;
    imgDiv.appendChild(presImg);

    
    const textDiv = document.createElement('div');
    textDiv.classList.add('text-div');
    content.appendChild(textDiv);

    const heading = document.createElement('h1');
    heading.textContent = ("welcome to this totally real coffee shop! ");
    textDiv.appendChild(heading);

    const smallText = document.createElement('p');
    smallText.textContent = ("delicious and nutritious café (i have no idea what im talking about)");
    textDiv.appendChild(smallText);

    const startButton = document.createElement('button');
    startButton.textContent = ("book a table");
    textDiv.appendChild(startButton);


};
