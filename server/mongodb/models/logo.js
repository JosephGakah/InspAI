import mongoose from "mongoose";

const LogoModel = new mongoose.Schema({
    name: { type: String, required: true},
    prompt: { type: String, required: true},
    photo: { type: String, required: true}
})

const LogoSchema = mongoose.model('Post', LogoModel);

export default LogoSchema;