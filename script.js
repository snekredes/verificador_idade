function verificar(){
     var data = new Date()
     var ano  = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res  = document.querySelector('div#res')
     if ( fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
     } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' ,'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<12){
            // criança
            img.setAttribute('src' , 'criancah.png')
           } else if( idade < 21){
            // adoslecente
            img.setAttribute('src','jovemh.png')
           } else if (idade < 50){
            // adulto
            img.setAttribute('src' , 'adultoh.png')
           } else{
            // idoso
            img.setAttribute('src' , 'idosoh.png')
           }

        }else if(fsex[1].checked){
            genero = 'Mulher'
               if(idade>=0 && idade<12){
                // criança
                img.setAttribute('src' , 'criancam.png')
    
               } else if( idade < 21){
                // adoslecente
                img.setAttribute('src' , 'jovemm.png')
               } else if (idade < 50){
                // adulto
                img.setAttribute('src' , 'adultom.png')
               } else{
                // idoso
                img.setAttribute('src' , 'idosam.png')
               }
        }
        res.style.textAlign='center'
        res.style.fontWeight='900'
        res.style.fontSize='1em'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.<p>` 
        res.appendChild(img)

    

     }
    
    
    }