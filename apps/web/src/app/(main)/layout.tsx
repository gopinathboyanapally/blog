import { SiteFooter } from '@/components/sitewide-footer';
import { SiteHeader } from '@/components/sitewide-header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
