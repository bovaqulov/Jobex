import { LanguageProvider } from './components/language-context.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import { Header } from './components/header.tsx';
import { HeroSection } from './components/hero-section.tsx';
import { AboutSection } from './components/about-section.tsx';
import { ServicesSection } from './components/services-section.tsx';
import { DirectionsSection } from './components/directions-section.tsx';
import { NewsSection } from './components/news-section.tsx';
import { TestimonialsSection } from './components/testimonials-section.tsx';
import { ContactSection } from './components/contact-section.tsx';
import { Footer } from './components/footer.tsx';
import { ScrollToTop } from './components/scroll-to-top.tsx';
import { Toaster } from './components/ui/sonner.tsx';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <DirectionsSection />
            <NewsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}