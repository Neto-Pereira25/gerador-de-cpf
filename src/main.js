import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css';

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('gerar-cpf')) {
        const geradorCPF = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = geradorCPF.gereNovoCpf();
    }
})

// (function() {
//     const geradorCPF = new GeraCPF();
//     const cpfGerado = document.querySelector('.cpf-gerado');
//     cpfGerado.innerHTML = geradorCPF.gereNovoCpf();
// })();