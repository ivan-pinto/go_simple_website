/*****************************************************/
/*                                                   */
/*   Typewirter                                      */
/*                                                   */
/*****************************************************/

    // set up text to print, each item in array is new line
    var aText = new Array(
        "It all started when my mom met my dad",
        "and they fell in love and had me,",
        "hi i’m Ivan, and my work is kinda crazy"
    );
    var iSpeed = 150; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    function typewriter() {
        sContents = ' ';
        iRow = Math.max(0, iIndex - iScrollAt);
        var destination = document.getElementById("typedtext");

        while (iRow < iIndex) {
            sContents += aText[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;
            if (iIndex != aText.length) {
                iArrLength = aText[iIndex].length;
                setTimeout("typewriter()", 500);
            }
        } else {
            setTimeout("typewriter()", iSpeed);
        }
    }

    typewriter();


/*****************************************************/
/*                                                   */
/*   Navbar                                          */
/*                                                   */
/*****************************************************/

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }


/*****************************************************/
/*                                                   */
/*   Experiencia/Formacao                            */
/*                                                   */
/*****************************************************/

function showFormacao() {
    document.getElementById('formacao').style.display = "block";
    document.getElementById('experiencia').style.display = "none";
}
function showExperiencia() {
    document.getElementById('experiencia').style.display = "block";
    document.getElementById('formacao').style.display = "none";
 }