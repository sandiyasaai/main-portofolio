const content = {
  site: {
    lang: "id",
    title: "Pande I Gede Sandiyasa | Web Developer",
  },
  profile: {
    name: "Pande I Gede Sandiyasa",
    title: "Web Developer",
    avatar: "./assets/images/my-avatar.png",
    avatarAlt: "Pande I Gede Sandiyasa",
    about: [
      "Saya membangun aplikasi web yang rapi, cepat, dan mudah dipakai untuk kebutuhan operasional harian.",
      "Fokus utama saya ada pada sistem informasi, dashboard admin, dan pengalaman pengguna yang jelas agar produk tetap nyaman digunakan dan mudah dikembangkan setelah rilis.",
    ],
    contacts: [
      {
        label: "Email",
        value: "codepansya@gmail.com",
        href: "mailto:codepansya@gmail.com",
        icon: "mail-outline",
      },
      {
        label: "Website",
        value: "siedu.web.id",
        href: "https://siedu.web.id",
        icon: "globe-outline",
        external: true,
      },
      {
        label: "Lokasi",
        value: "Indonesia",
        icon: "location-outline",
      },
    ],
    socials: [],
  },
  services: [
    {
      title: "Web App Development",
      description:
        "Pengembangan aplikasi web untuk dashboard, panel admin, dan proses bisnis internal.",
      icon: "./assets/images/icon-dev.svg",
      alt: "web development icon",
    },
    {
      title: "School Information Systems",
      description:
        "Perancangan sistem informasi sekolah dan e-learning yang mudah dipakai oleh admin, guru, siswa, dan wali.",
      icon: "./assets/images/icon-app.svg",
      alt: "system icon",
    },
    {
      title: "UI Implementation",
      description:
        "Penerjemahan desain menjadi antarmuka yang responsif, konsisten, dan ringan di berbagai perangkat.",
      icon: "./assets/images/icon-design.svg",
      alt: "design icon",
    },
    {
      title: "Maintenance & Optimization",
      description:
        "Perapihan struktur kode, peningkatan performa, dan penyempurnaan pengalaman pakai setelah produk berjalan.",
      icon: "./assets/images/icon-photo.svg",
      alt: "optimization icon",
    },
  ],
  resume: {
    education: [],
    experience: [
      {
        title: "Independent Web Developer",
        period: "2023 - Sekarang",
        description:
          "Mengerjakan website profil, dashboard administrasi, dan sistem informasi berbasis web untuk kebutuhan operasional.",
      },
      {
        title: "Product & System Builder",
        period: "2022 - Sekarang",
        description:
          "Mendesain alur produk, struktur data, dan implementasi UI agar aplikasi tetap mudah dipelihara ketika fitur bertambah.",
      },
    ],
    skills: [
      {
        name: "Web Application Development",
        value: 90,
      },
      {
        name: "Dashboard & Admin Panel",
        value: 88,
      },
      {
        name: "System Integration",
        value: 82,
      },
      {
        name: "Frontend Implementation",
        value: 85,
      },
    ],
  },
  portfolio: {
    projects: [
      {
        id: "siedu-web-id",
        title: "siedu.web.id",
        category: "Web development",
        summary: "Sistem informasi manajemen sekolah dan e-learning terpadu.",
        image: "./assets/images/project-1.jpg",
        alt: "Tampilan utama siedu.web.id",
        url: "https://siedu.web.id",
        urlLabel: "Kunjungi website",
        description: [
          "Platform sistem informasi edukasi terpadu untuk manajemen sekolah dan pembelajaran digital interaktif.",
          "Fitur utamanya meliputi manajemen data siswa, sistem presensi real-time, rekap nilai otomatis, dan portal ujian daring yang terintegrasi.",
          "Produk ini dirancang agar mudah dipakai oleh pengajar, siswa, dan wali murid dalam satu ekosistem digital yang konsisten.",
        ],
      },
      {
        id: "siedu-web-id",
        title: "siedu.web.id",
        category: "Web development",
        summary: "Sistem informasi manajemen sekolah dan e-learning terpadu.",
        image: "./assets/images/project-1.jpg",
        alt: "Tampilan utama siedu.web.id",
        url: "https://siedu.web.id",
        urlLabel: "Kunjungi website",
        description: [
          "Platform sistem informasi edukasi terpadu untuk manajemen sekolah dan pembelajaran digital interaktif.",
          "Fitur utamanya meliputi manajemen data siswa, sistem presensi real-time, rekap nilai otomatis, dan portal ujian daring yang terintegrasi.",
          "Produk ini dirancang agar mudah dipakai oleh pengajar, siswa, dan wali murid dalam satu ekosistem digital yang konsisten.",
        ],
      },
    ],
  },
  contact: {
    title: "Mari berdiskusi",
    description:
      "Jika Anda sedang menyiapkan dashboard internal, sistem informasi, atau website profil yang perlu dirapikan, kirim pesan melalui form ini.",
    email: "codepansya@gmail.com",
  },
};

export default content;
