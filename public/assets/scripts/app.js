
   fetch('http://localhost:3000/destinos')
  .then(response => response.json())
  .then(destinos => {
    const container = document.getElementById('lugares');
    destinos.forEach(destino => {
      const article = document.createElement("article");
      article.classList.add("destino");
      article.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${destino.imagem}" class="card-img-top" alt="${destino.localizacao}">
        <div class="card-body">
        <h5 class="card-title"><a href="detalhes.html?id=${destino.id}">${destino.localizacao}</a></h5>
         <p class="card-text">${destino.descricao}</p>
      `;
      container.appendChild(article);
    });
  })

