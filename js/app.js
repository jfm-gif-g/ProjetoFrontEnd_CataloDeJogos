    // Os dados ficam apenas na memória.
    // Se a página for atualizada, eles serão apagados.
    const jogos = [];

    const app = document.querySelector("#app");
    const botoesMenu = document.querySelectorAll("nav button");
    const catalogo = [
    {
      nome: "The Witcher 3",
      tipo: "RPG",
      plataforma: "PC / Consoles",
      imagem: "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
    },

    {
      nome: "Hollow Knight",
      tipo: "Metroidvania",
      plataforma: "PC / Consoles",
      imagem: "data:image/jpeg;base64,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"
    },

    {
      nome: "Super Mario Odyssey",
      tipo: "Ação-aventura",
      plataforma: "Nintendo Switch",
      imagem: "data:image/jpeg;base64,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"
    },

    {
      nome: "Elden Ring",
      tipo: "Ação / RPG",
      plataforma: "PC / Consoles",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cOHpEAp_6ky8CS5KzHxqW5nzmPPoduBv9g982uNPHXQuaTQ-53PdBk1KdU0CMTnXeem5UJk1_11mueBB2uCemaIUKjfL201zni3NQu9c&s=10"
    },
    {
      nome: "God of War",
      tipo: "Ação / Aventura",
      plataforma: "PC / PlayStation",
      imagem: "data:image/jpeg;base64,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"
    },

     {
      nome: "Hollow Knight: Silksong",
      tipo: "Metroidvania",
      plataforma: "PC / Consoles",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxeyQg9NikgdrCXErZ4CjdI3sQlTgJcKuqVG_1ioLB2EtnAkZ0-Cq0eleWd3X_TIJdLSwxBRJNOHi0m0z8BayJs5wgn9D4KaY0JOD3H9Gyg&s=10"
    },

    {
      nome: "Celeste",
      tipo: "Plataforma",
      plataforma: "PC / Consoles",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAq2ZLDt4XU-iab30gCAnXexLHP8Aw1aRpqik6N3I7g&s=10"
    },

    {
      nome: "Hades",
      tipo: "Roguelike",
      plataforma: "PC / Consoles",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdalLIXjVUYjbGmvQ4NZUEFQql3cH7WWbLzAEreVBwhQ&s=10"
    }
  ];

    function marcarMenuAtivo(rota) {
      botoesMenu.forEach(botao => {
        botao.classList.toggle("ativo", botao.dataset.rota === rota);
      });
    }

    function irPara(rota) {
      marcarMenuAtivo(rota);

      if (rota === "inicio") mostrarInicio();
      if (rota === "addjogo") mostrarAddJogo();
      if (rota === "Catalogo") mostrarCatalogo();
      if (rota === "Lista") mostrarLista();
      if (rota === "sobre") mostrarSobre();
    }

    function mostrarInicio() {
      app.innerHTML = `
        <h1>Catálogo de Jogos</h1>
        <p>
          Este é o meu Catálogo de jogos feito com HTML, CSS e JavaScript.
          A navegação acontece sem recarregar a página.
        </p>

        <p>
          Os novos jogos adicionados ficam temporariamente guardados em um array JavaScript.
        </p>

        <div class="contador">
          Jogos adicionados nesta sessão: <strong>${jogos.length}</strong>
        </div>

        <div class="acoes">
          <button class="botao" id="btnCadastrar">Adicionar Jogo</button>
          <button class="botao secundario" id="btnCatalogo">Ver Catálogo de Jogos</button>
          <button class="botao secundario" id="btnVerListaJogos">Ver Lista de Jogos</button>
        </div>
      `;

      document.querySelector("#btnCadastrar")
        .addEventListener("click", () => irPara("addjogo"));

      document.querySelector("#btnCatalogo")
        .addEventListener("click", () => irPara("Catalogo"));

      document.querySelector("#btnVerListaJogos")
        .addEventListener("click", () => irPara("Lista"));  
    }
    
    function mostrarAddJogo() {
      app.innerHTML = `
        <h1>Cadastrar Jogo</h1>

        <form id="formJogo">
          <div class="campo">
            <label for="título">Título</label>
            <input id="título" type="text" placeholder="Digite o título do jogo" required />
          </div>

          <div class="campo">
            <label for="Gênero">Gênero</label>
            <input id="Gênero" type="text" placeholder="Digite o gênero do jogo" required />
          </div>

          <div class="campo">
            <label for="Plataforma">Plataforma</label>
            <input id="Plataforma" type="text" placeholder="Digite a plataforma" required />
          </div>

          <button class="botao" type="submit">Salvar jogo</button>
          <div id="mensagem"></div>
        </form>
      `;

      document.querySelector("#formJogo").addEventListener("submit", function(evento) {
        evento.preventDefault();

        const Título = document.querySelector("#título").value.trim();
        const Gênero = document.querySelector("#Gênero").value.trim();
        const Plataforma = document.querySelector("#Plataforma").value.trim();

        jogos.push({
          Título,
          Gênero,
          Plataforma,
        });
        
        catalogo.push({
          nome: Título,
          tipo: Gênero,
          plataforma: Plataforma,
          imagem: gerarPlaceholder(Título)
        });

        document.querySelector("#mensagem").innerHTML =
          `<div class="mensagem">Jogo cadastrado com sucesso.</div>`;

        evento.target.reset();
      });
    }

    function mostrarCatalogo() {
  app.innerHTML = `
    <div class="painel">
      <h1>Catálogo de Jogos</h1>
      <p>Estes são alguns dos incríveis jogos que temos em nosso catálogo.</p>
    </div>
    <div id="conteudoCatalogo" class="catalogo"></div>
  `;

    const conteudo = document.getElementById("conteudoCatalogo");

  conteudo.innerHTML = catalogo
    .map(jogo => `
      <article class="card">
        <img src="${jogo.imagem}" alt="${jogo.nome}">
        <div class="card-info">
          <h3>${jogo.nome}</h3>
          <span class="tag">${jogo.tipo}</span>
          <p>${jogo.plataforma}</p>
        </div>
      </article>
    `)
    .join("");
}
    function gerarPlaceholder(titulo) {
  let hash = 0;
  for (const c of titulo) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  const cor = (hash & 0x7F7F7F).toString(16).padStart(6, "0");
  return `https://placehold.co/400x600/${cor}/FFF?text=${encodeURIComponent(titulo)}`;
}
      
    function mostrarLista() {
      app.innerHTML = `
        <h1>Lista de Jogos</h1>
        <p>Esta tabela é criada dinamicamente pelo JavaScript a partir do array de jogos.</p>
        <div id="conteudoLista"></div>
      `;

      renderizarTabela();
    }

    function renderizarTabela() {
      const conteudo = document.querySelector("#conteudoLista");

      if (jogos.length === 0) {
        conteudo.innerHTML = `
          <div class="vazio">
            Nenhum jogo cadastrado ainda.
          </div>
        `;
        return;
      }

      let linhas = "";

      jogos.forEach((jogo, indice) => {

        let iconeEstrela = jogo.Favoritar ? "★" : "☆";
        linhas += `
          <tr>
            <td>${jogo.Título}</td>
            <td>${jogo.Gênero}</td>
            <td>${jogo.Plataforma}</td>
            <td>
              <button class="excluir" data-indice="${indice}">Excluir</button>
            </td>
            <td>
              <button class="Favoritar" data-indice="${indice}">${iconeEstrela}</button>
            </td>
          </tr>
        `;
      });

      conteudo.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Gênero</th>
              <th>Plataforma</th>
              <th>Ações</th>
              <th>Favoritar</th>
            </tr>
          </thead>
          <tbody>
            ${linhas}
          </tbody>
        </table>
      `;

      document.querySelectorAll(".excluir").forEach(botao => {
        botao.addEventListener("click", function() {
          const indice = Number(this.dataset.indice);
          jogos.splice(indice, 1);
          renderizarTabela();
        });
      });

      document.querySelectorAll(".Favoritar").forEach(botao => {
        botao.addEventListener("click", function() {
          const indice = Number(this.dataset.indice);
          jogos[indice].Favoritar = !jogos[indice].Favoritar;
          renderizarTabela();
        });
      });
    }

    function mostrarSobre() {
      app.innerHTML = `
        <h1>Sobre o projeto</h1>
        <p>
          Este exemplo foi criado para demonstrar uma Single Page Application simples.
        </p>
        <p>
          Existe apenas um arquivo HTML. Ao clicar nas opções do menu,
          o JavaScript modifica o conteúdo do elemento <strong>#app</strong>.
        </p>
        <p>
          O projeto também demonstra cadastro em array, manipulação do DOM,
          eventos de clique, envio de formulário, listagem e exclusão.
        </p>
      `;
    }

    botoesMenu.forEach(botao => {
      botao.addEventListener("click", () => {
        irPara(botao.dataset.rota);
      });
    });

    mostrarInicio();