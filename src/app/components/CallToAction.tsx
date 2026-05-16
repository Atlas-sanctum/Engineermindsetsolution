import React from 'react';
import { Button } from '@mui/material';
import { ArrowRight, Mail, Github, Globe } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-white">
          Not Merely Adopting AI—
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Defining Its Philosophy
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          The world is heading toward AI concentration, data colonialism, and automated inequality.
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Africa has a rare window to define a different philosophy of AI itself—one rooted in community, dignity, accessibility, multilingual humanity, and public-interest innovation. That is not a niche. That is a civilization-scale contribution.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight className="w-5 h-5" />}
            sx={{
              bgcolor: 'white',
              color: '#1e293b',
              px: 5,
              py: 2,
              fontSize: '1.125rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#f1f5f9',
              }
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<Mail className="w-5 h-5" />}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              px: 5,
              py: 2,
              fontSize: '1.125rem',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              }
            }}
          >
            Contact Us
          </Button>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex justify-center gap-8 flex-wrap">
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
              <span>Website</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2026 African Ethical AI Framework Toolkit. Building infrastructure for digital sovereignty.
          </p>
        </div>
      </div>
    </section>
  );
}
