import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Footer = () => {
    
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && <LogoutButton></LogoutButton>}
      {!isAuthenticated && <LoginButton></LoginButton>}
    </>
  )
}

export default Footer
