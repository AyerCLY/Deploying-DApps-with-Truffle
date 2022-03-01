/*
To deploy to Ethereum we will have to create something called a migration.
Migrations are JavaScript files that help Truffle deploy the code to Ethereum. Note that truffle init created a special contract called Migrations.sol 
that keeps track of the changes you're making to your code. 
The way it works is that the history of changes is saved onchain. Thus, there's no way you will ever deploy the same code twice.
*/
var CryptoZombies = artifacts.require("./CryptoZombies.sol");
module.exports = function(deployer) {
  deployer.deploy(CryptoZombies);
};
