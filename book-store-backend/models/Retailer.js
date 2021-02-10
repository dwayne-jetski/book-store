const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const RetailerSchema = new Schema ({
    storeName: { type: String, required: true },
    userName: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true},
    accountType: { type: String, default: "retailer"},
    date: { type: Date, default: Date.now },
    openOrders:  {type: Array, default: [] },
    completedOrders: { type: Array, default: [] },
    heroImage: { type: String, default: 'https://images.squarespace-cdn.com/content/v1/55c154cee4b09ad05fa1b2ba/1511151439085-E0TKO6YJF7KAM9WVNZ4M/ke17ZwdGBToddI8pDm48kKLZU5g9OknfqdNOcMYsxU0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2diWfXM56UnIgEngGbvB3JOhIberDfCHNksJIZCKacuzGZDqXZYzu2fuaodM4POSZ4w/Bookstore+Banner.jpg?format=2500w' }
});

module.exports = Retailer = mongoose.model('Store', RetailerSchema);