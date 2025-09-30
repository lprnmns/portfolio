export const projectsData = {
  'zenith-trader': {
    id: 'zenith-trader',
    title: 'Zenith Trader',
    description: 'Gerçek zamanlı whale cüzdan takibiyle OKX üzerinde otomatik copy trading sunan kurumsal platform.',
    fullDescription: 'Yatırımcıların büyük-balina ETH cüzdanlarını izleyip tespit edilen pozisyonları kendi hesaplarına kopyalamalarını sağlamak.',
    gradient: 'from-blue-500 to-cyan-500',
    demoUrl: '#',
    githubUrl: '#',
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      backend: ['Node.js', 'Express', 'Prisma', 'Zod'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Docker', 'Playwright'],
    },
    apis: [
      {
        name: 'Zerion API',
        description: 'Whale ETH cüzdanlarından zincir üstü hareketleri almak için.',
      },
      {
        name: 'OKX Exchange API',
        description: 'Tespit edilen sinyalleri OKX hesaplarında otomatik işlem olarak yürütmek için.',
      },
      {
        name: 'Google OAuth API',
        description: 'Kurumsal kullanıcı kimlik doğrulaması ve güvenli oturum yönetimi için.',
      },
      {
        name: 'Coingecko API',
        description: 'Fiyat ve piyasa verileri için yedek kaynak.',
      },
    ],
    features: [
      'Gerçek zamanlı whale cüzdan takibi',
      'Otomatik copy trading',
      'Strateji yönetimi',
      'Performans analitiği',
      'Güvenli kullanıcı kimlik doğrulaması',
    ],
  },
  'lokaskor-pro': {
    id: 'lokaskor-pro',
    title: 'LokaSkor Pro',
    description: 'KOBİ\'ler ve girişimciler için yapay zeka destekli, veri-odaklı lokasyon analizi ve skorlama platformu.',
    fullDescription: 'Yapay zeka desteği ile lokasyon analizi yaparak, girişimcilere optimal konumlar önerir.',
    gradient: 'from-emerald-500 to-teal-500',
    demoUrl: '#',
    githubUrl: '#',
    technologies: {
      frontend: ['React', 'TypeScript'],
      backend: ['Python', 'C#'],
      database: ['SQL'],
      tools: [],
    },
    apis: [],
    features: [
      'Yapay zeka destekli lokasyon analizi',
      'Veri-odaklı skorlama',
      'İnteraktif harita görselleştirmesi',
      'Detaylı raporlama',
    ],
  },
  'email-admin': {
    id: 'email-admin',
    title: 'Email Admin Panel',
    description: 'Gelişmiş özelliklerle donatılmış, kullanıcı dostu email yönetim sistemi.',
    fullDescription: 'Email yönetimini kolaylaştıran, modern ve kullanıcı dostu admin panel.',
    gradient: 'from-pink-500 to-rose-500',
    demoUrl: '#',
    githubUrl: '#',
    technologies: {
      frontend: ['React', 'TypeScript'],
      backend: ['Node.js'],
      database: ['PostgreSQL'],
      tools: [],
    },
    apis: [],
    features: [
      'Email kampanya yönetimi',
      'Abonelik sistemi',
      'İstatistik ve raporlama',
      'Otomatik email gönderimi',
    ],
  },
};

export const projectIds = Object.keys(projectsData);
