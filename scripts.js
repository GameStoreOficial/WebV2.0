const bars = document.getElementById("bars");
const leftMenu = document.querySelector(".left-menu");
const iconSearch = document.getElementById("icon-search");
const search = document.getElementById("search");
const contentIconSearch = document.getElementById("content-icon-search");
const logo = document.querySelector(".logo");
const contentSearch = document.querySelector(".content-search");
const categoria = document.querySelector(".categoria")
const subCategoria = document.querySelector(".sub-categoria")
const iconCategoria = document.getElementById("icon-categoria")
const productora = document.querySelector(".productora")
const subProductora = document.querySelector(".sub-productora")
const iconProductora = document.getElementById("icon-productora")
const iconCategorias = document.getElementById("icon-categorias");
const iconProductoras = document.getElementById("icon-productoras");
const MenuAccount = document.getElementById("menu-account");
const account = document.getElementById("account");
let ALM;
let AC;
let AP;
let AMA;

bars.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!ALM) {
        leftMenu.style.transform = "translateX(0px)";
        bars.className = "fa-solid fa-xmark";
    }

    else {
        leftMenu.style.transform = "translateX(-300px)";
        bars.className = "fa-solid fa-bars";
    }

    ALM = !ALM
});

document.addEventListener("click", function (event) {
    if (!leftMenu.contains(event.target) && !bars.contains(event.target)) {
        leftMenu.style.transform = "translateX(-300px)";
        bars.className = "fa-solid fa-bars";
        ALM = !ALM;
    }
});

setInterval(() => {
    if (window.innerWidth <= 665) {
        contentIconSearch.addEventListener("click", function (event) {
            event.stopPropagation();
            search.style.display = "block";
            search.style.width = "85%"
            contentIconSearch.style.backgroundColor = "rgba(36, 36, 36, 0.925)";
            contentIconSearch.style.transform = "translateX(-14px)";
            logo.style.display = "none";
            search.focus();
        })
    };
}, 0);


if (window.innerWidth <= 665) {
    document.addEventListener("click", function (event) {
        if (!contentSearch.contains(event.target)) {
            search.style.display = "none";
            contentIconSearch.style.backgroundColor = "";
            contentIconSearch.style.transform = "translateX(-13px)";
            logo.style.display = "block";
            contentSearch.style.justifyContent = "end";
        }
    })
}

categoria.addEventListener("click", function () {
    if (!AC) {
        subCategoria.style.maxHeight = "1000px"
        iconCategoria.style.transform = "rotate(180deg)"
    }

    else {
        subCategoria.style.maxHeight = "0px"
        iconCategoria.style.transform = "rotate(0deg)"
    }

    AC = !AC
})

productora.addEventListener("click", function () {
    if (!AP) {
        subProductora.style.maxHeight = "1000px"
        iconProductora.style.transform = "rotate(180deg)"
    }

    else {
        subProductora.style.maxHeight = "0px"
        iconProductora.style.transform = "rotate(0deg)"
    }

    AP = !AP
})

account.addEventListener("click", function(){
    if (!AMA) {
        MenuAccount.style.display = "block";
        MenuAccount.style.opacity = 0
        setTimeout(() => {
            MenuAccount.style.opacity = 1
        }, 0);
    }

    else{
        MenuAccount.style.opacity = 0
        setTimeout(() => {
            MenuAccount.style.display = "none";
        }, 300);
    }

    AMA = !AMA
})

document.addEventListener("click", function(e){
    if (!MenuAccount.contains(e.target) && !account.contains(e.target)) {
            MenuAccount.style.opacity = 0
            setTimeout(() => {
                MenuAccount.style.display = "none";
            }, 300);
        AMA = !AMA
    }
})