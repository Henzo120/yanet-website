let coverLinks = document.querySelectorAll('#cover ul li a');

// Attach click event listener to each link
coverLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior (preventing page reload)
        event.preventDefault();
        
        // Close the cover menu
        cover.classList.remove('open-it');
        hamberOpen.src = './icons/open.png'; // Assuming you want to change the icon back to open
        
        // Get the target section ID from the href attribute
        let targetId = link.getAttribute('href').substring(1); // Remove '#' from href
        
        // Scroll to the target section smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let hamberOpen = document.getElementById('hamber-open');
let cover = document.getElementById('cover');
hamberOpen.onclick = function (){
    cover.classList.toggle('open-it');

    if(cover.classList.contains("open-it")){
        hamberOpen.src = './icons/close.png';

    } else{
        hamberOpen.src = './icons/open.png';
    }
}

//slider 

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});
// const layer = document.querySelector('.layer');
// layer.addEventListener('touchstart', () => {
//     layer.classList.add('hover');
// });
// layer.addEventListener('touchend', () => {
//     layer.classList.remove('hover');
// });



