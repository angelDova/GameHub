import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="">
      <h1 className="">Dashboard</h1> <UserButton afterSignOutUrl="/" />
    </div>
  );
}
