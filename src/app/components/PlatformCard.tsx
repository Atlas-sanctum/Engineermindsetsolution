import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, Chip } from '@mui/material';

interface PlatformCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  category: string;
  gradient: string;
}

export function PlatformCard({ icon: Icon, title, description, features, category, gradient }: PlatformCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          borderColor: 'rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        <Chip
          label={category}
          size="small"
          sx={{
            mb: 2,
            width: 'fit-content',
            fontSize: '0.75rem',
            fontWeight: 600,
            bgcolor: 'rgba(99, 102, 241, 0.1)',
            color: '#6366f1',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          }}
        />

        <h3 className="text-2xl mb-3 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto">
          <div className="text-sm mb-2 text-gray-700">Key Features:</div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
