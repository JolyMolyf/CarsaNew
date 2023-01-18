import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

interface ProtectedRouteProps {
  allowedRoles:Array<any>
}

const ProtectedRoute = ({ allowedRoles } : ProtectedRouteProps) => {
  const isAuthenticated:boolean = useSelector((state:AppState) => state?.user?.isAuthenticated);
  const userRole:string = useSelector((state:AppState) => state?.user?.user?.role);

  const isCorrespondingRole:boolean =  allowedRoles.map((role) => role.toLowerCase()).includes(userRole?.toLowerCase());

  
  if ( isAuthenticated && isCorrespondingRole ) {
    return ( <Outlet/> )
  } else {
    return (
      <Navigate to='/home' replace></Navigate>
    )
    
  }
  
}

export default ProtectedRoute;