import {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {validUrl} from "@/utils/regex.util";

const PostImage: FC<Pick<IPost, "image" | "title" | "_id"> & {
    handleDelete?: (id: string | undefined) => void
}> = ({image, title, _id, handleDelete}) => {
    if (handleDelete) {
        return (
            <Link href={`/post/${_id}`} className="flex flex-col flex-1 space-y-2 h-72">
                <div className="relative w-48 flex-1">
                    <Image src={image?.match(validUrl) ? image : "https://fakeimg.pl/400x600?text=404"}
                           alt={title ?? "Post Img"} fill priority className="rounded-lg shadow-xl" placeholder="blur"
                           blurDataURL="https://fakeimg.pl/400x600?text=404"/>
                </div>
                <h3>{title}</h3>
            </Link>
        );
    }
    return (
        <div className="flex flex-col flex-1 space-y-2 h-72">
            <div className="relative w-48 flex-1">
                <Image src={image?.match(validUrl) ? image : "https://fakeimg.pl/400x600?text=404"}
                       alt={title ?? "Post Img"} fill priority className="rounded-lg shadow-xl" placeholder="blur"
                       blurDataURL="https://fakeimg.pl/400x600?text=404"/>
            </div>
            <h3>{title}</h3>
        </div>
    )
};

export default PostImage;
