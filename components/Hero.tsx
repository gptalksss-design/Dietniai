
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const videoLink = "https://photos.app.goo.gl/TWDuvYiA5BVZ9iRN9";
  const whatsappLink = "https://wa.me/message/JG23QMDOWWUZO1";

  return (
    <div className="relative overflow-hidden bg-white pt-6 pb-12 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="flex items-center sm:justify-center lg:justify-start gap-3 mb-6">
               <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-green text-white">
                NEW RELEASE
              </span>
              <span className="text-brand-green font-bold text-sm tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.56 9.29-6.433 11.717A11.954 11.954 0 0110 21.222a11.954 11.954 0 01-1.567-2.504C4.56 16.29 2 11.947 2 7.001c0-.682.057-1.35.166-2.002zm7.533 10.264l5-5a1 1 0 10-1.414-1.414l-4.293 4.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" /></svg>
                Secure & Private
              </span>
            </div>
            
            <h1 className="text-5xl tracking-tight font-black text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              Track your calories — <span className="text-brand-green">all on WhatsApp.</span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 sm:text-xl lg:text-2xl leading-relaxed max-w-xl">
              DietniAI helps you set targets and updates them monthly. Text or photo your meals to get instant insights and balance your day.
            </p>
            
            <div className="mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-10 py-5 border border-transparent text-lg font-black rounded-2xl text-white bg-brand-green hover:bg-black md:text-xl shadow-2xl transition-all active:scale-95"
              >
                <svg className="w-6 h-6 mr-3 fill-current text-brand-whatsapp" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.128l-.904 3.313 3.393-.889c.861.467 1.753.714 2.254.714 3.18 0 5.765-2.586 5.766-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.346 8.357c-.131.373-.667.685-1.092.735-.425.05-1.02.043-1.62-.152-.6-.195-2.257-.863-3.08-1.583-.824-.72-1.344-1.543-1.344-2.544 0-1.002.525-1.493.714-1.693.188-.2.411-.25.547-.25.136 0 .272.001.39.007.124.006.29-.047.453.341.168.397.575 1.401.625 1.501.05.1.083.217.017.35-.067.133-.1.217-.2.333-.1.117-.21.263-.3.35-.1.1-.21.21-.09.417.12.207.533.878 1.143 1.423.785.7 1.442.918 1.65.1.208-.133.45-.333.667-.617.217-.283.433-.233.717-.133.283.1.1.217 1.792.863.35.133.583.217.75.217.167 0 .42-.083.567-.25z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a 
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 flex items-center justify-center px-10 py-5 border-2 border-slate-200 text-lg font-black rounded-2xl text-slate-700 bg-white hover:border-brand-green md:text-xl transition-all active:scale-95 group"
              >
                <svg className="w-6 h-6 mr-3 text-brand-red group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                See Demo Video
              </a>
            </div>

            {/* Trust Badges Section */}
            <div className="mt-12 pt-8 border-t border-slate-100 animate-in fade-in duration-1000 slide-in-from-bottom-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Trusted Payments & Intelligence Providers</p>
              <div className="flex flex-wrap items-center sm:justify-center lg:justify-start gap-x-10 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
                {/* PayPal */}
                <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default" title="PayPal Secure Payments">
                  <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="#003087"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.723a.641.641 0 0 1 .633-.54h7.02c3.706 0 6.028 1.833 5.483 5.34-.33 2.126-1.545 3.51-3.6 4.148-1.583.493-3.415.424-4.825.424h-.47a.641.641 0 0 0-.633.54l-.794 5.06a.641.641 0 0 1-.632.542zm9.338-11.75c.348-2.253-1.045-3.664-3.528-3.664H8.46l-1.372 8.736c.036 0 .07 0 .108 0h1.164c.556 0 1.05-.403 1.137-.954l.43-2.738a1.122 1.122 0 0 1 1.107-.948h.81c2.14 0 3.75-.826 4.218-3.432z"/></svg>
                  <span className="font-black text-xs tracking-tighter text-[#003087]">PayPal</span>
                </div>
                {/* Stripe */}
                <div className="flex items-center grayscale hover:grayscale-0 transition-all cursor-default" title="Stripe Verified Merchant">
                  <svg className="h-5 w-auto" viewBox="0 0 40 16" fill="#635bff"><path d="M40 8.05c0-4.14-2.1-6.17-5.5-6.17-3.46 0-5.7 2.06-5.7 6.17 0 4.45 2.15 6.44 5.74 6.44 3.32 0 5.46-1.9 5.46-6.68v-.03zM34.5 11.2c-1.8 0-2.45-1-2.45-3.12 0-2.14.65-3.14 2.45-3.14s2.45 1 2.45 3.14c0 2.12-.65 3.12-2.45 3.12zm-8.8-9.35c-1.3-.3-2.74-.2-4.04.14v3.1h3.35V8.1h-3.35v3.1c0 1.34.42 1.66 1.45 1.66.45 0 .88-.04 1.3-.12V16c-.73.23-1.5.34-2.26.34-3.1 0-3.72-1.72-3.72-4.16V8.1h-2.1V5.1h2.1V1.3l3.25-1.04v4.84h4.02v.01zM14.52 4.14c-.67 0-1.2.28-1.5.58L13 1.84V0l3.24-.72v15.22h-3.23l-.15-1.58c-.3.3-.84.58-1.52.58-2.32 0-3.84-2-3.84-4.66 0-2.67 1.54-4.7 3.82-4.7zm.86 6.84c1.1 0 1.62-.64 1.62-1.82 0-1.18-.52-1.82-1.62-1.82-1.1 0-1.63.64-1.63 1.82 0 1.18.53 1.82 1.63 1.82zM5.22 6.55c0-.85.73-1.12 1.94-1.12.83 0 1.67.15 2.5.43V3.12C8.84 2.12 7.23 1.9 6.2 1.9c-2.88 0-4.22 1.4-4.22 3.65 0 3.14 4.3 2.62 4.3 3.96 0 .97-.85 1.13-2.13 1.13-1.05 0-2.16-.25-3.2-.76v2.85c1 .5 2.4.73 3.4.73 2.88 0 5.2-1.27 5.2-3.87 0-3.32-4.33-2.65-4.33-4.04z"/></svg>
                </div>
                {/* Divider */}
                <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
                {/* OpenAI */}
                <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default" title="Built with OpenAI GPT-4 technology">
                  <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="#000000"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9022 6.0462 6.0462 0 0 0-4.3439-3.1786 6.0712 6.0712 0 0 0-5.112.9818 6.0462 6.0462 0 0 0-3.3213 1.405 6.0712 6.0712 0 0 0-2.3168 4.2539 6.0462 6.0462 0 0 0-1.405 3.3213 6.0712 6.0712 0 0 0 .9818 5.112 6.0462 6.0462 0 0 0 3.1786 4.3439 6.0712 6.0712 0 0 0 4.9022.5153 6.0462 6.0462 0 0 0 4.3439 3.1786 6.0712 6.0712 0 0 0 5.112-.9818 6.0462 6.0462 0 0 0 3.3213-1.405 6.0712 6.0712 0 0 0 2.3168-4.2539 6.0462 6.0462 0 0 0 1.405-3.3213 6.0712 6.0712 0 0 0-.9818-5.112ZM13.8123 21.0772a4.4444 4.4444 0 0 1-2.551-.8016l.1233-.0707 5.4332-3.136a.8123.8123 0 0 0 .4062-.7036v-7.6625l2.4277 1.4013a4.4172 4.4172 0 0 1 2.1813 4.6366 4.4444 4.4444 0 0 1-2.5207 3.6558l-5.5003 3.1798Zm-9.2771-2.0401a4.4444 4.4444 0 0 1-1.2523-2.3667 4.4172 4.4172 0 0 1 .4367-3.1256l.1233.0707 5.4332-3.136a.8123.8123 0 0 0 .8123 0l6.6358-3.8312v2.8026a4.4172 4.4172 0 0 1-2.1813 4.6366l-5.5003 3.1798a4.4444 4.4444 0 0 1-4.5076-.4367l-.0001-.0655Zm-2.85-10.4351a4.4444 4.4444 0 0 1 1.2987-2.3418l.1233.0707 5.4332-3.136a.8123.8123 0 0 0 .4062.1032h.0001l.0001.0001a.8123.8123 0 0 0 .4062-.1032l6.6358-3.8312-1.2016 2.0812a4.4172 4.4172 0 0 1-4.6366 2.1813l-6.3601 0a4.4444 4.4444 0 0 1-2.1001-1.2987Zm15.4664-2.1648l-5.4332-3.136a.8123.8123 0 0 0-.8123 0l-6.6358 3.8312v-2.8026a4.4172 4.4172 0 0 1 2.1813-4.6366l5.5003-3.1798a4.4444 4.4444 0 0 1 4.5076.4367l.1233.0707v7.6625a.8123.8123 0 0 0-.4062.7036l-1.0001.0501Zm4.1611 1.5492a4.4444 4.4444 0 0 1 1.2523 2.3667 4.4172 4.4172 0 0 1-.4367 3.1256l-.1233-.0707-5.4332-3.136a.8123.8123 0 0 0-.8123 0l-6.6358 3.8312v-2.8026a4.4172 4.4172 0 0 1 2.1813-4.6366l5.5003-3.1798a4.4444 4.4444 0 0 1 4.5076.4367l-.0001-.0655Zm-4.9601 3.2774l-6.6358 3.8312-2.4277-1.4013a4.4172 4.4172 0 0 1-2.1813-4.6366 4.4444 4.4444 0 0 1 2.5207-3.6558l5.5003-3.1798a4.4444 4.4444 0 0 1 2.551-.8016l-.1233.0707-5.4332-3.136a.8123.8123 0 0 0-.4062.7036v7.6625l1.0001.0501Z"/></svg>
                  <span className="font-bold text-xs text-black">OpenAI</span>
                </div>
                {/* Google Gemini */}
                <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all cursor-default" title="Powered by Google Gemini 2.0 AI">
                  <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" fill="#1A73E8"/>
                    <path d="M18 16L19.14 18.86L22 20L19.14 21.14L18 24L16.86 21.14L14 20L16.86 18.86L18 16Z" fill="#1A73E8" fillOpacity="0.7"/>
                  </svg>
                  <span className="font-bold text-xs text-[#1A73E8]">Gemini</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-5 relative flex justify-center">
            {/* Phone Mockup */}
            <div className="relative group cursor-pointer" onClick={() => window.open(videoLink, '_blank')}>
              <div className="relative mx-auto w-full max-w-[320px] shadow-[0_20px_50px_rgba(0,70,49,0.3)] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 overflow-hidden aspect-[9/18.5]">
                <div className="absolute top-0 w-full h-6 bg-slate-900 z-30 flex justify-center items-center">
                  <div className="w-20 h-4 bg-black rounded-full"></div>
                </div>
                
                <div className="h-full w-full bg-[#e5ddd5] relative flex flex-col">
                  {/* WhatsApp Header Mockup */}
                  <div className="bg-brand-green p-4 pt-10 text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                       <Logo className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">DietniAI</div>
                      <div className="text-[10px] opacity-70">online</div>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col space-y-3 flex-grow overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-xs self-start max-w-[85%] border-l-4 border-brand-green">
                      <b>Rami's Dashboard ⚡️</b><br/>
                      Remaining: 1,700 kcal<br/>
                      Protein: 10g<br/>
                      Target: 2,000 kcal
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm self-start max-w-[85%]">
                      <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=200" className="rounded mb-1" />
                    </div>
                    <div className="bg-[#dcf8c6] p-3 rounded-lg shadow-sm text-xs self-end max-w-[85%]">
                      Analyze my soup! 🥣
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-2 rounded-lg text-[8px] text-blue-600 text-center flex items-center justify-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                      Messages are end-to-end encrypted.
                    </div>
                  </div>
                  
                  <div className="bg-[#f0f0f0] p-4 flex items-center gap-2 mt-auto">
                    <div className="flex-grow bg-white rounded-full px-4 py-2 text-[10px] text-slate-400 shadow-inner">Type a message</div>
                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-md">
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-green rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
