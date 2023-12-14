import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="">Dashboard</h1> <UserButton afterSignOutUrl="/" />
    </div>
  );
}
