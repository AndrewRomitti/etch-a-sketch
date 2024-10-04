const mainContainer = document.querySelector(".main-container");
const btn = document.querySelector(".btn");

function createGrid(dim){
    if(document.querySelector(".main-container").innerHTML != ""){
        mainContainer.querySelectorAll(".container").forEach(element => element.remove());
    }

    for(let i = 0; i<dim;i++){
        const container = document.createElement("div");
        container.classList.add("container");
        mainContainer.appendChild(container);
        for(let j = 0; j<dim; j++){
            const div = document.createElement("div");
            div.setAttribute("style","border-style:solid","border:0px","border-color:black");
            div.style.height = (960/(dim*2)).toString()+"px";
            div.style.width = (960/(dim*2)).toString()+"px";
            container.appendChild(div);
            div.addEventListener("mouseover", () => {
                div.style.transition = "background-color 0s";
                const rgb = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
                div.style.backgroundColor = rgb;
            })
            div.addEventListener("mouseout", () => {
                div.style.transition = "background-color 5s ease";
                div.style.backgroundColor = "white";
            })
        }
    }
}

createGrid(16);
btn.addEventListener("click", () => {
    let new_dim = prompt("What would you like the new grid size to be?");
    if(new_dim && new_dim<100){
        createGrid(new_dim);
    }
    else{
        console.log("Error: didn't properly input in range of 1-100");
    }
})






