import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let initialState = {
  postData: [
    { id: 1, message: "Hi!", likesCount: 157, disslikesCount: 0 },
    {
      id: 2,
      message: "Today is 10.03.2020",
      likesCount: 725,
      disslikesCount: 13,
    },
  ],
  profileIMG: 'profileIMG',
  profile: null,
  newPostText: "",
  status: "",
};


test('length post should be incrimented', () => {
  // 1. test data
  let action = addPostActionCreator('NewText')
  
  // 2. action
  let newPost = profileReducer(initialState, action)
  // 3. expect 
  expect (newPost.postData.length).toBe(3)
});

test('Message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('NewText')
  
  // 2. action
  let newPost = profileReducer(initialState, action)
  // 3. expect 
  expect (newPost.postData[2].message).toBe('NewText')
});

test('Length deleting length of message should be decrement', () => {
  // 1. test data
  let action = deletePost(1)
  
  // 2. action
  let newPost = profileReducer(initialState, action)
  // 3. expect 
   expect (newPost.postData.length).toBe(1)
});
test('Length deleting length of message should not  be decrement if id is icorrected', () => {
  // 1. test data
  let action = deletePost(9809)
  
  // 2. action
  let newPost = profileReducer(initialState, action)
  // 3. expect 
   expect (newPost.postData.length).toBe(2)
});

