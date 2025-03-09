import React from 'react';

export default function TechnicalPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Microsoft Corporation - Technical Analysis</h1>
        <p className="text-lg mb-6">
          Technical indicators for Microsoft are overwhelmingly negative across multiple timeframes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Price and Range</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Current Price</h3>
              <p className="text-2xl font-bold">$393.31</p>
              <p className="text-sm text-gray-600">as of March 7, 2025</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">52-Week Range</h3>
              <p className="text-md">
                <span className="font-semibold">Low:</span> $381.00
                <span className="mx-2">|</span>
                <span className="font-semibold">High:</span> $468.35
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Recent Trading Range</h3>
              <p className="text-md">$381.00 - $419.31</p>
              <p className="text-sm text-gray-600">last month</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Current Position</h3>
              <p className="text-md text-red-600">Trading near the lows of the recent range</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Trend Analysis</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Short-Term Trend</h3>
              <p className="text-xl font-bold text-red-600">Negative</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Medium-Term Trend</h3>
              <p className="text-xl font-bold text-red-600">Negative</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Long-Term Trend</h3>
              <p className="text-xl font-bold text-red-600">Negative</p>
            </div>
          </div>
          <p className="mb-4">
            An approximate horizontal trend channel in the medium term has been broken down, indicating continued weak development.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Price Performance</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Time Period</th>
                  <th className="py-3 px-4 text-left">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">1-Day Performance</td>
                  <td className="py-3 px-4 text-red-600">-0.90% (-$3.58)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5-Day Performance</td>
                  <td className="py-3 px-4 text-red-600">-0.93%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">22-Day Performance</td>
                  <td className="py-3 px-4 text-red-600">-4.62%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">66-Day Performance</td>
                  <td className="py-3 px-4 text-red-600">-7.02%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Yearly Performance Ranking</td>
                  <td className="py-3 px-4">Underperforming 68% of all stocks in the market</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Indicators</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Moving Averages</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Indicator</th>
                  <th className="py-3 px-4 text-left">Signal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">20-Day Moving Average</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">50-Day Moving Average</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">20-50 Day MA Crossover</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">20-100 Day MA Crossover</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">20-200 Day MA Crossover</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">50-100 Day MA Crossover</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">50-150 Day MA Crossover</td>
                  <td className="py-3 px-4 text-red-600">SELL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3">Overall Technical Ratings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Barchart Opinion</h3>
              <p className="text-xl font-bold text-red-600">100% SELL</p>
              <p className="text-sm text-gray-600">based on 13 technical indicators</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">ChartMill Technical Rating</h3>
              <p className="text-xl font-bold text-red-600">0 out of 10</p>
              <p className="text-sm text-gray-600">scores bad on all fronts</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Trend Seeker</h3>
              <p className="text-xl font-bold text-red-600">SELL signal</p>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-3">Volume Analysis</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Average Volume</td>
                  <td className="py-3 px-4">21,903,900 traded shares per day</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Volume Assessment</td>
                  <td className="py-3 px-4 text-green-600">Good liquidity, which is a positive factor</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Volume Balance (5 days)</td>
                  <td className="py-3 px-4 text-red-600">-34.27</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Volume Balance (22 days)</td>
                  <td className="py-3 px-4 text-red-600">-36.30</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Volume Balance (66 days)</td>
                  <td className="py-3 px-4 text-red-600">-25.92</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Support and Resistance Levels</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Resistance Levels</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left">Level</th>
                      <th className="py-3 px-4 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">1st Resistance Point</td>
                      <td className="py-3 px-4">$396.89</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2nd Resistance Point</td>
                      <td className="py-3 px-4">$400.48</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">3rd Resistance Point</td>
                      <td className="py-3 px-4">$406.15</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Key Resistance Level</td>
                      <td className="py-3 px-4">$404.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Additional Resistance</td>
                      <td className="py-3 px-4">$422.00 (+7.3%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Major Resistance</td>
                      <td className="py-3 px-4">$436.00 (+10.9%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Support Levels</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left">Level</th>
                      <th className="py-3 px-4 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">1st Support Level</td>
                      <td className="py-3 px-4">$387.63</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2nd Support Level</td>
                      <td className="py-3 px-4">$381.96</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">3rd Support Level</td>
                      <td className="py-3 px-4">$378.37</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Key Support Level</td>
                      <td className="py-3 px-4">$386.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Chart Patterns and Formations</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Pattern Analysis</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The stock has broken down from an approximate horizontal trend channel</li>
            <li>Currently trading between support at $386 and resistance at $404</li>
            <li>A definitive break through one of these levels would predict the new direction</li>
            <li>The stock now meets resistance on possible reactions up towards the trend lines</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Volatility Metrics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Time Period</th>
                  <th className="py-3 px-4 text-left">Volatility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">1-Day Volatility</td>
                  <td className="py-3 px-4">0.99%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">5-Day Volatility</td>
                  <td className="py-3 px-4">3.21%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">22-Day Volatility</td>
                  <td className="py-3 px-4">8.52%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">66-Day Volatility</td>
                  <td className="py-3 px-4">15.86%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Industry Comparison</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Industry Performance:</strong> Average performer in the Software industry</li>
            <li><strong>Industry Ranking:</strong> Outperforms 56% of 283 stocks in the same industry</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Analysis Summary</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft's technical indicators are overwhelmingly negative across multiple timeframes. The stock has broken down from its horizontal trend channel and is currently trading near the lower end of its recent range. All major moving averages are giving SELL signals, and technical rating systems from multiple sources indicate negative momentum.
          </p>
          <p className="mb-4">
            The stock is currently in a critical position between support at $386 and resistance at $404. A definitive break below $386 could trigger further selling pressure, while a break above $404 would be needed to reverse the negative trend. The high trading volume provides good liquidity, which is one of the few positive technical factors.
          </p>
          <p className="mb-4">
            With a technical rating of 0/10 from ChartMill and a 100% SELL opinion from Barchart, the technical outlook for Microsoft is bearish in the short to medium term. Investors should watch the key support level at $386 closely, as a break below this level could lead to accelerated downside movement.
          </p>
          <p>
            The negative technical picture contrasts with Microsoft's strong fundamental position, creating a potential disconnect between technical signals and the company's underlying business strength. This divergence may present opportunities for investors with different time horizons and investment strategies.
          </p>
        </div>
      </section>
    </div>
  );
}
