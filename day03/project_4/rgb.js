window.onload = function() {
    main();
}

let div = null

function main() {
     const body = document.getElementById("body");
     const btn = document.getElementById("btn");
     const text = document.getElementById("text");
     const copy = document.getElementById('copy-btn')

    btn.addEventListener('click', function() {
        const bgColor = generateRGBcolor();
        body.style.backgroundColor =  bgColor;
        text.innerHTML = bgColor;
        text.style.color = "black";
        text.style.backgroundColor = bgColor;
        text.style.border = "solid  .5px";

        console.log(bgColor)
    });

    copy.addEventListener('click', function(){
        navigator.clipboard.writeText(text.value)
        text.style.backgroundColor = "green";
        text.style.border = "solid green .5px";
        text.style.color = "white";
        //for remove toast message if user press multiple times copy-btn    
        if(div !== null){
            div.remove()
            div = null
        }
        generateTostMessage(`${text.value} copied`)
    })
}


function generateRGBcolor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


function generateTostMessage(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')

    div.addEventListener('animationend', function(){
        div.remove();
        div = null
    })
    
})

    document.body.appendChild(div);
 }