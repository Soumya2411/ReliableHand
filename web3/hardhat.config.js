/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: ["1c7a40dff73b206bf0710ecd416c022683990ae154d7e22f0cdf4b02102e20d6"]
    }
  },
  etherscan: {
    apiKey:"9X6B16G4FJ78YXMWBRJCDKQE13A4ACW7YK"
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}