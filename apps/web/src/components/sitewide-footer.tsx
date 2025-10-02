import { fetchContactInfo } from '@repo/api/brand';
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

export async function SiteFooter() {
  const contactInfo = await fetchContactInfo();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  };

  return (
    <footer className="border-border/40 border-t bg-secondary/20">
      <div className="container py-12 md:py-16" style={{ padding: '30px' }}>
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 font-bold text-lg">Portfolio</h3>
            <p className="max-w-md text-pretty text-muted-foreground text-sm leading-relaxed">
              Creating exceptional digital experiences through thoughtful design
              and robust engineering. Let's build something amazing together.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                className="text-sm transition-colors hover:text-primary"
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                href={process.env.NEXT_PUBLIC_BLOG_URL!}
              >
                Blogs
              </a>
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-primary"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-primary"
                href="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-primary"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-3">
              {Object.entries(contactInfo.socialMedia)
                .slice(0, 4)
                .map(([platform, url]) => {
                  const Icon =
                    socialIcons[platform as keyof typeof socialIcons];
                  if (!Icon) {
                    return null;
                  }
                  return (
                    <a
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary transition-colors hover:bg-primary hover:text-primary-foreground"
                      href={url}
                      key={platform}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{platform}</span>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-border/40 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-muted-foreground text-sm transition-colors hover:text-primary"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
