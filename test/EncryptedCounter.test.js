const { expect } = require("chai");
const hre = require("hardhat");

describe("EncryptedCounter", function () {
  it("Should deploy and return encrypted value", async function () {
    const EncryptedCounter = await hre.ethers.getContractFactory("EncryptedCounter");
    const counter = await EncryptedCounter.deploy();
    await counter.deployed();

    const encValue = await counter.getEncryptedCounter();
    expect(encValue).to.exist;
  });
});
