const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((newEl) => {
      if (newEl == box) {
        newEl.classList.add("active");
      } else {
        newEl.classList.remove("active");
      }
    });
  });
});

