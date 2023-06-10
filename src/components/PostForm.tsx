"use client";

import {useRef} from "react";
import {createPost} from "@/backend/actions/post.action";
import {ButtonSubmit} from "@/components/index";

const PostForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const handleAction = async (formData: FormData) => {
        if (!formData.has("title") || !formData.has("image")) return;
        const post: IPost = {
            title: formData.get("title") as string,
            image: formData.get("image") as string,
        }
        // const title = formData.get("title");
        // const image = formData.get("image");
        await createPost(post);
        formRef.current?.reset();
    }

    return (
        <form ref={formRef} className="flex gap-4 my-7" action={handleAction}>
            <input type="text" className="pl-2 py-1 border rounded-sm" name="title" placeholder="Title" required/>
            <input type="text" className="pl-2 py-1 border rounded-sm" name="image" placeholder="Image" required/>
            <ButtonSubmit title="Create"/>
        </form>
    );
};

export default PostForm;
