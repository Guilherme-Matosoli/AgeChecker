function verificar(){
    var ano = new Date()
    var anoc = ano.getFullYear()
    var year = Number(window.document.querySelector('input#year').value)
    var res = window.document.querySelector('p#res')
    
    
    

    if (year > anoc || year <=0){
        window.alert('Erro, verifique as informações e tente novamente.')
    }else{
        var idade = anoc - year
        var sexp = window.document.getElementsByName('sex')
        var body = window.document.querySelector('body#body')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        }if (sexp[0].checked){
             genero = 'um homem'
             body.style.background = ('rgb(63, 63, 240)')
             if (idade >=0 && idade <=10){
                 img.setAttribute('src', './assets/bebe.png')
             }else if (idade >=10 && idade <= 50){
                 img.setAttribute('src', './assets/adultomasc.png')
             }else{
                 img.setAttribute('src', './assets/idosomasc.png')
             }
        }else if(sexp[1].checked){
            genero = 'uma mulher'
            body.style.background = ('pink')
                if (idade >=0 && idade <=10){
                    img.setAttribute('src', './assets/bebe.png')
                }else if (idade >=10 && idade <= 50){
                    img.setAttribute('src', './assets/adultofem.png')
                }else{
                    img.setAttribute('src', './assets/idosofem.png')
                
        }
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
}