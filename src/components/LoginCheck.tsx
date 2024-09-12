import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const LoginCheck = () => {
    
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="">
      {isAuthenticated && <LogoutButton></LogoutButton>}
      {!isAuthenticated && <LoginButton></LoginButton>}
    </div>
  )
}

export default LoginCheck

