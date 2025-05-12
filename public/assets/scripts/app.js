const destinos = [
    {
      "id": 1,
      "localizacao": "Salar de Uyuni",
      "pais": "Bolivia",
      "imagem": "assets/imgs/salar-de-uyuni-bolivia-Respaldo-Portada.png",
      "idioma": "Espanhol",
      "descricao": "O maior deserto de sal do mundo, famoso por criar efeitos de espelho durante a estação chuvosa.",
      "categoria": "Maravilhas naturais"
    },
    {
        "id": 2,
        "localizacao": "Grande Muralha da China",
        "pais": "China",
        "imagem": "assets/imgs/The_Great_Wall_of_China_at_Jinshanling.png",
        "idioma": "Mandarim",
        "descricao": "Uma das sete maravilhas do mundo, a Muralha da China se estende por milhares de quilômetros e oferece vistas históricas e culturais impressionantes.",
        "categoria": "Monumentos"
      },
      {
        "id": 3,
        "localizacao": "Praia de Copacabana",
        "pais": "Brasil",
        "imagem": "assets/imgs/imagem-da-praia-de-copacabana.png",
        "idioma": "Português",
        "descricao": "Uma das praias mais famosas do mundo, localizada no coração do Rio de Janeiro, com seu calçadão icônico em pedras portuguesas.",
        "categoria": "Praias"
      },
      {
        "id": 4,
        "localizacao": "Lençois Maranhenses",
        "pais": "Brasil",
        "imagem": "assets/imgs/Parque-Nacional-Lencois-Maranhenses-1.png",
        "idioma": "Português",
        "descricao": "Um parque nacional com dunas de areia branca e lagoas de água doce formadas pelas chuvas, criando uma paisagem incrivel.",
        "categoria": "Maravilhas naturais"
      },
      {
        "id": 5,
        "localizacao": "Santorini",
        "pais": "Grecia",
        "imagem": "assets/imgs/Santorini-1-scaled-1.png",
        "idioma": "Grego",
        "descricao": "Uma das ilhas mais famosas da Grécia, conhecida por suas casas brancas com cúpulas azuis, paisagens e pores do sol fantasticos.",
        "categoria": "Cidades"
      },
      {
        "id": 6,
        "localizacao": "Tóquio",
        "pais": "Japão",
        "imagem": "assets/imgs/Akihabara.png",
        "idioma": "Japones",
        "descricao": "A vibrante capital do Japão, onde a modernidade se mistura com tradições antigas, famosa por seus arranha-céus, tecnologia avançada, templos e cultura pop.",
        "categoria": "Cidades"
      },
  ]

  const container = document.getElementById("lugares");

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

