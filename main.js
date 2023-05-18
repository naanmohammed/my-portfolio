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

