import React from 'react';
import propTypes from 'prop-types';



const Profile = (props)=> {
    return (
        <div>
            <p> children.props</p>
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