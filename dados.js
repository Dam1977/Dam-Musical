// CATÁLOGO DE PARTITURAS (Encore e MuseScore)
// Para adicionar uma nova partitura, copie uma linha e altere:
// formato: "encore" ou "musescore"
// titulo: Nome da música
// detalhe: Instrumento ou Grade (ex: "Grade", "Clarinete", "Sax-Alto")
// caminho: Caminho exato do arquivo na pasta

const dadosPartituras = [
  // --- ARQUIVOS ENCORE (.enc) ---
  { formato: "encore", titulo: "A Resposta", detalhe: "Grade", caminho: "Partitura/arquivo.enc/A Resposta - Grade.enc" },
  { formato: "encore", titulo: "A Vitória da Cruz", detalhe: "Grade", caminho: "Partitura/arquivo.enc/A Vitória da Cruz - Grade.enc" },
  { formato: "encore", titulo: "Alerta", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Alerta.enc - Grade.enc" },
  { formato: "encore", titulo: "Anthem Of Praise", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Anthem Of Praise - GRADE.enc" },
  { formato: "encore", titulo: "Atrai-Me", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Atrai-Me - Grade.enc" },
  { formato: "encore", titulo: "Até Que O Senhor Venha", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Até Que O Senhor Venha - Grade.enc" },
  { formato: "encore", titulo: "Autor da minha fé", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Autor da minha fé - Grade .enc" },
  { formato: "encore", titulo: "Cadeias Quebrar", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Cadeias Quebrar - Grade.enc" },
  { formato: "encore", titulo: "Caminho No Deserto", detalhe: "Grade", caminho: "Partitura/arquivo.enc/Caminho No Deserto - Grade.enc" },
  { formato: "encore", titulo: "Canta Meu Povo", detalhe: "Clarinete", caminho: "Partitura/arquivo.enc/Canta Meu Povo - Clarinete.enc" },

  // --- ARQUIVOS MUSESCORE (.mscz) ---
  { formato: "musescore", titulo: "Bondade de Deus", detalhe: "Cello", caminho: "Partitura/partitura.mscz/Bondade de Deus Cello.mscz" },
  { formato: "musescore", titulo: "Bondade de Deus", detalhe: "Clarinete", caminho: "Partitura/partitura.mscz/Bondade de Deus Clarinete.mscz" },
  { formato: "musescore", titulo: "Bondade de Deus", detalhe: "Sax-Alto", caminho: "Partitura/partitura.mscz/Bondade de Deus Sax-Alto.mscz" },
  { formato: "musescore", titulo: "Bondade de Deus", detalhe: "Viola", caminho: "Partitura/partitura.mscz/Bondade de Deus Viola.mscz" },
  { formato: "musescore", titulo: "Bondade de Deus", detalhe: "Violino", caminho: "Partitura/partitura.mscz/Bondade de Deus Violino.mscz" },
  { formato: "musescore", titulo: "Há Jesus", detalhe: "Grade", caminho: "Partitura/partitura.mscz/Há Jesus - Grade.mscz" },

];

// CATÁLOGO DE CIFRAS (Harpa Cristã e Louvores Avulsos)
// Para adicionar uma nova cifra, copie uma linha e altere:
// categoria: "harpa" ou "avulsos"
// titulo: Número e/ou nome do hino ou louvor
// caminho: Caminho exato do PDF na pasta

const dadosCifras = [
  // --- HARPA CRISTÃ ---
  { categoria: "harpa", titulo: "001 - Eu Te Louvo", caminho: "Cifra/Harpa Cristã/010.pdf" },
  { categoria: "harpa", titulo: "012 - Vem Já Pecador", caminho: "Cifra/Harpa Cristã/012.pdf" },
  { categoria: "harpa", titulo: "015 - Conversão", caminho: "Cifra/Harpa Cristã/015.pdf" },
  { categoria: "harpa", titulo: "016 - Despertar Para o Trabalho", caminho: "Cifra/Harpa Cristã/016.pdf" },
  { categoria: "harpa", titulo: "025 - Jesus Tu És BomJesus", caminho: "Cifra/Harpa Cristã/025.pdf" },
  { categoria: "harpa", titulo: "036 - O Exilado", caminho: "Cifra/Harpa Cristã/036.pdf" },
  { categoria: "harpa", titulo: "039 - Alvo Mais Que A Neve", caminho: "Cifra/Harpa Cristã/039.pdf" },
  { categoria: "harpa", titulo: "051 - Adoração Reconhecida", caminho: "Cifra/Harpa Cristã/051.pdf" },
  { categoria: "harpa", titulo: "056 - Tudo em Cristo", caminho: "Cifra/Harpa Cristã/056.pdf" },
  { categoria: "harpa", titulo: "061 - Deus Tomará Conta de Ti", caminho: "Cifra/Harpa Cristã/061.pdf" },
  { categoria: "harpa", titulo: "073 - Vem Vem a Mim", caminho: "Cifra/Harpa Cristã/073.pdf" },
  { categoria: "harpa", titulo: "075 - Em Jesus Tens a Palma da Vitória", caminho: "Cifra/Harpa Cristã/075.pdf" },
  { categoria: "harpa", titulo: "076 - Vem ó Pródigo", caminho: "Cifra/Harpa Cristã/076.pdf" },
  { categoria: "harpa", titulo: "077 - Guarda o Contacto", caminho: "Cifra/Harpa Cristã/077.pdf" },
  { categoria: "harpa", titulo: "100 - O Bom Consolador", caminho: "Cifra/Harpa Cristã/100.pdf" },
  { categoria: "harpa", titulo: "107 - Firmes nas Promessas", caminho: "Cifra/Harpa Cristã/107.pdf" },
  { categoria: "harpa", titulo: "122 - Fogo Divino", caminho: "Cifra/Harpa Cristã/122.pdf" },
  { categoria: "harpa", titulo: "124 - Adoração", caminho: "Cifra/Harpa Cristã/124.PDF" },
  { categoria: "harpa", titulo: "166 - Deixa Entrar o Rei da Glória", caminho: "Cifra/Harpa Cristã/166.pdf" },
  { categoria: "harpa", titulo: "171 - Um Pecador Remido", caminho: "Cifra/Harpa Cristã/171.pdf" },
  { categoria: "harpa", titulo: "200 - O Bondoso Amigo", caminho: "Cifra/Harpa Cristã/200.pdf" },
  { categoria: "harpa", titulo: "224 - É o Tempo de Segar", caminho: "Cifra/Harpa Cristã/224.pdf" },
  { categoria: "harpa", titulo: "258 - Na Rocha Eterna Firmada", caminho: "Cifra/Harpa Cristã/258.pdf" },
  { categoria: "harpa", titulo: "300 - Nossa Esperança", caminho: "Cifra/Harpa Cristã/300.pdf" },
  { categoria: "harpa", titulo: "301 - Vem Cear", caminho: "Cifra/Harpa Cristã/301.pdf" },
  { categoria: "harpa", titulo: "303 - Precisamos de Jesus", caminho: "Cifra/Harpa Cristã/303.pdf" },
  { categoria: "harpa", titulo: "328 - O Pão da Vida", caminho: "Cifra/Harpa Cristã/328.pdf" },
  { categoria: "harpa", titulo: "382 - Olhando para o Carvalho", caminho: "Cifra/Harpa Cristã/382.pdf" },
  { categoria: "harpa", titulo: "400 - Em Jesus", caminho: "Cifra/Harpa Cristã/400.pdf" },
  { categoria: "harpa", titulo: "401 - Jesus Voltará", caminho: "Cifra/Harpa Cristã/401.pdf" },
  { categoria: "harpa", titulo: "413 - Meu Pastor", caminho: "Cifra/Harpa Cristã/413.pdf" },
  { categoria: "harpa", titulo: "430 - Evangelho da Salvação", caminho: "Cifra/Harpa Cristã/430.pdf" },
  { categoria: "harpa", titulo: "432 - Consagração ao Senhor", caminho: "Cifra/Harpa Cristã/432.pdf" },
  { categoria: "harpa", titulo: "434 - A Teus Pés", caminho: "Cifra/Harpa Cristã/434.pdf" },
  { categoria: "harpa", titulo: "467 - Sobre as Ondas do Mar", caminho: "Cifra/Harpa Cristã/467.pdf" },
  { categoria: "harpa", titulo: "482 - Comunhão", caminho: "Cifra/Harpa Cristã/482.pdf" },
  { categoria: "harpa", titulo: "491 - Há Poder no Sangue de Jesus", caminho: "Cifra/Harpa Cristã/491.pdf" },
  { categoria: "harpa", titulo: "525 - Vencendo Vem Jesus", caminho: "Cifra/Harpa Cristã/525.pdf" },
  { categoria: "harpa", titulo: "535 - Tú és fiel Senhor", caminho: "Cifra/Harpa Cristã/535.pdf" },
  { categoria: "harpa", titulo: "545 - Porque Ele Vive", caminho: "Cifra/Harpa Cristã/545.pdf" },
  { categoria: "harpa", titulo: "577 - Em Fervente Oração", caminho: "Cifra/Harpa Cristã/577.pdf" },
  { categoria: "harpa", titulo: "578 - Sossegai", caminho: "Cifra/Harpa Cristã/578.pdf" },

  // --- LOUVORES AVULSOS ---
  { categoria: "avulsos", titulo: "Attos2 Worship - Medley Pentecostal", caminho: "Cifra/Louvores/Attos2 Worship - Medley Pentecostal.pdf" },
  { categoria: "avulsos", titulo: "Até Que o Senhor Venha - Ministério Zoe", caminho: "Cifra/Louvores/Até Que o Senhor Venha - Ministério Zoe.pdf" },
  { categoria: "avulsos", titulo: "Canta Meu Povo - Jair Pires", caminho: "Cifra/Louvores/Canta Meu Povo - Jair Pires.pdf" },
  { categoria: "avulsos", titulo: "Cicatrizes - Vanessa Carvalho", caminho: "Cifra/Louvores/Cicatrizes - Vanessa Carvalho.pdf" },
  { categoria: "avulsos", titulo: "Com Coração - Corinho", caminho: "Cifra/Louvores/Com Coração.pdf" },
  { categoria: "avulsos", titulo: "Contigo Está - Coral Resgate", caminho: "Cifra/Louvores/Contigo Está - Coral Resgate.pdf" },
  { categoria: "avulsos", titulo: "Esperança - Julia Vitória", caminho: "Cifra/Louvores/Esperança - Julia Vitória - .pdf" },
  { categoria: "avulsos", titulo: "Marcas da Dor - Samuel Mariano", caminho: "Cifra/Louvores/Marcas da Dor - Samuel Mariano.pdf" },
  { categoria: "avulsos", titulo: "Medley Derrama Fogo - AD Vila Tietê", caminho: "Cifra/Louvores/Medley Derrama Fogo - AD Vila Tietê.pdf" },
  { categoria: "avulsos", titulo: "Medley Escudo, Planos de Deus, Sou Um Milagre", caminho: "Cifra/Louvores/Medley Escudo, Planos de Deus, Sou Um Milagre.pdf" },
  { categoria: "avulsos", titulo: "Medley João 20, Pra Sempre, Pq Ele Vive", caminho: "Cifra/Louvores/Medley João 20, Pra Sempre, Pq Ele Vive.pdf" },
  { categoria: "avulsos", titulo: "Medley Oxigênio, Ainda Tem Vida Ai, Jesus Venceu", caminho: "Cifra/Louvores/Medley Oxigênio + Ainda Tem Vida Ai + Jesus Venceu .pdf" },
  { categoria: "avulsos", titulo: "Medley Vento do Espírito - Chegou o Avivamento - Amigo Espírito Santo - Adolescentes Kids", caminho: "Cifra/Louvores/Medley Vento do Espírito - Chegou o Avivamento - Amigo Espírito Santo - Adolescentes Kids.pdf" },
  { categoria: "avulsos", titulo: "Medley Vinho e Pão, Vem Cear - Fernanda Brum", caminho: "Cifra/Louvores/Medley Vinho e Pão, Vem Cear - Fernanda Brum.pdf" },
  { categoria: "avulsos", titulo: "Medley Viverão, Ezequiel, Eu Navegarei - Grande Coral", caminho: "Cifra/Louvores/Medley Viverão, Ezequiel, Eu Navegarei - Grande Coral.pdf" },
  { categoria: "avulsos", titulo: "Medley Volta Logo Jesus-Irei Eu Pra Linda Cidade-Imagine-João Viu-Onde Está Aquele", caminho: "Cifra/Louvores/Medley Volta Logo Jesus-Irei Eu Pra Linda Cidade-Imagine-João Viu-Onde Está Aquele.pdf" },
  { categoria: "avulsos", titulo: "Medley É Adorar", caminho: "Cifra/Louvores/Medley É Adorar.pdf" },
  { categoria: "avulsos", titulo: "Meu Pai - Unaspinho", caminho: "Cifra/Louvores/Meu Pai - Unaspinho.pdf" },
  { categoria: "avulsos", titulo: "Não Conseguirei Sozinho - Samuel Tayrone", caminho: "Cifra/Louvores/Não Conseguirei Sozinho - Samuel Tayrone.pdf" },
  { categoria: "avulsos", titulo: "Não Te Troco - Rafael Bitencourt", caminho: "Cifra/Louvores/Não Te Troco - Rafael Bitencourt.pdf" },
  { categoria: "avulsos", titulo: "Medley Escudo, Planos de Deus, Sou Um Milagre", caminho: "Cifra/Louvores/Medley Escudo, Planos de Deus, Sou Um Milagre.pdf" },
  { categoria: "avulsos", titulo: "Medley João 20, Pra Sempre, Pq Ele Vive", caminho: "Cifra/Louvores/Medley João 20, Pra Sempre, Pq Ele Vive.pdf" },
  { categoria: "avulsos", titulo: "Medley Oxigênio, Ainda Tem Vida Ai, Jesus Venceu", caminho: "Cifra/Louvores/Medley Oxigênio + Ainda Tem Vida Ai + Jesus Venceu .pdf" },
  { categoria: "avulsos", titulo: "Medley Vento do Espírito - Chegou o Avivamento - Amigo Espírito Santo - Adolescentes Kids", caminho: "Cifra/Louvores/Medley Vento do Espírito - Chegou o Avivamento - Amigo Espírito Santo - Adolescentes Kids.pdf" },
  { categoria: "avulsos", titulo: "Medley Vinho e Pão, Vem Cear - Fernanda Brum", caminho: "Cifra/Louvores/Medley Vinho e Pão, Vem Cear - Fernanda Brum.pdf" },
  { categoria: "avulsos", titulo: "Medley Viverão, Ezequiel, Eu Navegarei - Grande Coral", caminho: "Cifra/Louvores/Medley Viverão, Ezequiel, Eu Navegarei - Grande Coral.pdf" },
  { categoria: "avulsos", titulo: "Medley Volta Logo Jesus-Irei Eu Pra Linda Cidade-Imagine-João Viu-Onde Está Aquele", caminho: "Cifra/Louvores/Medley Volta Logo Jesus-Irei Eu Pra Linda Cidade-Imagine-João Viu-Onde Está Aquele.pdf" },
  { categoria: "avulsos", titulo: "Medley É Adorar", caminho: "Cifra/Louvores/Medley É Adorar.pdf" },
  { categoria: "avulsos", titulo: "Meu Pai - Unaspinho", caminho: "Cifra/Louvores/Meu Pai - Unaspinho.pdf" },
  { categoria: "avulsos", titulo: "Não Conseguirei Sozinho - Samuel Tayrone", caminho: "Cifra/Louvores/Não Conseguirei Sozinho - Samuel Tayrone.pdf" },
  { categoria: "avulsos", titulo: "Não Te Troco - Rafael Bitencourt", caminho: "Cifra/Louvores/Não Te Troco - Rafael Bitencourt.pdf" },
  { categoria: "avulsos", titulo: "O Altar Sou Eu - Carol Braga e Felipe Rodrigues", caminho: "Cifra/Louvores/O Altar Sou Eu - Carol Braga e Felipe Rodrigues.pdf" },
  { categoria: "avulsos", titulo: "O Amor Me Amou - Amanda Loyola e Marcelo Markes", caminho: "Cifra/Louvores/O Amor Me Amou - Amanda Loyola e Marcelo Markes.pdf" },
  { categoria: "avulsos", titulo: "O Autor Sou Eu - Carol Braga & Felipe Rodrigues", caminho: "Cifra/Louvores/O Autor Sou Eu - Carol Braga & Felipe Rodrigues.pdf" },
  { categoria: "avulsos", titulo: "O Gigante Vai Cai - Mara Lima", caminho: "Cifra/Louvores/O Gigante Vai Cai - Mara Lima.pdf" },
  { categoria: "avulsos", titulo: "O Nome De Jesus - Vanilda Bordieri", caminho: "Cifra/Louvores/O Nome De Jesus - Vanilda Bordieri.pdf" },
  { categoria: "avulsos", titulo: "Poderoso - Coral Voice Soul", caminho: "Cifra/Louvores/Poderoso - Coral Voice Soul.pdf" },
  { categoria: "avulsos", titulo: "Rei da Glória - King of Glory", caminho: "Cifra/Louvores/Rei da Glória - King of Glory.pdf" },
  { categoria: "avulsos", titulo: "Rei Do Meu Coração - Gaby Sampaio", caminho: "Cifra/Louvores/Rei Do Meu Coração - Gaby Sampaio.pdf" },
  { categoria: "avulsos", titulo: "Rompendo em Fé - Comunidade da Graça", caminho: "Cifra/Louvores/Rompendo em Fé - Comunidade da Graça.pdf" },
  { categoria: "avulsos", titulo: "Salmos 103 - Quarteto Alpha", caminho: "Cifra/Louvores/Salmos 103 - Quarteto Alpha.pdf" },
  { categoria: "avulsos", titulo: "Santifica-Me - Coral Resgate", caminho: "Cifra/Louvores/Santifica-Me - Coral Resgate.pdf" },
  { categoria: "avulsos", titulo: "Soldado Ferido - Júnior", caminho: "Cifra/Louvores/Soldado Ferido - Júnior.pdf" },
  { categoria: "avulsos", titulo: "Tu És Santo - Jaqueline Pires", caminho: "Cifra/Louvores/Tu És Santo - Jaqueline Pires.pdf" },
  { categoria: "avulsos", titulo: "Tudo Entregarei - Giselli Cristina", caminho: "Cifra/Louvores/Tudo Entregarei - Giselli Cristina.pdf" },
  { categoria: "avulsos", titulo: "Vem Senhor - Stella Laura", caminho: "Cifra/Louvores/Vem Senhor - Stella Laura.pdf" },
  { categoria: "avulsos", titulo: "Yahweh Se Manifestará", caminho: "Cifra/Louvores/YAHWEH SE MANIFESTARÁ-cifra.pdf" }
  
];

