import { useState, useEffect } from 'react';
import { Terminal, Github, Mail, Link as LinkIcon, ChevronRight, Globe2Icon } from 'lucide-react';
import image from './assets/profile.png';
function App() {
  const [glitchText, setGlitchText] = useState('');
  const originalText = '> AYAZMIRZA54.EXE';

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let interval: number;
    
    const startGlitchEffect = () => {
      let counter = 0;
      interval = setInterval(() => {
        const randomText = Array(originalText.length)
          .fill(0)
          .map((_, i) => 
            counter > i ? originalText[i] : chars[Math.floor(Math.random() * chars.length)]
          )
          .join('');
        
        setGlitchText(randomText);
        counter++;
        
        if (counter > originalText.length) {
          clearInterval(interval);
          setGlitchText(originalText);
        }
      }, 50);
    };

    startGlitchEffect();
    return () => clearInterval(interval);
  }, []);

  const [links] = useState([
    {
      title: '> EXPLOIT_DATABASE',
      url: 'https://ayazmirza.vercel.app'
    },
    {
      title: '> SECRET_PROJECTS',
      url: 'https://www.aigadgets.show'
    },
   {
      title: '> SECRET AI LAB',
      url: 'https://www.aigadgets.show'
    },
  {
      title: '> SECRET DEVOPS LAB',
      url: 'https://www.devopslab.vercel.app'
    },
  {
      title: '> SECRET BLOG LAB',
      url: 'https://dev.to/ayazmirza54'
    },
{
title: '> SECRET SKILLS FOUNDARY',
url: 'https://ayazmirza.vercel.app#skills'
},
{
title: '> WORK KEX.LOG',
url: 'https://ayazmirza.vercel.app#workexp'
}
  ]);

  const [socials] = useState([
    {
      icon: Terminal,
      url: 'https://github.com/ayazmirza54',
      label: 'Terminal Access'
    },
    {
      icon: Github,
      url: 'https://github.com/ayazmirza54',
      label: 'Github Profile'
    },
    {
      icon: Mail,
      url: 'mailto:ayazmirza54@email.com',
      label: 'Secure Email'
    },
    {
      icon: LinkIcon,
      url: 'https://www.linkedin.com/in/ayazmirza54/',
      label: 'Encrypted Channel'
    },
    {
      icon: Globe2Icon,
      url: 'http://g.dev/ayazmirza54',
      label: 'Google dev profile'
    }
  ]);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen matrix-bg flex flex-col items-center px-4 py-12 text-[#4AF626]">
      {/* Profile Section */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#4AF626] border-glow mb-4 relative">
        <img
        src={image} 
          alt="Profile"
          className="w-full h-full object-cover brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-[#4AF626] opacity-20"></div>
      </div>

      {/* Name and Bio */}
      <h1 className="text-2xl font-mono font-bold mb-2 text-glow">{glitchText}</h1>
      <p className="font-mono text-center mb-8 max-w-sm opacity-80">
        {"<UNAUTHORIZED_ACCESS_GRANTED />"}
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mb-12">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#4AF626] rounded-lg p-3 hover:bg-[#4AF626] hover:bg-opacity-20 transition-all duration-300 group"
            >
              <Icon 
                size={20} 
                className="group-hover:animate-pulse"
              />
            </a>
          );
        })}
      </div>

      {/* Link Buttons */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => handleLinkClick(link.url)}
            className="w-full group border border-[#4AF626] bg-black bg-opacity-50 rounded-lg py-4 px-6 flex items-center justify-between hover:border-glow hover:bg-[#4AF626] hover:bg-opacity-10 transition-all duration-300"
          >
            <span className="font-mono">{link.title}</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-12 text-center font-mono">
        <p className="text-sm opacity-50">{"<SYSTEM_STATUS: ACTIVE />"}</p>
        <p className="font-bold text-glow">ENCRYPTED_CONNECTION</p>
      </div>

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,246,38,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-[#4AF626] text-opacity-50 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            >
              {Math.random().toString(36).substring(2, 3)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;