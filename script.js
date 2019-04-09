document.addEventListener('DOMContentLoaded', function(){

    const calcProfit = function(){    
        let buyPrice = document.getElementById("buyPrice").value;
        let amount = document.getElementById("amount").value;
        let sellPrice = document.getElementById("sellPrice").value;
        let tax = document.getElementById("tax").value;
        let profitSilver = document.getElementById("profitSilver");
        let profitMargin = document.getElementById("profitMargin");

        profitSilver.value = `You are ${Math.round((sellPrice*amount-(sellPrice*amount/100)*tax)-buyPrice*amount)} silver richer`;
        console.log(profitSilver.value);
        
        profitMargin.value = `Profit margin is ${Math.round(profitSilver.value.replace(/[^\d-]/gi, "")/(buyPrice*amount)*100)}%`;
        console.log(profitMargin.value);
    }

    document.getElementById('button-calc').addEventListener('click', calcProfit);
    document.addEventListener('change', calcProfit);
})
