document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", (event) => {
         document.title =document.querySelector("input").value
    })
});

function loading() {
    let ls = localStorage.getItem("counter");
    let ss = sessionStorage.getItem("counter");

    if (ls) {
        document.getElementById("button_2").innerHTML = ls;
    }
    if (ss) {
        document.getElementById("button_3").innerHTML = ss;
    }
}

function test(id) {
    let current = document.getElementById(id).innerHTML;
    let num = JSON.parse(current) + 1;
    document.getElementById(id).innerHTML = num;
    if (id === "button_2") {
        localStorage.setItem("counter", num);
    }
    if (id === "button_3") {
        sessionStorage.setItem("counter", num);
    }
}
