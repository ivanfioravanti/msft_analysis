import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <div className="flex justify-center mb-6">
          <Image 
            src="/microsoft-logo.png" 
            alt="Microsoft Logo" 
            width={200} 
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Microsoft Corporation (MSFT)</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Comprehensive Stock Analysis</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            An in-depth analysis of Microsoft stock, examining company fundamentals, 
            financial performance, market sentiment, technical indicators, competitive positioning, 
            and investment recommendations.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
        <div className="space-y-4">
          <p>
            Microsoft Corporation (MSFT) is a global technology leader with a diversified business model 
            spanning cloud computing, productivity software, operating systems, and gaming. This comprehensive 
            analysis evaluates Microsoft as an investment opportunity by examining the company's business 
            fundamentals, financial performance, competitive positioning, market sentiment, technical indicators, 
            and valuation metrics.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Key Findings:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Strong Business Fundamentals:</strong> Microsoft maintains dominant positions across multiple technology segments, with a particularly strong presence in cloud computing (Azure), productivity software (Microsoft 365), and operating systems (Windows).</li>
            <li><strong>Exceptional Financial Performance:</strong> The company demonstrates industry-leading profitability with a 45.46% operating margin and 35.43% profit margin, along with consistent revenue growth of 12.30% year-over-year.</li>
            <li><strong>Mixed Market Sentiment:</strong> Analyst consensus is predominantly positive with an average price target of $507.54 (29.04% upside), though there are concerns about Azure growth rates and valuation.</li>
            <li><strong>Negative Technical Indicators:</strong> Technical analysis shows bearish signals across multiple timeframes, with the stock trading between support at $386 and resistance at $404.</li>
            <li><strong>Premium Valuation:</strong> Microsoft trades at elevated multiples (31.69 trailing P/E, 11.22 P/S) and above most intrinsic value estimates, suggesting limited near-term upside potential.</li>
            <li><strong>Strong Long-Term Outlook:</strong> Despite near-term concerns, Microsoft's positioning in secular growth trends like cloud computing and artificial intelligence creates a compelling long-term investment case.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Analysis Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Company Overview", description: "Microsoft's business segments, history, and market position", link: "/company" },
            { title: "Financial Analysis", description: "Revenue trends, profit margins, balance sheet, and cash flow", link: "/financials" },
            { title: "Market Sentiment", description: "Analyst ratings, earnings estimates, and news impact", link: "/sentiment" },
            { title: "Technical Analysis", description: "Price trends, technical indicators, and support/resistance levels", link: "/technical" },
            { title: "Competitor Analysis", description: "Market share and financial metrics vs. key competitors", link: "/competitors" },
            { title: "Valuation Metrics", description: "Intrinsic value, growth potential, and risk factors", link: "/valuation" },
            { title: "Investment Thesis", description: "SWOT analysis and recommendations for different investor types", link: "/thesis" },
            { title: "Full Report", description: "Complete comprehensive analysis in one document", link: "/report" },
          ].map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <a 
                href={section.link} 
                className="text-blue-600 font-medium hover:underline"
              >
                View Section →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4">Investment Recommendation</h2>
        <p className="text-lg">
          For long-term investors, Microsoft represents a high-quality core technology holding despite its premium valuation 
          and technical weakness. The company's diversified business model, financial strength, and exposure to secular 
          growth trends position it well for continued success over a 5+ year horizon. Near-term investors should consider 
          waiting for more favorable entry points or technical improvement.
        </p>
      </section>
    </div>
  );
}
