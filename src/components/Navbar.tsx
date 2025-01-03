import React from 'react';
import { DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <DollarSign className="h-8 w-8" />
            <span className="font-bold text-xl">FinanceAI Advisor</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-indigo-200 px-3 py-2">Home</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;