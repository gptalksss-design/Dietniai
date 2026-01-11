
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 border-b border-slate-100 pb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 brand-font mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your privacy is paramount at DietniAI. This policy explains how we collect, process, and protect your personal and nutritional data when you interact with us on WhatsApp.
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">1. Information We Collect</h2>
            <p>To provide accurate calorie tracking and guidance, we collect the following information provided by you via WhatsApp:</p>
            <ul className="list-disc pl-5 mt-4 space-y-3">
              <li><strong>Mascot & Interaction Data:</strong> Text messages, meal descriptions, and workout logs.</li>
              <li><strong>Visual Data:</strong> Photos of meals you send for AI analysis. These photos are processed to estimate portion sizes and nutritional content.</li>
              <li><strong>Health Metrics:</strong> Your height, weight, age, and gender, which are used to calculate your <strong>BMI (Body Mass Index)</strong>, <strong>TDEE (Total Daily Energy Expenditure)</strong>, and <strong>BMR (Basal Metabolic Rate)</strong>.</li>
              <li><strong>Communication Details:</strong> Your WhatsApp phone number and any profile name associated with your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">2. How We Use Your Data</h2>
            <p>Your data is processed specifically for:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Generating personalized daily calorie targets and monthly updates.</li>
              <li>Providing instant macro breakdowns (Protein, Carbs, Fats) for logged meals.</li>
              <li>Updating your daily calorie balance based on food intake and sports activity.</li>
              <li>Delivering ongoing insights to help you build smarter eating habits.</li>
              <li>Improving our AI model's accuracy in recognizing foods from photos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">3. Third-Party Service Providers</h2>
            <p>
              We partner with industry-leading technology providers to deliver our service. Your data may be processed by:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-4">
              <li><strong>Meta (WhatsApp):</strong> For the transmission of all messages and photos. (End-to-end encryption applies as per WhatsApp's native security).</li>
              <li><strong>OpenAI / Google Gemini:</strong> For the analysis of text, photos, and calculation of nutritional insights.</li>
              <li><strong>Picky Assist:</strong> For managing the API integration between our AI and WhatsApp.</li>
              <li><strong>PayPal:</strong> For secure processing of your service payments.</li>
            </ul>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 mb-4">Data Security & Storage</h2>
            <p>
              While we leverage the security of WhatsApp's encrypted platform, we also implement internal measures to ensure your logged health data is stored securely. We do not sell your personal health data or photos to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-brand-green brand-font mb-4 uppercase tracking-wide">4. Your Control</h2>
            <p>
              You can request a summary of your logged data or the deletion of your account history at any time by messaging "DELETE MY DATA" in the WhatsApp chat or emailing <a href="mailto:support@dietniAI.com" className="text-brand-green font-bold">support@dietniAI.com</a>.
            </p>
          </section>

          <section className="pt-10 border-t border-slate-100">
            <p className="text-sm font-black text-slate-900">Effective Date: January 7, 2024</p>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              *Note: By sending photos of meals to DietniAI, you grant us the right to process those images for the purpose of nutritional analysis. Avoid sending photos that contain identifiable faces or sensitive personal information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
