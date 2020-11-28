(() => {
    const e = document.querySelector(".mobile__burger"),
      t = document.querySelector(".mobile__wrapper"),
      s = document.querySelectorAll(".mobile__burger-rect");
    e.addEventListener("click", function () {
      e.classList.contains("is-active")
        ? (s.forEach((e, t) => {
            e.style.animation = `rect-${t} 1s ease-in-out both`;
          }),
          e.classList.toggle("is-active"),
          t.classList.toggle("is-active"))
        : (s.forEach((e, t) => {
            e.style.animation = `rect-${t + 3} 0.8s ease-out both reverse`;
          }),
          e.classList.toggle("is-active"),
          t.classList.toggle("is-active"));
    });
    const i = document.querySelectorAll(".questions__container-rect"),
      c = document.querySelectorAll(".questions__container-answer"),
      a = document.querySelectorAll(".icon-arrow");
    i.forEach((e, t) => {
      e.addEventListener("click", function () {
        c[t].classList.contains("is-active")
          ? (e.classList.remove("is-active"),
            (c[t].style.maxHeight = 0),
            a[t].classList.remove("is-active"))
          : (e.classList.add("is-active"),
            (c[t].style.maxHeight = c[t].scrollHeight + "px"),
            a[t].classList.add("is-active")),
          c[t].classList.toggle("is-active");
      });
    });
  })();
  