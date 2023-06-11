"use client"

import {FC, useTransition} from 'react';
import Link from "next/link";
import Image from "next/image";
import {MdDelete, MdEdit} from "react-icons/md";
import {useMyContext} from "@/context/Provider";
import {validUrl} from "@/utils/regex.util";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const PostCard: FC<{ post: IPost, handleDelete: (id: string | undefined) => void }> = ({post, handleDelete}) => {

    const [isPending, startTransition] = useTransition();
    const {setEditPost} = useMyContext();
    const {title, image} = post;

    return (
        <article>
            {(title && image) && (
                <>
                    <Link href="/" className="flex flex-col flex-1 space-y-2 h-72">
                        <div className="relative w-48 flex-1">
                            <Image src={image.match(validUrl) ? image : "https://fakeimg.pl/400x600?text=404"}
                                   alt={title} fill priority className="rounded-lg shadow-xl" placeholder="blur"
                                   blurDataURL="https://fakeimg.pl/400x600?text=404"/>
                        </div>
                        <h3>{title}</h3>
                    </Link>
                    <div className="flex justify-between my-5 relative">
                        {isPending && <div
                            className="absolute inset-0 flex justify-center items-center text-xs w-full h-full bg-gray-500/30 z-50 select-none">
                            <AiOutlineLoading3Quarters className="animate-spin"/>
                        </div>}
                        <MdEdit onClick={() => setEditPost(post)} className="text-blue-400 w-6 h-6 cursor-pointer"/>
                        <MdDelete onClick={() => startTransition(() => handleDelete(post._id))}
                                  className="text-red-400 w-6 h-6 cursor-pointer"/>
                    </div>
                </>
            )}
        </article>
    );
};

export default PostCard;
