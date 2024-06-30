document.addEventListener('DOMContentLoaded', function () {

    var brightColors = [
        '#9785E7', '#94CC82', '#6ABEDA', '#CA42E9', '#CC2D55', '#FFA500', '#CF7094', '#00D1A4', '#FFD700', '#68DF43'

    ];
    
    
    var darkColors = [
        '#4240AC', '#25962E', '#458588', '#C5833D', '#B84022', '#A8A50A', '#6914B4', '#CA42E9', '#CC2D55', '#FFA500', '#CF7094'
    ];

    var brightElements = document.querySelectorAll('.bright_color_random');
    var darkElements = document.querySelectorAll('.dark_color_random');

    function getRandomColor(shade) {
        if (shade === "BRIGHT") {
            var randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
        } else if (shade === "DARK") {
            var randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
        }
        return randomColor
    }

    function changeBorderColor(element,shade) {
        var color = getRandomColor(shade);
        element.style.borderColor = color;
        element.style.color = color;
    }

    // Initial color change for all bright elements
    brightElements.forEach(function (element) {
        changeBorderColor(element,"BRIGHT");
    });

    // Initial color change for all dark elements
    darkElements.forEach(function (element) {
        changeBorderColor(element,"DARK");
    });
});