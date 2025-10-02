import { fetchCompanyStats } from '@repo/api/brand';
// import { SiteHeader } from '../../components/sitewide-header';

export default async function AboutSection() {
  const stats = await fetchCompanyStats();

  return (
    <>
      {/* <SiteHeader /> */}
      <section className="container py-24 md:py-32" id="about">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-balance font-bold text-3xl tracking-tight md:text-4xl">
              About Our Work
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're a team of passionate developers and designers dedicated to
                crafting exceptional digital experiences. Our work spans from
                innovative startups to established enterprises, always focusing
                on quality and attention to detail.
              </p>
              <p>
                With years of experience in the industry, we've developed a
                unique approach that combines cutting-edge technology with
                timeless design principles. Every project is an opportunity to
                push boundaries and create something remarkable.
              </p>
              <p>
                Our commitment to excellence has earned us the trust of clients
                worldwide, and we continue to evolve our craft with each new
                challenge.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card/50 p-6 backdrop-blur">
              <div className="mb-2 font-bold text-4xl text-primary">
                {stats.yearsInBusiness}+
              </div>
              <div className="text-muted-foreground text-sm">
                Years Experience
              </div>
            </div>
            <div className="bg-card/50 p-6 backdrop-blur">
              <div className="mb-2 font-bold text-4xl text-primary">
                {stats.projectsCompleted}+
              </div>
              <div className="text-muted-foreground text-sm">
                Projects Completed
              </div>
            </div>
            <div className="bg-card/50 p-6 backdrop-blur">
              <div className="mb-2 font-bold text-4xl text-primary">
                {stats.clientCount}+
              </div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div className="bg-card/50 p-6 backdrop-blur">
              <div className="mb-2 font-bold text-4xl text-primary">
                {stats.satisfactionRate}%
              </div>
              <div className="text-muted-foreground text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
