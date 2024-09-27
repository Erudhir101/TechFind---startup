$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(".btn-contact").on("click", function () {
    const email = "contato.techfind@outlook.com";
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
          scrollTop: $(target).offset().top - $("header").outerHeight() + 8,
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
      header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
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
    distance: "40%",
  });

  ScrollReveal().reveal("#menu", {
    origin: "right",
    duration: 2000,
    distance: "40%",
  });

  ScrollReveal().reveal("#aboutus", {
    origin: "left",
    duration: 2000,
    distance: "40%",
  });

  ScrollReveal().reveal("#planos", {
    origin: "top",
    duration: 2000,
    distance: "40%",
  });

  ScrollReveal().reveal("#support", {
    origin: "left",
    duration: 2000,
    distance: "40%",
    });
  
  $("#cadastro-btn").on("click", function () {
    $("#popup").fadeIn();
    $("#popup-overlay").fadeIn();
  });

  $("#close-cadastro-popup, #popup-overlay").on("click", function () {
    $("#popup").fadeOut();
    $("#popup-overlay").fadeOut();
  });

  $("#pf-btn").on("click", function () {
    $("#form-pf").removeClass("hidden");
    $("#form-pj").addClass("hidden");
  });

  $("#pj-btn").on("click", function () {
    $("#form-pj").removeClass("hidden");
    $("#form-pf").addClass("hidden");
  });

  function verificarForcaSenha(senha, strengthIndicator) {
    let strength = 0;

    if (senha.length >= 10) strength++;
    if (/[A-Z]/.test(senha)) strength++;
    if (/[0-9]/.test(senha)) strength++;
    if (/[\W_]/.test(senha)) strength++;

    strengthIndicator.removeClass(
      "strength-weak strength-medium strength-strong",
    );

    if (strength === 1) {
      strengthIndicator.css("width", "33%").addClass("strength-weak");
      $("#senha-strength-label").text("Força da Senha: Senha Fraca");
      $("#senha-strength-label-pj").text("Força da Senha: Senha Fraca");
    } else if (strength === 2) {
      strengthIndicator.css("width", "66%").addClass("strength-medium");
      $("#senha-strength-label").text("Força da Senha: Senha Normal");
      $("#senha-strength-label-pj").text("Força da Senha: Senha Normal");
    } else if (strength >= 3) {
      strengthIndicator.css("width", "100%").addClass("strength-strong");
      $("#senha-strength-label").text("Força da Senha: Senha Forte");
      $("#senha-strength-label-pj").text("Força da Senha: Senha Forte");
    } else {
      strengthIndicator.css("width", "0");
      $("#senha-strength-label").text("Força da Senha: ");
      $("#senha-strength-label-pj").text("Força da Senha:");
    }
  }
  $("#senha-pf").on("input", function () {
    let senha = $(this).val();
    verificarForcaSenha(
      senha,
      $("#senha-strength-bar-pf"),
      $("#senha-strength-label"),
    );
  });

  $("#senha-pj").on("input", function () {
    let senha = $(this).val();
    verificarForcaSenha(
      senha,
      $("#senha-strength-bar-pj"),
      $("#senha-strength-label-pj"),
    );
  });

  $("form").on("submit", function (e) {
    const strengthPf = $("#senha-strength-bar-pf").width();
    const strengthPj = $("#senha-strength-bar-pj").width();

    if (
      (strengthPf < 66 && $("#senha-pf").is(":visible")) ||
      (strengthPj < 66 && $("#senha-pj").is(":visible"))
    ) {
      alert("A senha deve ser forte. Tente novamente.");
      e.preventDefault();
    } else {
      alert("Cadastro concluído com sucesso!");
      $("#popup").fadeOut();
      $("#popup-overlay").fadeOut();
    }
  });

  $("#data-nasc").mask("00/00/0000");
  $("#telefone-pf").mask("(00) 00000-0000");
  $("#telefone-pj").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cnpj").mask("00.000.000/0000-00");
  $("#data-abertura").mask("00/00/0000");
});

$("#login-btn").on("click", function () {
  $("#login-popup").fadeIn();
  $("#login-popup-overlay").fadeIn();
});

$("#login-popup-overlay").on("click", function () {
  $("#login-popup").fadeOut();
  $("#login-popup-overlay").fadeOut();
});

$("#login-popup-overlay").on("click", function () {
  $("#login-popup").fadeOut();
  $("#login-popup-overlay").fadeOut();
});

$("#close-login-popup, #login-popup-overlay").on("click", function () {
  $("#login-popup").fadeOut();
  $("#login-popup-overlay").fadeOut();
});

$("#login-form").on("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const login = $("#login-username").val();
  const password = $("#login-password").val();

  // Validação mínima
  if (password.length < 10) {
    alert("A senha deve ter no mínimo 10 caracteres.");
  } else {
    alert(`Login bem-sucedido com: ${login}`);
    $("#login-popup").fadeOut();
    $("#login-popup-overlay").fadeOut();
  }
});

// "Esqueci minha senha" (aqui você pode acionar uma lógica de recuperação de senha)
$("#forgot-password").on("click", function () {
  alert("Função de recuperação de senha não implementada.");
});

// "Ainda não estou cadastrado" - Abre o pop-up de cadastro
$("#signup-btn").on("click", function () {
  $("#login-popup").fadeOut();
  $("#login-popup-overlay").fadeOut();
  $("#popup").fadeIn(); // Abre o pop-up de cadastro
  $("#popup-overlay").fadeIn(); // Abre o overlay do cadastro
});

