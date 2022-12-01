let btn = document.getElementById('myBtn');
let modal = document.getElementById('myModal');
let close = document.getElementById('myClose');
let cont = document.getElementById('cont');
let menu = document.querySelectorAll('[data-btn]');
let tag = document.querySelectorAll('[data-field]');

//добавление элемента для секции когда на нее переходишь по меню
for (let i of menu) {
    i.addEventListener('click', () => {
        tag.forEach((index) => {
            if (index.dataset.field === i.dataset.btn) {
                index.classList.add('slade')
            } else {
                index.classList.remove('slade')
            }
        })
    })
}
//Удаление лишнего элемента при прокрутки мыши
window.addEventListener('wheel', () => {
    tag.forEach((index) => {
        index.classList.remove('slade')
    })
})



// tag.forEach((index) => {
//     index.classList.add('slade');
// })


// menu.forEach((index) => {
//     index.addEventListener('click', show);
// })

let opacity1 = () => {
    cont.style.opacity = 1;
}

let non = () => {
    modal.style.display = "none";
}

btn.onclick = () => {
    modal.style.display = "block";
    setTimeout(opacity1, 50);
}

close.onclick = () => {
    cont.style.opacity = 0;
    setTimeout(non, 800);
}

