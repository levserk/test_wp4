var getShared = require('./c.js').getShared;

var hiddenA = 1;

export const runA = () => {
    console.log(`a`);
    getShared();
    console.log(`hiddenA from a`, hiddenA);
}
