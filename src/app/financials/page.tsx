import React from 'react';

export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Microsoft Corporation - Financial Analysis</h1>
        <p className="text-lg mb-6">
          Microsoft demonstrates exceptional financial performance across revenue growth, profitability, and balance sheet strength.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Revenue and Growth Trends</h2>
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Period</th>
                <th className="py-3 px-4 text-left">Total Revenue (billions)</th>
                <th className="py-3 px-4 text-left">YoY Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4">TTM</td>
                <td className="py-3 px-4">$261.8</td>
                <td className="py-3 px-4">6.8%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2024</td>
                <td className="py-3 px-4">$245.1</td>
                <td className="py-3 px-4">15.7%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2023</td>
                <td className="py-3 px-4">$211.9</td>
                <td className="py-3 px-4">6.9%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2022</td>
                <td className="py-3 px-4">$198.3</td>
                <td className="py-3 px-4">18.0%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2021</td>
                <td className="py-3 px-4">$168.1</td>
                <td className="py-3 px-4">-</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            Microsoft has demonstrated consistent revenue growth over the past four fiscal years, with a particularly strong 15.7% increase in FY 2024. The trailing twelve months (TTM) revenue of $261.8 billion indicates continued growth momentum.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Profit Margins</h2>
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Period</th>
                <th className="py-3 px-4 text-left">Gross Margin</th>
                <th className="py-3 px-4 text-left">Operating Margin</th>
                <th className="py-3 px-4 text-left">Net Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4">TTM</td>
                <td className="py-3 px-4">69.4%</td>
                <td className="py-3 px-4">45.0%</td>
                <td className="py-3 px-4">35.4%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2024</td>
                <td className="py-3 px-4">69.8%</td>
                <td className="py-3 px-4">44.6%</td>
                <td className="py-3 px-4">36.0%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2023</td>
                <td className="py-3 px-4">68.9%</td>
                <td className="py-3 px-4">41.8%</td>
                <td className="py-3 px-4">34.1%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2022</td>
                <td className="py-3 px-4">68.4%</td>
                <td className="py-3 px-4">42.1%</td>
                <td className="py-3 px-4">36.7%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2021</td>
                <td className="py-3 px-4">68.9%</td>
                <td className="py-3 px-4">41.6%</td>
                <td className="py-3 px-4">36.5%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            Microsoft has maintained robust gross margins around 69%, while operating margins have improved from 41.6% in FY 2021 to 44.6% in FY 2024. These industry-leading margins reflect the company's efficient operations and scalable business model.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Earnings Per Share</h2>
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Period</th>
                <th className="py-3 px-4 text-left">Basic EPS</th>
                <th className="py-3 px-4 text-left">Diluted EPS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4">TTM</td>
                <td className="py-3 px-4">$12.48</td>
                <td className="py-3 px-4">$12.41</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2024</td>
                <td className="py-3 px-4">$11.86</td>
                <td className="py-3 px-4">$11.80</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2023</td>
                <td className="py-3 px-4">$9.72</td>
                <td className="py-3 px-4">$9.68</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2022</td>
                <td className="py-3 px-4">$9.70</td>
                <td className="py-3 px-4">$9.65</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6/30/2021</td>
                <td className="py-3 px-4">$8.12</td>
                <td className="py-3 px-4">$8.05</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            Diluted EPS has increased from $8.05 in FY 2021 to $11.80 in FY 2024, a 46.6% increase over three years. The TTM diluted EPS of $12.41 suggests continued earnings growth, outpacing revenue growth and indicating improved operational efficiency and effective share repurchase programs.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Balance Sheet Strength</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Asset Growth</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Period</th>
                  <th className="py-3 px-4 text-left">Total Assets (billions)</th>
                  <th className="py-3 px-4 text-left">YoY Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">6/30/2024</td>
                  <td className="py-3 px-4">$512.2</td>
                  <td className="py-3 px-4">24.3%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2023</td>
                  <td className="py-3 px-4">$412.0</td>
                  <td className="py-3 px-4">12.9%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2022</td>
                  <td className="py-3 px-4">$364.8</td>
                  <td className="py-3 px-4">9.3%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2021</td>
                  <td className="py-3 px-4">$333.8</td>
                  <td className="py-3 px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">Key Balance Sheet Metrics</h3>
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
                  <td className="py-3 px-4">Total Debt</td>
                  <td className="py-3 px-4">$67.13B</td>
                  <td className="py-3 px-4">Manageable debt level</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Net Debt</td>
                  <td className="py-3 px-4">$33.32B</td>
                  <td className="py-3 px-4">Strong net cash position</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Total Equity</td>
                  <td className="py-3 px-4">$268.48B</td>
                  <td className="py-3 px-4">52.4% of assets</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Current Ratio</td>
                  <td className="py-3 px-4">1.35</td>
                  <td className="py-3 px-4">Adequate liquidity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft maintains a strong balance sheet with substantial cash reserves and a conservative debt-to-equity ratio. The company's equity position has steadily improved from 42.5% of assets in FY 2021 to 52.4% in FY 2024.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cash Flow Analysis</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Period</th>
                  <th className="py-3 px-4 text-left">Operating CF (billions)</th>
                  <th className="py-3 px-4 text-left">Free Cash Flow (billions)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">TTM</td>
                  <td className="py-3 px-4">$125.6</td>
                  <td className="py-3 px-4">$70.0</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2024</td>
                  <td className="py-3 px-4">$118.5</td>
                  <td className="py-3 px-4">$74.1</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2023</td>
                  <td className="py-3 px-4">$87.6</td>
                  <td className="py-3 px-4">$59.5</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2022</td>
                  <td className="py-3 px-4">$89.0</td>
                  <td className="py-3 px-4">$65.1</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2021</td>
                  <td className="py-3 px-4">$76.7</td>
                  <td className="py-3 px-4">$56.1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">Capital Allocation</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Period</th>
                  <th className="py-3 px-4 text-left">Capital Expenditure (billions)</th>
                  <th className="py-3 px-4 text-left">Stock Repurchases (billions)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">TTM</td>
                  <td className="py-3 px-4">-$55.6</td>
                  <td className="py-3 px-4">-$17.5</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2024</td>
                  <td className="py-3 px-4">-$44.5</td>
                  <td className="py-3 px-4">-$17.3</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2023</td>
                  <td className="py-3 px-4">-$28.1</td>
                  <td className="py-3 px-4">-$22.2</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2022</td>
                  <td className="py-3 px-4">-$23.9</td>
                  <td className="py-3 px-4">-$32.7</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6/30/2021</td>
                  <td className="py-3 px-4">-$20.6</td>
                  <td className="py-3 px-4">-$27.4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Microsoft generates robust operating cash flow and free cash flow, with significant growth in FY 2024. The company's free cash flow margin of approximately 30% of revenue highlights its exceptional cash generation efficiency. Capital expenditures have more than doubled from $20.6 billion in FY 2021 to $44.5 billion in FY 2024, reflecting significant investments in infrastructure, particularly for cloud services and AI capabilities.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Financial Strength Summary</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft demonstrates exceptional financial strength characterized by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consistent Revenue Growth:</strong> Steady revenue growth across multiple years with 15.7% growth in FY 2024.</li>
            <li><strong>Expanding Profit Margins:</strong> Improving operating margins from 41.6% to 44.6% over four years.</li>
            <li><strong>Strong Balance Sheet:</strong> Increasing equity position to 52.4% of total assets and manageable debt levels.</li>
            <li><strong>Robust Cash Generation:</strong> Operating cash flow of $118.5 billion in FY 2024 with free cash flow of $74.1 billion.</li>
            <li><strong>Prudent Capital Allocation:</strong> Balanced approach to investments, debt management, and shareholder returns.</li>
            <li><strong>Earnings Growth:</strong> 46.6% increase in diluted EPS over three years, reaching $11.80 in FY 2024.</li>
          </ul>
          <p className="mt-4">
            These financial metrics collectively indicate Microsoft's continued market leadership, operational excellence, and ability to generate significant shareholder value through its diverse business segments including cloud services, software, and hardware. The company's financial position provides substantial flexibility to pursue strategic initiatives, weather economic uncertainties, and continue delivering value to shareholders through dividends and share repurchases.
          </p>
        </div>
      </section>
    </div>
  );
}
