require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth sister cluster install desert equal gentle'; 
let testAccounts = [
"0xc134db636d8093ce18f37f2e3aca69a2dd33ced716aad6c651d580ecf5887278",
"0x607ec48a2128205c78d19178a7a6bc544ef075063b7406dc9956344832ac28ff",
"0xaa78cb022a23fcb461681fcc63ab445a43ab03d2cf274cd40164a19690470466",
"0xe141470b5bc28b3966b65475cb19a02a80005b008afa594c047bde53f96c7baa",
"0x75609fb36f8b6a95a524f4169d9b1bf71d46bf272cd67b06a982d722b756f5fb",
"0xd01b9eed22518a103a2481ec69008617b0898ab918aeeca330af4c658cea01a1",
"0x07f0bd1f8ff1c7d0319496dda9c17a190f9e863dff2c4960153db211981ff154",
"0x820f51df596a3c5f5c4e4519485172d013102bb011a433a861de5bb9caaff337",
"0x7da420f69dc4117e661abcf05ab00ae9834ce1c461ba8ccb364bee1f82780720",
"0x7be3deee66230fb50361ec126ba21da4bbfb590328fcd7267678bba7b71866d0"
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
            version: '^0.8.0'
        }
    }
};

