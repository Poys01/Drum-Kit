let numberOfButton = document.querySelectorAll(".drum").length;


for( var i = 0; i<numberOfButton; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 var innerHtml = this.innerHTML;
 
makeSound(innerHtml);
buttonAnimation(innerHtml);
changeColor(innerHtml);
});


document.addEventListener("keydown", function(event){
    var whenkeypress = event.key; 
makeSound(whenkeypress);
buttonAnimation(whenkeypress);
changeColor(whenkeypress);
} )


function makeSound(key) {
 switch (key) {
    case "a":
            var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
        break;
    case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
    case "d":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "f":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
    case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
 }
};

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed"), 100});
}


function changeColor (currentKey2){
    var activeButton2 = document.querySelector("."+currentKey2);
    activeButton2.style.color = "blue";
   
    setTimeout( function() {
        activeButton2.style.color = "#DA0463", 300});
}
    