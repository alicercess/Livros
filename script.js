document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("livroModal");
    const closeModal = document.getElementById("closeModal");
    const livroCards = document.querySelectorAll(".livro-card");

    const livros = [
        {
            id: 1,
            titulo: "É assim que acaba",
            autor: "Colleen Hoover",
            classificacao: "4.5/5",
            anoLancamento: 2016,
            sinopse: "Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja? É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis.",
            imagem: "../LIVROS/img/eassimqueacaba.jpg",
            pdf: "https://drive.google.com/file/d/1Er12Ung41bXsoQ0h4MPah_SbxvPNM1-p/view?usp=drive_link.pdf",
        },
        {
            id: 2,
            titulo: "Saboroso Cadáver",
            autor: "Agustina Bazterrica",
            classificacao: "4.0/5",
            anoLancamento: 2022,
            sinopse: "Distopia arrepiante, Saboroso Cadáver imagina um mundo em que a violência e o canibalismo são de fato naturalizados, embora ainda haja espaço para a compaixão, a solidariedade e o cuidado com os outros, enquanto a batalha pela sobrevivência se torna uma aventura de desfecho incerto.",
            imagem: "../LIVROS/img/saborosocadaver.jpg",
            pdf: "https://drive.google.com/file/d/1CzxRj822L_v4W-P_lwIszHqcWIN0tjQr/view",
        },
        {
            id: 3,
            titulo: "A Vida Mentirosa dos adultos",
            autor: "Elena Ferrante",
            classificacao: "4.0/5",
            anoLancamento: 2019,
            sinopse: "Aos doze anos, a menina vê um rosto no espelho e, embora não compreenda a fundo o peso daquela comparação, sente que algo está irremediavelmente à beira de um abismo. O amor e a proteção oferecidos pelo lar são as primeiras estruturas a desmoronar quando Giovanna decide conhecer a mulher que pode encarnar seu futuro.",
            imagem: "../LIVROS/img/avidamentirosadosadultos.jpg",
            pdf: "https://drive.google.com/file/d/1DrSH36W6z8Uu25SKkOcMb46oEPjyvHUZ/view?usp=drive_link.pdf",
        },
        {
            id: 4,
            titulo: "A paciente silenciosa",
            autor: "Alex Michaelides",
            classificacao: "4.0/5",
            anoLancamento: 2019,
            sinopse: "Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa, deixando suspeitas e mistérios não resolvidos sobre o caso. E o terapeuta Theo Faber está obcecado em descobrir o motivo da violencia e do silencio. Só ela sabe o que aconteceu. Só ele pode fazê-la falar.",
            imagem: "../LIVROS/img/apacientesilenciosa.jpg",
            pdf: "https://drive.google.com/file/d/1F-nxts9NlwJtNtMKALcPXqLP49XbfF3x/view?usp=drive_link.pdf",
        },
        {
            id: 5,
            titulo: "Os sete maridos de Evelyn Hugo",
            autor: "Autor 2",
            classificacao: "4.0/5",
            anoLancamento: 2022,
            sinopse: "Evelyn Hugo, uma das maiores estrelas de Hollywood, agora a aproximar-se dos 80 anos, decide finalmente contar tudo sobre a sua vida recheada de glamour e de uma boa dose de escândalos. Quando escolhe a desconhecida Monique Grant para escrever a sua história, todos ficam surpreendidos, incluindo a própria jornalista..",
            imagem: "../LIVROS/img/ossetemaridosdeeverlynhugo.jpg",
            pdf: "https://drive.google.com/file/d/1Er-TAl6lRmUBRrq9pkXaq8A3w1b_l2Y8/view?usp=drive_link.pdf",
        }
        
        

    ];

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    livroCards.forEach((livroCard) => {
        livroCard.addEventListener("click", function () {
            const livroId = livroCard.getAttribute("data-livro");

            const livroSelecionado = livros.find((livro) => livro.id === parseInt(livroId));

            if (livroSelecionado) {
                document.getElementById("livroImagem").src = livroSelecionado.imagem;
                document.getElementById("livroTitulo").textContent = livroSelecionado.titulo;
                document.getElementById("livroAutor").textContent = `Autor: ${livroSelecionado.autor}`;
                document.getElementById("livroClassificacao").textContent = `Classificação: ${livroSelecionado.classificacao}`;
                document.getElementById("livroAnoLancamento").textContent = `Ano de Lançamento: ${livroSelecionado.anoLancamento}`;
                document.getElementById("livroSinopse").textContent = `Sinopse: ${livroSelecionado.sinopse}`;

                const pdfButton = document.getElementById("pdfButton");
                pdfButton.href = livroSelecionado.pdf;

                modal.style.display = "block";
            }
        });
    });
});