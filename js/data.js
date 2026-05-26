const portfolioData = {
  projects: [
    {
      id: 1,
      title: 'ElimuSight',
      description: 'AI-powered school intelligence platform — a multi-tenant SaaS that transforms raw school data into actionable insights for the CBC curriculum framework.',
      image: null,
      tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker'],
      category: ['React', 'Node.js', 'TypeScript', 'Full Stack'],
      github: 'https://github.com/elainees-devs/elimu-sight.git',
      demo: 'https://elimu-sight-la4w2m714-elaines-projects-2030e2b2.vercel.app/',
      complexity: 5,
      date: '2026-05'
    },
    {
      id: 2,
      title: 'Social Connect Platform',
      description: 'Full-stack social media platform for seamless interaction and community building, built with React 19, TanStack Router, and PostgreSQL.',
      image: null,
      tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind'],
      category: ['React', 'Node.js', 'TypeScript', 'Full Stack'],
      github: 'https://github.com/elainees-devs/CodeAlpha_SocialPlatform.git',
      demo: null,
      complexity: 4,
      date: '2026-04'
    },
    {
      id: 3,
      title: 'MarketHub E-Commerce',
      description: 'Full-stack e-commerce platform with product management, cart, orders, user auth, and a modern storefront built on the MERN-style ecosystem.',
      image: null,
      tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Express'],
      category: ['React', 'Node.js', 'TypeScript', 'Full Stack'],
      github: 'https://github.com/elainees-devs/CodeAlpha_MarketHub.git',
      demo: null,
      complexity: 4,
      date: '2026-03'
    },
    {
      id: 4,
      title: 'M-Pesa STK Push API',
      description: 'Node.js/Express backend for initiating M-Pesa STK Push payments via Safaricom\'s API with secure auth, callbacks, and error handling.',
      image: null,
      tech: ['Node.js', 'Express', 'TypeScript'],
      category: ['Node.js', 'Backend', 'TypeScript'],
      github: 'https://github.com/elainees-devs/mpesa_stk_push_app.git',
      demo: null,
      complexity: 3,
      date: '2026-02'
    },
    {
      id: 5,
      title: 'ALX Project Nexus',
      description: 'Job board platform built with Django and PostgreSQL documenting ALX ProDev backend engineering learnings with production-ready patterns.',
      image: null,
      tech: ['Python', 'Django', 'PostgreSQL'],
      category: ['Python', 'Django', 'Backend'],
      github: 'https://github.com/elainees-devs/alx_project_nexus.git',
      demo: null,
      complexity: 4,
      date: '2026-01'
    },
    {
      id: 6,
      title: 'Django Learning Lab',
      description: 'Collection of Django projects covering introduction to Django, advanced API development, security, ORM models, blogging, and social media API.',
      image: null,
      tech: ['Python', 'Django'],
      category: ['Python', 'Django', 'Backend'],
      github: 'https://github.com/elainees-devs/Alx_DjangoLearnLab.git',
      demo: null,
      complexity: 3,
      date: '2025-12'
    },
    {
      id: 7,
      title: 'DevOps Projects',
      description: 'Collection of DevOps and shell scripting projects covering advanced shell operations, automation, and infrastructure fundamentals.',
      image: null,
      tech: ['Shell', 'DevOps'],
      category: ['Backend', 'DevOps'],
      github: 'https://github.com/elainees-devs/ALXprodev-Devops.git',
      demo: null,
      complexity: 2,
      date: '2025-11'
    }
  ],

  skills: {
    frontend: [
      { name: 'HTML5', icon: 'devicon-html5-plain', level: 'Expert' },
      { name: 'CSS3', icon: 'devicon-css3-plain', level: 'Expert' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'Expert' },
      { name: 'React.js', icon: 'devicon-react-original', level: 'Advanced' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', level: 'Advanced' },
      { name: 'Redux', icon: 'devicon-redux-original', level: 'Intermediate' },
      { name: 'TanStack Query', icon: null, level: 'Intermediate' }
    ],
    backend: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 'Advanced' },
      { name: 'Express.js', icon: 'devicon-express-original', level: 'Advanced' },
      { name: 'Python', icon: 'devicon-python-plain', level: 'Intermediate' },
      { name: 'Django', icon: 'devicon-django-plain', level: 'Intermediate' }
    ],
    database: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 'Advanced' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 'Intermediate' }
    ],
    devops: [
      { name: 'Git', icon: 'devicon-git-plain', level: 'Expert' },
      { name: 'GitHub Actions', icon: 'devicon-github-original', level: 'Intermediate' },
      { name: 'Docker', icon: 'devicon-docker-plain', level: 'Intermediate' },
      { name: 'Swagger/OpenAPI', icon: null, level: 'Intermediate' },
      { name: 'Shell/Bash', icon: 'devicon-bash-plain', level: 'Intermediate' }
    ]
  },

  testimonials: [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Engineer, TechCorp',
      quote: 'Exceptional backend architecture skills. Delivered a scalable API that handled 10x our expected load without a hitch.'
    },
    {
      name: 'James Okonkwo',
      role: 'Product Manager, StartupXYZ',
      quote: 'Rare combination of technical depth and clear communication. Always thinks about maintainability and business impact.'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Developer, DevStudio',
      quote: 'Quick learner who writes production-ready code. Took ownership of the authentication system and delivered ahead of schedule.'
    }
  ],

  stats: [
    { number: 15, label: 'Technologies Learned', suffix: '+' },
    { number: 12, label: 'Projects Completed', suffix: '+' },
    { number: 30, label: 'APIs Built', suffix: '+' },
    { number: 8, label: 'Backend Systems Designed', suffix: '+' }
  ]
};
