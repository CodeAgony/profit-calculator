var calcProfit = function(){    

  var buyPrice = document.getElementById("buyPrice").value;
  var amount = document.getElementById("amount").value;
  var sellPrice = document.getElementById("sellPrice").value;
  var tax = document.getElementById("tax").value;

  var profitSilver = Math.round((sellPrice*amount-(sellPrice*amount/100)*tax)-buyPrice*amount);
  console.log(profitSilver);
  document.getElementById("profitSilver").value = profitSilver;

  var profitMargin = `${Math.round(profitSilver/(buyPrice*amount)*100)}% `;
  console.log(profitMargin);
  document.getElementById("profitMargin").value = profitMargin;

}

var resetOnClick = function(){
  document.getElementById("tax").value =
  document.getElementById("sellPrice").value =
  document.getElementById("amount").value =
  document.getElementById("buyPrice").value = 
  document.getElementById("profitSilver").value =
  document.getElementById("profitMargin").value = "";
  console.log("reset clicked");
} 
