function toggleMode() {
  const html = document.documentElement
    html.classList.toggle('light')
//segue abaixo modo alternativo de ativar o botar para mudar os modos
//  if(html.classList.contains ('light')) {
//    html.classList.remove('light') }
//        else {
//            html.classList.add('light')

  //pegar a tag im  
  const img = document.querySelector('#profile img')

//substituir a imagem
    if(html.classList.contains("light")) {
//se tiver light mode, adiconar a imagem de bone
    img.setAttribute("src", './assets/yggor-bone.png')    
    } else {
        //se estiver em darkmod manter a imagem normal
      img.setAttribute("src", './assets/yggor.png')    
    }
}

