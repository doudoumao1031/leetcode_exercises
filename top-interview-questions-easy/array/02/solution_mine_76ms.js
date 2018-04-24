/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    if(prices&&prices.length>0){
        let buy = prices[0];
        let sell = prices[0];
        prices.push(0);
        for(i=1;i<prices.length;i++){
            if(prices[i]>sell){
                sell = prices[i]
            }else if(prices[i]<sell){
                profit += (sell-buy);
                buy = sell = prices[i];
            }
        }
    }
    return profit;
};