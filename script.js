let menuIcon= document.querySelector(".menu-icon");
let sidebar= document.querySelector(".sidebar");
let container= document.querySelector(".container");
menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
const construirMainHead = async () => {
    let domElement = document.querySelector('.list-container')
    let a=0
    for (let i = 0; i < 24; i++) {
        a>=8 ? a=0 :
        console.log(a)
        domElement.insertAdjacentHTML('beforeend', /* html */`
            <div class="vid-list">
            <a href="second.html"><img src="images/thumbnail${++a}.png" class="thumbnail"></a>
            <div class="flex-div">
                <img src="images/Jack.png">
                <div class="vid-info">
                    <a href="">Best channel to learn coding thath help you to be a web developer</a>
                    <p>Easy Tutorials</p>
                    <p>15k Views &bull; 2 days</p>
                </div>
            </div>
        </div>
        `)
    }
}
construirMainHead()

const fillRightSidebar = async () => {
    let domElement = document.querySelector('#hola')
    let a=0
    for (let i = 0; i < 9; i++) {
        a>=8 ? a=0 :
        console.log(a)
        domElement.insertAdjacentHTML('beforeend', /* html */`
            <div class="side-video-list">
                <a href="" class="small-thumbail"><img src="images/thumbnail${++a}.png"></a>
                <div class="vid-info">
                    <a href="">Best channel that help you to be a web developer</a>
                    <p>Easy Tutorials</p>
                    <p>15k Views</p>
                </div>
            </div>
        `)
    }
}
fillRightSidebar()

// ${peticionJson.main.sectionHead.parrafo.map((value) => `
// <img src=" ${value.imagen} " class="me-2" style="width: 2vh; filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(72deg) brightness(104%) contrast(101%);" alt=""> ${value.texto} <br>
// `).join(" ")
// }