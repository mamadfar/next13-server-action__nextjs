import {Feature, PostForm, PostList} from "@/components";
import {getAllPosts} from "@/backend/actions/post.action";

const Home = async ({searchParams}: {searchParams: string | undefined}) => {

    const {posts} = await getAllPosts(searchParams);

    return (
        <div>
            <h2 className="text-xl font-semibold">C.R.U.D + Sort + Search + Pagination</h2>
            <PostForm/>
            <Feature/>
            <PostList posts={posts}/>
        </div>
    );
};

export default Home;
