import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Microsoft Stock Analysis",
  description: "Comprehensive analysis of Microsoft (MSFT) stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Microsoft Stock Analysis</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/company" className="hover:underline">Company</a></li>
                <li><a href="/financials" className="hover:underline">Financials</a></li>
                <li><a href="/sentiment" className="hover:underline">Sentiment</a></li>
                <li><a href="/technical" className="hover:underline">Technical</a></li>
                <li><a href="/competitors" className="hover:underline">Competitors</a></li>
                <li><a href="/valuation" className="hover:underline">Valuation</a></li>
                <li><a href="/thesis" className="hover:underline">Thesis</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-100 p-6 mt-12">
          <div className="container mx-auto text-center text-gray-600">
            <p>© {new Date().getFullYear()} Microsoft Stock Analysis</p>
            <p className="mt-2 text-sm">This analysis is for informational purposes only and does not constitute investment advice.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
