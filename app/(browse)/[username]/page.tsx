import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

interface UserpageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserpageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p className="">username: {user.username}</p>
      <p className="">user ID: {user.id}</p>
      <p className="">is following: {`${isFollowing}`}</p>
      <Actions
        username={user.username}
        userId={user.id}
        isFollowing={isFollowing}
      />
    </div>
  );
};

export default UserPage;
