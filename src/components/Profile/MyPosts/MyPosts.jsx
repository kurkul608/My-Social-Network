import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
function MyPosts() {
  let postData = [
    {message: 'Hi!', likesCount: 157, disslikesCount: 0},
    {message: 'Today is 10.03.2020', likesCount: 725, disslikesCount: 13}
  ]

  let postElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount} disslikesCount={p.disslikesCount} />);
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