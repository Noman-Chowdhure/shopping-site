import useAuth from '../../hook/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation()
    if(!user)
    {
        return <Navigate to='/login' state={location?.pathname || '/product'}></Navigate>
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default PriveteRoute