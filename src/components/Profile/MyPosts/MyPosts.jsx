import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
function MyPosts() {
    return(
        <div>
        <div className={classes.posts}>
          My posts
          <div className={classes.item}>
            <textarea />
            <button>Create new post</button>
          </div>
        </div>
        <div className={classes.item}>
          <Post message='Hi'/>
          <Post message='Today is 10.03.2020' />
        </div>
        </div>
    );
}
export default MyPosts;