"use strict";

let avatar = document.getElementById("avatar")
let name = document.getElementById("name")
let desc = document.getElementById("description")
let toggleBtn = document.getElementById("toggle-btn")

toggleBtn.addEventListener("click", function(){
    
    // document.body.classList.remove("hero");
    // document.body.classList.add("villain");
    
    let isHero = document.body.classList.contains("hero");
    if (isHero) {
        document.body.classList.replace("hero", "villain");
        name.textContent = "Invisible Villain";
        desc.textContent = "Tryb Villain";
        toggleBtn.textContent = "Wróć do bohatera"
        avatar.src = "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=iv";
        avatar.style.borderColor = "#5e1a6e"
        toggleBtn.style.backgroundColor = "#5e1a6e"
    }
    else {
        document.body.classList.replace("villain", "hero");
        name.textContent = "Hero";
        desc.textContent = "Tryb Hero";
        avatar.src = "https://api.dicebear.com/10.x/bottts-neutral/svg?seed=h";
        avatar.style.borderColor = "#244f45"
        toggleBtn.style.backgroundColor = "#244f45"
        toggleBtn.textContent = "Zmień tryb"
    }
});