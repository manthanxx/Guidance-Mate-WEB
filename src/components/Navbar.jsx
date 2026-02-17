import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Compass, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../content/siteContent';

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    window.addEventListener('scroll', close, { once: true });
    return () => {
      window.removeEventListener('resize', closeOnResize);
      window.removeEventListener('scroll', close);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel flex h-[68px] items-center justify-between px-4 sm:px-6">
          <NavLink to="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft-deep">
              <Compass className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">GuidanceMate</span>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ label, path }) => (
              <NavLink key={path} to={path} className="px-1 py-1">
                {({ isActive }) => (
                  <span
                    className={`inline-flex rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-soft-deep'
                        : 'text-slate-700 hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    {label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <NavLink to="/download" className="btn-primary px-5 py-2.5 text-sm">
              Download Now - Free Forever
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mx-auto mt-2 w-full max-w-7xl px-4 sm:px-6 lg:hidden lg:px-8"
          >
            <div className="glass-panel p-3">
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `mb-1 block rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <NavLink to="/download" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Download Now - Free Forever
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
