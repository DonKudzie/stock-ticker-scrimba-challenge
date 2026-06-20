export  function getStockData(){
    let randomNumber = ((Math.random()*3)+1).toFixed(2)
    let timeOfDay = new  Date().toLocaleTimeString('en-US', { hour12: false })

    return{
        name: "QteckAi",
        sym:"QTA",
        price:randomNumber,
        time: timeOfDay,

    }
}



