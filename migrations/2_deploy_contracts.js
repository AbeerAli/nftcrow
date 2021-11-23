var NFTCrow = artifacts.require("./NFTCrow.sol");
var NFTCrowSale = artifacts.require("./NFTCrowSale.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTCrow, 400000000).then(function() {
    // Token price is 0.01 Dollars at 23/Nov
    var tokenPrice = 241836061983890;
    return deployer.deploy(NFTCrowSale, NFTCrow.address, tokenPrice);
  });
};
