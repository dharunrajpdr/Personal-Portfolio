const nav = document.querySelector(".nav");

document
    .querySelector(".menu-btn")
    ?.addEventListener("click", () => 
        nav.classList.toggle("open")
    );

document
    .querySelectorAll("#navLinks a")
    .forEach(a => 
        a.addEventListener("click", () => 
            nav.classList.remove("open")
        )
    );

document.getElementById("year").textContent = new Date().getFullYear();
