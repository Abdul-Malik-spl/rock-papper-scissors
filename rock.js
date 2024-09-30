
let userinp=document.getElementById("user-inp")
let computerinp=document.getElementById("computer-inp")
let resultbox=document.querySelector(".result-box")
let button1=document.querySelector(".btn-rock")
let button2=document.querySelector(".btn-papper")
let button3=document.querySelector(".btn-scissor")


button1.addEventListener("click",function(){
    //  resultbox.innerHTML="result"
    //  resultbox.style.background="white";
    userinp.style.background="red";
    userinp.value="rock";
    userinp.style.color="white";

   let cchoice=["rock","papper","scissor"];
   cc=Math.floor(Math.random()*3);
   let com=cchoice[cc];
   computerinp.value=com;
   if(userinp.value===computerinp.value){
    resultbox.innerHTML="match draw"
    resultbox.style.background="blue";
    resultbox.style.color="white";
    }
    else if(userinp.value=="rock"&&computerinp.value=="papper")
    {
        resultbox.innerHTML="computer win"
    resultbox.style.background="red";
    resultbox.style.color="white";
    }
    else if(userinp.value=="rock"&&computerinp.value=="scissor")
        {
            resultbox.innerHTML="you win"
        resultbox.style.background="green";
        resultbox.style.color="white";
        }
    // else{
    //     resultbox.innerHTML="you win"
    //     resultbox.style.background="green";
    //     resultbox.style.color="white";
    // }
  
})

button2.addEventListener("click",function(){
    userinp.style.background="skyblue";
    userinp.value="papper";
    userinp.style.color="black";
    
   let cchoice=["rock","papper","scissor"];
   cc=Math.floor(Math.random()*3);
   let com=cchoice[cc];
   computerinp.value=com;
   if(userinp.value===computerinp.value){
    resultbox.innerHTML="match draw"
    resultbox.style.background="blue";
    resultbox.style.color="white";
    }
    else if(userinp.value=="papper"&&computerinp.value=="rock")
    {
        resultbox.innerHTML="you win"
    resultbox.style.background="green";
    resultbox.style.color="white";
    }
    else if(userinp.value=="papper"&&computerinp.value=="scissor"){
        resultbox.innerHTML="computer win"
        resultbox.style.background="red";
        resultbox.style.color="white";
    } 
    // else{
    //     resultbox.innerHTML="you win"
    //     resultbox.style.background="green";
    //     resultbox.style.color="white";
    // }
  
})

button3.addEventListener("click",function(){
    userinp.style.background="purple";
    userinp.value="scissor";
    userinp.style.color="white";
      
   let cchoice=["rock","papper","scissor"];
   cc=Math.floor(Math.random()*3);
   let com=cchoice[cc];
   computerinp.value=com;
   if(userinp.value===computerinp.value){
    resultbox.innerHTML="match draw"
    resultbox.style.background="blue";
    resultbox.style.color="white";
    }
    else if(userinp.value=="scissor"&&computerinp.value=="rock")
    {
        resultbox.innerHTML="computer win"
    resultbox.style.background="red";
    resultbox.style.color="white";
    }
    else if(userinp.value=="scissor"&&computerinp.value=="papper")
        {
            resultbox.innerHTML="you win"
        resultbox.style.background="green";
        resultbox.style.color="white";
        }
    // else{
    //     resultbox.innerHTML="you win"
    //     resultbox.style.background="green";
    //     resultbox.style.color="white";
    // }
  
})