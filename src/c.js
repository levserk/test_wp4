const shared = {
    createTime: Date.now(),
    rand: Math.random()
}

export var hiddenC =3;

console.log(`execute shared`, JSON.stringify(shared));

export const getShared = () => {
    console.log(JSON.stringify(shared))
    return shared;
}