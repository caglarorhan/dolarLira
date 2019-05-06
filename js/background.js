//background worker
//
const targetURL = 'https://api.exchangeratesapi.io/latest?base=USD';
chrome.browserAction.setBadgeText({text: '1sec'});
//background worker
//

class Xchange{
    async static get(url){
        const response = await fetch(url);
        return await response.json(); //JSON objesi, return edildi

    }
}

function currentCurrency(){
    let request = new Xchange();
    let usd2try = request.get(targetURL);
    usd2try.then(datas => {
        let dolarTL =  (Number.parseFloat(datas.rates.TRY).toFixed(2));

        chrome.browserAction.setBadgeText({text: dolarTL});


    })
}

currentCurrency();
setInterval(currentCurrency,300000);
