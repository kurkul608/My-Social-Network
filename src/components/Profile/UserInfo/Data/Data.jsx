import React from 'react';
import classes from './Data.module.css';

function Data(props){
    return(
        <div className={classes.data}>
            Name:{props.profile.fullName} <br />
            facebook: {props.profile.contacts.facebook} <br />
            website: {props.profile.contacts.website} <br />
            vk: {props.profile.contacts.vk} <br />
            twitter: {props.profile.contacts.twitter} <br />
            instagram: {props.profile.contacts.instagram} <br />
            youtube: {props.profile.contacts.youtube} <br />
            github: {props.profile.contacts.github} <br />
            mainLink: {props.profile.contacts.mainLink} <br />
            <div>
                Looking for a job: {(props.profile.lookingForAJob) ? <span>Yes</span> : <span>No</span>} <br/>
                Looking for a job description: {props.profile.lookingForAJobDescription}
            </div>

        </div>
    );
}
export default Data;