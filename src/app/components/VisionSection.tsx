import React from 'react';
import { Globe, Lock, Users, Heart } from 'lucide-react';

export function VisionSection() {
  const principles = [
    {
      icon: Heart,
      title: 'Dignity-Centered AI',
      description: 'AI systems that respect human dignity and cultural values',
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Multilingual Inclusion',
      description: 'Supporting 2000+ African languages and dialects',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Community-Aligned',
      description: 'Intelligence systems built with and for African communities',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Lock,
      title: 'Digital Sovereignty',
      description: 'Local control over data, models, and AI infrastructure',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            A Different Philosophy of AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While the world focuses on innovation-first or regulation-first approaches, Africa pioneers human-centered communal AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-4">Strategic Positioning</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Africa stands at a unique crossroads. A continent rich in languages, cultures, informal economies, oral intelligence systems, and biodiversity knowledge—yet underrepresented in global AI datasets.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This platform becomes infrastructure for digital sovereignty, ensuring AI systems understand African realities rather than imposing foreign assumptions.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { region: 'US/Silicon Valley', philosophy: 'Innovation-first' },
                { region: 'European Union', philosophy: 'Regulation/privacy-first' },
                { region: 'China', philosophy: 'State-coordinated AI' },
                { region: 'Africa (Opportunity)', philosophy: 'Human-centered communal AI', highlight: true }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${item.highlight ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-white/10 backdrop-blur-sm'} border border-white/20`}
                >
                  <div className="flex justify-between items-center">
                    <span className={item.highlight ? 'text-white' : 'text-gray-300'}>{item.region}</span>
                    <span className={`text-sm ${item.highlight ? 'text-white' : 'text-gray-400'}`}>{item.philosophy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
