var i = 0;
var txt = 'Nonopichy';
var speed = 150;

function typeWriter() {
if (i < txt.length) {
var c = document.getElementsByClassName("post-title")[0];
c.innerHTML += txt.charAt(i);
if(i==1){
var k = document.getElementById("im");
k.style.visibility = "visible";
k.style.opacity = 1;
c.style.visibility = "visible";
c.style.opacity = 1;
}
i++;
setTimeout(typeWriter, speed);
}
}
typeWriter();