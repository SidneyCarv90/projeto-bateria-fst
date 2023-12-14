const drumPad = document.querySelectorAll(".drum")

for (let i = 0; i < drumPad.length; i++) {
    drumPad[i].addEventListener("click", function(){
        const teclaPressionada = drumPad[i].innerHTML
        console.log(`Clicou no ${teclaPressionada}`);
    })
}