alert('Done');
function apiCheck(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.exchangeratesapi.io/latest?base=USD');
    //https://api.exchangeratesapi.io/latest?base=USD
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let dolarTL = Number(JSON.parse(xhr.responseText).rates.TRY);
            dolarTL = Number.parseFloat(dolarTL).toFixed(2);
            document.querySelector('#dolarTL').textContent=dolarTL;
        }

    }

}

apiCheck();
