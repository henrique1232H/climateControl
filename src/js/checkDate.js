
export default function checkDate(day, entries) {

    if(day === 0) {
        entries.textContent = "Terça"
    }
    
    if(day === 1){
        entries.textContent = "Quarta"
    }

    if(day === 2){
        entries.textContent = "Quinta"
    }

    if(day === 3) {
        entries.textContent = "Sexta"
    }

    if(day === 4) {
        entries.textContent = "Sábado"
    }

    if(day === 5) {
        entries.textContent = "Domingo"
    }

    if(day === 6) {
        entries.textContent = "Segunda"
    }



}