const title = document.querySelector("div.hello:first-child h1");
console.log(title);
title.innerText = "Hello, Inside!";
title.style.color = "blue";

function handleTitleClick() {
    title.innerText = "OK, Title clicked";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here, click me";
}

function handleMouseLeave() {
    title.innerText = "Don't leave me";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

