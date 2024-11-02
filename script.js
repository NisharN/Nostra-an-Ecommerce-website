var close=document.getElementById("closead");
var ad=document.getElementById("ad");
close.addEventListener("click",function(){
    ad.style.display="none";
})
currentSlideID=1;
sliderElement=document.getElementById("slider");
totalSlides=sliderElement.childElementCount;
function showSlide(){
    slides=document.getElementById("slider").getElementsByTagName('li')
    for(let i=0; i<totalSlides;i++){
        const element =slides[i];
        if(i+1==currentSlideID){
            element.classList.remove("hidden")
    }
    else
    {
        element.classList.add("hidden")
    }

}
}

function next(){
    if(currentSlideID<totalSlides){
        currentSlideID++;
    }
        else{
            currentSlideID=1;

        }
        showSlide()
    }


function prev(){
    if(currentSlideID>1){
        currentSlideID--;
    }
    else{
        currentSlideID=totalSlides;
    }
        showSlide()
    }



setInterval(next,3000);
showSlide();

