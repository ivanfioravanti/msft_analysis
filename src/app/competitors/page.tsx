import React from 'react';

export default function CompetitorsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Microsoft Corporation - Competitor Analysis</h1>
        <p className="text-lg mb-6">
          Microsoft maintains strong competitive positions across its major business segments, though with varying market share by segment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cloud Computing Market</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Market Share Comparison (Q4 2024)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Market Share</th>
                  <th className="py-3 px-4 text-left">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Amazon Web Services (AWS)</td>
                  <td className="py-3 px-4">30%</td>
                  <td className="py-3 px-4">1</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Microsoft Azure</td>
                  <td className="py-3 px-4 font-medium">21%</td>
                  <td className="py-3 px-4 font-medium">2</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Google Cloud</td>
                  <td className="py-3 px-4">12%</td>
                  <td className="py-3 px-4">3</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Others</td>
                  <td className="py-3 px-4">37%</td>
                  <td className="py-3 px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3">Cloud Market Growth and Trends</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Global cloud infrastructure service spending reached $91 billion in Q4 2024, growing 22% year-over-year</li>
            <li>Full-year 2024 cloud infrastructure service revenues climbed to $330 billion</li>
            <li>AI is driving accelerated growth in the cloud market, with new AI-oriented services creating a virtuous cycle of increased demand, revenues, and investment</li>
            <li>Microsoft is particularly well-positioned in the AI cloud race, with strong integration between Azure and its AI services</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Productivity Software Market</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Market Share Comparison</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Market Share</th>
                  <th className="py-3 px-4 text-left">Source/Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Microsoft 365</td>
                  <td className="py-3 px-4 font-medium">89.2%</td>
                  <td className="py-3 px-4 font-medium">Gartner (2022)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Google Workspace</td>
                  <td className="py-3 px-4">10.3%</td>
                  <td className="py-3 px-4">Gartner (2022)</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Microsoft 365</td>
                  <td className="py-3 px-4 font-medium">45%</td>
                  <td className="py-3 px-4 font-medium">Other sources (2023)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Google Workspace</td>
                  <td className="py-3 px-4">50%</td>
                  <td className="py-3 px-4">Other sources (2023)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            There are conflicting reports about the market share distribution in the productivity software market. According to Gartner data from 2022, Microsoft dominates with 89.2% market share compared to Google's 10.3%. However, other sources from 2023 suggest Google has overtaken Microsoft with approximately 50% market share compared to Microsoft's 45%.
          </p>

          <p className="mb-4">
            The discrepancy may be due to:
          </p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Different measurement methodologies</li>
            <li>Different market segment definitions (consumer vs. enterprise)</li>
            <li>Regional variations in adoption</li>
            <li>Rapid market changes between measurement periods</li>
          </ol>

          <h3 className="text-xl font-medium mt-6 mb-3">Competitive Dynamics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Microsoft 365 offers a more feature-rich productivity suite with deeper integration with Windows</li>
            <li>Google Workspace is often preferred for its cloud-native approach and collaborative features</li>
            <li>Microsoft has a stronger position in enterprise customers</li>
            <li>Google has gained traction in education and small-to-medium businesses</li>
            <li>Microsoft benefits from its legacy position and integration with other Microsoft products</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Operating Systems Market</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Desktop Operating System Market Share (2024)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Operating System</th>
                  <th className="py-3 px-4 text-left">Market Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Windows (Microsoft)</td>
                  <td className="py-3 px-4 font-medium">72%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">macOS (Apple)</td>
                  <td className="py-3 px-4">16-17%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Chrome OS (Google)</td>
                  <td className="py-3 px-4">7-8%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Linux</td>
                  <td className="py-3 px-4">3-4%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Others</td>
                  <td className="py-3 px-4">2-3%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3">Operating System Trends</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Windows market share has gradually declined over the past decade</li>
            <li>macOS has been steadily gaining ground, particularly in the US market</li>
            <li>Chrome OS has established a significant presence in education</li>
            <li>Windows maintains stronger enterprise presence due to legacy applications and IT infrastructure</li>
            <li>Microsoft has shifted focus to Windows as a service model with Windows 11</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Gaming Console Market</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Console Market Share</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Console</th>
                  <th className="py-3 px-4 text-left">Market Share</th>
                  <th className="py-3 px-4 text-left">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">PlayStation (Sony)</td>
                  <td className="py-3 px-4">65-70%</td>
                  <td className="py-3 px-4">1</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Xbox (Microsoft)</td>
                  <td className="py-3 px-4 font-medium">30-35%</td>
                  <td className="py-3 px-4 font-medium">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3">Gaming Business Comparison</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sony PlayStation leads in console sales and exclusive game titles</li>
            <li>Microsoft has shifted focus to a services-based model with Xbox Game Pass</li>
            <li>Microsoft's acquisition of Activision Blizzard strengthens its content portfolio</li>
            <li>Microsoft benefits from cross-platform integration between Xbox and Windows</li>
            <li>Microsoft's gaming revenue is more diversified across hardware, software, and services</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Financial Comparison with Key Competitors</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">Revenue Comparison (Latest Fiscal Year, in billions USD)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Revenue</th>
                  <th className="py-3 px-4 text-left">YoY Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">Amazon</td>
                  <td className="py-3 px-4">$574.8</td>
                  <td className="py-3 px-4">11.8%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Apple</td>
                  <td className="py-3 px-4">$383.3</td>
                  <td className="py-3 px-4">6.7%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Google (Alphabet)</td>
                  <td className="py-3 px-4">$307.4</td>
                  <td className="py-3 px-4">13.5%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Microsoft</td>
                  <td className="py-3 px-4 font-medium">$245.1</td>
                  <td className="py-3 px-4 font-medium text-green-600">15.7%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Sony</td>
                  <td className="py-3 px-4">$86.2</td>
                  <td className="py-3 px-4">3.2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium mb-3">Market Capitalization (as of March 2025, in trillions USD)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Market Cap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-medium">Microsoft</td>
                  <td className="py-3 px-4 font-medium">$3.0+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Apple</td>
                  <td className="py-3 px-4">$3.0+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Alphabet (Google)</td>
                  <td className="py-3 px-4">$2.0+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Amazon</td>
                  <td className="py-3 px-4">$1.8+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Sony</td>
                  <td className="py-3 px-4">$0.1+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Competitive Strengths and Weaknesses</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-700">Microsoft's Competitive Advantages</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Diversified Business Model:</strong> Microsoft operates across multiple technology segments, reducing dependency on any single market</li>
                <li><strong>Enterprise Relationships:</strong> Strong, established relationships with enterprise customers</li>
                <li><strong>AI Integration:</strong> Leading position in AI integration across its product portfolio</li>
                <li><strong>Cloud Infrastructure:</strong> Second-largest cloud provider with strong enterprise adoption</li>
                <li><strong>Productivity Ecosystem:</strong> Comprehensive productivity suite with deep integration across products</li>
                <li><strong>Windows Platform:</strong> Dominant position in desktop operating systems</li>
                <li><strong>Gaming Content:</strong> Strengthened gaming content portfolio through acquisitions</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-red-700">Microsoft's Competitive Challenges</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Cloud Market Position:</strong> Trails AWS in cloud infrastructure market share</li>
                <li><strong>Productivity Competition:</strong> Facing increased competition from Google in productivity software</li>
                <li><strong>Gaming Console Position:</strong> Significantly behind Sony in gaming console market share</li>
                <li><strong>Mobile Ecosystem:</strong> Limited presence in mobile operating systems and devices</li>
                <li><strong>Consumer Services:</strong> Less successful in consumer-oriented services compared to competitors</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Competitive Outlook</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft maintains strong competitive positions across its major business segments, particularly in cloud computing, productivity software, and operating systems. The company's diversified business model provides stability and multiple growth vectors.
          </p>
          <p className="mb-4">
            In cloud computing, Microsoft Azure continues to grow rapidly, though it remains behind AWS. Microsoft's strong AI capabilities and enterprise relationships position it well for continued growth in this segment.
          </p>
          <p className="mb-4">
            In productivity software, Microsoft faces increased competition from Google but maintains strong enterprise adoption. The conflicting market share data suggests a dynamic competitive landscape that may vary by market segment.
          </p>
          <p className="mb-4">
            In operating systems, Windows maintains its dominant position despite gradual market share erosion. Microsoft's shift to Windows as a service provides a more stable revenue stream.
          </p>
          <p>
            In gaming, Microsoft's Xbox platform trails Sony's PlayStation in market share, but the company's service-oriented approach with Game Pass and strategic acquisitions position it for potential growth.
          </p>
        </div>
      </section>
    </div>
  );
}
