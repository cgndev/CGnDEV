const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);
h1.innerText = "Hello, Inside!";
h1.style.color = "blue";

function handleTitleClick() {
    if(h1.style.color === "blue") {
        h1.style.color = "tomato";
    }
    else {
        h1.style.color = "blue";
    }
    h1.innerText = "OK, Title clicked";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here, click me";
}

function handleMouseLeave() {
    h1.innerText = "Don't leave me";
}


function handleWindowResize() {
    document.body.style.backgroundColor = "totato";
}

// function handleCopy() {
//     window.alert("do not copy");
// }


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleCopy);

