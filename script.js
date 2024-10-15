$(document).ready(function(){
    $('.curso-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

/*// 6.1 Adicionar novos inputs de arquivos
    document.getElementById('addarq').addEventListener('click', (e) => {
        e.preventDefault();
        const newFileInput = document.createElement('input');
        newFileInput.type = 'file';
        newFileInput.name = 'arquivo[]';
        arquivoContainer.appendChild(newFileInput);
        arquivoContainer.appendChild(document.createElement('br'));
    });

    // 6.2. Remover o último input de arquivo
document.getElementById('removearq').addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = arquivoContainer.querySelectorAll('input[type="file"]');
    if (inputs.length > 0) {
        arquivoContainer.removeChild(inputs[inputs.length - 1].nextSibling); // Remove o <br>
        arquivoContainer.removeChild(inputs[inputs.length - 1]); // Remove o último input
    } else {
        alert('Não há mais arquivos para remover.');
    }
});*/




// codigo antigo formulario de material
/*document.addEventListener('DOMContentLoaded', () => {
    const disciplinasSelect = document.getElementById('disciplinas');
    const turmasContainer = document.getElementById('turmas-container');
    const arquivoContainer = document.getElementById('arquivo-container');

    // 1. Requisição Fetch API para obter as disciplinas do professor
    fetch('http://localhost/etesite/backend/get_disciplinas.php') // Substitua com o caminho correto da sua API
        .then(response => response.json())
        .then(disciplinas => {
            disciplinas.forEach(disciplina => {
                const option = document.createElement('option');
                option.value = disciplina.id_disciplina; // Use o valor adequado da disciplina
                option.textContent = disciplina.nome_disciplina; // Use o campo correto da disciplina
                disciplinasSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar disciplinas:', error));

    // 2. Navegação para as turmas
    document.getElementById('btn-next-disciplinas').addEventListener('click', () => {
        const disciplinaSelecionada = disciplinasSelect.value;
        //alert(disciplinaSelecionada)
        if (!disciplinaSelecionada) {
            alert('Por favor, selecione uma disciplina.');
            return;
        }

        // Requisição Fetch API para obter as turmas da disciplina selecionada
        fetch(`http://localhost/etesite/backend/get_turmas.php?disciplina=${disciplinaSelecionada}`)
            .then(response => response.json())
            .then(turmas => {
                turmasContainer.innerHTML = ''; // Limpa as turmas anteriores
                turmas.forEach(turma => {
                    const label = document.createElement('label');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'turmas[]';
                    checkbox.value = turma.id_turma; // Use o valor correto da turma
                    label.textContent = turma.nome_turma; // Use o nome correto da turma
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

    

// 6.1 Adicionar novos inputs de arquivos e nomes
document.getElementById('addarq').addEventListener('click', (e) => {
    e.preventDefault();

    // Cria um contêiner para o novo conjunto de inputs
    const newInputContainer = document.createElement('div');

    // Cria o input de texto para o nome do arquivo
    const newFileNameInput = document.createElement('input');
    newFileNameInput.type = 'text';
    newFileNameInput.name = 'nome_arquivo[]'; // Nome para o array de nomes dos arquivos
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

// 6.2. Remover o último conjunto de inputs (nome e arquivo)
document.getElementById('removearq').addEventListener('click', (e) => {
    e.preventDefault();
    const inputContainers = arquivoContainer.querySelectorAll('div'); // Seleciona todos os contêineres de inputs
    if (inputContainers.length > 0) {
        arquivoContainer.removeChild(inputContainers[inputContainers.length - 1]); // Remove o último contêiner
    } else {
        alert('Não há mais arquivos para remover.');
    }
});


    // 7. Validação e submissão do formulário
    document.getElementById('material-form').addEventListener('submit', (e) => {
        const nomeMaterial = document.getElementById('nome_material').value;
        const descricao = document.getElementById('descricao').value;

        if (!nomeMaterial || !descricao) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});*/