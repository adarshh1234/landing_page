import React from 'react';

export const DimensionsOfTalent: React.FC = () => {
  const dimensions = [
    {
      num: '01',
      title: 'Educational Foundations',
      description: 'Consistency + Specialization. Tier 1 reputation matters, but so does relevancy.',
    },
    {
      num: '02',
      title: 'Verified Skill Sets',
      description: 'Technical proficiency, certifications, and domain expertise — proven, not claimed.',
    },
    {
      num: '03',
      title: 'Performance History',
      description: 'Promotion velocity + quantifiable ROI. STAR results beat years of tenure.',
    },
    {
      num: '04',
      title: 'Psychometric & Cognitive',
      description: 'Aptitude, SJT, personality (DISC/Big Five), and EQ — raw ability minus bias.',
    },
    {
      num: '05',
      title: 'Communication & Language',
      description: 'Professional fluency, cross-cultural agility, and public speaking.',
    },
    {
      num: '06',
      title: 'Soft Power & Adaptability',
      description: 'Learnability (AQ), critical thinking, collaboration, and digital literacy.',
    }
  ];

  return (
    <section id="dimensions" className="py-20 md:py-28 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Screenshot 4 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f0f8ff] border border-[#dbeafe] text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span>MODERN HIRING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#061f3d] tracking-[-0.035em] leading-tight mb-4">
            The <span className="text-gradient-blue">6 Dimensions</span> of Talent
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            How forward-thinking companies evaluate candidates in 2026.
          </p>
        </div>

        {/* 6 Dimension Cards from Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dimensions.map((dim, i) => (
            <div
              key={i}
              className="bg-white rounded-[1.75rem] border border-[#e2edf8] p-7 transition-all duration-200 hover:border-[#bae6fd] hover:shadow-[0_10px_25px_rgba(2,132,199,0.06)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#0066cc] block mb-2">
                  {dim.num}
                </span>

                <h3 className="text-base font-bold text-[#061f3d] tracking-tight mb-2">
                  {dim.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Insight Callout Box from Screenshot 4 */}
        <div className="bg-[#f0f8ff] border border-[#dbeafe] rounded-2xl p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-[#061f3d] font-bold">Expert Insight:</strong> In 2026, the most valued parameter is <strong className="font-bold text-[#0066cc]">"Verified Proof of Work."</strong> Companies are moving away from trusting CVs toward audited portfolios and AI-vetted live assessments.
          </p>
        </div>

      </div>
    </section>
  );
};
