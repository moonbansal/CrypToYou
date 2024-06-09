function generateStellarLink(recipient, amount, asset = 'native', memo = '') {
    let link = `stellar:${recipient}?amount=${amount}&asset=${asset}`;
    if (memo) {
        link += `&memo=${memo}`;
    }
    return link;
}

// Example usage:
// const recipient = newWallet.publicKey;
// const amount = 10; // Example amount
// const memo = 'Welcome to CrypToYou!';
// const stellarLink = generateStellarLink(recipient, amount, 'native', memo);
// console.log(stellarLink);
// Output: stellar:GBRPYHIL2C3XJX6Q6ZQ54U6N4W5RSMFQ7VYV6I23YMP4AY6XGMKQ?amount=10&asset=native&memo=Welcome%20to%20CrypToYou!
