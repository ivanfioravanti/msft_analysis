import React from 'react';

export default function SentimentPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Microsoft Corporation - Market Sentiment Analysis</h1>
        <p className="text-lg mb-6">
          Market sentiment toward Microsoft is predominantly positive, though with some areas of concern.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Analyst Ratings and Recommendations</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Consensus Rating</h3>
              <p className="text-2xl font-bold text-blue-700">Strong Buy</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Average Price Target</h3>
              <p className="text-2xl font-bold text-blue-700">$507.54</p>
              <p className="text-green-600">(29.04% upside)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Price Target Range</h3>
              <p className="text-md">
                <span className="font-semibold">Low:</span> $425.00
                <span className="mx-2">|</span>
                <span className="font-semibold">High:</span> $600.00
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-3">Top Analyst Ratings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Analyst Firm</th>
                  <th className="py-3 px-4 text-left">Rating</th>
                  <th className="py-3 px-4 text-left">Price Target</th>
                  <th className="py-3 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Bernstein</td>
                  <td className="py-3 px-4">Outperform</td>
                  <td className="py-3 px-4">$500</td>
                  <td className="py-3 px-4">Oct 26, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Evercore ISI Group</td>
                  <td className="py-3 px-4">Outperform</td>
                  <td className="py-3 px-4">$485</td>
                  <td className="py-3 px-4">Apr 27, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Raymond James</td>
                  <td className="py-3 px-4">Outperform</td>
                  <td className="py-3 px-4">$480</td>
                  <td className="py-3 px-4">Apr 26, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Piper Sandler</td>
                  <td className="py-3 px-4">Overweight</td>
                  <td className="py-3 px-4">$520</td>
                  <td className="py-3 px-4">Jan 28, 2025</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">DA Davidson</td>
                  <td className="py-3 px-4">Neutral</td>
                  <td className="py-3 px-4">$425</td>
                  <td className="py-3 px-4">Jan 30, 2025</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">RBC Capital</td>
                  <td className="py-3 px-4">Outperform</td>
                  <td className="py-3 px-4">$500</td>
                  <td className="py-3 px-4">Jan 30, 2025</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Mizuho</td>
                  <td className="py-3 px-4">Outperform</td>
                  <td className="py-3 px-4">$500</td>
                  <td className="py-3 px-4">Jan 31, 2025</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Wedbush</td>
                  <td className="py-3 px-4">Outperform</td>
                  <td className="py-3 px-4">$550</td>
                  <td className="py-3 px-4">Jul 31, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Earnings Estimates and Growth Projections</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">EPS Estimates</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Period</th>
                  <th className="py-3 px-4 text-left">Avg. Estimate</th>
                  <th className="py-3 px-4 text-left">Low Estimate</th>
                  <th className="py-3 px-4 text-left">High Estimate</th>
                  <th className="py-3 px-4 text-left">Year Ago EPS</th>
                  <th className="py-3 px-4 text-left">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Current Qtr (Mar 2025)</td>
                  <td className="py-3 px-4">$3.21</td>
                  <td className="py-3 px-4">$3.16</td>
                  <td className="py-3 px-4">$3.31</td>
                  <td className="py-3 px-4">$2.94</td>
                  <td className="py-3 px-4 text-green-600">9.73%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Next Qtr (Jun 2025)</td>
                  <td className="py-3 px-4">$3.33</td>
                  <td className="py-3 px-4">$3.21</td>
                  <td className="py-3 px-4">$3.57</td>
                  <td className="py-3 px-4">$2.95</td>
                  <td className="py-3 px-4 text-green-600">13.39%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Current Year (2025)</td>
                  <td className="py-3 px-4">$13.15</td>
                  <td className="py-3 px-4">$12.93</td>
                  <td className="py-3 px-4">$13.75</td>
                  <td className="py-3 px-4">$11.80</td>
                  <td className="py-3 px-4 text-green-600">11.71%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Next Year (2026)</td>
                  <td className="py-3 px-4">$15.06</td>
                  <td className="py-3 px-4">$14.30</td>
                  <td className="py-3 px-4">$16.69</td>
                  <td className="py-3 px-4">$13.15</td>
                  <td className="py-3 px-4 text-green-600">14.07%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">Revenue Estimates</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Period</th>
                  <th className="py-3 px-4 text-left">Avg. Estimate</th>
                  <th className="py-3 px-4 text-left">Low Estimate</th>
                  <th className="py-3 px-4 text-left">High Estimate</th>
                  <th className="py-3 px-4 text-left">Year Ago Sales</th>
                  <th className="py-3 px-4 text-left">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Current Qtr (Mar 2025)</td>
                  <td className="py-3 px-4">$68.53B</td>
                  <td className="py-3 px-4">$67.14B</td>
                  <td className="py-3 px-4">$69.90B</td>
                  <td className="py-3 px-4">$61.86B</td>
                  <td className="py-3 px-4 text-green-600">10.79%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Next Qtr (Jun 2025)</td>
                  <td className="py-3 px-4">$72.76B</td>
                  <td className="py-3 px-4">$71.47B</td>
                  <td className="py-3 px-4">$74.63B</td>
                  <td className="py-3 px-4">$64.73B</td>
                  <td className="py-3 px-4 text-green-600">12.41%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Current Year (2025)</td>
                  <td className="py-3 px-4">$277.13B</td>
                  <td className="py-3 px-4">$274.86B</td>
                  <td className="py-3 px-4">$283.15B</td>
                  <td className="py-3 px-4">$245.12B</td>
                  <td className="py-3 px-4 text-green-600">13.06%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Next Year (2026)</td>
                  <td className="py-3 px-4">$315.96B</td>
                  <td className="py-3 px-4">$304.21B</td>
                  <td className="py-3 px-4">$341.76B</td>
                  <td className="py-3 px-4">$277.13B</td>
                  <td className="py-3 px-4 text-green-600">14.01%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Earnings Performance</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft has consistently beaten earnings estimates in the last four quarters:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Quarter</th>
                  <th className="py-3 px-4 text-left">EPS Estimate</th>
                  <th className="py-3 px-4 text-left">Actual EPS</th>
                  <th className="py-3 px-4 text-left">Beat By</th>
                  <th className="py-3 px-4 text-left">Surprise %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Q4 2024 (Dec 31)</td>
                  <td className="py-3 px-4">$3.20</td>
                  <td className="py-3 px-4">$3.33</td>
                  <td className="py-3 px-4">$0.13</td>
                  <td className="py-3 px-4 text-green-600">4.06%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Q3 2024 (Sep 30)</td>
                  <td className="py-3 px-4">$3.04</td>
                  <td className="py-3 px-4">$3.23</td>
                  <td className="py-3 px-4">$0.19</td>
                  <td className="py-3 px-4 text-green-600">6.25%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Q2 2024 (Jun 30)</td>
                  <td className="py-3 px-4">$2.93</td>
                  <td className="py-3 px-4">$2.95</td>
                  <td className="py-3 px-4">$0.02</td>
                  <td className="py-3 px-4 text-green-600">0.53%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Q1 2024 (Mar 31)</td>
                  <td className="py-3 px-4">$2.83</td>
                  <td className="py-3 px-4">$2.94</td>
                  <td className="py-3 px-4">$0.11</td>
                  <td className="py-3 px-4 text-green-600">3.99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Market Sentiment Indicators</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center w-64">
              <h3 className="text-lg font-medium mb-2">TipRanks Smart Score</h3>
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white text-4xl font-bold">
                  9
                </div>
              </div>
              <p className="mt-2 text-green-700 font-medium">"Outperform"</p>
              <p className="text-sm text-gray-600 mt-1">
                This proprietary score suggests Microsoft is likely to outperform the market
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Bullish Factors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>AI Revenue Growth:</strong> Microsoft is seen as a leading software AI winner, with significant boost from the OpenAI deal and AI annual revenue run rate growing 175% year over year.</li>
                <li><strong>Revenue Growth Outlook:</strong> Management reiterated belief that the rapidly emerging genAI cycle will allow Microsoft to sustain double-digit revenue and profitability growth for years to come.</li>
                <li><strong>Strong Cloud Performance:</strong> The earnings call highlights Microsoft's strong performance in cloud and AI services, with record commercial bookings and significant growth in AI and cloud revenue.</li>
                <li><strong>Consistent Earnings Beats:</strong> Microsoft has exceeded analyst expectations in all four quarters of 2024.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Bearish Factors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Azure Growth Concerns:</strong> The ongoing concerns regarding the cadence of Azure growth remain significant for investors, with the stock down 5% after hours following the latest earnings report.</li>
                <li><strong>Gaming and Server Revenue Challenges:</strong> There were challenges in Azure non-AI services and declines in gaming and on-premises server revenues.</li>
                <li><strong>Valuation Concerns:</strong> With a P/E ratio of 32.0, some analysts consider the stock to be fully valued at current levels.</li>
                <li><strong>Range-Bound Trading:</strong> Some analysts describe Microsoft stock as "range bound" in the near term, suggesting limited upside potential in the short run.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent News Impact</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Key Recent News</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Microsoft Testing OpenAI Alternatives:</strong> Microsoft is testing alternatives to OpenAI for its Copilot products, which could impact its AI strategy.</li>
            <li><strong>CoreWeave Contract Rumors:</strong> CoreWeave denied rumors about contract cancellations with Microsoft, which had temporarily impacted sentiment.</li>
            <li><strong>AI Model Development:</strong> Microsoft is developing alternative AI models to reduce dependency on OpenAI, showing strategic diversification.</li>
            <li><strong>February Jobs Report:</strong> The broader market sentiment was impacted by the February jobs report pointing to no interest rate cuts in the immediate future.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Revenue Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Intelligent Cloud</h4>
              <p className="text-2xl font-bold text-blue-700">42.98%</p>
              <p className="text-sm text-gray-600">of revenue</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Productivity and Business Processes</h4>
              <p className="text-2xl font-bold text-green-700">31.71%</p>
              <p className="text-sm text-gray-600">of revenue</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">More Personal Computing</h4>
              <p className="text-2xl font-bold text-purple-700">25.31%</p>
              <p className="text-sm text-gray-600">of revenue</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Overall Market Sentiment Assessment</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            The overall market sentiment for Microsoft is predominantly positive, with a strong consensus among analysts recommending the stock as a buy. The average price target of $507.54 represents a significant upside potential of 29.04% from the current price level. Analysts are particularly bullish on Microsoft's AI initiatives and cloud business growth prospects, though there are some concerns about Azure growth rates and valuation.
          </p>
          <p className="mb-4">
            Microsoft has consistently beaten earnings expectations, and forward estimates project continued strong growth in both revenue and earnings. The company's strategic positioning in AI, cloud computing, and productivity software continues to be viewed favorably by the market.
          </p>
          <p>
            The sentiment is tempered by some near-term concerns about growth rates in certain segments and valuation metrics, but the long-term outlook remains positive based on Microsoft's strong market position, diversified revenue streams, and leadership in the AI transformation.
          </p>
        </div>
      </section>
    </div>
  );
}
