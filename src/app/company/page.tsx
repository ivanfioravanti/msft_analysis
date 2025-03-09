import React from 'react';

export default function CompanyPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Microsoft Corporation - Company Overview</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-medium">Full Name:</span> Microsoft Corporation</p>
              <p><span className="font-medium">Ticker Symbol:</span> MSFT</p>
              <p><span className="font-medium">Headquarters:</span> One Microsoft Way, Redmond, WA 98052-6399, United States</p>
              <p><span className="font-medium">Phone:</span> 425-882-8080</p>
              <p><span className="font-medium">Website:</span> <a href="https://www.microsoft.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.microsoft.com</a></p>
            </div>
            <div>
              <p><span className="font-medium">Industry:</span> Software - Infrastructure</p>
              <p><span className="font-medium">Sector:</span> Technology</p>
              <p><span className="font-medium">Full-Time Employees:</span> 228,000</p>
              <p><span className="font-medium">Founded:</span> April 4, 1975 in Albuquerque, New Mexico</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Executives</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Position</th>
                <th className="py-3 px-4 text-left">Born</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4">Satya Nadella</td>
                <td className="py-3 px-4">Chairman & CEO</td>
                <td className="py-3 px-4">1967</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Bradford L. Smith</td>
                <td className="py-3 px-4">President & Vice Chairman</td>
                <td className="py-3 px-4">1959</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Amy E. Hood</td>
                <td className="py-3 px-4">Executive VP & CFO</td>
                <td className="py-3 px-4">1972</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Judson B. Althoff</td>
                <td className="py-3 px-4">Executive VP & Chief Commercial Officer</td>
                <td className="py-3 px-4">1974</td>
              </tr>
              <tr>
                <td className="py-3 px-4">James Kevin Scott</td>
                <td className="py-3 px-4">Executive VP of AI & CTO</td>
                <td className="py-3 px-4">1972</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Company History</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975. The company began by developing BASIC interpreters for the Altair 8800 microcomputer. Microsoft rose to prominence with MS-DOS in the mid-1980s, followed by the Windows operating system.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Key Historical Milestones</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Founded in 1975 in Albuquerque, New Mexico</li>
            <li>Moved headquarters to Bellevue, Washington in January 1979</li>
            <li>Entered the operating system business in 1980 with Xenix and MS-DOS</li>
            <li>Released Windows 1.0 on November 20, 1985</li>
            <li>Moved headquarters to Redmond, Washington on February 26, 1986</li>
            <li>Initial public offering (IPO) on March 13, 1986</li>
            <li>Released Windows NT in July 1993</li>
            <li>Steve Ballmer replaced Gates as CEO in 2000</li>
            <li>Acquired Skype Technologies in 2011</li>
            <li>Launched Surface hardware line in 2012</li>
            <li>Satya Nadella became CEO in 2014</li>
            <li>Acquired LinkedIn for $26.2 billion in 2016</li>
            <li>Established Microsoft Gaming division in 2022</li>
            <li>Acquired Activision Blizzard for $68.7 billion in 2023</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Business Segments</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Productivity and Business Processes (31.71% of revenue)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Office, Exchange, SharePoint, Microsoft Teams</li>
              <li>Office 365 Security and Compliance</li>
              <li>Microsoft Viva and Microsoft 365 Copilot</li>
              <li>Office consumer services (Microsoft 365 consumer subscriptions)</li>
              <li>LinkedIn</li>
              <li>Dynamics business solutions (Dynamics 365, Power Apps, Power Automate)</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Intelligent Cloud (42.98% of revenue)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Server products and cloud services (Azure)</li>
              <li>SQL and Windows Server</li>
              <li>Visual Studio, System Center</li>
              <li>Nuance and GitHub</li>
              <li>Enterprise support services and industry solutions</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">More Personal Computing (25.31% of revenue)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Windows (OEM licensing, commercial offerings)</li>
              <li>Devices (Surface, HoloLens, PC accessories)</li>
              <li>Gaming (Xbox hardware and content, Game Pass subscriptions)</li>
              <li>Search and news advertising (Bing, Microsoft News, Edge)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Market Position</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft is considered one of the "Big Five" American information technology companies, alongside Alphabet (Google), Amazon, Apple, and Meta (Facebook). The company reached a trillion-dollar market cap in April 2019, becoming the third public U.S. company to be valued at over $1 trillion.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Key Products and Services</h3>
          <ul className="list-disc pl-6 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <li>Windows operating systems</li>
            <li>Microsoft Office and Microsoft 365 suite</li>
            <li>Azure cloud computing platform</li>
            <li>Surface lineup of personal computers</li>
            <li>Xbox video game consoles and Xbox network</li>
            <li>Bing web search</li>
            <li>MSN web portal</li>
            <li>Outlook.com email service</li>
            <li>Microsoft Store</li>
            <li>Microsoft SQL Server database software</li>
            <li>Visual Studio development tools</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Corporate Governance</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Microsoft Corporation's ISS Governance QualityScore as of March 1, 2025 is 3. The pillar scores are:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Audit: 9</li>
            <li>Board: 5</li>
            <li>Shareholder Rights: 2</li>
            <li>Compensation: 3</li>
          </ul>
          <p className="mt-4">
            A decile score of 1 indicates lower governance risk, while a 10 indicates higher governance risk.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc pl-6 space-y-2">
            <li>March 13, 2025: Dividend Date</li>
            <li>April 23-28, 2025: Microsoft Corporation Earnings Date</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
