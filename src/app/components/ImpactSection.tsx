import React from 'react';
import { Building2, Briefcase, Code, University, HeartHandshake, TrendingUp } from 'lucide-react';

export function ImpactSection() {
  const stakeholders = [
    {
      icon: Building2,
      name: 'Governments',
      description: 'Policy systems, compliance tooling, national AI audits',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Briefcase,
      name: 'Enterprises',
      description: 'Bias audits, compliance scoring, governance dashboards',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Code,
      name: 'Developers',
      description: 'Language APIs, ethical tooling, model marketplace',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: University,
      name: 'Researchers',
      description: 'Datasets, compute grants, collaboration opportunities',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: HeartHandshake,
      name: 'NGOs',
      description: 'Public-interest AI tools, civic innovation support',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      name: 'Startups',
      description: 'Sandbox environments, certification, market access',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const outcomes = [
    { layer: 'Technical', outcome: 'African AI infrastructure' },
    { layer: 'Political', outcome: 'Continental governance influence' },
    { layer: 'Economic', outcome: 'AI sovereignty' },
    { layer: 'Cultural', outcome: 'Preservation of languages and knowledge' },
    { layer: 'Educational', outcome: 'AI literacy at scale' },
    { layer: 'Diplomatic', outcome: 'Global AI ethics leadership' }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Stakeholders & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving diverse users across the continent with tailored solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stakeholder.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{stakeholder.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stakeholder.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl mb-8 text-center">Long-Term Strategic Outcomes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-emerald-400 mb-2">{outcome.layer}</div>
                <div className="text-lg text-white">{outcome.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
