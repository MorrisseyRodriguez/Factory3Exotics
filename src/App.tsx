import React from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1 - Page Title */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          How People Are Finding Exotic Car Rentals in Arizona Right Now
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Every day, renters search Google looking for exotic cars in Scottsdale and Phoenix.
          Here's what they're seeing when they look, and where Factory 3 Exotics currently appears.
        </p>
      </header>

      {/* Section 2 - Current Discovery (Search Results) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Search className="w-8 h-8 text-gray-700" />
          <h2 className="text-4xl font-bold text-gray-900">What People See When They Search</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Example searches renters make:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-lg text-gray-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="font-mono bg-gray-50 px-4 py-2 rounded-lg">Lamborghini rental Scottsdale</span>
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="font-mono bg-gray-50 px-4 py-2 rounded-lg">Chauffeur service Scottsdale</span>
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="font-mono bg-gray-50 px-4 py-2 rounded-lg">Exotic car rental Scottsdale</span>
            </li>
          </ul>

          {/* Video */}
          <div className="relative rounded-xl overflow-hidden aspect-video mb-6">
            <iframe
              src="https://www.loom.com/embed/ad0c47c03c3a4d42b28c8cb81356bc29"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            In many cases, <span className="font-semibold text-gray-900">Factory 3 Exotics does not appear</span> where renters are actively searching for exotic cars.
          </p>
        </div>
      </section>

      {/* Section 3 - Google Maps Discovery */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="w-8 h-8 text-gray-700" />
          <h2 className="text-4xl font-bold text-gray-900">Where Your Business Is Discovered on Google Maps</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Maps Screenshot */}
          <div className="relative rounded-xl overflow-hidden mb-6 border border-gray-200 max-w-2xl mx-auto">
            <img
              src="/Screenshot_2026-03-09_194254.png"
              alt="Google Maps search results showing exotic car rentals"
              className="w-full h-auto"
            />
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Most renters also discover companies through Google Maps results.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              When competitors appear higher in the listing, they are often the businesses that <span className="font-semibold text-gray-900">receive the first calls</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - What People Are Searching */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-gray-700" />
          <h2 className="text-4xl font-bold text-gray-900">Searches Happening Every Month in Arizona</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            After reviewing search data for Arizona, here are examples of searches people make when looking to rent exotic vehicles.
          </p>

          <div className="space-y-4 mb-8">
            <SearchVolume
              keyword="Exotic car rental Scottsdale"
              volume="5,000"
            />
            <SearchVolume
              keyword="Luxury car rental Scottsdale AZ"
              volume="5,000"
            />
            <SearchVolume
              keyword="Lamborghini rental Phoenix"
              volume="500"
            />
            <SearchVolume
              keyword="Lamborghini rental Arizona"
              volume="500"
            />
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700 mb-2">Total potential searches:</p>
            <p className="text-5xl font-bold text-blue-600">11,000+</p>
            <p className="text-xl text-gray-600 mt-1">searches per month</p>
          </div>
        </div>
      </section>

      {/* Section 5 - Opportunity */}
      <section className="max-w-5xl mx-auto px-6 py-16 pb-24">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-200 p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What This Could Mean for Factory 3 Exotics
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              These are conservative estimates based on publicly available search volume data for Arizona.
            </p>

            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              If just <span className="font-bold text-green-700">0.2% – 0.5%</span> of these searches became renters, that could mean approximately:
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-200 mb-6">
              <p className="text-3xl font-bold text-center text-gray-900 mb-2">
                22–55
              </p>
              <p className="text-lg text-center text-gray-700">
                additional renters discovering Factory 3 Exotics every month
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Even capturing a fraction of that traffic could <span className="font-semibold text-gray-900">significantly increase inquiries and bookings</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SearchVolume({ keyword, volume }: { keyword: string; volume: string }) {
  return (
    <div className="flex items-center justify-between p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <span className="font-mono text-gray-800 text-lg">{keyword}</span>
      <div className="flex items-center gap-3">
        <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${Math.min(100, (parseInt(volume.replace(',', '')) / 5000) * 100)}%` }}
          ></div>
        </div>
        <span className="font-bold text-gray-900 text-lg min-w-[100px] text-right">
          {volume} <span className="text-sm font-normal text-gray-600">/ month</span>
        </span>
      </div>
    </div>
  );
}

export default App;
