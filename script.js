document.addEventListener('DOMContentLoaded', function(){
    
    const calcProfit = function(){    

        let buyPrice = document.getElementById("buyPrice").value;
        let amount = document.getElementById("amount").value;
        let sellPrice = document.getElementById("sellPrice").value;
        let tax = document.getElementById("tax").value;

        const profitSilver = `You are ${Math.round((sellPrice*amount-(sellPrice*amount/100)*tax)-buyPrice*amount)} silver richer `;
        console.log(profitSilver);
        document.getElementById("profitSilver").value = profitSilver;


        const profitMargin = `Profit margin is ${Math.round(document.getElementById("profitSilver").value/(buyPrice*amount)*100)}% `;
        console.log(profitMargin);
        document.getElementById("profitMargin").value = profitMargin;
    }

    const resetOnClick = function(){

        document.getElementById("tax").value =
        document.getElementById("sellPrice").value =
        document.getElementById("amount").value =
        document.getElementById("buyPrice").value = 
        document.getElementById("profitSilver").value =
        document.getElementById("profitMargin").value = "";
        console.log("reset clicked");
    } 

})
