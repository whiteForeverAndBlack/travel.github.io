let bar = document.getElementById('menuBar');
let closeBarIcon = document.getElementById('closeBar');
let menu = document.getElementById('menuItemMiddle');
let section = document.getElementById('section__slide__travelGuide');

//sites

let headerItem = document.getElementById('header');
let footerItem = document.getElementById('footer');
let sectionTeamItem = document.getElementById('sectionTeam');
let sectionWhereItem = document.getElementById('sectionWhere');
let sectionWhereLeadItem = document.getElementById('sectionWhereLead')
bar.addEventListener('click', function(){
    bar.style.display = "none";
    closeBarIcon.style.display = "block";
    menu.style.display = "inline-block";
    nav.style.display = "block";
    section.style.height = "80vh";
    menu.style.padding = "2vh 0";

    //sites
    headerItem.style.display = "none"
    footerItem.style.display = "none"
    sectionTeamItem.style.display = "none"
    sectionWhereItem.style.display = "none"
    sectionWhereLeadItem.style.display = "none"
})

closeBarIcon.addEventListener('click', function (){
    bar.style.display = "block";
    closeBarIcon.style.display = "none";
    menu.style.display = "none";
    nav.style.display = "block";
    section.style.height = "0";
    menu.style.padding = "0";

    //sites
    headerItem.style.display = "block"
    footerItem.style.display = "block"
    sectionTeamItem.style.display = "block"
    sectionWhereItem.style.display = "block"
    sectionWhereLeadItem.style.display = "block"

})