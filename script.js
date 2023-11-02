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
            sinopse: "Em É assim que acaba, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela. Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?.",
            imagem: "img/eassimqueacaba.jpg",
            pdf: "https://drive.google.com/file/d/1Er12Ung41bXsoQ0h4MPah_SbxvPNM1-p/view?usp=drive_link.pdf",
        },
        {
            id: 2,
            titulo: "Saboroso Cadáver",
            autor: "Agustina Bazterrica",
            classificacao: "4.0/5",
            anoLancamento: 2022,
            sinopse: "Distopia arrepiante, Saboroso Cadáver imagina um mundo em que a violência e o canibalismo são de fato naturalizados, embora ainda haja espaço para a compaixão, a solidariedade e o cuidado com os outros, enquanto a batalha pela sobrevivência se torna uma aventura de desfecho incerto.",
            imagem: "img/saborosocadaver.jpg",
            pdf: "https://drive.google.com/file/d/1CzxRj822L_v4W-P_lwIszHqcWIN0tjQr/view",
        },
        {
            id: 3,
            titulo: "A Vida Mentirosa dos adultos",
            autor: "Elena Ferrante",
            classificacao: "4.0/5",
            anoLancamento: 2019,
            sinopse: "Aos doze anos, a menina vê um rosto no espelho e, embora não compreenda a fundo o peso daquela comparação, sente que algo está irremediavelmente à beira de um abismo. O amor e a proteção oferecidos pelo lar são as primeiras estruturas a desmoronar quando Giovanna decide conhecer a mulher que pode encarnar seu futuro.",
            imagem: "img/avidamentirosadosadultos.jpg",
            pdf: "https://drive.google.com/file/d/1DrSH36W6z8Uu25SKkOcMb46oEPjyvHUZ/view?usp=drive_link.pdf",
        },
        {
            id: 4,
            titulo: "A paciente silenciosa",
            autor: "Alex Michaelides",
            classificacao: "4.0/5",
            anoLancamento: 2019,
            sinopse: "Alicia tinha 33 anos quando deu cinco tiros no rosto do marido, e ela nunca mais disse uma palavra. A recusa de Alicia a falar ou a dar qualquer explicação transforma essa tragédia doméstica em algo muito maior - um mistério que atrai a atenção do público e aumenta ainda mais a fama da pintora.",
            imagem: "img/apacientesilenciosa.jpg",
            pdf: "https://drive.google.com/file/d/1F-nxts9NlwJtNtMKALcPXqLP49XbfF3x/view?usp=drive_link.pdf",
        },
        {
            id: 5,
            titulo: "Os sete maridos de Evelyn Hugo",
            autor: "Autor 2",
            classificacao: "4.0/5",
            anoLancamento: 2022,
            sinopse: "Evelyn Hugo, uma das maiores estrelas de Hollywood, agora a aproximar-se dos 80 anos, decide finalmente contar tudo sobre a sua vida recheada de glamour e de uma boa dose de escândalos. Quando escolhe a desconhecida Monique Grant para escrever a sua história, todos ficam surpreendidos, incluindo a própria jornalista..",
            imagem: "img/ossetemaridosdeeverlynhugo.jpg",
            pdf: "https://drive.google.com/file/d/1Er-TAl6lRmUBRrq9pkXaq8A3w1b_l2Y8/view?usp=drive_link.pdf",
        },
        {
            id: 6,
            titulo: "O lado feio do amor",
            autor: "Colleen Hoover",
            classificacao: "4.5/5",
            anoLancamento: 2015,
            sinopse: "Quando Tate Collins se muda para o apartamento do irmão, em São Francisco, pronta a se dedicar ao mestrado em enfermagem, não imagina estar prestes a conhecer o lado feio do amor. Um relacionamento em que companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo.",
            imagem: "img/oladofeiodoamor.jpg",
            pdf: "https://drive.google.com/file/d/1FOwWjJSCqdczJOFZD2_vn1c0_pW6eXCz/view?usp=drive_link.pdf",
        },
        {
            id: 7,
            titulo: "Vergonha",
            autor: "Brittainy Cherry",
            classificacao: "4.0/5",
            anoLancamento: 2019,
            sinopse: "Grace Harris, nossa protagonista do livro Vergonha, está perdida e sozinha em sua casa em Atlanta depois que o homem que ela pensou que ficaria a seu lado pelo resto da vida traiu sua confiança, partiu seu coração e saiu de casa, deixando seu casamento em suspenso.",
            imagem: "img/vergonha.jpg",
            pdf: "https://drive.google.com/file/d/1FmPYCOZqlmf36cjCl0Hwxl0vXVRAhdW7/view?usp=drive_link.pdf",
        },
        {
            id: 8,
            titulo: "O paciente",
            autor: "Jasper Dewitt",
            classificacao: "4.0/5",
            anoLancamento: 2020,
            sinopse: "Em uma série de postagens na internet, o jovem – e extremamente autoconfiante – psiquiatra Parker H. conta suas experiências como médico residente em um sombrio manicômio de New England. Nesse hospital, Parker assume a tarefa de tratar um misterioso paciente. Trata-se do mais antigo caso do lugar: Joe, um homem considerado de grande risco, internado na instituição desde que tinha apenas seis anos de idade. Não há diagnóstico preciso para sua enfermidade, mas o quadro parece piorar dia a dia. Entre o medo e o desespero, aparentemente convencidas de que Joe poderia representar uma ameaça ao mundo exterior, as autoridades do hospital o mantêm estritamente isolado, confinado e com o mínimo de contato humano possível. Aqueles que já tentaram curar o paciente – ou mesmo se aproximar dele – acabaram se entregando à loucura... ou ao suicídio. O jovem médico calcula mal os riscos dessa relação, que se mostrará muito mais perigosa do que ele antecipava. Parker pensa ter a solução para o caso, e de fato consegue ir mais longe que qualquer outro profissional antes dele. Mas a que preço?.",
            imagem: "img/opaciente.jpg",
            pdf: "https://drive.google.com/file/d/1FkJ9o0rlATKOMeSMkKXcBYmY7isSdOE-/view?usp=drive_link.pdf",
        },
        {
            id: 9,
            titulo: "A Rainha Vermelha",
            autor: "Victoria Aveyard",
            classificacao: "4.0/5",
            anoLancamento: 2015,
            sinopse: "O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua família a sobreviver e não tem esperanças de escapar do vilarejo miserável onde mora. Entretanto, numa reviravolta do destino, ela consegue um emprego no palácio real, onde, em frente ao rei e a toda a nobreza, descobre que tem um poder misterioso… Mas como isso seria possível, se seu sangue é vermelho? Em meio às intrigas dos nobres prateados, as ações da garota vão desencadear uma dança violenta e fatal, que colocará príncipe contra príncipe - e Mare contra seu próprio coração.",
            imagem: "img/arainhavermelha.jpg",
            pdf: "https://drive.google.com/file/d/1FN5XJVtbgZZg4CH6MNztUpqny3AeTnlY/view?usp=drive_link.pdf",
        },
        {
            id: 10,
            titulo: "Biblioteca da meia-noite",
            autor: "Matt Haig",
            classificacao: "4.0/5",
            anoLancamento: 2020,
            sinopse: "Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido. Neste lugar entre a vida e a morte, e graças à ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália, reatar relacionamentos antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica... enfim, as opções são infinitas. Mas será que alguma dessas outras vidas é realmente melhor do que a que ela já tem? Em A Biblioteca da Meia-Noite, Nora Seed se vê exatamente na situação pela qual todos gostaríamos de poder passar: voltar no tempo e desfazer algo de que nos arrependemos. Diante dessa possibilidade, Nora faz um mergulho interior viajando pelos livros da Biblioteca da Meia-Noite até entender o que é verdadeiramente importante na vida e o que faz, de fato, com que ela valha a pena ser vivida.",
            imagem: "img/abibliotecadameianoite.jpg",
            pdf: "https://drive.google.com/file/d/1ErzvvckU3rozmhnEGnIwUHf4pvbotbBw/view?usp=drive_link.pdf",
        },
        {
            id: 11,
            titulo: "Deixada para trás",
            autor: "Charlie Donlea",
            classificacao: "4.0/5",
            anoLancamento: 2017,
            sinopse: "Certa noite de verão, elas desaparecem de uma festa à beira do lago. A polícia realiza uma busca intensa, mas não encontra nenhuma pista. Quando já haviam perdido as esperanças de encontrá-las com vida, Megan aparece, milagrosamente, ao conseguir escapar do cativeiro escondido nas profundezas da mata.",
            imagem: "img/deixadaparatras.jpg",
            pdf: "https://drive.google.com/file/d/1FiNGg4cRCDl7nEf0-V-a9goo1Xnz4dpk/view?usp=drive_link.pdf",
        },
        {
            id: 12,
            titulo: "O Colecionador",
            autor: "John Fowles",
            classificacao: "4.0/5",
            anoLancamento: 1963,
            sinopse: "O Colecionador é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro. O Colecionador também é a história de Miranda Gray, uma jovem estudante de artes sequestrada por um maníaco que acha que pode obrigá-la a se apaixonar por ele. Tudo o que ela deseja é escapar do cativeiro, e vai usar de toda sua inteligência para sobreviver ao inferno em que sua vida se transformou. O Colecionador é um livro narrado por dois personagens antagônicos: o sequestrador e sua vítima. Ferdinand e Miranda. Todos temos um pouco dos dois dentro de nós, concluímos ao final de suas páginas — quem consegue se desgrudar delas?.",
            imagem: "img/ocolecionador.jpg",
            pdf: "https://drive.google.com/file/d/1FiNGg4cRCDl7nEf0-V-a9goo1Xnz4dpk/view?usp=drive_link.pdf",
        },
        {
            id: 13,
            titulo: "O homem de giz",
            autor: "C.J. Tudor",
            classificacao: "4.0/5",
            anoLancamento: 2018,
            sinopse: "Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes. Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás.",
            imagem: "img/ohomemdegiz.jpg",
            pdf: "https://drive.google.com/file/d/1Fhuyk3cvVBWSwLNtg1wtkxXgqYiWesjy/view?usp=drive_link.pdf",
        },
        {
            id: 14,
            titulo: "No final morrem os dois",
            autor: "Adam Silvera",
            classificacao: "4.0/5",
            anoLancamento: 2017,
            sinopse: "No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia. Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem. Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia.",
            imagem: "img/osdoismorremnofinal.jpg",
            pdf: "https://drive.google.com/file/d/1FPL4Q2382sKzKkrMdd4Rz4ifXZndetgp/view?usp=drive_link.pdf",
        },
        {
            id: 15,
            titulo: "Jardim das borboletas",
            autor: "Dot Hutchison",
            classificacao: "4.0/5",
            anoLancamento: 2016,
            sinopse: "Perto de uma mansão isolada, existia um maravilhoso jardim. Nele, cresciam flores exuberantes, árvores frondosas... e uma coleção de preciosas borboletas: jovens mulheres, sequestradas e mantidas em cativeiro por um homem brutal e obsessivo, conhecido apenas como Jardineiro. Cada uma delas passa a ser identificada pelo nome de uma espécie de borboleta, tendo, então, a pele marcada com um complexo desenho correspondente. Quando o jardim é finalmente descoberto, uma das sobreviventes é levada às autoridades, a fim de prestar seu depoimento. A tarefa de juntar as peças desse complexo quebra-cabeça cabe aos agentes do fbi Victor Hanoverian e Brandon Eddinson, nesse que se tornará o mais chocante e perturbador caso de suas vidas. Mas Maya, a enigmática garota responsável por contar essa história, não parece disposta a esclarecer todos os sórdidos detalhes de sua experiência. Em meio a velhos ressentimentos, novos traumas e o terrível relato sobre um homem obcecado pela beleza, os agentes ficam com a sensação de que ela esconde algum grande segredo.",
            imagem: "img/ojardimdasborboletas.jpg",
            pdf: "https://drive.google.com/file/d/1FUukQKemP6Xd3zBK5Vj0-r9b_NkIPiCp/view?usp=drive_link.pdf",
        },
        
        
        

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

// Lista de todos os cards de livros
const livroCards = document.querySelectorAll(".livro-card");

// Definição da função de pesquisa
function searchBooks() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();

    livroCards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        const shouldShow = title.includes(searchTerm);

        card.style.display = shouldShow ? "block" : "none";
    });
}

  