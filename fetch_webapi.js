function getHPcharacters() {
  fetch(`http://hp-api.herokuapp.com/api/characters`)
    .then((response) => {
      let totalData = response;
      return totalData.json();
    })
    .then((resultJson) => {
      console.log(resultJson);
    })
    .catch((error) => {
      alert(error);
    });
}

getHPcharacters();

async function getGryffindorStudents() {
  try {
    console.log("I solemnly swear that I'm up to no good!");
    const allData = await fetch(
      `http://hp-api.herokuapp.com/api/characters/house/gryffindor`
    );
    const griffyndorStudents = await allData.json();
    console.log(griffyndorStudents);
    return "Mischief Managed!";
  } catch (error) {
    alert(error);
  }
}

getGryffindorStudents().then((result) => console.log(result));
