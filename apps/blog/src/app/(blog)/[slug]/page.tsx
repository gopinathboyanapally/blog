// app/blog/[slug]/page.tsx

import { fetchPostBySlug } from '@repo/api/blog';
import { ArrowLeft, Calendar, Clock, Eye, Heart } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageParams = Promise<{
  slug: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | ACME Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  const ogImageUrl = post.coverImage?.startsWith('http')
    ? post.coverImage
    : `https://your-domain.com${post.coverImage ?? '/og-default.jpg'}`;

  return {
    title: `${post.title} | ACME Blog`,
    description: post.excerpt,
    keywords: post.tags ?? [], // must be string[]
    authors: post.author?.name ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [
        {
          url: ogImageUrl, // absolute url
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://your-domain.com/blog/${post.slug}`,
      siteName: 'ACME Blog',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl], // absolute url
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <Link
            className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
            href="/"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      <div className="border-border border-b">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6">
            <Link href={`/category/${post.category}`}>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs">
                {post.category}
              </span>
            </Link>
            <h1 className="mb-4 text-balance font-bold text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-pretty text-muted-foreground text-xl">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
            <div className="relative flex items-center gap-3">
              <Image
                alt={post.author.name || 'Author'}
                className="h-10 w-10 rounded-full"
                height={40}
                src={post.author.avatar || '/placeholder.svg'}
                width={40}
              />
              <div>
                <p className="font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs">{post.author.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.views.toLocaleString()} views
              </span>
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {post.likes.toLocaleString()} likes
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="aspect-[2/1] overflow-hidden rounded-lg border border-border">
          <Image
            alt={post.title || 'Cover Image'}
            className="h-full w-full object-cover"
            height={400}
            src={post.coverImage || '/placeholder.svg'}
            width={800}
          />
        </div>
      </div>

      <article className="container mx-auto max-w-4xl px-4 pb-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
            {post.content}
          </div>
        </div>

        {post.tags?.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2 border-border border-t pt-8">
            {post.tags.map((tag) => (
              <span
                className="rounded-full bg-accent px-3 py-1 text-accent-foreground text-xs"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <div className="relative flex gap-4">
            <Image
              alt={post.author.name || 'Author Avatar'}
              className="h-16 w-16 flex-shrink-0 rounded-full"
              height={64}
              src={post.author.avatar || '/placeholder.svg'}
              width={64}
            />
            <div>
              <h3 className="mb-1 font-semibold text-lg">{post.author.name}</h3>
              <p className="mb-2 text-muted-foreground text-sm">
                {post.author.name}
              </p>
              <p className="text-foreground/80 text-sm">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
