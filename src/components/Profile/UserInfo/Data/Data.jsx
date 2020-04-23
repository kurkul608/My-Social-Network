import React from "react";
import classes from "./Data.module.css";

export function Data({ profile, isOwner, goToEditMode }) {
    
  return (
    <div className={classes.data}>
      <b>Name: </b>
      {profile.fullName} <br />
      <b>About me: </b>{profile.aboutMe}<br />
      <b>Contacts: </b>
      {Object.keys(profile.contacts).map((key) => (
         <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      ))}
      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? <span>Yes</span> : <span>No</span>} <br />
        {profile.lookingForAJob ? <span><b>My professional skills: </b>  {profile.lookingForAJobDescription} </span> : <></>}
          
      </div>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
  );
}

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle} - </b> {contactValue}{" "}
    </div>
  );
};

