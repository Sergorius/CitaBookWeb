const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach((item) => observer.observe(item));

const translations = {
  ru: {
    pageTitle: 'CitaBook | Поиск цитат в книгах',
    pageDescription: 'CitaBook помогает находить яркие цитаты в EPUB и FB2, сохранять их в базе и возвращаться к любимым фрагментам за секунды.',
    logoAlt: 'Логотип CitaBook',
    brandEyebrow: 'Desktop App',
    navFeatures: 'Возможности',
    navWorkflow: 'Как это работает',
    navLaunch: 'Запустить проект',
    heroKicker: 'Поиск цитат без ручного перелистывания',
    heroTitle: 'Красивый и быстрый способ находить сильные фразы в вашей библиотеке книг',
    heroText: 'Приложение сканирует EPUB и FB2, ищет совпадения по ключевым словам, сохраняет любимые фрагменты в базу и открывает цитаты в аккуратных карточках.',
    heroPrimary: 'Открыть локально',
    heroSecondary: 'Посмотреть возможности',
    heroPoint1: 'Поиск по коллекции книг за секунды',
    heroPoint2: 'Поддержка EPUB и FB2',
    heroPoint3: 'Русский, English и Slovenčina',
    libraryLabel: 'Библиотека',
    book1: '451° по Фаренгейту',
    book2: 'Мастер и Маргарита',
    book3: 'Pride and Prejudice',
    searchPreview: 'искать: свобода',
    foundTag: 'Найдено',
    quoteTitle: 'Цитата дня',
    quoteText: '«Мы нуждаемся не в том, чтобы на нас сыпались факты, а в том, чтобы научиться видеть в них смысл».',
    stats1: 'языка интерфейса',
    stats2: 'формата книг',
    stats3: 'коллекция цитат',
    noteLabel: 'Новая находка',
    noteText: 'Сохраняйте цитаты двойным кликом',
    audienceLabel: 'Для кого',
    audienceTitle: 'Подходит читателям, авторам, преподавателям и всем, кто собирает сильные мысли',
    audience1Title: 'Читатели',
    audience1Text: 'Собирайте любимые фрагменты в одной базе и возвращайтесь к ним без повторного поиска по файлам.',
    audience2Title: 'Исследователи',
    audience2Text: 'Находите упоминания тем, мотивов и ключевых формулировок сразу по всей локальной библиотеке.',
    audience3Title: 'Команды и преподаватели',
    audience3Text: 'Готовьте подборки цитат для лекций, заметок, презентаций и творческих проектов заметно быстрее.',
    featuresLabel: 'Возможности',
    featuresTitle: 'Функции, которые делают поиск по книгам действительно удобным',
    feature1Title: 'Умный поиск по цитатам',
    feature1Text: 'Введите слово или фразу, и приложение покажет найденные фрагменты вместе с книгой и автором.',
    feature2Title: 'Сканирование локальной папки',
    feature2Text: 'Выберите каталог с книгами, а программа сама обработает EPUB и FB2 и добавит данные в базу.',
    feature3Title: 'Сохранённые цитаты',
    feature3Text: 'Лучшие фрагменты не теряются: их можно сохранять, открывать в красивой карточке и удалять при необходимости.',
    feature4Title: 'Встроенный просмотр книг',
    feature4Text: 'Карточки книг и режим чтения помогают быстро проверить контекст перед тем, как сохранить нужную мысль.',
    feature5Title: 'Многоязычный интерфейс',
    feature5Text: 'Переключайтесь между русским, английским и словацким языком прямо в настройках приложения.',
    feature6Title: 'Локально и приватно',
    feature6Text: 'SQLite-база хранится рядом с приложением, так что ваша библиотека и заметки остаются под вашим контролем.',
    workflowLabel: 'Сценарий',
    workflowTitle: 'Как выглядит работа с приложением',
    workflow1Title: 'Выбираете папку с книгами',
    workflow1Text: 'Приложение сканирует библиотеку и готовит тексты к быстрому поиску.',
    workflow2Title: 'Ищете слово, тему или формулировку',
    workflow2Text: 'Результаты сразу показывают цитату, название книги и автора.',
    workflow3Title: 'Сохраняете лучшие находки',
    workflow3Text: 'Избранные фрагменты попадают в отдельную коллекцию, к которой легко вернуться позже.',
    ideaLabel: 'Идея продукта',
    ideaQuote: 'Когда в библиотеке сотни книг, хорошие цитаты не должны теряться между страницами.',
    launchLabel: 'Запуск',
    launchTitle: 'Сайт уже готов к локальному просмотру',
    launchText: 'Откройте страницу из папки проекта или подключите её как промо-сайт для приложения.',
    fileLabel: 'Файл',
    fileText: 'Можно открыть прямо в браузере без сборки.'
  },
  en: {
    pageTitle: 'CitaBook | Quote Search in Books',
    pageDescription: 'CitaBook helps you find vivid quotes in EPUB and FB2 files, save them to a database, and revisit favorite passages in seconds.',
    logoAlt: 'CitaBook logo',
    brandEyebrow: 'Desktop App',
    navFeatures: 'Features',
    navWorkflow: 'How it works',
    navLaunch: 'Launch project',
    heroKicker: 'Quote search without endless manual browsing',
    heroTitle: 'A beautiful and fast way to discover powerful lines in your personal book library',
    heroText: 'The app scans EPUB and FB2 files, searches by keywords, saves favorite fragments to the database, and opens quotes in polished cards.',
    heroPrimary: 'Open locally',
    heroSecondary: 'See features',
    heroPoint1: 'Search across your book collection in seconds',
    heroPoint2: 'EPUB and FB2 support',
    heroPoint3: 'Russian, English, and Slovak',
    libraryLabel: 'Library',
    book1: 'Fahrenheit 451',
    book2: 'The Master and Margarita',
    book3: 'Pride and Prejudice',
    searchPreview: 'search: freedom',
    foundTag: 'Found',
    quoteTitle: 'Quote of the day',
    quoteText: '"We do not need facts poured over us. We need to learn how to see meaning inside them."',
    stats1: 'interface languages',
    stats2: 'book formats',
    stats3: 'quote collection',
    noteLabel: 'New find',
    noteText: 'Save quotes with a double click',
    audienceLabel: 'Audience',
    audienceTitle: 'Built for readers, writers, teachers, and anyone who collects memorable thoughts',
    audience1Title: 'Readers',
    audience1Text: 'Keep favorite passages in one place and return to them without searching through files again.',
    audience2Title: 'Researchers',
    audience2Text: 'Track topics, motifs, and key wording across your local library in a single search.',
    audience3Title: 'Teams and teachers',
    audience3Text: 'Prepare quote collections for lectures, notes, presentations, and creative projects much faster.',
    featuresLabel: 'Features',
    featuresTitle: 'Everything you need to make searching through books truly comfortable',
    feature1Title: 'Smart quote search',
    feature1Text: 'Type a word or phrase and the app shows matching fragments together with the book and author.',
    feature2Title: 'Local folder scanning',
    feature2Text: 'Choose a folder with books and the app will process EPUB and FB2 files and add them to the database.',
    feature3Title: 'Saved quotes',
    feature3Text: 'Great passages do not get lost: save them, open them in a polished card, or remove them when needed.',
    feature4Title: 'Built-in book viewer',
    feature4Text: 'Book cards and reading mode make it easy to check the context before saving a quote.',
    feature5Title: 'Multilingual interface',
    feature5Text: 'Switch between Russian, English, and Slovak right inside the application.',
    feature6Title: 'Local and private',
    feature6Text: 'The SQLite database lives next to the app, so your library and notes stay under your control.',
    workflowLabel: 'Workflow',
    workflowTitle: 'What working with the app looks like',
    workflow1Title: 'Choose a folder with books',
    workflow1Text: 'The app scans your library and prepares texts for fast searching.',
    workflow2Title: 'Search for a word, topic, or phrase',
    workflow2Text: 'Results instantly show the quote, the book title, and the author.',
    workflow3Title: 'Save the best finds',
    workflow3Text: 'Selected fragments go into a dedicated collection that is easy to revisit later.',
    ideaLabel: 'Product idea',
    ideaQuote: 'When your library holds hundreds of books, strong quotes should not get lost between the pages.',
    launchLabel: 'Launch',
    launchTitle: 'The site is already ready for local viewing',
    launchText: 'Open the page from the project folder or use it as a promo site for the application.',
    fileLabel: 'File',
    fileText: 'You can open it directly in the browser without a build step.'
  },
  sk: {
    pageTitle: 'CitaBook | Vyhľadávanie citácií v knihách',
    pageDescription: 'CitaBook pomáha nájsť výrazné citácie v EPUB a FB2, ukladať ich do databázy a vrátiť sa k obľúbeným pasážam za pár sekúnd.',
    logoAlt: 'Logo CitaBook',
    brandEyebrow: 'Desktop App',
    navFeatures: 'Funkcie',
    navWorkflow: 'Ako to funguje',
    navLaunch: 'Spustiť projekt',
    heroKicker: 'Vyhľadávanie citácií bez zdĺhavého listovania',
    heroTitle: 'Krásny a rýchly spôsob, ako nájsť silné myšlienky vo vašej knižnici kníh',
    heroText: 'Aplikácia skenuje EPUB a FB2, vyhľadáva podľa kľúčových slov, ukladá obľúbené úryvky do databázy a otvára citácie v elegantných kartách.',
    heroPrimary: 'Otvoriť lokálne',
    heroSecondary: 'Pozrieť funkcie',
    heroPoint1: 'Vyhľadávanie v zbierke kníh za pár sekúnd',
    heroPoint2: 'Podpora EPUB a FB2',
    heroPoint3: 'Ruština, English a Slovenčina',
    libraryLabel: 'Knižnica',
    book1: '451 stupňov Fahrenheita',
    book2: 'Majster a Margaréta',
    book3: 'Pride and Prejudice',
    searchPreview: 'hľadať: sloboda',
    foundTag: 'Nájdené',
    quoteTitle: 'Citácia dňa',
    quoteText: '„Nepotrebujeme, aby sa na nás sypali fakty. Potrebujeme sa naučiť vidieť ich význam.“',
    stats1: 'jazyky rozhrania',
    stats2: 'formáty kníh',
    stats3: 'zbierka citácií',
    noteLabel: 'Nový nález',
    noteText: 'Citácie uložíte dvojklikom',
    audienceLabel: 'Pre koho',
    audienceTitle: 'Hodí sa pre čitateľov, autorov, učiteľov aj všetkých, ktorí si zbierajú silné myšlienky',
    audience1Title: 'Čitatelia',
    audience1Text: 'Ukladajte obľúbené úryvky na jedno miesto a vracajte sa k nim bez opakovaného hľadania v súboroch.',
    audience2Title: 'Výskumníci',
    audience2Text: 'Hľadajte témy, motívy a kľúčové formulácie naraz v celej lokálnej knižnici.',
    audience3Title: 'Tímy a učitelia',
    audience3Text: 'Pripravujte zbierky citácií pre prednášky, poznámky, prezentácie a tvorivé projekty oveľa rýchlejšie.',
    featuresLabel: 'Funkcie',
    featuresTitle: 'Funkcie, vďaka ktorým je vyhľadávanie v knihách naozaj pohodlné',
    feature1Title: 'Inteligentné hľadanie citácií',
    feature1Text: 'Zadajte slovo alebo frázu a aplikácia zobrazí nájdené úryvky spolu s knihou a autorom.',
    feature2Title: 'Skenovanie lokálneho priečinka',
    feature2Text: 'Vyberte priečinok s knihami a aplikácia sama spracuje EPUB a FB2 a pridá údaje do databázy.',
    feature3Title: 'Uložené citácie',
    feature3Text: 'Najlepšie úryvky sa nestratia: môžete ich uložiť, otvoriť v peknej karte a podľa potreby odstrániť.',
    feature4Title: 'Vstavaný prehliadač kníh',
    feature4Text: 'Karty kníh a režim čítania pomáhajú rýchlo overiť kontext ešte pred uložením citácie.',
    feature5Title: 'Viacjazyčné rozhranie',
    feature5Text: 'Prepínajte medzi ruštinou, angličtinou a slovenčinou priamo v aplikácii.',
    feature6Title: 'Lokálne a súkromné',
    feature6Text: 'SQLite databáza je uložená vedľa aplikácie, takže knižnica aj poznámky zostávajú pod vašou kontrolou.',
    workflowLabel: 'Postup',
    workflowTitle: 'Ako vyzerá práca s aplikáciou',
    workflow1Title: 'Vyberiete priečinok s knihami',
    workflow1Text: 'Aplikácia naskenuje knižnicu a pripraví texty na rýchle vyhľadávanie.',
    workflow2Title: 'Hľadáte slovo, tému alebo formuláciu',
    workflow2Text: 'Výsledky hneď zobrazia citáciu, názov knihy a autora.',
    workflow3Title: 'Uložíte si najlepšie nálezy',
    workflow3Text: 'Vybrané úryvky sa dostanú do samostatnej kolekcie, ku ktorej sa dá ľahko vrátiť neskôr.',
    ideaLabel: 'Myšlienka produktu',
    ideaQuote: 'Keď máte v knižnici stovky kníh, dobré citácie by sa nemali strácať medzi stranami.',
    launchLabel: 'Spustenie',
    launchTitle: 'Stránka je už pripravená na lokálne zobrazenie',
    launchText: 'Otvorte stránku z priečinka projektu alebo ju použite ako promo stránku pre aplikáciu.',
    fileLabel: 'Súbor',
    fileText: 'Môžete ju otvoriť priamo v prehliadači bez build kroku.'
  }
};

const languageButtons = document.querySelectorAll('.lang-button');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const metaDescription = document.querySelector('meta[name="description"]');
const logo = document.querySelector('.brand img');

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.ru;

  document.documentElement.lang = lang;
  document.title = dictionary.pageTitle;
  metaDescription.setAttribute('content', dictionary.pageDescription);
  logo.setAttribute('alt', dictionary.logoAlt);

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  window.localStorage.setItem('citabook-language', lang);
}

const savedLanguage = window.localStorage.getItem('citabook-language') || 'ru';
applyLanguage(savedLanguage);

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});
