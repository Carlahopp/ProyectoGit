document.addEventListener("DOMContentLoaded", function() {
  var btn = document.createElement("a");
  btn.href = "index.html";
  btn.textContent = "< Dashboard";
  btn.style.position = "fixed";
  btn.style.top = "15px";
  btn.style.left = "15px";
  btn.style.zIndex = "9999";
  btn.style.background = "#1e1e2f";
  btn.style.color = "white";
  btn.style.padding = "8px 16px";
  btn.style.borderRadius = "30px";
  btn.style.textDecoration = "none";
  btn.style.fontWeight = "600";
  btn.style.fontFamily = "sans-serif";
  document.body.appendChild(btn);
});