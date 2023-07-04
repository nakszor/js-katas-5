
let arrayCompetidores = ['Rafael','Manoel','Daniel']

function positions(arrayCompetidores){ 

    if (arrayCompetidores.indexOf('Daniel') === 0) {
         return 'Daniel é o vencedor!'
    }   
    else if(arrayCompetidores.indexOf('Daniel') != 0){
       let indexDaniel = arrayCompetidores.findIndex((item) =>item == 'Daniel')
       let outroCompetidor = arrayCompetidores[indexDaniel-1]
       
       arrayCompetidores[indexDaniel] = outroCompetidor
       arrayCompetidores[indexDaniel - 1] = 'Daniel'
        return `Este é o pódio ${arrayCompetidores}`
    }
}
console.log(positions(arrayCompetidores))