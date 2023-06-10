"use server";

import connectDB from "@/backend/database/mongodb";
import Post from "@/backend/models/post.model";
import {revalidatePath} from "next/cache";

void connectDB();

export const getAllPosts = async () => {
    try {
        const data = await Post.find();
        const posts = data.map(post => (
            {
                ...post._doc,
                _id: post._id.toString()
            }
        ));
        return {posts};

    } catch (e: any) {
        throw new Error(e?.message || "Failed to fetch the posts!")
    }

};

export const createPost = async (post: IPost) => {
    try {
        const newPost = new Post(post);
        await newPost.save();

        revalidatePath("/");

        return {...newPost._doc, _id: newPost._id.toString()};
    } catch (e: any) {
        throw new Error(e?.message || "Failed to create the post!")
    }
};

export const updatePost = async ({title, image, id}: (Pick<IPost, "image" | "title"> & { id?: string })) => {
    try {
        const post = await Post.findByIdAndUpdate(id, {title, image}, {new: true});

        revalidatePath("/");

        return {...post?._doc, _id: post?._id.toString()};
    } catch (e: any) {
        throw new Error(e?.message || "Failed to update the post!")
    }
};