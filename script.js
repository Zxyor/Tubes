const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .member-card, .hero-copy").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.position = "sticky";
  header.style.top = "0";
  header.style.zIndex = "10";
  header.style.background = window.scrollY > 20 ? "rgba(244, 241, 234, 0.94)" : "#f4f1ea";
  header.style.backdropFilter = "blur(12px)";
});

const profiles = {
  gilbeth: {
    name: "Gilbeth Arisyaldi",
    role: "Mahasiswa S1 Teknik Informatika · NIM 2343044",
    photo: "assets/images/gilbeth.jpeg",
    email: "arisyaldigilbeth@gmail.com",
    about: "Mahasiswa S1 Teknik Informatika yang memiliki semangat belajar, mengembangkan diri, dan memperoleh pengalaman baru melalui dunia terbuka, kegiatan sosial, serta aktivitas luar ruangan.",
    education: [
      ["2023 – Sekarang", "STMIK Widya Cipta Dharma · S1 Teknik Informatika · NIM 2343044"],
      ["2020 – 2023", "SMAN 1 Linggang Bigung · Lulus 2023"]
    ],
    experience: [["2026", "Dinas Pendidikan dan Kebudayaan Kabupaten Kutai Barat · Magang / pengenalan lingkungan kerja instansi pemerintah"]],
    skills: ["Teknologi Informasi", "Magang Pemerintahan", "Kegiatan Sosial", "Eksplorasi Alam", "Running"]
  },
  syahfiq: {
    name: "Syahfiq Hikmal Tedrika",
    role: "Web Developer · Video Editor · NIM 2343042",
    photo: "assets/images/Syahfiq.jpeg",
    email: "syahfiqhikmal@gmail.com",
    about: "Mahasiswa semester 7 Teknik Informatika yang berfokus pada pengembangan Web, Video Editor, dan penyelesaian logika pemrograman melalui visual yang interaktif.",
    education: [["2023 – Sekarang", "STMIK Widya Cipta Dharma · S1 Teknik Informatika · NIM 2343042"]],
    experience: [
      ["Agustus 2026 – Sekarang", "PT Medica Sehat Terpadu · Direksi / pengembangan digital"],
      ["Januari 2026 – Maret 2026", "LPP TVRI Kalimantan Timur · Broadcast Engineering Intern"]
    ],
    skills: ["Web Development", "Video Editing", "Broadcast Engineering", "Storytelling Visual", "Creative Multimedia", "After Effect", "Photoshop"]
  },
  zada: {
    name: "Muhammad Zada Firjatullah",
    role: "Python Developer · Software Engineer",
    photo: "assets/images/zada.jpeg",
    email: "zxyorvtr@gmail.com",
    about: "Mahasiswa Teknik Informatika dengan pengalaman dalam pengembangan aplikasi Python, manajemen basis data, cloud deployment, dan produksi laporan operasional.",
    education: [["2023 – Sekarang", "STMIK Widya Cipta Dharma · S1 Teknik Informatika · NIM 2343099"]],
    experience: [["Januari 2026 – Maret 2026", "PT Mahakam Lembu Mulawarman · Kuliah Kerja Praktek & Software Developer"], ["2026", "Pengembangan laporan perusahaan, aplikasi BBM, analitik data, dan portal dokumentasi"]],
    skills: ["Python", "R", "SQL", "Streamlit", "PyMySQL", "TiDB Cloud", "API Development", "GitHub", "Supabase", "Cloud Deployment", "Video Editing", "Project Management"]
  },
  alisa: {
    name: "Alisa Nuraini",
    role: "Mahasiswa S1 Teknik Informatika · NIM 2343028",
    photo: "assets/images/Alisa.jpeg",
    email: "syasasa2322@gmail.com",
    about: "Mahasiswa aktif Program Studi S1 Teknik Informatika di STMIK Widya Cipta Dharma angkatan 2023 dengan fokus pada pengembangan aplikasi berbasis web, perancangan basis data, dan analisis sistem informasi. Terbiasa bekerja kolaboratif dalam tim, menyusun dokumentasi teknis, serta menyelesaikan masalah secara terstruktur dan teliti.",
    education: [["2023 – Sekarang", "STMIK Widya Cipta Dharma · S1 Teknik Informatika · NIM 2343028"]],
    experience: [
      ["2025 – 2026", "Pengembangan Sistem Informasi Berbasis Web · Merancang UI responsif, fitur CRUD, validasi input, serta dokumentasi Use Case, Activity Diagram, dan ERD"],
      ["2024 – 2025", "Perancangan & Implementasi Basis Data Relasional · Normalisasi sampai 3NF, integritas data, kueri SQL, pencarian data, dan manajemen hak akses"],
      ["2025", "Analisis & Pengolahan Data Terstruktur · Pembersihan, pengelompokan, penyajian data, dan pengujian fungsional aplikasi"]
    ],
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "MySQL", "ERD & Normalisasi", "UML", "Git & GitHub", "Figma", "Microsoft Office", "Kerja Tim", "Manajemen Waktu", "Problem Solving"]
  }
};

const modal = document.getElementById("profileModal");
const closeModal = document.querySelector(".modal-close");

function showProfile(key) {
  const data = profiles[key];
  if (!data) return;
  document.getElementById("modalPhoto").src = data.photo;
  document.getElementById("modalPhoto").alt = data.name;
  document.getElementById("modalName").textContent = data.name;
  document.getElementById("modalRole").textContent = data.role;
  document.getElementById("modalAbout").textContent = data.about;

  const email = document.getElementById("modalEmail");
  email.textContent = data.email;
  email.href = `mailto:${data.email}`;

  const education = document.getElementById("modalEducation");
  education.innerHTML = data.education.map(([title, detail]) => `<div class="detail-item"><strong>${title}</strong><span>${detail}</span></div>`).join("");

  const experience = document.getElementById("modalExperience");
  experience.innerHTML = data.experience.map(([title, detail]) => `<div class="detail-item"><strong>${title}</strong><span>${detail}</span></div>`).join("");

  document.getElementById("modalSkills").innerHTML = data.skills.map((skill) => `<span>${skill}</span>`).join("");
  modal.showModal();
}

document.querySelectorAll(".profile-button").forEach((button) => {
  button.addEventListener("click", () => showProfile(button.dataset.profile));
});

closeModal.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});
