// Promises are objects that keep track of whether an event has already happened or not.

// At the beginning, promises are in a "pending" state.

// After an event happens, the promise is said to be in a "settled / resolved" state.

// If the event has successfully happened, then the promise is said to be in a "fulfilled"
// state and the "then()" method is automatically invoked.

// If the event has failed in any way, then the promise is said to be in a "rejected"
// state and the "catch()" method is automatically invoked.

// Promises are used to implement the concept of a future value that we are expecting.

const getIds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([23, 27, 29, 21]);
    }, 2000);
  });
};

const getRecipeById = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (rId) => {
        const recipe = {
          id: 45,
          name: "Chicken Peperroni Pizza",
          publisher: "Domino's",
        };
        resolve(`${rId}: ${recipe.name} from ${recipe.publisher}`);
      },
      1500,
      recipeId
    );
  });
};

const getRelatedRecipeByPublisher = (publisherName) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pubName) => {
        const relatedRecipe = {
          id: 67,
          name: "Peppy Paneer with Cheese Burst Base",
          publisher: "Domino's",
        };
        console.log(`Related recipe from ${pubName}: `);
        resolve(relatedRecipe);
      },
      1500,
      publisherName
    );
  });
};

getIds()
  .then((ids) => {
    console.log(ids);
    return getRecipeById(ids[1]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getRelatedRecipeByPublisher("Domino's");
  })
  .then((relatedRecipe) => {
    console.log(relatedRecipe);
  })
  .catch((error) => {
    console.log("Whoops! Something went wrong!");
  });
