document.addEventListener('DOMContentLoaded', function () {
    var textToType = "Ethan Ponce";
    const outputElement = document.getElementById("output");
    const cursorElement = document.createElement("span");
    var kill_blink_cursor
    cursorElement.id = "cursor";
    cursorElement.style.minWidth  = "20px";
    cursorElement.style.display = "inline-block";
    outputElement.appendChild(cursorElement);

    function typeText(text, index) {
        if (index < text.length) {
            setTimeout(() => {
                outputElement.insertBefore(document.createTextNode(text[index]), cursorElement);
                typeText(text, index + 1);
            }, 40); // Adjust the pause duration (in milliseconds)
        } else {
            blinkCursor();
        }
    }

    function blinkCursor() {
        if (kill_blink_cursor === true) {
            cursorElement.textContent = cursorElement.textContent === "_" ? "" : "";
            kill_blink_cursor = false;
            return; // Stop the blinking when kill_blink_cursor is true
        }
    
        setTimeout(() => {
            cursorElement.textContent = cursorElement.textContent === "_" ? "" : "_";
            blinkCursor();
        }, 1000); // Adjust the blinking speed (in milliseconds)
    }

    typeText(textToType, 0);



    const profilePictureSwapper = document.getElementById('profile_picture_swapper');

    if (profilePictureSwapper) {
        // Vérifie si l'élément avec l'ID profile_picture_swapper existe

        profilePictureSwapper.addEventListener('click', function() {
            // Fonction exécutée lors du clic sur l'élément
            // Ajoutez votre logique de gestion du clic ici
            console.log('Clic sur profile_picture_swapper');
            kill_blink_cursor = true;
            outputElement.textContent = '';
            outputElement.appendChild(cursorElement);
            cursorElement.textContent = cursorElement.textContent === "_" ? "" : "";
            if (textToType === "Ethan Ponce") {
                textToType = "Ecnop 🥀"
            } else if(textToType === "Ecnop 🥀") {
                textToType = "Ethan Ponce"
            }
            typeText(textToType, 0);

            // Exemple : Changez l'image du profil
            // document.getElementById('profile_image').src = 'nouveau_chemin_de_limage.jpg';
        });
    }
});