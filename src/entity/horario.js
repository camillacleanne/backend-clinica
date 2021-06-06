const interval = require('../entity/interval');

//camada abstrai dados de horario

class Horario  {
    constructor(day, intervalos) {
      this.day = day;
      this.intervalos = intervalos;
    }
    
  }
  module.exports = Horario;