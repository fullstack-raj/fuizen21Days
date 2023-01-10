import React from 'react';
import {useForm} from 'react-hook-form';

const Forms = () => {
  //const { register, handleSubmit, watch, formState: { errors} } = useForm({mode:'onSubmit'});
  const profile = useForm({mode:'onBlur'});
   

  console.log(profile.watch("lastname"));
  console.log(profile.formState.errors)

  const onSubmitForm = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={profile.handleSubmit(onSubmitForm)}>
 
      <input type="text" placeholder='first name'  {...profile.register("firstname", {required:true})}/>
      <p> {profile.formState.errors.firstname && profile.formState.errors.firstname.type === "required" ? "this is required" :''}</p>
      
      <input type="text" placeholder='last name'  {...profile.register("lastname", {required:true})}/>

      <button type='submit'>Save</button>
    </form>
  )
}

export default Forms