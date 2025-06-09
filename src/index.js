function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-output", {
    strings: ["Purple petals sway"],
    autoStart: true,
  });
}

let poemForm = document.querySelector("#poem-input");
poemForm.addEventListener("submit", generatePoem);
