const galleryConatiner = document.querySelector('.img-container');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
// console.log(galleryConatiner)

// init
let x = 0; 
let timer;
btnPrev.addEventListener('click', () =>{
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

btnNext.addEventListener('click', () =>{
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});
// change style
function updateGallery() {
    galleryConatiner.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(()=> {
        x = x + 45;
        updateGallery();
    }, 3000)
}
updateGallery();