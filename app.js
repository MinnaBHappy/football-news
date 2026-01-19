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
    { id: 'laliga', name: 'La Liga', flag: '🇪🇸', country: 'Spain', active: false },
    { id: 'bundesliga', name: 'Bundesliga', flag: '🇩🇪', country: 'Germany', active: false },
    { id: 'ligue1', name: 'Ligue 1', flag: '🇫🇷', country: 'France', active: false },
    { id: 'seriea', name: 'Serie A', flag: '🇮🇹', country: 'Italy', active: false }
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
// SAMPLE NEWS DATA (with translations)
// ============================================
const sampleNews = [
    {
        id: 1,
        league: 'epl',
        category: 'transfer',
        title: {
            en: 'Manchester United Close to Signing Star Midfielder in Record Deal',
            ko: '맨체스터 유나이티드, 역대급 미드필더 영입 임박',
            ja: 'マンチェスター・ユナイテッド、記録的な移籍金でスターMF獲得間近',
            zh: '曼联接近以创纪录价格签下明星中场',
            fr: 'Manchester United proche de signer un milieu de terrain star pour un montant record',
            it: 'Manchester United vicino a firmare un centrocampista stella per un accordo record',
            de: 'Manchester United kurz vor Rekordverpflichtung eines Star-Mittelfeldspielers',
            es: 'Manchester United cerca de fichar a una estrella del mediocampo en un acuerdo récord'
        },
        summary: {
            en: 'Manchester United are reportedly on the verge of completing a record-breaking transfer for one of Europe\'s most sought-after midfielders.',
            ko: '맨체스터 유나이티드가 유럽 최고의 미드필더 중 한 명을 역대 최고 이적료로 영입할 예정입니다.',
            ja: 'マンチェスター・ユナイテッドが、ヨーロッパで最も人気のあるMFの一人を記録的な移籍金で獲得する見込みです。',
            zh: '据报道，曼联即将完成对欧洲最受追捧的中场之一的创纪录转会。',
            fr: 'Manchester United serait sur le point de conclure un transfert record pour l\'un des milieux de terrain les plus recherchés d\'Europe.',
            it: 'Il Manchester United sarebbe sul punto di completare un trasferimento record per uno dei centrocampisti più ricercati d\'Europa.',
            de: 'Manchester United steht Berichten zufolge kurz vor dem Abschluss eines rekordverdächtigen Transfers für einen der begehrtesten Mittelfeldspieler Europas.',
            es: 'Según los informes, el Manchester United está a punto de completar un fichaje récord por uno de los centrocampistas más codiciados de Europa.'
        },
        fullText: {
            en: 'Manchester United are reportedly on the verge of completing a record-breaking transfer for one of Europe\'s most sought-after midfielders. The deal is expected to exceed £100 million, making it the club\'s biggest signing in history.\n\nSources close to the negotiations indicate that personal terms have already been agreed, with the player set to earn approximately £300,000 per week. The transfer would represent a significant statement of intent from the Red Devils as they look to challenge for major honors next season.\n\nThe midfielder, who has been instrumental in his current club\'s success, is believed to have been a long-term target for United\'s management team.',
            ko: '맨체스터 유나이티드가 유럽 최고의 미드필더 중 한 명을 역대 최고 이적료로 영입할 예정입니다. 이적료는 1억 파운드를 초과할 것으로 예상되며, 이는 구단 역사상 최대 영입이 될 것입니다.\n\n협상에 가까운 소식통에 따르면 개인 조건은 이미 합의되었으며, 선수는 주당 약 30만 파운드를 받게 될 것입니다. 이번 이적은 레드 데블스가 다음 시즌 주요 타이틀에 도전하겠다는 강력한 의지를 보여줍니다.\n\n현 소속팀의 성공에 핵심적인 역할을 해온 이 미드필더는 유나이티드 경영진의 오랜 영입 목표였던 것으로 알려졌습니다.',
            ja: 'マンチェスター・ユナイテッドが、ヨーロッパで最も人気のあるMFの一人を記録的な移籍金で獲得する見込みです。移籍金は1億ポンドを超えると予想され、クラブ史上最大の補強となります。\n\n交渉に近い情報筋によると、個人条件はすでに合意されており、選手は週給約30万ポンドを得ることになります。この移籍は、来シーズンの主要タイトル獲得を目指すレッド・デビルズの強い意志を示すものです。\n\n現所属クラブの成功に大きく貢献してきたこのMFは、ユナイテッドの経営陣が長年狙っていた選手だと言われています。',
            zh: '据报道，曼联即将完成对欧洲最受追捧的中场之一的创纪录转会。转会费预计将超过1亿英镑，成为俱乐部历史上最大的签约。\n\n据接近谈判的消息人士透露，个人条款已经达成一致，球员将获得约每周30万英镑的薪水。这笔转会将代表红魔在下赛季争夺主要荣誉的重大意图声明。\n\n这位中场球员一直是其现俱乐部成功的关键，据信是曼联管理层的长期目标。',
            fr: 'Manchester United serait sur le point de conclure un transfert record pour l\'un des milieux de terrain les plus recherchés d\'Europe. L\'accord devrait dépasser 100 millions de livres sterling, ce qui en ferait le plus gros recrutement de l\'histoire du club.\n\nDes sources proches des négociations indiquent que les termes personnels ont déjà été convenus, le joueur devant gagner environ 300 000 £ par semaine. Le transfert représenterait une déclaration d\'intention significative des Red Devils alors qu\'ils cherchent à remporter les honneurs majeurs la saison prochaine.',
            it: 'Il Manchester United sarebbe sul punto di completare un trasferimento record per uno dei centrocampisti più ricercati d\'Europa. L\'accordo dovrebbe superare i 100 milioni di sterline, rendendolo il più grande acquisto nella storia del club.\n\nFonti vicine alle trattative indicano che i termini personali sono già stati concordati, con il giocatore che dovrebbe guadagnare circa 300.000 sterline a settimana. Il trasferimento rappresenterebbe una significativa dichiarazione di intenti dei Red Devils mentre cercano di competere per i maggiori onori la prossima stagione.',
            de: 'Manchester United steht Berichten zufolge kurz vor dem Abschluss eines rekordverdächtigen Transfers für einen der begehrtesten Mittelfeldspieler Europas. Der Deal soll 100 Millionen Pfund übersteigen und damit die größte Verpflichtung in der Vereinsgeschichte werden.\n\nQuellen, die den Verhandlungen nahestehen, deuten darauf hin, dass persönliche Bedingungen bereits vereinbart wurden, wobei der Spieler etwa 300.000 Pfund pro Woche verdienen soll.',
            es: 'Según los informes, el Manchester United está a punto de completar un fichaje récord por uno de los centrocampistas más codiciados de Europa. Se espera que el acuerdo supere los 100 millones de libras, convirtiéndolo en el fichaje más grande de la historia del club.\n\nFuentes cercanas a las negociaciones indican que ya se han acordado los términos personales, con el jugador preparado para ganar aproximadamente 300.000 libras por semana.'
        },
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
        title: {
            en: 'Real Madrid Announce Shocking Summer Signing Worth €150M',
            ko: '레알 마드리드, 1억 5천만 유로 대어 영입 발표',
            ja: 'レアル・マドリード、1億5000万ユーロの衝撃的な夏の移籍を発表',
            zh: '皇家马德里宣布价值1.5亿欧元的震撼夏季签约',
            fr: 'Le Real Madrid annonce un transfert estival choquant de 150 millions d\'euros',
            it: 'Il Real Madrid annuncia un acquisto estivo scioccante da 150 milioni di euro',
            de: 'Real Madrid gibt schockierende Sommerverpflichtung im Wert von 150 Millionen Euro bekannt',
            es: 'El Real Madrid anuncia un fichaje de verano impactante por 150 millones de euros'
        },
        summary: {
            en: 'Real Madrid have confirmed the signing of a world-class forward in a deal worth €150 million.',
            ko: '레알 마드리드가 1억 5천만 유로에 월드클래스 공격수 영입을 확정했습니다.',
            ja: 'レアル・マドリードが1億5000万ユーロでワールドクラスのFWの獲得を発表しました。',
            zh: '皇家马德里确认以1.5亿欧元签下一名世界级前锋。',
            fr: 'Le Real Madrid a confirmé la signature d\'un attaquant de classe mondiale pour 150 millions d\'euros.',
            it: 'Il Real Madrid ha confermato l\'acquisto di un attaccante di livello mondiale per 150 milioni di euro.',
            de: 'Real Madrid hat die Verpflichtung eines Weltklasse-Stürmers für 150 Millionen Euro bestätigt.',
            es: 'El Real Madrid ha confirmado el fichaje de un delantero de clase mundial por 150 millones de euros.'
        },
        fullText: {
            en: 'Real Madrid have officially confirmed the signing of a world-class forward in a deal worth €150 million, marking one of the most significant transfers in recent memory.\n\nThe Spanish giants have been tracking the player for several seasons and finally made their move after triggering his release clause. The player has signed a six-year contract and will wear the iconic number 7 shirt.\n\nClub president Florentino Pérez expressed his delight at securing the signature, stating that this signing demonstrates Real Madrid\'s commitment to remaining at the pinnacle of world football.',
            ko: '레알 마드리드가 1억 5천만 유로에 월드클래스 공격수 영입을 공식 확정했습니다. 이는 최근 기억에 남는 가장 중요한 이적 중 하나입니다.\n\n스페인의 거인은 여러 시즌 동안 이 선수를 추적해왔고, 마침내 그의 바이아웃 조항을 발동시켜 영입에 성공했습니다. 선수는 6년 계약을 체결했으며 상징적인 7번 유니폼을 입게 됩니다.\n\n플로렌티노 페레스 회장은 이번 영입에 대해 기쁨을 표하며, 이번 영입이 레알 마드리드가 세계 축구의 정상에 남겠다는 의지를 보여준다고 밝혔습니다.',
            ja: 'レアル・マドリードが1億5000万ユーロでワールドクラスのFWの獲得を正式に発表しました。これは近年で最も重要な移籍の一つです。\n\nスペインの名門は数シーズンにわたってこの選手を追跡し、ついに契約解除条項を発動して獲得に成功しました。選手は6年契約を結び、象徴的な背番号7を着用します。\n\nフロレンティーノ・ペレス会長は、この獲得に喜びを表明し、レアル・マドリードが世界サッカーの頂点に立ち続ける決意を示していると述べました。',
            zh: '皇家马德里正式确认以1.5亿欧元签下一名世界级前锋，这是近年来最重要的转会之一。\n\n西班牙巨人已经追踪这名球员好几个赛季了，最终触发了他的解约条款完成签约。球员签下了一份为期六年的合同，将身披标志性的7号球衣。\n\n俱乐部主席弗洛伦蒂诺·佩雷斯对完成签约表示高兴，称这次签约表明皇马致力于保持世界足球巅峰地位的决心。',
            fr: 'Le Real Madrid a officiellement confirmé la signature d\'un attaquant de classe mondiale pour 150 millions d\'euros, marquant l\'un des transferts les plus significatifs de mémoire récente.\n\nLes géants espagnols suivaient le joueur depuis plusieurs saisons et ont finalement fait leur offre après avoir déclenché sa clause libératoire.',
            it: 'Il Real Madrid ha ufficialmente confermato l\'acquisto di un attaccante di livello mondiale per 150 milioni di euro, segnando uno dei trasferimenti più significativi della memoria recente.\n\nI giganti spagnoli hanno seguito il giocatore per diverse stagioni e hanno finalmente fatto la loro mossa dopo aver attivato la sua clausola rescissoria.',
            de: 'Real Madrid hat offiziell die Verpflichtung eines Weltklasse-Stürmers für 150 Millionen Euro bestätigt, einer der bedeutendsten Transfers der jüngeren Geschichte.\n\nDer spanische Gigant hat den Spieler seit mehreren Saisons verfolgt und schließlich zugeschlagen, nachdem die Ausstiegsklausel aktiviert wurde.',
            es: 'El Real Madrid ha confirmado oficialmente el fichaje de un delantero de clase mundial por 150 millones de euros, marcando una de las transferencias más significativas de la memoria reciente.\n\nEl gigante español ha estado siguiendo al jugador durante varias temporadas y finalmente hizo su movimiento después de activar su cláusula de rescisión.'
        },
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
        title: {
            en: 'Bayern Munich Part Ways with Manager After Cup Exit',
            ko: '바이에른 뮌헨, 컵 대회 탈락 후 감독 경질',
            ja: 'バイエルン・ミュンヘン、カップ敗退後に監督と袂を分かつ',
            zh: '拜仁慕尼黑在杯赛出局后与主教练分道扬镳',
            fr: 'Le Bayern Munich se sépare de son entraîneur après l\'élimination en Coupe',
            it: 'Il Bayern Monaco si separa dal tecnico dopo l\'eliminazione in Coppa',
            de: 'Bayern München trennt sich nach Pokal-Aus vom Trainer',
            es: 'El Bayern de Múnich se separa del entrenador tras la eliminación de Copa'
        },
        summary: {
            en: 'Bayern Munich have confirmed the departure of their head coach following a shock cup elimination.',
            ko: '바이에른 뮌헨이 충격적인 컵 대회 탈락 후 감독의 경질을 확정했습니다.',
            ja: 'バイエルン・ミュンヘンが衝撃的なカップ敗退後、監督の退任を発表しました。',
            zh: '拜仁慕尼黑确认主教练在杯赛惨遭淘汰后离任。',
            fr: 'Le Bayern Munich a confirmé le départ de son entraîneur après une élimination choquante en Coupe.',
            it: 'Il Bayern Monaco ha confermato l\'addio del suo allenatore dopo una scioccante eliminazione in Coppa.',
            de: 'Bayern München hat die Trennung vom Cheftrainer nach dem überraschenden Pokal-Aus bestätigt.',
            es: 'El Bayern de Múnich ha confirmado la salida de su entrenador tras una sorprendente eliminación en Copa.'
        },
        fullText: {
            en: 'Bayern Munich have announced the departure of their head coach with immediate effect, following an embarrassing cup elimination against a second-division side.\n\nThe decision was made after an emergency board meeting that lasted several hours. The club released a statement thanking the manager for his service while acknowledging that results had fallen below expectations.\n\nAssistant coach will take charge on an interim basis while the club searches for a permanent replacement.',
            ko: '바이에른 뮌헨이 2부 리그 팀에게 충격적인 컵 대회 탈락을 당한 후 감독의 즉각적인 경질을 발표했습니다.\n\n이 결정은 수 시간에 걸친 긴급 이사회 회의 후에 내려졌습니다. 구단은 감독의 헌신에 감사하면서도 결과가 기대에 미치지 못했음을 인정하는 성명을 발표했습니다.\n\n수석 코치가 정규 후임자를 찾는 동안 임시로 팀을 이끌게 됩니다.',
            ja: 'バイエルン・ミュンヘンは、2部リーグのチームに対する屈辱的なカップ敗退後、監督の即時退任を発表しました。\n\nこの決定は、数時間に及ぶ緊急取締役会の後に下されました。クラブは監督の貢献に感謝しつつも、結果が期待を下回ったことを認める声明を発表しました。\n\nアシスタントコーチが正式な後任が見つかるまで暫定的に指揮を執ります。',
            zh: '拜仁慕尼黑宣布主教练即时离任，此前球队在杯赛中输给了一支二级联赛球队。\n\n这一决定是在持续数小时的紧急董事会会议后做出的。俱乐部发表声明感谢教练的付出，同时承认成绩未达预期。\n\n助理教练将在俱乐部寻找永久继任者期间暂时接管球队。',
            fr: 'Le Bayern Munich a annoncé le départ de son entraîneur avec effet immédiat, suite à une élimination embarrassante en Coupe contre une équipe de deuxième division.\n\nLa décision a été prise après une réunion d\'urgence du conseil d\'administration qui a duré plusieurs heures.',
            it: 'Il Bayern Monaco ha annunciato l\'addio del suo allenatore con effetto immediato, a seguito di un\'imbarazzante eliminazione in Coppa contro una squadra di seconda divisione.\n\nLa decisione è stata presa dopo una riunione d\'emergenza del consiglio che è durata diverse ore.',
            de: 'Bayern München hat die sofortige Trennung vom Cheftrainer bekanntgegeben, nach einer blamablen Pokalniederlage gegen einen Zweitligisten.\n\nDie Entscheidung wurde nach einer mehrstündigen Krisensitzung des Vorstands getroffen. Der Verein veröffentlichte eine Erklärung, in der dem Trainer für seine Arbeit gedankt wurde.',
            es: 'El Bayern de Múnich ha anunciado la salida de su entrenador con efecto inmediato, tras una vergonzosa eliminación de Copa ante un equipo de segunda división.\n\nLa decisión se tomó después de una reunión de emergencia de la junta directiva que duró varias horas.'
        },
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
        title: {
            en: 'Juventus Star Ruled Out for Season with ACL Injury',
            ko: '유벤투스 스타, ACL 부상으로 시즌 아웃',
            ja: 'ユベントスのスター選手、ACL負傷でシーズン終了',
            zh: '尤文图斯球星因ACL受伤赛季报销',
            fr: 'La star de la Juventus absente pour la saison suite à une blessure au LCA',
            it: 'La stella della Juventus fuori per la stagione per infortunio al LCA',
            de: 'Juventus-Star fällt mit Kreuzbandriss für die Saison aus',
            es: 'La estrella de la Juventus, fuera de la temporada por lesión de LCA'
        },
        summary: {
            en: 'Juventus have confirmed that their key striker will miss the remainder of the season after suffering an ACL tear.',
            ko: '유벤투스가 주전 스트라이커가 ACL 파열로 남은 시즌을 결장한다고 확정했습니다.',
            ja: 'ユベントスは、主力ストライカーがACL断裂により今季残りを欠場することを発表しました。',
            zh: '尤文图斯确认其主力前锋因ACL撕裂将缺席本赛季剩余比赛。',
            fr: 'La Juventus a confirmé que son attaquant clé manquera le reste de la saison après une rupture du LCA.',
            it: 'La Juventus ha confermato che il suo attaccante chiave salterà il resto della stagione dopo una rottura del LCA.',
            de: 'Juventus hat bestätigt, dass ihr Schlüsselstürmer nach einem Kreuzbandriss den Rest der Saison verpassen wird.',
            es: 'La Juventus ha confirmado que su delantero clave se perderá el resto de la temporada tras sufrir una rotura de LCA.'
        },
        fullText: {
            en: 'Juventus have confirmed devastating news that their main striker has suffered a complete ACL tear and will miss the remainder of the campaign.\n\nThe injury occurred during a routine training session and scans have revealed the full extent of the damage. The player is expected to undergo surgery next week and faces a recovery period of approximately 9 months.\n\nThe club has already begun exploring options in the transfer market to fill the void left by this significant blow to their title aspirations.',
            ko: '유벤투스가 주전 스트라이커가 전방 십자인대 완전 파열로 남은 시즌을 결장한다는 충격적인 소식을 확정했습니다.\n\n부상은 일상적인 훈련 중에 발생했으며, 검사 결과 부상의 전체 범위가 밝혀졌습니다. 선수는 다음 주 수술을 받을 예정이며, 약 9개월의 회복 기간이 필요합니다.\n\n구단은 타이틀 도전에 큰 타격을 준 이 공백을 메우기 위해 이적 시장에서 옵션을 모색하기 시작했습니다.',
            ja: 'ユベントスは、主力ストライカーが前十字靭帯を完全断裂し、今季残りを欠場するという衝撃的なニュースを発表しました。\n\n負傷は通常のトレーニング中に発生し、検査で損傷の全容が明らかになりました。選手は来週手術を受ける予定で、約9ヶ月の回復期間が見込まれています。\n\nクラブはタイトル獲得への大きな打撃となったこの穴を埋めるため、移籍市場でオプションを探し始めています。',
            zh: '尤文图斯确认了一个毁灭性的消息：他们的主力前锋遭受了完全的ACL撕裂，将缺席本赛季剩余的比赛。\n\n这次受伤发生在一次常规训练中，扫描结果显示了损伤的全部程度。球员预计将于下周接受手术，面临约9个月的恢复期。\n\n俱乐部已经开始在转会市场上寻找选项，以填补这一对争冠目标造成重大打击的空缺。',
            fr: 'La Juventus a confirmé la nouvelle dévastatrice que leur attaquant principal a subi une rupture complète du LCA et manquera le reste de la campagne.\n\nLa blessure s\'est produite lors d\'une séance d\'entraînement de routine.',
            it: 'La Juventus ha confermato la devastante notizia che il loro attaccante principale ha subito una rottura completa del LCA e salterà il resto della stagione.\n\nL\'infortunio è avvenuto durante una sessione di allenamento di routine.',
            de: 'Juventus hat die verheerende Nachricht bestätigt, dass ihr Hauptstürmer einen kompletten Kreuzbandriss erlitten hat und den Rest der Saison verpassen wird.\n\nDie Verletzung ereignete sich während einer routinemäßigen Trainingseinheit.',
            es: 'La Juventus ha confirmado la devastadora noticia de que su delantero principal ha sufrido una rotura completa del LCA y se perderá el resto de la temporada.\n\nLa lesión ocurrió durante una sesión de entrenamiento rutinaria.'
        },
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
        title: {
            en: 'PSG Target Premier League Star in January Swoop',
            ko: 'PSG, 1월 이적시장에서 프리미어리그 스타 영입 추진',
            ja: 'PSG、1月移籍市場でプレミアリーグのスター獲得を狙う',
            zh: 'PSG瞄准英超球星进行一月转会',
            fr: 'Le PSG cible une star de Premier League en janvier',
            it: 'Il PSG punta una stella della Premier League a gennaio',
            de: 'PSG nimmt Premier-League-Star im Januar ins Visier',
            es: 'El PSG apunta a una estrella de la Premier League en enero'
        },
        summary: {
            en: 'Paris Saint-Germain are preparing a €80 million bid for a Premier League midfielder.',
            ko: 'PSG가 프리미어리그 미드필더에게 8천만 유로의 입찰을 준비하고 있습니다.',
            ja: 'パリ・サンジェルマンがプレミアリーグのMFに8000万ユーロの入札を準備しています。',
            zh: '巴黎圣日耳曼正准备以8000万欧元竞标一名英超中场。',
            fr: 'Le Paris Saint-Germain prépare une offre de 80 millions d\'euros pour un milieu de Premier League.',
            it: 'Il Paris Saint-Germain sta preparando un\'offerta di 80 milioni di euro per un centrocampista della Premier League.',
            de: 'Paris Saint-Germain bereitet ein 80-Millionen-Euro-Angebot für einen Premier-League-Mittelfeldspieler vor.',
            es: 'El Paris Saint-Germain está preparando una oferta de 80 millones de euros por un centrocampista de la Premier League.'
        },
        fullText: {
            en: 'Paris Saint-Germain are reportedly preparing an audacious bid for a Premier League midfielder as they look to add quality to their squad during the January transfer window.\n\nThe French champions have identified the player as a key target and are willing to pay up to €80 million to secure his services. The player\'s current club are reluctant to sell but could be tempted by such a significant offer.\n\nPSG\'s sporting director has been in contact with the player\'s representatives and negotiations are said to be progressing well.',
            ko: 'PSG가 1월 이적시장에서 스쿼드의 질을 높이기 위해 프리미어리그 미드필더에게 대담한 입찰을 준비하고 있다고 합니다.\n\n프랑스 챔피언은 이 선수를 핵심 타겟으로 지목했으며, 그의 영입을 위해 최대 8천만 유로를 지불할 의향이 있습니다. 선수의 현 소속팀은 매각을 꺼리고 있지만 이러한 상당한 제안에 흔들릴 수 있습니다.\n\nPSG의 스포츠 디렉터가 선수 측과 접촉했으며, 협상이 순조롭게 진행되고 있다고 합니다.',
            ja: 'パリ・サンジェルマンが1月の移籍市場でスクワッドの質を高めるため、プレミアリーグのMFに大胆な入札を準備していると報じられています。\n\nフランス王者はこの選手を主要ターゲットとして特定し、獲得のために最大8000万ユーロを支払う用意があります。選手の現所属クラブは売却に消極的ですが、このような大きなオファーには心が動く可能性があります。\n\nPSGのスポーツディレクターは選手側と接触しており、交渉は順調に進んでいると言われています。',
            zh: '据报道，巴黎圣日耳曼正准备在一月转会窗口期间为增强阵容质量，向一名英超中场发起大胆竞标。\n\n法甲冠军已将该球员确定为关键目标，愿意支付高达8000万欧元来获得他的加盟。球员目前的俱乐部不愿出售，但可能会被如此可观的报价所动摇。\n\nPSG的体育总监已与球员代表取得联系，据说谈判进展顺利。',
            fr: 'Le Paris Saint-Germain préparerait une offre audacieuse pour un milieu de terrain de Premier League alors qu\'il cherche à renforcer son effectif pendant le mercato hivernal.\n\nLes champions de France ont identifié le joueur comme une cible clé et sont prêts à payer jusqu\'à 80 millions d\'euros pour s\'assurer ses services.',
            it: 'Il Paris Saint-Germain starebbe preparando un\'offerta audace per un centrocampista della Premier League nel tentativo di aggiungere qualità alla rosa durante la finestra di trasferimento di gennaio.\n\nI campioni francesi hanno identificato il giocatore come obiettivo chiave e sono disposti a pagare fino a 80 milioni di euro.',
            de: 'Paris Saint-Germain bereitet Berichten zufolge ein mutiges Angebot für einen Premier-League-Mittelfeldspieler vor, um die Qualität ihres Kaders im Januar-Transferfenster zu erhöhen.\n\nDer französische Meister hat den Spieler als Schlüsselziel identifiziert und ist bereit, bis zu 80 Millionen Euro zu zahlen.',
            es: 'Según los informes, el Paris Saint-Germain está preparando una audaz oferta por un centrocampista de la Premier League mientras busca añadir calidad a su plantilla durante la ventana de transferencias de enero.\n\nEl campeón francés ha identificado al jugador como objetivo clave y está dispuesto a pagar hasta 80 millones de euros.'
        },
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
        title: {
            en: 'Liverpool Secure Dramatic Late Win Against Arsenal',
            ko: '리버풀, 아스널 상대로 극적인 역전승',
            ja: 'リバプール、アーセナル戦で劇的な逆転勝利',
            zh: '利物浦在对阵阿森纳的比赛中上演绝杀',
            fr: 'Liverpool remporte une victoire dramatique contre Arsenal',
            it: 'Il Liverpool conquista una vittoria drammatica contro l\'Arsenal',
            de: 'Liverpool sichert sich dramatischen Spätsieg gegen Arsenal',
            es: 'El Liverpool logra una dramática victoria tardía contra el Arsenal'
        },
        summary: {
            en: 'Liverpool scored a 94th-minute winner to defeat Arsenal 3-2 in a thrilling Premier League encounter.',
            ko: '리버풀이 94분 결승골로 아스널을 3-2로 꺾었습니다.',
            ja: 'リバプールが94分の決勝ゴールでアーセナルを3-2で下しました。',
            zh: '利物浦在第94分钟打入制胜球，以3-2击败阿森纳。',
            fr: 'Liverpool a marqué un but vainqueur à la 94e minute pour battre Arsenal 3-2.',
            it: 'Il Liverpool ha segnato il gol della vittoria al 94\' per battere l\'Arsenal 3-2.',
            de: 'Liverpool erzielte in der 94. Minute den Siegtreffer zum 3:2 gegen Arsenal.',
            es: 'El Liverpool marcó el gol de la victoria en el minuto 94 para derrotar al Arsenal 3-2.'
        },
        fullText: {
            en: 'Liverpool secured a dramatic 3-2 victory over Arsenal with a stunning 94th-minute goal that sent Anfield into raptures.\n\nThe match see-sawed throughout with both teams creating numerous chances. Arsenal twice took the lead but Liverpool showed tremendous resilience to fight back on each occasion.\n\nThe winning goal, a spectacular long-range strike, sparked wild celebrations and moved Liverpool closer to the top of the table.',
            ko: '리버풀이 94분 극적인 골로 아스널을 3-2로 꺾으며 안필드를 열광의 도가니로 만들었습니다.\n\n경기는 양 팀이 수많은 기회를 만들며 치열하게 전개되었습니다. 아스널이 두 번 리드를 잡았지만, 리버풀은 매번 놀라운 회복력으로 반격에 성공했습니다.\n\n결승골은 장거리 슛으로 터졌으며, 이로 인해 열광적인 세리머니가 펼쳐졌고 리버풀은 순위표 상위권에 더 가까워졌습니다.',
            ja: 'リバプールが94分の見事なゴールでアーセナルを3-2で下し、アンフィールドを歓喜に包みました。\n\n試合は両チームが多くのチャンスを作り、一進一退の展開となりました。アーセナルが2度リードを奪いましたが、リバプールはその都度驚異的な粘り強さで反撃しました。\n\n決勝ゴールは見事なロングシュートで、熱狂的なセレブレーションを引き起こし、リバプールを順位表の上位に近づけました。',
            zh: '利物浦凭借第94分钟的精彩进球以3-2战胜阿森纳，安菲尔德球场沸腾了。\n\n比赛中双方你来我往，创造了无数机会。阿森纳两次取得领先，但利物浦每次都展现出惊人的韧性进行反击。\n\n制胜球是一记精彩的远射，引发了疯狂的庆祝，使利物浦更接近积分榜榜首。',
            fr: 'Liverpool a remporté une victoire dramatique 3-2 contre Arsenal avec un superbe but à la 94e minute qui a fait exploser Anfield de joie.\n\nLe match a été indécis tout au long, les deux équipes créant de nombreuses occasions.',
            it: 'Il Liverpool ha conquistato una drammatica vittoria per 3-2 sull\'Arsenal con uno splendido gol al 94\' che ha mandato Anfield in visibilio.\n\nLa partita è stata combattuta con entrambe le squadre che hanno creato numerose occasioni.',
            de: 'Liverpool sicherte sich einen dramatischen 3:2-Sieg über Arsenal mit einem atemberaubenden Tor in der 94. Minute, das Anfield in Ekstase versetzte.\n\nDas Spiel wogte hin und her, wobei beide Teams zahlreiche Chancen kreierten.',
            es: 'El Liverpool aseguró una dramática victoria por 3-2 sobre el Arsenal con un impresionante gol en el minuto 94 que enloqueció a Anfield.\n\nEl partido fue de ida y vuelta con ambos equipos creando numerosas ocasiones.'
        },
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
        title: {
            en: 'K League 1 Club Signs Former European Star',
            ko: 'K리그1 구단, 전 유럽 스타 영입',
            ja: 'Kリーグ1クラブ、元ヨーロッパスター選手と契約',
            zh: 'K联赛1俱乐部签下前欧洲球星',
            fr: 'Un club de K League 1 signe une ancienne star européenne',
            it: 'Un club della K League 1 firma un\'ex stella europea',
            de: 'K-League-1-Klub verpflichtet ehemaligen Europa-Star',
            es: 'Un club de la K League 1 ficha a una ex estrella europea'
        },
        summary: {
            en: 'A major K League 1 club has completed the signing of a former Champions League winner.',
            ko: 'K리그1 주요 구단이 전 챔피언스리그 우승자 영입을 완료했습니다.',
            ja: 'Kリーグ1の主要クラブが元チャンピオンズリーグ優勝者と契約を完了しました。',
            zh: 'K联赛1主要俱乐部完成了对一位前欧冠冠军球员的签约。',
            fr: 'Un grand club de K League 1 a finalisé la signature d\'un ancien vainqueur de la Ligue des champions.',
            it: 'Un importante club della K League 1 ha completato l\'acquisto di un ex vincitore della Champions League.',
            de: 'Ein großer K-League-1-Klub hat die Verpflichtung eines ehemaligen Champions-League-Siegers abgeschlossen.',
            es: 'Un importante club de la K League 1 ha completado el fichaje de un ex ganador de la Champions League.'
        },
        fullText: {
            en: 'In a major coup for Korean football, a leading K League 1 club has announced the signing of a former Champions League winner.\n\nThe experienced midfielder, who has played for some of Europe\'s biggest clubs, has signed a two-year contract worth a reported $5 million per season.\n\nThe signing is expected to raise the profile of the K League and attract more international attention to Korean football.',
            ko: '한국 축구의 대형 영입으로, K리그1 선두 구단이 전 챔피언스리그 우승자 영입을 발표했습니다.\n\n유럽 최고의 클럽들에서 뛰었던 경험 많은 미드필더는 시즌당 500만 달러로 알려진 2년 계약을 체결했습니다.\n\n이번 영입으로 K리그의 위상이 높아지고 한국 축구에 대한 국제적 관심이 증가할 것으로 예상됩니다.',
            ja: '韓国サッカーにとって大きな成果として、Kリーグ1のトップクラブが元チャンピオンズリーグ優勝者との契約を発表しました。\n\nヨーロッパの最高峰クラブでプレーしてきた経験豊富なMFは、シーズン当たり500万ドルと報じられる2年契約を結びました。\n\nこの獲得によりKリーグの知名度が上がり、韓国サッカーへの国際的な注目が高まることが期待されています。',
            zh: '对韩国足球来说是一次重大突破，K联赛1领先俱乐部宣布签下一位前欧冠冠军球员。\n\n这位曾在欧洲多家顶级俱乐部效力的经验丰富的中场球员签下了一份为期两年的合同，据报道每赛季价值500万美元。\n\n这次签约预计将提升K联赛的知名度，并吸引更多国际关注韩国足球。',
            fr: 'Dans un grand coup pour le football coréen, un club leader de K League 1 a annoncé la signature d\'un ancien vainqueur de la Ligue des champions.\n\nLe milieu de terrain expérimenté a signé un contrat de deux ans d\'une valeur de 5 millions de dollars par saison.',
            it: 'In un grande colpo per il calcio coreano, un club leader della K League 1 ha annunciato la firma di un ex vincitore della Champions League.\n\nL\'esperto centrocampista ha firmato un contratto biennale del valore di 5 milioni di dollari a stagione.',
            de: 'In einem großen Coup für den koreanischen Fußball hat ein führender K-League-1-Klub die Verpflichtung eines ehemaligen Champions-League-Siegers bekannt gegeben.\n\nDer erfahrene Mittelfeldspieler hat einen Zweijahresvertrag im Wert von 5 Millionen Dollar pro Saison unterschrieben.',
            es: 'En un gran golpe para el fútbol coreano, un club líder de la K League 1 ha anunciado el fichaje de un ex ganador de la Champions League.\n\nEl experimentado centrocampista ha firmado un contrato de dos años por un valor de 5 millones de dólares por temporada.'
        },
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
        title: {
            en: 'Saudi Pro League Club Prepares Record-Breaking Bid',
            ko: '사우디 프로리그 구단, 역대급 입찰 준비',
            ja: 'サウジプロリーグクラブ、記録破りの入札を準備',
            zh: '沙特职业联赛俱乐部准备破纪录的报价',
            fr: 'Un club de Saudi Pro League prépare une offre record',
            it: 'Un club della Saudi Pro League prepara un\'offerta record',
            de: 'Saudi-Pro-League-Klub bereitet Rekordangebot vor',
            es: 'Un club de la Saudi Pro League prepara una oferta récord'
        },
        summary: {
            en: 'A Saudi Pro League club is preparing to break the world transfer record.',
            ko: '사우디 프로리그 구단이 세계 이적료 기록을 깰 준비를 하고 있습니다.',
            ja: 'サウジプロリーグのクラブが世界移籍記録を破る準備をしています。',
            zh: '沙特职业联赛俱乐部正准备打破世界转会记录。',
            fr: 'Un club de Saudi Pro League se prépare à battre le record mondial des transferts.',
            it: 'Un club della Saudi Pro League si prepara a battere il record mondiale di trasferimenti.',
            de: 'Ein Saudi-Pro-League-Klub bereitet sich darauf vor, den Weltrekord für Transfers zu brechen.',
            es: 'Un club de la Saudi Pro League se prepara para romper el récord mundial de fichajes.'
        },
        fullText: {
            en: 'One of Saudi Arabia\'s top clubs is reportedly preparing an unprecedented bid that could shatter the world transfer record.\n\nThe club is willing to offer over €300 million for a current Ballon d\'Or winner, along with a salary package that would make the player the highest-paid athlete in history.\n\nThe player\'s current club have indicated they would be reluctant to sell, but the sheer size of the offer could force them to reconsider.',
            ko: '사우디아라비아 최고 구단 중 하나가 세계 이적료 기록을 깰 수 있는 전례 없는 입찰을 준비하고 있다고 합니다.\n\n이 구단은 현 발롱도르 수상자에게 3억 유로 이상과 역사상 가장 높은 연봉을 제안할 용의가 있습니다.\n\n선수의 현 소속팀은 매각을 꺼리지만, 이 엄청난 제안에 재고할 수밖에 없을 것입니다.',
            ja: 'サウジアラビアのトップクラブの一つが、世界移籍記録を破る可能性のある前例のない入札を準備していると報じられています。\n\nクラブは現バロンドール受賞者に3億ユーロ以上と、史上最高額のサラリーパッケージを提示する用意があります。\n\n選手の現所属クラブは売却に消極的な姿勢を示していますが、このオファーの規模を考えると再考を余儀なくされる可能性があります。',
            zh: '据报道，沙特阿拉伯顶级俱乐部之一正准备发起前所未有的报价，可能打破世界转会记录。\n\n该俱乐部愿意为现任金球奖得主提供超过3亿欧元的报价，以及将使该球员成为历史上收入最高运动员的薪资方案。\n\n球员目前的俱乐部表示不愿出售，但如此巨大的报价可能会迫使他们重新考虑。',
            fr: 'L\'un des meilleurs clubs d\'Arabie saoudite préparerait une offre sans précédent qui pourrait pulvériser le record mondial des transferts.\n\nLe club est prêt à offrir plus de 300 millions d\'euros pour un actuel Ballon d\'Or.',
            it: 'Uno dei migliori club dell\'Arabia Saudita starebbe preparando un\'offerta senza precedenti che potrebbe infrangere il record mondiale di trasferimenti.\n\nIl club è disposto a offrire oltre 300 milioni di euro per un attuale vincitore del Pallone d\'Oro.',
            de: 'Einer der Top-Klubs Saudi-Arabiens bereitet Berichten zufolge ein beispielloses Angebot vor, das den Welttransferrekord brechen könnte.\n\nDer Klub ist bereit, über 300 Millionen Euro für einen aktuellen Ballon-d\'Or-Gewinner zu bieten.',
            es: 'Según los informes, uno de los principales clubes de Arabia Saudita está preparando una oferta sin precedentes que podría romper el récord mundial de fichajes.\n\nEl club está dispuesto a ofrecer más de 300 millones de euros por un actual ganador del Balón de Oro.'
        },
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
        title: {
            en: 'Barcelona Captain Returns to Training After Long Absence',
            ko: '바르셀로나 주장, 장기 부상 후 훈련 복귀',
            ja: 'バルセロナのキャプテン、長期離脱後にトレーニング復帰',
            zh: '巴塞罗那队长长期缺阵后重返训练',
            fr: 'Le capitaine de Barcelone reprend l\'entraînement après une longue absence',
            it: 'Il capitano del Barcellona torna ad allenarsi dopo una lunga assenza',
            de: 'Barcelonas Kapitän kehrt nach langer Abwesenheit ins Training zurück',
            es: 'El capitán del Barcelona regresa a los entrenamientos tras una larga ausencia'
        },
        summary: {
            en: 'Barcelona\'s captain has returned to first-team training after a four-month injury layoff.',
            ko: '바르셀로나 주장이 4개월간의 부상 후 1군 훈련에 복귀했습니다.',
            ja: 'バルセロナのキャプテンが4ヶ月の離脱を経てファーストチームのトレーニングに復帰しました。',
            zh: '巴塞罗那队长在四个月的伤病后重返一线队训练。',
            fr: 'Le capitaine de Barcelone a repris l\'entraînement avec l\'équipe première après quatre mois d\'absence.',
            it: 'Il capitano del Barcellona è tornato ad allenarsi con la prima squadra dopo quattro mesi di assenza.',
            de: 'Barcelonas Kapitän ist nach viermonatiger Verletzungspause ins Mannschaftstraining zurückgekehrt.',
            es: 'El capitán del Barcelona ha vuelto a entrenar con el primer equipo tras cuatro meses de baja por lesión.'
        },
        fullText: {
            en: 'Barcelona have received a major boost with the return of their captain to first-team training after four months on the sidelines.\n\nThe experienced defender suffered a hamstring injury in September and has been working on his recovery ever since. Medical staff have confirmed he is now fully fit and available for selection.\n\nThe captain\'s return comes at a crucial time as Barcelona prepare for a demanding run of fixtures in both domestic and European competition.',
            ko: '바르셀로나가 주장의 4개월 만의 1군 훈련 복귀로 큰 힘을 얻었습니다.\n\n경험 많은 수비수는 9월에 햄스트링 부상을 당했고 그 이후로 회복에 전념해왔습니다. 의료진은 그가 이제 완전히 건강하며 선발 가능하다고 확인했습니다.\n\n주장의 복귀는 바르셀로나가 국내외 대회에서 힘든 일정을 앞두고 있는 중요한 시점에 이루어졌습니다.',
            ja: 'バルセロナは、キャプテンが4ヶ月の離脱を経てファーストチームのトレーニングに復帰したことで大きな後押しを受けました。\n\n経験豊富なDFは9月にハムストリングを負傷し、それ以来回復に取り組んでいました。メディカルスタッフは、彼が完全に回復し、選出可能な状態であることを確認しました。\n\nキャプテンの復帰は、バルセロナが国内およびヨーロッパの大会で厳しい日程に備えている重要な時期に実現しました。',
            zh: '巴塞罗那迎来了重大利好消息，队长在缺阵四个月后重返一线队训练。\n\n这位经验丰富的后卫在9月份遭受了腿筋受伤，此后一直在进行康复训练。医疗人员确认他现在已经完全康复，可以参加比赛。\n\n队长的回归正值关键时刻，巴塞罗那正在准备应对国内和欧洲赛事的密集赛程。',
            fr: 'Barcelone a reçu un coup de pouce majeur avec le retour de son capitaine à l\'entraînement après quatre mois d\'absence.\n\nLe défenseur expérimenté s\'est blessé aux ischio-jambiers en septembre.',
            it: 'Il Barcellona ha ricevuto una grande spinta con il ritorno del capitano agli allenamenti dopo quattro mesi di assenza.\n\nL\'esperto difensore si è infortunato ai muscoli posteriori della coscia a settembre.',
            de: 'Barcelona hat einen großen Schub erhalten, da der Kapitän nach vier Monaten Verletzungspause ins Mannschaftstraining zurückgekehrt ist.\n\nDer erfahrene Verteidiger erlitt im September eine Oberschenkelverletzung.',
            es: 'El Barcelona ha recibido un gran impulso con el regreso de su capitán a los entrenamientos tras cuatro meses de baja.\n\nEl experimentado defensor sufrió una lesión en el isquiotibial en septiembre.'
        },
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
        title: {
            en: 'Borussia Dortmund Eye Surprise Loan Move for Chelsea Striker',
            ko: '도르트문트, 첼시 스트라이커 임대 영입 추진',
            ja: 'ドルトムント、チェルシーのストライカーのレンタル移籍を検討',
            zh: '多特蒙德考虑租借切尔西前锋',
            fr: 'Le Borussia Dortmund envisage un prêt surprise pour un attaquant de Chelsea',
            it: 'Il Borussia Dortmund punta a un prestito a sorpresa per un attaccante del Chelsea',
            de: 'Borussia Dortmund erwägt überraschende Leihe eines Chelsea-Stürmers',
            es: 'El Borussia Dortmund contempla una cesión sorpresa de un delantero del Chelsea'
        },
        summary: {
            en: 'Borussia Dortmund are considering a loan move for an out-of-favor Chelsea striker.',
            ko: '도르트문트가 첼시에서 출전 기회를 잃은 스트라이커 임대를 검토하고 있습니다.',
            ja: 'ドルトムントが出場機会を失っているチェルシーのストライカーのレンタル移籍を検討しています。',
            zh: '多特蒙德正在考虑租借一名在切尔西失宠的前锋。',
            fr: 'Le Borussia Dortmund envisage un prêt pour un attaquant de Chelsea en disgrâce.',
            it: 'Il Borussia Dortmund sta considerando un prestito per un attaccante del Chelsea fuori dai piani.',
            de: 'Borussia Dortmund erwägt eine Leihe für einen bei Chelsea in Ungnade gefallenen Stürmer.',
            es: 'El Borussia Dortmund está considerando una cesión por un delantero del Chelsea caído en desgracia.'
        },
        fullText: {
            en: 'Borussia Dortmund are reportedly exploring the possibility of signing a Chelsea striker on loan until the end of the season.\n\nThe German club have been monitoring the situation at Stamford Bridge and believe the player could benefit from regular playing time. Initial discussions have taken place between the two clubs.\n\nChelsea are said to be open to the idea, provided the loan includes an option to buy.',
            ko: '도르트문트가 시즌 종료까지 첼시 스트라이커를 임대로 영입하는 방안을 모색하고 있다고 합니다.\n\n독일 클럽은 스탬퍼드 브릿지의 상황을 주시해왔으며, 해당 선수가 정규 출전 시간을 통해 성장할 수 있을 것으로 보고 있습니다. 양 클럽 간 초기 논의가 진행되었습니다.\n\n첼시는 임대에 바이아웃 옵션이 포함된다면 이 아이디어에 열려 있다고 합니다.',
            ja: 'ドルトムントがシーズン終了までチェルシーのストライカーをレンタルで獲得する可能性を探っていると報じられています。\n\nドイツのクラブはスタンフォード・ブリッジの状況を注視しており、選手が定期的な出場機会を得ることで成長できると考えています。両クラブ間で初期の話し合いが行われました。\n\nチェルシーは買取オプション付きのレンタルであればこのアイデアに前向きだと言われています。',
            zh: '据报道，多特蒙德正在探索租借切尔西前锋至赛季结束的可能性。\n\n这家德国俱乐部一直在关注斯坦福桥的情况，认为该球员可以从稳定的出场时间中受益。两家俱乐部之间已进行了初步讨论。\n\n据说切尔西对此持开放态度，前提是租借协议包含买断选项。',
            fr: 'Le Borussia Dortmund explorerait la possibilité de signer un attaquant de Chelsea en prêt jusqu\'à la fin de la saison.\n\nLe club allemand surveille la situation à Stamford Bridge.',
            it: 'Il Borussia Dortmund starebbe esplorando la possibilità di ingaggiare un attaccante del Chelsea in prestito fino alla fine della stagione.\n\nIl club tedesco ha monitorato la situazione a Stamford Bridge.',
            de: 'Borussia Dortmund prüft Berichten zufolge die Möglichkeit, einen Chelsea-Stürmer bis zum Saisonende auszuleihen.\n\nDer deutsche Klub hat die Situation an der Stamford Bridge beobachtet und glaubt, dass der Spieler von regelmäßiger Spielzeit profitieren könnte.',
            es: 'Según los informes, el Borussia Dortmund está explorando la posibilidad de fichar a un delantero del Chelsea en préstamo hasta el final de la temporada.\n\nEl club alemán ha estado monitoreando la situación en Stamford Bridge.'
        },
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
// HELPER FUNCTION FOR TRANSLATED CONTENT
// ============================================
function getLocalizedText(textObj) {
    if (typeof textObj === 'string') return textObj;
    return textObj[currentLanguage] || textObj['en'] || '';
}

// ============================================
// UI RENDERING FUNCTIONS
// ============================================
function renderLeaguesList() {
    const container = document.getElementById('leaguesList');
    // Show main leagues and any additional leagues that have been added
    const visibleLeagues = allLeagues.filter(l => 
        mainLeagues.some(ml => ml.id === l.id) || 
        additionalLeagues.some(al => al.id === l.id && al.active)
    );
    
    container.innerHTML = visibleLeagues.map(league => `
        <div class="league-item ${league.active ? 'active' : ''}" data-league-id="${league.id}">
            <input type="radio" name="league-select" ${league.active ? 'checked' : ''} />
            <span class="league-flag">${league.flag}</span>
            <span class="league-name">${league.name}</span>
        </div>
    `).join('');

    // Add event listeners - single select behavior
    container.querySelectorAll('.league-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const leagueId = item.dataset.leagueId;
            selectSingleLeague(leagueId);
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
    const activeLeague = allLeagues.find(l => l.active);
    
    if (activeLeague) {
        container.innerHTML = `
            <div class="league-badge">
                <span>${activeLeague.flag}</span>
                <span>${activeLeague.name}</span>
            </div>
        `;
    } else {
        container.innerHTML = '';
    }
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
        const newsTitle = getLocalizedText(news.title);
        
        return `
            <div class="news-card ${hotClass}" data-news-id="${news.id}">
                ${showHotBadge ? `<div class="hot-badge">🔥 ${t('hotNews')}</div>` : ''}
                <div class="news-image" style="background-image: url('${news.image}'); background-size: cover; background-position: center;"></div>
                <div class="news-content">
                    <span class="news-category">${t(news.category)}</span>
                    <h3 class="news-title">${newsTitle}</h3>
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
    
    // Get translated content
    const newsTitle = getLocalizedText(news.title);
    const newsFullText = getLocalizedText(news.fullText);
    
    document.getElementById('newsDetailImage').style.backgroundImage = `url('${news.image}')`;
    document.getElementById('newsDetailImage').style.backgroundSize = 'cover';
    document.getElementById('newsDetailImage').style.backgroundPosition = 'center';
    document.getElementById('newsDetailCategory').textContent = t(news.category);
    document.getElementById('newsDetailTitle').textContent = newsTitle;
    document.getElementById('newsDetailDate').textContent = `📅 ${formatDate(news.date)}`;
    document.getElementById('newsDetailViews').textContent = `👁 ${formatNumber(news.views)} ${t('views')}`;
    document.getElementById('newsDetailLeague').textContent = league ? `${league.flag} ${league.name}` : '';
    document.getElementById('newsDetailText').textContent = newsFullText;
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
function selectSingleLeague(leagueId) {
    // Deselect all leagues first
    allLeagues.forEach(l => l.active = false);
    
    // Select only the clicked league
    const league = allLeagues.find(l => l.id === leagueId);
    if (league) {
        league.active = true;
        renderLeaguesList();
        renderSelectedLeaguesInfo();
        renderNews();
    }
}

function addLeague(leagueId) {
    // Deselect all leagues first
    allLeagues.forEach(l => l.active = false);
    
    const league = allLeagues.find(l => l.id === leagueId);
    if (league) {
        league.active = true;
        // Also mark it as added to additional leagues
        const additionalLeague = additionalLeagues.find(l => l.id === leagueId);
        if (additionalLeague) {
            additionalLeague.active = true;
        }
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
