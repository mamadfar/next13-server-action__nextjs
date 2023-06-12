import {FC} from 'react';
import EditAndDeletePost from "@/components/pages/EditAndDeletePost";
import PostImage from "@/components/pages/PostImage";

const PostCard: FC<{ post: IPost, handleDelete?: (id: string | undefined) => void }> = ({post, handleDelete}) => {

    const {title, image, _id} = post;

    return (
        <article>
            {(title && image) && (
                <>
                    <PostImage image={image} title={title} _id={_id} handleDelete={handleDelete}/>
                    {handleDelete && (
                        <EditAndDeletePost post={post} handleDelete={handleDelete}/>
                    )}
                </>
            )}
        </article>
    );
};

export default PostCard;
