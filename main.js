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

/* Dynamically Generate Portfoliio Section */
let works = [
    {
        id:1,
        name: "GDG ADDIS",
        image: "./assets/gdg-addis.png",
        client: "Microverse",
        role: "Front End Dev",
        year: 2023,
        description: "Experience the future of technology at the upcoming GDG Addis event. Our website, crafted with HTML, CSS, and JavaScript, provides a glimpse into the innovative presentations and networking opportunities that await. Join to explore the latest in tech trends, all in one place.",
        techStack:["HTML", "CSS", "JavaScript"],
        liveLink: "https://naanmohammed.github.io/gdg-addis/",
        sourceLink: "https://github.com/naanmohammed/gdg-addis"
    },
    {
        id:2,
        name: "Awesome Books",
        image: "./assets/SnapshootPortfolio.png",
        client: "Microverse",
        role: "Front End Dev",
        year: 2023,
        description: "Discover the ultimate book management experience with our website. Built with HTML, CSS, and JavaScript, it enables you to easily add, remove, and display your book collection. Stay organized and keep track of your literary treasures effortlessly.",
        techStack:["HTML", "CSS", "JavaScript"],
        liveLink: "https://naanmohammed.github.io/ES6-awesome-books",
        sourceLink: "https://github.com/naanmohammed/ES6-awesome-books"
    },
    {
        id:3,
        name: "TodoList",
        image: "./assets/SnapshootPortfolio.png",
        client: "Microverse",
        role: "Front End Dev",
        year: 2023,
        description: "Elevate your productivity with our to-do list app. Crafted with HTML, CSS, and JavaScript, this application empowers you to create, manage, and keep track of your tasks seamlessly. Achieve your goals with ease and stay organized.",
        techStack:["HTML", "CSS", "JavaScript"],
        liveLink: "https://naanmohammed.github.io/todolist-es6-webpack/",
        sourceLink: "https://github.com/naanmohammed/todolist-es6-webpack"
    },
    {
        id:4,
        name: "Leader Board",
        image: "./assets/SnapshootPortfolio.png",
        client: "Microverse",
        role: "Front End Dev",
        year: 2023,
        description: "Join the competition and conquer the leaderboard! Our app, built with HTML, CSS, and JavaScript, lets you track and compare your performance with others. Climb the ranks, celebrate victories, and enjoy healthy competition as you strive for the top spot.",
        techStack:["HTML", "CSS", "JavaScript"],
        liveLink: "http://leaderboard.naan.com/",
        sourceLink: "https://github.com/naanmohammed/Leaderboard"
    },
]

for( let i=0; i<works.length; i++ ){
    const work = document.createElement ("section")
    work.innerHTML =
        `
        <section class="work ${i % 2 === 0 ? 'work-reverse' : ''}">
            <img src = ${works[i].image}>
            <section class="work-description">
                <h3 class="work-title">${works[i].name}</h3>
                <ul class="work-summary">
                    <li class="work-summary-title">${works[i].client}</li>
                    <ul class="work-summary-role-year">
                        <li>${works[i].role}</li>
                        <li>${works[i].year}</li>
                    </ul>
                </ul>
                <p class="work-paragraph">${works[i].description}</p>
                <ul class="tags">
                    ${works[i].techStack.map((tag) => `<li class="tag">${tag}</li>`).join('')}
                </ul>
                <button type="Submit" onclick = "popup(${i})" class="see-project-btn">See Project</a>
            </section>
        </section>
        `


    document.getElementById('works').appendChild(work)
}


/* Popup Section*/

function popup(i) {
    let newpopup = document.createElement('section')
    newpopup.innerHTML =
    `
        <section class="work popup-content">
            <div class="popup-header">
                <h3 class="work-title">${works[i].name}</h3>
                <h3 id="popup-close-btn">X</h3>
            </div>
            <ul class="work-summary">
                <li class="work-summary-title">${works[i].client}</li>
                <ul class="work-summary-role-year">
                    <li>${works[i].role}</li>
                    <li>${works[i].year}</li>
                </ul>
            </ul>
            <img src = ${works[i].image}>
            <section class="work-description popup-description">
                <div class="popup-paragraph">
                    <p class="work-paragraph">${works[i].description}</p>
                </div>
                <div class="popup-btn-tags">
                    <ul class="tags">
                        ${works[i].techStack.map((tag) => `<li class="tag">${tag}</li>`).join('')}
                    </ul>
                    <hr class="popup-hr"/>
                    <div class="btn-group">
                        <a href="${works[i].liveLink}" class="see-project-btn popup-btn"><p>See live</p> <img class="popup-btn-img" src="./assets/see-live.png"/></a>
                        <a href="${works[i].sourceLink}" class="see-project-btn popup-btn"><p>See source</p> <img class="popup-btn-img" src="./assets/github.png"/></a>
                    <div>
                </div>
            </section>
        </section>
    `
    newpopup.style.zIndex = '999';
    popupContainer = document.getElementsByClassName('popup-container')[0];
    document.body.firstElementChild.style.display = 'none';
    popupContainer.style.display = 'flex';
    popupContainer.appendChild(newpopup);
    popupClose = document.getElementById('popup-close-btn')
    popupClose.addEventListener('click', function() {
        popupContainer.removeChild(newpopup);
        popupContainer.style.display = 'none'
    })
}


//form-validation

emailTab = document.getElementById('email');
form = document.querySelector('.contact-form');

function validateForm(event) {
    if (!(emailTab.value === emailTab.value.toLowerCase())) {
        event.preventDefault();
        message = document.createElement('p');
        message.id = 'error-message';
        message.innerHTML = 'Please enter a lowercase email'
        emailTab.parentNode.insertBefore(message, emailTab.nextSibling);
    }
}

form.addEventListener('submit', validateForm);