//*
//;
window.addEventListener('load',function(){

    processes();
});


function processes(){


    class Xchange{

        async get(url){
            const response = await fetch(url);
            return await response.json(); //JSON objesi, return edildi

        }
    }

    function currentCurrency(){
        let request = new Xchange();
        const targetURL = 'https://api.exchangeratesapi.io/latest?base=USD';
        let usd2try = request.get(targetURL);
        usd2try.then(datas => {
            let dolarTL =  (Number.parseFloat(datas.rates.TRY));
//console.log(dolarTL)
            document.getElementById('dolarTL').innerHTML = `1$ = ${dolarTL} TL`;

        }).catch(err=> console.log(`Error:${err}`))
    }

    currentCurrency();
    setInterval(currentCurrency,300000);











}



