let container = document.getElementById("container");

const createPixels = () => {
    for (let i = 0; i < 4800; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("small-divs");
        container.appendChild(newDiv);
    }
};
createPixels();