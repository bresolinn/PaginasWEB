document.querySelector('#presente').addEventListener('click', function () {
    document.querySelector('#presente').style.display = 'none';

    var musica = document.getElementById('musica');
    musica.play();

    document.querySelector('#conteudo').style.display = 'block';

    document.body.style.backgroundColor = "rgb(255, 172, 172)";
});

document.querySelector('#sim').addEventListener('click', function () {
    document.querySelector('#cadusim').style.display = 'block';
    document.querySelector('#cadunao').style.display = 'none';
});

document.querySelector('#nao').addEventListener('click', function () {
    document.querySelector('#cadunao').style.display = 'block';
    document.querySelector('#cadusim').style.display = 'none';
});