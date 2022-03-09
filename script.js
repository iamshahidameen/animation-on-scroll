const boxes = document.querySelectorAll(".box");

let winLowerBottom = window.innerHeight / 5 * 5;

window.addEventListener('scroll', () => {
    boxes.forEach((box) => {
        let boxTop = box.getBoundingClientRect();
        if(boxTop.top < winLowerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
})

