import { motion } from 'framer-motion';
import { Brain, ChartNoAxesColumnIncreasing, Globe2, MessageSquare, School, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { featuresContent } from '../content/siteContent';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Container from '../layout/Container';

const featureIconMap = {
  brain: Brain,
  chat: MessageSquare,
  school: School,
  globe: Globe2,
  chart: ChartNoAxesColumnIncreasing,
  mobile: Smartphone,
};

function FeaturesPage() {
  useDocumentMeta({
    title: 'Complete Career Solution - GuidanceMate',
    description: featuresContent.heroSubtitle,
    canonical: 'https://guidancemate.vercel.app/features',
  });

  return (
    <>
      <section className="pb-20 pt-6 md:pb-24 md:pt-10">
        <Container>
          <div className="glass-panel px-6 py-12 sm:px-10 sm:py-16">
            <SectionHeader eyebrow="Feature Overview" title={featuresContent.heroTitle} subtitle={featuresContent.heroSubtitle} />
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <SectionHeader title={featuresContent.sectionTitle} center />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuresContent.items.map((item, index) => {
            const Icon = featureIconMap[item.icon] ?? Brain;
            return (
              <motion.article key={item.title} whileHover={{ y: -4 }} className="glass-panel p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500">Feature {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-4 text-slate-600">{item.text}</p>
              </motion.article>
            );
          })}
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="glass-panel px-6 py-10 text-center sm:px-8 sm:py-14">
            <SectionHeader title={featuresContent.ctaTitle} center />
            <motion.div whileHover={{ y: -2 }} className="mt-7 inline-block">
            <Link to="/download" className="btn-primary">
              {featuresContent.ctaButton}
            </Link>
          </motion.div>
        </div>
        </Container>
      </section>
    </>
  );
}

export default FeaturesPage;
