import { getStockData } from "./fakeStockAPI.js";
let lastPrice = null

function renderStockTicker(){
    let {name,sym,price,time} = getStockData()

    console.log(price)
    

    const stockDisplayName = document.getElementById("stock-data-name")
    const stockDisplaySymbol = document.getElementById("stock-data-symbol")
    const stockDisplayPrice = document.getElementById("stock-data-price")
    const stockDisplayTime= document.getElementById("stock-data-time")

    

    stockDisplayName.textContent = `Name : ${name}`
    stockDisplaySymbol.textContent = `Symbol : ${sym}`
    if (lastPrice !==null){
        if (price > lastPrice){
             stockDisplayPrice.textContent = `Price : ${price} green`
        }
        else if (price < lastPrice){
             stockDisplayPrice.textContent = `Price : ${price} red`
        }
        else{
             stockDisplayPrice.textContent = `Price : ${price} grey`
        }
       
    }
    else{
        stockDisplayPrice.textContent = `Price : ${price} green`
    }
    lastPrice = price
    
    stockDisplayTime.textContent = `Time : ${time}`
   


}  



renderStockTicker()
setInterval(renderStockTicker,15000)



