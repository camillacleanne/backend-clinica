const horario = require('../entity/horario');

class horarioService {
    constructor() { }
    listHorario = [];

    getAllHorario() {
        return this.listHorario;
    }

    addHorario(horario) {
        let id = this.listHorario.length

        if(id==0){
            id=1;
        }
        else{
            id++
        }
       horario.id = id;

        this.listHorario.push(horario)
        return horario;
    }
    removeHorario(listHorario, id) {
        let horario;
        this.listHorario.forEach(element => {
            if (element.id === id) {
                horario = element
            }
        });

        this.listHorario.splice(horario, 1)
    }

}

module.exports = horarioService;

