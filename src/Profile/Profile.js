import React from 'react'
import PropTypes from 'prop-types'
import AK from  '../component/AK .png'


function Profile(props) {
  const handleName = fullname => alert(fullname);

  return (
    <div>
      <img src={AK} alt='AK.png' style={{width: 200}} />
        <div>
          <h2>BIO: {props.bio}</h2>
        </div>
        <div>
          <h2>PROFESSION: {props.profession}</h2>
        </div>
        
        <button onClick={()=> handleName(`My name is Akin Holo`)} style={{width: 200, height: 50, borderRadius: 10, border: 'solid 1px lightblue', backgroundColor: 'whitesmoke'}}>
          See user name
        </button>   
       
      
    </div>
  );
};

Profile.defaultProps = {bio: 'lorem'}

Profile.propTypes = {
  anyProp: PropTypes.any 
};

export default Profile