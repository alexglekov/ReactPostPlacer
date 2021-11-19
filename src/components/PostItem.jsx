import React from 'react';
import MyButtondelete from "./UI/button/MyButtondelete";


const PostItem = (props) => {

    return (
        <div>
            <div className='post'>
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                    <div className="post__btns">
                        <MyButtondelete onClick={() => props.remove(props.post)}>Удалить</MyButtondelete>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;