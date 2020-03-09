function interviewQuestions(jobName) {
    if (jobName === "teacher") {
        return function (name) {
            console.log(name + ", what do you teach?");
        }
    } else if (jobName === "developer") {
        return function (name) {
            console.log("What do you work on, " + name + "?");
        }
    } else if (jobName === "Software Developer") {
        return function (name) {
            console.log("What technologies do you work on, " + name + "?");
        }
    } else {
        return function (name) {
            console.log("Tell me more about yourself, " + name + ".");
        }
    }
}

var teacherQuestion = interviewQuestions("teacher");
var developerQuestion = interviewQuestions("developer");
var designerQuestion = interviewQuestions("designer");

teacherQuestion("Shyamal");
designerQuestion("Mrinmoy");
developerQuestion("Sushma");
interviewQuestions("Software Developer")("Gourab");