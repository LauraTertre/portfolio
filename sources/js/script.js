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