import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const LoginButton = () => {
  const { user } = useUser();

  if (user) {
    return null;
  }

  return <Link href="/api/auth/login">Login</Link>;
};

export default LoginButton;
