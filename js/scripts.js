let body = document.body;
let container = document.getElementById("container");
let colorSite = document.getElementById("color-site");
body.appendChild(colorSite);

const createPixels = () => {
    // 4800
    // 2451 
    for (let i = 0; i < 14000; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("small-divs");
        container.appendChild(newDiv);
    }
};

createPixels();

let pixels = document.getElementsByClassName("small-divs");

// add id to divs 
const createColorSquares = () => {
    let colorsArray = ["pink", "red", "tomato", "orange", "yellow", "MediumSeaGreen", "DodgerBlue", "Violet", "black", "white"];

    let colorSquaresContainer = document.createElement("div");
    colorSquaresContainer.setAttribute("id", "color-squares-container");
    colorSite.appendChild(colorSquaresContainer);

    let chooseColorText = document.createElement("p");
    chooseColorText.innerText = "Choose Your Color"
    colorSquaresContainer.appendChild(chooseColorText)

    let colorContainer = document.createElement("div");
    colorContainer.setAttribute("id", "color-container")
    colorSquaresContainer.appendChild(colorContainer)

    for(let i = 0; i < colorsArray.length; i++){
        let index = i + 1;
        let newSquare = document.createElement("div");
        newSquare.classList.add("my-colors");
        newSquare.classList.add("colors-" + index);
        newSquare.setAttribute("id", colorsArray[i])
        colorContainer.appendChild(newSquare)
    }
}
createColorSquares();


// get color squares  
let myColors = document.querySelectorAll(".my-colors");
let chosenColor = "black"; //default color

// display chosen color 

const createDisplayChosenColor = (color) => {
    // current color text 
    let colorDisplayContainer = document.createElement("div");
    colorDisplayContainer.setAttribute("id", "color-display-container");
    colorSite.appendChild(colorDisplayContainer);

    let currentColorText = document.createElement("p");
    currentColorText.innerText = "Current Color"
    colorDisplayContainer.appendChild(currentColorText)


    let newDisplay = document.createElement('div');
    newDisplay.setAttribute("id", "display-color");
    newDisplay.style.backgroundColor = " " + color;
    colorDisplayContainer.appendChild(newDisplay)
}

createDisplayChosenColor(chosenColor)

let myDisplayedColor = document.getElementById("display-color");

// choose color 

const chooseColor = () => {
    myColors.forEach(color => {
        color.addEventListener('click', function(){
            chosenColor = color.id;
            myDisplayedColor.style.backgroundColor = chosenColor;
        })
    })
}
chooseColor()

const draw = () => {

    for(let i = 0; i < pixels.length; i++){
        pixels[i].addEventListener("mouseover", function(evt){
            if (evt.buttons === 1){
                return pixels[i].style.backgroundColor = " " + chosenColor;
            } else {
                return evt.stopPropagation()
            }
        })
    }
}

container.onmousedown = draw;


// clear button 

const createClearBtn = () => {
    let clearBtn = document.createElement("button")
    clearBtn.setAttribute("id", "clear")
    clearBtn.innerText = "CLEAR"
    body.appendChild(clearBtn)

}
createClearBtn()

const clear = document.getElementById("clear");

clear.addEventListener('click', function(){
    for (let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "transparent"
    }
})