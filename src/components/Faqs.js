import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <details className="mb-4 rounded-xl border border-[#d4a11f]/20 bg-white p-4">
      <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--brand-primary)]">{question}</summary>
      <p className="mt-3 text-gray-600">{answer}</p>
    </details>
  );
};

const Faqs = () => {
  return (
    <div id="About" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <FaqItem
          question="Which grades are open for admission?"
          answer="Admissions are open for the Academic Year 2026-27 from Pre-School upward, with the school expanding from Pre-School to Grade VIII and building toward Grade X."
        />
        <FaqItem
          question="What curriculum does Vaksiddhi follow?"
          answer="The school follows the State Syllabus and is preparing for CBSE curriculum alignment, with CBSE affiliation currently in process."
        />
        <FaqItem
          question="What makes the SEED philosophy different?"
          answer="SEED combines Socratic thinking, experiential learning, excellence, and discipline so students learn to question, explore, achieve, and grow with character."
        />
      </div>
    </div>
  );
};

export default Faqs;
