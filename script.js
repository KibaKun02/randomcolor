let btn1=document.querySelector("button");
let element=document.getElementById("bg");
btn1.addEventListener("click",() =>{
    console.log(randomnum());
    element.style.backgroundColor=randomnum().toString();
}
)

function randomnum(){
    const r =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    const randomcolor=`rgb(${r},+${g},+${b})`;
    return randomcolor;
}
    