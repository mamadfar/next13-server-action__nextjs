"use client";

import {FC, useTransition} from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {MdDelete, MdEdit} from "react-icons/md";
import {useMyContext} from "@/context/Provider";

const EditAndDeletePost: FC<{ post: IPost, handleDelete: (id: string | undefined) => void }> = ({post, handleDelete}) => {

    const [isPending, startTransition] = useTransition();
    const {setEditPost} = useMyContext();

    return (
        <div className="flex justify-between my-5 relative">
            {isPending && <div
                className="absolute inset-0 flex justify-center items-center text-xs w-full h-full bg-gray-500/30 z-50 select-none">
                <AiOutlineLoading3Quarters className="animate-spin"/>
            </div>}
            <MdEdit onClick={() => setEditPost(post)} className="text-blue-400 w-6 h-6 cursor-pointer"/>
            <MdDelete onClick={() => startTransition(() => handleDelete(post._id))}
                      className="text-red-400 w-6 h-6 cursor-pointer"/>
        </div>
    );
};

export default EditAndDeletePost;
