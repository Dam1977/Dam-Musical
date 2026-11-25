const MEU_WHATSAPP = "5511999999999";

function abrirWhatsApp(mensagemPersonalizada) {
    const textoCodificado = encodeURIComponent(mensagemPersonalizada);
    const urlWhatsApp = `https://wa.me{MEU_WHATSAPP}?text=${textoCodificado}`;
    window.open(urlWhatsApp, '_blank');
}

function mostrarPrivacidade(event) {
    event.preventDefault();
    alert(
        "Política de Privacidade - Dam Musical:\n\n" +
        "Respeitamos a sua privacidade. Este site não coleta dados pessoais automaticamente nem utiliza cookies de rastreamento invasivos. " +
        "Ao clicar nos botões de contato, você será redirecionado diretamente para o atendimento via WhatsApp."
    );
}

/* =========================================================
   FUNÇÕES PARA ABRIR E FECHAR A JANELA DE PARTITURAS
   ========================================================= */
function abrirModalPartituras() {
    document.getElementById("modalPartituras").style.display = "flex";
}

function fecharModalPartituras() {
    document.getElementById("modalPartituras").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalPartituras");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
