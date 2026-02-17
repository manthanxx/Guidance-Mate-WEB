import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import FloatingField from '../components/FloatingField';
import SectionHeader from '../components/SectionHeader';
import { contactContent } from '../content/siteContent';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Container from '../layout/Container';

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

const contactIconMap = {
  chat: MessageCircle,
  mail: Mail,
  map: MapPin,
};

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  useDocumentMeta({
    title: 'Get In Touch - GuidanceMate',
    description: contactContent.heroSubtitle,
    canonical: 'https://guidancemate.vercel.app/contact',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setAttempted(true);
    if (!event.currentTarget.checkValidity()) return;

    setSubmitted(true);
    setTimeout(() => {
      event.target.reset();
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <section className="pb-20 pt-6 md:pb-24 md:pt-10">
        <Container>
          <div className="glass-panel px-6 py-12 sm:px-10 sm:py-16">
            <SectionHeader eyebrow="Contact Support" title={contactContent.heroTitle} subtitle={contactContent.heroSubtitle} />
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              {contactContent.cards.map((card, index) => {
                const Icon = contactIconMap[card.icon] ?? MessageCircle;
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    whileHover={{ y: -3 }}
                    className="glass-panel p-7 text-center lg:text-left"
                  >
                    <Icon className="mx-auto mb-4 h-7 w-7 text-slate-800 lg:mx-0" />
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-slate-600">{card.text}</p>
                    {card.link && (
                      <a
                        href={card.link}
                        target={card.link.startsWith('http') ? '_blank' : undefined}
                        rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-4 inline-flex items-center gap-2 font-semibold text-slate-900 transition hover:opacity-70"
                      >
                        {card.title.includes('WhatsApp') ? <MessageCircle className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                        {card.linkText}
                      </a>
                    )}
                    {card.subText && <p className="mt-2 text-sm text-slate-500">{card.subText}</p>}
                  </motion.article>
                );
              })}
            </div>

            <div className="glass-panel p-7 sm:p-9 lg:col-span-7">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{contactContent.formTitle}</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-emerald-700"
                >
                  {contactContent.successMessage}
                </motion.div>
              )}

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <FloatingField name="name" type="text" required label="Your Name" className={attempted ? 'invalid:border-rose-400' : ''} />
                <FloatingField name="email" type="text" required label="+91 98765 43210" className={attempted ? 'invalid:border-rose-400' : ''} />
                <FloatingField
                  name="subject"
                  type="text"
                  required
                  label="Career doubt / App issue / Feedback"
                  className={attempted ? 'invalid:border-rose-400' : ''}
                />
                <FloatingField as="textarea" rows="5" name="message" required label="Message" />
                <p className="text-sm text-slate-500">Tell us how we can help...</p>

                <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  {contactContent.submit}
                </motion.button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="glass-panel p-8 text-center sm:p-10">
            <SectionHeader title={contactContent.socialsTitle} center />

            <div className="mt-8 flex flex-wrap justify-center gap-5">
              {contactContent.socials.map((item) => {
                const Icon = socialIconMap[item.name];
                return (
                  <motion.div key={item.name} whileHover={{ y: -3 }}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-lg font-medium text-slate-700 transition hover:border-slate-300"
                    >
                      <Icon className="h-4.5 w-4.5 text-slate-900" />
                      {item.name}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactPage;
