import React from 'react';
import avatar from '../images/avatar.jpg';
import ozweego from '../images/ozweego.jpg';


function Content() {
    return(
        <div className="profile">
        <div className="headerImg">
          <img src={ozweego}/>
          </div>
        <div className="avatar">
        <img src={avatar} />
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
        </div>
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
        
        </div>
    );
}
export default Content;