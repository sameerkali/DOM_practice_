window.onload = function() {
    main();
}

function main() {
     const body = document.getElementById("body");
     const btn = document.getElementById("btn");
     const text = document.getElementById("text");

    btn.addEventListener('click', function() {
        const bgColor = generateRGBcolor();
        body.style.backgroundColor = bgColor;
        text.innerHTML = bgColor;
        console.log(bgColor)
    });
}


function generateRGBcolor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
