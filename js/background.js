//background worker
//
chrome.browserAction.setBadgeText({text: '1sec'});
trackRate();
setInterval(trackRate,300000);

function trackRate(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.exchangeratesapi.io/latest?base=USD');
    //https://api.exchangeratesapi.io/latest?base=USD
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let dolarTL = Number(JSON.parse(xhr.responseText).rates.TRY);
            dolarTL = Number.parseFloat(dolarTL).toFixed(2);
            chrome.browserAction.setBadgeText({text: String(dolarTL)});
        }

        }

}
