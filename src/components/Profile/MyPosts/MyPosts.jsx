import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
function MyPosts(props) {


  let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} disslikesCount={p.disslikesCount} />);
      return(
        <div className={classes.mypost}>
          <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.item_new_post}>
              <textarea />
             <div lassName={classes.createnewpost}> <button>Create new post</button></div>
            </div>
          </div>
          <div className={classes.item}>
            {postElements}
          </div>
        </div>
    );
}
export default MyPosts;