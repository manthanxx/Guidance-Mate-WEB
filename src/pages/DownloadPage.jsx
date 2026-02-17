import { motion } from 'framer-motion';
import { CheckCircle2, Download, Server, Smartphone } from 'lucide-react';
import { downloadContent, featuresContent } from '../content/siteContent';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Container from '../layout/Container';
import SectionHeader from '../components/SectionHeader';
import guidanceMateApk from '../assets/Guidance Mate (Demo).apk';

function DownloadPage() {
  const requirementIcons = [Smartphone, Server, CheckCircle2];

  useDocumentMeta({
    title: 'Download Free - GuidanceMate',
    description: downloadContent.heroSubtitle,
    canonical: 'https://guidancemate.vercel.app/download',
  });

  return (
    <>
      <section className="pb-20 pt-6 md:pb-24 md:pt-10">
        <Container>
          <div className="glass-panel px-6 py-12 sm:px-10 sm:py-16">
            <SectionHeader eyebrow="Android Build" title={downloadContent.heroTitle} subtitle={downloadContent.heroSubtitle} />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={guidanceMateApk}
                download
                className="btn-primary px-8 py-3"
              >
                <Download className="h-5 w-5" />
                {downloadContent.button}
              </motion.a>
              <span className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700">
                {featuresContent.ctaButton}
              </span>
            </div>
            <p className="mt-4 text-slate-700">{downloadContent.status}</p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="glass-panel p-7 lg:col-span-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{downloadContent.installTitle}</h3>

              <div className="mt-6 space-y-4">
                {downloadContent.installSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-4"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <aside className="glass-panel p-7 lg:col-span-4">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{downloadContent.requirementsTitle}</h3>
              <ul className="mt-5 space-y-3">
                {downloadContent.requirements.map((item, index) => {
                  const Icon = requirementIcons[index] ?? CheckCircle2;
                  return (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <Icon className="h-4.5 w-4.5 text-slate-700" />
                      {item}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 text-sm text-slate-500">{downloadContent.footer}</p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export default DownloadPage;
