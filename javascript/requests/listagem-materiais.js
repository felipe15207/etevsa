function carregarMateriais() {
    fetch('https://projetospf.rf.gd/backend/listagem_materiais.php')
        .then(response => response.json())
        .then(materiais => {
            materiais.forEach(material => {
                const { id, nome_material, nome_professor, nome_disciplina, arquivo_url } = material;

                // Seleciona a disciplina correta pela ID da li
                const liDisciplina = document.getElementById(nome_disciplina.toLowerCase());
                if (liDisciplina) {
                    const materialHTML = `
                        <div class="material">
                            <img src="Imagem/materialimg.jpg" alt="" width="120" height="120">
                            <h3 class="titulo-material">
                                <a href="${arquivo_url}" target="_blank">${nome_material}</a>
                            </h3>
                            <p>Prof: ${nome_professor}</p>
                        </div>
                    `;

                    // Insere o conteúdo na div correta
                    const conteudosDiv = liDisciplina.querySelector('.conteudos');
                    conteudosDiv.insertAdjacentHTML('beforeend', materialHTML);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar materiais:', error));
}
document.addEventListener('DOMContentLoaded', carregarMateriais);