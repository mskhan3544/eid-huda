const openNoteButton = document.querySelector("#openNote");
const noteSection = document.querySelector("#note");
const noteCard = document.querySelector(".note-card");

function addSparkles(origin) {
  for (let index = 0; index < 22; index += 1) {
    const sparkle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 55 + Math.random() * 95;

    sparkle.className = "sparkle";
    sparkle.style.left = `${origin.x}px`;
    sparkle.style.top = `${origin.y}px`;
    sparkle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    sparkle.style.background = index % 3 === 0 ? "#b64f62" : index % 3 === 1 ? "#d0a13e" : "#276d65";

    document.body.append(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
  }
}

openNoteButton?.addEventListener("click", (event) => {
  noteSection?.classList.add("is-open");
  noteCard?.scrollIntoView({ behavior: "smooth", block: "center" });
  addSparkles({ x: event.clientX, y: event.clientY });
});
