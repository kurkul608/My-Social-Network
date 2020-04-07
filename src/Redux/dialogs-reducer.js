import logo from './Post/images/logo.svg'

const UPDATE_NEW_MESSAAGE_BODY = 'UPDATE_NEW_MESSAAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
      ],
      newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case UPDATE_NEW_MESSAAGE_BODY:{
          let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
          }
        case SEND_MESSAGE:{
            let newBody ={ 
                message: state.newMessageBody
              }
              let stateCopy  = {...state}
              stateCopy.messagesData = [...state.messagesData]
              stateCopy.messagesData.push(newBody);
              stateCopy.newMessageBody = '';
              return stateCopy;
            }
        default:
            return state;
    }
}


export const sendMessageActionCreator = () =>{
    return {
      type: SEND_MESSAGE
    }
  }
  export const updateNewMessageBodyActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAAGE_BODY,
      body: text
    }
  }

export default dialogsReducer;