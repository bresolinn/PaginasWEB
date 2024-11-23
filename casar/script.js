let g = 0;
const botaoNao = document.querySelector('#nao');
const musica = document.getElementById('musica');

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (!isMobile) {
    botaoNao.addEventListener('mouseover', function() {
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

        g += 1;

        if (g % 5 === 0) {
            window.alert('pq vc não quer?? desamou');
        }
    });
} else {
    botaoNao.addEventListener('click', function() {
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

        g += 1;

        if (g % 5 === 0) {
            window.alert('pq vc não quer?? desamou');
        }
    });
}

document.querySelector('#sim').addEventListener('click', function() {
    document.querySelector('#sim').style.display = 'none';
    document.querySelector('#nao').style.display = 'none';
    document.querySelector('.oculto').style.display = 'block';
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
