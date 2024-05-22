import { Suspense } from 'react';
import { Loader, Transactions, Welcome, Footer, Navbar,Services } from './components'
import ErrorBoundary from "./components/ErrorBoundry.jsx";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>

    <ErrorBoundary>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </ErrorBoundary>

  </Suspense>
);


export default App
