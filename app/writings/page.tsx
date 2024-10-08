import Writings from "@/app/components/Writings";

export default function WritingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400">
        Writings
      </h1>
      <Writings />
    </div>
  );
}
