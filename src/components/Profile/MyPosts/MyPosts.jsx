import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form'
import  { requiredField, maxLenghtCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/preloader/FormsControls/FormsControls';

const maxLenght10 = maxLenghtCreator(10)

function MyPosts(props) {

  
  const onSubmit = (formData) =>{
    props.addPost(formData.newPost)
  }
  let postElements = props.postData
    .map(p => <Post message={p.message} likesCount={p.likesCount} disslikesCount={p.disslikesCount} />);

      return(
        <div className={classes.mypost}>
          <div className={classes.posts}>
            <h3>My posts</h3>
            <AddPostReduxStore onSubmit={onSubmit} />
          </div>
          <div className={classes.item}>
            {postElements}
          </div>
        </div>
    );
}

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={classes.item_new_post}>
      <Field placeholder={'Введите новое сообщение'} name={'newPost'} component={Textarea} validate={[requiredField, maxLenght10]}/>
      <div>
        <button>Create new post</button>
      </div>
    </div>
    </form>
}


const AddPostReduxStore = reduxForm ({form: 'posAddNewPost'}) (AddPostForm)
export default MyPosts;