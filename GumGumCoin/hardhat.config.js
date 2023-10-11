require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/wsJzWOcKEqhhycj7zNvkxgi3yvLRvNtL",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
