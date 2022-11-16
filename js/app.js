const imgList = {
    1 : 'img/galeria/racoon.png',
    2 : 'img/galeria/gnar.png',
    3 : 'img/galeria/bota-blender.png',
    4 : 'img/galeria/goku.png'
};

function loadImage(pos) {
    console.log(imgList[pos]);
    document.getElementById("img-preview").setAttribute("src",imgList[pos]);
}