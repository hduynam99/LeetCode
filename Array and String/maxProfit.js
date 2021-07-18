/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max = 0
    let buy = 0
    let i = buy + 1

    const compair = prices.slice()
    const compair2 = prices.slice()

    const sorted = compair.sort((a,b) => a-b);
    if(JSON.stringify(sorted) === JSON.stringify(prices)){
        return max = prices[prices.length-1] - prices[buy]
    }

    const sorted2 = compair2.sort((a,b) => b-a);
    if(JSON.stringify(sorted2) === JSON.stringify(prices)){
        return 0
    }

    while ( i < prices.length){
        if(prices[buy] > prices[i]){
            buy = i
        }

        if(prices[buy] < prices[i] && prices[i+1] < prices[i]){
            max = max + ( prices[i] - prices[buy])
            buy = i+1
            i = buy
        }

        if(prices[buy] < prices[i] && prices[i] < prices[i+1]){
            max = max + ( prices[i+1] - prices[buy])
            buy = i+2
            i = buy
        }

        if(prices[buy] == prices[i]){
            buy = i
            i = buy
        }

        i++

    }

    return max

};

let prices1 = [7,1,5,3,6,4]
let prices2 = [1,2,3,4,5]
let prices3 = [7,6,4,3,1]
let prices4 = [6,1,3,2,4,7]
let prices5 = [2,1,4]
let prices6 = [2,1,2,0,1]

console.log(maxProfit(prices1))
console.log(maxProfit(prices2))
console.log(maxProfit(prices3))
console.log(maxProfit(prices4))
console.log(maxProfit(prices5))
console.log(maxProfit(prices6))






