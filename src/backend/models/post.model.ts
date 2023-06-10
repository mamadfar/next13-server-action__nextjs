import {Schema, model, models, Model} from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Post:Model<IPost> = models.post || model("post", postSchema);

export default Post;