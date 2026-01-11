
import React from 'react';
import Logo from './Logo';

interface ChatMessage {
  type: 'user' | 'ai';
  text?: string;
  image?: string;
  isDashboard?: boolean;
}

interface Step {
  title: string;
  content: string;
  messages: ChatMessage[];
}

const steps: Step[] = [
  {
    title: "Set Your Target Every Month",
    content: "Chatting about your goals and lifestyle, DietniAI will calculate your BMI, TDEE & BMR through a quick conversation. Already know them? Just Text it!",
    messages: [
      { type: 'user', text: "I want to reach my goal weight by summer. Can you help?" },
      { type: 'ai', text: "Of course! Let's start. What is your current height and weight? I'll calculate your TDEE and BMR to set the perfect calorie target for you. 🎯" },
      { type: 'user', text: "I'm 175cm and 82kg." },
      { type: 'ai', text: "Got it! Based on your stats, your maintenance calories (TDEE) is ~2,400. To lose weight safely, I've set your daily target to **1,900 kcal**. Ready? 🚀" }
    ]
  },
  {
    title: "Track Intake by Text or Photo",
    content: "Any time you text or send a photo of your meal, DietniAI will track your calories and macros to keep you balanced and on target. 📸🍴",
    messages: [
      { type: 'user', image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
      { type: 'ai', text: "Analyzing your meal... looks like a healthy poke bowl with salmon! 🥗\n\n**Estimated: 520 kcal**\nProtein: 32g\nCarbs: 45g\nFats: 18g\n\nAdded to your balance!" }
    ]
  },
  {
    title: "Track Workouts and Burned Calories",
    content: "Any time you’re doing sport, just text it — DietniAI will track your exercise, update your calorie balance, and keep you on target.",
    messages: [
      { type: 'user', text: "Just finished a 45-minute HIIT workout! 🏋️‍♂️" },
      { type: 'ai', text: "Great job, Rami! That's approximately **380 calories burned**. I've updated your daily balance. You have more room for a healthy dinner tonight! 🔥" },
      { type: 'ai', isDashboard: true }
    ]
  },
  {
    title: "Eat Smarter with Ongoing Insights",
    content: "DietniAI gives instant insights to help you build habits and reach your goals — one choice at a time.",
    messages: [
      { type: 'user', text: "I'm feeling a bit hungry but I'm close to my limit." },
      { type: 'ai', text: "💡 **Quick Insight**: You've had a lot of simple carbs today. Try a high-protein snack like Greek yogurt or a handful of almonds. It will keep you full longer without breaking your budget! 🍏" }
    ]
  }
];

const ChatWindow: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => {
  return (
    <div className="h-full w-full bg-[#e5ddd5] flex flex-col relative overflow-hidden">
      {/* WhatsApp Header */}
      <div className="bg-brand-green p-3 pt-8 text-white flex items-center gap-3 shrink-0 z-10 shadow-md">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
          <Logo className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold leading-none">DietniAI</div>
          <div className="text-[8px] opacity-70 mt-1">online</div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-4 flex flex-col gap-3 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[length:200px]">
        {messages.map((msg, i) => {
          if (msg.isDashboard) {
            return (
              <div key={i} className="bg-white p-3 rounded-xl shadow-md text-[10px] self-start max-w-[85%] border-l-4 border-brand-green animate-in fade-in slide-in-from-bottom-2">
                <div className="font-black text-brand-green mb-1 flex items-center gap-1">
                   <span>⚡️</span> RAMI'S DASHBOARD
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-between"><span>Remaining:</span> <span className="font-bold">1,120 kcal</span></div>
                  <div className="flex justify-between"><span>Consumed:</span> <span className="font-bold">780 kcal</span></div>
                  <div className="flex justify-between"><span>Burned:</span> <span className="font-bold">380 kcal</span></div>
                </div>
              </div>
            );
          }
          return (
            <div 
              key={i} 
              className={`max-w-[85%] p-2 rounded-xl text-[10px] shadow-sm animate-in fade-in slide-in-from-bottom-2 ${
                msg.type === 'user' 
                  ? 'bg-[#dcf8c6] self-end rounded-tr-none' 
                  : 'bg-white self-start rounded-tl-none'
              }`}
            >
              {msg.image && (
                <img src={msg.image} className="rounded mb-2 w-full object-cover aspect-video" alt="User upload" />
              )}
              {msg.text && <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>}
              <div className="text-[8px] text-right opacity-40 mt-1">12:45 PM</div>
            </div>
          );
        })}
      </div>

      {/* WhatsApp Input Mockup */}
      <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 shrink-0">
        <div className="flex-grow bg-white rounded-full px-3 py-1.5 text-[8px] text-slate-400 shadow-inner">Type a message</div>
        <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-white">
           <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div className="py-12 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight brand-font">How it works</h2>
          <p className="mt-4 text-lg text-slate-500">Your journey to a healthier you happens entirely within WhatsApp.</p>
        </div>

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col lg:items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-brand-green text-white text-xs font-black mb-6 uppercase tracking-[0.2em]">
                  Step {idx + 1}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">{step.title}</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {step.content}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/message/JG23QMDOWWUZO1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-green font-bold group transition-all"
                  >
                    Try this feature
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 relative flex justify-center">
                {/* Mobile Mockup */}
                <div className="relative z-10 w-full max-w-[280px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 overflow-hidden aspect-[9/18]">
                  {/* Notch */}
                  <div className="absolute top-0 w-full h-5 bg-slate-900 z-20 flex justify-center items-center">
                    <div className="w-16 h-3 bg-black rounded-full"></div>
                  </div>
                  
                  <ChatWindow messages={step.messages} />
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-[140%] h-[120%] rounded-[5rem] -z-10 blur-3xl opacity-[0.07] ${
                  idx % 2 === 0 ? 'bg-brand-green rotate-12 -right-1/4' : 'bg-brand-red -rotate-12 -left-1/4'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
