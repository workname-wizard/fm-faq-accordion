document.addEventListener("DOMContentLoaded", () => {
  const extenders = document.querySelectorAll(".extender");

  extenders.forEach((extender) => {
    extender.addEventListener("click", () => {
      const questionContainer = extender.parentElement;
      const answer = questionContainer.nextElementSibling;

      const isOpen = extender.classList.contains("open");

      // Schließe alle anderen Antworten
      document.querySelectorAll(".answer").forEach((ans) => {
        if (ans !== answer) {
          ans.style.maxHeight = null;
          ans.previousElementSibling.querySelector(".extender").classList.remove("open");
        }
      });

      if (isOpen) {
        extender.classList.remove("open");
        answer.style.maxHeight = null;
      } else {
        extender.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
