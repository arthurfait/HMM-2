var fs = require('fs');
var HMM = require('./hmm.js').HMM;

var hmm = HMM.create(fs.readFileSync('hmm.txt').toString());

console.log('Generating...');
for(var i=0;i<100;i++) console.log(hmm.generate('$', ~~(Math.random()*4+4)).slice(0,-1));

fs.writeFileSync('hmm.txt', hmm.toString());
