let button=document.querySelector("button")
let body=document.querySelector("body")
let color=['green','yellow','red','orange','violet','brown'];
body.style.backgroundColor = 'blue'

button.addEventListener('click',addbf)
function addbf(){
    let colorindex=parseInt(Math.random()*color.length);
    body.style.backgroundColor= color[colorindex];
}