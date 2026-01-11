
import React, { useState, useRef } from 'react';
import { analyzeMeal, DietAnalysis } from '../services/gemini';

const AIDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DietAnalysis | null>(null);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setFeedback(null);
    try {
      const analysis = await analyzeMeal(input);
      setResult(analysis);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setFeedback(null);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const analysis = await analyzeMeal({ data: base64, mimeType: file.type });
        setResult(analysis);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    // Conceptually, this would send data to a backend or analytics service
    console.debug(`User provided ${type} feedback for response:`, result?.response);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Interactive Demo</span>
        <h2 className="text-4xl font-black text-slate-900">Experience DietniAI Now</h2>
        <p className="mt-4 text-slate-600 text-lg">Type what you ate or upload a photo to see the magic happen.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="p-10">
          <form onSubmit={handleTextSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., '100g grilled salmon with quinoa'"
                className="w-full px-8 py-5 rounded-2xl border-2 border-slate-100 focus:ring-4 focus:ring-brand-green/5 focus:border-brand-green transition-all outline-none text-xl placeholder:text-slate-300"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 text-slate-400 hover:text-brand-green transition-colors hover:bg-slate-50 rounded-xl"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileUpload}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-xl shadow-brand-green/20 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
            >
              {loading ? 'Analyzing your meal...' : 'Analyze Now'}
            </button>
          </form>

          {result && (
            <div className="mt-12 animate-in fade-in zoom-in duration-500">
              <div className="bg-[#e5ddd5] rounded-[2rem] p-8 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16"></div>
                <div className="flex flex-col space-y-4">
                   <div className="bg-white p-6 rounded-2xl shadow-xl text-sm self-start max-w-[95%] border-b-4 border-brand-green">
                    <div className="font-black text-brand-green text-lg mb-2 flex items-center justify-center sm:justify-between w-full">
                       <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-[10px] text-white">🍎</div>
                          DietniAI Analysis
                       </div>
                    </div>
                    <p className="text-slate-800 text-lg leading-relaxed mb-6">{result.response}</p>
                    
                    <div className="grid grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 font-black block tracking-widest mb-1">Calories</span>
                        <span className="text-3xl font-black text-brand-green">{result.calories}</span>
                        <span className="ml-1 text-slate-400 font-bold">kcal</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] uppercase text-slate-400 font-black block tracking-widest mb-1">Macros</span>
                        <div className="flex gap-3 text-sm font-black">
                          <span className="text-brand-red">P: {result.macros.p}g</span>
                          <span className="text-blue-600">C: {result.macros.c}g</span>
                          <span className="text-orange-500">F: {result.macros.f}g</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-brand-green/5 rounded-xl border border-brand-green/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                        <span className="text-xl mr-2">💡</span> {result.insight}
                      </p>
                      
                      <div className="flex items-center gap-2 shrink-0 border-l border-slate-100 pl-4">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Helpful?</span>
                        <button 
                          onClick={() => handleFeedback('up')}
                          className={`p-1.5 rounded-lg transition-all ${feedback === 'up' ? 'bg-brand-green text-white scale-110' : 'bg-white text-slate-400 hover:text-brand-green hover:bg-slate-50'}`}
                          title="Thumbs Up"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                        </button>
                        <button 
                          onClick={() => handleFeedback('down')}
                          className={`p-1.5 rounded-lg transition-all ${feedback === 'down' ? 'bg-brand-red text-white scale-110' : 'bg-white text-slate-400 hover:text-brand-red hover:bg-slate-50'}`}
                          title="Thumbs Down"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDemo;
