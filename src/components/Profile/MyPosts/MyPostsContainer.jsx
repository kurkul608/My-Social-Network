import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts'
import StoreContext from '../../../storeContext';




function MyPostsContainer(props) {

  let state = props.store.getState();

  let newPost = () => {
    props.store.dispatch(addPostActionCreator());
  }


  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

    return (<StoreContext.Consumer>{
      (store) => (
      <MyPosts updateNewPosttext= {onPostChange} addPost = {newPost} 
        postData={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}/>)}
      </StoreContext.Consumer>)
      
}
export default MyPostsContainer;