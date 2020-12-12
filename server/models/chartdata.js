import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    dates: [],
    data: [],
})

var Chart1 = mongoose.model('Chart1', postSchema);

export default Chart1;