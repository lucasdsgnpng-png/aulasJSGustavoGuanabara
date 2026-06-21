function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 8
    msg.innerHTML =`Agora são ${hora} horas`
    if(hora >=0 && hora <12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#E5B559'
    } else if (hora >=12 && hora <18) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#7EA3B6'
    } else {
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#081315'
    }
}
