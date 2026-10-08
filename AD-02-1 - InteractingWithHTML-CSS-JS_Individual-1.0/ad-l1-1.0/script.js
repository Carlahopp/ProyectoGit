const firstHeader = document.getElementById("red");
firstHeader.textContent = "GoodBye";

const orangeHeader = document.querySelector(".blue");
orangeHeader.style.color = "orange";

const clickableHeader = document.getElementById("clickeable"); // <- CORREGIDO, antes decia "clickable-header"
clickableHeader.addEventListener("click", function() {
    clickableHeader.style.color = "brown";
   
});
const lionImg = document.getElementById("lionImg");
lionImg.addEventListener("click", function() {
  if (lionImg.src.includes("Lion")) {
    lionImg.src = "Pictures/E- Elephan.jpg";
  } else {
    lionImg.src = "Pictures/L - Lion.jpg";
  }
});