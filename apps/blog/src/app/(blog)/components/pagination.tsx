// app/blog/components/pagination.tsx
'use client';

import Link from 'next/link';

function pageRange(current: number, total: number): number[] {
  const pages: number[] = [];
  const add = (n: number) => {
    // biome-ignore lint/style/useBlockStatements: <explanation>
    if (!pages.includes(n) && n >= 1 && n <= total) pages.push(n);
  };
  add(1);
  add(2);
  add(current - 1);
  add(current);
  add(current + 1);
  add(total - 1);
  add(total);
  return [...new Set(pages)].sort((a, b) => a - b);
}

export default function Pagination({
  page,
  totalPages,
  basePath = '/blog',
}: {
  page: number;
  totalPages: number;
  basePath?: string;
}) {
  // biome-ignore lint/style/useBlockStatements: <explanation>
  if (totalPages <= 1) return null;

  const pages = pageRange(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      <Link
        aria-disabled={page === 1}
        className={`rounded-md border px-3 py-2 text-sm ${
          page === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-muted'
        }`}
        href={{ pathname: basePath, query: { page: Math.max(1, page - 1) } }}
      >
        Prev
      </Link>

      {pages.map((p, i) => {
        const prev = pages[i - 1];
        const showEllipsis = i > 0 && p - (prev ?? 0) > 1;
        return (
          <span className="flex" key={p}>
            {showEllipsis && (
              <span className="mx-1 text-muted-foreground">…</span>
            )}
            <Link
              aria-current={p === page ? 'page' : undefined}
              className={`rounded-md border px-3 py-2 text-sm ${
                p === page
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
              href={{ pathname: basePath, query: { page: p } }}
            >
              {p}
            </Link>
          </span>
        );
      })}

      <Link
        aria-disabled={page === totalPages}
        className={`rounded-md border px-3 py-2 text-sm ${
          page === totalPages
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-muted'
        }`}
        href={{
          pathname: basePath,
          query: { page: Math.min(totalPages, page + 1) },
        }}
      >
        Next
      </Link>
    </nav>
  );
}
