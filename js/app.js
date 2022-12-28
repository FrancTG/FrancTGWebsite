const imgList = {
    1 : 'img/galeria/racoon.png',
    2 : 'img/galeria/gnar.png',
    3 : 'img/galeria/bota-blender.png',
    4 : 'img/galeria/goku.png'
};

var previousImg = 2;

function loadImage(pos) {
    document.getElementById("img-preview").setAttribute("src",imgList[pos]);
    document.getElementsByClassName("image-item").item(pos-1).className = 'image-item image-item-active';
    document.getElementsByClassName("image-item").item(previousImg-1).className = 'image-item';
    previousImg = pos;
}

function galleryScrollRight() {
        document.getElementsByClassName("playlists").item(0).scrollTo({
            top: 0,
            left: document.getElementsByClassName("playlists").item(0).scrollLeft + 365,
            behavior: 'smooth'
          });
    
}

function galleryScrollLeft() {
    document.getElementsByClassName("playlists").item(0).scrollTo({
        top: 0,
        left: document.getElementsByClassName("playlists").item(0).scrollLeft - 365,
        behavior: 'smooth'
      });
}