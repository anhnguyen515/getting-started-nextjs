import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello there!</h1>
      <h2 className="text-2xl font-bold mt-4">Welcome to my NextJS app!</h2>
      <br />
      <p className="text-lg">
        This is a simple NextJS app with Tailwind CSS and TypeScript. Select any
        category that you want to see.
      </p>
      <div className="flex gap-4 mt-8">
        <Link href="/calculator">
          <Button level="normal" variant="primary" size="lg">
            Calculator
          </Button>
        </Link>
      </div>
    </main>
  );
}
