import React from 'react';

export default function ValuationPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Microsoft Corporation - Value Investment Analysis</h1>
        <p className="text-lg mb-6">
          A comprehensive assessment of Microsoft's value from an investment perspective, examining valuation metrics, 
          intrinsic value estimates, profitability, growth potential, and dividend characteristics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Valuation Metrics</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Price Multiples</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Current Value</th>
                  <th className="py-3 px-4 text-left">Historical Context</th>
                  <th className="py-3 px-4 text-left">Industry Average</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Trailing P/E</td>
                  <td className="py-3 px-4">31.69</td>
                  <td className="py-3 px-4">Above 5-year average</td>
                  <td className="py-3 px-4">Higher than S&P 500 average</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Forward P/E</td>
                  <td className="py-3 px-4">26.18</td>
                  <td className="py-3 px-4">Indicates expected earnings growth</td>
                  <td className="py-3 px-4">Premium to tech sector</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">PEG Ratio (5yr expected)</td>
                  <td className="py-3 px-4">1.79</td>
                  <td className="py-3 px-4">Moderately high</td>
                  <td className="py-3 px-4">Suggests premium valuation</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Price/Sales</td>
                  <td className="py-3 px-4">11.22</td>
                  <td className="py-3 px-4">Historically high</td>
                  <td className="py-3 px-4">Above software industry average</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Price/Book</td>
                  <td className="py-3 px-4">9.66</td>
                  <td className="py-3 px-4">Elevated</td>
                  <td className="py-3 px-4">Reflects high ROE</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Enterprise Value/Revenue</td>
                  <td className="py-3 px-4">11.13</td>
                  <td className="py-3 px-4">Premium valuation</td>
                  <td className="py-3 px-4">Above peers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Enterprise Value/EBITDA</td>
                  <td className="py-3 px-4">20.39</td>
                  <td className="py-3 px-4">Premium multiple</td>
                  <td className="py-3 px-4">Reflects quality and growth</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3">Intrinsic Value Estimates</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Source</th>
                  <th className="py-3 px-4 text-left">Intrinsic Value</th>
                  <th className="py-3 px-4 text-left">Upside/Downside</th>
                  <th className="py-3 px-4 text-left">Methodology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Alpha Spread</td>
                  <td className="py-3 px-4">$321.78</td>
                  <td className="py-3 px-4 text-red-600">-18.0% (overvalued)</td>
                  <td className="py-3 px-4">Average of DCF and Relative Value</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">DCF Value</td>
                  <td className="py-3 px-4">$261.53</td>
                  <td className="py-3 px-4 text-red-600">-33.5% (overvalued)</td>
                  <td className="py-3 px-4">Discounted Cash Flow</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Relative Value</td>
                  <td className="py-3 px-4">$382.03</td>
                  <td className="py-3 px-4 text-red-600">-2.9% (fairly valued)</td>
                  <td className="py-3 px-4">Peer Comparison</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">ValueSense.io</td>
                  <td className="py-3 px-4">$385.80</td>
                  <td className="py-3 px-4 text-red-600">-0.7% (fairly valued)</td>
                  <td className="py-3 px-4">DCF Analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            The intrinsic value estimates suggest Microsoft is trading at a premium to its fundamental value, with estimates ranging from significantly overvalued (DCF-based) to approximately fairly valued (relative valuation methods).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Profitability Metrics</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Margin Analysis</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Trend</th>
                  <th className="py-3 px-4 text-left">Industry Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Profit Margin</td>
                  <td className="py-3 px-4">35.43%</td>
                  <td className="py-3 px-4">Improving</td>
                  <td className="py-3 px-4">Top-tier in tech sector</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Operating Margin</td>
                  <td className="py-3 px-4">45.46%</td>
                  <td className="py-3 px-4">Expanding</td>
                  <td className="py-3 px-4">Industry-leading</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Return on Assets</td>
                  <td className="py-3 px-4">14.65%</td>
                  <td className="py-3 px-4">Strong</td>
                  <td className="py-3 px-4">Above industry average</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Return on Equity</td>
                  <td className="py-3 px-4">34.29%</td>
                  <td className="py-3 px-4">Excellent</td>
                  <td className="py-3 px-4">Significantly above peers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft demonstrates exceptional profitability metrics, with margins and returns on capital that rank among the highest in the technology sector. The company's operating margin of 45.46% is particularly impressive and reflects the scalability of its business model and efficient operations.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Growth Metrics</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Revenue and Earnings Growth</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Historical Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Quarterly Revenue Growth (YoY)</td>
                  <td className="py-3 px-4">12.30%</td>
                  <td className="py-3 px-4">Consistent double-digit growth</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Quarterly Earnings Growth (YoY)</td>
                  <td className="py-3 px-4">10.20%</td>
                  <td className="py-3 px-4">Solid but below revenue growth</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5-Year Revenue CAGR</td>
                  <td className="py-3 px-4">~13%</td>
                  <td className="py-3 px-4">Strong sustained growth</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Forward Revenue Growth Estimate</td>
                  <td className="py-3 px-4">13.06% (2025), 14.01% (2026)</td>
                  <td className="py-3 px-4">Accelerating growth projected</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Forward EPS Growth Estimate</td>
                  <td className="py-3 px-4">11.71% (2025), 14.07% (2026)</td>
                  <td className="py-3 px-4">Solid earnings growth expected</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft continues to deliver strong revenue and earnings growth despite its massive size. Analyst estimates suggest this growth will continue and potentially accelerate in the coming years, driven by cloud computing and AI initiatives.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dividend Analysis</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Dividend Metrics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Forward Annual Dividend Rate</td>
                  <td className="py-3 px-4">$3.32</td>
                  <td className="py-3 px-4">Steadily increasing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Forward Annual Dividend Yield</td>
                  <td className="py-3 px-4">0.84%</td>
                  <td className="py-3 px-4">Low yield</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Trailing Annual Dividend Rate</td>
                  <td className="py-3 px-4">$3.16</td>
                  <td className="py-3 px-4">Growing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Trailing Annual Dividend Yield</td>
                  <td className="py-3 px-4">0.80%</td>
                  <td className="py-3 px-4">Below market average</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5-Year Average Dividend Yield</td>
                  <td className="py-3 px-4">0.85%</td>
                  <td className="py-3 px-4">Consistent but low</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Payout Ratio</td>
                  <td className="py-3 px-4">24.82%</td>
                  <td className="py-3 px-4">Conservative, sustainable</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Dividend Date</td>
                  <td className="py-3 px-4">3/13/2025</td>
                  <td className="py-3 px-4">Quarterly payments</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Ex-Dividend Date</td>
                  <td className="py-3 px-4">2/20/2025</td>
                  <td className="py-3 px-4">Recent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft offers a modest dividend yield that is below the market average. However, the company maintains a conservative payout ratio of 24.82%, which indicates substantial room for future dividend increases. The company has consistently raised its dividend over time, making it attractive for dividend growth investors despite the low current yield.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Balance Sheet Strength</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Financial Health Metrics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Total Cash</td>
                  <td className="py-3 px-4">$71.55B</td>
                  <td className="py-3 px-4">Substantial cash reserves</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Cash Per Share</td>
                  <td className="py-3 px-4">$9.62</td>
                  <td className="py-3 px-4">Strong liquidity</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Debt</td>
                  <td className="py-3 px-4">$102.91B</td>
                  <td className="py-3 px-4">Manageable given cash position</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Debt/Equity</td>
                  <td className="py-3 px-4">34.00%</td>
                  <td className="py-3 px-4">Conservative leverage</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Current Ratio</td>
                  <td className="py-3 px-4">1.35</td>
                  <td className="py-3 px-4">Adequate liquidity</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Book Value Per Share</td>
                  <td className="py-3 px-4">$40.71</td>
                  <td className="py-3 px-4">Solid asset base</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft maintains a strong balance sheet with substantial cash reserves of $71.55 billion, which provides significant financial flexibility for investments, acquisitions, and shareholder returns. The company's debt level is manageable relative to its equity and cash position, with a conservative debt-to-equity ratio of 34%.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Stock Price Performance</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Historical Returns</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Period</th>
                  <th className="py-3 px-4 text-left">Performance</th>
                  <th className="py-3 px-4 text-left">Benchmark Comparison</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">52-Week Range</td>
                  <td className="py-3 px-4">$381.00 - $468.35</td>
                  <td className="py-3 px-4">Currently near lower end</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">52-Week Performance</td>
                  <td className="py-3 px-4 text-red-600">-2.77%</td>
                  <td className="py-3 px-4">Underperforming S&P 500 (+12.74%)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5-Year Performance</td>
                  <td className="py-3 px-4 text-green-600">~150%</td>
                  <td className="py-3 px-4">Outperformed broader market</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">10-Year Performance</td>
                  <td className="py-3 px-4 text-green-600">~800%</td>
                  <td className="py-3 px-4">Exceptional long-term returns</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft's stock has delivered exceptional long-term returns, significantly outperforming the broader market over 5-year and 10-year periods. However, the stock has underperformed in the past year, down 2.77% compared to the S&P 500's 12.74% gain, suggesting a potential value opportunity if the long-term growth thesis remains intact.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ownership Structure</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Institutional and Insider Ownership</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">% Held by Insiders</td>
                  <td className="py-3 px-4">0.29%</td>
                  <td className="py-3 px-4">Low insider ownership</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">% Held by Institutions</td>
                  <td className="py-3 px-4">74.38%</td>
                  <td className="py-3 px-4">Strong institutional support</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Shares Outstanding</td>
                  <td className="py-3 px-4">7.43B</td>
                  <td className="py-3 px-4">Large cap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Float</td>
                  <td className="py-3 px-4">7.42B</td>
                  <td className="py-3 px-4">Highly liquid</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Short % of Float</td>
                  <td className="py-3 px-4">0.72%</td>
                  <td className="py-3 px-4">Low short interest</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Short Ratio</td>
                  <td className="py-3 px-4">2.27</td>
                  <td className="py-3 px-4">Low short-selling pressure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft has strong institutional ownership at 74.38%, indicating confidence from professional investors. Insider ownership is relatively low at 0.29%, which is common for mature large-cap companies. The low short interest suggests limited bearish sentiment among investors.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Value Investment Assessment</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-700">Strengths from a Value Perspective</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Strong Profitability:</strong> Industry-leading margins and returns on capital</li>
                <li><strong>Robust Balance Sheet:</strong> Substantial cash reserves and manageable debt</li>
                <li><strong>Consistent Growth:</strong> Continued double-digit revenue and earnings growth</li>
                <li><strong>Dividend Growth Potential:</strong> Low payout ratio with room for increases</li>
                <li><strong>Competitive Advantages:</strong> Strong market positions across multiple segments</li>
                <li><strong>AI and Cloud Tailwinds:</strong> Well-positioned for secular growth trends</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-red-700">Concerns from a Value Perspective</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Premium Valuation:</strong> Trading above most intrinsic value estimates</li>
                <li><strong>High Multiples:</strong> P/E, P/S, and P/B ratios above historical averages</li>
                <li><strong>Recent Underperformance:</strong> Stock has lagged the market in the past year</li>
                <li><strong>Low Dividend Yield:</strong> Below market average for income investors</li>
                <li><strong>Size Limitations:</strong> Scale may limit future growth opportunities</li>
                <li><strong>Competitive Pressures:</strong> Intense competition in key markets</li>
              </ol>
            </div>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">Value Investor Conclusion</h3>
          <p className="mb-4">
            From a traditional value investing perspective, Microsoft appears overvalued based on conventional metrics and intrinsic value estimates. The stock trades at premium multiples relative to the broader market and its own historical averages.
          </p>
          <p className="mb-4">
            However, Microsoft's exceptional profitability, strong balance sheet, consistent growth, and dominant competitive positions provide qualitative factors that may justify a premium valuation. The company's positioning in secular growth trends like cloud computing and artificial intelligence offers potential for continued strong performance.
          </p>
          <p className="mb-4">
            For value investors, Microsoft may be more appropriately viewed as a "quality at a reasonable price" (QARP) investment rather than a traditional value stock. The current valuation suggests limited margin of safety, but the company's financial strength and growth prospects may provide downside protection.
          </p>
          <p>
            The most prudent approach for value-oriented investors might be to:
          </p>
          <ol className="list-decimal pl-6 space-y-1 mt-2">
            <li>Consider partial positions at current levels</li>
            <li>Look for potential entry points during market corrections</li>
            <li>Focus on the long-term compounding potential rather than short-term valuation concerns</li>
            <li>Monitor the execution of growth initiatives in cloud and AI segments</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
