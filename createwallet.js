function generateNewWallet() {
    const pair = StellarSdk.Keypair.random();
    return {
        publicKey: pair.publicKey(),
        secret: pair.secret(),
    };
}

// Example usage:
// const newWallet = generateNewWallet();
// console.log(`Public Key: ${newWallet.publicKey}`);
// console.log(`Secret: ${newWallet.secret}`);
