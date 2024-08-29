const canvas = document.getElementById("signature-pad");  
const clearButton = document.getElementById("clr-btn");
const saveButton = document.getElementById("save-btn");
const ctx = canvas.getContext("2d");
let drawing = false;
let prevX = 0;
let prevY = 0;
let penclr = "#000"
let bgclr = "#ffffff" 
var fsize = 2;
canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    prevX = e.clientX - canvas.getBoundingClientRect().left;
    prevY = e.clientY - canvas.getBoundingClientRect().top;
});
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    draw(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});
canvas.addEventListener("mouseup", () => {
    drawing = false;
});
canvas.addEventListener("mouseleave", () => {
    drawing = false;
});

// pencolor function------------------------------------
var pen = document.getElementById("pen-clr")
pen.addEventListener("change",()=>{
    penclr = pen.value;
    console.log(penclr);
})


var bg = document.getElementById("bg-clr")
bg.addEventListener("change",()=>{
    bgclr = bg.value;
    console.log(bgclr);
    
    canvas.style.backgroundColor = bgclr;
})




// Font size function -----------------------------

var fontsize = document.getElementById("f-size")
fontsize.addEventListener("change",()=>{
    fsize = fontsize.value;
})



function draw(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = penclr;
    ctx.lineWidth = fsize;
    ctx.lineJoin = "round";
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    prevX = x;
    prevY = y;
}
clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
saveButton.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "signature.png";
    a.click();
});


