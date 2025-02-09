import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Recipie App</h1>
      <Link href="/recipe-list">Explore recipies</Link>
    </div>
  );
}
