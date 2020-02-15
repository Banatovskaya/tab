"use strict";
let info = document.querySelector(".info-header"),
    tab = document.querySelectorAll(".info-header-tab"),
    tabContent = document.querySelectorAll(".info-header-description");

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
    }
};
hideTabContent(1);

function showTabContent(i) {
    tabContent[i].classList.remove("hide");
    tabContent[i].classList.add("show");

};

info.addEventListener("click", function (event) {
    
    for (let i = 0; i < tab.length; i++) {
       
        if (event.target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
        }
    }

});