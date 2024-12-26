class MobileNavbar {
  constructor() {
    // Seleciona os elementos do DOM
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.navList = document.querySelector(".nav-list");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.activeClass = "active";

    // Garante que o 'this' no handleClick se refira à instância da classe
    this.handleClick = this.handleClick.bind(this);
  }

  // Anima os links da navegação
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `z-index: 1 navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  // Manipula o clique no menu mobile
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  // Adiciona o evento de clique ao menu mobile
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Inicializa o menu mobile
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

// Cria uma nova instância do MobileNavbar e inicializa
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
