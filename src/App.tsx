import { useState, useEffect } from 'react';
import { Terminal, Github, Mail, Link as LinkIcon, ChevronRight, Globe2Icon, BookUser, Sun, Moon } from 'lucide-react';
import { ThemeProvider as MUIThemeProvider, CssBaseline, Box, AppBar, Toolbar, Typography, Button, IconButton, Card, CardContent, Stack, CardActionArea, Avatar, Container } from '@mui/material';
import materialTheme from './theme/materialTheme';
import image from './assets/profile.png';
import { useTheme, ThemeType } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [glitchText, setGlitchText] = useState('');
  const originalText = '> AYAZMIRZA54.LINKS 🔗';

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let interval: any;

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

    if (theme === 'hacker') {
      startGlitchEffect();
    } else {
      setGlitchText(originalText.replace('> ', ''));
    }

    return () => clearInterval(interval);
  }, [theme]);

  const [links] = useState([
    {
      title: '> QuerySmith - AI tool for SQL queries',
      url: 'https://query-smith.streamlit.app/'
    },
    {
      title: '> AI tools marketplace',
      url: 'https://www.aigadgets.show'
    },
    {
      title: '> Email Generator AI agent',
      url: 'http://gen-email-agent-ai.streamlit.app/'
    },
    {
      title: '> Devops scripts gereator',
      url: 'https://devopslab.streamlit.app/'
    },
    {
      title: '> Blogs by Ayaz',
      url: 'https://dev.to/ayazmirza54'
    },
    {
      title: '> Checkout my skill',
      url: 'https://ayazmirza.vercel.app#skills'
    },
    {
      title: '> Chekcout my work experience',
      url: 'https://ayazmirza.vercel.app#workexp'
    }
  ]);

  const [socials] = useState([
    {
      icon: Github,
      url: 'https://github.com/ayazmirza54',
      label: 'My github profile'
    },
    {
      icon: BookUser,
      url: 'https://ayazmirza.vercel.app',
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

  // Material UI Theme Components
  if (theme === 'material') {
    return (
      <MUIThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0.9) 100%)'
        }}>
          <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
            <Toolbar>
              <IconButton
                onClick={toggleTheme}
                color="primary"
                aria-label="toggle theme"
                sx={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  border: '1px solid #53CB96',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'rgba(83, 203, 150, 0.2)',
                    transition: 'all 0.3s ease',
                  }
                }}
              >
                <Moon size={20} />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Container maxWidth="sm" sx={{ py: 4, flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
              <Avatar
                src={image}
                alt="Profile"
                sx={{
                  width: 100,
                  height: 100,
                  mb: 2,
                  border: '2px solid #53CB96',
                  boxShadow: '0 0 10px #53CB96'
                }}
              />
              <Typography

                gutterBottom
                sx={{
                  textShadow: '0 0 1px #53CB96',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                  fontSize: "24px",
                  color: '#f0f0f0',
                  '&:hover': {
                    color: '#53CB96',
                    transition: 'all 0.3s ease',
                  }
                }}
              >
                {glitchText}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={index}
                      component="a"
                      href={social.url}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{
                        border: '1px solid #53CB96',
                        p: 1.5,
                        '&:hover': {
                          backgroundColor: 'rgba(144, 202, 249, 0.1)',
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 0 8px #53CB96',
                        }
                      }}
                    >
                      <Icon size={20} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Box>

            <Stack spacing={2}>
              {links.map((link, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  sx={{
                    border: '1px solid #53CB96',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 10px #53CB96',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <CardActionArea onClick={() => handleLinkClick(link.url)}>
                    <CardContent
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 2.5
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontWeight: 500,
                          color: '#f0f0f0'
                        }}
                      >
                        {link.title.replace('> ', '')}
                      </Typography>
                      <ChevronRight
                        size={20}
                        style={{
                          color: '#53CB96',
                          transition: 'transform 0.3s ease'
                        }}
                        className="chevron-icon"
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Stack>
          </Container>

          <Box component="footer" sx={{ py: 3, textAlign: 'center', opacity: 0.8 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'JetBrains Mono, monospace' }}>
              © {new Date().getFullYear()} Ayaz Mirza
            </Typography>
          </Box>
        </Box>
      </MUIThemeProvider>
    );
  }

  // Hacker Theme
  return (
    <div className="min-h-screen matrix-bg flex flex-col items-center px-4 py-12 text-[#4AF626]">
      {/* Theme Switcher */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 border border-[#4AF626] rounded-lg p-2 hover:bg-[#4AF626] hover:bg-opacity-20 transition-all duration-300"
        aria-label="Switch to Material UI theme"
      >
        <Sun size={20} />
      </button>

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
        <div className="absolute top-0 left-0 w-full h-full opacity-70">
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