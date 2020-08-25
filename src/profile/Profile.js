import React from 'react';
import propTypes from 'prop-types';



const Profile = ({profile})=> {
    return (
        <div>
            <p>{profile.fullName}</p>
         <p>{profile.bio}</p>
         <p>{profile.profession}</p>
        </div>
    )
}
Profile.propTypes ={
    fullName : propTypes.string,
    bio : propTypes.string,
    profession : propTypes.string
}

Profile.defaultprops = {
    fullName : "Test",
    bio : "Test",
    profession : "Test"
}



export default Profile;
