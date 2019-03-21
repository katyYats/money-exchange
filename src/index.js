// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coinsArr = [50,25,10,5,1];
    var exchangeNames = ['H','Q','D','N','P'];
    var exchangeObj = {};

    if (currency <= 0) {
        return exchangeObj;
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        var remainder = currency;

        for(var i = 0; i < coinsArr.length; i++) {
            var value = Math.floor(remainder / coinsArr[i]);
            remainder -= value * coinsArr[i];

            if (!value) continue;
            exchangeObj[exchangeNames[i]] = value;
        }

        return exchangeObj;
    }
}
