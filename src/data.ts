const data = {
  name: 'Obumuneme Dennis Offordile',
  title: 'Aspiring Fullstack Engineer & Content Creator',
  contact: {
    location: 'Enugu, 401107',
    email: 'offordiledennis4@gmail.com',
    phone: '08081240702',
    alternatePhone: '08107596337',
    linkedin: 'https://www.linkedin.com/in/obumuneme-offordile-426504363/',
    github: 'https://github.com/Donkadriel/',
    youtube: 'https://www.youtube.com/@donkariel_'
  },
  profile:
    'Aspiring Fullstack Engineer with hands-on experience in web development, penetration testing, and cloud engineering. Passionate about creating and developing meaningful products that solve real-world problems — from responsive frontends to secure, scalable backends.',
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      school: 'Enugu State University of Science and Technology, Enugu, Nigeria',
      period: 'October 2024 - Present'
    }
  ],
  technicalSkills: [
    { category: 'Security', skills: ['Linux', 'Bash & Python scripting', 'Penetration testing (Nmap, Metasploit, Burp, Nessus)', 'Ethical Hacking & Vulnerability Assessment', 'Operating system virtualization', 'DNS configuration'] },
    { category: 'Web Development', skills: ['HTML, CSS, JavaScript', 'React & TypeScript', 'Tailwind CSS', 'Node.js'] },
    { category: 'Cloud & DevOps', skills: ['Docker', 'AWS basics', 'Git & CI/CD'] }
  ],
  experience: [
    {
      company: 'Septa',
      role: 'Cloud Engineering & Software Testing Trainee',
      period: '2025 - Present',
      details: [
        'Conducting software testing and quality assurance to ensure product reliability.',
        'Working with cloud engineering tools and platforms.',
        'Collaborating with development teams to improve software deliverables.'
      ]
    },
    {
      company: 'Septa',
      role: 'Software Development Trainee',
      period: '2024',
      details: [
        'Recreated an LMS login page using HTML and CSS.',
        'Converted Figma designs into functional webpages.',
        'Built profile card interfaces with responsive design.'
      ]
    },
    {
      company: 'Cybersafe Foundation',
      role: 'Penetration Testing Trainee',
      period: '2023',
      details: [
        'Utilized penetration testing methodologies across applications and networks.',
        'Performed vulnerability scanning and exploitation to identify security weaknesses.',
        'Conducted packet analysis (HTTP, SMTP, FTP) and threat reconnaissance.',
        'Collaborated across teams to improve security posture.'
      ]
    },
    {
      company: 'Learnable',
      role: 'Blockchain Web Development Trainee',
      period: '2024',
      details: [
        'Built responsive sites using HTML, CSS (Flexbox) and JavaScript.',
        'Implemented interactive UI elements and login workflows.',
        'Deployed projects to Netlify and GitHub Pages.'
      ]
    }
  ],
  projects: [
    {
      title: 'Septa Software Development Projects',
      items: [
        { text: 'Recreated a LMS login page using HTML and CSS', url: 'https://donkadriel.github.io/Septa_login' },
        { text: 'Converted a Figma design into a functional webpage', url: 'https://donkadriel.github.io/Breakio' },
        { text: 'Built a Profile Card interface showcasing user information and design precision', url: 'https://donkadriel.github.io/Profile_card' }
      ]
    },
    {
      title: 'Cybersafe Foundation Projects',
      items: [
        { text: 'Hunt breached credentials with breach-parse.' },
        { text: 'Created EC2 servers and connected via SSH tools.' },
        { text: 'VirtualBox environment setup and access.' }
      ]
    },
    {
      title: 'Learnable Projects',
      items: [
        { text: 'Recreated and deployed a journal web application', url: 'https://donkadriels-journal.netlify.app' },
        { text: 'Developed a LMS welcome page', url: 'https://amadea-proj.netlify.app/page3' },
        { text: 'Login page and authentication interface.' },
        { text: 'E-commerce website implementation.' },
        { text: 'Responsive redesigns and LMS welcome page.' }
      ]
    }
  ],
  certifications: [
    {
      title: 'TryHackMe Learning Path',
      items: ['Linux Fundamentals', 'Metasploit', 'Burp Suite']
    },
    {
      title: 'Cybersafe Foundation',
      items: ['Penetration Testing', 'Digital Literacy', 'Cybersecurity Awareness']
    },
    {
      title: 'Learnable',
      items: ['HTML', 'CSS', 'JavaScript', 'Web3 Fundamentals']
    }
  ],
  interests: [
    'Cybersecurity research & threat analysis',
    'Open-source contribution',
    'Continuous learning & skill development',
    'Technical writing & documentation'
  ]
}

export default data
