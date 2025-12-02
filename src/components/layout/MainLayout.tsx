import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

// Server component layout: keeps Navbar and Footer as client components when needed.
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <section className="overflow-hidden">{children}</section>
      <Footer />
    </main>
  );
}
