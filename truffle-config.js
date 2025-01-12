const privateKey = process.env.WEB3_PRIVATE_KEY;
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
 networks: {
    development: {
      provider: () => new HDWalletProvider(privateKey, "http://localhost:8545"),
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    thaichain: {
      provider: () => new HDWalletProvider(privateKey, "http://135.181.80.192:8545/"),
      network_id: "*", // Match any network id
      gas: 2e7,
      gasPrice: 4e9
    }
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
