"use server";

import connectDB from "@/backend/database/mongodb";
import Post from "@/backend/models/post.model";
import {revalidatePath} from "next/cache";

void connectDB();

export const getAllPosts = async (searchParams?: string) => {
    const search = searchParams?.search || ""

    try {
        const data = await Post.find({title: {$regex: search}});
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

export const getOnePost = async (postId: string | undefined) => {
    try {
        const post = await Post.findById(postId);

        return {...post?._doc, _id: post?._id.toString()};
    } catch (e: any) {
        throw new Error(e?.message || "Failed to fetch the post!")
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

export const deletePost = async (postId?: string ) => {
    try {
        const post = await Post.findByIdAndDelete(postId, {new: true});

        revalidatePath("/");

        return {...post?._doc, _id: post?._id.toString()};
    } catch (e: any) {
        throw new Error(e?.message || "Failed to delete the post!")
    }
};