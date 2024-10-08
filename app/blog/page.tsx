import BlogList from "@/app/components/BlogList";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400">Blog</h1>
      <BlogList />
    </div>
  );
}