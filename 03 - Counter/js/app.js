const elTextarea = document.querySelector(".wrapper__textarea");
const elCounter = document.querySelector(".total__count");


function conterLength() {
     const text = elTextarea.value;
     const textLenght = elTextarea.value.lenght

     console.log(textLenght);

     elCounter.textContent = `${textLenght}`;
}

conterLength()