export type Locale = "ru" | "en" | "mn" | "tg" | "uz" | "az" | "tk" | "ky" | "fa";

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

export const siteContent: Record<Locale, SiteContent> & { ps?: SiteContent } = {
  ru: {
    metadata: {
      title: "TeamCash Partnerships | Партнерская сеть локальных платежей",
      description:
        "Партнерская программа TeamCash для локальных платежных агентов, e-payment партнеров и affiliate-команд.",
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
      cta: "Стать партнером",
      languages: "Языки",
    },
    hero: {
      eyebrow: "TeamCash Partnerships for Local Payment Growth",
      titleLead: "Партнерская сеть",
      titleAccent: "TeamCash для локальных платежей",
      description:
        "TeamCash — платежное решение для MelBet-направления: локальные депозиты, выводы, e-payment сценарии и агентская операционка в одной понятной модели. Мы помогаем подключить партнеров, запустить процесс и масштабировать результат по странам.",
      primaryCta: "Стать партнером TeamCash",
      secondaryCta: "Выбрать формат",
      chips: [
        { value: "3", label: "формата партнерства под разные команды" },
        { value: "7", label: "ключевых стран с локальной экспертизой" },
        { value: "24/7", label: "сопровождение партнеров и агентской сети" },
      ],
      panelEyebrow: "TeamCash Partnership Layer",
      panelTitle: "Платежный контур MelBet для локальных агентов, e-payment партнеров и affiliate-команд",
      panelStatus: "Active",
      stackTitle: "Partnership Stack",
      stackItems: [
        "Payment Agent: локальная работа с депозитами и выводами",
        "E-payment Agent: цифровые платежные сценарии и операционная скорость",
        "Affiliate Partner: рост через трафик, комьюнити и performance-модель",
      ],
      focusTitle: "TeamCash Focus",
      focusDescription:
        "Главная тема сайта — TeamCash как платежное решение MelBet: как подключиться, какой формат выбрать и как зарабатывать на локальной платежной инфраструктуре.",
    },
    about: {
      eyebrow: "TeamCash Model",
      title: "Партнерство, где сразу понятно кто, что делает и как растет",
      description:
        "Мы сместили фокус с общей презентации на конкретную партнерскую механику TeamCash: подключение агентов, платежные операции, локальная экспертиза и поддержка роста.",
      cards: [
        {
          title: "Payment Agent Program",
          description:
            "Для локальных партнеров, которые хотят работать с депозитами и выводами в своей стране, развивать агентскую сеть и получать понятную операционную модель.",
        },
        {
          title: "E-payment Agent Program",
          description:
            "Для команд, которые могут усиливать цифровые платежные сценарии, скорость обработки и удобство для пользователей на локальном рынке.",
        },
        {
          title: "Affiliate Partner Program",
          description:
            "Для партнеров с трафиком, комьюнити или медиа-ресурсами, которые хотят приводить аудиторию и расти вместе с TeamCash-направлением.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Как партнер подключается к TeamCash",
      description:
        "Путь должен быть простым: определить формат, согласовать регион, запустить операционный контур и дальше масштабировать результат.",
      steps: [
        {
          step: "01",
          title: "Выбираем формат партнерства",
          description:
            "Payment Agent, E-payment Agent или Affiliate Partner — подбираем формат под опыт, страну и возможности команды.",
        },
        {
          step: "02",
          title: "Настраиваем TeamCash-контур",
          description:
            "Фиксируем роли, каналы связи, платежные сценарии, правила обработки и ежедневную операционную механику.",
        },
        {
          step: "03",
          title: "Запускаем работу",
          description:
            "Команда сопровождает старт, помогает держать скорость, качество обработки и понятную коммуникацию с партнерами.",
        },
        {
          step: "04",
          title: "Масштабируем сеть",
          description:
            "Когда модель работает стабильно, расширяем покрытие, усиливаем локальную сеть и увеличиваем потенциал дохода без хаоса.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Почему партнерская модель TeamCash работает стабильно",
      description:
        "Партнеру важны не красивые слова, а понятный процесс, скорость операций, поддержка и прозрачная логика роста.",
      items: [
        {
          title: "Понятная модель заработка",
          description:
            "Каждый формат партнерства привязан к конкретной роли: платежные операции, e-payment сценарии или affiliate-привлечение.",
        },
        {
          title: "Скорость операций",
          description:
            "Оптимизированные процессы для быстрых депозитов и выводов без лишней нагрузки на команду.",
        },
        {
          title: "Локальная экспертиза",
          description:
            "Сценарии строятся с учетом реального поведения пользователей и особенностей каждой страны.",
        },
        {
          title: "Масштабирование сети",
          description:
            "Модель легко расширять по регионам, партнерам и нагрузке, сохраняя прозрачность управления.",
        },
        {
          title: "Поддержка 24/7",
          description:
            "Мы не просто подключаем, а сопровождаем на старте, в операционке и при дальнейшем росте.",
        },
        {
          title: "Региональное покрытие",
          description:
            "Команда и процессы готовы работать как часть международной партнерской сети, а не только точечно.",
        },
      ],
    },
    geography: {
      eyebrow: "Geography",
      title: "Локальные рынки для развития TeamCash-партнерств",
      description:
        "TeamCash строится вокруг локального присутствия. В каждой стране важны свои платежные привычки, скорость коммуникации и надежные партнеры на месте.",
      summaryValue: "7",
      summaryDescription: "стран для развития TeamCash-партнерств",
      summaryText:
        "Каждая страна — отдельный рынок с собственной логикой платежей. TeamCash объединяет эти рынки в одну партнерскую сеть с поддержкой, опытом и понятной операционкой.",
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
      title: "Выберите свой формат TeamCash-партнерства",
      description: "Мы не предлагаем всем одно и то же. Формат зависит от вашей страны, команды, источника трафика и операционных возможностей.",
      items: [
        {
          title: "Payment Agent",
          items: [
            "Работа с локальными депозитами и выводами в своей стране.",
            "Подходит тем, кто умеет выстраивать надежную ежедневную операционку.",
            "Фокус на скорости, доступности и понятном процессе для пользователей.",
            "Хороший сценарий для развития агентской сети TeamCash.",
          ],
          cta: "Стать Payment Agent",
        },
        {
          title: "E-payment Agent",
          items: [
            "Цифровой платежный сценарий для локального рынка.",
            "Подходит командам с опытом e-payment, платежной маршрутизации или финтех-операций.",
            "Фокус на удобстве, скорости обработки и стабильности процесса.",
            "Помогает расширять TeamCash без привязки только к cash-сценариям.",
          ],
          cta: "Стать E-payment Agent",
        },
        {
          title: "Affiliate Partner",
          items: [
            "Для партнеров с трафиком, комьюнити, медиа или performance-командой.",
            "Фокус на привлечении аудитории и развитии партнерского канала.",
            "Можно работать в связке с TeamCash-регионами и локальными рынками.",
            "Подходит тем, кто хочет масштабировать доход через продвижение.",
          ],
          cta: "Стать Affiliate Partner",
        },
      ],
    },
    product: {
      eyebrow: "TeamCash Advantage",
      title: "Что делает TeamCash сильным партнерским направлением",
      description:
        "Главная ценность TeamCash — не просто платежи, а связка партнеров, локальных рынков и операционной поддержки.",
      items: [
        {
          title: "Три формата подключения",
          description:
            "Payment Agent, E-payment Agent и Affiliate Partner закрывают разные роли внутри одной TeamCash-системы.",
        },
        {
          title: "Фокус на депозитах и выводах",
          description:
            "Для TeamCash именно платежные процессы остаются ключевым продуктовым контуром: скорость, удобство и локальная адаптация.",
        },
        {
          title: "Поддержка международной команды",
          description:
            "Команда помогает на старте, в операционке и в росте, чтобы партнеру было проще удерживать качество и масштабировать результат.",
        },
        {
          title: "Система для роста партнеров",
          description:
            "Платформа и процессы позволяют наращивать покрытие, партнерскую сеть и объем операций без хаоса в управлении.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Коротко о TeamCash-партнерстве",
      description: "Ключевые вопросы перед подключением к TeamCash.",
      items: [
        {
          question: "Какие форматы TeamCash-партнерства доступны?",
          answer:
            "Три основных формата: Payment Agent для локальных депозитов и выводов, E-payment Agent для цифровых платежных сценариев и Affiliate Partner для привлечения аудитории.",
        },
        {
          question: "Что делает TeamCash ключевым направлением?",
          answer:
            "TeamCash помогает организовать удобную и управляемую работу с депозитами и выводами, сохраняя скорость операций, прозрачность взаимодействия и локальную адаптацию процессов.",
        },
        {
          question: "Кому подходит Payment Agent?",
          answer:
            "Тем, кто хочет работать как локальный платежный партнер в своей стране, обрабатывать депозиты и выводы и развивать надежную агентскую сеть.",
        },
        {
          question: "Кому подходит Affiliate Partner?",
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
      title: "Обсудим TeamCash-партнерство",
      description:
        "Оставьте заявку, и мы обсудим ваш рынок, формат партнерства и оптимальный путь подключения к TeamCash.",
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
          details: "Напишите, какой формат вас интересует: Payment Agent, E-payment Agent или Affiliate Partner, и в какой стране вы хотите работать.",
        },
      },
      emailSubject: "Запрос на подключение к TeamCash",
    },
    footer: {
      description: "TeamCash-партнерства для локальных платежных агентов, e-payment команд и affiliate-партнеров.",
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
    title: "TeamCash Partnerships | Local Payment Partner Network",
    description: "TeamCash partnership program for payment agents, e-payment partners, and affiliate teams.",
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
    cta: "Become a Partner",
    languages: "Languages",
  },
  hero: {
    eyebrow: "TeamCash Partnerships for Local Payment Growth",
    titleLead: "TeamCash partner network",
    titleAccent: "for local payment growth",
    description:
      "TeamCash connects partners, local payment agents, and e-payment teams to a clear model for deposits, withdrawals, and regional operations. We help define the format, launch the process, and scale results across markets.",
    primaryCta: "Become a TeamCash Partner",
    secondaryCta: "Choose Format",
    chips: [
      { value: "3", label: "partnership formats for different teams" },
      { value: "7", label: "key countries with local expertise" },
      { value: "24/7", label: "support for partners and agent network" },
    ],
    panelEyebrow: "TeamCash Partnership Layer",
    panelTitle: "One framework for payment agents, e-payment partners, and affiliate teams",
    panelStatus: "Active",
    stackTitle: "Partnership Stack",
    stackItems: [
      "Payment Agent: local deposits and withdrawals",
      "E-payment Agent: digital payment scenarios and operational speed",
      "Affiliate Partner: growth through traffic, communities, and performance",
    ],
    focusTitle: "TeamCash Focus",
    focusDescription:
      "The main story is TeamCash partnerships: how to join, which format to choose, and how to grow through local payment infrastructure.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "A partnership model with clear roles and a clear growth path",
    description:
      "The focus is TeamCash partnership mechanics: agent onboarding, payment operations, local expertise, and growth support.",
    cards: [
      {
        title: "Payment Agent Program",
        description:
          "For local partners who want to work with deposits and withdrawals, build an agent network, and operate with a clear daily process.",
      },
      {
        title: "E-payment Agent Program",
        description:
          "For teams that can strengthen digital payment scenarios, processing speed, and user convenience in a local market.",
      },
      {
        title: "Affiliate Partner Program",
        description:
          "For partners with traffic, communities, or media resources who want to bring users and grow with TeamCash.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How a partner joins TeamCash",
    description:
      "The path is simple: choose the format, align the market, launch the operating setup, and scale the result.",
    steps: [
      {
        step: "01",
        title: "Choose the partnership format",
        description:
          "Payment Agent, E-payment Agent, or Affiliate Partner — we choose the format based on your market, team, and capabilities.",
      },
      {
        step: "02",
        title: "Build the TeamCash setup",
        description:
          "We define roles, communication, payment scenarios, processing rules, and daily operating mechanics.",
      },
      {
        step: "03",
        title: "Launch operations",
        description:
          "Our team supports the start, helps maintain speed, processing quality, and clear partner communication.",
      },
      {
        step: "04",
        title: "Scale the network",
        description:
          "Once the model proves effective, we expand coverage, strengthen the local network, and increase revenue potential without losing control.",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Why the TeamCash partnership model works consistently",
    description:
      "Partners need more than nice wording: they need a clear process, fast operations, support, and transparent growth logic.",
    items: [
      {
        title: "Clear earning model",
        description: "Each format is tied to a clear role: payment operations, e-payment scenarios, or affiliate acquisition.",
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
    title: "Local markets for TeamCash partnership growth",
    description:
      "TeamCash is built around local presence. Each country has its own payment habits, communication speed, and need for reliable local partners.",
    summaryValue: "7",
    summaryDescription: "countries for TeamCash partnership development",
    summaryText:
      "Each country is a separate market with its own payment logic. TeamCash connects these markets into one partner network with support, experience, and clear operations.",
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
    title: "Choose your TeamCash partnership format",
    description: "The format depends on your country, team, traffic source, and operational capabilities.",
    items: [
      {
        title: "Payment Agent",
        items: [
          "Work with local deposits and withdrawals in your country.",
          "Built for teams that can manage reliable daily operations.",
          "Focused on speed, availability, and a clear process for users.",
          "A strong fit for developing the TeamCash agent network.",
        ],
        cta: "Become Payment Agent",
      },
      {
        title: "E-payment Agent",
        items: [
          "A digital payment scenario for the local market.",
          "Built for teams with e-payment, routing, or fintech operations experience.",
          "Focused on convenience, processing speed, and process stability.",
          "Helps scale TeamCash beyond cash-only scenarios.",
        ],
        cta: "Become E-payment Agent",
      },
      {
        title: "Affiliate Partner",
        items: [
          "For partners with traffic, communities, media, or performance teams.",
          "Focused on audience acquisition and partner channel growth.",
          "Can work together with TeamCash regions and local markets.",
          "Built for those who want to scale income through promotion.",
        ],
        cta: "Become Affiliate Partner",
      },
    ],
  },
  product: {
    eyebrow: "Product",
    title: "What makes TeamCash a strong partnership direction",
    description:
      "The value of TeamCash is not just payments, but the connection between partners, local markets, and operational support.",
    items: [
      {
        title: "Three joining formats",
        description:
          "Payment Agent, E-payment Agent, and Affiliate Partner cover different roles inside one TeamCash system.",
      },
      {
        title: "Focus on deposits and withdrawals",
        description:
          "For TeamCash, payment processes remain the core product layer: speed, convenience, and local adaptation.",
      },
      {
        title: "International team support",
        description:
          "The team helps at launch, in operations, and during growth so partners can maintain quality while scaling.",
      },
      {
        title: "A system for partner growth",
        description:
          "The platform and processes allow expansion of coverage, partner networks, and operational volume without chaos.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Short answers about TeamCash partnership",
    description: "Key questions before joining TeamCash.",
    items: [
      {
        question: "Which TeamCash partnership formats are available?",
        answer:
          "Three main formats: Payment Agent for local deposits and withdrawals, E-payment Agent for digital payment scenarios, and Affiliate Partner for audience acquisition.",
      },
      {
        question: "What makes TeamCash the key direction?",
        answer:
          "TeamCash helps organize deposits and withdrawals in a way that keeps operations fast, transparent, and adapted to local market realities.",
      },
      {
        question: "Who is Payment Agent for?",
        answer:
          "It fits teams that want to work as local payment partners in their country, handle deposits and withdrawals, and develop a reliable agent network.",
      },
      {
        question: "Who is Affiliate Partner for?",
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
    title: "Let’s discuss TeamCash partnership",
    description:
      "Leave a request and we will discuss your market, partnership format, and the best way to join TeamCash.",
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
        details: "Tell us which format interests you: Payment Agent, E-payment Agent, or Affiliate Partner, and which country you want to work in.",
      },
    },
    emailSubject: "TeamCash connection request",
  },
  footer: {
    description: "TeamCash partnerships for local payment agents, e-payment teams, and affiliate partners.",
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
    title: "TeamCash Partnerships | Локал төлбөрийн түншийн сүлжээ",
    description: "TeamCash түншлэл: Payment Agent, E-payment Agent болон Affiliate Partner-д зориулсан.",
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
  header: { cta: "Түнш болох", languages: "Хэл" },
  hero: {
    ...ru.hero,
    eyebrow: "TeamCash Partnerships for Local Payment Growth",
    titleLead: "TeamCash-ийн түншийн сүлжээ",
    titleAccent: "локал төлбөрийн өсөлтөд",
    description:
      "TeamCash нь түншүүд, локал төлбөрийн агентууд, e-payment багуудыг депозит, гаргалт, өдөр тутмын төлбөрийн ажилтай холбоно. Бид тохирох форматыг сонгож, ажлыг эхлүүлж, улсаар нь өсгөхөд тусална.",
    primaryCta: "TeamCash түнш болох",
    secondaryCta: "Формат сонгох",
    chips: [
      { value: "3", label: "өөр өөр багт тохирох түншлэлийн формат" },
      { value: "7", label: "локал туршлагатай гол улс" },
      { value: "24/7", label: "түнш болон агентын сүлжээний дэмжлэг" },
    ],
    panelTitle: "Payment Agent, E-payment Agent болон Affiliate Partner-д зориулсан нэг систем",
    stackItems: [
      "Payment Agent: локал депозит болон гаргалт",
      "E-payment Agent: дижитал төлбөр, хурдан ажиллагаа",
      "Affiliate Partner: траффик, community, promotion-аар өсөх",
    ],
    focusTitle: "TeamCash Focus",
    focusDescription:
      "Энэ сайтын гол сэдэв бол TeamCash түншлэл: яаж нэгдэх, ямар формат сонгох, локал төлбөрөөр яаж өсөх.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "Хэн юу хийх нь ойлгомжтой түншлэлийн модель",
    description:
      "TeamCash-ийн гол санаа энгийн: агент холбох, төлбөрийн ажил явуулах, локал зах зээлийг ойлгох, түншээ өсгөх.",
    cards: [
      {
        title: "Payment Agent Program",
        description:
          "Өөрийн улсад депозит, гаргалт дээр ажиллах, агентын сүлжээ хөгжүүлэх хүсэлтэй локал түншүүдэд.",
      },
      {
        title: "E-payment Agent Program",
        description:
          "Дижитал төлбөр, хурдан боловсруулалт, хэрэглэгчид амар төлбөрийн зам өгөх чадвартай багуудад.",
      },
      {
        title: "Affiliate Partner Program",
        description:
          "Траффик, community, медиа эсвэл promotion хийх боломжтой түншүүдэд.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "TeamCash-д яаж нэгдэх вэ",
    description: "Эхлээд форматаа сонгоно, дараа нь улс, ажиллах арга, холбоо барих процессыг тохируулна.",
    steps: [
      { step: "01", title: "Формат сонгоно", description: "Payment Agent, E-payment Agent эсвэл Affiliate Partner аль нь тохирохыг сонгоно." },
      { step: "02", title: "TeamCash ажлаа тохируулна", description: "Хэн юу хийх, ямар сувгаар ярих, депозит ба гаргалтыг яаж хийхийг тохируулна." },
      { step: "03", title: "Ажлаа эхлүүлнэ", description: "Баг эхлэл дээр тусална. Хурд, чанар, холбоо барилтыг хамт барина." },
      { step: "04", title: "Сүлжээг өсгөнө", description: "Ажил тогтвортой болвол улс, агент, хэмжээ, орлогоо өсгөнө." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Яагаад TeamCash түншлэл тогтвортой ажилладаг вэ",
    description: "Түншид ойлгомжтой процесс, хурдан ажиллагаа, дэмжлэг, өсөх тодорхой зам хэрэгтэй.",
    items: [
      { title: "Ойлгомжтой орлогын модель", description: "Формат бүр тодорхой үүрэгтэй: төлбөрийн ажил, e-payment эсвэл affiliate таталт." },
      { title: "Үйл ажиллагааны хурд", description: "Депозит, гаргалтын ажлыг хурдан, илүү амар болгоход төвлөрнө." },
      { title: "Локал туршлага", description: "Улс бүрийн хэрэглэгч, зах зээл, төлбөрийн дадал өөр. Үүнийг тооцдог." },
      { title: "Сүлжээ өсгөх боломж", description: "Улс, түнш, агентын тоо өссөн ч процесс ойлгомжтой хэвээр байна." },
      { title: "24/7 дэмжлэг", description: "Бид зөвхөн холбохгүй. Эхлэл, өдөр тутмын ажил, өсөлт дээр хамт байна." },
      { title: "Бүс нутгийн хамрах хүрээ", description: "Баг болон процесс хэд хэдэн улсад ажиллахад бэлэн." },
    ],
  },
  geography: {
    eyebrow: "Geography",
    title: "TeamCash түншлэл хөгжүүлэх локал зах зээлүүд",
    description: "TeamCash-д локал оролцоо чухал. Улс бүрт төлбөрийн дадал, холбоо барих хурд, найдвартай түнш хэрэгтэй.",
    summaryValue: "7",
    summaryDescription: "TeamCash түншлэл хөгжүүлэх улс",
    summaryText: "Улс бүр өөр өөр төлбөрийн логиктой. TeamCash эдгээр улсыг нэг түншийн сүлжээнд холбодог.",
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
    title: "TeamCash түншлэлийн форматаа сонго",
    description: "Формат нь таны улс, баг, траффик, ажиллах боломж дээр үндэслэнэ.",
    items: [
      {
        title: "Payment Agent",
        items: [
          "Өөрийн улсад депозит, гаргалт дээр ажиллана.",
          "Өдөр тутмын ажлыг найдвартай хийх чадвартай багт тохирно.",
          "Хурд, бэлэн байдал, хэрэглэгчид ойлгомжтой процесс чухал.",
          "TeamCash агентын сүлжээ хөгжүүлэхэд тохиромжтой.",
        ],
        cta: "Payment Agent болох",
      },
      {
        title: "E-payment Agent",
        items: [
          "Локал зах зээлд дижитал төлбөрийн зам ажиллуулна.",
          "E-payment, payment routing эсвэл финтех ажиллагааны туршлагатай багт тохирно.",
          "Хэрэглэхэд амар, хурдан, тогтвортой процесс чухал.",
          "TeamCash-ийг зөвхөн cash биш дижитал чиглэлд ч өсгөнө.",
        ],
        cta: "E-payment Agent болох",
      },
      {
        title: "Affiliate Partner",
        items: [
          "Траффик, community, медиа эсвэл promotion хийх түншүүдэд.",
          "Аудитори татах, партнер сувгийг өсгөхөд төвлөрнө.",
          "TeamCash-ийн локал улс, зах зээлтэй хамт ажиллаж болно.",
          "Promotion-аар орлогоо өсгөх хүсэлтэй хүмүүст тохирно.",
        ],
        cta: "Affiliate Partner болох",
      },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "TeamCash-ийг хүчтэй түншлэлийн чиглэл болгодог зүйл",
    description: "TeamCash-ийн үнэ цэнэ нь зөвхөн төлбөр биш. Энэ нь түнш, локал зах зээл, дэмжлэгийг нэг системд холбодог.",
    items: [
      { title: "Гурван формат", description: "Payment Agent, E-payment Agent, Affiliate Partner — нэг TeamCash систем дотор өөр өөр үүрэгтэй." },
      { title: "Депозит ба гаргалт дээр фокус", description: "TeamCash-ийн гол хэсэг бол хурдан, амар, локал зах зээлд тохирсон төлбөрийн процесс." },
      { title: "Олон улсын багийн дэмжлэг", description: "Эхлэл, операци, өсөлт бүр дээр баг хамт явдаг." },
      { title: "Түнш өсгөх систем", description: "Хамрах хүрээ, түншийн сүлжээ, үйл ажиллагааны хэмжээг эмх цэгцтэй өсгөнө." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "TeamCash түншлэлийн тухай товчхон",
    description: "TeamCash-д нэгдэхээс өмнө хамгийн түгээмэл асуудаг зүйлс.",
    items: [
      { question: "TeamCash-д ямар түншлэлийн формат байдаг вэ?", answer: "Гурван формат байна: Payment Agent, E-payment Agent, Affiliate Partner." },
      { question: "TeamCash яагаад гол чиглэл вэ?", answer: "TeamCash нь депозит, гаргалт, локал төлбөрийн ажлыг хурдан, ойлгомжтой, удирдахад амар болгодог." },
      { question: "Payment Agent хэнд тохирох вэ?", answer: "Өөрийн улсад локал төлбөрийн түнш болж, депозит ба гаргалт дээр ажиллах хүсэлтэй багт." },
      { question: "Affiliate Partner хэнд тохирох вэ?", answer: "Траффик, промо, community эсвэл performance-аар хэрэглэгч татах хүсэлтэй түншүүдэд." },
      { question: "Локал туршлага яагаад чухал вэ?", answer: "Улс бүрийн хэрэглэгчийн зан төлөв, төлбөрийн дадал өөр тул локал туршлага модельд илүү өндөр үр ашиг өгдөг." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "TeamCash түншлэлийг ярилцъя",
    description: "Маягт үлдээгээрэй. Бид таны улс, формат, TeamCash-д яаж нэгдэхийг хамт ярилцана.",
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
        details: "Payment Agent, E-payment Agent эсвэл Affiliate Partner аль нь сонирхож байгааг, мөн аль улсад ажиллахыг бичнэ үү.",
      },
    },
    emailSubject: "TeamCash холболтын хүсэлт",
  },
  footer: {
    description: "TeamCash түншлэл: локал төлбөрийн агент, e-payment баг, affiliate partner-д зориулсан.",
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

Object.assign(siteContent.ps, {
  metadata: {
    title: "TeamCash Partnerships | د محلي تادیاتو د شریکانو شبکه",
    description: "د TeamCash شراکت د Payment Agent، E-payment Agent او Affiliate Partner لپاره.",
  },
  header: { cta: "شریک شئ", languages: "ژبې" },
  hero: {
    ...siteContent.ps.hero,
    eyebrow: "TeamCash Partnerships for Local Payment Growth",
    titleLead: "د TeamCash د شریکانو شبکه",
    titleAccent: "د محلي تادیاتو لپاره",
    description:
      "TeamCash شریکان، د محلي تادیاتو ایجنټان او e-payment ټیمونه له یوې ساده لارې سره نښلوي: ډیپازټ، ویستل او په محلي بازار کې ورځنی کار.",
    primaryCta: "د TeamCash شریک شئ",
    secondaryCta: "فارمټ وټاکئ",
    chips: [
      { value: "3", label: "د بېلابېلو ټیمونو لپاره د شراکت فارمټونه" },
      { value: "7", label: "مهم هېوادونه د محلي تجربې سره" },
      { value: "24/7", label: "د شریکانو او ایجنټانو ملاتړ" },
    ],
    panelTitle: "یو سیستم د Payment Agent، E-payment Agent او Affiliate Partner لپاره",
    stackItems: [
      "Payment Agent: محلي ډیپازټ او ویستل",
      "E-payment Agent: ډیجیټل تادیات او چټک عملیات",
      "Affiliate Partner: وده د ټرافیک، ټولنې او promotion له لارې",
    ],
    focusDescription:
      "د دې سایټ اصلي موضوع TeamCash Partnerships ده: څنګه وصل شئ، کوم فارمټ وټاکئ او څنګه د محلي تادیاتو له لارې وده وکړئ.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "شراکت چې رولونه او د ودې لاره پکې روښانه وي",
    description:
      "تمرکز پر TeamCash دی: د ایجنټانو نښلول، د تادیاتو عملیات، محلي تجربه او د ودې ملاتړ.",
    cards: [
      { title: "Payment Agent Program", description: "د هغو محلي شریکانو لپاره چې غواړي په خپل هېواد کې د ډیپازټ او ویستلو کار وکړي." },
      { title: "E-payment Agent Program", description: "د هغو ټیمونو لپاره چې ډیجیټل تادیات چټک، اسانه او ثابت کولی شي." },
      { title: "Affiliate Partner Program", description: "د هغو شریکانو لپاره چې ټرافیک، ټولنه یا رسنۍ لري او غواړي کاروونکي راولي." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "شریک څنګه له TeamCash سره وصلېږي",
    description:
      "لومړی فارمټ ټاکو، بیا بازار او د کار لاره روښانه کوو، کار پیلوو او وروسته شبکه لویوو.",
    steps: [
      { step: "01", title: "د شراکت فارمټ ټاکو", description: "Payment Agent، E-payment Agent یا Affiliate Partner د هېواد او ټیم د وړتیا له مخې ټاکل کېږي." },
      { step: "02", title: "د TeamCash کار تنظیموو", description: "رولونه، اړیکه، د تادیاتو سناریوګانې او د ورځني کار اصول روښانه کوو." },
      { step: "03", title: "کار پیلوو", description: "ټیم په پیل، سرعت، کیفیت او روښانه اړیکه کې مرسته کوي." },
      { step: "04", title: "شبکه لویوو", description: "کله چې ماډل ثابت شي، هېوادونه، ایجنټان او د عملیاتو حجم زیاتوو." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "ولې د TeamCash شراکت باثباته کار کوي",
    description:
      "شریک ته ساده پروسه، چټک عملیات، ملاتړ او د ودې روښانه لاره مهمه ده.",
    items: [
      { title: "روښانه د عاید ماډل", description: "هر فارمټ خپل رول لري: تادیاتي عملیات، e-payment یا affiliate جذب." },
      { title: "چټک عملیات", description: "د ډیپازټ او ویستلو پروسه د چټک او اسانه کار لپاره برابره شوې." },
      { title: "محلي تجربه", description: "هر هېواد خپل بازار، کاروونکي او د تادیاتو عادتونه لري. موږ دا په پام کې نیسو." },
      { title: "د شبکې وده", description: "شبکه د هېواد، شریک او حجم له مخې لویېږي، خو مدیریت روښانه پاتې کېږي." },
      { title: "24/7 ملاتړ", description: "موږ یوازې وصل نه کوو، په پیل، عملیاتو او وده کې هم مرسته کوو." },
      { title: "سیمه ییز پوښښ", description: "ټیم او پروسې د څو هېوادونو د کار لپاره چمتو دي." },
    ],
  },
  geography: {
    eyebrow: "Geography",
    title: "محلي بازارونه د TeamCash شراکت د ودې لپاره",
    description:
      "TeamCash پر محلي حضور ولاړ دی. په هر هېواد کې د تادیاتو عادت، د اړیکې سرعت او باوري شریکان مهم دي.",
    summaryValue: "7",
    summaryDescription: "هېوادونه د TeamCash شراکت لپاره",
    summaryText:
      "هر هېواد جلا بازار دی. TeamCash دا بازارونه په یوه شریکه شبکه کې نښلوي، د ملاتړ او روښانه عملیاتو سره.",
    countries: [
      { name: "منګولیا", note: "قوي محلي اړیکه او د کاروونکو د چلند ښه پوهه." },
      { name: "تاجکستان", note: "له محلي بازار او ایجنټانو سره انعطاف منونکی کار." },
      { name: "ازبکستان", note: "تمرکز پر وده او ثابتو تادیاتي سناریوګانو." },
      { name: "آذربایجان", note: "چټک عملیات او د پروسو ښه همغږي." },
      { name: "ترکمنستان", note: "د محلي عملیاتي ماډل دقیق تنظیم." },
      { name: "قرغزستان", note: "اسانه نښلول او د ایجنټانو د شبکې وده." },
      { name: "افغانستان", note: "باور، ثابتې پروسې او ښه ملاتړ." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "خپل د TeamCash شراکت فارمټ وټاکئ",
    description: "فارمټ ستاسو له هېواد، ټیم، ټرافیک او عملیاتي وړتیا سره تړاو لري.",
    items: [
      {
        title: "Payment Agent",
        items: [
          "په خپل هېواد کې د محلي ډیپازټ او ویستلو کار.",
          "د هغو ټیمونو لپاره چې ورځنی کار باوري اداره کولی شي.",
          "تمرکز پر سرعت، لاسرسي او ساده پروسه.",
          "د TeamCash د ایجنټانو شبکې د ودې لپاره مناسب.",
        ],
        cta: "Payment Agent شئ",
      },
      {
        title: "E-payment Agent",
        items: [
          "د محلي بازار لپاره ډیجیټل تادیاتي سناریو.",
          "د e-payment، routing یا fintech تجربې لرونکو ټیمونو لپاره.",
          "تمرکز پر اسانتیا، چټک پروسس او ثبات.",
          "TeamCash له یوازې cash سناریو څخه پراخوي.",
        ],
        cta: "E-payment Agent شئ",
      },
      {
        title: "Affiliate Partner",
        items: [
          "د هغو شریکانو لپاره چې ټرافیک، ټولنه، رسنۍ یا performance ټیم لري.",
          "تمرکز پر د کاروونکو جذب او د شراکت د چینل وده.",
          "له TeamCash سیمو او محلي بازارونو سره یوځای کار کولی شي.",
          "د promotion له لارې د عاید د ودې لپاره مناسب.",
        ],
        cta: "Affiliate Partner شئ",
      },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "څه شی TeamCash قوي شراکت جوړوي",
    description:
      "د TeamCash ارزښت یوازې تادیات نه دي، بلکې شریکان، محلي بازارونه او عملیاتي ملاتړ سره نښلوي.",
    items: [
      { title: "درې د نښلېدو فارمټونه", description: "Payment Agent، E-payment Agent او Affiliate Partner په یوه TeamCash سیستم کې بېلابېل رولونه لري." },
      { title: "تمرکز پر ډیپازټ او ویستل", description: "سرعت، اسانتیا او محلي برابرښت د TeamCash بنسټ دی." },
      { title: "د ټیم ملاتړ", description: "ټیم په پیل، عملیاتو او وده کې له شریک سره پاتې کېږي." },
      { title: "سیستم د ودې لپاره", description: "پوښښ، شریکان او د عملیاتو حجم له ګډوډۍ پرته لویېږي." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "د TeamCash شراکت په لنډ ډول",
    description: "مهمې پوښتنې مخکې له نښلېدو.",
    items: [
      { question: "کوم فارمټونه شته؟", answer: "Payment Agent د محلي ډیپازټ او ویستلو لپاره، E-payment Agent د ډیجیټل تادیاتو لپاره، Affiliate Partner د کاروونکو د جذب لپاره." },
      { question: "TeamCash ولې مهم دی؟", answer: "TeamCash د ډیپازټ او ویستلو کار چټک، روښانه او د محلي بازار سره برابر کوي." },
      { question: "Payment Agent د چا لپاره دی؟", answer: "د هغو کسانو لپاره چې غواړي په خپل هېواد کې د محلي تادیاتو شریک شي." },
      { question: "Affiliate Partner د چا لپاره دی؟", answer: "د هغو کسانو لپاره چې له ټرافیک، promo-code، ټولنې یا performance ماډل سره کار کوي." },
      { question: "محلي تجربه ولې مهمه ده؟", answer: "د تادیاتو عادتونه او د کاروونکو تمې په هر هېواد کې فرق لري، نو محلي پوهه پایله ښه کوي." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "راځئ د TeamCash شراکت وڅېړو",
    description: "درخواست پرېږدئ، موږ به بازار، فارمټ او د نښلېدو لاره یوځای وټاکو.",
    telegramLabel: "Telegram",
    telegramHandle: "@teamcash_partnerships",
    formTitle: "درخواست پرېږدئ",
    submit: "درخواست ولېږئ",
    fields: {
      name: "نوم",
      company: "شرکت",
      country: "هېواد",
      telegram: "Telegram / اړیکه",
      details: "تبصره",
      placeholders: {
        name: "ستاسو نوم",
        company: "د شرکت یا ټیم نوم",
        country: "لکه افغانستان",
        telegram: "@username",
        details: "ولیکئ کوم فارمټ مو خوښېږي: Payment Agent، E-payment Agent یا Affiliate Partner.",
      },
    },
    emailSubject: "د TeamCash د نښلېدو غوښتنه",
  },
  footer: {
    description: "د TeamCash شراکت د محلي تادیاتو ایجنټانو، e-payment ټیمونو او affiliate شریکانو لپاره.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "د محصول په اړه", href: sharedLinks.about },
    ],
  },
  geographyTelegramLabel: "Telegram",
});

Object.assign(siteContent.tg, {
  metadata: {
    title: "TeamCash Partnerships | Шабакаи шарикони пардохти маҳаллӣ",
    description: "Шарикии TeamCash барои Payment Agent, E-payment Agent ва Affiliate Partner.",
  },
  header: { cta: "Шарик шудан", languages: "Забонҳо" },
  hero: {
    ...siteContent.tg.hero,
    titleLead: "Шабакаи шарикии",
    titleAccent: "TeamCash барои пардохтҳои маҳаллӣ",
    description:
      "TeamCash шарикон, агентҳои пардохти маҳаллӣ ва e-payment дастаҳоро ба як модели оддӣ мепайвандад: депозит, гирифтани маблағ ва кори ҳаррӯза дар бозори маҳаллӣ.",
    primaryCta: "Шарики TeamCash шудан",
    secondaryCta: "Интихоби формат",
    chips: [
      { value: "3", label: "формати шарикӣ барои дастаҳои гуногун" },
      { value: "7", label: "кишвари асосӣ бо таҷрибаи маҳаллӣ" },
      { value: "24/7", label: "дастгирии шарикон ва агентҳо" },
    ],
    panelTitle: "Як система барои Payment Agent, E-payment Agent ва Affiliate Partner",
    stackItems: [
      "Payment Agent: депозит ва гирифтани маблағ дар бозори маҳаллӣ",
      "E-payment Agent: пардохтҳои рақамӣ ва суръати амалиёт",
      "Affiliate Partner: афзоиш тавассути трафик ва комьюнити",
    ],
    focusDescription:
      "Мавзӯи асосии сайт TeamCash Partnerships аст: чӣ гуна пайваст шудан, кадом форматро интихоб кардан ва чӣ гуна дар пардохтҳои маҳаллӣ рушд кардан.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "Шарикӣ бо нақши равшан ва роҳи одии рушд",
    description:
      "Фокус ба TeamCash аст: пайваст кардани агентҳо, амалиёти пардохт, таҷрибаи маҳаллӣ ва дастгирии рушд.",
    cards: [
      { title: "Payment Agent Program", description: "Барои шариконе, ки мехоҳанд бо депозит ва гирифтани маблағ дар кишвари худ кор кунанд." },
      { title: "E-payment Agent Program", description: "Барои дастаҳое, ки метавонанд пардохтҳои рақамиро тезтар ва қулайтар кунанд." },
      { title: "Affiliate Partner Program", description: "Барои шариконе, ки трафик, комьюнити ё медиа доранд ва мехоҳанд аудитория биёранд." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Чӣ гуна шарик ба TeamCash пайваст мешавад",
    description: "Аввал форматро интихоб мекунем, баъд бозор ва равандро омода карда, корро оғоз мекунем.",
    steps: [
      { step: "01", title: "Форматро интихоб мекунем", description: "Payment Agent, E-payment Agent ё Affiliate Partner — мувофиқи кишвар ва таҷрибаи даста." },
      { step: "02", title: "Раванди TeamCash-ро месозем", description: "Нақшҳо, иртибот, қоидаҳои кор ва сценарияҳои пардохтро равшан мекунем." },
      { step: "03", title: "Корро оғоз мекунем", description: "Даста дар старт, суръат ва сифати кор кӯмак мекунад." },
      { step: "04", title: "Шабакаро калон мекунем", description: "Вақте модел устувор шуд, кишвар, агентҳо ва ҳаҷми корро зиёд мекунем." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "Формати TeamCash-шарикии худро интихоб кунед",
    description: "Формат аз кишвар, даста, трафик ва имконияти оператсионии шумо вобаста аст.",
    items: [
      { title: "Payment Agent", items: ["Кор бо депозит ва гирифтани маблағ дар кишвари худ.", "Барои дастаҳое, ки амалиёти ҳаррӯзаро идора карда метавонанд.", "Фокус ба суръат, дастрасӣ ва равандҳои фаҳмо.", "Муносиб барои рушди шабакаи агентҳои TeamCash."], cta: "Payment Agent шудан" },
      { title: "E-payment Agent", items: ["Сценарияи пардохти рақамӣ барои бозори маҳаллӣ.", "Барои дастаҳои e-payment, fintech ё routing.", "Фокус ба қулайӣ, суръат ва устуворӣ.", "TeamCash-ро берун аз cash-сценарияҳо калон мекунад."], cta: "E-payment Agent шудан" },
      { title: "Affiliate Partner", items: ["Барои шарикон бо трафик, комьюнити ё медиа.", "Фокус ба ҷалби аудитория ва рушди канал.", "Метавонад бо бозорҳои маҳаллии TeamCash якҷо кор кунад.", "Муносиб барои афзоиши даромад тавассути промо."], cta: "Affiliate Partner шудан" },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "Чаро TeamCash самти қавии шарикӣ аст",
    description: "Арзиши TeamCash дар пайвасти шарикон, бозорҳои маҳаллӣ ва дастгирии оператсионӣ аст.",
    items: [
      { title: "Се формати пайвастшавӣ", description: "Payment Agent, E-payment Agent ва Affiliate Partner нақшҳои гуногунро дар як система мепӯшонанд." },
      { title: "Фокус ба депозит ва гирифтани маблағ", description: "Суръат, қулайӣ ва мутобиқшавӣ ба бозори маҳаллӣ асоси TeamCash аст." },
      { title: "Дастгирии даста", description: "Даста дар оғоз, оператсионка ва рушд ҳамроҳӣ мекунад." },
      { title: "Система барои рушд", description: "Шабака, шарикон ва ҳаҷми амалиётро бе бесарусомонӣ калон кардан мумкин аст." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Кӯтоҳ дар бораи TeamCash-шарикӣ",
    description: "Саволҳои асосӣ пеш аз пайвастшавӣ.",
    items: [
      { question: "Кадом форматҳо ҳастанд?", answer: "Payment Agent барои депозит ва гирифтани маблағ, E-payment Agent барои пардохтҳои рақамӣ, Affiliate Partner барои ҷалби аудитория." },
      { question: "TeamCash барои чӣ муҳим аст?", answer: "TeamCash кори депозит ва гирифтани маблағро тез, фаҳмо ва мувофиқ ба бозори маҳаллӣ мекунад." },
      { question: "Payment Agent ба кӣ мувофиқ аст?", answer: "Ба онҳое, ки мехоҳанд дар кишвари худ ҳамчун шарики пардохти маҳаллӣ кор кунанд." },
      { question: "Affiliate Partner ба кӣ мувофиқ аст?", answer: "Ба онҳое, ки трафик, промо-код, комьюнити ё performance-модел доранд." },
      { question: "Чаро таҷрибаи маҳаллӣ муҳим аст?", answer: "Дар ҳар кишвар одати пардохт ва интизории корбар дигар аст, барои ҳамин локал фаҳмиш натиҷаро беҳтар мекунад." },
    ],
  },
  contact: {
    ...siteContent.tg.contact,
    title: "TeamCash-шарикиро муҳокима мекунем",
    description: "Дархост гузоред, мо бозор, формат ва роҳи пайвастшавиро якҷо интихоб мекунем.",
    fields: {
      ...siteContent.tg.contact.fields,
      placeholders: {
        name: "Номи шумо",
        company: "Номи ширкат ё даста",
        country: "Масалан, Тоҷикистон",
        telegram: "@username",
        details: "Нависед, кадом формат ҷолиб аст: Payment Agent, E-payment Agent ё Affiliate Partner.",
      },
    },
  },
  footer: {
    description: "TeamCash-шарикӣ барои агентҳои пардохти маҳаллӣ, e-payment дастаҳо ва affiliate-шарикон.",
    links: siteContent.tg.footer.links,
  },
});

Object.assign(siteContent.uz, {
  metadata: {
    title: "TeamCash Partnerships | Mahalliy to'lov hamkorlari tarmog'i",
    description: "TeamCash hamkorligi Payment Agent, E-payment Agent va Affiliate Partner uchun.",
  },
  header: { cta: "Hamkor bo'lish", languages: "Tillar" },
  hero: {
    ...siteContent.uz.hero,
    titleLead: "TeamCash hamkorlik tarmog'i",
    titleAccent: "mahalliy to'lovlar uchun",
    description:
      "TeamCash hamkorlar, mahalliy to'lov agentlari va e-payment jamoalarini oddiy modelga ulaydi: depozit, yechib olish va mahalliy bozordagi kundalik operatsiya.",
    primaryCta: "TeamCash hamkori bo'lish",
    secondaryCta: "Format tanlash",
    chips: [
      { value: "3", label: "turli jamoalar uchun hamkorlik formati" },
      { value: "7", label: "mahalliy tajribaga ega asosiy mamlakat" },
      { value: "24/7", label: "hamkorlar va agentlar uchun yordam" },
    ],
    panelTitle: "Payment Agent, E-payment Agent va Affiliate Partner uchun yagona tizim",
    stackItems: [
      "Payment Agent: mahalliy depozit va yechib olish",
      "E-payment Agent: raqamli to'lovlar va operatsion tezlik",
      "Affiliate Partner: trafik va community orqali o'sish",
    ],
    focusDescription:
      "Saytning asosiy mavzusi TeamCash Partnerships: qanday ulanish, qaysi formatni tanlash va mahalliy to'lov infratuzilmasida qanday o'sish.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "Roli aniq va o'sish yo'li tushunarli hamkorlik",
    description: "Fokus TeamCash: agentlarni ulash, to'lov operatsiyalari, lokal tajriba va o'sishga yordam.",
    cards: [
      { title: "Payment Agent Program", description: "O'z mamlakatida depozit va yechib olish bilan ishlashni istagan lokal hamkorlar uchun." },
      { title: "E-payment Agent Program", description: "Raqamli to'lovlarni tezroq va qulayroq qiladigan jamoalar uchun." },
      { title: "Affiliate Partner Program", description: "Trafik, community yoki media resursi bor va auditoriya olib kelishni istagan hamkorlar uchun." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Hamkor TeamCash-ga qanday ulanadi",
    description: "Format tanlanadi, bozor kelishiladi, jarayon ishga tayyorlanadi va keyin natija kengaytiriladi.",
    steps: [
      { step: "01", title: "Hamkorlik formatini tanlaymiz", description: "Payment Agent, E-payment Agent yoki Affiliate Partner — mamlakat va jamoa imkoniyatiga qarab." },
      { step: "02", title: "TeamCash jarayonini sozlaymiz", description: "Rollar, aloqa, to'lov ssenariylari va kundalik ish qoidalarini aniqlaymiz." },
      { step: "03", title: "Ishni boshlaymiz", description: "Jamoa start, tezlik, sifat va muloqotni ushlab turishda yordam beradi." },
      { step: "04", title: "Tarmoqni kengaytiramiz", description: "Model barqaror bo'lsa, qamrov, agentlar va operatsiya hajmini oshiramiz." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "TeamCash hamkorlik modeli nima uchun barqaror ishlaydi",
    description: "Hamkor uchun oddiy jarayon, operatsiya tezligi, yordam va aniq o'sish mantiqi muhim.",
    items: [
      { title: "Tushunarli daromad modeli", description: "Har bir format aniq rolga bog'langan: to'lov operatsiyalari, e-payment ssenariylari yoki affiliate jalb qilish." },
      { title: "Operatsiyalar tezligi", description: "Jarayonlar depozit va yechib olishni jamoaga ortiqcha yuk bermasdan tez bajarish uchun optimallashtirilgan." },
      { title: "Mahalliy tajriba", description: "Ssenariylar real foydalanuvchi xatti-harakati va har bir mamlakat xususiyatlarini hisobga olib quriladi." },
      { title: "Tarmoqni kengaytirish", description: "Model regionlar, hamkorlar va yuklama bo'yicha oson kengayadi, boshqaruv esa tushunarli qoladi." },
      { title: "24/7 yordam", description: "Biz faqat ulab qo'ymaymiz, startda, operatsiyada va keyingi o'sishda ham kuzatib boramiz." },
      { title: "Regional qamrov", description: "Jamoa va jarayonlar xalqaro hamkorlik tarmog'ining bir qismi sifatida ishlashga tayyor." },
    ],
  },
  geography: {
    ...siteContent.uz.geography,
    title: "TeamCash hamkorliklarini rivojlantirish uchun mahalliy bozorlar",
    description:
      "TeamCash mahalliy ishtirok atrofida quriladi. Har bir mamlakatda o'z to'lov odatlari, aloqa tezligi va joyidagi ishonchli hamkorlar muhim.",
    summaryDescription: "TeamCash hamkorliklari uchun mamlakat",
    summaryText:
      "Har bir mamlakat alohida bozor. TeamCash bu bozorlarni qo'llab-quvvatlash, tajriba va tushunarli operatsiya bilan bitta hamkorlik tarmog'iga birlashtiradi.",
    countries: [
      { name: "Mongoliya", note: "Kuchli mahalliy kommunikatsiya va foydalanuvchi xatti-harakatini tushunish." },
      { name: "Tojikiston", note: "Mahalliy bozor dinamikasi va agentlar bilan moslashuvchan ishlash." },
      { name: "O'zbekiston", note: "Kengayish va barqaror to'lov ssenariylariga fokus." },
      { name: "Ozarbayjon", note: "Yuqori operatsion tezlik va jarayonlarning sifatli muvofiqlashtirilishi." },
      { name: "Turkmaniston", note: "Mahalliy operatsion modelni aniq sozlash bo'yicha tajriba." },
      { name: "Qirg'iziston", note: "Ulanish qulayligi va agentlar tarmog'ini rivojlantirishga yo'naltirilgan yondashuv." },
      { name: "Afg'oniston", note: "Ishonch, jarayonlar barqarorligi va yordam sifatiga e'tibor." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "TeamCash hamkorlik formatini tanlang",
    description: "Format mamlakat, jamoa, trafik manbasi va operatsion imkoniyatga bog'liq.",
    items: [
      { title: "Payment Agent", items: ["O'z mamlakatida lokal depozit va yechib olish bilan ishlash.", "Kundalik operatsiyani ishonchli boshqara oladigan jamoalar uchun.", "Fokus tezlik, qulaylik va tushunarli jarayonda.", "TeamCash agentlar tarmog'ini rivojlantirishga mos."], cta: "Payment Agent bo'lish" },
      { title: "E-payment Agent", items: ["Lokal bozor uchun raqamli to'lov ssenariysi.", "E-payment, routing yoki fintech tajribasi bor jamoalar uchun.", "Fokus qulaylik, ishlov tezligi va barqarorlikda.", "TeamCash-ni faqat cash-scenariylarga bog'lamasdan kengaytiradi."], cta: "E-payment Agent bo'lish" },
      { title: "Affiliate Partner", items: ["Trafik, community, media yoki performance jamoasi bor hamkorlar uchun.", "Fokus auditoriya jalb qilish va hamkorlik kanalini o'stirishda.", "TeamCash regionlari va lokal bozorlar bilan birga ishlashi mumkin.", "Promotsiya orqali daromadni oshirishni istaganlar uchun."], cta: "Affiliate Partner bo'lish" },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "TeamCash-ni kuchli hamkorlik yo'nalishi qiladigan narsa",
    description: "TeamCash qiymati faqat to'lovda emas, balki hamkorlar, lokal bozorlar va operatsion yordam bog'lanishida.",
    items: [
      { title: "Uch ulanish formati", description: "Payment Agent, E-payment Agent va Affiliate Partner bitta TeamCash tizimidagi turli rollarni yopadi." },
      { title: "Depozit va yechib olishga fokus", description: "Tezlik, qulaylik va lokal moslashuv TeamCash asosidir." },
      { title: "Jamoa yordami", description: "Jamoa startda, operatsiyada va o'sishda hamkorni kuzatadi." },
      { title: "O'sish uchun tizim", description: "Qamrov, hamkorlar va operatsiya hajmini tartibsiz kengaytirish mumkin." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "TeamCash hamkorligi haqida qisqa",
    description: "Ulanishdan oldin asosiy savollar.",
    items: [
      { question: "Qanday formatlar bor?", answer: "Payment Agent lokal depozit va yechib olish uchun, E-payment Agent raqamli to'lovlar uchun, Affiliate Partner auditoriya jalb qilish uchun." },
      { question: "TeamCash nima uchun muhim?", answer: "TeamCash depozit va yechib olish jarayonini tez, tushunarli va lokal bozorga mos qiladi." },
      { question: "Payment Agent kimlar uchun?", answer: "O'z mamlakatida lokal to'lov hamkori bo'lib ishlashni istaganlar uchun." },
      { question: "Affiliate Partner kimlar uchun?", answer: "Trafik, promo-kod, community yoki performance-model bilan ishlaydiganlar uchun." },
      { question: "Nega lokal tajriba muhim?", answer: "Har bir mamlakatda to'lov odati va foydalanuvchi kutilmasi boshqa, shuning uchun lokal bilim natijani kuchaytiradi." },
    ],
  },
  contact: {
    ...siteContent.uz.contact,
    title: "TeamCash hamkorligini muhokama qilamiz",
    description: "So'rov qoldiring, biz bozor, format va ulanish yo'lini birga tanlaymiz.",
    fields: {
      ...siteContent.uz.contact.fields,
      placeholders: {
        name: "Ismingiz",
        company: "Kompaniya yoki jamoa nomi",
        country: "Masalan, O'zbekiston",
        telegram: "@username",
        details: "Qaysi format qiziq: Payment Agent, E-payment Agent yoki Affiliate Partner.",
      },
    },
  },
  footer: {
    description: "TeamCash hamkorligi lokal to'lov agentlari, e-payment jamoalari va affiliate hamkorlar uchun.",
    links: siteContent.uz.footer.links,
  },
});

siteContent.az = {
  ...siteContent.uz,
  metadata: {
    title: "TeamCash Partnerships | Lokal ödəniş tərəfdaşları şəbəkəsi",
    description: "TeamCash tərəfdaşlığı Payment Agent, E-payment Agent və Affiliate Partner üçün.",
  },
  navItems: [
    { label: "Məhsul haqqında", href: "#about" },
    { label: "Necə işləyir", href: "#how-it-works" },
    { label: "Üstünlüklər", href: "#benefits" },
    { label: "Coğrafiya", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "Əlaqə", href: "#contact" },
  ],
  header: { cta: "Tərəfdaş olmaq", languages: "Dillər" },
  hero: {
    ...siteContent.uz.hero,
    titleLead: "TeamCash tərəfdaş şəbəkəsi",
    titleAccent: "lokal ödənişlər üçün",
    description:
      "TeamCash tərəfdaşları, lokal ödəniş agentlərini və e-payment komandalarını sadə modeldə birləşdirir: depozit, çıxarış və lokal bazarda gündəlik əməliyyat.",
    primaryCta: "TeamCash tərəfdaşı olmaq",
    secondaryCta: "Format seçmək",
    chips: [
      { value: "3", label: "fərqli komandalar üçün tərəfdaşlıq formatı" },
      { value: "7", label: "lokal təcrübəsi olan əsas ölkə" },
      { value: "24/7", label: "tərəfdaşlar və agentlər üçün dəstək" },
    ],
    panelTitle: "Payment Agent, E-payment Agent və Affiliate Partner üçün vahid sistem",
    stackItems: [
      "Payment Agent: lokal depozit və çıxarış",
      "E-payment Agent: rəqəmsal ödənişlər və əməliyyat sürəti",
      "Affiliate Partner: trafik və icma vasitəsilə böyümə",
    ],
    focusDescription:
      "Saytın əsas mövzusu TeamCash Partnerships-dir: necə qoşulmaq, hansı formatı seçmək və lokal ödəniş infrastrukturu ilə necə böyümək.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "Rolları aydın və böyümə yolu sadə olan tərəfdaşlıq",
    description: "Fokus TeamCash-dir: agentlərin qoşulması, ödəniş əməliyyatları, lokal təcrübə və böyüməyə dəstək.",
    cards: [
      { title: "Payment Agent Program", description: "Öz ölkəsində depozit və çıxarışlarla işləmək istəyən lokal tərəfdaşlar üçün." },
      { title: "E-payment Agent Program", description: "Rəqəmsal ödənişləri daha sürətli və rahat edə bilən komandalar üçün." },
      { title: "Affiliate Partner Program", description: "Trafiki, icması və ya media resursu olan, auditoriya gətirmək istəyən tərəfdaşlar üçün." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Tərəfdaş TeamCash-ə necə qoşulur",
    description: "Format seçilir, bazar razılaşdırılır, proses hazırlanır və nəticə mərhələli şəkildə böyüdülür.",
    steps: [
      { step: "01", title: "Tərəfdaşlıq formatını seçirik", description: "Payment Agent, E-payment Agent və ya Affiliate Partner — ölkəyə və komandanın imkanına görə." },
      { step: "02", title: "TeamCash prosesini qururuq", description: "Rolları, əlaqəni, ödəniş ssenarilərini və gündəlik iş qaydalarını müəyyən edirik." },
      { step: "03", title: "İşi başladırıq", description: "Komanda startda, sürətdə, keyfiyyətdə və aydın kommunikasiyada dəstək olur." },
      { step: "04", title: "Şəbəkəni genişləndiririk", description: "Model sabit işləyəndə əhatəni, agentləri və əməliyyat həcmini artırırıq." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "TeamCash tərəfdaşlıq modeli niyə stabil işləyir",
    description: "Tərəfdaş üçün sadə proses, sürətli əməliyyat, dəstək və aydın böyümə məntiqi vacibdir.",
    items: [
      { title: "Aydın qazanc modeli", description: "Hər format konkret rola bağlıdır: ödəniş əməliyyatları, e-payment ssenariləri və ya affiliate cəlbetmə." },
      { title: "Əməliyyat sürəti", description: "Proseslər depozit və çıxarışların komandaya əlavə yük yaratmadan sürətli işləməsi üçün optimallaşdırılıb." },
      { title: "Lokal təcrübə", description: "Ssenarilər real istifadəçi davranışı və hər ölkənin xüsusiyyətləri nəzərə alınaraq qurulur." },
      { title: "Şəbəkənin böyüməsi", description: "Model regionlar, tərəfdaşlar və yüklənmə üzrə asan genişlənir, idarəetmə isə aydın qalır." },
      { title: "24/7 dəstək", description: "Biz yalnız qoşmuruq, startda, əməliyyatda və sonrakı böyümədə də müşayiət edirik." },
      { title: "Regional əhatə", description: "Komanda və proseslər beynəlxalq tərəfdaşlıq şəbəkəsinin bir hissəsi kimi işləməyə hazırdır." },
    ],
  },
  geography: {
    ...siteContent.uz.geography,
    title: "TeamCash tərəfdaşlığının böyüməsi üçün lokal bazarlar",
    description:
      "TeamCash lokal iştirak üzərində qurulur. Hər ölkədə ödəniş vərdişi, kommunikasiya sürəti və yerli etibarlı tərəfdaşlar vacibdir.",
    summaryDescription: "TeamCash tərəfdaşlığı üçün ölkə",
    summaryText:
      "Hər ölkə ayrı bazardır. TeamCash bu bazarları dəstək, təcrübə və aydın əməliyyatla bir tərəfdaşlıq şəbəkəsində birləşdirir.",
    countries: [
      { name: "Monqolustan", note: "Güclü lokal kommunikasiya və istifadəçi davranışını anlama." },
      { name: "Tacikistan", note: "Lokal bazar dinamikası və agent qarşılıqlı əlaqəsi ilə çevik iş." },
      { name: "Özbəkistan", note: "Böyümə və stabil ödəniş ssenarilərinə fokus." },
      { name: "Azərbaycan", note: "Yüksək əməliyyat sürəti və proseslərin keyfiyyətli koordinasiyası." },
      { name: "Türkmənistan", note: "Lokal əməliyyat modelinin dəqiq qurulması üzrə təcrübə." },
      { name: "Qırğızıstan", note: "Qoşulmanın rahatlığı və agent şəbəkəsinin inkişafına yönəlmiş yanaşma." },
      { name: "Əfqanıstan", note: "Etibar, proseslərin sabitliyi və müşayiət keyfiyyətinə diqqət." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "TeamCash tərəfdaşlıq formatınızı seçin",
    description: "Format ölkə, komanda, trafik mənbəyi və əməliyyat imkanından asılıdır.",
    items: [
      { title: "Payment Agent", items: ["Öz ölkəsində lokal depozit və çıxarışlarla işləmək.", "Gündəlik əməliyyatı etibarlı idarə edə bilən komandalar üçün.", "Fokus sürət, rahatlıq və aydın prosesdədir.", "TeamCash agent şəbəkəsini inkişaf etdirmək üçün uyğundur."], cta: "Payment Agent olmaq" },
      { title: "E-payment Agent", items: ["Lokal bazar üçün rəqəmsal ödəniş ssenarisi.", "E-payment, routing və ya fintech təcrübəsi olan komandalar üçün.", "Fokus rahatlıq, emal sürəti və stabillikdədir.", "TeamCash-i yalnız cash ssenarilərindən kənara genişləndirir."], cta: "E-payment Agent olmaq" },
      { title: "Affiliate Partner", items: ["Trafiki, icması, mediası və ya performance komandası olan tərəfdaşlar üçün.", "Fokus auditoriyanın cəlbi və tərəfdaşlıq kanalının böyüməsindədir.", "TeamCash regionları və lokal bazarlarla birlikdə işləyə bilər.", "Promosiya ilə gəliri artırmaq istəyənlər üçün uyğundur."], cta: "Affiliate Partner olmaq" },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "TeamCash-i güclü tərəfdaşlıq istiqamətinə çevirən nədir",
    description: "TeamCash-in dəyəri yalnız ödənişdə deyil, tərəfdaşları, lokal bazarları və əməliyyat dəstəyini birləşdirməsindədir.",
    items: [
      { title: "Üç qoşulma formatı", description: "Payment Agent, E-payment Agent və Affiliate Partner bir TeamCash sistemində fərqli rolları əhatə edir." },
      { title: "Depozit və çıxarışa fokus", description: "Sürət, rahatlıq və lokal uyğunlaşma TeamCash-in əsasını təşkil edir." },
      { title: "Komanda dəstəyi", description: "Komanda startda, əməliyyatda və böyümədə tərəfdaşın yanında qalır." },
      { title: "Böyümə üçün sistem", description: "Əhatə, tərəfdaşlar və əməliyyat həcmi xaos olmadan böyüdülə bilər." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "TeamCash tərəfdaşlığı haqqında qısa",
    description: "Qoşulmadan əvvəl əsas suallar.",
    items: [
      { question: "Hansı formatlar var?", answer: "Payment Agent lokal depozit və çıxarış üçün, E-payment Agent rəqəmsal ödənişlər üçün, Affiliate Partner auditoriya cəlbi üçün." },
      { question: "TeamCash niyə vacibdir?", answer: "TeamCash depozit və çıxarış prosesini sürətli, aydın və lokal bazara uyğun edir." },
      { question: "Payment Agent kimlər üçündür?", answer: "Öz ölkəsində lokal ödəniş tərəfdaşı kimi işləmək istəyənlər üçün." },
      { question: "Affiliate Partner kimlər üçündür?", answer: "Trafik, promo-kod, icma və ya performance-model ilə işləyənlər üçün." },
      { question: "Lokal təcrübə niyə vacibdir?", answer: "Hər ölkədə ödəniş vərdişi və istifadəçi gözləntisi fərqlidir, buna görə lokal bilik nəticəni gücləndirir." },
    ],
  },
  contact: {
    ...siteContent.uz.contact,
    title: "TeamCash tərəfdaşlığını müzakirə edək",
    description: "Sorğu buraxın, bazarı, formatı və qoşulma yolunu birlikdə seçək.",
    submit: "Sorğu göndər",
    fields: {
      ...siteContent.uz.contact.fields,
      name: "Adınız",
      company: "Şirkət",
      country: "Ölkə",
      details: "Şərh",
      placeholders: {
        name: "Adınız",
        company: "Şirkət və ya komanda adı",
        country: "Məsələn, Azərbaycan",
        telegram: "@username",
        details: "Hansı format maraqlıdır: Payment Agent, E-payment Agent və ya Affiliate Partner.",
      },
    },
  },
  footer: {
    description: "TeamCash tərəfdaşlığı lokal ödəniş agentləri, e-payment komandaları və affiliate tərəfdaşlar üçündür.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "Məhsul haqqında", href: sharedLinks.about },
    ],
  },
};

siteContent.tk = {
  ...siteContent.uz,
  metadata: {
    title: "TeamCash Partnerships | Ýerli töleg hyzmatdaşlarynyň ulgamy",
    description: "TeamCash hyzmatdaşlygy Payment Agent, E-payment Agent we Affiliate Partner üçin.",
  },
  navItems: [
    { label: "Önüm barada", href: "#about" },
    { label: "Nädip işleýär", href: "#how-it-works" },
    { label: "Üstünlikler", href: "#benefits" },
    { label: "Geografiýa", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "Habarlaşmak", href: "#contact" },
  ],
  header: { cta: "Hyzmatdaş bolmak", languages: "Diller" },
  hero: {
    ...siteContent.uz.hero,
    titleLead: "TeamCash hyzmatdaşlyk ulgamy",
    titleAccent: "ýerli tölegler üçin",
    description:
      "TeamCash hyzmatdaşlary, ýerli töleg agentlerini we e-payment toparlaryny ýönekeý modele birleşdirýär: depozit, çykaryş we ýerli bazardaky gündelik operasiýa.",
    primaryCta: "TeamCash hyzmatdaşy bolmak",
    secondaryCta: "Format saýlamak",
    chips: [
      { value: "3", label: "dürli toparlar üçin hyzmatdaşlyk formaty" },
      { value: "7", label: "ýerli tejribesi bolan esasy ýurt" },
      { value: "24/7", label: "hyzmatdaşlar we agentler üçin goldaw" },
    ],
    panelTitle: "Payment Agent, E-payment Agent we Affiliate Partner üçin bitewi ulgam",
    stackItems: [
      "Payment Agent: ýerli depozit we çykaryş",
      "E-payment Agent: sanly tölegler we operasiýa tizligi",
      "Affiliate Partner: trafik we jemgyýet arkaly ösüş",
    ],
    focusDescription:
      "Sahypanyň esasy temasy TeamCash Partnerships: nädip goşulmaly, haýsy formaty saýlamaly we ýerli töleg infrastrukturasynyň içinde nädip ösmeli.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "Rollar düşnükli, ösüş ýoly sada hyzmatdaşlyk",
    description: "Fokus TeamCash: agentleri birikdirmek, töleg operasiýalary, ýerli tejribe we ösüş goldawy.",
    cards: [
      { title: "Payment Agent Program", description: "Öz ýurdunda depozit we çykaryş bilen işlemek isleýän ýerli hyzmatdaşlar üçin." },
      { title: "E-payment Agent Program", description: "Sanly tölegleri has çalt we amatly edip bilýän toparlar üçin." },
      { title: "Affiliate Partner Program", description: "Trafik, jemgyýet ýa-da media çeşmesi bolup, auditoria getirmek isleýän hyzmatdaşlar üçin." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Hyzmatdaş TeamCash-a nähili goşulýar",
    description: "Format saýlanýar, bazar ylalaşylýar, proses taýýarlanýar we soňra netije giňeldilýär.",
    steps: [
      { step: "01", title: "Hyzmatdaşlyk formatyny saýlaýarys", description: "Payment Agent, E-payment Agent ýa-da Affiliate Partner — ýurt we topar mümkinçiliklerine görä." },
      { step: "02", title: "TeamCash prosesini gurýarys", description: "Rollary, aragatnaşygy, töleg ssenarilerini we gündelik iş düzgünlerini kesgitleýäris." },
      { step: "03", title: "Işi başlaýarys", description: "Topar startda, tizlikde, hilde we düşnükli kommunikasiýada goldaw berýär." },
      { step: "04", title: "Tory giňeldýäris", description: "Model durnukly işlände, gurşawy, agentleri we operasiýa göwrümini artdyrýarys." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "TeamCash hyzmatdaşlyk modeli näme üçin durnukly işleýär",
    description: "Hyzmatdaş üçin sada proses, çalt operasiýa, goldaw we düşnükli ösüş logikasy möhümdir.",
    items: [
      { title: "Düşnükli girdeji modeli", description: "Her format anyk rola bagly: töleg operasiýalary, e-payment ssenarileri ýa-da affiliate çekiş." },
      { title: "Operasiýa tizligi", description: "Prosesler depozit we çykaryşlaryň topara artykmaç ýük salman çalt işlemegi üçin optimallaşdyrylan." },
      { title: "Ýerli tejribe", description: "Ssenariler hakyky ulanyjy hereketi we her ýurduň aýratynlyklary göz öňünde tutulyp gurulýar." },
      { title: "Toruň giňelmegi", description: "Model regionlar, hyzmatdaşlar we iş göwrümi boýunça aňsat giňelýär, dolandyryş bolsa düşnükli galýar." },
      { title: "24/7 goldaw", description: "Biz diňe birikdirmeýäris, startda, operasiýada we soňraky ösüşde hem ýoldaşlyk edýäris." },
      { title: "Sebitleýin gurşaw", description: "Topar we prosesler halkara hyzmatdaşlyk ulgamynyň bölegi hökmünde işlemäge taýýar." },
    ],
  },
  geography: {
    ...siteContent.uz.geography,
    title: "TeamCash hyzmatdaşlygynyň ösüşi üçin ýerli bazarlar",
    description:
      "TeamCash ýerli gatnaşygynyň üstünde gurulýar. Her ýurtda töleg endikleri, aragatnaşyk tizligi we ýerindäki ygtybarly hyzmatdaşlar möhümdir.",
    summaryDescription: "TeamCash hyzmatdaşlygy üçin ýurt",
    summaryText:
      "Her ýurt aýratyn bazardyr. TeamCash bu bazarlary goldaw, tejribe we düşnükli operasiýa bilen bir hyzmatdaşlyk toruna birleşdirýär.",
    countries: [
      { name: "Mongoliýa", note: "Güýçli ýerli kommunikasiýa we ulanyjy hereketine düşünmek." },
      { name: "Täjigistan", note: "Ýerli bazar dinamikasy we agent gatnaşyklary bilen çeýe iş." },
      { name: "Özbegistan", note: "Ösüşe we durnukly töleg ssenarilerine fokus." },
      { name: "Azerbaýjan", note: "Ýokary operasiýa tizligi we prosesleriň ýokary hilli utgaşdyrylmagy." },
      { name: "Türkmenistan", note: "Ýerli operasiýa modelini takyk sazlamak boýunça tejribe." },
      { name: "Gyrgyzystan", note: "Goşulmagyň amatlylygyna we agent toruny ösdürmäge gönükdirilen çemeleşme." },
      { name: "Owganystan", note: "Ynam, prosesleriň durnuklylygy we goldaw hiline üns." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "TeamCash hyzmatdaşlyk formatyňyzy saýlaň",
    description: "Format ýurt, topar, trafik çeşmesi we operasiýa mümkinçiligine bagly.",
    items: [
      { title: "Payment Agent", items: ["Öz ýurdunda ýerli depozit we çykaryş bilen işlemek.", "Gündelik operasiýany ygtybarly dolandyryp bilýän toparlar üçin.", "Fokus tizlikde, amatlylykda we düşnükli prosesde.", "TeamCash agent toruny ösdürmek üçin laýyk."], cta: "Payment Agent bolmak" },
      { title: "E-payment Agent", items: ["Ýerli bazar üçin sanly töleg ssenarisi.", "E-payment, routing ýa-da fintech tejribesi bolan toparlar üçin.", "Fokus amatlylykda, işleme tizliginde we durnuklylykda.", "TeamCash-i diňe cash ssenarilerinden daşyna giňeldýär."], cta: "E-payment Agent bolmak" },
      { title: "Affiliate Partner", items: ["Trafik, jemgyýet, media ýa-da performance topary bolan hyzmatdaşlar üçin.", "Fokus auditoria çekmekde we hyzmatdaşlyk kanalyny ösdürmekde.", "TeamCash regionlary we ýerli bazarlar bilen bile işläp biler.", "Promosiýa arkaly girdejini artdyrmak isleýänler üçin laýyk."], cta: "Affiliate Partner bolmak" },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "TeamCash-i güýçli hyzmatdaşlyk ugruna öwürýän zat näme",
    description: "TeamCash-iň gymmaty diňe tölegde däl, hyzmatdaşlary, ýerli bazarlary we operasiýa goldawyny birleşdirmekdedir.",
    items: [
      { title: "Üç goşulma formaty", description: "Payment Agent, E-payment Agent we Affiliate Partner bir TeamCash ulgamynda dürli rollary ýapýar." },
      { title: "Depozit we çykaryşa fokus", description: "Tizlik, amatlylyk we ýerli uýgunlaşma TeamCash-iň esasydyr." },
      { title: "Topar goldawy", description: "Topar startda, operasiýada we ösüşde hyzmatdaş bilen bile galýar." },
      { title: "Ösüş üçin ulgam", description: "Gurşawy, hyzmatdaşlary we operasiýa göwrümini bulaşyklyk bolmazdan giňeldip bolýar." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "TeamCash hyzmatdaşlygy barada gysgaça",
    description: "Goşulmazdan öň esasy soraglar.",
    items: [
      { question: "Haýsy formatlar bar?", answer: "Payment Agent ýerli depozit we çykaryş üçin, E-payment Agent sanly tölegler üçin, Affiliate Partner auditoria çekmek üçin." },
      { question: "TeamCash näme üçin möhüm?", answer: "TeamCash depozit we çykaryş prosesini çalt, düşnükli we ýerli bazara laýyk edýär." },
      { question: "Payment Agent kimler üçin?", answer: "Öz ýurdunda ýerli töleg hyzmatdaşy hökmünde işlemek isleýänler üçin." },
      { question: "Affiliate Partner kimler üçin?", answer: "Trafik, promo-code, jemgyýet ýa-da performance-model bilen işleýänler üçin." },
      { question: "Ýerli tejribe näme üçin möhüm?", answer: "Her ýurtda töleg endigi we ulanyjy garaşyşy tapawutlanýar, şonuň üçin ýerli bilim netijäni güýçlendirýär." },
    ],
  },
  contact: {
    ...siteContent.uz.contact,
    title: "TeamCash hyzmatdaşlygyny ara alyp maslahatlaşalyň",
    description: "Sorag goýuň, bazary, formaty we goşulma ýoluny bile saýlarys.",
    submit: "Soragy ibermek",
    fields: {
      ...siteContent.uz.contact.fields,
      name: "Adyňyz",
      company: "Kompaniýa",
      country: "Ýurt",
      details: "Teswir",
      placeholders: {
        name: "Adyňyz",
        company: "Kompaniýa ýa-da topar ady",
        country: "Mysal üçin, Türkmenistan",
        telegram: "@username",
        details: "Haýsy format gyzykly: Payment Agent, E-payment Agent ýa-da Affiliate Partner.",
      },
    },
  },
  footer: {
    description: "TeamCash hyzmatdaşlygy ýerli töleg agentleri, e-payment toparlary we affiliate hyzmatdaşlar üçin.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "Önüm barada", href: sharedLinks.about },
    ],
  },
};

siteContent.ky = {
  ...siteContent.uz,
  metadata: {
    title: "TeamCash Partnerships | Жергиликтүү төлөм өнөктөштөр тармагы",
    description: "TeamCash өнөктөштүгү Payment Agent, E-payment Agent жана Affiliate Partner үчүн.",
  },
  navItems: [
    { label: "Өнүм жөнүндө", href: "#about" },
    { label: "Кантип иштейт", href: "#how-it-works" },
    { label: "Артыкчылыктар", href: "#benefits" },
    { label: "География", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "Байланыш", href: "#contact" },
  ],
  header: { cta: "Өнөктөш болуу", languages: "Тилдер" },
  hero: {
    ...siteContent.uz.hero,
    titleLead: "TeamCash өнөктөштүк тармагы",
    titleAccent: "жергиликтүү төлөмдөр үчүн",
    description:
      "TeamCash өнөктөштөрдү, жергиликтүү төлөм агенттерин жана e-payment командаларын жөнөкөй моделге бириктирет: депозит, чыгаруу жана жергиликтүү рыноктогу күнүмдүк операция.",
    primaryCta: "TeamCash өнөктөшү болуу",
    secondaryCta: "Формат тандоо",
    chips: [
      { value: "3", label: "ар башка командалар үчүн өнөктөштүк форматы" },
      { value: "7", label: "жергиликтүү тажрыйбасы бар негизги өлкө" },
      { value: "24/7", label: "өнөктөштөр жана агенттер үчүн колдоо" },
    ],
    panelTitle: "Payment Agent, E-payment Agent жана Affiliate Partner үчүн бирдиктүү система",
    stackItems: [
      "Payment Agent: жергиликтүү депозит жана чыгаруу",
      "E-payment Agent: санарип төлөмдөр жана операция ылдамдыгы",
      "Affiliate Partner: трафик жана коомчулук аркылуу өсүү",
    ],
    focusDescription:
      "Сайттын негизги темасы TeamCash Partnerships: кантип кошулуу, кайсы форматты тандоо жана жергиликтүү төлөм инфраструктурасында кантип өсүү.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "Ролу түшүнүктүү жана өсүү жолу так өнөктөштүк",
    description: "Фокус TeamCash: агенттерди кошуу, төлөм операциялары, жергиликтүү тажрыйба жана өсүүгө колдоо.",
    cards: [
      { title: "Payment Agent Program", description: "Өз өлкөсүндө депозит жана чыгаруу менен иштегиси келген жергиликтүү өнөктөштөр үчүн." },
      { title: "E-payment Agent Program", description: "Санарип төлөмдөрдү тезирээк жана ыңгайлуураак кылган командалар үчүн." },
      { title: "Affiliate Partner Program", description: "Трафиги, коомчулугу же медиа ресурсу бар жана аудитория алып келгиси келген өнөктөштөр үчүн." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Өнөктөш TeamCash-ке кантип кошулат",
    description: "Формат тандалат, рынок макулдашылат, процесс ишке даярдалат жана андан кийин жыйынтык кеңейтилет.",
    steps: [
      { step: "01", title: "Өнөктөштүк форматын тандайбыз", description: "Payment Agent, E-payment Agent же Affiliate Partner — өлкө жана команда мүмкүнчүлүгүнө жараша." },
      { step: "02", title: "TeamCash процессин жөндөйбүз", description: "Ролдорду, байланышты, төлөм сценарийлерин жана күнүмдүк иш эрежелерин тактайбыз." },
      { step: "03", title: "Ишти баштайбыз", description: "Команда стартта, ылдамдыкта, сапатта жана түшүнүктүү байланышта жардам берет." },
      { step: "04", title: "Тармакты кеңейтебиз", description: "Модель туруктуу иштесе, камтууну, агенттерди жана операция көлөмүн көбөйтөбүз." },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "TeamCash өнөктөштүк модели эмне үчүн туруктуу иштейт",
    description: "Өнөктөш үчүн жөнөкөй процесс, операция ылдамдыгы, колдоо жана түшүнүктүү өсүү логикасы маанилүү.",
    items: [
      { title: "Түшүнүктүү киреше модели", description: "Ар бир формат белгилүү ролго байланган: төлөм операциялары, e-payment сценарийлери же affiliate тартуу." },
      { title: "Операциялардын ылдамдыгы", description: "Процесстер депозит жана чыгарууну командага ашыкча жүк салбай тез аткарууга ылайыкталган." },
      { title: "Жергиликтүү тажрыйба", description: "Сценарийлер колдонуучунун реалдуу жүрүм-турумун жана ар бир өлкөнүн өзгөчөлүгүн эске алып курулат." },
      { title: "Тармакты масштабдоо", description: "Модель региондор, өнөктөштөр жана жүктөм боюнча оңой кеңейет, башкаруу түшүнүктүү бойдон калат." },
      { title: "24/7 колдоо", description: "Биз жөн гана кошуп койбойбуз, стартта, операцияда жана кийинки өсүүдө коштоп турабыз." },
      { title: "Регионалдык камтуу", description: "Команда жана процесстер эл аралык өнөктөштүк тармагынын бөлүгү катары иштөөгө даяр." },
    ],
  },
  geography: {
    ...siteContent.uz.geography,
    title: "TeamCash өнөктөштүктөрүн өнүктүрүү үчүн жергиликтүү рыноктор",
    description:
      "TeamCash жергиликтүү катышууга таянат. Ар бир өлкөдө төлөм адаттары, байланыш ылдамдыгы жана ишенимдүү жергиликтүү өнөктөштөр маанилүү.",
    summaryDescription: "TeamCash өнөктөштүктөрү үчүн өлкө",
    summaryText:
      "Ар бир өлкө өзүнчө рынок. TeamCash бул рынокторду колдоо, тажрыйба жана түшүнүктүү операция менен бир өнөктөштүк тармакка бириктирет.",
    countries: [
      { name: "Монголия", note: "Күчтүү жергиликтүү коммуникация жана колдонуучу жүрүм-турумун түшүнүү." },
      { name: "Тажикстан", note: "Жергиликтүү рынок динамикасы жана агенттер менен ийкемдүү иштөө." },
      { name: "Өзбекстан", note: "Кеңейүү жана туруктуу төлөм сценарийлерине фокус." },
      { name: "Азербайжан", note: "Жогорку операция ылдамдыгы жана процесстерди сапаттуу координациялоо." },
      { name: "Түркмөнстан", note: "Жергиликтүү операция моделин так жөндөө боюнча тажрыйба." },
      { name: "Кыргызстан", note: "Кошулуу ыңгайлуулугу жана агенттик тармакты өнүктүрүүгө багытталган ыкма." },
      { name: "Афганистан", note: "Ишеним, процесстердин туруктуулугу жана колдоо сапатына көңүл." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "TeamCash өнөктөштүк форматын тандаңыз",
    description: "Формат өлкөгө, командага, трафик булагына жана операциялык мүмкүнчүлүккө жараша болот.",
    items: [
      { title: "Payment Agent", items: ["Өз өлкөсүндө жергиликтүү депозит жана чыгаруу менен иштөө.", "Күнүмдүк операцияны ишенимдүү башкара алган командалар үчүн.", "Фокус ылдамдыкта, ыңгайлуулукта жана түшүнүктүү процессте.", "TeamCash агенттик тармагын өнүктүрүүгө ылайыктуу."], cta: "Payment Agent болуу" },
      { title: "E-payment Agent", items: ["Жергиликтүү рынок үчүн санарип төлөм сценарийи.", "E-payment, routing же fintech тажрыйбасы бар командалар үчүн.", "Фокус ыңгайлуулукта, иштетүү ылдамдыгында жана туруктуулукта.", "TeamCash-ти cash сценарийлери менен гана чектебей кеңейтет."], cta: "E-payment Agent болуу" },
      { title: "Affiliate Partner", items: ["Трафиги, коомчулугу, медиасы же performance командасы бар өнөктөштөр үчүн.", "Фокус аудитория тартууда жана өнөктөштүк каналын өстүрүүдө.", "TeamCash региондору жана жергиликтүү рыноктор менен бирге иштей алат.", "Промо аркылуу кирешени көбөйткүсү келгендер үчүн."], cta: "Affiliate Partner болуу" },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "TeamCash-ти күчтүү өнөктөштүк багыты кылган нерсе",
    description: "TeamCashтин баалуулугу төлөмдө гана эмес, өнөктөштөрдү, жергиликтүү рынокторду жана операциялык колдоону бириктирүүдө.",
    items: [
      { title: "Үч кошулуу форматы", description: "Payment Agent, E-payment Agent жана Affiliate Partner бир TeamCash системасында ар башка ролдорду жабат." },
      { title: "Депозит жана чыгарууга фокус", description: "Ылдамдык, ыңгайлуулук жана жергиликтүү ылайыкташуу TeamCashтин негизи." },
      { title: "Команда колдоосу", description: "Команда стартта, операцияда жана өсүүдө өнөктөштү коштоп турат." },
      { title: "Өсүү үчүн система", description: "Камтууну, өнөктөштөрдү жана операция көлөмүн башаламандыксыз кеңейтүүгө болот." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "TeamCash өнөктөштүгү тууралуу кыскача",
    description: "Кошулар алдында негизги суроолор.",
    items: [
      { question: "Кандай форматтар бар?", answer: "Payment Agent жергиликтүү депозит жана чыгаруу үчүн, E-payment Agent санарип төлөмдөр үчүн, Affiliate Partner аудитория тартуу үчүн." },
      { question: "TeamCash эмне үчүн маанилүү?", answer: "TeamCash депозит жана чыгаруу процессин тез, түшүнүктүү жана жергиликтүү рынокко ылайык кылат." },
      { question: "Payment Agent кимдер үчүн?", answer: "Өз өлкөсүндө жергиликтүү төлөм өнөктөшү болуп иштегиси келгендер үчүн." },
      { question: "Affiliate Partner кимдер үчүн?", answer: "Трафик, промокод, коомчулук же performance-модель менен иштегендер үчүн." },
      { question: "Жергиликтүү тажрыйба эмне үчүн маанилүү?", answer: "Ар бир өлкөдө төлөм адаты жана колдонуучу күтүүсү башка, ошондуктан жергиликтүү билим жыйынтыкты күчөтөт." },
    ],
  },
  contact: {
    ...siteContent.uz.contact,
    title: "TeamCash өнөктөштүгүн талкуулайлы",
    description: "Сурам калтырыңыз, биз рынокту, форматты жана кошулуу жолун бирге тандайбыз.",
    submit: "Сурам жөнөтүү",
    fields: {
      ...siteContent.uz.contact.fields,
      name: "Атыңыз",
      company: "Компания",
      country: "Өлкө",
      details: "Комментарий",
      placeholders: {
        name: "Атыңыз",
        company: "Компания же команда аты",
        country: "Мисалы, Кыргызстан",
        telegram: "@username",
        details: "Кайсы формат кызык: Payment Agent, E-payment Agent же Affiliate Partner.",
      },
    },
  },
  footer: {
    description: "TeamCash өнөктөштүгү жергиликтүү төлөм агенттери, e-payment командалары жана affiliate өнөктөштөр үчүн.",
    links: [
      { label: "Telegram", href: sharedLinks.telegram },
      { label: "Email", href: sharedLinks.email },
      { label: "Өнүм жөнүндө", href: sharedLinks.about },
    ],
  },
};

Object.assign(siteContent.fa, {
  metadata: {
    title: "TeamCash Partnerships | شبکه شریکان پرداخت محلی",
    description: "همکاری TeamCash برای Payment Agent، E-payment Agent و Affiliate Partner.",
  },
  hero: {
    ...siteContent.fa.hero,
    titleLead: "شبکه همکاری TeamCash",
    titleAccent: "برای پرداخت‌های محلی",
    description:
      "TeamCash شریکان، ایجنت‌های پرداخت محلی و تیم‌های e-payment را به یک مدل ساده وصل می‌کند: دیپازیت، برداشت و عملیات روزانه در بازار محلی.",
    primaryCta: "شریک TeamCash شوید",
    secondaryCta: "انتخاب فرمت",
    chips: [
      { value: "3", label: "فرمت همکاری برای تیم‌های مختلف" },
      { value: "7", label: "کشور کلیدی با تجربه محلی" },
      { value: "24/7", label: "پشتیبانی شریکان و ایجنت‌ها" },
    ],
    panelTitle: "یک سیستم واحد برای ایجنت پرداخت، ایجنت پرداخت دیجیتال و شریک افیلیت",
    stackItems: [
      "ایجنت پرداخت؛ دیپازیت و برداشت محلی",
      "ایجنت پرداخت دیجیتال؛ پرداخت آنلاین و سرعت عملیات",
      "شریک افیلیت؛ رشد با ترافیک و جامعه",
    ],
    focusDescription:
      "موضوع اصلی این سایت همکاری‌های TeamCash است؛ چگونه وصل شوید، کدام فرمت را انتخاب کنید و چطور در پرداخت‌های محلی رشد کنید.",
  },
  about: {
    eyebrow: "TeamCash Model",
    title: "همکاری با نقش روشن و مسیر رشد ساده",
    description: "تمرکز روی TeamCash است: اتصال ایجنت‌ها، عملیات پرداخت، تجربه محلی و پشتیبانی رشد.",
    cards: [
      { title: "Payment Agent Program", description: "برای شریکانی که می‌خواهند با دیپازیت و برداشت در کشور خود کار کنند." },
      { title: "E-payment Agent Program", description: "برای تیم‌هایی که می‌توانند پرداخت دیجیتال را سریع‌تر و آسان‌تر کنند." },
      { title: "Affiliate Partner Program", description: "برای شریکانی که ترافیک، جامعه یا رسانه دارند و می‌خواهند کاربر جذب کنند." },
    ],
  },
  audiences: {
    eyebrow: "Collaboration",
    title: "فرمت همکاری TeamCash خود را انتخاب کنید",
    description: "فرمت به کشور، تیم، منبع ترافیک و توان عملیاتی شما بستگی دارد.",
    items: [
      { title: "Payment Agent", items: ["کار با دیپازیت و برداشت محلی در کشور خود.", "برای تیم‌هایی که عملیات روزانه را قابل اعتماد مدیریت می‌کنند.", "تمرکز روی سرعت، دسترسی و روند ساده برای کاربر.", "مناسب برای رشد شبکه ایجنت‌های TeamCash."], cta: "Payment Agent شوید" },
      { title: "E-payment Agent", items: ["سناریوی پرداخت دیجیتال برای بازار محلی.", "برای تیم‌های e-payment، routing یا fintech.", "تمرکز روی راحتی، سرعت پردازش و ثبات.", "کمک می‌کند TeamCash فقط محدود به cash نباشد."], cta: "E-payment Agent شوید" },
      { title: "Affiliate Partner", items: ["برای شریکانی با ترافیک، جامعه، رسانه یا تیم performance.", "تمرکز روی جذب مخاطب و رشد کانال همکاری.", "می‌تواند با مناطق TeamCash و بازارهای محلی کار کند.", "برای رشد درآمد از طریق تبلیغ مناسب است."], cta: "Affiliate Partner شوید" },
    ],
  },
  product: {
    eyebrow: "TeamCash Advantage",
    title: "چه چیزی TeamCash را به مسیر همکاری قوی تبدیل می‌کند",
    description: "ارزش TeamCash فقط پرداخت نیست، بلکه اتصال شریکان، بازارهای محلی و پشتیبانی عملیاتی است.",
    items: [
      { title: "سه فرمت اتصال", description: "Payment Agent، E-payment Agent و Affiliate Partner نقش‌های مختلف را در یک سیستم TeamCash پوشش می‌دهند." },
      { title: "تمرکز بر دیپازیت و برداشت", description: "سرعت، راحتی و سازگاری محلی پایه TeamCash است." },
      { title: "پشتیبانی تیم", description: "تیم در شروع، عملیات و رشد همراه شریک می‌ماند." },
      { title: "سیستم برای رشد", description: "پوشش، شریکان و حجم عملیات را می‌توان بدون آشفتگی بزرگ کرد." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "کوتاه درباره همکاری TeamCash",
    description: "پرسش‌های اصلی پیش از اتصال.",
    items: [
      { question: "چه فرمت‌هایی وجود دارد؟", answer: "Payment Agent برای دیپازیت و برداشت محلی، E-payment Agent برای پرداخت دیجیتال، Affiliate Partner برای جذب مخاطب." },
      { question: "چرا TeamCash مهم است؟", answer: "TeamCash روند دیپازیت و برداشت را سریع، روشن و مناسب بازار محلی می‌کند." },
      { question: "Payment Agent برای چه کسانی است؟", answer: "برای کسانی که می‌خواهند در کشور خود شریک پرداخت محلی باشند." },
      { question: "Affiliate Partner برای چه کسانی است؟", answer: "برای کسانی که با ترافیک، پروموکد، جامعه یا مدل performance کار می‌کنند." },
      { question: "چرا تجربه محلی مهم است؟", answer: "عادت پرداخت و انتظار کاربر در هر کشور فرق دارد، پس شناخت محلی نتیجه را بهتر می‌کند." },
    ],
  },
  contact: {
    ...siteContent.fa.contact,
    title: "بیایید همکاری TeamCash را بررسی کنیم",
    description: "درخواست بگذارید، بازار، فرمت و مسیر اتصال را باهم انتخاب می‌کنیم.",
  },
  footer: {
    description: "همکاری TeamCash برای ایجنت‌های پرداخت محلی، تیم‌های e-payment و شریکان affiliate.",
    links: siteContent.fa.footer.links,
  },
});

siteContent.ps = {
  ...siteContent.fa,
  metadata: {
    title: "TeamCash Partnerships | د محلي تادیاتو شریکانو شبکه",
    description: "د TeamCash همکاری د Payment Agent، E-payment Agent او Affiliate Partner لپاره.",
  },
  navItems: [
    { label: "د محصول په اړه", href: "#about" },
    { label: "څنګه کار کوي", href: "#how-it-works" },
    { label: "ګټې", href: "#benefits" },
    { label: "جغرافیه", href: "#geography" },
    { label: "FAQ", href: "#faq" },
    { label: "اړیکه", href: "#contact" },
  ],
  header: { cta: "شریک کېدل", languages: "ژبې" },
  hero: {
    ...siteContent.fa.hero,
    titleLead: "د TeamCash شراکت شبکه",
    titleAccent: "د محلي تادیاتو لپاره",
    primaryCta: "د TeamCash شریک شئ",
    secondaryCta: "فرمت وټاکئ",
  },
  contact: {
    ...siteContent.fa.contact,
    title: "راځئ د TeamCash شراکت وڅېړو",
    description: "درخواست پرېږدئ، موږ به بازار، فرمت او د نښلېدو لاره يوځای وټاکو.",
  },
  footer: {
    description: "د TeamCash همکاری د محلي تادیاتو ایجنتانو، e-payment ټیمونو او affiliate شریکانو لپاره.",
    links: siteContent.ps.footer.links,
  },
  geographyTelegramLabel: "ټېلېګرام",
};
