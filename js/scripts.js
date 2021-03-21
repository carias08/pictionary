let container = document.getElementById("container");

const createPixels = () => {
    for (let i = 0; i < 4800; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("small-divs");
        container.appendChild(newDiv);
    }
};
createPixels();

let pixels = document.getElementsByClassName("small-divs");

const draw = () => {
    for(let i = 0; i < pixels.length; i++){
        pixels[i].addEventListener("mouseover", function(evt){
            if (evt.buttons === 1){
                return pixels[i].style.backgroundColor = "black"
            } else {
                return evt.stopPropagation()
            }
        })
    }
}

container.onmousedown = draw;