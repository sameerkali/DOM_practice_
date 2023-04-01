window.onload = function() {
    main();
}

function main() {
     const body = document.getElementById("body");
     const btn = document.getElementById("btn");

    btn.addEventListener('click', function() {
        const bgColor = generateRGBcolor();
        body.style.backgroundColor = bgColor;
        console.log(bgColor)
    });
}


function generateRGBcolor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}
