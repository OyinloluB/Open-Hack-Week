document.getElementById("hamB").addEventListener("click", function(e){
 e.preventDefault()
 var hamB = document.getElementById("hamB")
 var nav_ul = document.getElementById("nav_ul")
 console.log(nav_ul)
 var navDisp = getComputedStyle( document.getElementById("nav_ul"), null).display
 if(navDisp == "none"){
  nav_ul.style.display = "flex"
 Array.from(nav_ul.children).forEach(child =>{child.addEventListener("click", ()=>{
   nav_ul.style.display = ""
   hamB.src = "./assets/images/hamB.svg"
  })})
   hamB.src = "./assets/images/hamBx.svg"
 }
 else{
   nav_ul.style.display = ""
   hamB.src = "./assets/images/hamB.svg"
 }
})