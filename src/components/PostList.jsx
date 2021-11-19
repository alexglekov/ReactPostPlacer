import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'red'}}>
                {title}
            </h1>
            {posts.map((post) =>
                <PostItem post = {post} remove ={remove} key={post.id} />
            )}
        </div>
    );
};

export default PostList;