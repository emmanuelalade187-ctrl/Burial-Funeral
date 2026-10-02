/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close mobile menu
   when a link is clicked */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });



/* =========================
   COUNTDOWN
========================= */

/*
    Funeral service:
    14 November 2026
    10:00 AM
*/

const funeralDate =
    new Date("November 14, 2026 10:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        funeralDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference /
            1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);



/* =========================
   COPY ACCOUNT NUMBER
========================= */

const copyButton =
    document.getElementById("copyButton");


copyButton.addEventListener(
    "click",
    async function () {

        const accountNumber =
            document.getElementById(
                "accountNumber"
            ).textContent.trim();


        try {

            await navigator.clipboard
                .writeText(accountNumber);


            copyButton.textContent =
                "COPIED ✓";


            setTimeout(function () {

                copyButton.textContent =
                    "COPY ACCOUNT NUMBER";

            }, 2000);


        } catch (error) {

            alert(
                "Account number: " +
                accountNumber
            );

        }

    }
);



/* =========================
   RSVP FORM
========================= */

const rsvpForm =
    document.getElementById("rsvpForm");

const formMessage =
    document.getElementById("formMessage");




/* =========================
   BACK TO TOP
========================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);