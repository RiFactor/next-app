import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

// ToDo Extension to organise imports and organise tw utility classes?

export default function Home() {
  return (
    <main className="flex flex-col gap-3">
      <h1>Hello World</h1>
      <Link className="btn btn-primary w-fit" href="/users">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
