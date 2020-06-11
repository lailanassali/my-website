let mouseCursor = document.querySelector('.cursor');

let main = document.querySelectorAll('.main-text a, .content img:nth-child(2)')

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

main.forEach(link => {
      link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    })
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    })
});

