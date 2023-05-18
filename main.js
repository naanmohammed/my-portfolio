//Mobile Menu Functions
mobile_menu = document.getElementById("mobile_menu");
portfolio_option = document.getElementById("portfolio_menu");
about_option = document.getElementById("about_menu");
contact_option = document.getElementById("contact_menu");

mobile_menu.style.display = "none";

document.getElementById("collapsed_nav").onclick = function() {
    mobile_menu.style.display = "block";
}
document.getElementById("close-btn").onclick = function() {
    mobile_menu.style.display = "none";
}


portfolio_option.onclick = function() {
    mobile_menu.style.display = "none";
    document.getElementById("works").scrollIntoView({behavior: "smooth"});
}

about_option.onclick = function() {
    mobile_menu.style.display = "none";
    document.getElementById("about-myself").scrollIntoView({behavior: "smooth"});
}

contact_option.onclick = function() {
    mobile_menu.style.display = "none";
    document.getElementById("contact-me").scrollIntoView({behavior: "smooth"});
}
//

//Underline Section in view
function isSectionInView(idName) {
    const section = document.getElementById(idName);
    if (section) {
        const rect = section.getBoundingClientRect();
        const sectionVisibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const sectionVisibility = sectionVisibleHeight / (rect.bottom - rect.top);
        return sectionVisibility > 0.3712;
    }
    return false;
}

function handleScroll(){
    if (isSectionInView("works")) {
        document.getElementById("portfolio_menu_dk").style.textDecoration="underline";
        document.getElementById("about_menu_dk").style.textDecoration="none";
        document.getElementById("contact_menu_dk").style.textDecoration="none";
    }
    else if (isSectionInView("about-myself")) {
        document.getElementById("about_menu_dk").style.textDecoration="underline";
        document.getElementById("portfolio_menu_dk").style.textDecoration="none";
        document.getElementById("contact_menu_dk").style.textDecoration="none";
    }

    else if (isSectionInView("contact-me")) {
        document.getElementById("contact_menu_dk").style.textDecoration="underline";
        document.getElementById("about_menu_dk").style.textDecoration="none";
        document.getElementById("portfolio_menu_dk").style.textDecoration="none";
    }

    else {
        document.getElementById("contact_menu_dk").style.textDecoration="none";
        document.getElementById("about_menu_dk").style.textDecoration="none";
        document.getElementById("portfolio_menu_dk").style.textDecoration="none";
    }
}

window.addEventListener("scroll", handleScroll)
//

