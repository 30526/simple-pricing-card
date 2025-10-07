import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import PricingSection from './components/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';

const getPriceData = async () => {
  const res = await fetch('/pricing.json')
  return res.json()
}
const App = () => {
  const getPromise = getPriceData()
  return (

    <div>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex mx-auto mt-20"></span>}>
        <PricingSection
          getPromise={getPromise}></PricingSection>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default App;