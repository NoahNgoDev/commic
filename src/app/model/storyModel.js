const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const storyShema = new Schema({
    _id: { type: Number },
    name: { type: String, maxLenght: 100, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, {
    _id: false,
    timestamps: true,
})


mongoose.plugin(slug);