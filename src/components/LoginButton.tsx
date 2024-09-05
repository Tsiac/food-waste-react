import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="border-yellowfade bg-yellow text-purple rounded-lg py-1 px-5" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
