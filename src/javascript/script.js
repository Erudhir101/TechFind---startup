$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
  const sections = $("section");
  const navItems = $(".nav-item");

  $(".btn-contact").on("click", function () {
    const email = "exemplo@dominio.com"; // Altere para o e-mail do destinatário
    const subject = "Interesse em Contratar os Serviços da TechFind";
    const body =
      `Olá,\n\n` +
      `Estou entrando em contato pois tenho interesse em contratar os serviços da TechFind.\n\n` +
      `Gostaríamos de saber mais sobre as soluções oferecidas e como elas podem atender às nossas necessidades.\n\n` +
      `Por favor, entre em contato para discutirmos mais detalhes.\n\n` +
      `Agradeço pela atenção.\n\n` +
      `Atenciosamente,\n`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });

  $("a.scroll-link").click(function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    if (target == "#home") $("html, body").animate({ scrollTop: 0 }, 1000);
    else
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - $("header").outerHeight(),
        },
        1000,
      );
  });

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() + header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top;
      const sectionBottom = sectionTop + section.outerHeight();
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  ScrollReveal().reveal("#home", {
    origin: "top",
    duration: 2000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal("#menu", {
    origin: "right",
    duration: 2000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal("#testimonials", {
    origin: "left",
    duration: 2000,
    distance: "40%",
    reset: true,
  });

  ScrollReveal().reveal("#aboutus", {
    origin: "left",
    duration: 2000,
    distance: "40%",
    reset: true,
  });

  ScrollReveal().reveal("#planos", {
    origin: "right",
    duration: 2000,
    distance: "40%",
    reset: true,
  });
});
