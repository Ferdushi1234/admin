"use client"
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });
  
  if(status === "loading") {
    return <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
  }

  return (
    <div>
      <h1>it is the protected page</h1>
    </div>
  );
}
