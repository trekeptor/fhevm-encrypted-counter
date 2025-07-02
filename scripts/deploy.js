const hre = require("hardhat");

async function main() {
  const EncryptedCounter = await hre.ethers.getContractFactory("EncryptedCounter");
  const counter = await EncryptedCounter.deploy();

  await counter.deployed();

  console.log("EncryptedCounter deployed to:", counter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
