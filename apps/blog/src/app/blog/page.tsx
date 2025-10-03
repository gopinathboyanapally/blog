import { fetchPosts } from '@repo/api/blog';
import { Clock, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import CategoryLink from '../blog/components/category-link';
import Pagination from './components/pagination';

type Search = { page?: string };

export default async function AllPostsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<JSX.Element> {
  const pageSize = 9;
  const page = Math.max(1, Number((await searchParams)?.page) || 1);

  const posts = await fetchPosts(pageSize, page);
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-background">
      <div className="border-border border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-4 font-bold text-4xl text-foreground">
            All Blog Posts
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse through all {posts.length} articles
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id}>
            <Link
              className="group block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50"
              href={`/blog/${post.slug}`}
              key={post.id}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  alt={post.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  src={post.coverImage || '/placeholder.svg'}
                />
              </div>
            </Link>
            <div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <CategoryLink post={post} />
                  <span className="text-muted-foreground text-xs">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h2 className="mb-2 line-clamp-2 font-semibold text-foreground text-xl transition-colors group-hover:text-primary">
                  {post.title}
                </h2>

                <p className="mb-4 line-clamp-3 text-muted-foreground text-sm">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-border border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      alt={post.author.name}
                      className="rounded-full"
                      height={24}
                      src={post.author.avatar || '/placeholder.svg'}
                      width={24}
                    />
                    <span className="text-muted-foreground text-sm">
                      {post.author.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}m
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination basePath="/blog" page={page} totalPages={totalPages} />
    </div>
  );
}
