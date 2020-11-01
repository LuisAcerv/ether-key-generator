const Wallet = require("ethereumjs-wallet");

function createWallet() {
  const EthWallet = Wallet.default.generate();

  return {
    address: EthWallet.getAddressString(),
    privateKey: EthWallet.getPrivateKeyString(),
  };
}

module.exports = {
  createWallet,
};
