import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';





let mapStateToProps =(state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }

}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPosttext: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
      },
      addPost: () => {
        dispatch(addPostActionCreator());
      }
  }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;