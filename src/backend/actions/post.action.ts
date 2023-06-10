"use server";

import connectDB from "@/backend/database/mongodb";
import Post from "@/backend/models/post.model";

connectDB();

export const getAllPosts = async () => {
    try {
        const data = await Post.find();
        const posts = data.map(post => (
            {
                ...post._doc,
                _id: post._id.toString()
            }
        ));
        console.log(posts)

    } catch (e: any) {
        throw new Error(e?.message || "Failed to create the post!")
    }

};

export const createPost = async (post: IPost) => {
    try {
        const newPost = new Post(post);
        await newPost.save();

        return {...newPost._doc, _id: newPost._id.toString()};
    } catch (e: any) {
        throw new Error(e?.message || "Failed to create the post!")
    }
};