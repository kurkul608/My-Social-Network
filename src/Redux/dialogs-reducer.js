import logo from './Post/images/logo.svg'


const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messagesData: [
        {message: 'Hi! Thats my first web-site!', id: 1},
        {message: 'How are you?', id: 2}
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
}

const dialogsReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){         
        case SEND_MESSAGE:
          let body = action.body;
              return {
                ...state,
                messagesData: [...state.messagesData, {message: body,  id: 5}]
              };
            
        default:
            return state;
    }
}



  export const sendMessageActionCreator = (text) => {
    return {
      type: SEND_MESSAGE,
      body: text
    }
  }

export default dialogsReducer;