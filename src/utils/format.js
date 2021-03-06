const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]; //lista de objetos

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]; //lista de objetos

function getSubject(subjectNumber){
    const position = +subjectNumber - 1;
    
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hours, minutes] = time.split(":");
    return Number((hours * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}