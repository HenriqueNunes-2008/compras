// INSIRA AQUI A URL GERADA NA IMPLANTAÇÃO DO GOOGLE APPS SCRIPT
const URL_WEB_APP = "https://script.google.com/macros/s/AKfycbxA9ORwgiFZUjRwf8dfK7UhwPacG0nIdvV6WqiRItWBFThaE6B8zqzIwbzWxs1SprVL/exec";

document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const btnSalvar = document.getElementById('btnSalvar');
    const originalText = btnSalvar.innerText;
    
    // Feedback visual de carregamento
    btnSalvar.innerText = "Salvando...";
    btnSalvar.disabled = true;

    // Coleta dos dados do formulário
    const dados = {
        fornecedor: document.getElementById('fornecedor').value,
        contato: document.getElementById('contato').value,
        cargo: document.getElementById('cargo').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        site: document.getElementById('site').value,
        endereco: document.getElementById('endereco').value
    };

    try {
        // Envio via POST para o Google Apps Script
        const response = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'no-cors', // Evita problemas de CORS com o Apps Script
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        // Como usamos 'no-cors', o JS não consegue ler a resposta JSON diretamente,
        // mas se não cair no catch, o envio foi efetuado com sucesso.
        alert('Fornecedor cadastrado com sucesso!');
        document.getElementById('cadastroForm').reset();

    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert('Ocorreu um erro ao tentar salvar os dados.');
    } finally {
        // Restaura o botão
        btnSalvar.innerText = originalText;
        btnSalvar.disabled = false;
    }
});