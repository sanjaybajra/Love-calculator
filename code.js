let btn=document.querySelector("#btn");
let input1=document.querySelector("#boy input");
let input2=document.querySelector("#girl input");
let valueofLove=document.querySelector("#love #calc");
let str="";
btn.addEventListener("click",function(e){
    e.preventDefault();
if(input1.value,input2.value===str){
    valueofLove.textContent="Please Enter Your Name First!";
}else{
    let value=Math.floor(Math.random()*100);
    valueofLove.textContent=value+"%";
    valueofLove.style.backgroundImage="./image/heart2.png";
}
input2.value="";
input1.value="";

})
