// Main Application Engine

let students = [];
let activeSchoolFilter = "All";
let activeRoleFilter = "All";
let activeDmgFilter = "All";
let activeRarityFilter = "All";
let searchQuery = "";
let currentSort = "default";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Render School Cards
  renderSchools();

  // 2. Fetch Student Data
  loadStudentData();

  // 3. Set up event listeners for filters & search
  setupFilterListeners();
});

// Render the School selector grids
function renderSchools() {
  const grid = document.getElementById("schoolsGrid");
  if (!grid) return;

  grid.innerHTML = schoolsData.map(school => `
    <div class="school-card" data-school="${school.id}" id="school-card-${school.id}">
      <div class="school-logo-container">
        <img src="${school.logo}" alt="${school.nameEn}" class="school-logo" onerror="this.src='https://placehold.co/60x60/1e293b/00a3ff?text=${school.id}'">
      </div>
      <div class="school-name-en">${school.nameEn}</div>
      <div class="school-name-th">${school.nameTh}</div>
      <div class="school-desc">${school.description}</div>
    </div>
  `).join("");

  // Attach click listener to each card
  schoolsData.forEach(school => {
    const card = document.getElementById(`school-card-${school.id}`);
    card.addEventListener("click", () => {
      toggleSchoolFilter(school.id);
    });
  });
}

// Manage School Filter Toggle
function toggleSchoolFilter(schoolId) {
  const cards = document.querySelectorAll(".school-card");
  const isCurrentlyActive = activeSchoolFilter === schoolId;

  cards.forEach(c => c.classList.remove("active"));

  if (isCurrentlyActive) {
    activeSchoolFilter = "All";
    document.getElementById("filteredSchoolTitle").textContent = "นักเรียนทั้งหมด (All Students)";
  } else {
    activeSchoolFilter = schoolId;
    const selectedCard = document.getElementById(`school-card-${schoolId}`);
    if (selectedCard) selectedCard.classList.add("active");
    
    const schoolObj = schoolsData.find(s => s.id === schoolId);
    document.getElementById("filteredSchoolTitle").textContent = `นักเรียนของ ${schoolObj.nameTh} (${schoolObj.nameEn})`;
  }

  applyFiltersAndSort();
}

// Fetch and load student JSON data
async function loadStudentData() {
  const grid = document.getElementById("studentsGrid");
  showLoadingSkeleton(grid);

  try {
    const response = await fetch("https://cdn.jsdelivr.net/gh/lonqie/SchaleDB@main/data/en/students.json");
    if (!response.ok) throw new Error("Network response not ok");
    
    const rawData = await response.json();
    
    // Filter out students that aren't fully released/valid yet
    students = rawData.filter(s => s.IsReleased && s.IsReleased[0]);
    console.log(`Fetched ${students.length} students from SchaleDB CDN.`);
  } catch (error) {
    console.warn("Could not fetch from SchaleDB. Loading fallback local dataset.", error);
    // Load local mock data if fetch fails
    students = fallbackStudents;
  }

  // Update Hero section counters
  updateHeroCounters();

  // Render the final list
  applyFiltersAndSort();
}

// Renders visual skeleton indicators during data fetches
function showLoadingSkeleton(container) {
  if (!container) return;
  container.innerHTML = Array(8).fill(0).map(() => `
    <div class="student-card" style="pointer-events: none;">
      <div class="student-img-wrapper skeleton" style="aspect-ratio: 1/1;"></div>
      <div class="student-info" style="gap: 8px; padding: 16px;">
        <div class="skeleton" style="height: 20px; width: 70%;"></div>
        <div class="skeleton" style="height: 14px; width: 45%;"></div>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <div class="skeleton" style="height: 18px; flex-grow: 1;"></div>
          <div class="skeleton" style="height: 18px; flex-grow: 1;"></div>
        </div>
      </div>
    </div>
  `).join("");
}

// Compute dynamic numbers to place in Hero Section
function updateHeroCounters() {
  document.getElementById("statSchools").textContent = schoolsData.length;
  document.getElementById("statStudents").textContent = students.length;
  
  // Find distinct clubs
  const distinctClubs = [...new Set(students.map(s => s.Club).filter(Boolean))];
  document.getElementById("statClubs").textContent = distinctClubs.length;
}

// Bind filter inputs, selectors, and clear buttons
function setupFilterListeners() {
  // Search Text Input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    applyFiltersAndSort();
  });

  // Sort Selector
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    applyFiltersAndSort();
  });

  // Role filters (Main/Striker, Sub/Special, All)
  const roleButtons = document.querySelectorAll("[data-role]");
  roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      roleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeRoleFilter = btn.getAttribute("data-role");
      applyFiltersAndSort();
    });
  });

  // Attack/Damage types (Explosion, Pierce, Mystic, Sonic, All)
  const dmgButtons = document.querySelectorAll("[data-damage]");
  dmgButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dmgButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDmgFilter = btn.getAttribute("data-damage");
      applyFiltersAndSort();
    });
  });

  // Rarity star filters (1*, 2*, 3*, All)
  const rarityButtons = document.querySelectorAll("[data-rarity]");
  rarityButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      rarityButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeRarityFilter = btn.getAttribute("data-rarity");
      applyFiltersAndSort();
    });
  });

  // Clear Filters
  const clearBtn = document.getElementById("clearFilters");
  clearBtn.addEventListener("click", () => {
    // Reset vars
    activeSchoolFilter = "All";
    activeRoleFilter = "All";
    activeDmgFilter = "All";
    activeRarityFilter = "All";
    searchQuery = "";
    currentSort = "default";

    // Reset UI active classes
    document.querySelectorAll(".school-card").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('[data-role="All"]').classList.add("active");
    document.querySelector('[data-damage="All"]').classList.add("active");
    document.querySelector('[data-rarity="All"]').classList.add("active");
    
    searchInput.value = "";
    sortSelect.value = "default";
    document.getElementById("filteredSchoolTitle").textContent = "นักเรียนทั้งหมด (All Students)";

    applyFiltersAndSort();
  });

  // Modal Close Events
  document.getElementById("modalClose").addEventListener("click", closeStudentModal);
  
  // Close modal when clicking backdrop
  document.getElementById("studentModal").addEventListener("click", (e) => {
    if (e.target.id === "studentModal") closeStudentModal();
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeStudentModal();
  });
}

// Compute filtering and sorting conditions
function applyFiltersAndSort() {
  let filtered = [...students];

  // 1. Filter by School
  if (activeSchoolFilter !== "All") {
    filtered = filtered.filter(s => s.School.toLowerCase() === activeSchoolFilter.toLowerCase());
  }

  // 2. Filter by Role (Striker -> Main, Special -> Support/Special)
  if (activeRoleFilter !== "All") {
    filtered = filtered.filter(s => s.SquadType === activeRoleFilter);
  }

  // 3. Filter by Attack/Damage Type
  if (activeDmgFilter !== "All") {
    filtered = filtered.filter(s => s.BulletType === activeDmgFilter);
  }

  // 4. Filter by Rarity
  if (activeRarityFilter !== "All") {
    filtered = filtered.filter(s => s.StarGrade === parseInt(activeRarityFilter, 10));
  }

  // 5. Search text (matches: Name, Club, Personal Name, Family Name, Seiyuu voice)
  if (searchQuery !== "") {
    filtered = filtered.filter(s => {
      const name = s.Name ? s.Name.toLowerCase() : "";
      const family = s.FamilyName ? s.FamilyName.toLowerCase() : "";
      const personal = s.PersonalName ? s.PersonalName.toLowerCase() : "";
      const voice = s.CharacterVoice ? s.CharacterVoice.toLowerCase() : "";
      const club = s.Club ? s.Club.toLowerCase() : "";
      const clubTh = s.Club && translations.club[s.Club] ? translations.club[s.Club].toLowerCase() : "";

      return name.includes(searchQuery) ||
             family.includes(searchQuery) ||
             personal.includes(searchQuery) ||
             voice.includes(searchQuery) ||
             club.includes(searchQuery) ||
             clubTh.includes(searchQuery);
    });
  }

  // 6. Apply Sorting
  sortFilteredData(filtered);

  // 7. Render final grid
  renderStudentGrid(filtered);
}

// Sort logic
function sortFilteredData(dataList) {
  switch (currentSort) {
    case "name_asc":
      dataList.sort((a, b) => a.Name.localeCompare(b.Name));
      break;
    case "name_desc":
      dataList.sort((a, b) => b.Name.localeCompare(a.Name));
      break;
    case "rarity_desc":
      dataList.sort((a, b) => b.StarGrade - a.StarGrade || a.Name.localeCompare(b.Name));
      break;
    case "rarity_asc":
      dataList.sort((a, b) => a.StarGrade - b.StarGrade || a.Name.localeCompare(b.Name));
      break;
    case "height_desc":
      dataList.sort((a, b) => {
        const hA = parseInt(a.CharHeightMetric) || 0;
        const hB = parseInt(b.CharHeightMetric) || 0;
        return hB - hA || a.Name.localeCompare(b.Name);
      });
      break;
    case "height_asc":
      dataList.sort((a, b) => {
        const hA = parseInt(a.CharHeightMetric) || 0;
        const hB = parseInt(b.CharHeightMetric) || 0;
        return hA - hB || a.Name.localeCompare(b.Name);
      });
      break;
    default:
      // Default: By game order / ID
      dataList.sort((a, b) => (a.DefaultOrder || a.Id) - (b.DefaultOrder || b.Id));
  }
}

// Render student card items into grid
function renderStudentGrid(studentList) {
  const grid = document.getElementById("studentsGrid");
  const countBadge = document.getElementById("studentCountBadge");
  if (!grid) return;

  // Update total counts display
  countBadge.textContent = `${studentList.length} คน`;

  if (studentList.length === 0) {
    grid.innerHTML = `
      <div class="no-results animate-fade-in">
        <div class="no-results-icon">📂</div>
        <div class="no-results-text">ไม่พบข้อมูลนักเรียนตามเงื่อนไขที่ระบุ</div>
        <div style="font-size: 13px; margin-top: 8px;">ลองค้นหาด้วยคำอื่นหรือกดล้างตัวกรอง</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = studentList.map(student => {
    // Generate stars HTML
    const starsHTML = Array(student.StarGrade).fill('<span class="rarity-star">★</span>').join("");
    
    // Custom label text
    const roleLabel = student.SquadType === "Main" ? "STRIKER" : "SPECIAL";
    const bulletTypeTrans = translations.damage[student.BulletType] || student.BulletType;
    const armorTypeTrans = translations.armor[student.ArmorType] || student.ArmorType;

    // Small school name
    const schoolObj = schoolsData.find(s => s.id.toLowerCase() === student.School.toLowerCase());
    const schoolName = schoolObj ? schoolObj.nameTh : student.School;

    return `
      <div class="student-card animate-slide-up" data-id="${student.Id}" id="student-card-${student.Id}">
        <div class="student-img-wrapper">
          <div class="student-rarity">${starsHTML}</div>
          <div class="student-role-tag">${roleLabel}</div>
          <img class="student-img" src="https://schaledb.com/images/student/collection/${student.Id}.webp" alt="${student.Name}" loading="lazy" onerror="this.src='https://placehold.co/150x150/1e293b/00a3ff?text=${student.Name}'">
        </div>
        <div class="student-info">
          <div class="student-name">${student.Name}</div>
          <div class="student-school-club">
            <span title="${schoolName}">${schoolName}</span>
            ${student.Club ? `<span class="bullet-separator">•</span><span title="${translations.club[student.Club] || student.Club}">${translations.club[student.Club] || student.Club}</span>` : ""}
          </div>
          <div class="student-combat-types">
            <div class="type-badge ${student.BulletType}" title="ประเภทการโจมตี: ${bulletTypeTrans}">${bulletTypeTrans.split(" ")[0]}</div>
            <div class="type-badge ${student.ArmorType}" title="ประเภทเกราะป้องกัน: ${armorTypeTrans}">${armorTypeTrans.split(" ")[0]}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach click listener for detail modal trigger
  studentList.forEach(student => {
    const card = document.getElementById(`student-card-${student.Id}`);
    if (card) {
      card.addEventListener("click", () => {
        const schoolObj = schoolsData.find(s => s.id.toLowerCase() === student.School.toLowerCase());
        openStudentModal(student, schoolObj);
      });
    }
  });
}
