
 //We'll have to edit the configuration file to tell Truffle the networks we want to deploy to.
 //In this lesson, we will be using Rinkeby, a public test network created by The Ethereum Foundation.

 //we want to edit our configuration file to use HDWalletProvider. To get this to work we'll add a line at the top of the file:
 //1. Initialize `truffle-hdwallet-provider`
const HDWalletProvider = require("truffle-hdwallet-provider");

// Set your own mnemonic here
const mnemonic = "YOUR_MNEMONIC";

// Module exports to make this configuration available to Truffle itself
module.exports = {
  //Next, to make sure Truffle "knows" the networks we want to deploy to, we will have to create 
  //two separate objects- one for Rinkeby and the other one for the Ethereum main net:
  // Object with configuration for each network
  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Mainnet address and Token
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/YOUR_TOKEN")
      },
      network_id: 4 //Fill in the `network_id` for the Rinkeby network.
      //Note: the provider value is wrapped in a function, which ensures that it won't get initialized until it's needed.
    }
  }
};
