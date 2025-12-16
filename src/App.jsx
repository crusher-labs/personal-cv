import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Laurent Caesar - Business Resume</title>
        <meta name="description" content="Professional resume of Laurent Caesar - Market Research Analyst and IT Business Operation Data Analyst with expertise in data management and business analysis." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-sans: 'Inter', sans-serif;
          }
          body {
            font-family: var(--font-sans);
          }
        `}</style>
      </Helmet>
      <div className="min-h-screen bg-secondary/30">
        <Header />
        <main id="resume-content" className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="p-8 sm:p-12 bg-card rounded-lg border border-border/60 shadow-sm">
            <Hero />
            <div className="space-y-8 mt-8"> {/* Reduced spacing between sections */}
              <Experience />
              <Education />
              <Skills />
              <Contact />
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;