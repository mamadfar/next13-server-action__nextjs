import {PostForm, PostList} from "@/components";
import {getAllPosts} from "@/backend/actions/post.action";

const Home = async () => {

    const {posts} = await getAllPosts();

    return (
        <div>
            <h2 className="text-xl font-semibold">C.R.U.D + Sort + Search + Pagination</h2>
            <PostForm/>
            <PostList posts={posts}/>
        </div>
    );
};

export default Home;
