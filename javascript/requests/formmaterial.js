document.addEventListener('DOMContentLoaded', () => {
    const disciplinasSelect = document.getElementById('disciplinas');
    const turmasContainer = document.getElementById('turmas-container');
    const arquivoContainer = document.getElementById('arquivo-container');

    // 1. Requisição Fetch API para obter as disciplinas do professor
    fetch('https://projetospf.rf.gd/backend/get_disciplinas.php')
        .then(response => response.json())
        .then(disciplinas => {
            disciplinas.forEach(disciplina => {
                const option = document.createElement('option');
                option.value = disciplina.id_disciplina;
                option.textContent = disciplina.nome_disciplina;
                disciplinasSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar disciplinas:', error));

    // 2. Navegação para as turmas
    document.getElementById('btn-next-disciplinas').addEventListener('click', () => {
        const disciplinaSelecionada = disciplinasSelect.value;
        if (!disciplinaSelecionada) {
            alert('Por favor, selecione uma disciplina.');
            return;
        }

        fetch(`https://projetospf.rf.gd/backend/get_turmas.php?disciplina=${disciplinaSelecionada}`)
            .then(response => response.json())
            .then(turmas => {
                turmasContainer.innerHTML = '';
                turmas.forEach(turma => {
                    const label = document.createElement('label');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'turmas[]';
                    checkbox.value = turma.id_turma;
                    label.textContent = turma.nome_turma;
                    label.appendChild(checkbox);
                    turmasContainer.appendChild(label);
                    turmasContainer.appendChild(document.createElement('br'));
                });

                document.getElementById('opdisciplina').style.display = 'none';
                document.getElementById('opturmas').style.display = 'block';
            })
            .catch(error => console.error('Erro ao carregar turmas:', error));
    });

    // 3. Navegação de volta para disciplinas
    document.getElementById('btn-return-disciplinas').addEventListener('click', () => {
        document.getElementById('opturmas').style.display = 'none';
        document.getElementById('opdisciplina').style.display = 'block';
    });

    // 4. Navegação para dados do material
    document.getElementById('btn-next-turmas').addEventListener('click', () => {
        const turmasSelecionadas = document.querySelectorAll('input[name="turmas[]"]:checked');
        if (turmasSelecionadas.length === 0) {
            alert('Por favor, selecione ao menos uma turma.');
            return;
        }
        document.getElementById('opturmas').style.display = 'none';
        document.getElementById('materialdados').style.display = 'block';
    });

    // 5. Navegação de volta para turmas
    document.getElementById('btn-return-turmas').addEventListener('click', () => {
        document.getElementById('materialdados').style.display = 'none';
        document.getElementById('opturmas').style.display = 'block';
    });

    // 6. Adicionar novos inputs de arquivos e nomes
    document.getElementById('addarq').addEventListener('click', (e) => {
        e.preventDefault();

        // Cria um contêiner para o novo conjunto de inputs
        const newInputContainer = document.createElement('div');

        // Cria o input de texto para o nome do arquivo
        const newFileNameInput = document.createElement('input');
        newFileNameInput.type = 'text';
        newFileNameInput.name = 'nomearq[]'; // Nome para o array de nomes dos arquivos
        newFileNameInput.placeholder = 'Nome do arquivo'; // Placeholder para o input

        // Cria o input de arquivo
        const newFileInput = document.createElement('input');
        newFileInput.type = 'file';
        newFileInput.name = 'arquivo[]'; // Nome para o array de arquivos

        // Adiciona os inputs ao contêiner
        newInputContainer.appendChild(newFileNameInput);
        newInputContainer.appendChild(newFileInput);
        newInputContainer.appendChild(document.createElement('br')); // Adiciona uma quebra de linha

        // Adiciona o novo contêiner ao arquivoContainer
        arquivoContainer.appendChild(newInputContainer);
    });

    // 7. Remover o último conjunto de inputs (nome e arquivo)
    document.getElementById('removearq').addEventListener('click', (e) => {
        e.preventDefault();
        const inputContainers = arquivoContainer.querySelectorAll('div'); // Seleciona todos os contêineres de inputs
        if (inputContainers.length > 0) {
            arquivoContainer.removeChild(inputContainers[inputContainers.length - 1]); // Remove o último contêiner
        } else {
            alert('Não há mais arquivos para remover.');
        }
    });

    // 8. Validação e submissão do formulário via Fetch API
    document.getElementById('material-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        const form = document.getElementById('material-form');
        const formData = new FormData(form); // Cria a FormData com todos os dados do formulário
        console.log(formData)
        fetch('https://projetospf.rf.gd/backend/enviar_material.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(result => {
            // Exibe mensagem de sucesso na tela
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Material enviado com sucesso!';
            document.body.appendChild(successMessage);

            console.log(result); // Opcional: mostra o retorno da requisição no console
        })
        .catch(error => {
            console.error('Erro ao enviar o material:', error);
            alert('Erro ao enviar o material.');
        });
    });
});
