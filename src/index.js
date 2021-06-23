import { choice, remove } from "./helpers";
import fruits from "./foods";

const drawFruit = fruits => {
    let randomFruit = choice(fruits);
    console.log(`I'd like one ${randomFruit}, please.`);
    console.log(`Here you go: ${randomFruit}.`);
    console.log(`Delicious! May I have another?`);
    return removeFruit(randomFruit);
}

const removeFruit = randomFruit => {
    let leftoverFruit = remove(fruits, randomFruit);
    console.log(`I'm sorry, we're all out. We have ${leftoverFruit.length} left.`);
}

drawFruit(fruits);


export { drawFruit, removeFruit }