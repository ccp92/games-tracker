import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const LogoutButton = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return <Link href="/api/auth/logout">Logout</Link>;
};

export default LogoutButton;
