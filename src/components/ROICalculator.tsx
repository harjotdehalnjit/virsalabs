import { useState } from "react";

const ROICalculator = () => {
  const investment = 500;
  const [averageClientValue, setAverageClientValue] = useState(200);
  const [missedCallsPerMonth, setMissedCallsPerMonth] = useState(10);
  const [newLeadsPerMonth, setNewLeadsPerMonth] = useState(0); // New Leads Field
  const [averageCloseRate, setAverageCloseRate] = useState(50);
  const [monthlyLeft, setMonthlyLeft] = useState(0);
  const [roi, setRoi] = useState(0);

  const calculateROI = () => {
    const totalLeads = missedCallsPerMonth + newLeadsPerMonth; // Sum of Missed Calls + New Leads
    const monthlyRevenue = averageClientValue * totalLeads * (averageCloseRate / 100);
    const calculatedROI = ((monthlyRevenue - investment) / investment) * 100;
    setMonthlyLeft(monthlyRevenue);
    setRoi(calculatedROI);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-16">
        {/* Left Section: ROI Calculator */}
        <div className="backdrop-blur-sm bg-card/50 border-primary/20 h-full transition-all duration-300 hover:scale-105 hover:border-primary/40 p-6 rounded-2xl">
        

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-white mb-2">
                Average Client Value
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600">$</span>
                <input
                  type="number"
                  className="w-full p-3 pl-7 bg-white/80 text-black border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  value={averageClientValue}
                  onChange={(e) => setAverageClientValue(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-white mb-2">
                Missed Calls per Month
              </label>
              <input
                type="number"
                className="w-full p-3 bg-white/80 border text-black border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={missedCallsPerMonth}
                onChange={(e) => setMissedCallsPerMonth(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-white mb-2">
                Average Close Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full p-3 pr-7 bg-white/80 border  text-black border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  value={averageCloseRate}
                  onChange={(e) => setAverageCloseRate(Number(e.target.value))}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600">%</span>
              </div>
            </div>

{/* New Leads per Month */}
<div>
              <label className="block text-lg font-medium text-white mb-2">
                New Leads per Month
              </label>
              <input
                type="number"
                className="w-full p-3 bg-white/80 border text-black border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={newLeadsPerMonth}
                onChange={(e) => setNewLeadsPerMonth(Number(e.target.value))}
              />
            </div>
            <button 
              onClick={calculateROI}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition-all mt-4"
            >
              Calculate ROI
            </button>

            {(monthlyLeft > 0 || roi > 0) && (
              <div className="mt-4 bg-white/80 p-4 rounded-lg space-y-2">
                <h4 className="text-lg font-semibold text-slate-900">Results</h4>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Revenue Potential:</span>
                    <span className="font-bold text-emerald-600">${monthlyLeft.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly Investment:</span>
                    <span className="font-bold text-slate-900">${investment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-600">Return on Investment:</span>
                    <span className="font-bold text-indigo-600">{roi.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Financial Benefits */}
      {/* Right Section: Financial Benefits */}
<div className="bg-slate-100/90 backdrop-blur-sm p-6 rounded-2xl h-full transition-all duration-300 hover:scale-105 hover:border-primary/40">
  <h2 className="text-2xl font-semibold mb-6 text-slate-900">What does this show you</h2>
  
  <div className="space-y-6">
    <div className="p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
     
      <div className="grid gap-4 grid-cols-1  text-md text-black">
       
{/*        
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Enter the average lifetime value of a customer.</span>
        </div>
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Enter an estimate of how many calls you miss per week.</span>
        </div>
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Enter the rate at which you close new sales.</span>
        </div>
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Hit Calculate and see how much your missing out</span>
        </div> */}

<div className="flex items-start space-x-3">
     
          <span>It shows how much revenue you are missing out on just by missing calls. <br /> See the actual numbers  </span>
        </div> 

      </div>





    </div>

    <div className="p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold mb-3 text-slate-900">Stop Leaving Money on the Table</h3>
      <ul className="space-y-4 text-md text-slate-700">
        {[
          "Our AI Tools work 24/7 and help you convert leads no matter the time of day",
          "If you can save just a few missed calls a month, would this service pay for itself?",
         
        ].map((benefit) => (
          <li key={benefit} className="flex items-center gap-3">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Optional CTA: Clear Call to Action */}
    <div className="mt-6 text-center">
      <button  className="bg-indigo-600 text-white p-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition-all">
      <a href="/book-consultation">Book A Call</a>
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ROICalculator;