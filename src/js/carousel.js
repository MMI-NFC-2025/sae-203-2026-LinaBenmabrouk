const partners = [
  "/src/assets/icons/partenaire1.svg",
  "/src/assets/icons/partenaire2.svg",
  "/src/assets/icons/partenaire3.svg"
];

const partnerImage = document.querySelector("#partner-image");
const prevButton = document.querySelector("#partner-prev");
const nextButton = document.querySelector("#partner-next");

let current = 0;

function updatePartner(index) {
  if (!partnerImage) return;

  partnerImage.style.opacity = "0";

  setTimeout(() => {
    partnerImage.src = partners[index];
    partnerImage.style.opacity = "1";
  }, 200);
}

prevButton?.addEventListener("click", () => {
  current = (current - 1 + partners.length) % partners.length;
  updatePartner(current);
});

nextButton?.addEventListener("click", () => {
  current = (current + 1) % partners.length;
  updatePartner(current);
});