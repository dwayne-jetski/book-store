const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema ({
    inventory: { type: Array },
});

module.exports = Store = mongoose.model('Store', StoreSchema);