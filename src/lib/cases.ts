export interface CaseItem {
  id: string;
  titleRu: string;
  titleEn: string;
  year: string;
  categoryRu: string;
  categoryEn: string;
  hierarchy: "primary" | "secondary";
  previewRu: string;
  previewEn: string;
  tagsRu: string[];
  tagsEn: string[];
  palette: string[];
  accentColor: string;
  visualStyleRu: string;
  visualStyleEn: string;
  imageSrc?: string;
  visualImages?: string[];
  websiteLink?: string;
  sections: {
    tasksRu: string;
    tasksEn: string;
    toolsRu: string;
    toolsEn: string;
    visualRu?: string;
    visualEn?: string;
    detailsRu: string;
    detailsEn: string;
  };
}

export const cases: CaseItem[] = [
  // PRIMARY CASES
  {
    id: "signal-room",
    titleRu: "Signal Room",
    titleEn: "Signal Room",
    year: "2026",
    categoryRu: "Private summit platform",
    categoryEn: "Private summit platform",
    hierarchy: "primary",
    previewRu: "Закрытая summit-платформа с private access, спикерами, треками и ощущением curated signal space.",
    previewEn: "Private summit platform with gated access, speaker-led storytelling, tracks and curated signal-space atmosphere.",
    tagsRu: ["Лендинг", "Искусственный интеллект", "Криптовалюты", "Закрытый доступ", "Журнальный стиль"],
    tagsEn: ["Landing Page", "Artificial Intelligence", "Crypto", "Private Access", "Editorial Style"],
    palette: ["#050507", "#141022", "#7B2CFF", "#00D9FF", "#F4F1FF"],
    accentColor: "#00D9FF",
    visualStyleRu: "Премиальная dark editorial-среда: глубокий navy/black, cyan/blue акценты, закрытый gate screen, спикеры, треки и ощущение private digital room.",
    visualStyleEn: "Premium dark editorial environment: deep navy/black, cyan/blue accents, gated access screen, speakers, tracks and a private digital room feeling.",
    imageSrc: "/cases/signal-room.webp",
    visualImages: ["/cases/signal-room-v1.webp", "/cases/signal-room-v2.webp"],
    sections: {
      tasksRu: "Задача была подать событие не как обычную конференцию, а как закрытую среду для людей, которым важен отобранный контекст. Сайт должен был создать ощущение private access: вход по запросу, сильные спикеры, понятные треки и ценность самого участия.",
      tasksEn: "The task was to present the event not as a regular conference, but as a closed environment for people who value curated context. The website needed to create a private-access feeling: request-based entry, strong speakers, clear tracks and the value of participation itself.",
      toolsRu: "Private-access gate screen, long-form summit landing, структура программы, блоки спикеров, треки, CTA-логика, editorial layout, темная визуальная система и подготовка страницы под презентацию события.",
      toolsEn: "Private-access gate screen, long-form summit landing, program structure, speaker blocks, tracks, CTA logic, editorial layout, dark visual system and preparation of the page for event presentation.",
      visualRu: "Визуал построен на темной премиальной среде, аккуратном свечении, cyan/blue акцентах и ощущении закрытой комнаты. Здесь важно было не уйти в generic crypto-neon, а собрать спокойную, статусную и технологичную атмосферу.",
      visualEn: "The visual direction is built on a dark premium environment, controlled glow, cyan/blue accents and a closed-room feeling. The goal was not to fall into generic crypto-neon, but to create a calm, high-status and technological atmosphere.",
      detailsRu: "Кейс показывает работу с ценностью доступа. Здесь дизайн продает не скидку и не громкий оффер, а curated context: кто внутри, зачем туда попадать, какой сигнал человек получает и почему вход сам по себе ощущается ценностью.",
      detailsEn: "This case shows design around the value of access. The page does not sell a discount or loud offer; it sells curated context: who is inside, why someone should enter, what signal they receive and why access itself feels valuable."
    }
  },
  {
    id: "auvorax",
    titleRu: "Auvorax",
    titleEn: "Auvorax",
    year: "2026",
    categoryRu: "Next-gen software landing",
    categoryEn: "Next-gen software landing",
    hierarchy: "primary",
    previewRu: "Концепт лендинга для новой технологической среды с setup-flow, download page и ощущением апгрейда desktop-опыта.",
    previewEn: "Next-gen software landing concept built around setup flow, download page and the desire to upgrade the desktop experience.",
    tagsRu: ["Программы", "Лендинг", "Настройка системы", "Интерфейс", "Страница загрузки"],
    tagsEn: ["Software", "Landing Page", "System Setup", "Interface", "Download Page"],
    palette: ["#070A0F", "#111827", "#3B82F6", "#00E5FF", "#E5F6FF"],
    accentColor: "#00E5FF",
    visualStyleRu: "Темная software-среда: graphite UI, cold blue light, glass-like панели, системные фрагменты, setup-flow и ощущение новой ОС.",
    visualStyleEn: "Dark software environment: graphite UI, cold blue light, glass-like panels, system fragments, setup flow and the feeling of a new OS.",
    imageSrc: "/cases/auvorax.webp",
    visualImages: ["/cases/auvorax-v1.webp"],
    sections: {
      tasksRu: "Задача была упаковать software-продукт так, чтобы он ощущался как новый технологический слой, а не просто очередная утилита. Пользователь должен был быстро понять, что перед ним, зачем это нужно, как перейти к загрузке и какой новый опыт он получает.",
      tasksEn: "The task was to package a software product so it felt like a new technological layer rather than just another utility. The user needed to quickly understand what it is, why it matters, how to move toward download and what new experience they receive.",
      toolsRu: "Landing page, download page, setup/instruction flow, UI-демонстрации, system panels, visual hypotheses, naming logic, адаптивы и подготовка материалов под запуск.",
      toolsEn: "Landing page, download page, setup/instruction flow, UI demonstrations, system panels, visual hypotheses, naming logic, responsive layouts and launch-ready assets.",
      visualRu: "Визуал держится на холодной технологичной атмосфере: темные поверхности, синий свет, стеклянные интерфейсные слои и ощущение новой системы. При этом футуризм не должен был съедать понятность продукта и следующего действия.",
      visualEn: "The visual direction is based on a cold technological atmosphere: dark surfaces, blue light, glass-like interface layers and the feeling of a new system. At the same time, futurism could not replace product clarity and the next action.",
      detailsRu: "Кейс показывает баланс между эффектной product aura и performance-логикой. Самый красивый экран не всегда работает сам по себе, поэтому структура держалась на понятном setup-flow, интерфейсных доказательствах и ясном пути к загрузке.",
      detailsEn: "This case shows the balance between strong product aura and performance logic. The most impressive screen does not work by itself, so the structure relied on a clear setup flow, interface proof points and a direct path toward download."
    }
  },
  {
    id: "quack",
    titleRu: "Quack",
    titleEn: "Quack",
    year: "2026",
    categoryRu: "Crypto / fintech product",
    categoryEn: "Crypto / fintech product",
    hierarchy: "primary",
    previewRu: "Crypto/fintech landing system с акцентом на доверие, wallet UI, продуктовую ясность и визуальную полировку.",
    previewEn: "Crypto/fintech landing system focused on trust, wallet UI, product clarity and polished visual identity.",
    tagsRu: ["Крипта", "Финансы", "Лендинг", "Макеты интерфейсов", "Креативы"],
    tagsEn: ["Crypto", "Finance", "Landing Page", "Interface Mockups", "Creatives"],
    palette: ["#050505", "#111315", "#FFD43B", "#00F5A0", "#00D9FF"],
    accentColor: "#FFD43B",
    visualStyleRu: "Светлая fintech-система: чистая база, черная типографика, оранжевый акцент, wallet-карточки, монеты, dashboard UI и модульная bento-структура.",
    visualStyleEn: "Light fintech system: clean base, black typography, orange accent, wallet cards, coins, dashboard UI and modular bento structure.",
    imageSrc: "/cases/quack.webp",
    visualImages: ["/cases/quack-v1.webp"],
    sections: {
      tasksRu: "Задача была собрать crypto/fintech-проект так, чтобы он выглядел заметно, но не терял доверие. Нужно было быстро объяснить продукт, показать интерфейс, подсветить пользу и провести пользователя к следующему шагу без ощущения хаотичного crypto-hype.",
      tasksEn: "The task was to package a crypto/fintech product so it looked noticeable without losing trust. The page needed to quickly explain the product, show the interface, highlight value and guide the user to the next step without feeling like chaotic crypto hype.",
      toolsRu: "Landing page, wallet UI-мокапи, product cards, dashboard-фрагменты, visual system, download/post-click логика, creative pack и анимационные идеи для живой product-подачи.",
      toolsEn: "Landing page, wallet UI mockups, product cards, dashboard fragments, visual system, download/post-click logic, creative pack and animation ideas for a lively product presentation.",
      visualRu: "Визуал держится на светлой базе, сильной черной типографике и оранжевых акцентах. Модульные карточки, wallet-интерфейс, монеты и dashboard-элементы помогают показать продукт как систему, а не просто как яркий crypto-лендинг.",
      visualEn: "The visual direction is based on a light foundation, strong black typography and orange accents. Modular cards, wallet interface, coins and dashboard elements help present the product as a system, not just a bright crypto landing.",
      detailsRu: "Кейс показывает, что в crypto/fintech недостаточно выглядеть стильно. Пользователь должен быстро считать функцию, пользу и надежность продукта, иначе даже сильный визуал может привести не ту аудиторию или оборвать путь после первого интереса.",
      detailsEn: "This case shows that in crypto/fintech it is not enough to look stylish. The user needs to quickly understand the function, value and reliability of the product; otherwise even strong visuals can attract the wrong audience or break the path after initial interest."
    }
  },
  {
    id: "hermes-ai",
    titleRu: "HermesAI",
    titleEn: "HermesAI",
    year: "2025",
    categoryRu: "Сайт агентства по внедрению ИИ",
    categoryEn: "AI Integration Agency Website",
    hierarchy: "primary",
    previewRu: "Сайт агентства по внедрению ИИ-сотрудников в бизнес-процессы, CRM, соцсети и клиентские воронки. Проект переводит сложную услугу автоматизации в понятную, дружелюбную и конверсионную digital-упаковку.",
    previewEn: "Website for an AI integration agency helping businesses implement AI employees across CRM, social channels and client communication funnels. The project turns a complex automation service into a clear, friendly and conversion-oriented digital experience.",
    tagsRu: ["ИИ", "Веб-разработка", "Дизайн", "Упаковка продукта", "Автоматизация"],
    tagsEn: ["AI", "Web Development", "Design", "Product Packaging", "Automation"],
    palette: ["#050509", "#181A24", "#6C63FF", "#00C2FF", "#F3F6FF"],
    accentColor: "#6C63FF",
    visualStyleRu: "Светлая AI/B2B-система: голубой hero, смартфон с чат-интерфейсом, мягкие карточки, message bubbles, схемы внедрения и чистая подача без тяжелого sci-fi.",
    visualStyleEn: "Light AI/B2B system: blue hero, smartphone chat interface, soft cards, message bubbles, implementation diagrams and clean presentation without heavy sci-fi clichés.",
    imageSrc: "/cases/hermes-ai.webp",
    visualImages: ["/cases/hermes-ai-v1.webp"],
    websiteLink: "https://hermesai.one/",
    sections: {
      tasksRu: "Задача была упаковать услугу внедрения ИИ так, чтобы бизнес быстро понимал не только модное слово «нейросеть», а практическую пользу: обработка заявок, ответы клиентам, связь с CRM, интеграция с соцсетями и поддержка автоворонок. Сайт должен был быть технологичным, но не холодным и не перегруженным.",
      tasksEn: "The task was to package an AI implementation service so businesses could quickly understand not just the buzzword, but the practical value: lead handling, client replies, CRM connection, social-channel integration and funnel support. The website had to feel technological, but not cold or overloaded.",
      toolsRu: "Структура лендинга, первый экран, блоки проблем и решений, сценарии внедрения, визуальная система, карточки результатов, кейсы, отзывы, FAQ, CTA-блоки и подготовка сайта к запуску.",
      toolsEn: "Landing structure, hero section, problem-solution blocks, implementation scenarios, visual system, result cards, cases, testimonials, FAQ, CTA blocks and website preparation for launch.",
      detailsRu: "Кейс показывает работу с AI-тематикой без шаблонного «нейросеточного» визуала. Здесь важно было собрать доверие, объяснить пользу, не напугать сложностью и провести пользователя от интереса к понятному следующему шагу — диагностике или обсуждению внедрения.",
      detailsEn: "The case shows work with the AI theme without relying on generic neural-network visuals. The focus was to build trust, explain value, reduce complexity and guide the user from interest to a clear next step: diagnostics or an implementation discussion."
    }
  },
  {
    id: "kaifuy-padel",
    titleRu: "Кайфуй Падел",
    titleEn: "Kaifuy Padel",
    year: "2025",
    categoryRu: "Сайт команды по падел-теннису",
    categoryEn: "Padel Team Website",
    hierarchy: "primary",
    previewRu: "Сайт команды по падел-теннису с сильной спортивной идентичностью, черно-бело-красным визуальным кодом и кастомной Tilda/Zero Block-сборкой.",
    previewEn: "Website for a padel team with strong sports identity, black-white-red visual language and custom Tilda / Zero Block implementation.",
    tagsRu: ["Спорт", "Команда", "Разработка", "Дизайн-код", "Адаптивность"],
    tagsEn: ["Sports", "Team", "Development", "Design Code", "Responsive"],
    palette: ["#07140D", "#00A86B", "#B9FF39", "#1E88FF", "#FFFFFF"],
    accentColor: "#00A86B",
    visualStyleRu: "Черная спортивная база, белая крупная типографика, красные акценты, монохромные фотографии команды и дерзкая premium-sport подача.",
    visualStyleEn: "Black sports foundation, large white typography, red accents, monochrome team photography and bold premium-sport presentation.",
    imageSrc: "/cases/kaifuy-team.webp",
    visualImages: ["/cases/kaifuy-team-v1.webp", "/cases/kaifuy-team-v2.webp"],
    websiteLink: "https://kaifuiteam.ru/",
    sections: {
      tasksRu: "Задача была собрать сайт, который передает не только информацию о команде, а ее характер: спорт, движение, уверенность, командную энергию и ощущение живого сообщества. Важно было уйти от стандартного сайта секции и сделать страницу с яркой идентичностью.",
      tasksEn: "The task was to build a website that communicates not only team information, but its character: sport, movement, confidence, team energy and the feeling of a living community. The goal was to move away from a standard sports-club page and create a site with a strong identity.",
      toolsRu: "Tilda, Zero Block, кастомный HTML, структура сайта, hero-секция, командные блоки, галерея, адаптивы, визуальные акценты и доведение страницы до рабочего состояния.",
      toolsEn: "Tilda, Zero Block, custom HTML, website structure, hero section, team blocks, gallery, responsive layouts, visual accents and final page assembly.",
      detailsRu: "Кейс показывает работу с Tilda не как с шаблонным конструктором, а как с основой для кастомной digital-упаковки. Здесь важны были ритм, визуальная уверенность, спортивное настроение и ощущение команды, с которой хочется быть рядом.",
      detailsEn: "This case shows Tilda not as a template builder, but as a base for custom digital packaging. The focus was rhythm, visual confidence, sports atmosphere and the feeling of a team people want to join."
    }
  },
  {
    id: "stremlenie",
    titleRu: "Стремление",
    titleEn: "Stremlenie",
    year: "2025",
    categoryRu: "Сайт компании по оценке бизнеса",
    categoryEn: "Business Valuation Website",
    hierarchy: "primary",
    previewRu: "Корпоративный сайт для компании по оценке бизнеса, активов, услуг и инвестиционных проектов. Проект построен вокруг доверия, аккредитаций, структуры услуг и спокойной экспертной подачи.",
    previewEn: "Corporate website for a business and asset valuation company. The project is built around trust, accreditation, service clarity and calm expert authority.",
    tagsRu: ["Сайт", "Фирменный стиль", "Структурность", "Визуальный ритм"],
    tagsEn: ["Website", "Brand Identity", "Structure", "Visual Rhythm"],
    palette: ["#F1E7D6", "#2B2D30", "#6B7C93", "#B89B72", "#FFFFFF"],
    accentColor: "#B89B72",
    visualStyleRu: "Чистая бело-зеленая корпоративная система: архитектурный hero, спокойная типографика, блоки доверия, партнеры, аккредитации и карточки направлений оценки с 3D-графикой.",
    visualStyleEn: "Clean white-and-green corporate system: architectural hero, calm typography, trust blocks, partners, accreditations and valuation-service cards with 3D visuals.",
    imageSrc: "/cases/stremlenie.webp",
    visualImages: ["/cases/stremlenie-v1.webp"],
    websiteLink: "http://stocf.nichost.ru/",
    sections: {
      tasksRu: "Задача была собрать сайт для экспертной B2B-компании так, чтобы пользователь быстро понимал масштаб, надежность и направления работы. Важно было не перегрузить страницу канцелярией, но показать доверие: опыт, аккредитации, количество проектов, рейтинги и понятную структуру услуг.",
      tasksEn: "The task was to build a website for an expert B2B valuation company in a way that quickly communicates scale, reliability and service structure. The page had to avoid corporate overload while still showing trust: experience, accreditations, project volume, ratings and clear service categories.",
      toolsRu: "Структура сайта, первый экран, блоки доверия, карточки направлений оценки, визуальная система, адаптивная логика, Tilda/Zero Block-сборка и подготовка страницы к переносу на основной домен.",
      toolsEn: "Website structure, hero section, trust blocks, valuation-service cards, visual system, responsive logic, Tilda/Zero Block implementation and preparation for transfer to the main domain.",
      detailsRu: "Кейс показывает работу с корпоративным сайтом, где дизайн должен не кричать, а вызывать доверие. Здесь важны не эффект ради эффекта, а ясность, аккуратная иерархия, ощущение реальной экспертной компании и понятный путь пользователя к нужной услуге.",
      detailsEn: "The case shows work on a corporate website where design should not shout, but build trust. The focus is not on effects for their own sake, but on clarity, careful hierarchy, the feeling of a real expert company and a clear path toward the right service."
    }
  },

  // SECONDARY CASES
  {
    id: "livesec",
    titleRu: "LiveSEC",
    titleEn: "LiveSEC",
    year: "2026",
    categoryRu: "Safety landing funnel",
    categoryEn: "Safety landing funnel",
    hierarchy: "secondary",
    previewRu: "Safety/performance funnel вокруг локальной тревоги, доверия и post-click сценария: от первого интереса до download / thank-you page.",
    previewEn: "Safety/performance funnel built around local-alert psychology, trust and post-click experience: from first interest to download / thank-you page.",
    tagsRu: ["Безопасность", "Воронка продаж", "Интерфейсы", "Страница загрузки", "Рекламные макеты"],
    tagsEn: ["Safety", "Sales Funnel", "Interfaces", "Download Page", "Ad Layouts"],
    palette: ["#05070A", "#0B1B2A", "#00D9FF", "#FF4D4D", "#DCE8F2"],
    accentColor: "#00D9FF",
    visualStyleRu: "Темная safety-среда: черная база, красные alert-акценты, зеленые system-status детали, карта района, monitoring-мотивы и controlled tension.",
    visualStyleEn: "Dark safety environment: black base, red alert accents, green system-status details, neighborhood map, monitoring motifs and controlled tension.",
    imageSrc: "/cases/livesec.webp",
    visualImages: ["/cases/livesec-v1.webp", "/cases/livesec-v2.webp"],
    sections: {
      tasksRu: "Задача была собрать performance-воронку, где сильный интерес к локальной безопасности не обрывается после первого клика. Лендинг должен был поддержать ожидание, быстро объяснить продукт, добавить доверие и перевести пользователя к понятному post-click шагу.",
      tasksEn: "The task was to build a performance funnel where strong interest in local safety does not break after the first click. The landing page needed to support the expectation, explain the product quickly, build trust and move the user toward a clear post-click step.",
      toolsRu: "Landing page, download / thank-you page, UI-мокапи продукта, trust-блоки, map-based визуал, alert-секции, adaptive layout, креативная логика и post-click сценарий.",
      toolsEn: "Landing page, download / thank-you page, product UI mockups, trust blocks, map-based visuals, alert sections, adaptive layout, creative logic and post-click scenario.",
      visualRu: "Визуал держится на темной интерфейсной подаче, красных alert-акцентах, зеленых статусных деталях и карте района как эмоциональном якоре. Важно было сохранить напряжение, но не превратить сайт в дешевую horror/security-страницу.",
      visualEn: "The visual direction is built on a dark interface style, red alert accents, green status details and a neighborhood map as the emotional anchor. The goal was to keep tension without turning the page into a cheap horror/security screen.",
      detailsRu: "Кейс показывает работу с тонкой зоной performance-дизайна: внимание можно открыть тревожным стимулом, но следующий шаг требует ясности, доверия и аккуратного объяснения. Поэтому важна была не только главная страница, но и продолжение пути на download / thank-you page.",
      detailsEn: "This case shows work in a sensitive area of performance design: attention can be opened through an alert-driven trigger, but the next step requires clarity, trust and careful explanation. That is why not only the landing page mattered, but also the continuation on the download / thank-you page."
    }
  },
  {
    id: "project-americas",
    titleRu: "Project Americas",
    titleEn: "Project Americas",
    year: "2026",
    categoryRu: "Narrative promo landing",
    categoryEn: "Narrative promo landing",
    hierarchy: "secondary",
    previewRu: "Narrative promo landing exploration с тремя визуальными направлениями под одну performance-гипотезу: leak, hype и breach.",
    previewEn: "Narrative promo landing exploration with three visual directions for one performance hypothesis: leak, hype and breach.",
    tagsRu: ["Сюжет", "Страница запуска", "Технологичный дизайн", "Повествование"],
    tagsEn: ["Narrative", "Launch Page", "Tech Design", "Storytelling"],
    palette: ["#050505", "#172017", "#A3FF12", "#FFB020", "#D8D8D8"],
    accentColor: "#A3FF12",
    visualStyleRu: "Три контрастные оболочки: серый leak-archive, яркий neon promo и черно-зеленый breach/terminal UI. Общая логика — story-world, ограниченный доступ и напряжение перед следующим действием.",
    visualStyleEn: "Three contrasting wrappers: gray leak-archive, bright neon promo and black-green breach/terminal UI. The shared logic is story-world, limited access and tension before the next action.",
    imageSrc: "/cases/project-americas.webp",
    visualImages: ["/cases/project-americas-v1.webp", "/cases/project-americas-v2.webp", "/cases/project-americas-v3.webp"],
    sections: {
      tasksRu: "Задача была не просто нарисовать промо-страницу, а протестировать несколько нарративных оболочек под одну performance-гипотезу. Нужно было понять, какой угол сильнее удерживает внимание: инсайдерский слив, публичный hype или жесткая underground-подача.",
      tasksEn: "The task was not just to design a promo page, but to test several narrative wrappers for one performance hypothesis. The goal was to understand which angle holds attention better: insider leak, public hype or a harder underground presentation.",
      toolsRu: "Три версии лендинга, visual direction, dark UI, neon promo style, archive/leak layout, terminal-inspired interface, CTA-логика, download/post-click сценарий и подготовка материалов под тестирование.",
      toolsEn: "Three landing versions, visual direction, dark UI, neon promo style, archive/leak layout, terminal-inspired interface, CTA logic, download/post-click scenario and preparation of materials for testing.",
      visualRu: "Визуальная система намеренно разделена на три маршрута. Первая версия выглядит как архивный слив и технический индекс, вторая — как яркая публичная промо-страница, третья — как черно-зеленое breach-заявление с terminal-настроением. Это помогало сравнивать не только дизайн, но и разные эмоциональные входы.",
      visualEn: "The visual system is intentionally split into three routes. The first version feels like an archive leak and technical index, the second like a bright public promo page, and the third like a black-green breach statement with a terminal mood. This helped compare not only design, but different emotional entry points.",
      detailsRu: "Кейс показывает мою сценарную сторону в digital-дизайне: лендинг может работать не только блоками, но и легендой. Здесь интерфейс поддерживает историю, создает срочность, задает тон и превращает обычный переход в маленький story-world.",
      detailsEn: "This case shows my storytelling side in digital design: a landing page can work not only through blocks, but through a legend. Here the interface supports the story, creates urgency, sets the tone and turns a simple transition into a small story-world."
    }
  },
  {
    id: "gaming-promo-funnel",
    titleRu: "Gaming Promo Funnel",
    titleEn: "Gaming Promo Funnel",
    year: "2025",
    categoryRu: "PPI gaming install funnel",
    categoryEn: "PPI gaming install funnel",
    hierarchy: "secondary",
    previewRu: "PPI-focused gaming promo landing, построенный вокруг bonus-led конверсии, desktop app install intent и агрессивной визуальной подачи.",
    previewEn: "PPI-focused gaming promo landing built around bonus-led conversion, desktop app install intent and aggressive visual pressure.",
    tagsRu: ["Партнерский трафик", "Игровая индустрия", "Посадочная страница", "Воронка привлечения", "Эффективность"],
    tagsEn: ["Affiliate Traffic", "Gaming Industry", "Landing Page", "Acquisition Funnel", "Performance"],
    palette: ["#050505", "#061223", "#39FF14", "#FF2BD6", "#FFD447"],
    accentColor: "#39FF14",
    visualStyleRu: "Темная gaming-среда, neon green CTA, bonus-led hero, игровые персонажи, монеты, hot games, winners feed и install-flow логика.",
    visualStyleEn: "Dark gaming environment, neon green CTA, bonus-led hero, game characters, coins, hot games, winners feed and install-flow logic.",
    imageSrc: "/cases/gaming-promo-funnel.webp",
    visualImages: ["/cases/gaming-promo-funnel-v1.webp"],
    sections: {
      tasksRu: "Задача была собрать промо-лендинг под быстрый переход к установке. Экран должен был сразу захватывать внимание через бонус, яркий визуальный шум, понятный CTA и ощущение простого следующего шага.",
      tasksEn: "The task was to build a promo landing page designed to move users quickly toward installation. The screen needed to capture attention immediately through a bonus-led offer, strong visual pressure, clear CTA and a simple next step.",
      toolsRu: "Promo landing, desktop/mobile адаптивы, bonus-led hero, hot games blocks, winners feed, install steps, CTA-сценарий, визуальные performance-элементы и подготовка материалов под запуск.",
      toolsEn: "Promo landing, desktop/mobile adaptations, bonus-led hero, hot-games blocks, winners feed, install steps, CTA scenario, visual performance elements and launch-ready assets.",
      visualRu: "Визуал намеренно громкий: темная база, зеленый CTA, неоновые акценты, яркие игровые персонажи, монеты, градиентные разделители и ощущение быстрой реакции. Здесь дизайн работает не на спокойное изучение, а на мгновенное внимание и действие.",
      visualEn: "The visual direction is intentionally loud: dark base, green CTA, neon accents, bright game characters, coins, gradient dividers and a sense of fast reaction. Here design is not built for calm exploration, but for immediate attention and action.",
      detailsRu: "Кейс лучше показывать как анонимизированный gaming promo funnel. Он демонстрирует работу с агрессивной performance-упаковкой, где визуальная система, оффер и CTA собраны вокруг скорости, конверсии и install intent.",
      detailsEn: "The case is best presented as an anonymized gaming promo funnel. It shows work with aggressive performance packaging where the visual system, offer and CTA are built around speed, conversion and install intent."
    }
  }
];

export const draftCases: CaseItem[] = [
  {
    id: "scriptwriter",
    titleRu: "Сайт сценариста",
    titleEn: "Scriptwriter Website",
    year: "2026",
    categoryRu: "Story-driven portfolio",
    categoryEn: "Story-driven portfolio",
    hierarchy: "primary",
    previewRu: "Story-driven landing с кинематографичным визуалом, AI imagery и depth/parallax-логикой.",
    previewEn: "Story-driven personal portfolio website with cinematic visuals, AI imagery and depth-based parallax direction.",
    tagsRu: ["Фреймворк Next.js", "Искусство повествования", "Сгенерированные образы", "Многослойный параллакс", "Портфолио"],
    tagsEn: ["Next.js", "Storytelling", "Generated Imagery", "Multilayer Parallax", "Portfolio"],
    palette: ["#030303", "#F4EAD8", "#A77A3D", "#4A0F16", "#2E3540"],
    accentColor: "#A77A3D",
    visualStyleRu: "Cinematic black, ivory typography, muted gold, deep red и ощущение авторского мира.",
    visualStyleEn: "Cinematic black, ivory typography, muted gold, deep red and the feeling of an author’s world.",
    sections: {
      tasksRu: "Сайт сценариста нельзя было строить как обычную визитку с перечнем услуг. Задача — показать автора, масштаб мышления, уровень проектов и профессиональный мир через структуру, визуальную драматургию и атмосферу.",
      tasksEn: "The scriptwriter website could not be built as a simple service-listing page. The task was to show the author, their scale of thinking, project level and professional world through structure, visual dramaturgy and atmosphere.",
      toolsRu: "Next.js direction, визуальная концепция, AI-изображения, depth maps, WebGL-like/parallax логика, storytelling и смысловая архитектура лендинга.",
      toolsEn: "Next.js direction, visual concept, AI imagery, depth maps, WebGL-like/parallax logic, storytelling and semantic landing architecture.",
      visualRu: "Темная кинематографичная среда, глубина, визуальные сцены, авторская атмосфера и плотный storytelling. Сайт должен ощущаться не набором блоков, а маленьким повествованием.",
      visualEn: "A dark cinematic environment, depth, visual scenes, authorial atmosphere and dense storytelling. The website needed to feel not like a set of blocks, but like a small narrative.",
      detailsRu: "Кейс объединяет две сильные стороны: сценарное мышление и digital-дизайн. Здесь интерфейс работает как история: управляет темпом, вниманием и ощущением автора.",
      detailsEn: "This case combines two strengths: screenwriting thinking and digital design. The interface works like a story: it controls pace, attention and the feeling of the author."
    }
  },
  {
    id: "performance-landing",
    titleRu: "Performance Landing Systems",
    titleEn: "Performance Landing Systems",
    year: "2024–2026",
    categoryRu: "Anonymous performance work",
    categoryEn: "Anonymous performance work",
    hierarchy: "secondary",
    previewRu: "Серия лендингов, UI-мокапов и post-click сценариев под рекламные гипотезы.",
    previewEn: "Landing systems, UI mockups and post-click flows built around paid traffic hypotheses.",
    tagsRu: ["Аналитика эффективности", "Оптимизация", "Действие после нажатия", "Экранные интерфейсы", "Креативные системы гипотез"],
    tagsEn: ["Performance Analytics", "Optimization", "Post-Click", "Screen Interfaces", "Creative Systems"],
    palette: ["#050505", "#151515", "#00D9FF", "#FF8A00", "#EDEDED"],
    accentColor: "#FF8A00",
    visualStyleRu: "Modular performance system, signal cyan, testing orange и темная аналитическая база.",
    visualStyleEn: "Modular performance system, signal cyan, testing orange and a dark analytical base.",
    sections: {
      tasksRu: "Это анонимизированный блок про performance-системы: креатив, первый экран, лендинг, post-click page и следующий шаг пользователя. Главная задача — проектировать не отдельный экран, а связку, где ожидание из креатива продолжается на посадочной странице.",
      tasksEn: "This is an anonymized block about performance systems: creative, first screen, landing page, post-click page and the user’s next step. The main task is not to design a single screen, but a connected system where the expectation from the creative continues on the landing page.",
      toolsRu: "Landing pages, UI-мокапы, download pages, verification/access flows, адаптивы, creative packs, комментарии для разработки и итерации по фидбеку команды.",
      toolsEn: "Landing pages, UI mockups, download pages, verification/access flows, responsive layouts, creative packs, developer notes and iterations based on team feedback.",
      visualRu: "Модульная подача с разными направлениями, но общей логикой: visual trigger, trust element, product clarity, next step. Палитра должна ощущаться как системная доска performance-гипотез, а не один продукт.",
      visualEn: "A modular presentation with different directions but one shared logic: visual trigger, trust element, product clarity and next step. The palette should feel like a system board of performance hypotheses, not a single product.",
      detailsRu: "В публичной версии важно не раскрывать спорные детали. Кейс лучше говорить языком post-click experience, paid traffic hypotheses, trust elements и landing continuity.",
      detailsEn: "In the public version, sensitive details should not be exposed. The case is best framed through post-click experience, paid traffic hypotheses, trust elements and landing continuity."
    }
  },
  {
    id: "creative-performance",
    titleRu: "Creative Performance Experiments",
    titleEn: "Creative Performance Experiments",
    year: "2024–2026",
    categoryRu: "Ad creative systems",
    categoryEn: "Ad creative systems",
    hierarchy: "secondary",
    previewRu: "Пакеты рекламных креативов: аудитория, стимул, angle, формат и связь с лендингом.",
    previewEn: "Ad creative systems built around audience triggers, message angles and landing continuity.",
    tagsRu: ["Инфографика", "Платное привлечение", "Формулирование догадок", "Визуальные ракурсы", "Массовое тестирование"],
    tagsEn: ["Infographics", "Paid Acquisition", "Hypothesizing", "Visual Angles", "Mass Testing"],
    palette: ["#080808", "#202020", "#00E5FF", "#B9FF39", "#FF3D81"],
    accentColor: "#B9FF39",
    visualStyleRu: "Experimental modular grid, test accents, visual angles и ощущение creative archive.",
    visualStyleEn: "Experimental modular grid, test accents, visual angles and a creative archive feeling.",
    sections: {
      tasksRu: "Креативы лучше показывать как отдельный опыт, потому что задача здесь не “нарисовать баннер”, а сформулировать гипотезу: аудитория, стимул, visual angle, формат и ожидание после клика.",
      tasksEn: "Creatives are worth presenting as a separate experience because the task is not “to draw a banner”, but to formulate a hypothesis: audience, trigger, visual angle, format and post-click expectation.",
      toolsRu: "Ad formats, visual systems, angle packs, static creatives, UI-based creatives, comparison creatives, promo mechanics и AI-assisted variations.",
      toolsEn: "Ad formats, visual systems, angle packs, static creatives, UI-based creatives, comparison creatives, promo mechanics and AI-assisted variations.",
      visualRu: "Более экспериментальная сетка: разные углы захода, пометки trigger / format / expectation, модульная структура и яркие, но контролируемые акценты.",
      visualEn: "A more experimental grid: different angles, trigger / format / expectation notes, modular structure and bright but controlled accents.",
      detailsRu: "Главная мысль: креатив должен привести на лендинг человека с правильным ожиданием. Если креатив и посадочная страница говорят на разных языках, связка ломается.",
      detailsEn: "The main idea: a creative should bring the user to the landing page with the right expectation. If the creative and landing page speak different languages, the system breaks."
    }
  },
  {
    id: "verification-flow",
    titleRu: "Verification Flow",
    titleEn: "Verification Flow",
    year: "2025",
    categoryRu: "Post-click interface",
    categoryEn: "Post-click interface",
    hierarchy: "secondary",
    previewRu: "Концепты verification/access screens, где дополнительный шаг встроен в сценарий.",
    previewEn: "Post-click verification flow focused on access logic, trust and user motivation.",
    tagsRu: ["Контроль и проверка", "Системы доступа", "Проектирование взаимодействия", "Всплывающие диалоги", "Опыт продолжения пути клиента"],
    tagsEn: ["Verification", "Access Systems", "Interaction Design", "Modal Dialogs", "Post-Click Experience"],
    palette: ["#0A0A0A", "#2A2D33", "#F5F5F5", "#00D9FF", "#7A7F8A"],
    accentColor: "#00D9FF",
    visualStyleRu: "Clean system UI, access logic, muted gray и verification cyan.",
    visualStyleEn: "Clean system UI, access logic, muted gray and verification cyan.",
    sections: {
      tasksRu: "Verification Flow — серия концептов, где дополнительный шаг должен быть объяснен логикой продукта. Любая проверка может сломать мотивацию, если выглядит как случайная преграда.",
      tasksEn: "Verification Flow is a series of concepts where an additional step needs to be explained by product logic. Any verification can break motivation if it feels like a random obstacle.",
      toolsRu: "Verification screen, modal flow, access page, loading/log states, live-event landing и access confirmation logic.",
      toolsEn: "Verification screen, modal flow, access page, loading/log states, live-event landing and access confirmation logic.",
      visualRu: "Чистый системный интерфейс без лишней драматизации. Визуал должен объяснять, что происходит, зачем это нужно и почему пользователь может продолжать.",
      visualEn: "A clean system interface without unnecessary drama. The visual language should explain what is happening, why it is needed and why the user can continue.",
      detailsRu: "Кейс показывает UX-мышление на тонком участке воронки. Дополнительный шаг должен не ломать путь, а ощущаться естественной частью сценария доступа.",
      detailsEn: "This case shows UX thinking in a sensitive part of the funnel. An additional step should not break the path; it should feel like a natural part of the access scenario."
    }
  }
];
