const images = ["b1.jpg", "b2.jpg","b3.jpg","b4.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.classList = "bgimg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);