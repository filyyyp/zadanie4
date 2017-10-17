
    var images = JSON.parse(p);
    var gallery= document.getElementById("gallery");
    var lightbox = document.getElementById("lightboxId");
    var lightboxImage = document.getElementById("imglight");
    var nextButton = document.getElementById("next");
    var previousButton = document.getElementById("previous");
    var playstopButton = document.getElementById("play");
    var nadpisLightbox = document.getElementById("lightboxNadpisId");
    var popisLightbox = document.getElementById("lightboxPopis");
    var row,casovacSlide;

    for(i=0;i<images.photos.length;i++)
    {

        if(i%3===0)
        {
            console.log("bs");
            row = document.createElement("div");
            row.setAttribute("class","row valign");
        }

        var div = document.createElement("div");
        div.setAttribute("class","col-4 p-15");
        var img = document.createElement("img");
        img.src=images.photos[i].icon;
        img.setAttribute("class","thumbnail border");
        img.setAttribute("onclick","lightboxfun("+i+")");

        div.appendChild(img);
        row.appendChild(div);
        gallery.appendChild(row);
    }


function otvor(zdroj) {
    lightboxImage.src=zdroj;
}

function lightboxfun(id) {
        lightbox.style.display="block";
        lightboxImage.src=images.photos[id].src;
        lightboxImage.setAttribute("id",id);
        setProperties();
        check();
}

function closeLightbox() {
    lightbox.style.display="none";
    clearTimeout(casovacSlide);
    playstopButton.value="play";

}

function nextImage() {
    lightboxImage.src=images.photos[(++(lightboxImage.id))].src;
    setProperties();
    check();
}

function previousImage() {
    lightboxImage.src=images.photos[(--(lightboxImage.id))].src;
    setProperties();
    check();
    console.log(lightboxImage.id);
}

function check() {
    if(lightboxImage.id>0)
        previousButton.disabled=false;
    else
        previousButton.disabled=true;

    dlzka=images.photos.length;
    dlzka--;
    if(parseInt(lightboxImage.id)<dlzka)
        nextButton.disabled=false;
    else
        nextButton.disabled=true;
}

function playstop() {
        if(playstopButton.value==="play")
        {
            playstopButton.value="stop";
            slideShow();
        }
        else{
            playstopButton.value="play";
            clearTimeout(casovacSlide);
        }

}

function slideShow() {
    dlzka=images.photos.length;
    dlzka--;
    if(parseInt(lightboxImage.id)<dlzka)
    {
        nextImage();
        casovacSlide=setTimeout(slideShow,2000);
    }
    else
        playstopButton.value="play";
}

function setProperties() {
    nadpisLightbox.innerHTML=images.photos[lightboxImage.id].title;
    popisLightbox.innerHTML=images.photos[lightboxImage.id].description;

}