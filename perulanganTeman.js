let totalDibagiLima = 0;
let totalDibagiEnam = 0;
for ( let i = 1; i<=200; i++){
    if (i%5 === 0 ){
        console.log(i)
        totalDibagiLima+=1;
    } else if (i%6 === 0){
        console.log(i);
        totalDibagiEnam+=1;
    }
}

console.log("Total dibagi 5:", totalDibagiLima);
console.log("Total dibagi 6:", totalDibagiEnam);
console.log("Total angka yang bisa dibagi 6 : ",totalDibagiLima+totalDibagiEnam);
