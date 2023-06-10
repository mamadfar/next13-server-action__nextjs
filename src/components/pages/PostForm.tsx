"use client";

import {useRef} from "react";
import {createPost, updatePost} from "@/backend/actions/post.action";
import {ButtonSubmit} from "@/components";
import {useMyContext} from "@/context/Provider";

const PostForm = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const {editPost, setEditPost} = useMyContext();

    const handleAction = async (formData: FormData) => {
        if (!formData.has("title") || !formData.has("image")) return;
        const post: IPost = {
            title: formData.get("title") as string,
            image: formData.get("image") as string,
        }

        if (editPost) {
            await updatePost({title: post.title, image: post.image, id: editPost._id})
        } else {
            await createPost(post);
        }

        formRef.current?.reset();
    }

    return (
        <form ref={formRef} className="flex gap-4 my-7" action={handleAction}>
            <input type="text" defaultValue={editPost?.title} className="pl-2 py-1 border rounded-sm" name="title" placeholder="Title" required/>
            <input type="text" defaultValue={editPost?.image} className="pl-2 py-1 border rounded-sm" name="image" placeholder="Image" required/>
            {editPost ? (
                <>
                    <ButtonSubmit title="Update"/>
                    <button type="button" onClick={() => setEditPost(null)} className="border rounded-sm px-5 bg-white py-1">Cancel</button>
                </>
            ): (
                <ButtonSubmit title="Create"/>
            )}
        </form>
    );
};

export default PostForm;
