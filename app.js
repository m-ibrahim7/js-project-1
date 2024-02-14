let apple= document.querySelectorAll('.apple')
function xyz(e){
    apple.forEach((elm)=>{
        elm.style.display="none";
    })
    if(e.target.value=="all"){
        apple.forEach((elm)=>{
            elm.style.display="block";
        })
    }
    else{
        let a = document.querySelectorAll(`.${e.target.value}`);
        a.forEach((elm)=>{
            elm.style.display = "block"
        })
    }
}