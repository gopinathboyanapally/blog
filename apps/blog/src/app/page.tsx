import BlogPage from './blog/category/[slug]/page';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <a
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        href={process.env.NEXT_PUBLIC_WEB_URL!}
        style={{
          margin: '30px auto',
          marginBottom: '50px',
          padding: '12px',
          backgroundColor: 'white',
          color: '#000',
          borderRadius: '8px',
        }}
      >
        <b>HOMEPAGE</b>
      </a>
      <h1 className="font-bold text-4xl">Blog</h1>

      <BlogPage
        params={{
          slug: '',
        }}
      />
    </main>
  );
}
