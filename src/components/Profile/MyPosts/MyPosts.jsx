import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';




function MyPosts(props) {

  let newPostElement = React.createRef();

  let newPost = () => {
    props.dispatch(addPostActionCreator());
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }


  let postElements = props.postData
    .map(p => <Post message={p.message} likesCount={p.likesCount} disslikesCount={p.disslikesCount} />);

      return(
        <div className={classes.mypost}>
          <div className={classes.posts}>
            <h3>My posts</h3>
            <div className={classes.item_new_post}>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
             <div lassName={classes.createnewpost}>
                <button onClick={newPost}>Create new post</button>
                </div>
            </div>
          </div>
          <div className={classes.item}>
            {postElements}
          </div>
        </div>
    );
}
export default MyPosts;