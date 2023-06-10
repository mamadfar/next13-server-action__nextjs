import React, {FC} from 'react';
import {PostCard} from "@/components";

const PostList:FC<{posts: ReadonlyArray<IPost>}> = ({posts}) => {
    return (
        <section className="flex gap-7 h-80">
            {posts.map(post => (
                <PostCard key={post._id} post={post}/>
            ))}
        </section>
    );
};

export default PostList;
