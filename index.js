
function acaoAutora() {
    
    if (document.getElementById('infoAutora').classList.contains("tela")) return;
    else
    gsap.to('.tela', { duration: 0.5, top: 500, opacity: 0 })
    gsap.to('#infoAutora', { delay: 0.3, duration: 1, top: 0, opacity: 1 })

    gsap.set('#infoComprar', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoSobre', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoContato', {delay: 0.5, top: -500, opacity: 0})

    document.getElementById('infoAutora').classList.add('tela')

    document.getElementById('infoSobre').classList.remove('tela')
    document.getElementById('infoContato').classList.remove('tela')
    document.getElementById('infoComprar').classList.remove('tela')
} 

function acaoContato() {
    
    if (document.getElementById('infoContato').classList.contains("tela")) return;
    else
    gsap.to('.tela', { duration: 0.5, top: 500, opacity: 0 })
    gsap.to('#infoContato', { delay: 0.3, duration: 1, top: 0, opacity: 1 })

    gsap.set('#infoComprar', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoSobre', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoAutora', {delay: 0.5, top: -500, opacity: 0})

    document.getElementById('infoContato').classList.add('tela')

    document.getElementById('infoSobre').classList.remove('tela')
    document.getElementById('infoAutora').classList.remove('tela')
    document.getElementById('infoComprar').classList.remove('tela')
} 

function acaoComprar() {
    
    if (document.getElementById('infoComprar').classList.contains("tela")) return;
    else
    gsap.to('.tela', { duration: 0.5, top: 500, opacity: 0 })
    gsap.to('#infoComprar', { delay: 0.3, duration: 1, top: 0, opacity: 1 })

    gsap.set('#infoContato', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoSobre', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoAutora', {delay: 0.5, top: -500, opacity: 0})

    document.getElementById('infoComprar').classList.add('tela')

    document.getElementById('infoSobre').classList.remove('tela')
    document.getElementById('infoContato').classList.remove('tela')
    document.getElementById('infoAutora').classList.remove('tela')
} 

function voltar() {
    gsap.set('#infoSobre', {top: -500, opacity: 0})

    gsap.to('.tela', { duration: 0.5, top: 500, opacity: 0 })
    gsap.to('#infoSobre', { delay: 0.3, duration: 1, top: 0, opacity: 1 })    
    
    gsap.set('#infoContato', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoComprar', {delay: 0.5, top: -500, opacity: 0})
    gsap.set('#infoAutora', {delay: 0.5, top: -500, opacity: 0})

    document.getElementById('infoSobre').classList.add('tela')

    document.getElementById('infoAutora').classList.remove('tela')
    document.getElementById('infoContato').classList.remove('tela')
    document.getElementById('infoComprar').classList.remove('tela')
}
