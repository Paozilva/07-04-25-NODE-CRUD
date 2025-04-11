document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('frmCadastro');
  
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const nome = document.getElementById('txtNome').value;
        const login = document.getElementById('txtLogin').value;
        const senha = document.getElementById('txtSenha').value;
        const tipo = 'cadastro';
  
        try {
          const response = await fetch('/api/mysql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, login, senha, tipo })
          });
  
          const result = await response.json();
          console.log(result.message);
          alert(result.message); // puedes mostrar un mensaje al usuario si quieres
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
          alert('Erro ao enviar os dados. Veja o console.');
        }
      });
    }
  });
  