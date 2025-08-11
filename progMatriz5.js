let mat35 = []

for(let i = 0; i < 5; i++){
  mat35[i] = []
    for(let j = 0; j < 5; j++){
        if( i % 2 == 1){
           mat35[i][j] =3
        }else{
           mat35[i][j] = 5
        }
  }
}
console.table(mat35)
console.log('--------------')

let mat37 = []

for(let i = 0; i < 5; i++){
  mat37[i] = []
    for(let j = 0; j < 5; j++){
        if( i % 2 == 1 ){
           mat37[i][j] =3
        }else{
           mat37[i][j] = 7
        }
  }
}
console.table(mat37)
console.log('--------------')