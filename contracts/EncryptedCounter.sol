// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@fhenixprotocol/contracts/FHE.sol";
import "@fhenixprotocol/contracts/FHEParams.sol";

contract EncryptedCounter {
    euint32 private encryptedCounter;

    constructor() {
        encryptedCounter = FHE.encrypt(0);
    }

    function increment() public {
        encryptedCounter = FHE.add(encryptedCounter, FHE.encrypt(1));
    }

    function addEncrypted(euint32 encryptedValue) public {
        encryptedCounter = FHE.add(encryptedCounter, encryptedValue);
    }

    function getEncryptedCounter() public view returns (euint32) {
        return encryptedCounter;
    }
}
