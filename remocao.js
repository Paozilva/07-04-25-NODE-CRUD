document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const nome = document.getElementById('txtNome').value;
        const login = document.getElementById('txtLogin').value;
        const senha = document.getElementById('txtSenha').value;
        const tipo = 'remocao';
  
        try {
          const response = await fetch('/api/mysql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, login, senha, tipo })
          });
  
          const result = await response.json();
          console.log(result.message);
          alert(result.message);
        } catch (error) {
          console.error('Erro ao remover:', error);
          alert('Erro ao tentar remover. Veja o console.');
        }
      });
    }
  });
  