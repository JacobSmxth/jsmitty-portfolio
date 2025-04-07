'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Briefcase, Eye, BookOpen } from 'lucide-react';

const visitorTypes = [
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'Looking to hire a skilled developer?',
    icon: Briefcase,
    route: '/recruiter',
    gradient: 'from-red-500 to-red-800'
  },
  {
    id: 'client',
    title: 'Potential Client',
    description: 'Need a website or web application?',
    icon: User,
    route: '/client',
    gradient: 'from-red-500 to-red-800'
  },
  {
    id: 'reader',
    title: 'Reader',
    description: 'Interested in my thoughts and experiences?',
    icon: BookOpen,
    route: '/reader',
    gradient: 'from-red-500 to-red-800'
  },
  {
    id: 'visitor',
    title: 'Just Looking',
    description: 'Just browsing around?',
    icon: Eye,
    route: '/visitor',
    gradient: 'from-red-500 to-red-800'
  }
];

export default function HomePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const router = useRouter();

  const handleTypeSelect = (type: string, route: string) => {
    setSelectedType(type);
    setTimeout(() => {
      router.push(route);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            Jacob Smith
          </h1>
          <p className="text-xl text-gray-400">
            Front End Web Developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visitorTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeSelect(type.id, type.route)}
              className={`group relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-red-500 transition-all duration-300 overflow-hidden cursor-pointer ${
                selectedType === type.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <type.icon className="w-16 h-16 mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <h2 className="text-2xl font-bold mb-2">{type.title}</h2>
                <p className="text-gray-400">{type.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
