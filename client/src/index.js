import './styles/main.scss'

document.addEventListener("DOMContentLoaded", function () {
  let h = document.querySelector('.zen-horizon')
  if (h)
    setTimeout(function () {
      h.classList.add("show")
    }, 620)
});
