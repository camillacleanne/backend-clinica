const intervalo = require ('../entity/intervalo');

class intervaloService {
    constructor(){}
        listInterval = [];

        getAllHorario() {
            return this.listInterval;
        }
        addInterval(interval) {
            this.listInterval.push(interval)
            return interval;
        }
        removeInterval(listInterval, id) {
            let interval;
            this.listInterval.forEach(element => {
                if (element.id ==id){

                }
            });
            this.listInterval.splice(interval, 1)
        }
    }
module.exports = horarioService;