import UpdateUser from "./update-user";
import AuthButton from "./user";

export default async function Auth() {
  const user = null;

  return (
    <div className="flex items-center justify-between text-sm">
      <UpdateUser user={user} />
      <AuthButton user={user} />
    </div>
  );
}
