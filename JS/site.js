function toggleMenu(){
    let button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    let menu = document.getElementsByClassName('js-menu');
    if(menu.length > 0){
    menu[0].classList.toggle("active");
    }
}

function fixPhotoOnScroll(){
    var photo=document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 :photo.style.marginTop = ""
}

window.addEventListener("scroll",fixPhotoOnScroll,false);

function showImage(image){
    let newImage=document.createElement('img');
    newImage.src=image.src;
    newImage.removeAttribute('onclick');
    let modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    let existinImage = modal.querySelector('img');
    if(existinImage)
    {
        modal.removeChild(existinImage);
    }
    modal.appendChild(newImage);
}

function cerrarModal(){
    let modal = document.getElementById('preview');
    modal.classList.remove('showModal')

}