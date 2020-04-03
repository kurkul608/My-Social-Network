import profileIMG from './ProfileHead/images/Head.jpg'
import avatar from './UsersInfo/Avatars/images/avatar.jpg'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState ={
    postData: [
        {id: 1, message: 'Hi!', likesCount: 157, disslikesCount: 0},
        {id: 2, message: 'Today is 10.03.2020', likesCount: 725, disslikesCount: 13}
      ],
    
    profileIMG: profileIMG,
    usersInfo: [
      {id:1, name:'Petr M.', city:'Saratov', avatar: avatar }
    ],
    newPostText: 'Hi'
};
const profileReducer = (state = initialState, action) => {

    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                disslikesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = (action.newText); 
            return state;
        default:
            return state;
    }
    
}

export const addPostActionCreator = () =>{
    return {
      type: ADD_POST
    }
  }
  export const updateNewPostTextActionCreator = (text) =>{
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }
export default profileReducer;