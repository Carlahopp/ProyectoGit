const itemsContainer = document.querySelector("#list-items");
const controlsContainer = document.querySelector("#controls");

function addItem(item) {
  const card = document.createElement("div");
  card.className = "color-row";

  // Tu mapeo original e impecable
  const fotosPorId = {
    1: "98B2D1-TS.jpg", 
    2: "C74375-TS.jpg", 
    3: "BF1932-TS.jpg", 
    4: "7BC4C4-TS.jpg", 
    5: "E2583E-TS.jpg", 
    6: "53B0AE-TS.jpg"  
  };

  // Construimos una URL absoluta basada en el servidor local exacto donde corre tu página
  const imgUrl = "js/" + fotosPorId[Number(item.id)];

  card.innerHTML = `
    <div class="color-left" style="background:${item.color}">${item.color}</div>
    <div class="color-center">
      <div class="c-name">${item.name} <span class="c-year">${item.year}</span></div>
      <div class="c-pantone">PANTONE ${item.pantone_value}</div>
      <div class="c-image-preview"><img src="${imgUrl}" alt="${item.name}"></div>
    </div>
    <div class="color-right">↗</div>
  `;

  card.addEventListener('click', () => card.classList.toggle('expanded'));
  itemsContainer.append(card);
}


function fetchColorsList() {
  fetch('https://reqres.in/api/unknown')
    .then(r => r.json())
    .then(res => {
      localStorage.setItem('colorsList', JSON.stringify(res.data));
      itemsContainer.innerHTML = '';
      res.data.forEach(c => addItem(c));
    });
}

function loadColorsFromStorage() {
  const stored = localStorage.getItem('colorsList');
  itemsContainer.innerHTML = '';
  if (stored) {
    JSON.parse(stored).forEach(c => addItem(c));
  } else {
    fetchColorsList();
  }
}

const btnCargar = document.createElement('button');
btnCargar.className = 'btn-mini black';
btnCargar.textContent = 'Recargar API';
btnCargar.onclick = fetchColorsList;

const btnBorrar = document.createElement('button');
btnBorrar.className = 'btn-mini';
btnBorrar.textContent = 'Borrar';
btnBorrar.onclick = () => {
  localStorage.removeItem('colorsList');
  itemsContainer.innerHTML = '<p class="loading">Storage borrado.</p>';
};

controlsContainer.innerHTML = '';
controlsContainer.append(btnCargar, btnBorrar);
document.addEventListener('DOMContentLoaded', loadColorsFromStorage);