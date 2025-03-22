class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = ""): (link.style.animation = `navLinkFade 0.5s forwards ${index/7+0.3}s`)
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();    
        }
        return this;
    }
}


document.getElementById('insta').addEventListener('click', function() {
    window.open(this.href, '_blank').focus();
  });

const mobileNavBar = new MobileNavBar(
".mobile-menu",".nav-list",".nav-list li"
);

mobileNavBar.init();
