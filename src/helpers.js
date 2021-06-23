const choice = items => {
    let random = Math.floor(Math.random() * items.length);
    let randomItem = items[random];
    return randomItem;
}

const remove = (items, item) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)]
        };
    };
}


export { choice, remove }