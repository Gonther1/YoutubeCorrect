let menuIcon= document.querySelector(".menu-icon");
let sidebar= document.querySelector(".sidebar");
let container= document.querySelector(".container");

menuIcon.onclick= function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
const construirMainHead = async () => {
    let domElement = document.querySelector('.list-container')
    let a=0
    for (let i = 0; i < 24; i++) {
        a>=8 ? a=0 :
        domElement.insertAdjacentHTML('beforeend', /* html */`
            <div class="vid-list">
            <a href="second.html"><img src="images/thumbnail${++a}.png" class="thumbnail"></a>
            <div class="flex-div">
                <img src="images/Jack.png">
                <div class="vid-info">
                    <a href="second.html">Best channel to learn coding thath help you to be a web developer</a>
                    <p>Easy Tutorials</p>
                    <p>15k Views &bull; 2 days</p>
                </div>
            </div>
        </div>
        `)
    }
}
const fillRightSidebar = async () => {
    let domElement = document.querySelector('.right-sidebar')
    let a=0
    for (let i = 0; i < 8; i++) {
        a>=8 ? a=0 :
        domElement.insertAdjacentHTML('beforeend', /* html */`
        <div class="side-video-list">
            <a href="" class="small-thumbnail"><img src="images/thumbnail${++a}.png"></a>
            <div class="vid-info">
                <a href="">Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
            </div>
        </div>     
        `)
    }
}
construirMainHead()
fillRightSidebar()

