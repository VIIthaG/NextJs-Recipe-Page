import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <h1 className="text-5xl flex justify-center min-h-screen items-center">
        Loading please wait...
      </h1>
      <div className="w-full min-h-screen">
        <Skeleton />
      </div>
    </div>
  );
}
