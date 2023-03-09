import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const PrivateRoute = ({children}) => {
  
  const {user, loading, setLoading} = useContext(AuthContext)

  const location = useLocation()

  

  if(user?.emailVerified === true){
    setLoading(false)
    return children
      
  }
    
  
  if(loading){
    return <Loading/>
  }
  

  return <Navigate to='/login' state={{from: location } }  replace></Navigate> ;


};

export default PrivateRoute;