import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import PricingSection from './components/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';
import ResultCharts from './components/ResultCharts/ResultCharts';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const getPriceData = async () => {
  const res = await fetch('/pricing.json')
  return res.json()
}

const marksPromise = axios.get('marksData.json')
const App = () => {
  const getPromise = getPriceData()
  return (

    <div>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex mx-auto mt-20"></span>}>
        <PricingSection
          getPromise={getPromise}></PricingSection>
      </Suspense>
      <ResultCharts></ResultCharts>
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex mx-auto mt-20"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default App;