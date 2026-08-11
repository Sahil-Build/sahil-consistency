async function getTopCoins() {
  try {
    // your code here
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // your code here
    console.log(error);
  }
}

module.exports = { getTopCoins };
