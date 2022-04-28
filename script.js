// const panels = document.querySelectorAll(".panel")

// panels.forEach((panel) => {
//     panel.addEventListener("click", () => {
//         removeActiveClasses()
//         panel.classList.add("active")
//     });
// })

// function removeActiveClasses(){
//     panels.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }
const panels = document.querySelectorAll(".panel");

panels.forEach(pan => {
    pan.addEventListener("click", () =>{
        removeActiveClass()
        pan.classList.add("active")
    })
})
function removeActiveClass(){
    panels.forEach(pan => {
        pan.classList.remove("active");
    })
}