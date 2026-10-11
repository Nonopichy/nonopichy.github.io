(() => {
  'use strict';

  const selectors = ['.links a[href="#hero"]', '.links a[href="#onde"]', '.links a[href="#sobre-mim"]', '.links a[href="#tributo"]', '.text p:first-of-type', '.text p:nth-of-type(2)', '.text .btn', '#onde h2', '#onde .subtitle', ...Array.from({length: 4}, (_, i) => `#onde .about-item:nth-child(${i + 1}) p`), '#sobre-mim h2', ...Array.from({length: 3}, (_, i) => `#sobre-mim .about-item:nth-child(${i + 1}) p`), '#tributo h2', '#tributo > p', 'footer'];
  const translations = {
    pt: selectors.map(selector => document.querySelector(selector).innerHTML.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '')),
    en: ['Top', 'Projects', 'About me', 'Tribute', '20 years old | Developer | 4+ years of experience', 'Time is not value. Just as volume is not mass. Wake up, open your eyes.\nAnd make your life a story.', 'Learn more', 'Where I have made my mark', 'Companies, projects and collaborations along the way', 'I developed all the internal systems for RedeWarriors servers.', 'I developed projects for influencers through BrPacks.', 'I have developed hundreds of private projects and a few public ones.', 'I developed ranked play and some systems for Cobblemon Central.', 'About Me', 'Major player, GC level 22, FACEIT level 11 and 36k in MM.', 'Five colleges, six degrees and two high school diplomas.', 'A fan of a K-drama, a movie and a TV series.', 'Tribute', 'If I die, there is a video scheduled since October 2022.', '© 2026 Nonopichy. All rights reserved.'],
    fr: ['Haut', 'Projets', 'À propos', 'Hommage', '20 ans | Développeur | Plus de 4 ans d’expérience', 'Le temps n’est pas la valeur. Tout comme le volume n’est pas la masse. Réveillez-vous, ouvrez les yeux.\nEt faites de votre vie une histoire.', 'En savoir plus', 'Là où j’ai laissé ma marque', 'Entreprises, projets et collaborations au fil du parcours', 'J’ai développé tous les systèmes internes des serveurs de RedeWarriors.', 'J’ai développé des projets pour des influenceurs via BrPacks.', 'J’ai développé des centaines de projets privés et quelques projets publics.', 'J’ai développé le mode classé et certains systèmes pour Cobblemon Central.', 'À propos de moi', 'Joueur de Major, niveau 22 sur GC, niveau 11 sur FACEIT et 36k en MM.', 'Cinq établissements supérieurs, six diplômes et deux diplômes de fin d’études secondaires.', 'Fan d’un drama coréen, d’un film et d’une série.', 'Hommage', 'Si je meurs, une vidéo est programmée depuis octobre 2022.', '© 2026 Nonopichy. Tous droits réservés.'],
    ru: ['Наверх', 'Проекты', 'Обо мне', 'Памяти', '20 лет | Разработчик | Более 4 лет опыта', 'Время — не ценность. Как и объём — не масса. Проснитесь, откройте глаза.\nИ превратите свою жизнь в историю.', 'Узнать больше', 'Где я оставил свой след', 'Компании, проекты и сотрудничество на моём пути', 'Я разработал все внутренние системы серверов RedeWarriors.', 'Я разрабатывал проекты для инфлюенсеров через BrPacks.', 'Я разработал сотни частных проектов и несколько публичных.', 'Я разработал рейтинговый режим и некоторые системы для Cobblemon Central.', 'Обо мне', 'Игрок Major, уровень 22 на GC, уровень 11 на FACEIT и 36k в MM.', 'Пять вузов, шесть дипломов о высшем образовании и два о среднем.', 'Поклонник одной дорамы, одного фильма и одного сериала.', 'Памяти', 'На случай моей смерти с октября 2022 года запланировано видео.', '© 2026 Nonopichy. Все права защищены.'],
    es: ['Inicio', 'Proyectos', 'Sobre mí', 'Homenaje', '20 años | Desarrollador | Más de 4 años de experiencia', 'El tiempo no es valor. Así como el volumen no es masa. Despierta, abre los ojos.\nY haz de tu vida una historia.', 'Conoce más', 'Donde he dejado mi huella', 'Empresas, proyectos y colaboraciones a lo largo del camino', 'Desarrollé todos los sistemas internos de los servidores de RedeWarriors.', 'Desarrollé proyectos para influencers a través de BrPacks.', 'He desarrollado cientos de proyectos privados y unos pocos públicos.', 'Desarrollé el modo clasificatorio y algunos sistemas para Cobblemon Central.', 'Sobre mí', 'Jugador de Major, nivel 22 en GC, nivel 11 en FACEIT y 36k en MM.', 'Cinco universidades, seis titulaciones y dos diplomas de secundaria.', 'Fan de algún drama coreano, de alguna película y de alguna serie.', 'Homenaje', 'Si muero, hay un vídeo programado desde octubre de 2022.', '© 2026 Nonopichy. Todos los derechos reservados.'],
    zh: ['顶部', '项目', '关于我', '纪念', '20岁 | 开发者 | 4年以上经验', '时间不是价值，正如体积不是质量。醒来，睁开双眼。\n让你的人生成为一个故事。', '了解更多', '我留下足迹的地方', '一路走来的公司、项目与合作', '我开发了 RedeWarriors 服务器的所有内部系统。', '我通过 BrPacks 为网络红人开发项目。', '我已经开发了数百个私人项目和少量公开项目。', '我为 Cobblemon Central 开发了排位模式和一些系统。', '关于我', 'Major 选手，GC 22级、FACEIT 11级，MM 评分36k。', '五所大学、六个大学学位和两个高中毕业文凭。', '喜欢某部韩剧、某部电影和某部电视剧。', '纪念', '如果我去世，有一个自2022年10月起安排好的视频。', '© 2026 Nonopichy。保留所有权利。']
  };
  // Language label, automatic option, theme button, image descriptions and tribute relationships.
  const labels = {
    pt: ['Idioma', 'Automático (país)', 'Alternar tema', 'Minha foto', 'Projetos', 'Perfil', 'Habilidades', 'Passatempos', 'Email', 'Meu avô', 'Um "amigo"', 'Pai do EiMine', 'Pet Fêmea', 'Pet Macho', 'Pet de Rua Macho'],
    en: ['Language', 'Automatic (country)', 'Toggle theme', 'My photo', 'Projects', 'Profile', 'Skills', 'Hobbies', 'Email', 'My grandfather', 'A "friend"', 'EiMine’s father', 'Female pet', 'Male pet', 'Male stray pet'],
    fr: ['Langue', 'Automatique (pays)', 'Changer de thème', 'Ma photo', 'Projets', 'Profil', 'Compétences', 'Loisirs', 'E-mail', 'Mon grand-père', 'Un "ami"', 'Père d’EiMine', 'Animal femelle', 'Animal mâle', 'Animal errant mâle'],
    ru: ['Язык', 'Автоматически (страна)', 'Сменить тему', 'Моё фото', 'Проекты', 'Профиль', 'Навыки', 'Увлечения', 'Электронная почта', 'Мой дедушка', 'Один "друг"', 'Отец EiMine', 'Питомец (самка)', 'Питомец (самец)', 'Уличный питомец (самец)'],
    es: ['Idioma', 'Automático (país)', 'Cambiar tema', 'Mi foto', 'Proyectos', 'Perfil', 'Habilidades', 'Pasatiempos', 'Correo electrónico', 'Mi abuelo', 'Un "amigo"', 'Padre de EiMine', 'Mascota hembra', 'Mascota macho', 'Mascota callejera macho'],
    zh: ['语言', '自动（国家）', '切换主题', '我的照片', '项目', '个人资料', '技能', '爱好', '电子邮件', '我的祖父', '一位“朋友”', 'EiMine的父亲', '雌性宠物', '雄性宠物', '雄性流浪宠物']
  };
  const select = document.getElementById('language-select');
  const tributeItems = Array.from(document.querySelectorAll('#tributo li'));
  const tributeSuffixes = tributeItems.map(item => item.textContent.slice(item.textContent.indexOf(')') + 1));
  const tributeLabels = [9, 10, 11, 12, 13, 13, 14, 12, 13, 13, 13];
  const imageSelectors = ['.hero-img', '#onde img[src="git.png"]', '#sobre-mim img[src="rrr.png"]', '#sobre-mim img[src="fff.png"]', '#sobre-mim img[src="mmm.png"]', 'img[src="mail.png"]'];
  const storageKey = 'nonopichy-language';
  const read = (storage, key) => { try { return window[storage].getItem(key); } catch { return null; } };
  const save = (storage, key, value) => { try { window[storage].setItem(key, value); } catch { /* Storage may be disabled. */ } };
  let preference = read('localStorage', storageKey) || 'auto';
  if (preference !== 'auto' && !translations[preference]) preference = 'auto';
  let automaticLanguage = (navigator.languages || [navigator.language]).map(language => language.toLowerCase().split('-')[0]).find(language => translations[language]) || 'en';

  function applyLanguage(language) {
    const texts = translations[language];
    document.documentElement.lang = {pt: 'pt-BR', zh: 'zh-CN'}[language] || language;
    selectors.forEach((selector, index) => {
      const element = document.querySelector(selector);
      // Preserve the intentional line break without injecting translated HTML.
      element.replaceChildren(...texts[index].split(/\n/).flatMap((line, i) => i ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
    });
    const words = labels[language];
    document.getElementById('language-label').textContent = words[0];
    select.setAttribute('aria-label', words[0]);
    select.options[0].textContent = words[1];
    document.getElementById('toggle-dark').setAttribute('aria-label', words[2]);
    document.getElementById('back-to-top').title = texts[0];
    document.getElementById('back-to-top').setAttribute('aria-label', texts[0]);
    imageSelectors.forEach((selector, i) => document.querySelector(selector).alt = words[i + 3]);
    tributeItems.forEach((item, i) => { item.textContent = `(${words[tributeLabels[i]]})${tributeSuffixes[i]}`; });
    select.value = preference;
  }

  function languageForCountry(country) {
    const groups = {
      pt: ['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'],
      fr: ['FR', 'MC', 'BE', 'CH', 'LU', 'CD', 'CG', 'CI', 'SN', 'ML', 'BF', 'NE', 'BJ', 'TG', 'GN', 'GA', 'CM', 'TD', 'CF', 'DJ', 'KM', 'MG', 'HT', 'SC', 'MU', 'RE', 'GP', 'MQ', 'GF', 'PF', 'NC', 'YT', 'PM', 'BL', 'MF', 'WF'],
      ru: ['RU', 'BY', 'KZ', 'KG'],
      es: ['ES', 'MX', 'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GQ', 'GT', 'HN', 'NI', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE'],
      zh: ['CN', 'TW', 'HK', 'MO', 'SG']
    };
    return Object.keys(groups).find(language => groups[language].includes(country)) || 'en';
  }

  select.addEventListener('change', () => {
    preference = select.value;
    save('localStorage', storageKey, preference);
    applyLanguage(preference === 'auto' ? automaticLanguage : preference);
    if (preference === 'auto') detectCountry();
  });
  let detection;
  function detectCountry() {
    if (detection) return detection;
    detection = (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      try {
        const cached = read('sessionStorage', 'nonopichy-country');
        let country = cached;
        if (!country) {
          // HTTPS lookup uses the visitor's public IP; no location permission is requested.
          const response = await fetch('https://ipwho.is/?fields=success,country_code', {signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer'});
          if (!response.ok) return;
          const data = await response.json();
          if (!data.success || !/^[A-Z]{2}$/.test(data.country_code)) return;
          country = data.country_code;
          save('sessionStorage', 'nonopichy-country', country);
        }
        automaticLanguage = languageForCountry(country);
        if (preference === 'auto') applyLanguage(automaticLanguage);
      } catch { /* Keep the browser language if the lookup is unavailable. */ }
      finally { clearTimeout(timeout); }
    })();
    return detection;
  }
  applyLanguage(preference === 'auto' ? automaticLanguage : preference);
  if (preference === 'auto') detectCountry();
})();
