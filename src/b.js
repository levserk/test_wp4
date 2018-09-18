var getShared = require('./c.js').getShared;

export var hiddenB = 2

export const runB = () => {
    console.log(`b`);
    getShared();
    console.log(`hiddenB from b`, hiddenB);
}