
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick, onPrivacyClick }) => {
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/dietniai/', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.787.306-1.454.717-2.119 1.382-.665.665-1.076 1.332-1.382 2.119-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.787.717 1.454 1.382 2.119.665.665 1.332 1.076 2.119 1.382.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.787-.306 1.454-.717 2.119-1.382.665-.665 1.076-1.332 1.382-2.119.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.787-.717-1.454-1.382-2.119-.665-.665-1.332-1.076-2.119-1.382-.763-.296-1.634-.497-2.911-.554-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    ) },
    { name: 'Facebook', url: 'https://www.facebook.com/dietniai', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    ) },
    { name: 'YouTube', url: 'https://www.youtube.com/@DietniAI', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ) },
    { name: 'TikTok', url: 'https://www.tiktok.com/@dietniai', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.57.51 3.51 1.44.64.63 1.12 1.41 1.39 2.27.08.26.13.52.15.79.03.49.03.98.03 1.47 0 .1 0 .21.01.31.04.81.24 1.58.58 2.28.31.62.74 1.18 1.25 1.64.57.51 1.22.9 1.94 1.16.59.21 1.21.34 1.84.38.21.01.42.02.63.03.11 0 .22.01.33.01v4.49c-.21 0-.41 0-.62-.01-.73-.03-1.46-.15-2.16-.36-1.14-.34-2.16-.96-2.98-1.8-.39-.4-.73-.85-1.01-1.34-.1-.17-.19-.35-.27-.53V15.5c0 .64-.13 1.27-.37 1.86-.29.7-.72 1.32-1.27 1.83-.55.51-1.21.9-1.92 1.15-1.07.38-2.22.45-3.33.2-1.01-.23-1.94-.74-2.69-1.46-.74-.71-1.28-1.61-1.56-2.59-.22-.76-.28-1.55-.17-2.33.15-1.04.57-2.01 1.23-2.82.72-.88 1.67-1.52 2.74-1.84 1.05-.31 2.16-.3 3.19.04.53.18 1.03.44 1.47.79v-4.59c-.49-.22-.97-.47-1.43-.76-.46-.29-.89-.62-1.26-1-.41-.42-.76-.9-1.02-1.42-.26-.52-.44-1.07-.53-1.64-.1-.65-.11-1.31-.03-1.96.07-.58.21-1.15.44-1.69.21-.49.5-.94.85-1.34.37-.43.81-.8 1.3-.1.17-.14.34-.27.52-.39.56-.37 1.17-.65 1.81-.82.3-.08.61-.14.92-.17.31-.03.62-.04.93-.03z"/></svg>
    ) },
  ];

  return (
    <footer className="bg-brand-green text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partner Logos Row */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10 text-center md:text-left">Supported by & Integrated with</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-10 lg:gap-16">
            
            {/* PayPal Icon */}
            <div className="flex items-center gap-3 group cursor-default opacity-80 hover:opacity-100 transition-all duration-300">
              <div className="bg-white/10 p-2 rounded-xl border border-white/5">
                <svg className="h-6 w-auto fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.723a.641.641 0 0 1 .633-.54h7.02c3.706 0 6.028 1.833 5.483 5.34-.33 2.126-1.545 3.51-3.6 4.148-1.583.493-3.415.424-4.825.424h-.47a.641.641 0 0 0-.633.54l-.794 5.06a.641.641 0 0 1-.632.542zm9.338-11.75c.348-2.253-1.045-3.664-3.528-3.664H8.46l-1.372 8.736c.036 0 .07 0 .108 0h1.164c.556 0 1.05-.403 1.137-.954l.43-2.738a1.122 1.122 0 0 1 1.107-.948h.81c2.14 0 3.75-.826 4.218-3.432z"/>
                </svg>
              </div>
              <span className="font-black text-xl tracking-tighter text-white">PayPal</span>
            </div>

            {/* OpenAI Icon */}
            <div className="flex items-center gap-3 group cursor-default opacity-80 hover:opacity-100 transition-all duration-300">
              <div className="bg-white/10 p-2 rounded-xl border border-white/5">
                <svg className="h-6 w-auto fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9022 6.0462 6.0462 0 0 0-4.3439-3.1786 6.0712 6.0712 0 0 0-5.112.9818 6.0462 6.0462 0 0 0-3.3213 1.405 6.0712 6.0712 0 0 0-2.3168 4.2539 6.0462 6.0462 0 0 0-1.405 3.3213 6.0712 6.0712 0 0 0 .9818 5.112 6.0462 6.0462 0 0 0 3.1786 4.3439 6.0712 6.0712 0 0 0 4.9022.5153 6.0462 6.0462 0 0 0 4.3439 3.1786 6.0712 6.0712 0 0 0 5.112-.9818 6.0462 6.0462 0 0 0 3.3213-1.405 6.0712 6.0712 0 0 0 2.3168-4.2539 6.0462 6.0462 0 0 0 1.405-3.3213 6.0712 6.0712 0 0 0-.9818-5.112ZM13.8123 21.0772a4.4444 4.4444 0 0 1-2.551-.8016l.1233-.0707 5.4332-3.136a.8123.8123 0 0 0 .4062-.7036v-7.6625l2.4277 1.4013a4.4172 4.4172 0 0 1 2.1813 4.6366 4.4444 4.4444 0 0 1-2.5207 3.6558l-5.5003 3.1798Zm-9.2771-2.0401a4.4444 4.4444 0 0 1-1.2523-2.3667 4.4172 4.4172 0 0 1 .4367-3.1256l.1233.0707 5.4332-3.136a.8123.8123 0 0 0 .8123 0l6.6358-3.8312v2.8026a4.4172 4.4172 0 0 1-2.1813 4.6366l-5.5003 3.1798a4.4444 4.4444 0 0 1-4.5076-.4367l-.0001-.0655Zm-2.85-10.4351a4.4444 4.4444 0 0 1 1.2987-2.3418l.1233.0707 5.4332-3.136a.8123.8123 0 0 0 .4062.1032h.0001l.0001.0001a.8123.8123 0 0 0 .4062-.1032l6.6358-3.8312-1.2016 2.0812a4.4172 4.4172 0 0 1-4.6366 2.1813l-6.3601 0a4.4444 4.4444 0 0 1-2.1001-1.2987Zm15.4664-2.1648l-5.4332-3.136a.8123.8123 0 0 0-.8123 0l-6.6358 3.8312v-2.8026a4.4172 4.4172 0 0 1 2.1813-4.6366l5.5003-3.1798a4.4444 4.4444 0 0 1 4.5076.4367l.1233.0707v7.6625a.8123.8123 0 0 0-.4062.7036l-1.0001.0501Zm4.1611 1.5492a4.4444 4.4444 0 0 1 1.2523 2.3667 4.4172 4.4172 0 0 1-.4367 3.1256l-.1233-.0707-5.4332-3.136a.8123.8123 0 0 0-.8123 0l-6.6358 3.8312v-2.8026a4.4172 4.4172 0 0 1 2.1813-4.6366l5.5003-3.1798a4.4444 4.4444 0 0 1 4.5076.4367l-.0001-.0655Zm-4.9601 3.2774l-6.6358 3.8312-2.4277-1.4013a4.4172 4.4172 0 0 1-2.1813-4.6366 4.4444 4.4444 0 0 1 2.5207-3.6558l5.5003-3.1798a4.4444 4.4444 0 0 1 2.551-.8016l-.1233.0707-5.4332-3.136a.8123.8123 0 0 0-.4062.7036v7.6625l1.0001.0501Z"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">OpenAI</span>
            </div>

            {/* Google Gemini Icon */}
            <div className="flex items-center gap-3 group cursor-default opacity-80 hover:opacity-100 transition-all duration-300">
              <div className="bg-white/10 p-2 rounded-xl border border-white/5">
                <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" fill="white"/>
                  <path d="M18 16L19.14 18.86L22 20L19.14 21.14L18 24L16.86 21.14L14 20L16.86 18.86L18 16Z" fill="white" fillOpacity="0.7"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Gemini</span>
            </div>

            {/* WhatsApp Integration */}
            <div className="flex items-center gap-3 group cursor-default opacity-80 hover:opacity-100 transition-all duration-300">
              <div className="bg-white/10 p-2 rounded-xl border border-white/5">
                <svg className="h-6 w-auto fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">WhatsApp</span>
            </div>

            {/* SSL Badge */}
            <div className="flex items-center gap-2 border-2 border-white/20 px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase text-white hover:border-brand-whatsapp/50 transition-colors">
              <svg className="w-4 h-4 text-brand-whatsapp" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.56 9.29-6.433 11.717A11.954 11.954 0 0110 21.222a11.954 11.954 0 01-1.567-2.504C4.56 16.29 2 11.947 2 7.001c0-.682.057-1.35.166-2.002zm7.533 10.264l5-5a1 1 0 10-1.414-1.414l-4.293 4.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" /></svg>
              SSL Verified
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-12" />
              <span className="text-3xl font-extrabold tracking-tight text-white brand-font">DietniAI</span>
            </div>
            <p className="text-xl text-white/90 max-w-sm mb-6 font-medium">
              Smart eating starts with control.
            </p>
            <p className="text-sm leading-relaxed max-w-xs mb-8 text-white/60">
              Your AI-powered nutrition assistant, accessible entirely through WhatsApp. No apps, just results.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-green hover:border-white transition-all duration-300 text-white/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 font-semibold text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Key Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="mailto:support@dietniAI.com" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Compliance</h4>
            <ul className="space-y-4 font-semibold text-sm">
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsClick}
                  className="hover:text-white transition-colors text-left w-full"
                >
                  Terms of Service
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Management</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} DietniAI Ltd. Empowering health through AI.
          </p>
          <div className="max-w-md text-center md:text-right italic leading-relaxed">
            *Actual results may vary based on your personal calorie target and commitment. 
            DietniAI is an AI tool and should be used alongside professional medical advice.
            Payments are secured by PayPal. WhatsApp is a trademark of Meta Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
