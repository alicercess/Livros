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
        {
            id: 16,
            titulo: "Uma vida pequena",
            autor: "Hanya Yanagihara",
            classificacao: "4.0/5",
            anoLancamento: 2016,
            sinopse: "Quando quatro amigos de uma pequena faculdade de Massachusetts se mudam para Nova York em busca de uma vida melhor, eles se veem falidos, sem rumo e amparados apenas por sua amizade e por suas ambições. Willem, lindo e generoso, é aspirante a ator; JB, nascido no Brooklyn, é um pintor perspicaz e às vezes cruel que busca de todas as formas ingressar no mundo das artes; Malcolm é um arquiteto frustrado que trabalha numa empresa de renome; e o solitário, brilhante e enigmático Jude funciona como o centro gravitacional do grupo. Com o tempo, o relacionamento deles se aprofunda e se anuvia, matizado pelo vício, pelo sucesso e pelo orgulho. No entanto, seu maior desafio, como cada um passa a perceber, é o próprio Jude, um litigante extremamente talentoso na meia-idade, porém, ao mesmo tempo, um homem cada vez mais atormentado, a mente e o corpo marcados pelas cicatrizes de uma infância misteriosa, e assombrado pelo que teme ser um trauma tão intenso que não só não será capaz de superar — mas que vai definir sua vida para sempre. Com uma prosa magnífica e genial, Hanya Yanagihara criou um hino trágico e transcendental do amor fraterno, uma representação magistral da dor física e psicológica, e uma análise da verdade nua e crua que permeia a tirania da memória e os limites da resistência humana.",
            imagem: "img/umavidapequena.jpg",
            pdf: "https://drive.google.com/file/d/1GMtF_AfkK_7Bmr8jiLiEVCWEA5S4U-Yu/view?usp=drive_link.pdf",
        },
        {
            id: 17,
            titulo: "A menina que roubava livros",
            autor: "Markus Zusak",
            classificacao: "4.5/5",
            anoLancamento: 2005,
            sinopse: "Traços de uma sobrevivente: a mãe comunista, perseguida pelo nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe a adotá-los por dinheiro. O garoto morre no trajeto e é enterrado por um coveiro que deixa cair um livro na neve. É o primeiro de uma série que a menina vai surrupiar ao longo dos anos. O único vínculo com a família é esta obra, que ela ainda não sabe ler. Assombrada por pesadelos, ela compensa o medo e a solidão das noites com a conivência do pai adotivo, um pintor de parede bonachão que lhe dá lições de leitura. Alfabetizada sob vistas grossas da madrasta, Liesel canaliza urgências para a literatura. Em tempos de livros incendiados, ela os furta, ou os lê na biblioteca do prefeito da cidade. A vida ao redor é a pseudo-realidade criada em torno do culto a Hitler na Segunda Guerra. Ela assiste à eufórica celebração do aniversário do Führer pela vizinhança. Teme a dona da loja da esquina, colaboradora do Terceiro Reich. Faz amizade com um garoto obrigado a integrar a Juventude Hitlerista. E ajuda o pai a esconder no porão um judeu que escreve livros artesanais para contar a sua parte naquela História. A Morte, perplexa diante da violência humana, dá um tom leve e divertido à narrativa deste duro confronto entre a infância perdida e a crueldade do mundo adulto, um sucesso absoluto - e raro - de crítica e público.",
            imagem: "img/ameninaqueroubavalivros.jpg",
            pdf: "https://drive.google.com/file/d/1GsHYu5kwdt_z93lcmAPfbeu_k93aAu_h/view?usp=drive_link.pdf",
        },
        {
            id: 18,
            titulo: "Verity",
            autor: "Colleen Hoover",
            classificacao: "4.0/5",
            anoLancamento: 2018,
            sinopse: "Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série. Para que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity - e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal. Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity?",
            imagem: "img/verity.jpg",
            pdf: "https://drive.google.com/file/d/1Gq20dqFhkZOXOzF7k0PrKGgiZ6DgD-HI/view?usp=drive_link.pdf",
        },
        {
            id: 19,
            titulo: "A Hipótese do amor",
            autor: "Ali Hazelwood",
            classificacao: "4.0/5",
            anoLancamento: 2022,
            sinopse: "Quando um namoro de mentira entre cientistas encontra a irresistível força da atração, todas as teorias cuidadosamente calculadas sobre o amor são postas à prova. Com personagens cativantes e diálogos afiados, este livro engraçado, sexy e inteligente se tornou uma das grandes sensações do TikTok.",
            imagem: "img/ahipotesedoamor.jpg",
            pdf: "https://drive.google.com/file/d/1GoItgVBWLCsv3mQjE5F8d4lf1Dy82BQA/view?usp=drive_link.pdf",
        },
        {
            id: 20,
            titulo: "Suicidas",
            autor: "Raphael Montes",
            classificacao: "4.0/5",
            anoLancamento: 2012,
            sinopse: "Conhecemos a história de Alê e seus colegas, jovens da elite carioca encontrados mortos no porão do sítio de um deles em condições misteriosas que indicam que os nove amigos participaram de um perigoso e fatídico jogo de roleta russa. Aos que ficaram, resta tentar descobrir o que teria levado aqueles adolescentes, aparentemente felizes e privilegiados, a tirar a própria vida.",
            imagem: "img/suicidas.jpg",
            pdf: "https://drive.google.com/file/d/1GmOVDwQqKpHQa8uBkfAeil7EC0bMrXb5/view?usp=drive_link.pdf",
        },
        {
            id: 21,
            titulo: "É assim que começa",
            autor: "Colleen Hoover",
            classificacao: "4.0/5",
            anoLancamento: 2022,
            sinopse: "Lily Bloom continua administrando uma floricultura. Seu ex-marido abusivo, Ryle Kincaid, ainda é um    cirurgião. Mas agora os dois estão oficialmente divorciados e dividem a guarda da filha, Emerson. Quando Lily esbarra em Atlas ― com quem não fala há quase dois anos ―, parece que finalmente chegou o momento de retomar o relacionamento da adolescência, já que ele também está solteiro e parece retribuir os sentimentos de Lily. Mas apesar de divorciada, Lily não está exatamente livre de Ryle. Culpando Atlas pelo fim de seu casamento, Ryle não está nada disposto a aceitar o novo relacionamento de Lily, ainda mais com Atlas, o último homem que aceitaria ver perto de sua filha e da ex-esposa. Alternando entre os pontos de vista de Atlas e Lily, É assim que começa retoma logo após o epílogo de É assim que acaba. Revelando mais sobre o passado de Atlas e acompanhando a jornada de Lily para abraçar a sua segunda chance, no amor enquanto lida com um ex-marido ciumento, É assim que começa prova que ninguém entrega uma leitura mais emocionante do que Colleen Hoover.",
            imagem: "img/eassimquecomeça.jpg",
            pdf: "https://drive.google.com/file/d/1GjCO9itxN-G4eW0yfBGMQ3Zn5fo_XLrZ/view?usp=drive_link.pdf",
        },
        {
            id: 22,
            titulo: "Todo esse tempo",
            autor: "Mikki Daugthtry e Rachael Lippincott",
            classificacao: "4.5/5",
            anoLancamento: 2020,
            sinopse: "Kyle e Kimberly são o casal perfeito. Pelo menos, é o que Kyle acha. Por isso, quando Kimberly termina com ele na noite da festa de formatura, o mundo inteiro do garoto vira de cabeça para baixo - literalmente. O carro deles capota após sofrerem um acidente e, quando Kyle acorda no hospital, descobre que teve uma lesão cerebral. Kimberly está morta. E ninguém consegue entender a sua dor. Até ele conhecer Marley. Marley também sofreu uma perda, uma perda que ela acredita ter sido culpa dela. Quando seus caminhos se cruzam, Kyle vê nela um espelho de tudo o que está sentindo. Conforme Kyle e Marley curam suas feridas, seus sentimentos um pelo outro ficam mais fortes. De uma tragédia, nasce um amor que parece predestinado. Ainda assim, Kyle não consegue se livrar da sensação de que está caminhando rumo a outro desastre que vai explodir sua vida assim que ele começar a se recompor.",
            imagem: "img/todoessetempo.jpg",
            pdf: "https://drive.google.com/file/d/1GiyjiKQWv7Lm1iU4taQFw44eiks5FIRl/view?usp=drive_link.pdf",
        },
        {
            id: 23,
            titulo: "Daisey Jones and The Six",
            autor: "Taylor Jekins Reid",
            classificacao: "4.0/5",
            anoLancamento: 2019,
            sinopse: "Todo mundo conhece Daisy Jones & The Six. Nos anos setenta, dominavam as paradas de sucesso, faziam shows para plateias lotadas e conquistavam milhões de fãs. Eram a voz de uma geração, e Daisy, a inspiração de toda garota descolada. Mas no dia 12 de julho de 1979, no último show da turnê Aurora, eles se separaram. E ninguém nunca soube por quê. Até agora. Esta é história de uma menina de Los Angeles que sonhava em ser uma estrela do rock e de uma banda que também almejava seu lugar ao sol. E de tudo o que aconteceu ― o sexo, as drogas, os conflitos e os dramas ― quando um produtor apostou (certo!) que juntos poderiam se tornar lendas da música. Neste romance inesquecível narrado a partir de entrevistas, Taylor Jenkins Reid reconstitui a trajetória de uma banda fictícia com a intensidade presente nos melhores backstages do rock’n’roll.",
            imagem: "img/daysyjones.jpg",
            pdf: "https://drive.google.com/file/d/1GeBMXWQwj3Q4fRwxOk82FRjmy0GaYzkx/view?usp=drive_link.pdf",
        },
        {
            id: 24,
            titulo: "O Vilarejo",
            autor: "Raphael Montes",
            classificacao: "4.0/5",
            anoLancamento: 2015,
            sinopse: "Em 1589, o padre e demonologista Peter Binsfeld fez a ligação de cada um dos pecados capitais a um demônio, supostamente responsável por invocar o mal nas pessoas. É a partir daí que Raphael Montes cria sete histórias situadas em um vilarejo isolado, apresentando a lenta degradação dos moradores do lugar, e pouco a pouco o próprio vilarejo vai sendo dizimado, maculado pela neve e pela fome. As histórias podem ser lidas em qualquer ordem, sem prejuízo de sua compreensão, mas se relacionam de maneira complexa, de modo que ao término da leitura as narrativas convergem para uma única e surpreendente conclusão.",
            imagem: "img/ovilarejo.jpg",
            pdf: "https://drive.google.com/file/d/1GdH7Ck_P2pwSPiUF8qivUdv56CN_iF7i/view?usp=drive_link.pdf",
        },
        {
            id: 25,
            titulo: "Tudo é rio",
            autor: "Carla Madeira",
            classificacao: "4.0/5",
            anoLancamento: 2014,
            sinopse: "Tudo é rio, é o livro de estreia de Carla Madeira. Com uma narrativa madura, precisa e ao mesmo tempo delicada e poética, o romance narra a história do casal Dalva e Venâncio, que tem a vida transformada após uma perda trágica, resultado do ciúme doentio do marido, e de Lucy, a prostituta mais depravada e cobiçada da cidade, que entra no caminho deles, formando um triângulo amoroso.",
            imagem: "img/tudoerio.jpg",
            pdf: "https://drive.google.com/file/d/1GSiFy8XJ7pnlqSnKwngoq4CtaHYOpcVm/view?usp=drive_link.pdf",
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


