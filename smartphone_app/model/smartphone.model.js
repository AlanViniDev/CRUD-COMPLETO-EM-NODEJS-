const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let SmartphoneSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    marca: {type: String, required: true, max: 100},  
});
// Exportar o modelo
module.exports = mongoose.model('Smartphone', SmartphoneSchema);