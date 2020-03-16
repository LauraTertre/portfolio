// const container = document.querySelector(".container")
// let intLenghtContainer = container.clientHeight

// window.onscroll = function() {move()};
// console.log(document.documentElement.scrollTop);
// console.log(intLenghtContainer);
// var i = 0;
// function move() {
//     if (i == 0) {
//         i = 1;
//         var elem = document.querySelector('.myBar');
//         var id = setInterval(frame, 10);
//         function frame() {
//             if (document.documentElement.scrollTop >= intLenghtContainer) {
//                 clearInterval(id);
//                 i = 0;
//             }
//             else {
//                 console.log("ELSE");
//                 elem.style.width = document.documentElement.scrollTop + "%";
//                 // console.log(document.documentElement.scrollTop);
//                 // console.log(intLenghtContainer);
                
//             }
//         }
//     }
// }
// const container = document.querySelector(".container")
// let intLenghtContainer = container.clientHeight
// const accueil = document.querySelector("#accueil")
// let intLenghtAccueil = accueil.clientHeight

window.onscroll = function() {myFunction()};

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".myBar").style.width = scrolled + "%";
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            Projects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Projects - More information
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// const projectHover = document.querySelector(".project-hover")
// const projectBlockMore = document.querySelector(".project-block-more")
// const projectContentMore = document.querySelector('.project-content-more')

// projectHover.addEventListener('click', () => {
//     projectContentMore.classList.add('open')
//     projectBlockMore.classList.add('open')
// })

const projectHover = document.querySelectorAll(".project-hover")
const projectBlockMore = document.querySelectorAll(".project-block-more")
const projectContentMore = document.querySelector('.project-content-more')

projectHover.forEach((choice, index)=> {
    choice.addEventListener('click', ()=> {
        projectBlockMore.forEach((content)=> {
            content.classList.remove('open')
        })
        projectContentMore.classList.add('open')
        projectBlockMore[index].classList.add('open')
    })
})

const buttonOff = document.querySelectorAll(".buttonOff")

buttonOff.forEach((buttonOffChoice)=> {
    buttonOffChoice.addEventListener('click', () => {
        projectBlockMore.forEach((content)=> {
            content.classList.remove('open')
        })
})
})