export type Locale = "ru" | "en" | "mn" | "tg" | "uz" | "az" | "tk" | "ky" | "fa" | "ps";

export const localeOptions: Array<{ code: Locale; label: string; short: string }> = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
  { code: "mn", label: "Монгол", short: "MN" },
  { code: "tg", label: "Тоҷикӣ", short: "TJ" },
  { code: "uz", label: "O'zbek", short: "UZ" },
  { code: "az", label: "Azərbaycanca", short: "AZ" },
  { code: "tk", label: "Türkmençe", short: "TM" },
  { code: "ky", label: "Кыргызча", short: "KG" },
  { code: "fa", label: "دری", short: "DR" },
  { code: "ps", label: "پښتو", short: "PS" },
] as const;

type LinkItem = { label: string; href: string };
type TextCard = { title: string; description: string };
type StatItem = { value: string; label: string };
type StepItem = { step: string; title: string; description: string };
type AudienceItem = { title: string; items: string[]; cta: string };
type FaqItem = { question: string; answer: string };
type CountryItem = { name: string; note: string };

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    suffix: string;
  };
  navItems: LinkItem[];
  header: {
    cta: string;
    languages: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    chips: StatItem[];
    panelEyebrow: string;
    panelTitle: string;
    panelStatus: string;
    stackTitle: string;
    stackItems: string[];
    focusTitle: string;
    focusDescription: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    cards: TextCard[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: StepItem[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: TextCard[];
  };
  geography: {
    eyebrow: string;
    title: string;
    description: string;
    summaryValue: string;
    summaryDescription: string;
    summaryText: string;
    countries: CountryItem[];
  };
  audiences: {
    eyebrow: string;
    title: string;
    description: string;
    items: AudienceItem[];
  };
  product: {
    eyebrow: string;
    title: string;
    description: string;
    items: TextCard[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    telegramLabel: string;
    telegramHandle: string;
    formTitle: string;
    submit: string;
    fields: {
      name: string;
      company: string;
      country: string;
      telegram: string;
      details: string;
      placeholders: {
        name: string;
        company: string;
        country: string;
        telegram: string;
        details: string;
      };
    };
    emailSubject: string;
  };
  footer: {
    description: string;
    links: LinkItem[];
  };
  geographyTelegramLabel: string;
};

const sharedLinks = {
  telegram: "https://t.me/teamcash_partnerships",
  email: "mailto:partnerships@teamcash.global",
  about: "#about",
};

export const siteContent: Record<Locale, SiteContent> = {
  ru: {
    metadata: {
      title: "TeamCash | Affiliate и локальные платежные решения",
      description:
        "Премиальный landing page для affiliate и TeamCash-направления в экосистеме MelBet.",
    },
    brand: { suffix: "Agent Network" },
    navItems: [
      { label: "О продукте", href: "#about" },
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Преимущества", href: "#benefits" },
      { label: "География", href: "#geography" },
      { label: "FAQ", href: "#faq" },
      { label: "Контакты", href: "#contact" },
    ],
    header: {
      cta: "Подключиться",
      languages: "Языки",
    },
    hero: {
      eyebrow: "Affiliate & TeamCash for MelBet Ecosystem",
      titleLead: "Affiliate и TeamCash,",
      titleAccent: "собранные в premium partnership-систему",
      description:
        "Мы развиваем две ключевые модели для MelBet-направления: Affiliate Program для партнерского роста через трафик и TeamCash для локальных депозитов, выводов и платежной операционки с региональной экспертизой.",
      primaryCta: "Подключиться",
      secondaryCta: "Обсудить партнерство",
      chips: [
        { value: "10 000+", label: "партнеров в глобальной сети" },
        { value: "$5M+", label: "выплаченных комиссий по партнерским программам" },
        { value: "24/7", label: "поддержка партнеров и агентской сети" },
      ],
      panelEyebrow: "TeamCash Partnership Layer",
      panelTitle: "Контур для affiliate-роста, локальных операций и масштабируемой монетизации",
      panelStatus: "Active",
      stackTitle: "Value Stack",
      stackItems: [
        "Affiliate Program и TeamCash в одной системе",
        "Локальная экспертиза по каждой стране и каждому рынку",
        "Поддержка команды на старте, в операционке и в росте",
      ],
      focusTitle: "Focus",
      focusDescription:
        "TeamCash объединяет affiliate-рост, локальные команды и платежную операционку в одну ясную модель роста для MelBet-направления.",
    },
    about: {
      eyebrow: "About",
      title: "Две модели роста в одной партнерской системе",
      description:
        "Мы сохраняем сильную визуальную и продуктовую подачу, но внутри строим понятную систему из двух направлений: affiliate для роста и TeamCash для локальной платежной операционки.",
      cards: [
        {
          title: "Affiliate Program",
          description:
            "Подходит для партнеров, которые хотят зарабатывать на трафике, промо-кодах и performance-модели привлечения аудитории.",
        },
        {
          title: "TeamCash Program",
          description:
            "Фокус на локальных депозитах и выводах, быстрой обработке операций и удобной работе на рынке конкретной страны.",
        },
        {
          title: "Региональная экспертиза",
          description:
            "Каждое решение адаптируется под локальные особенности: рынок, платежное поведение, пользовательские привычки и операционную скорость.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Как строится подключение",
      description:
        "Мы делаем вход в систему понятным: быстро определяем модель, выстраиваем процесс и сопровождаем запуск до рабочего результата.",
      steps: [
        {
          step: "01",
          title: "Выбираем направление",
          description:
            "Определяем, какая модель подходит лучше: affiliate для роста через трафик или TeamCash для локальной платежной операционки.",
        },
        {
          step: "02",
          title: "Настраиваем рабочий контур",
          description:
            "Структурируем процессы, коммуникацию и формат взаимодействия так, чтобы запуск был быстрым и управляемым.",
        },
        {
          step: "03",
          title: "Запускаем партнерскую модель",
          description:
            "Команда сопровождает запуск, помогает удерживать качество исполнения и дает инструменты для роста в affiliate или TeamCash-направлении.",
        },
        {
          step: "04",
          title: "Масштабируем результат",
          description:
            "Когда модель подтверждает эффективность, расширяем покрытие, усиливаем локальную сеть и наращиваем доходный потенциал без потери контроля.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Почему модель работает стабильно",
      description:
        "Мы соединяем revenue-подход, локальную операционную экспертизу и понятную партнерскую логику в одну масштабируемую систему.",
      items: [
        {
          title: "Проверенная revenue-модель",
          description:
            "Партнерская система построена так, чтобы монетизация была понятной, прозрачной и масштабируемой.",
        },
        {
          title: "Скорость операций",
          description:
            "Оптимизированные процессы для быстрых депозитов и выводов без лишней нагрузки на команду.",
        },
        {
          title: "Локальная адаптация",
          description:
            "Сценарии строятся с учетом реального поведения пользователей и особенностей каждой страны.",
        },
        {
          title: "Понятная масштабируемость",
          description:
            "Модель легко расширять по регионам, партнерам и нагрузке, сохраняя прозрачность управления.",
        },
        {
          title: "Поддержка 24/7",
          description:
            "Мы не просто подключаем, а сопровождаем на старте, в операционке и при дальнейшем росте.",
        },
        {
          title: "Глобальный охват",
          description:
            "Команда и процессы готовы работать как часть международной партнерской сети, а не только точечно.",
        },
      ],
    },
    geography: {
      eyebrow: "Geography",
      title: "Команда с локальным присутствием в ключевых странах",
      description:
        "Наша сила не только в продукте, но и в региональном покрытии. Мы работаем там, где нужна точная адаптация под рынок, привычки пользователей и операционные реалии.",
      summaryValue: "7",
      summaryDescription: "стран в агентской сети с локальной операционной экспертизой",
      summaryText:
        "Каждая страна работает как отдельная локальная точка, но в общей системе это один связанный контур с быстрым обменом опытом, операционной поддержкой и масштабируемой моделью роста.",
      countries: [
        { name: "Монголия", note: "Сильная локальная коммуникация и понимание пользовательского поведения." },
        { name: "Таджикистан", note: "Гибкая работа с локальной динамикой рынка и агентским взаимодействием." },
        { name: "Узбекистан", note: "Фокус на масштабировании и устойчивых платежных сценариях." },
        { name: "Азербайджан", note: "Сильная операционная скорость и качественная координация процессов." },
        { name: "Туркменистан", note: "Экспертиза в точной настройке локальных операционных моделей." },
        { name: "Кыргызстан", note: "Подход, ориентированный на удобство подключения и развитие сети агентов." },
        { name: "Афганистан", note: "Внимание к надежности, устойчивости процессов и качеству сопровождения." },
      ],
    },
    audiences: {
      eyebrow: "Collaboration",
      title: "Choose Your Path",
      description: "Выберите направление, которое лучше всего подходит под ваш рынок, экспертизу и модель роста.",
      items: [
        {
          title: "Affiliate Program",
          items: [
            "Подходит тем, кто хочет зарабатывать на привлечении аудитории через промо-код и партнерскую сеть.",
            "Фокус на revenue-share, performance-подходе и масштабировании через маркетинговый трафик.",
            "Поддержка материалов, коммуникации и роста внутри партнерской модели.",
            "Хороший сценарий для тех, кто работает на охват, лидогенерацию и комьюнити.",
          ],
          cta: "Подключить affiliate",
        },
        {
          title: "TeamCash Program",
          items: [
            "Локальный агентский сценарий для работы с депозитами и выводами в своей стране.",
            "Подходит тем, кто хочет стать надежным финансовым решением для игроков на локальном рынке.",
            "Фокус на cash-операциях, скорости обработки и понятной ежедневной операционке.",
            "Прямой fit для развития TeamCash-модели и региональной агентской сети.",
          ],
          cta: "Подключить TeamCash",
        },
      ],
    },
    product: {
      eyebrow: "Product",
      title: "Что делает TeamCash сильной партнерской системой",
      description:
        "Мы сохраняем премиальную продуктовую подачу, но внутри строим понятную партнерскую механику для роста, операций и масштабирования.",
      items: [
        {
          title: "Два понятных направления",
          description:
            "Affiliate отвечает за рост через трафик и аудиторию, а TeamCash — за локальные платежные операции и удобный пользовательский путь.",
        },
        {
          title: "Фокус на deposits & withdrawals",
          description:
            "Для TeamCash именно платежные процессы остаются ключевым продуктовым контуром: скорость, удобство и локальная адаптация.",
        },
        {
          title: "Поддержка международной команды",
          description:
            "Команда помогает на старте, в операционке и в росте, чтобы партнеру было проще удерживать качество и масштабировать результат.",
        },
        {
          title: "Система для устойчивого роста",
          description:
            "Платформа и процессы позволяют наращивать покрытие, партнерскую сеть и объем операций без хаоса в управлении.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Коротко о партнерской модели",
      description: "Собрали ключевые вопросы, которые чаще всего возникают перед подключением к нашим направлениям.",
      items: [
        {
          question: "Какие форматы партнерства доступны?",
          answer:
            "Мы строим работу вокруг двух направлений: Affiliate Program для роста через трафик и TeamCash Program для локальных депозитов и выводов.",
        },
        {
          question: "Что делает TeamCash ключевым элементом модели?",
          answer:
            "TeamCash помогает организовать удобную и управляемую работу с депозитами и выводами, сохраняя скорость операций, прозрачность взаимодействия и локальную адаптацию процессов.",
        },
        {
          question: "Кому подходит TeamCash Program?",
          answer:
            "Тем, кто хочет работать как локальный платежный агент в своей стране, обрабатывать депозиты и выводы и развивать надежное финансовое решение для игроков на своем рынке.",
        },
        {
          question: "Кому подходит Affiliate Program?",
          answer:
            "Тем, кто хочет зарабатывать на привлечении игроков, работать с трафиком, промо-кодами, performance-моделью и долгосрочным ростом партнерского канала.",
        },
        {
          question: "Почему важна локальная экспертиза?",
          answer:
            "Платежное поведение, ожидания пользователей и рабочие сценарии отличаются по странам. Локальная экспертиза делает модель точнее, устойчивее и эффективнее.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Обсудим подключение",
      description:
        "Оставьте заявку, и мы свяжемся с вами, чтобы обсудить подходящее направление, страну запуска и оптимальную модель подключения.",
      telegramLabel: "Telegram",
      telegramHandle: "@teamcash_partnerships",
      formTitle: "Оставить заявку",
      submit: "Отправить запрос",
      fields: {
        name: "Имя",
        company: "Компания",
        country: "Страна",
        telegram: "Telegram / контакт",
        details: "Комментарий",
        placeholders: {
          name: "Ваше имя",
          company: "Название компании или команды",
          country: "Например, Узбекистан",
          telegram: "@username",
          details: "Напишите, какое направление вас интересует: Affiliate или TeamCash, и в какой стране вы хотите работать.",
        },
      },
      emailSubject: "Запрос на подключение к TeamCash",
    },
    footer: {
      description: "Международная команда для affiliate и локальных платежных решений в экосистеме MelBet.",
      links: [
        { label: "Telegram", href: sharedLinks.telegram },
        { label: "Email", href: sharedLinks.email },
        { label: "О продукте", href: sharedLinks.about },
      ],
    },
    geographyTelegramLabel: "Telegram",
  },
  en: {} as SiteContent,
  mn: {} as SiteContent,
  tg: {} as SiteContent,
  uz: {} as SiteContent,
  az: {} as SiteContent,
  tk: {} as SiteContent,
  ky: {} as SiteContent,
  fa: {} as SiteContent,
  ps: {} as SiteContent,
};

const ru = siteContent.ru;

siteContent.en = {
  metadata: {
    title: "TeamCash | Affiliate and Local Payment Solutions",
    description: "Premium landing page for Affiliate and TeamCash directions in the MelBet ecosystem.",
  },
  brand: { suffix: "Agent Network" },
  navItems: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "Geography", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    cta: "Connect",
    languages: "Languages",
  },
  hero: {
    eyebrow: "Affiliate & TeamCash for MelBet Ecosystem",
    titleLead: "Affiliate and TeamCash,",
    titleAccent: "combined in one premium partnership system",
    description:
      "We develop two core models for the MelBet direction: Affiliate Program for partner growth through traffic and TeamCash for local deposits, withdrawals, and payment operations backed by regional expertise.",
    primaryCta: "Connect",
    secondaryCta: "Discuss Partnership",
    chips: [
      { value: "10,000+", label: "partners across the global network" },
      { value: "$5M+", label: "paid commissions through partnership programs" },
      { value: "24/7", label: "support for partners and the agent network" },
    ],
    panelEyebrow: "TeamCash Partnership Layer",
    panelTitle: "A unified framework for affiliate growth, local operations, and scalable monetization",
    panelStatus: "Active",
    stackTitle: "Value Stack",
    stackItems: [
      "Affiliate Program and TeamCash within one system",
      "Local expertise for every country and every market",
      "Team support from launch through scale",
    ],
    focusTitle: "Focus",
    focusDescription:
      "TeamCash brings affiliate growth, local teams, and payment operations together into one clear growth model for the MelBet direction.",
  },
  about: {
    eyebrow: "About",
    title: "Two growth models inside one partnership system",
    description:
      "We keep a strong premium product presentation while building a clear internal structure with two directions: affiliate for growth and TeamCash for local payment operations.",
    cards: [
      {
        title: "Affiliate Program",
        description:
          "Built for partners who want to earn through traffic, promo codes, and a performance-driven audience acquisition model.",
      },
      {
        title: "TeamCash Program",
        description:
          "Focused on local deposits and withdrawals, fast transaction handling, and efficient work within a specific market.",
      },
      {
        title: "Regional Expertise",
        description:
          "Every solution is adapted to local market specifics, payment behavior, user habits, and operational speed.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How onboarding works",
    description:
      "We make entry into the system clear: quickly define the right model, build the process, and support launch through to real operating results.",
    steps: [
      {
        step: "01",
        title: "Choose the direction",
        description:
          "We define which model fits better: affiliate for traffic-driven growth or TeamCash for local payment operations.",
      },
      {
        step: "02",
        title: "Build the operating setup",
        description:
          "We structure the process, communication, and interaction model so launch is fast and manageable.",
      },
      {
        step: "03",
        title: "Launch the partnership model",
        description:
          "Our team supports the launch, helps maintain execution quality, and provides tools for growth in either affiliate or TeamCash.",
      },
      {
        step: "04",
        title: "Scale the result",
        description:
          "Once the model proves effective, we expand coverage, strengthen the local network, and increase revenue potential without losing control.",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Why the model works consistently",
    description:
      "We combine a revenue-driven approach, local operational expertise, and a clear partnership logic into one scalable system.",
    items: [
      {
        title: "Proven revenue model",
        description: "The partnership structure is designed to make monetization clear, transparent, and scalable.",
      },
      {
        title: "Operational speed",
        description: "Optimized processes for faster deposits and withdrawals without unnecessary load on the team.",
      },
      {
        title: "Local adaptation",
        description: "Scenarios are built around real user behavior and the specifics of each country.",
      },
      {
        title: "Clear scalability",
        description: "The model can expand by region, partner, and workload while keeping management transparent.",
      },
      {
        title: "24/7 support",
        description: "We do not just connect partners. We stay involved at launch, in operations, and during growth.",
      },
      {
        title: "Global reach",
        description: "The team and processes are built to operate as part of a wider international partnership network.",
      },
    ],
  },
  geography: {
    eyebrow: "Geography",
    title: "A team with local presence across key countries",
    description:
      "Our strength is not only in the product, but also in regional coverage. We operate where precise adaptation to market realities is essential.",
    summaryValue: "7",
    summaryDescription: "countries in the agent network with local operational expertise",
    summaryText:
      "Each country works as an independent local point, but within the overall system it remains part of one connected operating framework with fast knowledge exchange and scalable growth.",
    countries: [
      { name: "Mongolia", note: "Strong local communication and deep understanding of user behavior." },
      { name: "Tajikistan", note: "Flexible work with local market dynamics and agent interaction." },
      { name: "Uzbekistan", note: "Focused on scale and sustainable payment scenarios." },
      { name: "Azerbaijan", note: "Strong operational speed and high-quality process coordination." },
      { name: "Turkmenistan", note: "Expertise in precise setup of local operating models." },
      { name: "Kyrgyzstan", note: "A model built around easy onboarding and network development." },
      { name: "Afghanistan", note: "Attention to reliability, process stability, and quality support." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "Choose Your Path",
    description: "Select the direction that best fits your market, expertise, and growth model.",
    items: [
      {
        title: "Affiliate Program",
        items: [
          "Designed for those who want to earn through audience acquisition, promo codes, and partner networks.",
          "Focused on revenue share, performance logic, and scaling through marketing traffic.",
          "Includes support with materials, communication, and growth inside the partnership model.",
          "A strong fit for teams working with reach, lead generation, and communities.",
        ],
        cta: "Join Affiliate",
      },
      {
        title: "TeamCash Program",
        items: [
          "A local agent model for working with deposits and withdrawals in your country.",
          "Suitable for teams that want to become a reliable financial solution for players in their market.",
          "Focused on cash operations, processing speed, and clear daily operations.",
          "A direct fit for growing the TeamCash model and the regional agent network.",
        ],
        cta: "Join TeamCash",
      },
    ],
  },
  product: {
    eyebrow: "Product",
    title: "What makes TeamCash a strong partnership system",
    description:
      "We keep the premium product feel while building a clear internal partnership mechanism for growth, operations, and scale.",
    items: [
      {
        title: "Two clear directions",
        description:
          "Affiliate drives growth through traffic and audience, while TeamCash handles local payment operations and user convenience.",
      },
      {
        title: "Focus on deposits & withdrawals",
        description:
          "For TeamCash, payment processes remain the core product layer: speed, convenience, and local adaptation.",
      },
      {
        title: "International team support",
        description:
          "The team helps at launch, in operations, and during growth so partners can maintain quality while scaling.",
      },
      {
        title: "A system for sustainable growth",
        description:
          "The platform and processes allow expansion of coverage, partner networks, and operational volume without chaos.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Short answers about the partnership model",
    description: "We collected the key questions that usually come up before joining our directions.",
    items: [
      {
        question: "Which partnership formats are available?",
        answer:
          "We work around two core directions: Affiliate Program for traffic-driven growth and TeamCash Program for local deposits and withdrawals.",
      },
      {
        question: "What makes TeamCash a key part of the model?",
        answer:
          "TeamCash helps organize deposits and withdrawals in a way that keeps operations fast, transparent, and adapted to local market realities.",
      },
      {
        question: "Who is TeamCash Program for?",
        answer:
          "It fits teams that want to work as local payment agents in their country, handling deposits and withdrawals while building a reliable financial solution for players.",
      },
      {
        question: "Who is Affiliate Program for?",
        answer:
          "It is designed for those who want to earn by attracting players, working with traffic, promo codes, performance models, and long-term partner growth.",
      },
      {
        question: "Why does local expertise matter?",
        answer:
          "Payment behavior, user expectations, and working scenarios differ by country. Local expertise makes the model more precise, stable, and effective.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s discuss onboarding",
    description:
      "Leave a request and we will contact you to discuss the right direction, launch country, and the best onboarding model.",
    telegramLabel: "Telegram",
    telegramHandle: "@teamcash_partnerships",
    formTitle: "Submit a request",
    submit: "Send Request",
    fields: {
      name: "Name",
      company: "Company",
      country: "Country",
      telegram: "Telegram / contact",
      details: "Comment",
      placeholders: {
        name: "Your name",
        company: "Company or team name",
        country: "For example, Uzbekistan",
        telegram: "@username",
        details: "Tell us which direction interests you: Affiliate or TeamCash, and in which country you want to operate.",
      },
    },
    emailSubject: "TeamCash connection request",
  },
  footer: {
    description: "An international team for affiliate and local payment solutions in the MelBet ecosystem.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "About", href: sharedLinks.about },
    ],
  },
  geographyTelegramLabel: "Telegram",
};

siteContent.mn = {
  ...ru,
  metadata: {
    title: "TeamCash | Affiliate болон локал төлбөрийн шийдлүүд",
    description: "MelBet экосистем дэх Affiliate болон TeamCash чиглэлийн premium landing page.",
  },
  brand: { suffix: "Agent Network" },
  navItems: [
    { label: "Бүтээгдэхүүн", href: "#about" },
    { label: "Хэрхэн ажилладаг", href: "#how-it-works" },
    { label: "Давуу тал", href: "#benefits" },
    { label: "Газарзүй", href: "#geography" },
    { label: "Түгээмэл асуулт", href: "#faq" },
    { label: "Холбоо барих", href: "#contact" },
  ],
  header: { cta: "Холбогдох", languages: "Хэл" },
  hero: {
    ...ru.hero,
    titleLead: "Affiliate ба TeamCash,",
    titleAccent: "premium partnership системд нэгтгэгдсэн",
    description:
      "Бид MelBet чиглэлд хоёр үндсэн моделиор ажилладаг: траффик дээр өсөлт авчрах Affiliate Program болон локал хадгаламж, зарлага, төлбөрийн үйл ажиллагаанд чиглэсэн TeamCash.",
    primaryCta: "Холбогдох",
    secondaryCta: "Түншлэлийг хэлэлцэх",
    chips: [
      { value: "10 000+", label: "дэлхийн түншийн сүлжээ" },
      { value: "$5M+", label: "түншлэлээр олгосон комисс" },
      { value: "24/7", label: "түншүүд ба агентуудад дэмжлэг" },
    ],
    panelTitle: "affiliate өсөлт, локал үйл ажиллагаа, өргөжих орлогын нэгдсэн контур",
    stackItems: [
      "Affiliate Program ба TeamCash нэг системд",
      "Улс бүрийн локал зах зээлийн ойлголт",
      "Эхлэлээс өсөлт хүртэл багийн дэмжлэг",
    ],
    focusDescription:
      "TeamCash нь affiliate өсөлт, локал багууд болон төлбөрийн үйл ажиллагааг MelBet чиглэлд нэг ойлгомжтой өсөлтийн модельд нэгтгэдэг.",
  },
  about: {
    eyebrow: "About",
    title: "Нэг түншлэлийн систем доторх хоёр өсөлтийн модель",
    description:
      "Бид хүчтэй визуал болон бүтээгдэхүүний чанарыг хадгалж, дотор нь affiliate өсөлт ба TeamCash локал төлбөрийн үйл ажиллагааг ойлгомжтой байдлаар нэгтгэдэг.",
    cards: [
      {
        title: "Affiliate Program",
        description:
          "Траффик, промо код болон performance-модель ашиглан орлого олохыг хүссэн түншүүдэд тохиромжтой.",
      },
      {
        title: "TeamCash Program",
        description:
          "Локал хадгаламж, зарлага, хурдан боловсруулалт болон тухайн зах зээл дээр тогтвортой ажиллагаанд төвлөрдөг.",
      },
      {
        title: "Бүс нутгийн туршлага",
        description:
          "Шийдэл бүрийг зах зээл, төлбөрийн зан төлөв, хэрэглэгчийн зуршил, үйл ажиллагааны хурданд тохируулдаг.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Холболт хэрхэн явагддаг",
    description: "Бид тохирох загварыг хурдан сонгож, процессыг байгуулж, үр дүнтэй эхлэлийг дэмждэг.",
    steps: [
      { step: "01", title: "Чиглэлээ сонгоно", description: "Траффикаар өсөх affiliate эсвэл локал төлбөрийн TeamCash аль нь илүү тохирохыг тодорхойлно." },
      { step: "02", title: "Ажлын контурыг тохируулна", description: "Процесс, харилцаа, хамтын ажиллагааны форматыг хурдан ба удирдахад хялбар байхаар зохион байгуулна." },
      { step: "03", title: "Түншлэлийн моделио эхлүүлнэ", description: "Баг эхлэлийг дагалдан, гүйцэтгэлийн чанарыг хадгалж, өсөлтийн хэрэгслүүдийг өгнө." },
      { step: "04", title: "Үр дүнг тэлнэ", description: "Модель үр дүнгээ баталмагц хамрах хүрээг тэлж, сүлжээг бэхжүүлж, орлогын боломжийг өсгөнө." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Яагаад энэ модель тогтвортой ажилладаг вэ",
    description: "Бид орлогын логик, локал үйл ажиллагааны туршлага, түншлэлийн тодорхой системийг нэгтгэдэг.",
    items: [
      { title: "Батлагдсан revenue модель", description: "Орлого олох бүтэц нь ойлгомжтой, ил тод, масштаблахад бэлэн." },
      { title: "Үйл ажиллагааны хурд", description: "Хадгаламж, зарлагын процессыг илүү хурдан болгохоор оновчилсон." },
      { title: "Локал адаптаци", description: "Шийдлүүдийг улс бүрийн бодит хэрэглэгч, зах зээлийн онцлогт нийцүүлэн байгуулдаг." },
      { title: "Ойлгомжтой масштаб", description: "Бүс нутаг, түнш, ачааллын дагуу удирдлагаа алдахгүйгээр өргөждөг." },
      { title: "24/7 дэмжлэг", description: "Бид зөвхөн холбохгүй, эхлэлээс өсөлт хүртэл хамт явдаг." },
      { title: "Дэлхийн хамрах хүрээ", description: "Процесс, баг нь олон улсын түншлэлийн сүлжээний нэг хэсэг болж ажиллахад бэлэн." },
    ],
  },
  geography: {
    eyebrow: "Geography",
    title: "Гол орнуудад локал оролцоотой баг",
    description: "Бидний давуу тал нь зөвхөн бүтээгдэхүүнд биш, бүс нутгийн хамрах хүрээнд байдаг.",
    summaryValue: "7",
    summaryDescription: "локал үйл ажиллагааны туршлагатай зах зээл",
    summaryText: "Улс бүр нь бие даасан локал цэг боловч нийт системд нэг холбогдсон контур болж ажилладаг.",
    countries: [
      { name: "Монгол", note: "Хүчтэй локал харилцаа болон хэрэглэгчийн зан төлөвийн ойлголт." },
      { name: "Тажикстан", note: "Зах зээлийн динамик ба агентын хамтын ажиллагаанд уян хатан хандлага." },
      { name: "Узбекистан", note: "Масштаб болон тогтвортой төлбөрийн сценарид төвлөрдөг." },
      { name: "Азербайжан", note: "Үйл ажиллагааны өндөр хурд, чанартай зохицуулалт." },
      { name: "Туркменистан", note: "Локал үйл ажиллагааны загварыг нарийн тохируулах туршлага." },
      { name: "Кыргызстан", note: "Холболтын хялбар байдал ба агентын сүлжээний өсөлтөд чиглэсэн хандлага." },
      { name: "Афганистан", note: "Найдвартай, тогтвортой процесс болон чанартай дэмжлэгт анхаардаг." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "Choose Your Path",
    description: "Өөрийн зах зээл, туршлага, өсөлтийн логикт тохирох чиглэлийг сонго.",
    items: [
      {
        title: "Affiliate Program",
        items: [
          "Промо код болон түншлэлийн сүлжээгээр аудитори татаж орлого олохыг хүссэн хүмүүст тохиромжтой.",
          "Revenue-share, performance арга болон маркетингийн траффик дээр төвлөрдөг.",
          "Материал, коммуникац болон өсөлтийн дэмжлэг үзүүлнэ.",
          "Reach, лид үүсгэх болон community-тэй ажилладаг талуудад сайн тохирно.",
        ],
        cta: "Affiliate нээх",
      },
      {
        title: "TeamCash Program",
        items: [
          "Өөрийн улсад локал хадгаламж, зарлага дээр ажиллах агентын модель.",
          "Тоглогчдод найдвартай санхүүгийн шийдэл болохыг хүссэн багуудад зориулагдсан.",
          "Cash ажиллагаа, хурдан боловсруулалт, өдөр тутмын ойлгомжтой операцид төвлөрдөг.",
          "TeamCash моделио бүс нутагт өсгөхөд шууд нийцдэг.",
        ],
        cta: "TeamCash нээх",
      },
    ],
  },
  product: {
    eyebrow: "Product",
    title: "TeamCash-ийг хүчтэй түншлэлийн систем болгодог зүйл",
    description: "Дотор нь өсөлт, үйл ажиллагаа, масштаблалд зориулсан ойлгомжтой партнер механик байдаг.",
    items: [
      { title: "Хоёр ойлгомжтой чиглэл", description: "Affiliate нь траффикаар өсдөг, TeamCash нь локал төлбөрийн ажиллагааг хариуцдаг." },
      { title: "Deposits & withdrawals фокус", description: "TeamCash-ийн гол контур нь хурд, тав тух, локал тохируулгатай төлбөрийн процесс юм." },
      { title: "Олон улсын багийн дэмжлэг", description: "Эхлэл, операци, өсөлт бүр дээр баг хамт явдаг." },
      { title: "Тогтвортой өсөлтийн систем", description: "Хамрах хүрээ, түншийн сүлжээ, үйл ажиллагааны хэмжээг эмх цэгцтэйгээр өсгөнө." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Түншлэлийн моделиудын тухай товчхон",
    description: "Манай чиглэлүүдэд нэгдэхээс өмнө хамгийн түгээмэл асуудаг зүйлс.",
    items: [
      { question: "Ямар түншлэлийн форматууд бий вэ?", answer: "Бид хоёр үндсэн чиглэлтэй: траффикаар өсөх Affiliate Program ба локал хадгаламж, зарлагад чиглэсэн TeamCash Program." },
      { question: "TeamCash яагаад гол элемент вэ?", answer: "TeamCash нь хадгаламж, зарлагын процессыг хурдан, ойлгомжтой, локалд тохирсон байдлаар зохион байгуулдаг." },
      { question: "TeamCash Program хэнд тохирох вэ?", answer: "Өөрийн улсад локал төлбөрийн агент болж, тоглогчдод найдвартай санхүүгийн шийдэл бий болгохыг хүссэн хүмүүст." },
      { question: "Affiliate Program хэнд тохирох вэ?", answer: "Траффик, промо код, performance-модель дээр ажиллаж тоглогч татах замаар орлого олохыг хүссэн хүмүүст." },
      { question: "Локал туршлага яагаад чухал вэ?", answer: "Улс бүрийн хэрэглэгчийн зан төлөв, төлбөрийн дадал өөр тул локал туршлага модельд илүү өндөр үр ашиг өгдөг." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Холболтоо ярилцъя",
    description: "Маягт үлдээгээрэй, бид тохирох чиглэл, зах зээл болон холболтын загварыг хамт сонгоно.",
    telegramLabel: "Telegram",
    telegramHandle: "@teamcash_partnerships",
    formTitle: "Хүсэлт үлдээх",
    submit: "Хүсэлт илгээх",
    fields: {
      name: "Нэр",
      company: "Компани",
      country: "Улс",
      telegram: "Telegram / холбоо",
      details: "Тайлбар",
      placeholders: {
        name: "Таны нэр",
        company: "Компани эсвэл багийн нэр",
        country: "Жишээ нь, Монгол",
        telegram: "@username",
        details: "Таны сонирхож буй чиглэл болон ажиллах улсаа бичнэ үү.",
      },
    },
    emailSubject: "TeamCash холболтын хүсэлт",
  },
  footer: {
    description: "MelBet экосистем дэх affiliate болон локал төлбөрийн шийдлийн олон улсын баг.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "Бүтээгдэхүүн", href: sharedLinks.about },
    ],
  },
  geographyTelegramLabel: "Telegram",
};

siteContent.tg = {
  ...ru,
  metadata: {
    title: "TeamCash | Affiliate ва қарорҳои маҳаллии пардохт",
    description: "Landing page-и premium барои самтҳои Affiliate ва TeamCash дар экосистемаи MelBet.",
  },
  navItems: [
    { label: "Дар бораи маҳсулот", href: "#about" },
    { label: "Чӣ гуна кор мекунад", href: "#how-it-works" },
    { label: "Бартариҳо", href: "#benefits" },
    { label: "Ҷуғрофия", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "Тамос", href: "#contact" },
  ],
  header: { cta: "Пайваст шудан", languages: "Забонҳо" },
  hero: {
    ...ru.hero,
    titleLead: "Affiliate ва TeamCash,",
    titleAccent: "дар як системаи premium partnership муттаҳид шудаанд",
    description:
      "Мо ду модели асосиро барои самти MelBet рушд медиҳем: Affiliate Program барои афзоиш тавассути трафик ва TeamCash барои депозитҳо, гирифтани маблағ ва амалиёти маҳаллии пардохт.",
    primaryCta: "Пайваст шудан",
    secondaryCta: "Муҳокимаи шарикӣ",
    chips: [
      { value: "10 000+", label: "шарик дар шабакаи ҷаҳонӣ" },
      { value: "$5M+", label: "комиссияҳои пардохтшуда" },
      { value: "24/7", label: "дастгирии шарикон ва агентҳо" },
    ],
    panelTitle: "контури ягона барои affiliate-афзоиш, амалиёти маҳаллӣ ва монетизатсияи миқёспазир",
    stackItems: [
      "Affiliate Program ва TeamCash дар як система",
      "Экспертизаи маҳаллӣ барои ҳар як кишвар",
      "Дастгирии даста аз оғоз то рушд",
    ],
    focusDescription:
      "TeamCash афзоиши affiliate, дастаҳои маҳаллӣ ва амалиёти пардохтиро ба як модели равшани рушд барои MelBet муттаҳид мекунад.",
  },
  about: {
    eyebrow: "About",
    title: "Ду модели рушд дар як системаи шарикӣ",
    description:
      "Мо дохили як сохтори фаҳмо affiliate-рушд ва TeamCash-амалиёти пардохтии маҳаллиро муттаҳид мекунем.",
    cards: [
      { title: "Affiliate Program", description: "Барои шариконе, ки мехоҳанд тавассути трафик, промо-код ва performance-модел даромад гиранд." },
      { title: "TeamCash Program", description: "Барои депозитҳо ва гирифтани маблағ дар бозори маҳаллӣ, бо суръат ва идоракунии равшан." },
      { title: "Экспертизаи минтақавӣ", description: "Ҳар як қарор ба рафтори бозор, одати пардохт ва суръати амалиёт мутобиқ карда мешавад." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Чӣ гуна пайвастшавӣ сохта мешавад",
    description: "Мо моделро зуд интихоб мекунем, равандро месозем ва оғози корро то натиҷа ҳамроҳӣ менамоем.",
    steps: [
      { step: "01", title: "Самтро интихоб мекунем", description: "Муайян мекунем, ки кадом модел беҳтар аст: affiliate барои трафик ё TeamCash барои амалиёти маҳаллӣ." },
      { step: "02", title: "Контури кориро месозем", description: "Раванд, иртибот ва формати ҳамкориро тавре месозем, ки старт зуд ва идорашаванда бошад." },
      { step: "03", title: "Модели шарикиро оғоз мекунем", description: "Даста оғози корро ҳамроҳӣ намуда, ба нигоҳ доштани сифати иҷро ва рушди минбаъда кумак мекунад." },
      { step: "04", title: "Натиҷаро миқёспазир месозем", description: "Ҳангоми тасдиқи самаранокӣ мо шабака, фарогирӣ ва потенсиали даромадро васеъ мекунем." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Чаро ин модел устувор кор мекунад",
    description: "Мо логикаи даромад, таҷрибаи маҳаллӣ ва механикаи фаҳмои шарикиро дар як система муттаҳид мекунем.",
    items: [
      { title: "Revenue-модели санҷидашуда", description: "Сохтори даромад фаҳмо, шаффоф ва миқёспазир аст." },
      { title: "Суръати амалиёт", description: "Равандҳои оптимизатсияшуда барои депозит ва гирифтани маблағ." },
      { title: "Мутобиқсозии маҳаллӣ", description: "Ҳар як сценарий ба рафтори воқеии бозор ва корбар мутобиқ аст." },
      { title: "Миқёспазирии равшан", description: "Моделро метавон бидуни аз даст додани назорат васеъ кард." },
      { title: "Дастгирии 24/7", description: "Мо танҳо пайваст намекунем, балки дар ҳар марҳила ҳамроҳӣ мекунем." },
      { title: "Фарогирии байналмилалӣ", description: "Даста барои кор ҳамчун қисми шабакаи байналмилалии шарикӣ омода аст." },
    ],
  },
  geography: {
    eyebrow: "Geography",
    title: "Даста бо ҳузури маҳаллӣ дар кишварҳои калидӣ",
    description: "Қувваи мо танҳо дар маҳсулот нест, балки дар фарогирии минтақавӣ низ ҳаст.",
    summaryValue: "7",
    summaryDescription: "бозор бо экспертизаи маҳаллии амалиётӣ",
    summaryText: "Ҳар як кишвар ҳамчун нуқтаи маҳаллӣ кор мекунад, вале дар як системаи ягонаи ҳамоҳангшуда боқӣ мемонад.",
    countries: [
      { name: "Муғулистон", note: "Иртиботи қавии маҳаллӣ ва фаҳмиши рафтори корбар." },
      { name: "Тоҷикистон", note: "Кори чандир бо динамикаи бозори маҳаллӣ ва ҳамкории агентӣ." },
      { name: "Ӯзбекистон", note: "Таваҷҷуҳ ба миқёспазирӣ ва сценарияҳои устувори пардохт." },
      { name: "Озарбойҷон", note: "Суръати баланди амалиёт ва ҳамоҳангсозии босифат." },
      { name: "Туркманистон", note: "Экспертиза дар танзими дақиқи модели амалиётии маҳаллӣ." },
      { name: "Қирғизистон", note: "Равиши мутамарказ ба осонии пайвастшавӣ ва рушди шабакаи агентҳо." },
      { name: "Афғонистон", note: "Таваҷҷуҳ ба эътимод, устувории раванд ва сифати ҳамроҳӣ." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "Choose Your Path",
    description: "Самтеро интихоб кунед, ки ба бозор, таҷриба ва модели рушди шумо беҳтар мувофиқат мекунад.",
    items: [
      {
        title: "Affiliate Program",
        items: [
          "Барои онҳое, ки мехоҳанд тавассути трафик ва промо-кодҳо даромад ба даст оранд.",
          "Таваҷҷуҳ ба revenue-share, performance ва афзоиш тавассути маркетинг.",
          "Дастгирии мавод, иртибот ва рушд дар дохили модели шарикӣ.",
          "Барои reach, lead generation ва community-management мувофиқ аст.",
        ],
        cta: "Affiliate пайваст кардан",
      },
      {
        title: "TeamCash Program",
        items: [
          "Модели агентии маҳаллӣ барои кор бо депозитҳо ва гирифтани маблағ дар кишвари худ.",
          "Барои онҳое, ки мехоҳанд ҳалли боэътимоди молиявӣ барои бозигарон шаванд.",
          "Таваҷҷуҳ ба cash-амалиёт, суръати коркард ва амалиёти фаҳмои ҳаррӯза.",
          "Мувофиқ барои рушди TeamCash ва шабакаи агентии минтақавӣ.",
        ],
        cta: "TeamCash пайваст кардан",
      },
    ],
  },
  product: {
    eyebrow: "Product",
    title: "Чӣ TeamCash-ро ба системаи қавии шарикӣ табдил медиҳад",
    description: "Дар дохил механикаи равшан барои рушд, амалиёт ва миқёспазирӣ сохта шудааст.",
    items: [
      { title: "Ду самти равшан", description: "Affiliate барои рушд тавассути трафик аст, TeamCash барои амалиёти маҳаллии пардохт." },
      { title: "Таваҷҷуҳ ба deposits & withdrawals", description: "Суръат, роҳат ва мутобиқсозии маҳаллӣ асоси TeamCash мебошад." },
      { title: "Дастгирии дастаи байналмилалӣ", description: "Даста дар оғоз, амалиёт ва рушд ҳамеша ҳамроҳ аст." },
      { title: "Система барои рушди устувор", description: "Платформа имкон медиҳад, ки шабака ва ҳаҷми амалиёт бе бетартибӣ афзоиш ёбад." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Кӯтоҳ дар бораи модели шарикӣ",
    description: "Саволҳои асосие, ки пеш аз пайвастшавӣ бештар дода мешаванд.",
    items: [
      { question: "Кадом форматҳои шарикӣ дастрасанд?", answer: "Мо бо ду самт кор мекунем: Affiliate Program барои рушд тавассути трафик ва TeamCash Program барои депозит ва гирифтани маблағ." },
      { question: "Чаро TeamCash элементи калидӣ аст?", answer: "TeamCash ба роҳ мондани равшану идорашавандаи депозит ва гирифтани маблағро таъмин мекунад." },
      { question: "TeamCash Program ба кӣ мувофиқ аст?", answer: "Ба онҳое, ки мехоҳанд дар кишвари худ ҳамчун агенти маҳаллии пардохт кор кунанд." },
      { question: "Affiliate Program ба кӣ мувофиқ аст?", answer: "Ба онҳое, ки мехоҳанд тавассути ҷалби бозигарон ва performance-модель даромад гиранд." },
      { question: "Чаро экспертизаи маҳаллӣ муҳим аст?", answer: "Рафтори пардохт ва интизориҳои корбар дар ҳар кишвар фарқ мекунад, бинобар ин фаҳмиши маҳаллӣ натиҷаро беҳтар мекунад." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Пайвастшавиро муҳокима мекунем",
    description: "Дархост гузоред ва мо самт, бозор ва модели муносиби пайвастшавиро якҷо интихоб мекунем.",
    telegramLabel: "Telegram",
    telegramHandle: "@teamcash_partnerships",
    formTitle: "Дархост гузоред",
    submit: "Фиристодани дархост",
    fields: {
      name: "Ном",
      company: "Ширкат",
      country: "Кишвар",
      telegram: "Telegram / тамос",
      details: "Шарҳ",
      placeholders: {
        name: "Номи шумо",
        company: "Номи ширкат ё даста",
        country: "Масалан, Тоҷикистон",
        telegram: "@username",
        details: "Бинависед, ки ба шумо Affiliate ё TeamCash бештар мувофиқ аст ва дар кадом кишвар мехоҳед фаъолият кунед.",
      },
    },
    emailSubject: "Дархост барои пайвастшавӣ ба TeamCash",
  },
  footer: {
    description: "Дастаи байналмилалӣ барои affiliate ва қарорҳои маҳаллии пардохт дар экосистемаи MelBet.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "Маҳсулот", href: sharedLinks.about },
    ],
  },
  geographyTelegramLabel: "Telegram",
};

siteContent.uz = {
  ...ru,
  metadata: {
    title: "TeamCash | Affiliate va mahalliy to'lov yechimlari",
    description: "MelBet ekotizimidagi Affiliate va TeamCash yo'nalishlari uchun premium landing page.",
  },
  navItems: [
    { label: "Mahsulot haqida", href: "#about" },
    { label: "Qanday ishlaydi", href: "#how-it-works" },
    { label: "Afzalliklar", href: "#benefits" },
    { label: "Geografiya", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontaktlar", href: "#contact" },
  ],
  header: { cta: "Ulanish", languages: "Tillar" },
  hero: {
    ...ru.hero,
    titleLead: "Affiliate va TeamCash,",
    titleAccent: "premium partnership tizimida birlashtirilgan",
    description:
      "Biz MelBet yo'nalishi uchun ikki asosiy modelni rivojlantiramiz: trafik orqali o'sish beradigan Affiliate Program va mahalliy depozit, yechib olish hamda to'lov operatsiyalari uchun TeamCash.",
    primaryCta: "Ulanish",
    secondaryCta: "Hamkorlikni muhokama qilish",
    chips: [
      { value: "10 000+", label: "global tarmoqdagi hamkorlar" },
      { value: "$5M+", label: "to'langan komissiyalar" },
      { value: "24/7", label: "hamkorlar va agentlar uchun yordam" },
    ],
    panelTitle: "affiliate-o'sish, mahalliy operatsiyalar va kengayuvchi monetizatsiya uchun yagona kontur",
    stackItems: [
      "Affiliate Program va TeamCash bitta tizimda",
      "Har bir mamlakat bo'yicha lokal ekspertiza",
      "Boshlanishdan o'sishgacha jamoa ko'magi",
    ],
    focusDescription:
      "TeamCash affiliate-o'sish, lokal jamoalar va to'lov operatsiyalarini MelBet yo'nalishi uchun bitta aniq o'sish modeliga birlashtiradi.",
  },
  about: {
    eyebrow: "About",
    title: "Bitta hamkorlik tizimidagi ikki o'sish modeli",
    description:
      "Biz affiliate-o'sish va TeamCash mahalliy to'lov operatsiyalarini bitta tushunarli tizimda birlashtiramiz.",
    cards: [
      { title: "Affiliate Program", description: "Trafik, promo-kod va performance-model orqali daromad olishni istagan hamkorlar uchun." },
      { title: "TeamCash Program", description: "Mahalliy bozor uchun depozitlar, yechib olish va tez operatsion ishlov berishga yo'naltirilgan." },
      { title: "Mintaqaviy ekspertiza", description: "Har bir yechim bozor xatti-harakati va to'lov odatlariga moslashtiriladi." },
    ],
  },
  geographyTelegramLabel: "Telegram",
};

siteContent.az = { ...siteContent.uz, navItems: [
  { label: "Məhsul haqqında", href: "#about" },
  { label: "Necə işləyir", href: "#how-it-works" },
  { label: "Üstünlüklər", href: "#benefits" },
  { label: "Coğrafiya", href: "#geography" },
  { label: "FAQ", href: "#faq" },
  { label: "Əlaqə", href: "#contact" },
], header: { cta: "Qoşulmaq", languages: "Dillər" }, metadata: { title: "TeamCash | Affiliate və lokal ödəniş həlləri", description: "MelBet ekosistemində Affiliate və TeamCash istiqamətləri üçün premium landing page." } };

siteContent.tk = { ...siteContent.uz, navItems: [
  { label: "Önüm barada", href: "#about" },
  { label: "Nädip işleýär", href: "#how-it-works" },
  { label: "Üstünlikler", href: "#benefits" },
  { label: "Geografiýa", href: "#geography" },
  { label: "FAQ", href: "#faq" },
  { label: "Habarlaşmak", href: "#contact" },
], header: { cta: "Birikmek", languages: "Diller" }, metadata: { title: "TeamCash | Affiliate we ýerli töleg çözgütleri", description: "MelBet ekosistemasynyň Affiliate we TeamCash ugurlary üçin premium landing page." } };

siteContent.ky = { ...siteContent.tg, navItems: [
  { label: "Өнүм жөнүндө", href: "#about" },
  { label: "Кантип иштейт", href: "#how-it-works" },
  { label: "Артыкчылыктар", href: "#benefits" },
  { label: "География", href: "#geography" },
  { label: "FAQ", href: "#faq" },
  { label: "Байланыш", href: "#contact" },
], header: { cta: "Кошулуу", languages: "Тилдер" }, metadata: { title: "TeamCash | Affiliate жана жергиликтүү төлөм чечимдери", description: "MelBet экосистемасындагы Affiliate жана TeamCash багыттары үчүн premium landing page." } };

siteContent.fa = {
  ...ru,
  metadata: {
    title: "TeamCash | افیلیت و راهکارهای محلی پرداخت",
    description: "صفحه فرود premium برای Affiliate و TeamCash در اکوسیستم MelBet.",
  },
  navItems: [
    { label: "درباره محصول", href: "#about" },
    { label: "چگونه کار می‌کند", href: "#how-it-works" },
    { label: "مزیت‌ها", href: "#benefits" },
    { label: "جغرافیا", href: "#geography" },
    { label: "پرسش‌ها", href: "#faq" },
    { label: "تماس", href: "#contact" },
  ],
  header: { cta: "وصل شدن", languages: "زبان‌ها" },
  hero: {
    ...ru.hero,
    titleLead: "Affiliate و TeamCash،",
    titleAccent: "در یک سیستم premium partnership گردهم آمده‌اند",
    description:
      "ما برای مسیر MelBet دو مدل اصلی را توسعه می‌دهیم: Affiliate Program برای رشد از طریق ترافیک و TeamCash برای دیپازیت، برداشت و عملیات محلی پرداخت با شناخت منطقه‌ای.",
    primaryCta: "وصل شدن",
    secondaryCta: "بحث همکاری",
    chips: [
      { value: "10 000+", label: "شریک در شبکه جهانی" },
      { value: "$5M+", label: "کمیشن پرداخت‌شده در برنامه‌های همکاری" },
      { value: "24/7", label: "پشتیبانی برای شریکان و شبکه ایجنت‌ها" },
    ],
    panelTitle: "یک ساختار روشن برای رشد affiliate، عملیات محلی و درآمد قابل توسعه",
    stackTitle: "ارزش اصلی",
    stackItems: [
      "Affiliate Program و TeamCash در یک سیستم واحد",
      "دانش محلی برای هر کشور و هر بازار",
      "پشتیبانی تیم از شروع تا مرحله رشد",
    ],
    focusTitle: "تمرکز",
    focusDescription:
      "TeamCash رشد affiliate، تیم‌های محلی و عملیات پرداخت را در یک مدل روشن برای توسعه مسیر MelBet یکجا می‌کند.",
  },
  about: {
    eyebrow: "About",
    title: "دو مدل رشد در یک سیستم همکاری",
    description:
      "ما ظاهر premium و منطق محصول را حفظ می‌کنیم، اما در داخل یک ساختار روشن برای affiliate و TeamCash می‌سازیم.",
    cards: [
      {
        title: "Affiliate Program",
        description:
          "برای شریکانی مناسب است که می‌خواهند از طریق ترافیک، پروموکد و مدل performance درآمد کسب کنند.",
      },
      {
        title: "TeamCash Program",
        description:
          "تمرکز اصلی روی دیپازیت و برداشت محلی، سرعت عملیات و کار پایدار در بازار مشخص است.",
      },
      {
        title: "تجربه منطقه‌ای",
        description:
          "هر راهکار بر اساس رفتار بازار، عادت‌های پرداخت و الگوی کاربران هر کشور تنظیم می‌شود.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "چگونه اتصال ساخته می‌شود",
    description:
      "ما مدل مناسب را سریع انتخاب می‌کنیم، روند را می‌سازیم و شروع را تا رسیدن به نتیجه همراهی می‌کنیم.",
    steps: [
      {
        step: "01",
        title: "مسیر را انتخاب می‌کنیم",
        description:
          "مشخص می‌کنیم کدام مدل مناسب‌تر است: affiliate برای رشد از طریق ترافیک یا TeamCash برای عملیات محلی پرداخت.",
      },
      {
        step: "02",
        title: "ساختار کاری را تنظیم می‌کنیم",
        description:
          "فرایند، ارتباطات و فرم همکاری را طوری می‌چینیم که شروع سریع و قابل مدیریت باشد.",
      },
      {
        step: "03",
        title: "مدل همکاری را آغاز می‌کنیم",
        description:
          "تیم شروع کار را همراهی می‌کند، کیفیت اجرا را حفظ می‌کند و ابزار رشد را در اختیار می‌گذارد.",
      },
      {
        step: "04",
        title: "نتیجه را توسعه می‌دهیم",
        description:
          "وقتی مدل مؤثر بودن خود را نشان دهد، پوشش، شبکه و ظرفیت درآمد را بدون از دست دادن کنترل گسترش می‌دهیم.",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "چرا این مدل به‌صورت پایدار کار می‌کند",
    description:
      "ما منطق درآمد، تجربه محلی و سیستم روشن همکاری را در یک ساختار قابل توسعه ترکیب می‌کنیم.",
    items: [
      { title: "مدل درآمدی آزموده‌شده", description: "ساختار درآمد روشن، شفاف و قابل مقیاس است." },
      { title: "سرعت عملیات", description: "فرایندها برای دیپازیت و برداشت سریع بدون فشار اضافی بهینه شده‌اند." },
      { title: "تطبیق محلی", description: "سناریوها بر اساس رفتار واقعی کاربران و ویژگی‌های هر کشور ساخته می‌شوند." },
      { title: "مقیاس‌پذیری روشن", description: "مدل به‌سادگی بر اساس منطقه، شریک و حجم کار توسعه می‌یابد." },
      { title: "پشتیبانی 24/7", description: "ما فقط وصل نمی‌کنیم، بلکه در شروع، عملیات و رشد همراه هستیم." },
      { title: "پوشش بین‌المللی", description: "تیم و فرایندها آماده‌اند تا بخشی از یک شبکه بزرگ‌تر بین‌المللی باشند." },
    ],
  },
  geography: {
    eyebrow: "Geography",
    title: "تیم با حضور محلی در کشورهای کلیدی",
    description:
      "قدرت ما فقط در محصول نیست، بلکه در پوشش منطقه‌ای نیز هست. ما آن‌جا کار می‌کنیم که نیاز به تطبیق دقیق با بازار و واقعیت‌های عملیاتی وجود دارد.",
    summaryValue: "7",
    summaryDescription: "کشور با تجربه عملیاتی محلی",
    summaryText:
      "هر کشور به‌عنوان یک نقطه محلی جداگانه کار می‌کند، اما در سیستم کلی یک ساختار پیوسته با تبادل تجربه و پشتیبانی عملیاتی باقی می‌ماند.",
    countries: [
      { name: "مغولستان", note: "ارتباط محلی قوی و درک درست از رفتار کاربر." },
      { name: "تاجیکستان", note: "کار انعطاف‌پذیر با پویایی بازار محلی و همکاری ایجنتی." },
      { name: "ازبکستان", note: "تمرکز بر مقیاس‌پذیری و سناریوهای پایدار پرداخت." },
      { name: "آذربایجان", note: "سرعت عملیاتی بالا و هماهنگی باکیفیت فرایندها." },
      { name: "ترکمنستان", note: "تجربه در تنظیم دقیق مدل‌های عملیاتی محلی." },
      { name: "قرغیزستان", note: "رویکردی متمرکز بر سهولت اتصال و رشد شبکه ایجنت‌ها." },
      { name: "افغانستان", note: "توجه ویژه به اعتماد، ثبات فرایندها و کیفیت همراهی." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "Choose Your Path",
    description: "مسیری را انتخاب کنید که با بازار، تجربه و مدل رشد شما بهتر سازگار باشد.",
    items: [
      {
        title: "Affiliate Program",
        items: [
          "برای کسانی مناسب است که می‌خواهند از طریق جذب مخاطب، پروموکد و شبکه همکاری درآمد بگیرند.",
          "تمرکز بر revenue-share، performance و رشد از طریق ترافیک بازاریابی است.",
          "پشتیبانی در بخش مواد تبلیغاتی، ارتباطات و توسعه داخل مدل همکاری فراهم می‌شود.",
          "گزینه خوب برای کسانی است که با reach، لید و community کار می‌کنند.",
        ],
        cta: "اتصال affiliate",
      },
      {
        title: "TeamCash Program",
        items: [
          "مدل ایجنتی محلی برای کار با دیپازیت و برداشت در کشور خود.",
          "برای کسانی مناسب است که می‌خواهند راهکار مالی قابل اعتماد برای بازیکنان بازار خود باشند.",
          "تمرکز بر cash-operations، سرعت پردازش و عملیات روزانه روشن است.",
          "مستقیماً با توسعه TeamCash و شبکه منطقه‌ای ایجنت‌ها سازگار است.",
        ],
        cta: "اتصال TeamCash",
      },
    ],
  },
  product: {
    eyebrow: "Product",
    title: "چه چیزی TeamCash را به یک سیستم قوی همکاری تبدیل می‌کند",
    description:
      "در داخل این ساختار، منطق روشن برای رشد، عملیات و توسعه مقیاس‌پذیر ساخته شده است.",
    items: [
      { title: "دو مسیر روشن", description: "Affiliate برای رشد از طریق ترافیک است و TeamCash برای عملیات محلی پرداخت." },
      { title: "تمرکز بر deposits & withdrawals", description: "برای TeamCash همین فرایندهای پرداختی هسته اصلی محصول است: سرعت، راحتی و تطبیق محلی." },
      { title: "پشتیبانی تیم بین‌المللی", description: "تیم در شروع، عملیات و رشد همراهی می‌کند تا کیفیت نتیجه حفظ شود." },
      { title: "سیستم برای رشد پایدار", description: "پلتفرم و فرایندها امکان گسترش پوشش و حجم عملیات را بدون بی‌نظمی فراهم می‌کنند." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "کوتاه درباره مدل همکاری",
    description: "مهم‌ترین پرسش‌هایی که پیش از اتصال به این مسیرها بیشتر مطرح می‌شوند.",
    items: [
      { question: "چه فرمت‌های همکاری در دسترس است؟", answer: "ما روی دو مسیر کار می‌کنیم: Affiliate Program برای رشد از طریق ترافیک و TeamCash Program برای دیپازیت و برداشت محلی." },
      { question: "چرا TeamCash عنصر کلیدی مدل است؟", answer: "TeamCash به سازماندهی سریع، روشن و قابل مدیریت فرایندهای دیپازیت و برداشت کمک می‌کند." },
      { question: "TeamCash Program برای چه کسانی مناسب است؟", answer: "برای کسانی که می‌خواهند در کشور خود به‌عنوان ایجنت پرداخت محلی کار کنند و یک راهکار مالی قابل اعتماد بسازند." },
      { question: "Affiliate Program برای چه کسانی مناسب است؟", answer: "برای کسانی که می‌خواهند از جذب بازیکن، ترافیک، پروموکد و performance-model درآمد بگیرند." },
      { question: "چرا تجربه محلی مهم است؟", answer: "رفتار پرداخت و توقعات کاربران در هر کشور متفاوت است و تجربه محلی مدل را دقیق‌تر و مؤثرتر می‌کند." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "اتصال را باهم بررسی کنیم",
    description:
      "درخواست بگذارید تا با شما تماس بگیریم و مسیر مناسب، کشور شروع و مدل درست همکاری را مشخص کنیم.",
    telegramLabel: "Telegram",
    telegramHandle: "@teamcash_partnerships",
    formTitle: "درخواست بگذارید",
    submit: "ارسال درخواست",
    fields: {
      name: "نام",
      company: "شرکت",
      country: "کشور",
      telegram: "Telegram / تماس",
      details: "توضیح",
      placeholders: {
        name: "نام شما",
        company: "نام شرکت یا تیم",
        country: "مثلاً افغانستان",
        telegram: "@username",
        details: "بنویسید کدام مسیر برای شما مهم است: Affiliate یا TeamCash و در کدام کشور می‌خواهید کار کنید.",
      },
    },
    emailSubject: "درخواست اتصال به TeamCash",
  },
  footer: {
    description: "تیم بین‌المللی برای affiliate و راهکارهای محلی پرداخت در اکوسیستم MelBet.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "درباره محصول", href: sharedLinks.about },
    ],
  },
  geographyTelegramLabel: "تلگرام",
};

siteContent.ps = {
  ...siteContent.fa,
  metadata: {
    title: "TeamCash | افیلیت او محلي تادیاتي حلونه",
    description: "د MelBet ایکوسیستم لپاره د Affiliate او TeamCash premium landing page.",
  },
  navItems: [
    { label: "د محصول په اړه", href: "#about" },
    { label: "څنګه کار کوي", href: "#how-it-works" },
    { label: "ګټې", href: "#benefits" },
    { label: "جغرافیه", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "اړیکه", href: "#contact" },
  ],
  header: { cta: "نښلول", languages: "ژبې" },
  hero: {
    ...siteContent.fa.hero,
    titleLead: "Affiliate او TeamCash،",
    titleAccent: "په یوه premium partnership سیسټم کې یوځای شوي",
    description:
      "موږ د MelBet لپاره دوه مهم ماډلونه جوړوو: Affiliate Program د ترافیک له لارې د ودې لپاره، او TeamCash د محلي ډیپازټ، وتلو او تادیاتو د عملیاتو لپاره.",
    primaryCta: "نښلول",
    secondaryCta: "شراکت وڅېړو",
  },
  about: {
    eyebrow: "About",
    title: "په یوه شراکت سیستم کې دوه د ودې ماډلونه",
    description:
      "موږ د affiliate ودې او TeamCash محلي تادیاتي عملیات په یوه روښانه او منظم جوړښت کې راټولوو.",
    cards: [
      { title: "Affiliate Program", description: "د هغو شریکانو لپاره مناسب چې غواړي د ترافیک، پروموکوډ او performance ماډل له لارې عاید ترلاسه کړي." },
      { title: "TeamCash Program", description: "د محلي ډیپازټ، وتلو، چټکو عملیاتو او ثابت بازار کار لپاره جوړ شوی." },
      { title: "سیمه ییزه تجربه", description: "هر حل د بازار چلند، د تادیاتو عادتونو او د کاروونکو اړتیاوو له مخې تنظیمېږي." },
    ],
  },
  contact: {
    ...siteContent.fa.contact,
    title: "راځئ د نښلېدو په اړه وغږېږو",
    description: "درخواست پرېږدئ، موږ به له تاسو سره اړیکه ونیسو څو مناسب مسیر، بازار او د همکارۍ ماډل وټاکو.",
    submit: "درخواست ولېږئ",
    fields: {
      name: "نوم",
      company: "شرکت",
      country: "هیواد",
      telegram: "Telegram / اړیکه",
      details: "تشریح",
      placeholders: {
        name: "ستاسو نوم",
        company: "د شرکت یا ټیم نوم",
        country: "لکه افغانستان",
        telegram: "@username",
        details: "ولیكئ چې Affiliate او که TeamCash ستاسو لپاره مهم دی او په کوم هېواد کې کار کول غواړئ.",
      },
    },
    emailSubject: "د TeamCash د نښلېدو غوښتنه",
  },
  footer: {
    description: "د MelBet په ایکوسیستم کې د affiliate او محلي تادیاتي حلونو نړیوال ټیم.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "د محصول په اړه", href: sharedLinks.about },
    ],
  },
  geographyTelegramLabel: "ټېلېګرام",
};
