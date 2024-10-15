function carregarAlunos() {
    fetch('https://projetospf.rf.gd/backend/lista_registros.php') // Faz a requisição para o PHP
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            const listagemAlunos = document.getElementById('listagem-alunos');
            listagemAlunos.innerHTML = ''; // Limpa o conteúdo anterior

            // Para cada aluno retornado, cria o card com os dados
            data.forEach(aluno => {
                const alunoDiv = document.createElement('div');
                alunoDiv.classList.add('card-aluno');
                
                // Template HTML para cada card de aluno
                alunoDiv.innerHTML = `
                    <img src="Imagem/ronaldinho.jpg" alt="Foto do Aluno">
                    <div class="dados-aluno">
                        <h3 id="nome-aluno">${aluno.nome_usuario}</h3>
                        <p id="turma">Turma: ${aluno.fase_turma} ${aluno.nome_turma}</p>
                        <p id="matricula">Matrícula: ${aluno.matricula_aluno}</p>
                    </div>
                    <button id="btn-expandir"><i class="fa-solid fa-caret-up"></i>Expandir</button>
                    <button id="btn-editar"><i class="fa-solid fa-pen-to-square"></i>Editar</button>
                `;
                listagemAlunos.appendChild(alunoDiv); // Adiciona o card à listagem
            });
        })
        .catch(error => {
            console.error('Erro ao carregar alunos:', error);
            document.getElementById('listagem-alunos').innerHTML = 'Erro ao carregar a listagem de alunos.';
        });
}

// Carrega os alunos ao abrir a página
document.addEventListener('DOMContentLoaded', carregarAlunos);