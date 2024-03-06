require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "https://eth-sepolia.g.alchemy.com/v2/[your alchemy api key here]";
const SEPOLIA_PRIVATE_KEY = "[your private key here]";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};