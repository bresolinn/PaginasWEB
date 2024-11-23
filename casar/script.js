document.querySelector('#nao').addEventListener('mouseover', function() {
    const titulo = document.querySelector('h1');
    const botao = document.querySelector('#nao');
    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;
    const alturaTitulo = titulo.offsetHeight;

    const maxAltura = window.innerHeight - alturaBotao;
    const numeroAleatorio1 = alturaTitulo * 3.5 + Math.floor(Math.random() * (maxAltura - alturaTitulo * 4));

    const maxLargura = window.innerWidth - larguraBotao;
    const numeroAleatorio2 = Math.floor(Math.random() * (maxLargura - alturaTitulo - alturaBotao + 1));

    botao.style.position = 'absolute';
    botao.style.top = `${numeroAleatorio1}px`;
    botao.style.left = `${numeroAleatorio2}px`;
});

document.querySelector('#sim').addEventListener('click', function() {
    document.querySelector('#sim').style.display = 'none';
    document.querySelector('#nao').style.display = 'none';
    document.querySelector('.oculto').style.display = 'block';
    var musica = document.getElementById('musica');
        musica.play();
});

document.querySelector('#reiniciar').addEventListener('click', function() {
    document.querySelector('#sim').style.display = 'inline-block';
    document.querySelector('#nao').style.display = 'inline-block';
    document.querySelector('.oculto').style.display = 'none';
    document.querySelector('#nao').style.position = '';
    musica.pause();
        musica.currentTime = 0;
});

let g = 0;

document.querySelector('#nao').addEventListener('mouseover', function() {
    g += 1;

    if (g%5 === 0) {
        window.alert('pq vc não quer?? desamou');
    }
});