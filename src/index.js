// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = new Object();
    if (currency <= 0) {
        return obj;
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        getNumberOfCoins(currency, obj);
        return obj;
    }
}
function getNumberOfCoins(cur, obj) {console.log(obj);
    if (cur >= 50) {
        obj.H = Math.trunc(cur / 50);
        getNumberOfCoins(cur % 50, obj);
        return;
    }
    if (cur >= 25) {
        obj.Q = Math.trunc(cur / 25);
        getNumberOfCoins(cur % 25, obj);
        return;
    }

    if (cur >= 10) {
        obj.D = Math.trunc(cur / 10);
        getNumberOfCoins(cur % 10, obj);
        return;
    }
    if (cur >= 5) {
        obj.N = Math.trunc(cur / 5);
        getNumberOfCoins(cur % 5, obj);
        return;
    }
    if (cur >= 1) {
        console.log(cur);
        obj.P = cur;
        console.log(obj);
    }
}