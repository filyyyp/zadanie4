
    var images = JSON.parse(p);
    var gallery= document.getElementById("gallery");
    var lightbox = document.getElementById("lightboxId");
    var lightboxImage = document.getElementById("imglight");
    var nextButton = document.getElementById("next");
    var previousButton = document.getElementById("previous");
    var nadpisLightbox = document.getElementById("lightboxNadpisId");


    for(i=0;i<images.photos.length;i++)
    {
        var img = document.createElement("img");
        img.src=images.photos[i].icon;
        img.setAttribute("class","thumbnail");
        img.setAttribute("onclick","lightboxfun("+i+")");
        gallery.appendChild(img);
    }


function otvor(zdroj) {
    lightboxImage.src=zdroj;
}

function lightboxfun(id) {
        lightbox.style.display="block";
        lightboxImage.src=images.photos[id].src;
        lightboxImage.setAttribute("id",id);
        nadpisLightbox.innerHTML=images.photos[id].title;
        check();
}

function closeLightbox() {
    lightbox.style.display="none";

}

function nextImage() {
    lightboxImage.src=images.photos[(++(lightboxImage.id))].src;
    nadpisLightbox.innerHTML=images.photos[lightboxImage.id].title;
    check();
}

function previousImage() {
    lightboxImage.src=images.photos[(--(lightboxImage.id))].src;
    nadpisLightbox.innerHTML=images.photos[lightboxImage.id].title;
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

function slideShow() {
}
/*
var img = document.createElement("img");
        img.src=images.photos[i].icon;
        //img.onclick=otvor(img.src);
        img.setAttribute("onclick","otvor('"+img.src.toString()+"')");
        gallery.appendChild(img);





        var link = document.createElement("a");
        link.setAttribute("href","#img"+i);
        var img = document.createElement("img");
        img.src=images.photos[i].icon;
        img.setAttribute("class","thumbnail");
        link.appendChild(img);
        gallery.appendChild(link);

        var link2 =document.createElement("div");
        //link2.setAttribute("href","#_");
        link2.setAttribute("class","lightbox");
        link2.setAttribute("id","img"+i);
        var img2 = document.createElement("img");
        img2.src=images.photos[i].src;
        link2.appendChild(img2);
        gallery.appendChild(link2);






 for(i=0;i<images.photos.length;i++)
    {
        var link = document.createElement("a");
        link.setAttribute("href","#img"+i);
        var img = document.createElement("img");
        img.src=images.photos[i].icon;
        img.setAttribute("class","thumbnail");
        link.appendChild(img);
        gallery.appendChild(link);

        var link2 =document.createElement("a");
        link2.setAttribute("href","#_");
        link2.setAttribute("class","lightbox");
        link2.setAttribute("id","img"+i);
        var img2 = document.createElement("img");
        img2.src=images.photos[i].src;
        link2.appendChild(img2);
        gallery.appendChild(link2);
    }
 */