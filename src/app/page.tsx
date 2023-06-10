import {PostForm} from "@/components";
import {getAllPosts} from "@/backend/actions/post.action";

const Home = async () => {

    const data = await getAllPosts();

    return (
        <div>
            <h2 className="text-xl font-semibold">C.R.U.D + Sort + Search + Pagination</h2>
            <PostForm/>
        </div>
    );
};

export default Home;
