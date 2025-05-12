import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import LoadingSpinner from './components/utils/LoadingSpinner';
import AdmissionPopup from './components/common/AdmissionPopup';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const CampusPage = lazy(() => import('./pages/CampusPage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const NewsEventsPage = lazy(() => import('./pages/NewsEventsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BranchPage = lazy(() => import('./pages/BranchPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/campus" element={<CampusPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/branches/bakhri" element={<BranchPage branch="bakhri" />} />
              <Route path="/branches/begusarai" element={<BranchPage branch="begusarai" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <AdmissionPopup />
    </Router>
  );
}

export default App;