let sliderHeaderTravel = document.getElementById('sliderHeaderTravel');
let sliderHeaderServices = document.getElementById('sliderHeaderServices');
let sliderHeaderAbout = document.getElementById('sliderHeaderAbout');
let sliderHeaderTour = document.getElementById('sliderHeaderTour');
let sliderHeaderHow = document.getElementById('sliderHeaderHow');
let sliderHeaderContact = document.getElementById('sliderHeaderContact');


let sliderHeaderTravelItem = document.getElementById('sliderHeaderItemTravel');
let sliderHeaderServicesItem = document.getElementById('sliderHeaderitemServices');
let sliderHeaderAboutItem = document.getElementById('sliderHeaderitemAbout');
let sliderHeaderTourItem = document.getElementById('sliderHeaderitemTour');
let sliderHeaderHowItem = document.getElementById('sliderHeaderitemHow');
let sliderHeaderContactItem = document.getElementById('sliderHeaderitemContact');

sliderHeaderTravelItem.style.visibility = "visible";

//one
sliderHeaderServices.addEventListener('mouseover', function(){
    sliderHeaderServicesItem.style.visibility = "visible"
    sliderHeaderTravelItem.style.visibility = "hidden"

})
    
sliderHeaderServices.addEventListener('mouseout', function(){
    sliderHeaderServicesItem.style.visibility = "hidden"
    sliderHeaderTravelItem.style.visibility = "visible"

})
    
// two
sliderHeaderAbout.addEventListener('mouseover', function(){
    sliderHeaderAboutItem.style.visibility = "visible"
    sliderHeaderTravelItem.style.visibility = "hidden"

})
    
sliderHeaderAbout.addEventListener('mouseout', function(){
    sliderHeaderAboutItem.style.visibility = "hidden"
    sliderHeaderTravelItem.style.visibility = "visible"

})

//three
sliderHeaderTour.addEventListener('mouseover', function(){
    sliderHeaderTourItem.style.visibility = "visible"
    sliderHeaderTravelItem.style.visibility = "hidden"

})
    
sliderHeaderTour.addEventListener('mouseout', function(){
    sliderHeaderTourItem.style.visibility = "hidden"
    sliderHeaderTravelItem.style.visibility = "visible"

})

//four
sliderHeaderHow.addEventListener('mouseover', function(){
    sliderHeaderHowItem.style.visibility = "visible"
    sliderHeaderTravelItem.style.visibility = "hidden"

})
    
sliderHeaderHow.addEventListener('mouseout', function(){
    sliderHeaderHowItem.style.visibility = "hidden"
    sliderHeaderTravelItem.style.visibility = "visible"

})
//five
sliderHeaderContact.addEventListener('mouseover', function(){
    sliderHeaderContactItem.style.visibility = "visible"
    sliderHeaderTravelItem.style.visibility = "hidden"

})
    
sliderHeaderContact.addEventListener('mouseout', function(){
    sliderHeaderContactItem.style.visibility = "hidden"
    sliderHeaderTravelItem.style.visibility = "visible"

})