'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [{
      label: 'Portfolio Value ($)',
      data: [6339, 6922, 7092, 7215, 6917, 7627, 7928, 7843, 8317, 8621, 8850],
      borderColor: 'rgb(96, 165, 250)',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.1,
      fill: true
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff',
          callback: function(value: any) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      }
    }
  };

  const holdings = [
    { asset: 'WMB', size: '26', cost: 850, value: 1485, return: 74.77 },
    { asset: 'NVDA', size: '2', cost: 200, value: 297, return: 42.03 },
    { asset: 'UEC', size: '60', cost: 362, value: 460, return: 27.25 },
    { asset: 'NKE', size: '6', cost: 473, value: 459, return: -2.88 },
    { asset: 'MIRM', size: '15', cost: 472, value: 634, return: 34.25 },
    { asset: 'MO', size: '15.4', cost: 723, value: 841, return: 16.33 }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <header className="bg-blue-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">Gabriel Porter</h1>
          <p className="text-xl text-white">Financial & Data Analysis</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto mt-10 p-4">
        {/* Growth Chart */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Portfolio Growth 2023-2024</h2>
          <div className="h-[300px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Current Holdings */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Current Holdings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 text-white">Asset</th>
                  <th className="text-left py-3 text-white">Position Size</th>
                  <th className="text-left py-3 text-white">Cost Basis</th>
                  <th className="text-left py-3 text-white">Current Value</th>
                  <th className="text-left py-3 text-white">Return</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3 text-white">{holding.asset}</td>
                    <td className="text-white">{holding.size}</td>
                    <td className="text-white">${holding.cost}</td>
                    <td className="text-white">${holding.value}</td>
                    <td className={holding.return >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {holding.return >= 0 ? '+' : ''}{holding.return}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Investment Strategy & Analysis</h2>
          
          <div className="space-y-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Core Investment Philosophy</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Identifying undervalued assets with strong fundamentals</li>
                <li>Diversification across sectors to manage risk</li>
                <li>Balance between dividend income and capital appreciation</li>
                <li>Regular portfolio rebalancing based on market conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Current Positions Analysis</h3>
              <div className="space-y-4">
                {/* WMB Analysis */}
                <div>
                  <h4 className="font-bold text-blue-300">Williams Companies (WMB)</h4>
                  <p>Selected for its strong infrastructure position in natural gas transportation and steady dividend yield.</p>
                </div>
                {/* NVDA Analysis */}
                <div>
                  <h4 className="font-bold text-blue-300">NVIDIA (NVDA)</h4>
                  <p>Strategic investment in AI and semiconductor leadership. Limited position size manages risk while maintaining exposure to growth. Please also not this position has been trimmed throughout the year due to the explosive growth and better risk mangement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-300">NIKE(NKE)</h4>
                  <p>This investment was due to the rapid decrease in stock price following an earnings report. Even though it has been falling for years it looks to be at a critical level for a bounce and it also even after the multi year downward spiral it still holds a majority in market cap.</p>
                </div>
              </div>
            </div>

            {/* Sector Allocation */}
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Strategic Sector Allocation</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><span className="font-semibold">Energy Infrastructure (WMB, UEC):</span> Focus on essential services and energy transition</li>
                <li><span className="font-semibold">Technology (NVDA):</span> Exposure to high-growth AI sector</li>
                <li><span className="font-semibold">Consumer (NKE):</span> Brand strength and global presence</li>
                <li><span className="font-semibold">Healthcare (MIRM):</span> Biotechnology growth potential</li>
                <li><span className="font-semibold">Consumer Staples (MO):</span> Defensive position with strong dividend yield</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-white">Portfolio Value</h3>
            <p className="text-3xl text-blue-400">$8,850</p>
            <p className="text-gray-400">Current Balance</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-white">ROI</h3>
            <p className="text-3xl text-green-400">+34.8%</p>
            <p className="text-gray-400">Annual Return</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-white">Risk Score</h3>
            <p className="text-3xl text-blue-400">8/10</p>
            <p className="text-gray-400">Management Rating</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Contact</h2>
          <div className="space-x-4">
            <a href="mailto:gabescottprtr@yahoo.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Email Me</a>
            <a href="https://www.linkedin.com/in/gabriel-porter-046ab7296/" className="inline-block bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900">LinkedIn</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">Performance Verification</h2>
          <p className="text-gray-300 mb-4">All performance metrics and portfolio returns shown on this page can be verified through official brokerage statements.</p>
          <div className="mt-4 p-4 bg-blue-900 bg-opacity-20 rounded-lg">
            <p className="text-sm text-gray-300">Disclaimer: Past performance is not indicative of future results. All investment strategies involve risk of loss.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
