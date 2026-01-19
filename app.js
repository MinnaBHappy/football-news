// Football News Application
// Main JavaScript file for handling all functionality

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        selectLeagues: "Select Leagues",
        addMoreLeagues: "Add More Leagues",
        addLeagues: "Add Leagues",
        refreshNews: "Refresh News",
        trendingNow: "Trending Now",
        latestNews: "Latest News",
        moreNews: "More News",
        references: "References",
        views: "views",
        hotNews: "HOT",
        transfer: "Transfer",
        injury: "Injury",
        dismissal: "Dismissal",
        match: "Match",
        rumor: "Rumor",
        noNews: "No news available for selected leagues and date",
        sources: "sources"
    },
    ko: {
        selectLeagues: "리그 선택",
        addMoreLeagues: "더 많은 리그 추가",
        addLeagues: "리그 추가",
        refreshNews: "뉴스 새로고침",
        trendingNow: "실시간 트렌드",
        latestNews: "최신 뉴스",
        moreNews: "더 많은 뉴스",
        references: "출처",
        views: "조회수",
        hotNews: "인기",
        transfer: "이적",
        injury: "부상",
        dismissal: "경질",
        match: "경기",
        rumor: "루머",
        noNews: "선택한 리그와 날짜에 해당하는 뉴스가 없습니다",
        sources: "출처"
    },
    ja: {
        selectLeagues: "リーグを選択",
        addMoreLeagues: "リーグを追加",
        addLeagues: "リーグ追加",
        refreshNews: "ニュース更新",
        trendingNow: "トレンド",
        latestNews: "最新ニュース",
        moreNews: "もっと見る",
        references: "参考文献",
        views: "閲覧数",
        hotNews: "注目",
        transfer: "移籍",
        injury: "負傷",
        dismissal: "解任",
        match: "試合",
        rumor: "噂",
        noNews: "選択したリーグと日付のニュースはありません",
        sources: "ソース"
    },
    zh: {
        selectLeagues: "选择联赛",
        addMoreLeagues: "添加更多联赛",
        addLeagues: "添加联赛",
        refreshNews: "刷新新闻",
        trendingNow: "热门趋势",
        latestNews: "最新新闻",
        moreNews: "更多新闻",
        references: "参考来源",
        views: "浏览量",
        hotNews: "热门",
        transfer: "转会",
        injury: "伤病",
        dismissal: "解雇",
        match: "比赛",
        rumor: "传闻",
        noNews: "所选联赛和日期没有可用的新闻",
        sources: "来源"
    },
    fr: {
        selectLeagues: "Sélectionner les ligues",
        addMoreLeagues: "Ajouter plus de ligues",
        addLeagues: "Ajouter des ligues",
        refreshNews: "Actualiser",
        trendingNow: "Tendances",
        latestNews: "Dernières nouvelles",
        moreNews: "Plus de nouvelles",
        references: "Références",
        views: "vues",
        hotNews: "CHAUD",
        transfer: "Transfert",
        injury: "Blessure",
        dismissal: "Licenciement",
        match: "Match",
        rumor: "Rumeur",
        noNews: "Aucune nouvelle disponible pour les ligues et la date sélectionnées",
        sources: "sources"
    },
    it: {
        selectLeagues: "Seleziona leghe",
        addMoreLeagues: "Aggiungi altre leghe",
        addLeagues: "Aggiungi leghe",
        refreshNews: "Aggiorna notizie",
        trendingNow: "Di tendenza",
        latestNews: "Ultime notizie",
        moreNews: "Altre notizie",
        references: "Riferimenti",
        views: "visualizzazioni",
        hotNews: "CALDO",
        transfer: "Trasferimento",
        injury: "Infortunio",
        dismissal: "Esonero",
        match: "Partita",
        rumor: "Voci",
        noNews: "Nessuna notizia disponibile per le leghe e la data selezionate",
        sources: "fonti"
    },
    de: {
        selectLeagues: "Ligen auswählen",
        addMoreLeagues: "Weitere Ligen hinzufügen",
        addLeagues: "Ligen hinzufügen",
        refreshNews: "Nachrichten aktualisieren",
        trendingNow: "Im Trend",
        latestNews: "Neueste Nachrichten",
        moreNews: "Mehr Nachrichten",
        references: "Referenzen",
        views: "Aufrufe",
        hotNews: "HEIß",
        transfer: "Transfer",
        injury: "Verletzung",
        dismissal: "Entlassung",
        match: "Spiel",
        rumor: "Gerücht",
        noNews: "Keine Nachrichten für ausgewählte Ligen und Datum verfügbar",
        sources: "Quellen"
    },
    es: {
        selectLeagues: "Seleccionar ligas",
        addMoreLeagues: "Agregar más ligas",
        addLeagues: "Agregar ligas",
        refreshNews: "Actualizar noticias",
        trendingNow: "Tendencias",
        latestNews: "Últimas noticias",
        moreNews: "Más noticias",
        references: "Referencias",
        views: "vistas",
        hotNews: "CALIENTE",
        transfer: "Fichaje",
        injury: "Lesión",
        dismissal: "Despido",
        match: "Partido",
        rumor: "Rumor",
        noNews: "No hay noticias disponibles para las ligas y fecha seleccionadas",
        sources: "fuentes"
    }
};

// ============================================
// LANGUAGES DATA
// ============================================
const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
];

// ============================================
// LEAGUES DATA
// ============================================
const mainLeagues = [
    { id: 'epl', name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', active: true },
    { id: 'laliga', name: 'La Liga', flag: '🇪🇸', country: 'Spain', active: true },
    { id: 'bundesliga', name: 'Bundesliga', flag: '🇩🇪', country: 'Germany', active: true },
    { id: 'ligue1', name: 'Ligue 1', flag: '🇫🇷', country: 'France', active: true },
    { id: 'seriea', name: 'Serie A', flag: '🇮🇹', country: 'Italy', active: true }
];

const additionalLeagues = [
    { id: 'kleague', name: 'K League 1', flag: '🇰🇷', country: 'South Korea', active: false },
    { id: 'saudileague', name: 'Saudi Pro League', flag: '🇸🇦', country: 'Saudi Arabia', active: false },
    { id: 'mls', name: 'MLS', flag: '🇺🇸', country: 'USA', active: false },
    { id: 'eredivisie', name: 'Eredivisie', flag: '🇳🇱', country: 'Netherlands', active: false },
    { id: 'liganos', name: 'Liga Portugal', flag: '🇵🇹', country: 'Portugal', active: false },
    { id: 'jleague', name: 'J1 League', flag: '🇯🇵', country: 'Japan', active: false },
    { id: 'superlig', name: 'Süper Lig', flag: '🇹🇷', country: 'Turkey', active: false },
    { id: 'championship', name: 'EFL Championship', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England', active: false },
    { id: 'brasileirao', name: 'Brasileirão', flag: '🇧🇷', country: 'Brazil', active: false },
    { id: 'superliga', name: 'Argentine Primera', flag: '🇦🇷', country: 'Argentina', active: false }
];

// ============================================
// SAMPLE NEWS DATA
// ============================================
const sampleNews = [
    {
        id: 1,
        league: 'epl',
        category: 'transfer',
        title: 'Manchester United Close to Signing Star Midfielder in Record Deal',
        summary: 'Manchester United are reportedly on the verge of completing a record-breaking transfer for one of Europe\'s most sought-after midfielders. The deal is expected to exceed £100 million, making it the club\'s biggest signing in history.',
        fullText: 'Manchester United are reportedly on the verge of completing a record-breaking transfer for one of Europe\'s most sought-after midfielders. The deal is expected to exceed £100 million, making it the club\'s biggest signing in history.\n\nSources close to the negotiations indicate that personal terms have already been agreed, with the player set to earn approximately £300,000 per week. The transfer would represent a significant statement of intent from the Red Devils as they look to challenge for major honors next season.\n\nThe midfielder, who has been instrumental in his current club\'s success, is believed to have been a long-term target for United\'s management team. His arrival would address a key area of concern in the squad and provide much-needed creativity and control in the middle of the park.',
        views: 125000,
        sourceCount: 15,
        references: 'Sky Sports, BBC Sport, The Athletic, ESPN FC, Goal.com, Fabrizio Romano (Twitter), Manchester Evening News, The Guardian, Daily Mail, Telegraph Sport',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800'
    },
    {
        id: 2,
        league: 'laliga',
        category: 'transfer',
        title: 'Real Madrid Announce Shocking Summer Signing Worth €150M',
        summary: 'Real Madrid have confirmed the signing of a world-class forward in a deal worth €150 million, sending shockwaves through European football.',
        fullText: 'Real Madrid have officially confirmed the signing of a world-class forward in a deal worth €150 million, marking one of the most significant transfers in recent memory.\n\nThe Spanish giants have been tracking the player for several seasons and finally made their move after triggering his release clause. The player has signed a six-year contract and will wear the iconic number 7 shirt.\n\nClub president Florentino Pérez expressed his delight at securing the signature, stating that this signing demonstrates Real Madrid\'s commitment to remaining at the pinnacle of world football.',
        views: 89000,
        sourceCount: 12,
        references: 'Marca, AS, Sport, Mundo Deportivo, ESPN Deportes, Fabrizio Romano, El Chiringuito TV',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800'
    },
    {
        id: 3,
        league: 'bundesliga',
        category: 'dismissal',
        title: 'Bayern Munich Part Ways with Manager After Cup Exit',
        summary: 'Bayern Munich have confirmed the departure of their head coach following a shock cup elimination against lower-league opposition.',
        fullText: 'Bayern Munich have announced the departure of their head coach with immediate effect, following an embarrassing cup elimination against a second-division side.\n\nThe decision was made after an emergency board meeting that lasted several hours. The club released a statement thanking the manager for his service while acknowledging that results had fallen below expectations.\n\nAssistant coach will take charge on an interim basis while the club searches for a permanent replacement. Several high-profile names are already being linked with the position.',
        views: 67000,
        sourceCount: 10,
        references: 'Kicker, Bild, Sport1, Sky Deutschland, Transfermarkt',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'
    },
    {
        id: 4,
        league: 'seriea',
        category: 'injury',
        title: 'Juventus Star Ruled Out for Season with ACL Injury',
        summary: 'Juventus have confirmed that their key striker will miss the remainder of the season after suffering an ACL tear during training.',
        fullText: 'Juventus have confirmed devastating news that their main striker has suffered a complete ACL tear and will miss the remainder of the campaign.\n\nThe injury occurred during a routine training session and scans have revealed the full extent of the damage. The player is expected to undergo surgery next week and faces a recovery period of approximately 9 months.\n\nThe club has already begun exploring options in the transfer market to fill the void left by this significant blow to their title aspirations.',
        views: 45000,
        sourceCount: 8,
        references: 'Gazzetta dello Sport, Corriere dello Sport, Tuttosport, Sky Sport Italia',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800'
    },
    {
        id: 5,
        league: 'ligue1',
        category: 'transfer',
        title: 'PSG Target Premier League Star in January Swoop',
        summary: 'Paris Saint-Germain are preparing a €80 million bid for a Premier League midfielder as they look to strengthen their squad.',
        fullText: 'Paris Saint-Germain are reportedly preparing an audacious bid for a Premier League midfielder as they look to add quality to their squad during the January transfer window.\n\nThe French champions have identified the player as a key target and are willing to pay up to €80 million to secure his services. The player\'s current club are reluctant to sell but could be tempted by such a significant offer.\n\nPSG\'s sporting director has been in contact with the player\'s representatives and negotiations are said to be progressing well.',
        views: 38000,
        sourceCount: 7,
        references: 'L\'Équipe, Le Parisien, RMC Sport, Foot Mercato, Canal+',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800'
    },
    {
        id: 6,
        league: 'epl',
        category: 'match',
        title: 'Liverpool Secure Dramatic Late Win Against Arsenal',
        summary: 'Liverpool scored a 94th-minute winner to defeat Arsenal 3-2 in a thrilling Premier League encounter at Anfield.',
        fullText: 'Liverpool secured a dramatic 3-2 victory over Arsenal with a stunning 94th-minute goal that sent Anfield into raptures.\n\nThe match see-sawed throughout with both teams creating numerous chances. Arsenal twice took the lead but Liverpool showed tremendous resilience to fight back on each occasion.\n\nThe winning goal, a spectacular long-range strike, sparked wild celebrations and moved Liverpool closer to the top of the table.',
        views: 32000,
        sourceCount: 6,
        references: 'BBC Sport, Sky Sports, The Guardian, Liverpool Echo',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800'
    },
    {
        id: 7,
        league: 'kleague',
        category: 'transfer',
        title: 'K League 1 Club Signs Former European Star',
        summary: 'A major K League 1 club has completed the signing of a former Champions League winner in a landmark deal for Korean football.',
        fullText: 'In a major coup for Korean football, a leading K League 1 club has announced the signing of a former Champions League winner.\n\nThe experienced midfielder, who has played for some of Europe\'s biggest clubs, has signed a two-year contract worth a reported $5 million per season.\n\nThe signing is expected to raise the profile of the K League and attract more international attention to Korean football.',
        views: 28000,
        sourceCount: 5,
        references: 'Sports Chosun, Ilgan Sports, Yonhap News, Goal Korea',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800'
    },
    {
        id: 8,
        league: 'saudileague',
        category: 'transfer',
        title: 'Saudi Pro League Club Prepares Record-Breaking Bid',
        summary: 'A Saudi Pro League club is preparing to break the world transfer record with a bid for one of football\'s biggest stars.',
        fullText: 'One of Saudi Arabia\'s top clubs is reportedly preparing an unprecedented bid that could shatter the world transfer record.\n\nThe club is willing to offer over €300 million for a current Ballon d\'Or winner, along with a salary package that would make the player the highest-paid athlete in history.\n\nThe player\'s current club have indicated they would be reluctant to sell, but the sheer size of the offer could force them to reconsider.',
        views: 52000,
        sourceCount: 9,
        references: 'Arab News, Al Arabiya, ESPN, Sky Sports, The Athletic',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800'
    },
    {
        id: 9,
        league: 'laliga',
        category: 'injury',
        title: 'Barcelona Captain Returns to Training After Long Absence',
        summary: 'Barcelona\'s captain has returned to first-team training after a four-month injury layoff, boosting the squad ahead of crucial matches.',
        fullText: 'Barcelona have received a major boost with the return of their captain to first-team training after four months on the sidelines.\n\nThe experienced defender suffered a hamstring injury in September and has been working on his recovery ever since. Medical staff have confirmed he is now fully fit and available for selection.\n\nThe captain\'s return comes at a crucial time as Barcelona prepare for a demanding run of fixtures in both domestic and European competition.',
        views: 25000,
        sourceCount: 6,
        references: 'Mundo Deportivo, Sport, FC Barcelona Official, ESPN Deportes',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800'
    },
    {
        id: 10,
        league: 'bundesliga',
        category: 'rumor',
        title: 'Borussia Dortmund Eye Surprise Loan Move for Chelsea Striker',
        summary: 'Borussia Dortmund are considering a loan move for an out-of-favor Chelsea striker to bolster their attack.',
        fullText: 'Borussia Dortmund are reportedly exploring the possibility of signing a Chelsea striker on loan until the end of the season.\n\nThe German club have been monitoring the situation at Stamford Bridge and believe the player could benefit from regular playing time. Initial discussions have taken place between the two clubs.\n\nChelsea are said to be open to the idea, provided the loan includes an option to buy.',
        views: 21000,
        sourceCount: 5,
        references: 'Kicker, Sport Bild, Sky Deutschland, The Athletic',
        date: '2026-01-19',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800'
    }
];

// ============================================
// APPLICATION STATE
// ============================================
let currentLanguage = 'en';
let selectedDate = new Date().toISOString().split('T')[0];
let allLeagues = [...mainLeagues, ...additionalLeagues];

// ============================================
// UTILITY FUNCTIONS
// ============================================
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(currentLanguage === 'ko' ? 'ko-KR' : 
           currentLanguage === 'ja' ? 'ja-JP' : 
           currentLanguage === 'zh' ? 'zh-CN' : 
           currentLanguage === 'fr' ? 'fr-FR' : 
           currentLanguage === 'it' ? 'it-IT' : 
           currentLanguage === 'de' ? 'de-DE' : 
           currentLanguage === 'es' ? 'es-ES' : 'en-US', options);
}

// ============================================
// UI RENDERING FUNCTIONS
// ============================================
function renderLeaguesList() {
    const container = document.getElementById('leaguesList');
    const activeLeagues = allLeagues.filter(l => mainLeagues.some(ml => ml.id === l.id) || l.active);
    
    container.innerHTML = activeLeagues.map(league => `
        <div class="league-item ${league.active ? 'active' : ''}" data-league-id="${league.id}">
            <input type="checkbox" ${league.active ? 'checked' : ''} />
            <span class="league-flag">${league.flag}</span>
            <span class="league-name">${league.name}</span>
        </div>
    `).join('');

    // Add event listeners
    container.querySelectorAll('.league-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.type !== 'checkbox') {
                const checkbox = item.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
            }
            const leagueId = item.dataset.leagueId;
            toggleLeague(leagueId);
        });
    });
}

function renderAdditionalLeagues() {
    const container = document.getElementById('additionalLeagues');
    const availableLeagues = additionalLeagues.filter(l => !l.active);
    
    container.innerHTML = availableLeagues.map(league => `
        <div class="additional-league-item" data-league-id="${league.id}">
            <span class="league-flag">${league.flag}</span>
            <span class="league-name">${league.name}</span>
            <span style="color: #888; font-size: 12px;">${league.country}</span>
        </div>
    `).join('');

    // Add event listeners
    container.querySelectorAll('.additional-league-item').forEach(item => {
        item.addEventListener('click', () => {
            const leagueId = item.dataset.leagueId;
            addLeague(leagueId);
            item.classList.toggle('selected');
        });
    });
}

function renderLanguageDropdown() {
    const container = document.getElementById('languageDropdown');
    
    container.innerHTML = languages.map(lang => `
        <div class="language-item ${lang.code === currentLanguage ? 'active' : ''}" data-lang="${lang.code}">
            <span class="language-flag">${lang.flag}</span>
            <span class="language-name">${lang.name}</span>
        </div>
    `).join('');

    // Add event listeners
    container.querySelectorAll('.language-item').forEach(item => {
        item.addEventListener('click', () => {
            changeLanguage(item.dataset.lang);
        });
    });
}

function renderSelectedLeaguesInfo() {
    const container = document.getElementById('selectedLeaguesInfo');
    const activeLeagues = allLeagues.filter(l => l.active);
    
    container.innerHTML = activeLeagues.map(league => `
        <div class="league-badge">
            <span>${league.flag}</span>
            <span>${league.name}</span>
        </div>
    `).join('');
}

function renderNews() {
    const container = document.getElementById('newsGrid');
    const activeLeagueIds = allLeagues.filter(l => l.active).map(l => l.id);
    
    // Filter news by selected leagues and date
    let filteredNews = sampleNews.filter(news => 
        activeLeagueIds.includes(news.league)
    );

    if (filteredNews.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #888;">
                <p style="font-size: 18px;">${t('noNews')}</p>
            </div>
        `;
        return;
    }

    // Sort by views (popularity)
    filteredNews.sort((a, b) => b.views - a.views);

    // Take top 5-6 news
    filteredNews = filteredNews.slice(0, 6);

    // Assign hot classes based on ranking
    const hotClasses = ['hot-1', 'hot-2', 'hot-3', 'hot-4', 'hot-5'];
    
    container.innerHTML = filteredNews.map((news, index) => {
        const hotClass = hotClasses[index] || '';
        const league = allLeagues.find(l => l.id === news.league);
        const showHotBadge = index < 2;
        
        return `
            <div class="news-card ${hotClass}" data-news-id="${news.id}">
                ${showHotBadge ? `<div class="hot-badge">🔥 ${t('hotNews')}</div>` : ''}
                <div class="news-image" style="background-image: url('${news.image}'); background-size: cover; background-position: center;"></div>
                <div class="news-content">
                    <span class="news-category">${t(news.category)}</span>
                    <h3 class="news-title">${news.title}</h3>
                    <div class="news-meta">
                        <span class="news-views">👁 ${formatNumber(news.views)} ${t('views')}</span>
                        <span>${league ? league.flag + ' ' + league.name : ''}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add click event listeners
    container.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', () => {
            const newsId = parseInt(card.dataset.newsId);
            showNewsDetail(newsId);
        });
    });
}

function showNewsDetail(newsId) {
    const news = sampleNews.find(n => n.id === newsId);
    if (!news) return;

    const league = allLeagues.find(l => l.id === news.league);
    const modal = document.getElementById('newsDetailModal');
    
    document.getElementById('newsDetailImage').style.backgroundImage = `url('${news.image}')`;
    document.getElementById('newsDetailImage').style.backgroundSize = 'cover';
    document.getElementById('newsDetailImage').style.backgroundPosition = 'center';
    document.getElementById('newsDetailCategory').textContent = t(news.category);
    document.getElementById('newsDetailTitle').textContent = news.title;
    document.getElementById('newsDetailDate').textContent = `📅 ${formatDate(news.date)}`;
    document.getElementById('newsDetailViews').textContent = `👁 ${formatNumber(news.views)} ${t('views')}`;
    document.getElementById('newsDetailLeague').textContent = league ? `${league.flag} ${league.name}` : '';
    document.getElementById('newsDetailText').textContent = news.fullText;
    document.getElementById('newsDetailReferences').textContent = news.references;
    
    modal.classList.add('active');
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
}

// ============================================
// EVENT HANDLERS
// ============================================
function toggleLeague(leagueId) {
    const league = allLeagues.find(l => l.id === leagueId);
    if (league) {
        league.active = !league.active;
        renderLeaguesList();
        renderSelectedLeaguesInfo();
        renderNews();
    }
}

function addLeague(leagueId) {
    const league = allLeagues.find(l => l.id === leagueId);
    if (league) {
        league.active = true;
        renderLeaguesList();
        renderSelectedLeaguesInfo();
        renderNews();
        document.getElementById('addLeagueModal').classList.remove('active');
    }
}

function changeLanguage(langCode) {
    currentLanguage = langCode;
    const lang = languages.find(l => l.code === langCode);
    
    document.getElementById('currentLangFlag').textContent = lang.flag;
    document.getElementById('currentLangName').textContent = lang.name;
    document.getElementById('languageDropdown').classList.remove('active');
    
    updateTranslations();
    renderLanguageDropdown();
    renderNews();
}

function handleDateChange(e) {
    selectedDate = e.target.value;
    renderNews();
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    // Set today's date in date picker
    const datePicker = document.getElementById('datePicker');
    datePicker.value = selectedDate;
    datePicker.addEventListener('change', handleDateChange);

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuDropdown = document.getElementById('menuDropdown');
    
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menuDropdown.classList.toggle('active');
    });

    // Add league button
    const addLeagueBtn = document.getElementById('addLeagueBtn');
    const addLeagueModal = document.getElementById('addLeagueModal');
    const modalClose = document.getElementById('modalClose');
    
    addLeagueBtn.addEventListener('click', () => {
        renderAdditionalLeagues();
        addLeagueModal.classList.add('active');
        menuDropdown.classList.remove('active');
    });
    
    modalClose.addEventListener('click', () => {
        addLeagueModal.classList.remove('active');
    });
    
    addLeagueModal.addEventListener('click', (e) => {
        if (e.target === addLeagueModal) {
            addLeagueModal.classList.remove('active');
        }
    });

    // Language selector
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Meatball menu
    const meatballBtn = document.getElementById('meatballBtn');
    const meatballDropdown = document.getElementById('meatballDropdown');
    
    meatballBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        meatballDropdown.classList.toggle('active');
    });

    // Meatball menu actions
    meatballDropdown.querySelectorAll('.meatball-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            switch (action) {
                case 'refresh':
                    renderNews();
                    break;
                case 'trending':
                    // Sort by most views
                    sampleNews.sort((a, b) => b.views - a.views);
                    renderNews();
                    break;
                case 'latest':
                    // Sort by date (newest first)
                    sampleNews.sort((a, b) => new Date(b.date) - new Date(a.date));
                    renderNews();
                    break;
                case 'more':
                    alert('More news feature would load additional news items');
                    break;
            }
            meatballDropdown.classList.remove('active');
        });
    });

    // News detail modal close
    const newsDetailModal = document.getElementById('newsDetailModal');
    const newsDetailClose = document.getElementById('newsDetailClose');
    
    newsDetailClose.addEventListener('click', () => {
        newsDetailModal.classList.remove('active');
    });
    
    newsDetailModal.addEventListener('click', (e) => {
        if (e.target === newsDetailModal) {
            newsDetailModal.classList.remove('active');
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        menuDropdown.classList.remove('active');
        languageDropdown.classList.remove('active');
        meatballDropdown.classList.remove('active');
    });

    // Prevent dropdown from closing when clicking inside
    menuDropdown.addEventListener('click', (e) => e.stopPropagation());
    languageDropdown.addEventListener('click', (e) => e.stopPropagation());
    meatballDropdown.addEventListener('click', (e) => e.stopPropagation());

    // Initial render
    renderLeaguesList();
    renderLanguageDropdown();
    renderSelectedLeaguesInfo();
    renderNews();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
