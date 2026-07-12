/* ==========================================
   SARKAR ENTERPRISE V2
   script.js
========================================== */

// Sticky Header Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

        }

    }

});


// Fade In Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll(".card,.brand-box,.stat-box,.cta")
.forEach((el)=>{

    observer.observe(el);

});


// Active Navigation

const currentPage = location.pathname.split("/").pop();


document.querySelectorAll("nav a").forEach(link=>{

    const file = link.getAttribute("href");


    if(file === currentPage){

        link.classList.add("active");

    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target = document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});


console.log("SARKAR ENTERPRISE V2 Loaded Successfully");
