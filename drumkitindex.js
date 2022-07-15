var numdrums = document.querySelectorAll(".drum").length;

for(var i=0; i < numdrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonHTML = this.innerHTML;
        sounds(buttonHTML);
    }
    );
} 

function sounds(key)
{
    switch(key)
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("sounds/kick.mp3");
            audio.play(); 
            break;
        default:
            alert("sound cannot be played.");
            break;
    }
}

document.addEventListener("keypress",function(event) {
    sounds(event.key);
 }
);