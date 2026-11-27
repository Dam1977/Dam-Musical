function abrirWhatsApp(mensagem) {
  const textoCodificado = encodeURIComponent(mensagem);
  const url = "https://wa.me/5511951599886?text=" + textoCodificado;
  window.open(url, "_blank", "noopener,noreferrer");
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// --- RENDERIZAÇÃO AUTOMÁTICA DAS PARTITURAS ---
function renderizarPartituras() {
  const ul = document.getElementById("listaPartituras");
  if (!ul || typeof dadosPartituras === "undefined") return;

  ul.innerHTML = dadosPartituras
    .map((item) => {
      const isEncore = item.formato === "encore";
      const icone = isEncore ? "🎵" : "🎼";
      const classeBtn = isEncore ? "btn-arquivo" : "btn-arquivo escuro";
      const textoBtn = isEncore ? "Baixar .enc" : "Baixar .mscz";

      return `
        <li data-formato="${item.formato}" class="item-arquivo">
          <span>${icone} ${item.titulo} <strong>[${item.detalhe}]</strong></span>
          <a href="${item.caminho}" download class="${classeBtn}">${textoBtn}</a>
        </li>
      `;
    })
    .join("");
}

// --- RENDERIZAÇÃO AUTOMÁTICA DAS CIFRAS ---
function renderizarCifras() {
  const ul = document.getElementById("listaCifras");
  if (!ul || typeof dadosCifras === "undefined") return;

  ul.innerHTML = dadosCifras
    .map((item) => {
      const icone = item.categoria === "harpa" ? "🎵" : "🎶";

      return `
        <li data-categoria="${item.categoria}" class="item-arquivo">
          <span>${icone} ${item.titulo}</span>
          <a href="${item.caminho}" target="_blank" class="btn-arquivo">Abrir PDF</a>
        </li>
      `;
    })
    .join("");
}

// --- CONTROLE DO MODAL DE PARTITURAS ---
let formatoAtualPartitura = "todas";

function abrirModalPartituras() {
  document.getElementById("modalPartituras").style.display = "flex";
  const input = document.getElementById("campoBuscaPartitura");
  if (input) input.value = "";
  mudarFormatoPartitura("todas");
}

function fecharModalPartituras() {
  document.getElementById("modalPartituras").style.display = "none";
}

function mudarFormatoPartitura(formato) {
  formatoAtualPartitura = formato;

  const botoes = {
    todas: document.getElementById("btnFmtTodas"),
    encore: document.getElementById("btnFmtEncore"),
    musescore: document.getElementById("btnFmtMusescore")
  };

  for (let chave in botoes) {
    if (botoes[chave]) {
      botoes[chave].classList.toggle("active", chave === formato);
    }
  }

  filtrarPartituras();
}

function filtrarPartituras() {
  const termo = normalizarTexto(document.getElementById("campoBuscaPartitura").value);
  const itens = document.querySelectorAll("#listaPartituras li");

  itens.forEach((item) => {
    const fmtItem = item.getAttribute("data-formato");
    const textoMusica = normalizarTexto(item.querySelector("span").textContent);

    const bateFormato = formatoAtualPartitura === "todas" || fmtItem === formatoAtualPartitura;
    const bateTexto = textoMusica.includes(termo);

    item.style.display = bateFormato && bateTexto ? "flex" : "none";
  });
}

// --- CONTROLE DO MODAL DE CIFRAS ---
let categoriaAtualCifra = "todas";

function abrirModalCifras() {
  document.getElementById("modalCifras").style.display = "flex";
  const input = document.getElementById("campoBuscaCifra");
  if (input) input.value = "";
  mudarCategoriaCifra("todas");
}

function fecharModalCifras() {
  document.getElementById("modalCifras").style.display = "none";
}

function mudarCategoriaCifra(categoria) {
  categoriaAtualCifra = categoria;

  const botoes = {
    todas: document.getElementById("btnCatTodas"),
    harpa: document.getElementById("btnCatHarpa"),
    avulsos: document.getElementById("btnCatAvulsos")
  };

  for (let chave in botoes) {
    if (botoes[chave]) {
      botoes[chave].classList.toggle("active", chave === categoria);
    }
  }

  filtrarCifras();
}

function filtrarCifras() {
  const termo = normalizarTexto(document.getElementById("campoBuscaCifra").value);
  const itens = document.querySelectorAll("#listaCifras li");

  itens.forEach((item) => {
    const catItem = item.getAttribute("data-categoria");
    const textoHino = normalizarTexto(item.querySelector("span").textContent);

    const bateCategoria = categoriaAtualCifra === "todas" || catItem === categoriaAtualCifra;
    const bateTexto = textoHino.includes(termo);

    item.style.display = bateCategoria && bateTexto ? "flex" : "none";
  });
}

// Fecha os modais ao clicar fora da caixa branca (no fundo escuro)
window.addEventListener("click", (event) => {
  const modalPartituras = document.getElementById("modalPartituras");
  const modalCifras = document.getElementById("modalCifras");

  if (event.target === modalPartituras) {
    modalPartituras.style.display = "none";
  }
  if (event.target === modalCifras) {
    modalCifras.style.display = "none";
  }
});

// Inicializa as listas automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderizarPartituras();
  renderizarCifras();
});
