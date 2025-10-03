import Link from 'next/link';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function CategoryLink({ post }: { post: any }) {
  return (
    <Link
      className="rounded bg-primary/10 px-2 py-1 font-medium text-primary text-xs"
      href={`/category/${encodeURIComponent(post.category)}`}
    >
      {post.category}
    </Link>
  );
}
