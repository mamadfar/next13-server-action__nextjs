"use client"

import {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {MdDelete, MdEdit} from "react-icons/md";
import {useMyContext} from "@/context/Provider";

const PostCard: FC<{post: IPost}> = ({post}) => {

    const {setEditPost} = useMyContext();
    const {title, image} = post;

    return (
        <article>
            {(title && image) && (
                <>
                    <Link href="/" className="flex flex-col flex-1 space-y-2 h-full">
                        <div className="relative w-48 h-full">
                            <Image src={image} alt={title} fill priority className="rounded-lg shadow-xl" placeholder="empty"/>
                        </div>
                        <h3>{title}</h3>
                    </Link>
                    <div className="flex justify-between my-5">
                        <MdEdit onClick={() => setEditPost(post)} className="text-blue-400 w-6 h-6 cursor-pointer"/>
                        <MdDelete className="text-red-400 w-6 h-6 cursor-pointer"/>
                    </div>
                </>
            )}
        </article>
    );
};

export default PostCard;
