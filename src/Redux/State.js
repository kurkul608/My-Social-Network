  import profileIMG from './ProfileHead/images/Head.jpg'
  import avatar from './UsersInfo/Avatars/images/avatar.jpg'
  import logo from './Post/images/logo.svg'
  import { renderEntrieTree } from '../render'
  
  let newRender = () => renderEntrieTree(allData)

  let state = {
      profilePage: {
        postData: [
            {id: 1, message: 'Hi!', likesCount: 157, disslikesCount: 0},
            {id: 2, message: 'Today is 10.03.2020', likesCount: 725, disslikesCount: 13}
          ],
        profileIMG: profileIMG,
        usersInfo: [
           {id:1, name:'Petr M.', city:'Saratov', avatar: avatar }
        ]
      },
      dialogsPage: {
        messagesData: [
            {message: 'Hi! Thats my first web-site!'},
            {message: 'How are you?'}
          ],
          messageLogo: logo,
          dialogData: [
            {name: 'Petr', id: 1}, 
            {name: 'Iuliia', id: 2},
            {name: 'Alexey', id: 3},
            {name: 'Ivan', id:4},
            {name:'Alla', id: 5},
            {name: 'Stanislav', id: 6},
            {name: 'Vladimir', id: 7},
            {name: 'Oleg', id: 8},
            {name: 'Mew', id: 9}
          ]
      },
      sideBar: {
        menu: [
          {path:'/profile', name:'My Profile'},
          {path:'/messages', name:'Messages'},
          {path:'/friends', name:'My Friends'},
          {path:'/music', name:'Music'},
        ]
      }
      
       
  }

  export let addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0,
      disslikesCount: 0
    };
    state.profilePage.postData.push(newPost);
    newRender();
  }



  let allData = {
    state: state,
    addPost:addPost
  }
  
  export default allData;