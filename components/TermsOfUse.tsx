
import React, { useEffect } from 'react';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 border-b border-slate-100 pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 brand-font mb-6 leading-tight">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            At DietniAI (DietnitAI.Ltd), we are committed to transparency. These Terms of Use govern your use of our WhatsApp-based AI nutrition and fitness assistant.
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">1. Description of Service</h2>
            <p>
              DietniAI provides daily calorie tracking and real-time nutritional guidance exclusively through WhatsApp. By using the service, you gain access to:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 font-medium">
              <li>Setting and monthly updates of your daily calorie target.</li>
              <li>Calorie and macro tracking (Protein, Carbs, Fats) via text or meal photos.</li>
              <li>Calculation of BMI, TDEE, and BMR through interactive conversation.</li>
              <li>Workout and sports activity tracking with burned calorie updates.</li>
              <li>Instant access to your daily calorie balance and ongoing nutritional insights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">2. Results Disclaimer</h2>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-red">
              <p className="font-bold text-slate-900">
                Individual results from using DietniAI typically become evident within 3 months of consistent use. 
              </p>
              <p className="mt-2 text-sm italic">
                Actual results may vary significantly based on your personal calorie target, level of commitment, metabolic factors, and accuracy of logging. DietniAI does not guarantee specific weight loss or health outcomes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">3. Medical Disclaimer</h2>
            <p>
              DietniAI is an artificial intelligence-based tool intended for informational and educational purposes only. It is NOT a medical device, nor does it provide professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or diet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">4. Eligibility and Use</h2>
            <p>
              The services are not intended for individuals under the age of 18, pregnant or nursing women, individuals with chronic illnesses, or those taking regular medications that affect metabolism or appetite. By using the service, you represent that you meet these eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">5. Payments and Access</h2>
            <p>
              Access to DietniAI is granted on a pre-paid basis for 30-day periods. We do not use automatic renewals. Payments made via PayPal or other processors are final and non-refundable, including cases of partial use or dissatisfaction with AI-generated insights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">6. Platform Usage (WhatsApp)</h2>
            <p>
              DietniAI operates via WhatsApp. Your use of the service is also subject to WhatsApp's own Terms of Service. We are not responsible for service interruptions caused by WhatsApp or Meta Inc.
            </p>
          </section>

          <section className="bg-brand-green/5 p-8 rounded-3xl border border-brand-green/10">
            <h2 className="text-xl font-black text-slate-900 mb-4">Questions?</h2>
            <p className="text-sm">
              Contact our support team at <a href="mailto:support@dietniAI.com" className="text-brand-green font-bold underline">support@dietniAI.com</a> for any clarifications regarding these terms.
            </p>
          </section>

          <div className="pt-10 border-t border-slate-100 text-xs text-slate-400">
            Last Updated: {new Date().toLocaleDateString()} | © DietniAI Ltd.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
