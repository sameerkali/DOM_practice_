window.onload = function() {
    main();
}

function main() {
     const body = document.getElementById("body");
     const btn = document.getElementById("btn");
     const text = document.getElementById("text");
     const copy = document.getElementById('copy-btn')

    btn.addEventListener('click', function() {
        const bgColor = generateRGBcolor();
        body.style.backgroundColor = bgColor;
        text.innerHTML = bgColor;
        text.style.color = "black";
        text.style.backgroundColor = bgColor;

        console.log(bgColor)
    });

    copy.addEventListener('click', function(){
        navigator.clipboard.writeText(text.value)
        text.style.backgroundColor = "green";
        text.style.color = "white";
    })
}


function generateRGBcolor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
