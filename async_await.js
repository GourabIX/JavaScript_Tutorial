// Async Awaits are a new addition in ES8 (ES2017). They are promises on steroids that
// encapsulate how promises work.

const getIds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([346, 986, 345, 52, 84]);
    }, 2000);
  });
};

const getGameById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (gameId) => {
        const game = {
          id: gameId,
          name: "Alan Wake",
          developer: "Remedy Entertainment",
        };
        resolve(
          `Selected game ID: ${game.id} -> ${game.name} by ${game.developer}.`
        );
      },
      1500,
      id
    );
  });
};

const getRelatedGame = (devName) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (gameDev) => {
        const anotherGame = {
          id: 84,
          name: "Quantum Break",
          developer: gameDev,
        };
        console.log(`Another game by ${gameDev}:`);
        resolve(anotherGame);
      },
      1500,
      devName
    );
  });
};

async function gamePromises() {
  const allGameIds = await getIds();
  console.log(`All Game IDs: ${allGameIds}`);
  const selectedGame = await getGameById(allGameIds[2]);
  console.log(selectedGame);
  const relatedGame = await getRelatedGame("Remedy Entertainment");
  console.log(relatedGame);
  return "Game Promises function is now complete.";
}

gamePromises().then((result) => console.log(result));
