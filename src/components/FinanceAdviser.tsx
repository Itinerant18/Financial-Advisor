import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface FinanceAdviserProps {
  onSubmit: (query: string) => Promise<void>;
  isLoading: boolean;
  response: string | null;
}

const FinanceAdviser: React.FC<FinanceAdviserProps> = ({ onSubmit, isLoading, response }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    await onSubmit(query);
    setQuery('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">
            Ask your financial question
          </label>
          <div className="mt-1 relative">
            <textarea
              id="query"
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="E.g., How should I start investing with $1000?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
              Processing...
            </>
          ) : (
            <>
              <Send className="-ml-1 mr-2 h-4 w-4" />
              Get Advice
            </>
          )}
        </button>
      </form>

      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Financial Advice:</h3>
          <div className="mt-2 p-4 bg-gray-50 rounded-md">
            <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinanceAdviser;