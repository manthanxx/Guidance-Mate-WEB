import { motion } from 'framer-motion';
import { Bug, Github, Globe, Laptop2, Linkedin, Paintbrush2, Server, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { teamContent } from '../content/siteContent';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Container from '../layout/Container';

const memberIconMap = {
  laptop: Laptop2,
  server: Server,
  paint: Paintbrush2,
  bug: Bug,
  tool: Wrench,
};

function TeamPage() {
  useDocumentMeta({
    title: 'Our Dream Team - GuidanceMate',
    description: teamContent.heroSubtitle,
    canonical: 'https://guidancemate.vercel.app/team',
  });

  return (
    <>
      <section className="pb-20 pt-6 md:pb-24 md:pt-10">
        <Container>
          <div className="glass-panel px-6 py-12 sm:px-10 sm:py-16">
            <SectionHeader eyebrow="Core Team" title={teamContent.heroTitle} subtitle={teamContent.heroSubtitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {teamContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/70 bg-white/75 p-5">
                  <p className="text-3xl font-semibold tracking-tight text-slate-900">
                    {stat.prefix ?? ''}
                    {stat.value}
                    {stat.suffix ?? ''}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <SectionHeader title={teamContent.sectionTitle} center />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamContent.members.map((member, index) => {
            const Icon = memberIconMap[member.icon] ?? Laptop2;
            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-7 text-center"
              >
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-slate-900">
                      <Icon className="h-9 w-9" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{member.roleMeta}</p>
                  <p className="mt-4 text-slate-700">
                    <strong className="block text-slate-900">{member.role}</strong>
                    {member.specialty}
                  </p>

                  <div className="mt-6 flex justify-center gap-3">
                    {[Github, Linkedin, Globe].map((SocialIcon, i) => (
                      <a
                        key={`${member.name}-${i}`}
                        href="#"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300"
                      >
                        <SocialIcon className="h-4.5 w-4.5 text-slate-700" />
                      </a>
                    ))}
                  </div>
                </motion.article>
            );
          })}
        </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="glass-panel px-6 py-10 text-center sm:px-8 sm:py-14">
            <SectionHeader title={teamContent.unityTitle} subtitle={teamContent.unityText} center />
            <motion.div whileHover={{ y: -2 }} className="mt-10 inline-block">
            <Link to="/download" className="btn-primary">
              {teamContent.ctaButton}
            </Link>
          </motion.div>
        </div>
        </Container>
      </section>
    </>
  );
}

export default TeamPage;
