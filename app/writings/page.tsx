import Writings from "@/app/components/Writings";

export default function WritingsPage() {
  return (
    <main className="p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-medium mb-8">
        Writings
      </h1>
      <Writings />
    </main>
  );
}
