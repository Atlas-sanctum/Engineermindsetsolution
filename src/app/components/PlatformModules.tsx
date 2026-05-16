import React from 'react';
import {
  Languages,
  Shield,
  Search,
  Beaker,
  BarChart3,
  GraduationCap,
  Store,
  Scale,
  Eye
} from 'lucide-react';
import { PlatformCard } from './PlatformCard';

export function PlatformModules() {
  const modules = [
    {
      icon: Languages,
      title: 'Language Intelligence Hub',
      description: 'Preserve and digitize African linguistic intelligence with open datasets, NLP APIs, and translation models.',
      category: 'Foundation',
      gradient: 'from-blue-500 to-cyan-600',
      features: [
        'Open datasets for 2000+ languages',
        'Speech-to-text and translation APIs',
        'Cultural context annotations',
        'Indigenous terminology repositories'
      ]
    },
    {
      icon: Shield,
      title: 'Ethical AI Governance Engine',
      description: 'Help organizations design compliant and ethical AI systems with comprehensive assessment tools.',
      category: 'Governance',
      gradient: 'from-purple-500 to-indigo-600',
      features: [
        'AI ethics assessment wizard',
        'Bias auditing toolkit',
        'Transparency scoring',
        'Human-rights impact assessments'
      ]
    },
    {
      icon: Search,
      title: 'African Bias Audit System',
      description: 'Test AI systems for fairness across African names, accents, skin tones, and cultural contexts.',
      category: 'Compliance',
      gradient: 'from-rose-500 to-pink-600',
      features: [
        'Facial recognition fairness testing',
        'Voice recognition benchmarking',
        'NLP cultural bias detection',
        'Financial discrimination audits'
      ]
    },
    {
      icon: Beaker,
      title: 'Public-Interest AI Sandbox',
      description: 'A safe environment for building socially beneficial AI tools with free compute and ethical templates.',
      category: 'Innovation',
      gradient: 'from-emerald-500 to-teal-600',
      features: [
        'Free compute grants',
        'Ethical model templates',
        'Community datasets',
        'Sandbox environments'
      ]
    },
    {
      icon: BarChart3,
      title: 'AI Policy Simulation Lab',
      description: 'Help governments simulate AI policy outcomes before implementation with advanced modeling.',
      category: 'Policy',
      gradient: 'from-amber-500 to-orange-600',
      features: [
        'AI taxation impact modeling',
        'Labor automation effects',
        'Misinformation spread analysis',
        'Digital identity risk assessment'
      ]
    },
    {
      icon: GraduationCap,
      title: 'AI Literacy Platform',
      description: 'Multilingual education for citizens, developers, and policymakers across all skill levels.',
      category: 'Education',
      gradient: 'from-violet-500 to-purple-600',
      features: [
        'Gamified courses',
        'Mobile-first delivery',
        'Low-bandwidth support',
        'Certifications'
      ]
    },
    {
      icon: Store,
      title: 'Local AI Model Marketplace',
      description: 'African AI models for agriculture, healthcare, education, and climate with ethical certification.',
      category: 'Ecosystem',
      gradient: 'from-sky-500 to-blue-600',
      features: [
        'Open-source model hosting',
        'Regional fine-tuning',
        'Dataset provenance tracking',
        'API monetization'
      ]
    },
    {
      icon: Scale,
      title: 'Digital Rights Ombudsman',
      description: 'Citizens can report harmful AI decisions and challenge automated outcomes.',
      category: 'Protection',
      gradient: 'from-fuchsia-500 to-pink-600',
      features: [
        'Report harmful AI decisions',
        'Challenge automated outcomes',
        'File discrimination complaints',
        'Request explanations'
      ]
    },
    {
      icon: Eye,
      title: 'AI Research Observatory',
      description: 'Track AI adoption, policy changes, and innovation trends across the continent.',
      category: 'Intelligence',
      gradient: 'from-indigo-500 to-blue-600',
      features: [
        'Annual AI readiness index',
        'Country rankings',
        'Policy tracking',
        'Economic impact reports'
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Nine Integrated Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive ecosystem for building, governing, and deploying ethical AI across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <PlatformCard key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}
