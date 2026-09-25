    // Os dados ficam apenas na memória.
    // Se a página for atualizada, eles serão apagados.
    const jogos = [];

    const app = document.querySelector("#app");
    const botoesMenu = document.querySelectorAll("nav button");

    function marcarMenuAtivo(rota) {
      botoesMenu.forEach(botao => {
        botao.classList.toggle("ativo", botao.dataset.rota === rota);
      });
    }

    function irPara(rota) {
      marcarMenuAtivo(rota);

      if (rota === "inicio") mostrarInicio();
      if (rota === "jogo") mostrarJogo();
      if (rota === "lista") mostrarLista();
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
          <button class="botao secundario" id="btnVerJogos">Ver Jogos</button>
        </div>
      `;

      document.querySelector("#btnCadastrar")
        .addEventListener("click", () => irPara("jogo"));

      document.querySelector("#btnVerJogos")
        .addEventListener("click", () => irPara("lista"));
    }

    function mostrarJogo() {
      app.innerHTML = `
        <h1>Cadastrar Jogo</h1>

        <form id="formJogo">
          <div class="campo">
            <label for="nome">Nome</label>
            <input id="nome" type="text" placeholder="Digite o nome do jogo" required />
          </div>

          <div class="campo">
            <label for="curso">Tipo de Jogo</label>
            <input id="curso" type="text" placeholder="Digite o tipo de jogo" required />
          </div>

          <div class="campo">
            <label for="matricula">Plataforma</label>
            <input id="matricula" type="text" placeholder="Digite a plataforma" required />
          </div>

          <button class="botao" type="submit">Salvar jogo</button>
          <div id="mensagem"></div>
        </form>
      `;

      document.querySelector("#formJogo").addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const curso = document.querySelector("#curso").value.trim();
        const matricula = document.querySelector("#matricula").value.trim();

        jogos.push({
          nome,
          curso,
          matricula
        });

        document.querySelector("#mensagem").innerHTML =
          `<div class="mensagem">Jogo cadastrado com sucesso.</div>`;

        evento.target.reset();
      });
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
        linhas += `
          <tr>
            <td>${jogo.nome}</td>
            <td>${jogo.curso}</td>
            <td>${jogo.matricula}</td>
            <td>
              <button class="excluir" data-indice="${indice}">Excluir</button>
            </td>
          </tr>
        `;
      });

      conteudo.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo de Jogo</th>
              <th>Plataforma</th>
              <th>Ações</th>
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