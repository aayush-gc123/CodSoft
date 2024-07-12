const buttons=document.querySelectorAll("button");
const body=document.querySelector("body")
 let string="";
const display=document.querySelector(".display")
const ArrayBtn=Array.from(buttons);
const mode=document.querySelector(".mode")

ArrayBtn.forEach(AllVar=>{
    
  
 AllVar.addEventListener("click",(event)=>{
    if(event.target.innerHTML=="="){
        string=eval(string)
        display.value=string

    }else if(event.target.innerHTML=="AC"){
        string=""
        display.value=string;
    }
    else if (event.target.innerHTML=="DEL"){
        string=string.substring(0,string.length-1)
        display.value=string;
    }
     else{
        string +=event.target.innerHTML;
        display.value=string;
      
    }


 })
})
const darkOrWhite=()=>{
    
    mode.addEventListener("click",()=>{
       body.classList.toggle("dark")
    //    body.classList.toggle("white")
    })
}
darkOrWhite()