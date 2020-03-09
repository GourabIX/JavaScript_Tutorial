var gourab = {
  name: "Gourab",
  age: 23,
  job: "Full Stack Developer",
  presentation: function(style, timeOfDay) {
    if (style === "casual") {
      console.log(`Name's ${this.name}. And the time's ${timeOfDay}.`);
    } else if (style === "formal") {
      console.log(
        `Hi! My name is ${this.name} and the time of day is ${timeOfDay}.`
      );
    } else {
      console.log("Salut, Soldier!");
    }
  }
};

var mrinmoy = {
  name: "Mrinmoy",
  age: 24,
  job: "Graphics Designer"
};

gourab.presentation("casual", "afternoon");
gourab.presentation("formal", "morning");

gourab.presentation.call(mrinmoy, "casual", "afternoon");
gourab.presentation.call(mrinmoy, "formal", "morning");

var gourabCasual = gourab.presentation.bind(gourab, "casual");
gourabCasual("morning");
gourabCasual("evening");

var gourabFormal = gourab.presentation.bind(gourab, "formal");
gourabFormal("noon");

var mrinmoyCasual = gourab.presentation.bind(mrinmoy, "casual");
mrinmoyCasual("afternoon");

var mrinmoyHeavy = gourab.presentation.bind(mrinmoy, "heavy");
mrinmoyHeavy("morning");
