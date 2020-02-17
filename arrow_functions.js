"use strict";                           // enables modern JS behavior and functionalities.

function ask(question, yes, no) {
    if (confirm(question))
        alert(yes());
    else
        alert(no());
}

ask("Are you having a good day?", 
    () => ("It gets even better!"), 
    () => ("Don't worry. Everything will be okay."));