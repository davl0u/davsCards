document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      this.style.backgroundColor =
        "linear-gradient(to bottom right, #530cc7, #d357f0)";
      this.style.color = "white";
      this.querySelector(".img").style.filter = "invert(1)";
      this.querySelector(".content p").style.color = "Black";
      this.querySelector(".content a").style.color = "Black";
      this.querySelector(".content a").style.backgroundColor = "white";
    });

    card.addEventListener("mouseout", function () {
      this.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      this.style.color = "black";
      this.querySelector(".img").style.filter = "none";
      this.querySelector(".content p").style.color = "#666";
      this.querySelector(".content a").style.color = "Wihte";
      this.querySelector(".content a").style.backgroundColor = "#c0c0c0";
    });
  });
});
