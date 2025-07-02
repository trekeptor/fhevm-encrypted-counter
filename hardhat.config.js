require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    devnet: {
      url: process.env.FHEVM_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
