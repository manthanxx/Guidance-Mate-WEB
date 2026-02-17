import { Github, Instagram, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  whatsapp: { href: 'https://wa.me/917574982648', Icon: MessageCircle },
  instagram: { href: '#', Icon: Instagram },
  telegram: { href: '#', Icon: Send },
  github: { href: '#', Icon: Github },
  linkedin: { href: '#', Icon: Linkedin },
  email: { href: 'mailto:pathpilotai5@gmail.com', Icon: Mail },
};

function Footer({ content }) {
  return (
    <footer className="relative z-10 pb-12 pt-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel grid gap-10 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-xl font-semibold tracking-tight text-slate-900">GuidanceMate</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: content.text }} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Navigation</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <Link to="/" className="transition hover:text-slate-900">Home</Link>
              <Link to="/features" className="transition hover:text-slate-900">Features</Link>
              <Link to="/download" className="transition hover:text-slate-900">Download</Link>
              <Link to="/team" className="transition hover:text-slate-900">Team</Link>
              <Link to="/contact" className="transition hover:text-slate-900">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Connect</p>
            {content.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {content.links.map((link) => {
                  const item = iconMap[link];
                  if (!item) return null;
                  const { Icon } = item;
                  return (
                    <a
                      key={link}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
