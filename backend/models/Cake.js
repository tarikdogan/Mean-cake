const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Cake = new Schema({
   name: {
      type: String
   },
   imageUrl: {
      type: String
   },
   comment: {
      type: String
   },
   yumFactor: {
      type: Number
   }
}, {
   collection: 'cakes'
})

module.exports = mongoose.model('Cakes', Cake)
