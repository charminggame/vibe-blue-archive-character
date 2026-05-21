// UI Interaction and Theme Controller

document.addEventListener("DOMContentLoaded", () => {
  // Theme Manager
  initTheme();

  // Tab Manager inside Student Detail Modal
  initModalTabs();
});

// Theme Management
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggle");
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(themeToggleBtn, currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(themeToggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  // Switch icons using HTML contents
  if (theme === "dark") {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    btn.setAttribute("title", "เปลี่ยนเป็นโหมดสว่าง");
  } else {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    btn.setAttribute("title", "เปลี่ยนเป็นโหมดมืด");
  }
}

// Modal tab switcher logic
function initModalTabs() {
  const tabs = document.querySelectorAll(".modal-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs and contents
      const parent = tab.closest(".modal-profile-side");
      if (!parent) return;

      parent.querySelectorAll(".modal-tab-btn").forEach(btn => btn.classList.remove("active"));
      parent.querySelectorAll(".modal-tab-content").forEach(content => content.classList.remove("active"));

      // Activate clicked tab
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      const targetContent = parent.querySelector(`#tab-${targetId}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

// Modal open/close utilities
function openStudentModal(student, schoolObj) {
  const overlay = document.getElementById("studentModal");
  if (!overlay) return;

  // Set student details
  document.getElementById("modalName").textContent = student.Name;
  document.getElementById("modalRoman").textContent = student.FamilyName ? `${student.FamilyName} ${student.PersonalName}` : student.Name;
  
  // Set school info
  const schoolBadge = document.getElementById("modalSchoolBadge");
  if (schoolObj) {
    schoolBadge.innerHTML = `<img src="${schoolObj.logo}" alt="${schoolObj.nameEn}"> <span>${schoolObj.nameTh}</span>`;
    // Add custom style color to school badge border/color
    schoolBadge.style.borderColor = schoolObj.color;
  } else {
    schoolBadge.innerHTML = `<span>${student.School}</span>`;
    schoolBadge.style.borderColor = "var(--border-color)";
  }

  // Set image
  const portraitImg = document.getElementById("modalPortrait");
  portraitImg.src = `https://schaledb.com/images/student/portrait/${student.Id}.webp`;
  portraitImg.alt = student.Name;
  
  // Reset image in case it fails (use collection as fallback)
  portraitImg.onerror = () => {
    portraitImg.src = `https://schaledb.com/images/student/collection/${student.Id}.webp`;
  };

  // Profile data
  document.getElementById("detailAge").textContent = student.CharacterAge || "ไม่ระบุ (Unknown)";
  document.getElementById("detailBirthday").textContent = translateBirthday(student.Birthday || student.BirthDay) || "ไม่ระบุ";
  document.getElementById("detailHeight").textContent = student.CharHeightMetric || "ไม่ระบุ";
  
  // Club
  const clubName = student.Club ? (translations.club[student.Club] || student.Club) : "ไม่มีชมรม (No Club)";
  document.getElementById("detailClub").textContent = clubName;
  
  document.getElementById("detailVoice").textContent = student.CharacterVoice || "ไม่ระบุ";
  document.getElementById("detailIllustrator").textContent = student.Illustrator || "ไม่ระบุ";
  document.getElementById("detailHobby").textContent = student.Hobby || "ไม่ระบุ";

  // Bio
  document.getElementById("detailIntro").textContent = student.ProfileIntroduction || "ไม่มีข้อมูลประวัติผู้ใช้";

  // Combat Info
  const combatRole = translations.role[student.TacticRole] || student.TacticRole || "ไม่ระบุ";
  const combatPos = translations.position[student.Position] || student.Position || "ไม่ระบุ";
  
  document.getElementById("detailRole").textContent = combatRole;
  document.getElementById("detailPosition").textContent = combatPos;

  // Set combat damage and armor pills
  const dmgVal = translateCombatType(student.BulletType, translations.damage);
  const armorVal = translateCombatType(student.ArmorType, translations.armor);
  
  const dmgPill = document.getElementById("detailDmgType");
  const armorPill = document.getElementById("detailArmorType");
  
  dmgPill.className = `combat-pill-item type-badge ${student.BulletType}`;
  dmgPill.innerHTML = `<div class="detail-label">ประเภทโจมตี (ATK)</div><div style="font-weight:700;">${dmgVal}</div>`;
  
  armorPill.className = `combat-pill-item type-badge ${student.ArmorType}`;
  armorPill.innerHTML = `<div class="detail-label">ประเภทป้องกัน (DEF)</div><div style="font-weight:700;">${armorVal}</div>`;

  // Weapon Details
  const weaponBox = document.getElementById("modalWeaponBox");
  if (student.WeaponType) {
    weaponBox.style.display = "flex";
    document.getElementById("weaponTypeCode").textContent = student.WeaponType;
    document.getElementById("weaponName").textContent = `${student.Name}'s Weapon`;
    // We can guess weapon icon (optional)
  } else {
    weaponBox.style.display = "none";
  }

  // Set default active tab to 'profile'
  overlay.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-tab") === "profile") btn.classList.add("active");
  });
  overlay.querySelectorAll(".modal-tab-content").forEach(content => {
    content.classList.remove("active");
    if (content.id === "tab-profile") content.classList.add("active");
  });

  // Open modal
  overlay.classList.add("open");
  document.body.style.overflow = "hidden"; // lock scroll
}

function closeStudentModal() {
  const overlay = document.getElementById("studentModal");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = ""; // restore scroll
}

// Helpers for translations
function translateBirthday(val) {
  if (!val) return "";
  // Map months to Thai
  return val
    .replace("January", "มกราคม")
    .replace("February", "กุมภาพันธ์")
    .replace("March", "มีนาคม")
    .replace("April", "เมษายน")
    .replace("May", "พฤษภาคม")
    .replace("June", "มิถุนายน")
    .replace("July", "กรกฎาคม")
    .replace("August", "สิงหาคม")
    .replace("September", "กันยายน")
    .replace("October", "ตุลาคม")
    .replace("November", "พฤศจิกายน")
    .replace("December", "ธันวาคม");
}

function translateCombatType(val, dict) {
  if (!val) return "ไม่ระบุ";
  return dict[val] || val;
}
