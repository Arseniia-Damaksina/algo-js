function computeChange(price, moneyHanded) {
  const result = [];
  let change = moneyHanded - price;
  const noteCoinDenominations = [
    50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  if (
    isNaN(price) ||
    isNaN(moneyHanded) ||
    price <= 0 ||
    moneyHanded <= 0 ||
    price > moneyHanded
  ) {
    return [];
  }

  noteCoinDenominations.forEach((denomination) => {
    while (change >= denomination) {
      change = parseFloat((change - denomination).toFixed(2));
      result.push(denomination);
    }
  });

  return result;
}

const change1 = computeChange(12.3, 50);
console.log(change1);
const change2 = computeChange(17.41, 20);
console.log(change2);