let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let hasWin = false
let score = 100
let bet = 0
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let whichCar = ''


document.querySelector('.score').innerHTML = score

plus.onclick = () =>{
    if(bet>=score){
        plus.disabled = true
    }
    else{
        minus.disabled = false
        bet +=10
        document.querySelector('.bet').innerHTML = bet
    }
}
minus.onclick = () => {
    if(bet<=0){
        minus.disabled = true 
    }
    else{
        plus.disabled = false
        bet -=10
        document.querySelector('.bet').innerHTML = bet
    }
}
// let margin = 0
// let interval = setInterval(() => {
//     let speed = Math.random()*0.1
//     margin = margin + speed
//     car1.style.marginLeft = margin + '%'


//     if (margin>100){
//         clearInterval(interval)
//     }
// }, 5
// )

// let margin2 = 0
// let interval2 = setInterval(() => {
//     let speed = Math.random()*0.1
//     margin2 = margin2 + speed
//     car2.style.marginLeft = margin + '%'


//     if (margin2>100){
//         clearInterval(interval2)
//     }
// }, 5
// )

let speedCar = (car, color) => {
    let margin = 0
    let interval = setInterval(()=>{
        let speed = Math.random()*0.1
        margin=margin+speed
        car.style.marginLeft = margin + '%'
      
        if(margin>100){
            hasWin=true
            if (whichCar==color){
                score+=bet*2
                document.querySelector('.score').innerHTML = score
                alert('You win')
            }else{
                alert('You lose')
            }
        }
        if (hasWin==true){
            clearInterval(interval)
        }
    }, 5
    )
}

let properlyWinner = (color) => {
    hasWin = false
    speedCar(car1, 'white')
    speedCar(car2, 'black')
    whichCar = color
    score-=bet
    document.querySelector('.score').innerHTML = score
}


