import BlogPage from './blog/category/[slug]/page';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Blog</h1>

      <BlogPage
        params={{
          slug: '',
        }}
      />
    </main>
  );
}
