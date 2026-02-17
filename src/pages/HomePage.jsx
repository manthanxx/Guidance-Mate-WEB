import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Brain,
  ChartNoAxesColumnIncreasing,
  Globe2,
  MessageSquare,
  School,
  Smartphone,
  TrendingDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { featuresContent, homeContent } from '../content/siteContent';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Container from '../layout/Container';

const problemIconMap = {
  alert: AlertTriangle,
  question: MessageSquare,
  downtrend: TrendingDown,
};

const solutionIconMap = {
  robot: Bot,
  chat: MessageSquare,
  globe: Globe2,
};

const featureIconMap = {
  brain: Brain,
  chat: MessageSquare,
  school: School,
  globe: Globe2,
  chart: ChartNoAxesColumnIncreasing,
  mobile: Smartphone,
};

function HomePage() {
  useDocumentMeta({
    title: 'GuidanceMate - AI-powered career guidance app for students',
    description: 'AI-powered career guidance that discovers your perfect career path based on your skills, interests & preferences',
    canonical: 'https://guidancemate.vercel.app/',
  });

  return (
    <>
      <section className="pb-20 pt-6 md:pb-24 md:pt-10">
        <Container>
          <div className="glass-panel relative overflow-hidden px-6 py-14 sm:px-10 md:px-12 md:py-20">
            <div className="hero-depth" aria-hidden="true" />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="eyebrow"
            >
              {homeContent.cta.trust}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.05 }}
              className="display-1 mt-5 max-w-5xl text-balance"
            >
              <span className="text-slate-900">{homeContent.hero.title}</span>{' '}
              <span className="text-gradient">AI-powered career guidance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.1 }}
              className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
            >
              {homeContent.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.14 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link to="/download" className="btn-primary">
                {homeContent.hero.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/features" className="btn-secondary">
                {featuresContent.heroTitle}
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader title={homeContent.problem.title} subtitle={homeContent.problem.cards[0].text} />
            </div>

            <div className="space-y-4 lg:col-span-7">
              {homeContent.problem.cards.map((card, index) => {
                const Icon = problemIconMap[card.icon] ?? AlertTriangle;

                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="glass-panel p-6 sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">{card.title}</h3>
                        <p className="mt-2 text-slate-600">{card.text}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <SectionHeader title={homeContent.solution.title} center />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {homeContent.solution.cards.map((card) => {
              const Icon = solutionIconMap[card.icon] ?? Bot;
              return (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel h-full p-7"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft-deep">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-slate-600">{card.text}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <SectionHeader title={featuresContent.sectionTitle} subtitle={featuresContent.heroSubtitle} center />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuresContent.items.map((item) => {
              const Icon = featureIconMap[item.icon] ?? Brain;

              return (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel h-full p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="glass-panel px-6 py-10 text-center sm:px-8 sm:py-14">
            <SectionHeader title={homeContent.cta.title} subtitle={homeContent.cta.trust} center />
            <div className="mt-8">
              <Link to="/download" className="btn-primary">
                {homeContent.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
