function tocaSom (seletorElemento) {
    const elemento = document.querySelector(seletorElemento);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou seletor inválido!');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    console.log(contador);

    tecla.onkeydown = function (evento) {

        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    

}



/*
enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}` 

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}



O quão grande poderia ser esse código ----!
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; //Usado para acessar a documentação do HTML.


function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;


function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;


function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;


function tocaSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;


function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;


function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;


function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;


function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/
