import React from 'react';
import { LineChart, Wallet, PiggyBank, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Financial Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Balance</p>
                <h3 className="text-xl font-semibold text-gray-900">$24,500</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <PiggyBank className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Savings</p>
                <h3 className="text-xl font-semibold text-gray-900">$12,750</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Investments</p>
                <h3 className="text-xl font-semibold text-gray-900">$8,250</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <LineChart className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Monthly Growth</p>
                <h3 className="text-xl font-semibold text-gray-900">+12.5%</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { date: '2024-03-10', description: 'Investment in Index Fund', amount: '+$500' },
              { date: '2024-03-08', description: 'Savings Deposit', amount: '+$1,000' },
              { date: '2024-03-05', description: 'Stock Purchase', amount: '-$750' },
              { date: '2024-03-01', description: 'Dividend Payment', amount: '+$125' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="text-sm text-gray-600">{activity.date}</p>
                  <p className="font-medium text-gray-900">{activity.description}</p>
                </div>
                <span className={`font-semibold ${
                  activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;