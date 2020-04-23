import React from 'react'
import { Contact } from './Data'
import { reduxForm } from "redux-form";
import {
    Textarea,
    CreateField,
    Input,
  } from "../../../common/preloader/FormsControls/FormsControls";
  import {
    requiredField,
    maxLenghtCreator,
  } from "../../../../utils/validators/validators";
import classes from './Data.module.css';

  const maxLength15 = maxLenghtCreator(15);
  const maxLength30 = maxLenghtCreator(30);

 const DataReuxForm = ({handleSubmit,  profile, error}) => {
    return (
    <form onSubmit={handleSubmit}>
        
        <b>Name: </b> {CreateField(
            "FullName",
            "fullName",
            Input,
            [requiredField, maxLength15],
            ""
          )}
          <b>About me: </b> <br />{CreateField(
            "",
            "aboutMe",
            Input ,
            [requiredField, maxLength30],
            ""
          )}
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => (
            <div className={classes.contact}>
                <b>{key}:</b>
                {CreateField(
            key,
            "contacts."+ key,
            Input ,
            [requiredField],
            ""
          )}
            </div>
            ))}
            <b>Looking for a job: </b>{CreateField(
            "",
            "lookingForAJob",
            Input ,
            [],
            "checkbox"
          )}
          <b>My professional skills: </b>
          {CreateField(
            "My professional skills:",
            "lookingForAJobDescription",
            Textarea,
            [requiredField, maxLength30],
            "checkbox"
          )}
          {error && <div className={classes.formSummaryError}>{error}</div>}
          <button>Save</button>
    </form>
    );
  }
  export const DataForm = reduxForm({ form: "edit-profile" })(DataReuxForm)