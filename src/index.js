import {runA} from './a';

console.log(1);

runA();
setTimeout(() => {
    require('./b.js').runB();
}, 1000)
