import { fetchPostsByCategory } from '@repo/api/blog';
import { ArrowLeft, Clock, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../components/ui/accordion';

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const { slug } = await params;
  const categories = await fetchPostsByCategory(slug, 10);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur">
        <header className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur">
          <div className="container max-w-4xl px-4 py-4">
            <Link
              className="items-left inline-flex gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
              href="/blog"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </header>
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <h1 className="mb-2 font-bold text-4xl">{slug}</h1>
          <p className="text-muted-foreground">
            Insights, tutorials, and updates from our team
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-12">
        <Accordion className="space-y-4" type="multiple">
          {categories.map((post) => (
            <AccordionItem
              className="overflow-hidden rounded-lg border border-border"
              key={post.id}
              value={post.title}
            >
              <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-accent/50 hover:no-underline">
                <div className="flex w-full items-center justify-between pr-4">
                  <h2 className="font-semibold text-xl">{post.title}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3">
                  <div
                    className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                    key={post.id}
                  >
                    <div className="block aspect-[2/1] w-full overflow-hidden bg-muted">
                      <Image
                        alt={post.title}
                        height={400}
                        // fill
                        // className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={post.coverImage || '/placeholder.svg'}
                        width={400}
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-3 text-muted-foreground text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readingTime} min
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
                      <h3 className="mb-2 line-clamp-2 text-balance font-semibold text-lg transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-muted-foreground text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 border-border border-t pt-3">
                        <Image
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full"
                          height={40}
                          src={post.author.avatar}
                          width={40}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium text-sm">
                            {post.author.name}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {new Date(post.publishedAt).toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
