//sticky nav//
window.addEventListener("scroll", ()=>{
let navbar = document.querySelector("header")
navbar.classList.toggle("sticky", window.scrollY >0)


})







//toggle classes//

let property = document.getElementsByClassName("property");
let flat = [...property].filter(element => element.classList.contains("flat"))
let villa = [...property].filter(element => element.classList.contains("villa"))
let house = [...property].filter(element => element.classList.contains("house"))

document.getElementById("all-btn").addEventListener("click", ()=> {
  flat[0].classList.add("show");
  flat[1].classList.add("show");
  flat[2].classList.add("show");
  flat[3].classList.add("show");
  villa[0].classList.add("show");
  villa[1].classList.add("show");
  villa[2].classList.add("show");
  villa[3].classList.add("show");
  house[0].classList.add("show");
  house[1].classList.add("show");
  house[2].classList.add("show");
  house[3].classList.add("show");
  })




document.getElementById("flat-btn").addEventListener("click", ()=>{
  flats.forEach(x => x.classList.add("show")); //add "show" class to all flat types
  const nonFlats = property.filter(x => !flat.includes(x));  //find non flats
  nonFlats.forEach(x => x.classList.remove("show"));  //remove "show" class from anything not a flat
})

document.getElementById('villa-btn').addEventListener("click", ()=> {
  flat[0].classList.remove("show");
  flat[1].classList.remove("show");
  flat[2].classList.remove("show");
  flat[3].classList.remove("show");
  villa[0].classList.add("show");
  villa[1].classList.add("show");
  villa[2].classList.add("show");
  villa[3].classList.add("show");
  house[0].classList.remove("show");
  house[1].classList.remove("show");
  house[2].classList.remove("show");
  house[3].classList.remove("show");
})
document.getElementById('house-btn').addEventListener("click", ()=> {
  flat[0].classList.remove("show");
  flat[1].classList.remove("show");
  flat[2].classList.remove("show");
  flat[3].classList.remove("show");
  villa[0].classList.remove("show");
  villa[1].classList.remove("show");
  villa[2].classList.remove("show");
  villa[3].classList.remove("show");
  house[0].classList.add("show");
  house[1].classList.add("show");
  house[2].classList.add("show");
  house[3].classList.add("show");
})


document.getElementById('reset-btn').addEventListener("click", ()=> {
  flat[0].classList.remove("show");
  flat[1].classList.remove("show");
  flat[2].classList.remove("show");
  flat[3].classList.remove("show");
  villa[0].classList.remove("show");
  villa[1].classList.remove("show");
  villa[2].classList.remove("show");
  villa[3].classList.remove("show");
  house[0].classList.remove("show");
  house[1].classList.remove("show");
  house[2].classList.remove("show");
  house[3].classList.remove("show");
})
