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

/*****************************************************/
/*                                                   */
/*   Back to Top and Hide Menu                       */
/*                                                   */
/*****************************************************/

    //Get the button:
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        navMenu.style.display  = "none";
    } else {
        mybutton.style.display = "none";
        navMenu.style.display  = "flex";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

/*****************************************************/
/*                                                   */
/*   Get Repos                                       */
/*                                                   */
/*****************************************************/

    function requestUserRepos(username){
        
        // Create new XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        
        // GitHub endpoint, dynamically passing in specified username
        const url = `https://api.github.com/users/${username}/repos`;
    
        // Open a new connection, using a GET request via URL endpoint
        // Providing 3 arguments (GET/POST, The URL, Async True/False)
        xhr.open('GET', url, true);
        
        // When request is received
        // Process it here
        xhr.onload = function () {
        
            // Parse API data into JSON
            const data = JSON.parse(this.response);
            
            // Loop over each object in data array
            for (let i in data) {

                // Get the ul with id of of userRepos
                let ul = document.getElementById('userRepos');
        
                // Create variable that will create li's to be added to ul
                let li = document.createElement('li');
                
                // Add Bootstrap list item class to each li
                li.classList.add('list-group-item')
            
                // Create the html markup for each li
                li.innerHTML = (`
                    <div class="section4 project-box">
                        <a href="${data[i].html_url}"><svg class="section4 project-box gitimg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg></a>
                        <h3>${data[i].name}</h3>
                        <p>${data[i].description}</p>
                        <p>Tecnologias: ${data[i].language}</p>
                    </div>
                `);
                
                // Append each li to the ul
                ul.appendChild(li);
            
            }

        }
        
        // Send the request to the server
        xhr.send();
        
    }
    requestUserRepos('ivan-pinto')

