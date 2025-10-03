/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */

// import Link from 'next/link';
import { HeroSection } from '@/components/hero';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <HeroSection />
      <a
        className="text-muted-foreground text-sm transition-colors hover:text-primary"
        href="/blog"
        style={{
          margin: '30px auto',
          marginBottom: '50px',
          padding: '12px',
          backgroundColor: 'white',
          color: '#000',
          borderRadius: '8px',
        }}
      >
        <span>CHECK OUT OUR BLOG POSTS!</span>
      </a>
    </main>
  );
}
