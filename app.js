const newsDateInput = document.getElementById("news-date");
const newsDateLabel = document.getElementById("news-date-label");
const newsGrid = document.getElementById("newsGrid");
const moreNewsList = document.getElementById("moreNewsList");

const menuButton = document.getElementById("menuButton");
const leaguePanel = document.getElementById("leaguePanel");
const panelBackdrop = document.getElementById("panelBackdrop");
const closePanel = document.getElementById("closePanel");
const leagueList = document.getElementById("leagueList");
const addLeagueButton = document.getElementById("addLeagueButton");
const addLeagueMenu = document.getElementById("addLeagueMenu");

const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");

const moreButton = document.getElementById("moreButton");
const moreMenu = document.getElementById("moreMenu");

const newsModal = document.getElementById("newsModal");
const closeModal = document.getElementById("closeModal");
const modalLeague = document.getElementById("modalLeague");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalViews = document.getElementById("modalViews");
const modalCoverage = document.getElementById("modalCoverage");
const modalDetail = document.getElementById("modalDetail");
const modalReferences = document.getElementById("modalReferences");

const leagueState = {
  leagues: [
    { name: "EPL", active: true },
    { name: "La Liga", active: true },
    { name: "Bundesliga", active: true },
    { name: "Ligue 1", active: true },
    { name: "Serie A", active: true },
  ],
  extras: ["K League 1", "Saudi League", "MLS", "Liga MX", "Brasileirao"],
};

const newsItems = [
  {
    id: "epl-1",
    league: "EPL",
    title: "Title race heats up after late derby winner",
    summary:
      "A stoppage time strike reshuffles the top four and intensifies the run in.",
    views: 1280000,
    coverage: 14,
    type: "matchday",
    detail:
      "The dramatic finish sparked immediate reaction across England. Analysts cite the goal as a momentum shift in the title race, while the winning side now face a favorable stretch of fixtures.",
    references: [
      "Global Football Desk",
      "Premier Match Report",
      "Northern Sports Daily",
    ],
  },
  {
    id: "laliga-1",
    league: "La Liga",
    title: "Board dismisses head coach after derby collapse",
    summary:
      "Club leadership moves quickly following a three goal swing in the final 20 minutes.",
    views: 980000,
    coverage: 11,
    type: "dismissal",
    detail:
      "The decision follows a turbulent month of results. Interim staff are expected to oversee training ahead of a crucial European tie, with a permanent appointment targeted before month end.",
    references: ["El Futbol Diario", "Iberia Sports Wire"],
  },
  {
    id: "bundesliga-1",
    league: "Bundesliga",
    title: "Midfield anchor listed as top transfer market target",
    summary:
      "Multiple clubs inquire as release clause window approaches next month.",
    views: 760000,
    coverage: 9,
    type: "transfer",
    detail:
      "Negotiations hinge on a clause that activates soon, with the selling club seeking a replacement in advance. Scouts from three leagues have attended recent matches.",
    references: ["Bundesliga Network", "Transfer Signal"],
  },
  {
    id: "seriea-1",
    league: "Serie A",
    title: "Injury update confirms six week recovery timeline",
    summary:
      "Medical staff rule out a longer absence after precautionary scans.",
    views: 540000,
    coverage: 6,
    type: "injury",
    detail:
      "Rehabilitation begins immediately with a return planned for the first derby of spring. The player will miss two league fixtures and a cup semifinal.",
    references: ["Calcio Focus", "Roma Sport News"],
  },
  {
    id: "ligue1-1",
    league: "Ligue 1",
    title: "Youth striker surge draws national team attention",
    summary:
      "Back to back braces push the forward into the Golden Boot race.",
    views: 460000,
    coverage: 5,
    type: "breakout",
    detail:
      "Coaches praise composure and off ball movement. International scouts plan to monitor the next three matches for readiness at senior level.",
    references: ["France Football Weekly", "Stade Report"],
  },
  {
    id: "epl-2",
    league: "EPL",
    title: "Club finalizes goalkeeper extension through 2029",
    summary:
      "Contract includes performance incentives and leadership responsibilities.",
    views: 410000,
    coverage: 4,
    type: "contract",
    detail:
      "The agreement secures the player for the long term after a run of clean sheets. The club expects the keeper to mentor academy prospects.",
    references: ["City Sports Brief", "Goalkeeper Journal"],
  },
];

const sizeClasses = ["news-card--xl", "news-card--lg", "news-card--md"];

const formatViews = (count) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  }
  if (count >= 1000) {
    return `${Math.round(count / 1000)}K views`;
  }
  return `${count} views`;
};

const formatDateLabel = (date) =>
  date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const updateDateLabel = () => {
  const chosenDate = newsDateInput.value
    ? new Date(`${newsDateInput.value}T00:00:00`)
    : new Date();
  newsDateLabel.textContent = `News for ${formatDateLabel(chosenDate)}`;
};

const computeScore = (item) => item.views + item.coverage * 75000;

const getActiveLeagues = () =>
  leagueState.leagues.filter((league) => league.active).map((league) => league.name);

const renderNewsGrid = () => {
  const activeLeagues = getActiveLeagues();
  const visibleItems = activeLeagues.length
    ? newsItems.filter((item) => activeLeagues.includes(item.league))
    : newsItems;

  const ranked = [...visibleItems].sort(
    (a, b) => computeScore(b) - computeScore(a)
  );

  newsGrid.innerHTML = "";

  if (!ranked.length) {
    const emptyCard = document.createElement("div");
    emptyCard.className = "news-card news-card--xl";
    emptyCard.innerHTML =
      "<strong>No news selected</strong><p class='news-summary'>Enable a league in the menu to see its stories.</p>";
    newsGrid.appendChild(emptyCard);
    return;
  }

  ranked.forEach((item, index) => {
    const card = document.createElement("article");
    const sizeClass = sizeClasses[index] || "news-card--sm";
    card.className = `news-card ${sizeClass}`;
    card.innerHTML = `
      <span class="news-league">${item.league}</span>
      <span class="news-badge">${index === 0 ? "Hot" : index === 1 ? "Rising" : "Spotlight"}</span>
      <h3 class="news-title">${item.title}</h3>
      <p class="news-summary">${item.summary}</p>
      <div class="news-meta">
        <span>${formatViews(item.views)}</span>
        <span>${item.coverage} sources</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(item));
    newsGrid.appendChild(card);
  });

  renderMoreNewsList(ranked);
};

const renderMoreNewsList = (ranked) => {
  moreNewsList.innerHTML = "";
  ranked.slice(3, 7).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.league}: ${item.title}`;
    moreNewsList.appendChild(listItem);
  });

  if (!moreNewsList.children.length) {
    const listItem = document.createElement("li");
    listItem.textContent = "No extra headlines for this filter.";
    moreNewsList.appendChild(listItem);
  }
};

const renderLeagueList = () => {
  leagueList.innerHTML = "";
  leagueState.leagues.forEach((league) => {
    const button = document.createElement("button");
    button.className = `league-item${league.active ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = league.name;
    button.addEventListener("click", () => {
      league.active = !league.active;
      renderLeagueList();
      renderNewsGrid();
    });
    leagueList.appendChild(button);
  });
};

const renderAddLeagueMenu = () => {
  addLeagueMenu.innerHTML = "";

  if (!leagueState.extras.length) {
    const empty = document.createElement("span");
    empty.textContent = "No more leagues to add.";
    empty.style.padding = "8px 10px";
    empty.style.color = "rgba(245, 247, 251, 0.7)";
    addLeagueMenu.appendChild(empty);
    return;
  }

  leagueState.extras.forEach((league) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = league;
    button.addEventListener("click", () => {
      leagueState.leagues.push({ name: league, active: true });
      leagueState.extras = leagueState.extras.filter((item) => item !== league);
      renderLeagueList();
      renderAddLeagueMenu();
      renderNewsGrid();
      addLeagueMenu.classList.remove("is-open");
    });
    addLeagueMenu.appendChild(button);
  });
};

const openPanel = () => {
  leaguePanel.classList.add("is-open");
  panelBackdrop.classList.add("is-visible");
  menuButton.setAttribute("aria-expanded", "true");
  leaguePanel.setAttribute("aria-hidden", "false");
};

const closeLeaguePanel = () => {
  leaguePanel.classList.remove("is-open");
  panelBackdrop.classList.remove("is-visible");
  menuButton.setAttribute("aria-expanded", "false");
  leaguePanel.setAttribute("aria-hidden", "true");
  addLeagueMenu.classList.remove("is-open");
};

const openModal = (item) => {
  modalLeague.textContent = item.league;
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalViews.textContent = formatViews(item.views);
  modalCoverage.textContent = `${item.coverage} sources`;
  modalDetail.textContent = item.detail;
  modalReferences.textContent = item.references.slice(0, 2).join(" | ");
  newsModal.classList.add("is-open");
  newsModal.setAttribute("aria-hidden", "false");
};

const closeNewsModal = () => {
  newsModal.classList.remove("is-open");
  newsModal.setAttribute("aria-hidden", "true");
};

const toggleDropdown = (dropdown, open) => {
  const shouldOpen = open ?? !dropdown.classList.contains("is-open");
  dropdown.classList.toggle("is-open", shouldOpen);
};

menuButton.addEventListener("click", openPanel);
closePanel.addEventListener("click", closeLeaguePanel);
panelBackdrop.addEventListener("click", closeLeaguePanel);

addLeagueButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown(addLeagueMenu);
});

languageButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown(languageMenu);
});

languageMenu.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const selected = button.dataset.lang || "English";
  languageButton.textContent = `Language: ${selected}`;
  languageMenu.classList.remove("is-open");
});

moreButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown(moreMenu);
  moreButton.setAttribute(
    "aria-expanded",
    moreMenu.classList.contains("is-open") ? "true" : "false"
  );
});

document.addEventListener("click", (event) => {
  if (!languageMenu.contains(event.target) && event.target !== languageButton) {
    languageMenu.classList.remove("is-open");
  }
  if (!moreMenu.contains(event.target) && event.target !== moreButton) {
    moreMenu.classList.remove("is-open");
    moreButton.setAttribute("aria-expanded", "false");
  }
  if (!addLeagueMenu.contains(event.target) && event.target !== addLeagueButton) {
    addLeagueMenu.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLeaguePanel();
    closeNewsModal();
    languageMenu.classList.remove("is-open");
    moreMenu.classList.remove("is-open");
    addLeagueMenu.classList.remove("is-open");
  }
});

newsDateInput.addEventListener("change", updateDateLabel);
closeModal.addEventListener("click", closeNewsModal);
newsModal.addEventListener("click", (event) => {
  if (event.target === newsModal) {
    closeNewsModal();
  }
});

const today = new Date();
newsDateInput.value = today.toISOString().split("T")[0];
updateDateLabel();
renderLeagueList();
renderAddLeagueMenu();
renderNewsGrid();
