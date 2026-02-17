import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const location = useLocation();

  return (
    <SiteLayout pathname={location.pathname}>
        <Suspense
          fallback={
            <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
              <div className="glass-panel mx-auto mt-8 max-w-2xl p-8 text-center text-slate-600">Loading...</div>
            </div>
          }
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
    </SiteLayout>
  );
}

export default App;
