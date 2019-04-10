document.addEventListener('DOMContentLoaded', function(){
  const calcProfit = function(){    
    let buyPrice = document.forms[0].value;
    let amount = document.forms[1].value;
    let sellPrice = document.forms[2].value;
    let tax = document.forms[3].value;
    let profitSilver = document.forms[4];
    let profitMargin = document.forms[5];

    profitSilver.value = `You are ${Math.round((sellPrice*amount-(sellPrice*amount/100)*tax)-buyPrice*amount)} silver richer`;
    console.log(profitSilver.value);
    
    profitMargin.value = `Profit margin is ${Math.round(profitSilver.value.replace(/[^\d-]/gi, "")/(buyPrice*amount)*100)}%`;
    console.log(profitMargin.value);
  }
  document.getElementById('button-calc').addEventListener('click', calcProfit);
  document.addEventListener('change', calcProfit);
})
