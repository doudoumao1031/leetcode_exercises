/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    var profit=0,
        len=prices.length;
    
    for(let i=0;i<len-1;++i){
        let now=prices[i],
            next=prices[i+1];
        if(next>now){
            profit+=next-now;
        }
    }
    return profit;
};