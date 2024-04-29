let cerrar = document.querySelectorAll(".close");
cerrar.forEach(function (tonto) {
  tonto.addEventListener("click", function (event) {
    event.preventDefault();
    let content = document.querySelector(".content");
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      history.back();
      console.log("hola")
    }, 900);

    return false;
  });
});
/*
hola
*/

