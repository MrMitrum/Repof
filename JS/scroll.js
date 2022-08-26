function start() {
    const scrollClass = "scroll";

    const scrolls = document.getElementsByClassName(`${scrollClass}`);
    scrolls.forEach(element => { AddScrollbar(element); });
}

function AddScrollbar(scroll) {
    if (scroll.scrollHeight <= scroll.clientHeight) return;

    scroll.insertAdjacentHTML('afterEnd', CreateScrollbar(scroll));
}

function CreateScrollbar(scroll) {
    const scrollHeight = scroll.scrollHeight;
    const clientHeight = scroll.clientHeight;

    return '<div className="scroll__track"><div className="scroll-thumb"></div></div>';
}


window.onload += start();