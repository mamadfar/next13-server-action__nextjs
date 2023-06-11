"use client";

import {FC, experimental_useOptimistic as useOptimistic} from 'react';
import {PostCard} from "@/components";
import {deletePost} from "@/backend/actions/post.action";

const PostList:FC<{posts: ReadonlyArray<IPost>}> = ({posts}) => {

    const [optimisticPosts, addOptimisticPosts] = useOptimistic(
        {posts},
        (state, newPosts: ReadonlyArray<IPost>) => ({...state, posts: newPosts}),
    );

    const handleDelete = async (postId: string | undefined) => {
        if (window.confirm("Do you want to delete this post?")) {
            const newPosts = posts.filter(post => post._id !== postId);
            addOptimisticPosts(optimisticPosts.posts = newPosts);
            await deletePost(postId);
        }
    }

    return (
        <section className="flex flex-wrap gap-7 h-full">
            {optimisticPosts.posts.map(post => (
                <PostCard key={post._id} post={post} handleDelete={handleDelete}/>
            ))}
        </section>
    );
};

export default PostList;
