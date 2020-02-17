let browser = prompt("What's your browser?");
if (browser === "Edge")
    alert("Ohh! You like to live on edge I see!");
else if (browser === "Chrome" || browser === "Chromium" || browser === "Firefox" || browser === "Brave")
    alert("Yeah! These browsers are okay, too.");
else
    alert("Please get out of the time machine.");

// ---

let valueOfA = prompt("What's the value of A?");
switch(valueOfA) {
    case '0':
    case '1':
        alert("The value of A is either 0 or 1.");
        break;
    case '2':
        alert("The value of A is 2.");
        break;
    case 3:
        alert("This would never execute!");             // because switch uses strict equality and would not convert
                                                        // the string received from prompt to an integer.
        break;
    default:
        alert("Everything's gone to hell!");
        break;
}