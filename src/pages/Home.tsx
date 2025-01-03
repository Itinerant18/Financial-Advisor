import React from 'react';
import FinanceAdviser from '../components/FinanceAdviser';

const Home = () => {
  const [response, setResponse] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (query: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResponse(data.advice);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, there was an error processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your AI Financial Advisor
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized financial advice powered by artificial intelligence
          </p>
        </div>

        <FinanceAdviser
          onSubmit={handleSubmit}
          isLoading={isLoading}
          response={response}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-600">
              Get professional-grade financial advice powered by advanced AI models
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">
              Access financial guidance whenever you need it, day or night
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Personalized Solutions</h3>
            <p className="text-gray-600">
              Receive tailored advice based on your unique financial situation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;