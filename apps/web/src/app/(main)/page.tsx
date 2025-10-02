// import { SiteHeader } from '@/components/sitewide-header';
/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import { HeroSection } from '@/components/hero';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <HeroSection />
      <a
        href={process.env.NEXT_PUBLIC_BLOG_URL!}
        style={{
          margin: '30px auto',
          marginBottom: '50px',
          padding: '12px',
          backgroundColor: 'white',
          color: '#000',
          borderRadius: '8px',
        }}
      >
        <b>CHECK OUT OUR BLOG POSTS!</b>
      </a>
    </main>
  );
}
