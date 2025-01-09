function countTotalValuableCustomersMoneySpent(eachCustomerSpent) {
    let totalValuableCustomersMoneySpent = 0;
    eachCustomerSpent.forEach(i => {
        totalValuableCustomersMoneySpent += i;
    });
    return totalValuableCustomersMoneySpent;
  }
  
  let eachValuableCustomerMoneySpent = [10000, 20000, 30000];
  console.log(countTotalValuableCustomersMoneySpent(eachValuableCustomerMoneySpent));