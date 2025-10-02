import { fetchContactInfo } from '@repo/api/brand';

export async function HeroSection() {
  const contactInfo = await fetchContactInfo();
  const email = contactInfo.email;
  return (
    <section className="container py-24 md:py-32 lg:py-40">
      <div className="flex max-w-3xl flex-col items-start">
        <h1 className="mb-6 text-balance font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl">
          Hello, {email}
        </h1>
        <p className="text-pretty text-lg text-muted-foreground leading-relaxed md:text-xl">
          Welcome to the Vercel Academy Foundation Web App!
        </p>
      </div>
    </section>
  );
}
