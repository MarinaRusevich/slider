

let n=1, max=6;

let links = [
    "https://www.google.ru/", "https://www.yandex.by/", "https://mail.ru/", "https://www.youtube.com/","https://facebook.com/", "https://www.instagram.com/"];

function timer() {
    if (++n>max) n = 1;
   changeSlide();
    timerId = setTimeout(timer, 2000);

}

function stop() {
clearTimeout(timerId);
} 

function next() {
    if (n>=max) n = 1;
    else n++;
   changeSlide();
}

function prev() {
    if (n>1) n--;
    else n=max;
   changeSlide();
}

function changeSlide() {
    link1.href = links[n-1];
    img1.src = `images/img${n}b.jpg`;
}