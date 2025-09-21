import UserProfile from "../[username]/page";

export default function MyProfileAliasPage() {
  // Reuse the public profile UI for authenticated user's own profile route
  return <UserProfile />;
}