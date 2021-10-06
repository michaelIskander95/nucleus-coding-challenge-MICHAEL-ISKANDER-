const prices = [
    { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
    { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
    { effectiveDate: new Date(2021, 8, 3, 5, 0, 0), price: 36080.06 },
    { effectiveDate: new Date(2021, 8, 3, 13, 0, 0), price: 37111.11 },
    { effectiveDate: new Date(2021, 8, 6, 5, 0, 0), price: 38041.47 },
    { effectiveDate: new Date(2021, 8, 7, 5, 0, 0), price: 34029.61 },
];

const transactions = [
    { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
    { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: -0.007 },
    { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 },
    { effectiveDate: new Date(2021, 8, 5, 9, 0, 0), value: -0.01 },
    { effectiveDate: new Date(2021, 8, 7, 9, 0, 0), value: 0.1 },
];

export function getDailyPortfolioValues() {
    const startOfReport = new Date("2021-09-01");
    const endOfReport = new Date("2021-09-07");
    let currentPrice = 0;
    let currentValue = 0;
    let portfolioValues = [];

    for (let date = startOfReport; date <= endOfReport; date.setDate(date.getDate() + 1)) {

        for (let index = 0; index < transactions.length; index += 1) {
            if (transactions [index].effectiveDate.getDate() === date.getDate()) {
                currentValue += transactions[index].value
                    continue;
            } 
        } 
        
        for (let index = 0; index < prices.length; index += 1) {
            if (prices [index].effectiveDate.getDate() === date.getDate()) {
                currentPrice = prices[index].price
                    continue;
            } 
        }
    const correctDate = startOfReport.toISOString().slice(0,10)
    
        portfolioValues.push({
            effectiveDate: correctDate, value: + (currentValue * currentPrice).toFixed(5)
        });
    }

    return portfolioValues;
}
