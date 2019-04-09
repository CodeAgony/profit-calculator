document.addEventListener('DOMContentLoaded', function(){
// document.addEventListener('change', calcProfit)
        let buyPrice = document.getElementById("buyPrice").value;
        let amount = document.getElementById("amount").value;
        let sellPrice = document.getElementById("sellPrice").value;
        let tax = document.getElementById("tax").value;
        let profitSilverField = document.getElementById("profitSilver").value;
        let profitMarginField = document.getElementById("profitMargin").value;

    const calcProfit = function(){    

        const profitSilver = `You are ${Math.round((sellPrice*amount-(sellPrice*amount/100)*tax)-buyPrice*amount)} silver richer`;
        console.log(profitSilver);
        


        const profitMargin = `Profit margin is ${Math.round(document.getElementById("profitSilver").value/(buyPrice*amount)*100)}%`;
        console.log(profitMargin);
    }

    document.getElementById('button-calc').addEventListener('click', calcProfit);
    document.getElementById('button-reset').addEventListener('click', reset); 
})
