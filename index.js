var sound=["./sounds/crash.mp3","./sounds/kick-bass.mp3","./sounds/snare.mp3","./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3"]
for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    
    document.querySelectorAll("button")[index].addEventListener("click",function () {
        new Audio(sound[index]).play();
       //this.style.border="10px solid white";
       blink(this.innerHTML);
    })
    
}

document.addEventListener("keydown",function (event) {
    switch (event.key) {
        case "w":
            new Audio(sound[0]).play();
            blink(event.key);
            break;
        case "a":
            new Audio(sound[1]).play();
            blink(event.key);
            break;
        case "s":
            new Audio(sound[2]).play();
            blink(event.key);
            break;
        case "d":
            new Audio(sound[3]).play();
            blink(event.key);
            break;
        case "j":
            new Audio(sound[4]).play();
            blink(event.key);
            break;
        case "k":
            new Audio(sound[5]).play();
            blink(event.key);
            break;
        case "l":
            new Audio(sound[6]).play();
            blink(event.key);
            break;
        default: 
            console.log(event);
            break;
    }
})

function blink(key){
  document.querySelector("."+key+"").classList.add("pressed");
  setTimeout(function () {
    document.querySelector("."+key+"").classList.remove("pressed");
  },100); 
}
