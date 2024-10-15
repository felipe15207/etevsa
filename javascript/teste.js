$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').toggleClass('btn-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});






document.getElementById("mobile_btn").addEventListener("click", function() {
    var menu = document.getElementById("mobile_menu");
    menu.classList.toggle("active");
});





/* CURSOS */



// Array de objetos com os cursos
const cursos = [
    { imagem: 'Imagem/tds.png' },
    {imagem: 'Imagem/log.png' },
    { imagem: 'Imagem/adm.png' },
    { imagem: 'Imagem/dg.png' },
    { imagem: 'Imagem/di.png' },
    { imagem: 'Imagem/rh.png' },
    { imagem: 'Imagem/se.png' },
    { imagem: 'Imagem/st.png' },
    { imagem: 'Imagem/multi.png' },
    { imagem: 'Imagem/til.png' },
    { imagem: 'Imagem/' },
    
    
    
];

// Variável para controlar o slide atual
let currentSlide = 0;

// Função para gerar os cursos no carrossel
function gerarCursos() {
    const wrapper = document.getElementById('carousel-wrapper');

    cursos.forEach(curso => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Cria um elemento de imagem
        const courseImage = document.createElement('img');
        courseImage.src = curso.imagem;
        courseImage.alt = curso.nome;
        courseImage.classList.add('course-image'); // Classe para estilização

        const courseTitle = document.createElement('div');
        courseTitle.classList.add('course-title');
        courseTitle.textContent = curso.nome;

        const courseDescription = document.createElement('div');
        courseDescription.classList.add('course-description');
        courseDescription.textContent = curso.descricao;

        courseCard.appendChild(courseImage); // Adiciona a imagem ao cartão
        courseCard.appendChild(courseTitle);
        courseCard.appendChild(courseDescription);

        wrapper.appendChild(courseCard);
    });

    updateCarousel(); // Atualiza a posição do carrossel ao iniciar
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const wrapper = document.getElementById('carousel-wrapper');
    const slideWidth = document.querySelector('.course-card').offsetWidth; // Obtém a largura do card
    wrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Ajusta a posição do carrossel
}

// Funções para controlar o carrossel
function nextSlide() {
    const totalSlides = cursos.length;
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
    updateCarousel(); // Atualiza a posição do carrossel
}

function prevSlide() {
    const totalSlides = cursos.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Retorna ao slide anterior
    updateCarousel(); // Atualiza a posição do carrossel
}

// Gera os cursos ao carregar a página
document.addEventListener('DOMContentLoaded', gerarCursos);














