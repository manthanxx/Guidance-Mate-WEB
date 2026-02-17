import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

function NotFoundPage() {
  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-12">
      <Container>
      <div className="glass-panel mx-auto max-w-2xl p-10 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-600">404</p>
        <h1 className="display-2 mt-3">Page not found</h1>
        <p className="mx-auto mt-4 max-w-lg text-slate-600">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
      </Container>
    </section>
  );
}

export default NotFoundPage;
