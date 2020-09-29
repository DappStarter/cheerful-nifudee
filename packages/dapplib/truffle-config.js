require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember snake grid private bone skate'; 
let testAccounts = [
"0xb399a585193a8d3b8987b60076afa462160570eb39616f86361e4282e1a2a54d",
"0x359b6601dde348e746222426c02ef19883ec9965500b2c26eb6940ded6203f60",
"0x66b37f705e342ec5b00de5cd3663d8cea8ee5740a4133f4ab86d96daa5b8dce0",
"0xee8eb78a715bf7c53f3e81e77fdff266cf084ca94bda2926f758067093092c38",
"0xbfb8f3728706b0863f937618403207b476da6016c48c57216388cfd441b840bd",
"0x820035b25ed1e98438fe83729c571a7b5f8c5acf8b8a31d596ab0078c7227708",
"0x593ccff08166e21b52824bffca70e9188df9a70d1b02ea983af1b03a787ca455",
"0x25b2f733d96456552084e13786c7d64ae6a199a3bc8ec5d2edcfb27912a3946d",
"0x22e805b0420ad152300920eeb26068054f953b89382cada7c578861fd98e6f30",
"0x6870121497cee67f1b2be205d18d9f6f98d2fa0665789badee952c2d54a15f21"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
