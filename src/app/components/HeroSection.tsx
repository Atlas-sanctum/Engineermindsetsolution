import React from 'react';
import { ArrowRight, Globe2, Shield, Users } from 'lucide-react';
import { Button } from '@mui/material';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900 opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Globe2 className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-100">Continental Infrastructure</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Shield className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-100">Ethical AI Governance</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Users className="w-4 h-4 text-emerald-300" />
            <span className="text-sm text-emerald-100">Digital Sovereignty</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl mb-6 text-white tracking-tight">
          African Ethical AI
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Framework Toolkit
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
          Building infrastructure for digital sovereignty across the continent
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          A continental platform helping governments, startups, researchers, and enterprises build ethical AI systems rooted in African contexts, languages, and values
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight className="w-5 h-5" />}
            sx={{
              bgcolor: 'white',
              color: '#1e293b',
              px: 4,
              py: 1.5,
              fontSize: '1.125rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#f1f5f9',
              }
            }}
          >
            Explore Platform
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.125rem',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              }
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { number: '2000+', label: 'African Languages', color: 'from-blue-400 to-blue-600' },
            { number: '9', label: 'Platform Modules', color: 'from-purple-400 to-purple-600' },
            { number: '54', label: 'Countries Served', color: 'from-emerald-400 to-emerald-600' },
            { number: '1.4B', label: 'People Empowered', color: 'from-amber-400 to-amber-600' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
