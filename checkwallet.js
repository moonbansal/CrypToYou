async function checkWalletExists(publicKey) {
    const server = new StellarSdk.Server('<https://horizon.stellar.org>');
    try {
        await server.loadAccount(publicKey);
        return true; // Wallet exists
    } catch (e) {
        if (e instanceof StellarSdk.NotFoundError) {
            return false; // Wallet does not exist
        } else {
            throw e; // Other errors
        }
    }
}
