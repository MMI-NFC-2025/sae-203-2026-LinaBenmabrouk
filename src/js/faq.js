const faq = document.querySelector("#faq");
const buttons = faq.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "+" : "−";
  });
});