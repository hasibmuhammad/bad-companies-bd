const companies = [
  {
    name: "Largeit Solution",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "CT Health Ltd.",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "Gain Solutions Ltd. ",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "DoctorKoi Smart",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "Bangladesh Microtechnology Ltd.",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "HalTech Limited",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "Octaglory Limited",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "Next IT",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
  {
    name: "Crafted System",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "copotronic infosystems ltd",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "SRRK IT",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "WAN It Ltd",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "Farr ceramics Ltd",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "softlab it",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "Aventra Consultant",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "London Academy of IT",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
  {
    name: "IPVision canada inc",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "Cramstack",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "HandyMama",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "Extreme Solutions",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "Top it ltd",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "desktop it ltd",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "Technosoftbd",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "Spring Soft IT",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
  {
    name: "United IT Solution Ltd.",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "Gain Solutions Ltd.",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "Regfire Solutions Ltd.",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "renssoft soln",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "Venture solutions ltd",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "Durbin Labs Ltd",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "Flyte solution",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "massdataltd",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "3DEVs IT Ltd.",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
  {
    name: "Dotlines",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "SSD Tech",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "Nextive Solution",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "Search Engine School Bangladesh",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "Parallaxlogic InfoTech ",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "Base it solution",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "Syntech Solution Ltd.",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "SAHARA IT",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
  {
    name: "IT way bd",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "Fytobyte",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "Digital marketing solutions (uttara)",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "MavrickIT",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "hrsoftbd",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "system decoder",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "mmitsoft",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "BDEMR Solutions Corp",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
  {
    name: "Genuine Technology & Research Ltd.",
    class: "badge m-1 rounded-pill text-bg-primary",
  },
  {
    name: "intelsenseai",
    class: "badge m-1 rounded-pill text-bg-secondary",
  },
  {
    name: "smart retina",
    class: "badge m-1 rounded-pill text-bg-success",
  },
  {
    name: "Golden Trade International BD",
    class: "badge m-1 rounded-pill text-bg-warning",
  },
  {
    name: "Dhali Construction Ltd",
    class: "badge m-1 rounded-pill text-bg-danger",
  },
  {
    name: "Best Mark Group",
    class: "badge m-1 rounded-pill text-bg-info",
  },
  {
    name: "Techtsy",
    class: "badge m-1 rounded-pill text-bg-light",
  },
  {
    name: "Extreme Solutions",
    class: "badge m-1 rounded-pill text-bg-dark",
  },
];

const comEl = document.getElementById("companies");

window.addEventListener("load", () => {
  companies.map((cm) => {
    comEl.innerHTML += `<span class="${cm.class}">${cm.name}</span>`;
  });
});
