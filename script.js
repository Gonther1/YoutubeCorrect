let menuIcon= document.querySelector(".menu-icon");
let sidebar= document.querySelector(".sidebar");
let container= document.querySelector(".container");
menuIcon.onclick= function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

// Ruta al archivo JSON
const rutaArchivoJSON = 'channelVideos.json';

// Usar la función fetch para obtener el JSON
fetch(rutaArchivoJSON)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos JSON
    console.log(data)
    const construirMainHead = async () => {
        let domElement = document.querySelector('.list-container')
        let a=0
        for (let i = 0; i < 24; i++) {
            domElement.insertAdjacentHTML('beforeend', /* html */`
                <div class="vid-list">
                <a href="second.html" class="targets" ><img src="${data['contents'][i]['video']['thumbnails'][0]['url']}" class="thumbnail"></a>
                <div class="flex-div">
                    <img src="${data['channelInfo']['avatar'][0]['url']}">
                    <div class="vid-info">
                        <a href="second.html">${data['contents'][i]['video']['title']}</a>
                        <p>${data['channelInfo']['title']}</p>
                        <p>${data['contents'][i]['video']['stats']['views']} views &bull; ${data['contents'][i]['video']['publishedTimeText']}</p>
                    </div>
                </div>
            </div>
            `)
            // let targetActual=document.getElementById(`#target${i}`)
            // targetActual.addEventListener('click', async function(){
            //     let url=data['contents'][i]['video']['videoId']
            //     console.log(url)
            // })

            
        }
    }
    construirMainHead()
    let enlaces = document.getElementsByClassName("targets");
    console.log(enlaces.length)
    // Agrega un evento click a cada enlace
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click", function(event) {
            // Previene el comportamiento por defecto del enlace (evitar que vaya a la URL)
            event.preventDefault();
            
            // Identifica cuál enlace fue clickeado
            var enlaceClickeado = event.target;
            console.log(enlaceClickeado)
            // Puedes acceder a la URL del enlace así: enlaceClickeado.href
            console.log("El enlace clickeado fue: " + enlaceClickeado.innerHTML);
        });
    }
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });