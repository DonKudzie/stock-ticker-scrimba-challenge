import { getStockData } from "./fakeStockAPI.js";
let lastPrice = null

function renderStockTicker(){
    let {name,sym,price,time} = getStockData()


  
    

    const stockDisplayName = document.getElementById("stock-data-name")
    const stockDisplaySymbol = document.getElementById("stock-data-symbol")
    const stockDisplayPrice = document.getElementById("stock-data-price")
    const stockDisplayTime= document.getElementById("stock-data-time")

    

    stockDisplayName.textContent = `Name : ${name}`
    stockDisplaySymbol.textContent = `Symbol : ${sym}`
    if (lastPrice !==null){
        if (price > lastPrice){
             stockDisplayPrice.textContent = `Price : ${price}  ▲`
        }
        else if (price < lastPrice){
             stockDisplayPrice.textContent = `Price : ${price}  ▼`
        }
        else{
             stockDisplayPrice.textContent = `Price : ${price} `
        }
       
    }
    else{
        stockDisplayPrice.textContent = `Price : ${price} `
    }
    lastPrice = price
    
    stockDisplayTime.textContent = `Time : ${time}`
   


}  



renderStockTicker()
setInterval(renderStockTicker,1500)



