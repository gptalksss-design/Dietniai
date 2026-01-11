
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-black text-slate-900 brand-font mb-6 leading-tight">
            Welcome to Dietni.AI
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your smart coach dedicated to helping you achieve your weight goals through personalized nutrition guidance. Our AI-powered platform offers a comprehensive journey tailored to your unique needs, all accessible via WhatsApp for seamless integration into your daily life.
          </p>
        </div>

        {/* Security & Trust Section */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-whatsapp/10 rounded-2xl flex items-center justify-center text-brand-whatsapp mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">WhatsApp Safety</h4>
              <p className="text-sm text-slate-500">End-to-end encrypted messaging. Your personal health data is private and secure, exactly as intended by WhatsApp's native security.</p>
           </div>
           <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Secure Payments</h4>
              <p className="text-sm text-slate-500">We utilize world-class payment processors like PayPal to ensure your financial information never touches our servers directly.</p>
           </div>
           <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">Powered by OpenAI</h4>
              <p className="text-sm text-slate-500">Built on top of the world's most advanced AI models for hyper-accurate nutrition analysis and personal coaching.</p>
           </div>
        </div>

        <div className="bg-brand-green rounded-[3rem] p-10 md:p-16 text-white mb-12 shadow-2xl relative overflow-hidden">
          {/* Subtle WhatsApp pattern overlay for the mission card */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-brand-whatsapp">Our Mission</h3>
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              At Dietni.AI, we aim to empower individuals to make informed dietary choices by providing personalized meal plans, real-time calorie tracking, and continuous support. We strive to simplify the path to a healthier lifestyle, making nutrition management accessible and effective for everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-black text-slate-900 brand-font mb-8">Why Choose Dietni.AI?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-brand-whatsapp/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">User-Friendly Integration</h5>
                  <p className="text-slate-600 text-sm">Access all features directly through WhatsApp, eliminating the need for additional apps.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-brand-whatsapp/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Personalized Experience</h5>
                  <p className="text-slate-600 text-sm">Our AI adapts to your unique needs, preferences, and goals for a customized approach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-brand-whatsapp/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Evidence-Based Guidance</h5>
                  <p className="text-slate-600 text-sm">Insights rooted in the latest nutritional science to support your health journey safely.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-brand-whatsapp/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Satisfaction Guarantee</h5>
                  <p className="text-slate-600 text-sm">Try risk-free with a 7-day money-back guarantee. Hassle-free cancellations and refunds.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-[2.5rem] text-center border-2 border-slate-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-brand-whatsapp rounded-full flex items-center justify-center text-white mb-6 shadow-xl animate-bounce">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.128l-.904 3.313 3.393-.889c.861.467 1.753.714 2.254.714 3.18 0 5.765-2.586 5.766-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.346 8.357c-.131.373-.667.685-1.092.735-.425.05-1.02.043-1.62-.152-.6-.195-2.257-.863-3.08-1.583-.824-.72-1.344-1.543-1.344-2.544 0-1.002.525-1.493.714-1.693.188-.2.411-.25.547-.25.136 0 .272.001.39.007.124.006.29-.047.453.341.168.397.575 1.401.625 1.501.05.1.083.217.017.35-.067.133-.1.217-.2.333-.1.117-.21.263-.3.35-.1.1-.21.21-.09.417.12.207.533.878 1.143 1.423.785.7 1.442.918 1.65.1.208-.133.45-.333.667-.617.217-.283.433-.233.717-.133.283.1.1.217 1.792.863.35.133.583.217.75.217.167 0 .42-.083.567-.25z"/></svg>
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">Start Your Journey Today</h4>
            <p className="text-slate-600 mb-8 max-w-sm">Embark on a transformative journey towards better health with Dietni.AI.</p>
            <a 
              href="https://wa.me/message/JG23QMDOWWUZO1" 
              target="_blank" 
              className="bg-brand-green text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl active:scale-95"
            >
              Experience WhatsApp Coaching
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-400 italic max-w-3xl mx-auto">
            Note: Dietni.AI provides AI nutrition guidance and is not a substitute for professional medical advice. Please consult a healthcare professional before making significant dietary changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
