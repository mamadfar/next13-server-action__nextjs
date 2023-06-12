import React from 'react';
import {getOnePost} from "@/backend/actions/post.action";
import {PostCard} from "@/components";

const Post = async ({params: {id}}: {params: {id: string}}) => {

    const post = await getOnePost(id);

    return (
        <section className="flex justify-center items-center pt-10">
            {post ? (
                <PostCard post={post}/>
                ) : (
                <h2>There is no such data</h2>
            )}
        </section>
    );
};

export default Post;
