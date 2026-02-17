import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { footerContent } from '../content/siteContent';

function SiteLayout({ pathname, children }) {
  return (
    <div className="relative min-h-screen bg-shell text-slate-900">
      <div className="site-noise" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 pt-24 md:pt-28">{children}</main>
      <Footer content={footerContent[pathname] ?? footerContent.default} />
    </div>
  );
}

export default SiteLayout;
