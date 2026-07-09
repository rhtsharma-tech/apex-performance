import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "engine",
    name: "Engine Components",
    slug: "engine",
    description:
      "Master the art of combustion with forged internals and optimized airflow systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLAq_ss5UygDfYbBwzhJZuAWOklSCivYNOg8KSux5Y3BQwpRGFyUG0_x1k8FG9Yf8w1Cbap63zU7ZKZGvS6hcGulKjzw53fq3m4w7YwMxJIAm6Fmz6eGoGXEwtya7bCD15zWZihMPYP4yKi5zEByZ_0bpBUCw1qAxZpfdfVWpkCfm3JksZogk8ABt9ACLLpZVmmoVE_TmPbbKAUXeTEsaktMFOCygQEw90geqRzilq0PuRLejf4P8uo79Lc5d8ObIfGhk4_kGhlfcT",
    tags: ["Forged Internals", "Turbo Systems", "Intake Manifolds"],
    productCount: 24,
  },
  {
    id: "chassis",
    name: "Chassis Systems",
    slug: "chassis",
    description:
      "Precision handling components for ultimate cornering control and height adjustment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG_RvxcdGTqdn25rKH_PJERsikBFVViNK8_nYwV7lHbHn3rVE-Ly4LHtorUD96aservabFsJX_pLIWRhWaCmLcRIWykW-SDMgVxq7MrCCaee_oQMOymky5zCI-wbgCl2yMmLMFKqUxZGkGD5CrKjcD_PC9gQaR6gjciDVeBg1dJUiG6h8h0m94zqH1Oyu0O3V7dBf7dh0w5gGkulmX-ULJfvjuOB8TNyFgu3H2NbRDOz8F-yqLbkBFz04hSyf-iFSCOROYGM4CAKh",
    tags: ["Coilovers", "Bushings", "Control Arms"],
    productCount: 18,
  },
  {
    id: "brakes",
    name: "Braking Tech",
    slug: "brakes",
    description:
      "Track-validated stopping power with carbon-ceramic and forged monoblock systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD35c5l3nfu3OHWFWjocC6LVOU8rE2z1Uf7ySpLweudoDwy6RRqRglSRbwD99nH8hytk0PDZhPhYuzKUQIHFiCkNd2RVR903zHghKsHlxJVMu3gRtjJw04udsgu2UrnqwZ-9LeKqjNz76cUjxJ21bZMk_AN5p86EzOwewhgWU4PD2-2DMyFrB40r6cP3pnipJlUIXCmJaOTe98MYXkTTgBnjtyHJpJ-jXdt0Ns_p-flYQCFtncdNjCDv8xjdKLEBHYbyPmHxvtbrTMW",
    tags: ["Big Brake Kits", "Rotors", "Calipers"],
    productCount: 12,
  },
  {
    id: "aero",
    name: "Aerodynamics",
    slug: "aerodynamics",
    description:
      "Carbon fiber aero components engineered for downforce and drag reduction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBa0LbcT2wbGdOA9znAK4vZcAsQrafsUIJPdJCLPV7yFofDDi1SsgSAkEB-u35HGGxZA7OebPUnjIT8XQP_J_Ej3eeF9DIzSIY6822dWuk4HmbJ0o1RCDJBwn2o6-avlArLtWwEsBwj2BO-k0F5sD9BgZ6trHQy4_lElHr4-sSn7wbYpIKkqHIfCMnCJEutZEZoPN1tY_fFojttXSsw_vG-i8_-rF_wUIr7Oo-ldnlnHHc4vHG1lBcx6pldRn1HXupWID1DrObSZBM_",
    tags: ["Splitters", "Diffusers", "Wings"],
    productCount: 9,
  },
  {
    id: "drivetrain",
    name: "Drivetrain & Gear",
    slug: "drivetrain",
    description:
      "Precision transmission and differential components for maximum power delivery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTqZk4TvMt1T0JhP69LplEhtUwmz-pNbxDsyQw4whr9VcJNa6hRabb2nDaj-y0dZ55cZcANl0MMlgjB8zLJzpiVMDWDjSU1wweNWCy8zJhevlwlojVoyhYDTfkJkvEK9wxUIKaoz-6iuyMOwi3YtUicnB2yzFuSGTXgSNmO20T5CAqQBcee9whhC-HKdqEDqV933X2JkuSWlDm2_rCLnJvANLt5xLF8tI-DQuEQzcIe-zjsogWn4f-XslWl9i-DXqiuTNL3cP6qMSa",
    tags: ["Limited Slip", "Short Shifters", "Clutch Kits"],
    productCount: 15,
  },
  {
    id: "exhaust",
    name: "Exhaust Systems",
    slug: "exhaust",
    description:
      "Titanium and Inconel exhaust systems for maximum flow and weight reduction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9crtv5oR1T25QISNOAzFmh1PZMt5hx7EyYtrpNSdW6brIWep5iaDJ1tE2054Qtw6GJDpSa9wUAmdO6Xh8nyp7iW9W8I0RC1ImZVEOBc51ospml9KHgMpkGW7RZcTo0R4ygD9_cJJ425gATtG_yewCRO9Y8OAvxoYG4037p6KxX_81yRoZDGwv7O8FODd6eJ99GMnDNGMBhCvv2kbT9xMKGE7MuEfE6VNqEuy2VGyEwdOPFvynOMGFCurOc5UJGsY60LDRO30Sqv3",
    tags: ["Cat-Back", "Headers", "Downpipes"],
    productCount: 11,
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "stage-3-big-brake-kit",
    name: "Stage 3 Big Brake Kit",
    category: categories[2],
    subcategory: "Big Brake Kits",
    price: 3495,
    originalPrice: 4200,
    sku: "CHR-BBK-S3-RED",
    rating: 4.8,
    reviewCount: 48,
    description:
      "Engineered for extreme track endurance and street dominance. Featuring forged monoblock calipers and high-carbon rotors designed to eliminate brake fade under the most rigorous conditions.",
    shortDescription:
      "Carbon-Ceramic Matrix (CCM) conversion for ultra-high performance track and street applications.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrv61yJ_0-5nl_f-lH5KtZ-0SrgoVbhLIJefyeZwE8hsdKC9VJsyTcolETMiGNrIXsT23ajKabwGlr0VZSCX_8jrcue0n0jJGpsSSdigBnSJt_bimuxiFsICD7Mfqrs8KdG5P8GhELtBxSbBZywAcNH0kmEdqiEz03A2Y_9CuApoXNTYMNPdN3RDVINZNcNqkdxTdt78Vzb89_CbvofkTnk6IQeRwLafADdogWV3WDvf3c4BMVfjgPdyktDfdXgrS36C1L8o2DQrzr",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-HFV3QB6YqP-Ak5BVwHXQJNdYUWWIJWenfsfmArEap1ofa9HBoyZFjMXHQGPO2UFICLjiGDfedCNM8W4SEOqJiGkF7Y3dMw4P668RI6lKUvNyL5gPeF1VKl1SBVq4Z4W9Gn0mUNKLl7kRtpwVCGkKKifL5Q15Tc68HMlJQAlClmFwm8qbc3xEAFoeWLr7yeM2VRB0Th61qvNaAAXAfYe9732zfNzDxIvaejdiEz-m-gd0qrg1UodEHUdkshq8iApBWe3yp_JfRJi",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSSgj2qw8rBwquGhz0_VDqPs3W1Ioh0xetsg1RG8-YEg3dSwoyCuuE-KJSWjKc1yJ5Oe5pfDthWiTaPvzt8pInolgBBhKF7F4OaTDUm8g0vsTWSIgdx3a7SLxMTN7EATus63SVRmvCpmjH1g92EGUGj5o2RubZwFIQk0iixZI4CQXltsCnKSzUJL1i4nPgs0KSnFbaLbKqvJG8AS3YWaExdG54hKq0odMqYUHMh6P8V0S0-yKPB6juwmyyC8NlapJVF2FkK6shQGmi",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrv61yJ_0-5nl_f-lH5KtZ-0SrgoVbhLIJefyeZwE8hsdKC9VJsyTcolETMiGNrIXsT23ajKabwGlr0VZSCX_8jrcue0n0jJGpsSSdigBnSJt_bimuxiFsICD7Mfqrs8KdG5P8GhELtBxSbBZywAcNH0kmEdqiEz03A2Y_9CuApoXNTYMNPdN3RDVINZNcNqkdxTdt78Vzb89_CbvofkTnk6IQeRwLafADdogWV3WDvf3c4BMVfjgPdyktDfdXgrS36C1L8o2DQrzr",
    badge: "Sale",
    badgeColor: "red",
    specs: [
      { label: "Caliper Design", value: "6-Piston Forged Monoblock" },
      { label: "Rotor Material", value: "High-Carbon Steel / Zinc-Plated" },
      { label: "Rotor Dimensions", value: "380mm x 34mm" },
      { label: "Piston Fluid Area", value: "54.2 cm²" },
      { label: "Weight Reduction", value: "-4.2 lbs vs. OEM" },
    ],
    metrics: [
      { label: "Stopping Distance Reduction", value: 85, unit: "%" },
      { label: "Heat Dissipation Efficiency", value: 92, unit: "%" },
      { label: "Fade Resistance Index", value: 98, unit: "%" },
    ],
    chips: [
      "6-Piston Monoblock",
      "380mm Rotor",
      "Direct-Fit",
      "Weight: -8.4kg",
    ],
    fitment: ["Porsche 911 GT3 (992)", "Porsche 911 GT3 RS (992)"],
    serialNumber: "CHR-BBK-S3-RED",
  },
  {
    id: "p2",
    slug: "veloce-carbon-intake",
    name: "Veloce Carbon Intake",
    category: categories[0],
    subcategory: "Intake Systems",
    price: 1299,
    sku: "VLC-INT-CF-01",
    rating: 4.6,
    reviewCount: 32,
    description:
      "High-flow carbon fiber intake system with optimized velocity stacks for maximum airflow and throttle response.",
    shortDescription:
      "Carbon fiber cold air intake with velocity stacks for optimized airflow.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-0RMuUvMzZE445ubKFJMtRzAor-GFSApyxuibVJVVZLBwO6ckJsZS_-9SvmRCSUHOfffjK_f0ZX505mwDa3Su4bkAQMpZZ28nDoiFjrwNBOG79Vpu1EK4Z9i93w-ZqHlowteUhnuAHfzfcqOOxIWG53ecLXmv6os8kWyBw2Jb5ruiXv8JlkX8IUHgHILHM4hYPiuno-Dp0iAuurIHn9Zr1HN73wYEqi3bfLFwJ6XeuTH2gF3fF9QIyy9Nt7_pUhdjFfGG-jOiZyHp",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-0RMuUvMzZE445ubKFJMtRzAor-GFSApyxuibVJVVZLBwO6ckJsZS_-9SvmRCSUHOfffjK_f0ZX505mwDa3Su4bkAQMpZZ28nDoiFjrwNBOG79Vpu1EK4Z9i93w-ZqHlowteUhnuAHfzfcqOOxIWG53ecLXmv6os8kWyBw2Jb5ruiXv8JlkX8IUHgHILHM4hYPiuno-Dp0iAuurIHn9Zr1HN73wYEqi3bfLFwJ6XeuTH2gF3fF9QIyy9Nt7_pUhdjFfGG-jOiZyHp",
    badge: "New Arrival",
    badgeColor: "yellow",
    specs: [
      { label: "Material", value: "2x2 Twill Carbon Fiber" },
      { label: "Flow Rate", value: "+35% vs. OEM" },
      { label: "Filter Type", value: "Washable K&N" },
      { label: "Installation", value: "Bolt-On, 45min" },
    ],
    chips: ["Carbon Fiber", "High Flow", "Bolt-On", "+35% Airflow"],
    fitment: ["Porsche 911 Carrera (992)", "Porsche 718 Cayman GT4"],
    serialNumber: "VLC-INT-CF-01",
  },
  {
    id: "p3",
    slug: "apex-5-forged-series",
    name: "Apex-5 Forged Series",
    category: categories[4],
    subcategory: "Wheels",
    price: 845,
    sku: "AFX-WHL-5F-19",
    rating: 4.9,
    reviewCount: 67,
    description:
      "Flow-forged lightweight wheels with optimized spoke design for brake cooling and structural integrity.",
    shortDescription: "Flow-forged lightweight performance wheels.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK753FeQQWMw3BCddFwQZ4CHUfTriYgrDLau7ONr7qEnQROOASG_4LiHAyc26XzgruuKv7wqHiSxdrcjaYYgk6DzPGNYN1P4diUeCySYNYFYRYCEB-wfPnkQyI1plFkuKEkOAvzbiO_T7NBons8-6pFGOHWx3M1zLTXPyns3uXlFki8XyYdzLrjm6_R5haPZ7OEJOqo61nkKTJ-rrIY2fKnCoCpADEfirmmZpY9dBlJqOA-1tiAp5_1KhaRHCcmqbFQjqqWodxbnVF",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK753FeQQWMw3BCddFwQZ4CHUfTriYgrDLau7ONr7qEnQROOASG_4LiHAyc26XzgruuKv7wqHiSxdrcjaYYgk6DzPGNYN1P4diUeCySYNYFYRYCEB-wfPnkQyI1plFkuKEkOAvzbiO_T7NBons8-6pFGOHWx3M1zLTXPyns3uXlFki8XyYdzLrjm6_R5haPZ7OEJOqo61nkKTJ-rrIY2fKnCoCpADEfirmmZpY9dBlJqOA-1tiAp5_1KhaRHCcmqbFQjqqWodxbnVF",
    specs: [
      { label: "Construction", value: "Flow-Forged 6061-T6" },
      { label: "Size", value: "19x9.5 / 19x12" },
      { label: "Weight", value: "8.2 kg (front)" },
      { label: "Bolt Pattern", value: "5x130" },
    ],
    chips: ["Flow-Forged", "Lightweight", "Track Rated", "5x130"],
    fitment: ["Porsche 911 (992)", "Porsche Cayman GT4 (718)"],
    serialNumber: "AFX-WHL-5F-19",
  },
  {
    id: "p4",
    slug: "gt-700-hybrid-turbo",
    name: "GT-700 Hybrid Turbo",
    category: categories[0],
    subcategory: "Forced Induction",
    price: 2450,
    originalPrice: 2880,
    sku: "GTH-TBR-700-V2",
    rating: 4.7,
    reviewCount: 23,
    description:
      "Billet wheel hybrid turbocharger delivering 700+ HP with stock-like spool characteristics and OEM fitment.",
    shortDescription: "700+ HP hybrid turbo with OEM fitment.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7LiGM1gOvZ18vhdpeOBe3r1Mc9B9BF4ze1KVPcCtz-TFgSF3tFxjoF9D31senfMY860YddQgNohqVjsyQNKXIlY1UiYqQeAH3cdwtgwOuO1YLoj00Pcm1-48Lqis4dglJEIZMoVCQEEixKujK7xFhPHvL8LDk81pCkc4jEoQmItgicP436xhGGV9zI9vDVnfoPS__L3_WvynjZZq85mgROUZp3x_wOAozdvcqXv2AgLS2NDel9jusJwwsCCqnQOYa7GU-WLH47ad_",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7LiGM1gOvZ18vhdpeOBe3r1Mc9B9BF4ze1KVPcCtz-TFgSF3tFxjoF9D31senfMY860YddQgNohqVjsyQNKXIlY1UiYqQeAH3cdwtgwOuO1YLoj00Pcm1-48Lqis4dglJEIZMoVCQEEixKujK7xFhPHvL8LDk81pCkc4jEoQmItgicP436xhGGV9zI9vDVnfoPS__L3_WvynjZZq85mgROUZp3x_wOAozdvcqXv2AgLS2NDel9jusJwwsCCqnQOYa7GU-WLH47ad_",
    badge: "Sale",
    badgeColor: "red",
    specs: [
      { label: "Compressor Wheel", value: "Billet 6+6 Fin" },
      { label: "Turbine Wheel", value: "Inconel 713C" },
      { label: "Peak HP", value: "720+ WHP" },
      { label: "Spool", value: "3,200 RPM" },
    ],
    chips: ["720+ WHP", "Billet Wheel", "Inconel Turbine", "OEM Fit"],
    fitment: ["Porsche 911 Turbo S (992)", "Porsche Panamera Turbo"],
    serialNumber: "GTH-TBR-700-V2",
  },
  {
    id: "p5",
    slug: "z-spec-ceramic-pads",
    name: "Z-Spec Ceramic Pads",
    category: categories[2],
    subcategory: "Brake Pads",
    price: 189.95,
    sku: "ZSP-PAD-CRM-01",
    rating: 4.5,
    reviewCount: 112,
    description:
      "High-temperature ceramic brake pads with superior initial bite and minimal dust output for street and light track use.",
    shortDescription: "High-performance ceramic pads for street and track.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRNNIon2DlhmsjyDVLKPmJEJQ-dcKHLmRhfEN1CwqIjP1hxY9Z7Tuqc1FyqOu7MXjnQ6PB3f0OnsPaYTyRn6e3quj20dHYdp62iigZRL4X3gNndCra4DgStH8zzZ5BrkinEgIioMje4Mo3PmpHLFiZSTDb413ZCfNXCYyEmCd2IiJCqoYfef3jXKLS5egrulfRcqCermSdxaRUcNSyL8kd1ggX60IVsHZEsdd3jaDe8ypB5WZvV36IQOO5annDFHhTNmd4o4zDJeTO",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRNNIon2DlhmsjyDVLKPmJEJQ-dcKHLmRhfEN1CwqIjP1hxY9Z7Tuqc1FyqOu7MXjnQ6PB3f0OnsPaYTyRn6e3quj20dHYdp62iigZRL4X3gNndCra4DgStH8zzZ5BrkinEgIioMje4Mo3PmpHLFiZSTDb413ZCfNXCYyEmCd2IiJCqoYfef3jXKLS5egrulfRcqCermSdxaRUcNSyL8kd1ggX60IVsHZEsdd3jaDe8ypB5WZvV36IQOO5annDFHhTNmd4o4zDJeTO",
    specs: [
      { label: "Compound", value: "High-Temp Ceramic" },
      { label: "Temp Range", value: "100°C - 650°C" },
      { label: "Friction Coefficient", value: "0.42 μ" },
      { label: "Dust Level", value: "Ultra-Low" },
    ],
    chips: ["Ceramic", "Ultra-Low Dust", "650°C Rated", "Street + Track"],
    fitment: [
      "Universal Fit (Multiple Applications)",
      "Porsche 911 (991/992)",
    ],
    serialNumber: "ZSP-PAD-CRM-01",
  },
  {
    id: "p6",
    slug: "carbon-ceramic-evo",
    name: "Carbon Ceramic Evo",
    category: categories[2],
    subcategory: "Rotors",
    price: 12499,
    sku: "CCE-ROT-EVO-410",
    rating: 5.0,
    reviewCount: 14,
    description:
      "Full carbon-ceramic rotor replacement delivering massive weight savings and fade-free performance under extreme thermal loads.",
    shortDescription:
      "Full carbon-ceramic rotor for maximum weight savings.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFPfKm-bSIyjjkTqCAFxsRvyoPDQoSBMkMSLTIpZJ5wHcCwHPiyicgPWFhJcaRPkud7FmVYkCgwqg96dIotartW9tM-fbfM8w4umKqBWoDN4LXGRjwpBwaeiAGW2V3MiaKJ-KlWdmWko7SFigAUI2E6Hj-l5vqTyCRiCitwhR8-SP7GDCplZ_5knu54BUX_7jTFvTbH_6J6XR3eq953SHl-CZ2hxAbypnR98Nkgken-1OdZrCj27GlnF23X1mVSUAGzk5sUCFE94bP",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFPfKm-bSIyjjkTqCAFxsRvyoPDQoSBMkMSLTIpZJ5wHcCwHPiyicgPWFhJcaRPkud7FmVYkCgwqg96dIotartW9tM-fbfM8w4umKqBWoDN4LXGRjwpBwaeiAGW2V3MiaKJ-KlWdmWko7SFigAUI2E6Hj-l5vqTyCRiCitwhR8-SP7GDCplZ_5knu54BUX_7jTFvTbH_6J6XR3eq953SHl-CZ2hxAbypnR98Nkgken-1OdZrCj27GlnF23X1mVSUAGzk5sUCFE94bP",
    badge: "Limited",
    specs: [
      { label: "Material", value: "Carbon-Ceramic Matrix (CCM)" },
      { label: "Diameter", value: "410mm" },
      { label: "Weight Savings", value: "-12.6 kg per axle" },
      { label: "Max Operating Temp", value: "1,000°C" },
    ],
    chips: ["CCM", "410mm", "-12.6kg", "1000°C Rated"],
    fitment: ["Porsche 992 GT3", "Porsche 992 GT3 RS"],
    serialNumber: "CCE-ROT-EVO-410",
  },
  {
    id: "p7",
    slug: "titanium-catback",
    name: "Titanium Cat-Back",
    category: categories[5],
    subcategory: "Cat-Back Systems",
    price: 4820,
    sku: "TIT-CB-992-EC",
    rating: 4.9,
    reviewCount: 31,
    description:
      "Full titanium cat-back exhaust system with electronic valve control. Saves 18 lbs over stock while delivering an aggressive, race-inspired tone.",
    shortDescription:
      "Electronic valve titanium cat-back with -18 lb weight savings.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9crtv5oR1T25QISNOAzFmh1PZMt5hx7EyYtrpNSdW6brIWep5iaDJ1tE2054Qtw6GJDpSa9wUAmdO6Xh8nyp7iW9W8I0RC1ImZVEOBc51ospml9KHgMpkGW7RZcTo0R4ygD9_cJJ425gATtG_yewCRO9Y8OAvxoYG4037p6KxX_81yRoZDGwv7O8FODd6eJ99GMnDNGMBhCvv2kbT9xMKGE7MuEfE6VNqEuy2VGyEwdOPFvynOMGFCurOc5UJGsY60LDRO30Sqv3",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9crtv5oR1T25QISNOAzFmh1PZMt5hx7EyYtrpNSdW6brIWep5iaDJ1tE2054Qtw6GJDpSa9wUAmdO6Xh8nyp7iW9W8I0RC1ImZVEOBc51ospml9KHgMpkGW7RZcTo0R4ygD9_cJJ425gATtG_yewCRO9Y8OAvxoYG4037p6KxX_81yRoZDGwv7O8FODd6eJ99GMnDNGMBhCvv2kbT9xMKGE7MuEfE6VNqEuy2VGyEwdOPFvynOMGFCurOc5UJGsY60LDRO30Sqv3",
    badge: "Best Seller",
    specs: [
      { label: "Material", value: "Grade 5 Titanium (Ti-6Al-4V)" },
      { label: "Weight Savings", value: "-18 lbs vs. OEM" },
      { label: "Valve Control", value: "Electronic / OBD-II" },
      { label: "Sound Level", value: "+8 dB at WOT" },
    ],
    chips: ["Titanium", "-18 lbs", "Electronic Valve", "+8 dB"],
    fitment: ["Porsche 992 Carrera S", "Porsche 992 GTS"],
    serialNumber: "TIT-CB-992-EC",
  },
  {
    id: "p8",
    slug: "v8-x-carbon-intake",
    name: "V8-X Carbon Intake",
    category: categories[0],
    subcategory: "Intake Manifolds",
    price: 2450,
    sku: "V8X-CIM-01",
    rating: 4.7,
    reviewCount: 19,
    description:
      "Full carbon fiber intake manifold with integrated velocity stacks. Designed for high-RPM power delivery with laminar flow optimization.",
    shortDescription: "Carbon fiber intake manifold for high-RPM power.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkRVsBNlD_LdpsJpx-ZQOTZPBrWK-dA-SNAyeW2yrvq4ukcIxGnA-Mt4LoY7s3mv7MKoJj2HNj4DL5dK-zAlQL9EgT-NujWqHS_zIqFAXxxzymGWry4QqRywH2eCqsXs-togvEVXan_OibftquCFARIMle_dlD6PgS6WRAsS6Rmzs_lvtDNwvcONsBfxqhv_LwaUAufVNgcfb5tBcG5ZY4yV39j6IlIVrKcK0z__TrFoF9xGImbtCXFmH_DbQjyRnpJ5VmuPPcWfNs",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkRVsBNlD_LdpsJpx-ZQOTZPBrWK-dA-SNAyeW2yrvq4ukcIxGnA-Mt4LoY7s3mv7MKoJj2HNj4DL5dK-zAlQL9EgT-NujWqHS_zIqFAXxxzymGWry4QqRywH2eCqsXs-togvEVXan_OibftquCFARIMle_dlD6PgS6WRAsS6Rmzs_lvtDNwvcONsBfxqhv_LwaUAufVNgcfb5tBcG5ZY4yV39j6IlIVrKcK0z__TrFoF9xGImbtCXFmH_DbQjyRnpJ5VmuPPcWfNs",
    specs: [
      { label: "Material", value: "Pre-Preg Carbon Fiber" },
      { label: "Runner Length", value: "320mm Optimized" },
      { label: "Peak Flow", value: "+42% vs. OEM" },
      { label: "Redline", value: "8,500 RPM" },
    ],
    chips: ["Carbon Fiber", "+42% Flow", "8500 RPM", "Velocity Stacks"],
    fitment: ["Porsche 911 GT3 (992)", "Porsche 911 GT3 Cup"],
    serialNumber: "V8X-CIM-01",
  },
  {
    id: "p9",
    slug: "titanium-x-flow-exhaust",
    name: "Titanium X-Flow",
    category: categories[5],
    subcategory: "Headers",
    price: 6250,
    sku: "TXF-HDR-NA10",
    rating: 4.8,
    reviewCount: 11,
    description:
      "Equal-length titanium exhaust headers with merge collector technology for maximum scavenging and power gains across the entire RPM range.",
    shortDescription: "Equal-length titanium headers with merge collector.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9crtv5oR1T25QISNOAzFmh1PZMt5hx7EyYtrpNSdW6brIWep5iaDJ1tE2054Qtw6GJDpSa9wUAmdO6Xh8nyp7iW9W8I0RC1ImZVEOBc51ospml9KHgMpkGW7RZcTo0R4ygD9_cJJ425gATtG_yewCRO9Y8OAvxoYG4037p6KxX_81yRoZDGwv7O8FODd6eJ99GMnDNGMBhCvv2kbT9xMKGE7MuEfE6VNqEuy2VGyEwdOPFvynOMGFCurOc5UJGsY60LDRO30Sqv3",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9crtv5oR1T25QISNOAzFmh1PZMt5hx7EyYtrpNSdW6brIWep5iaDJ1tE2054Qtw6GJDpSa9wUAmdO6Xh8nyp7iW9W8I0RC1ImZVEOBc51ospml9KHgMpkGW7RZcTo0R4ygD9_cJJ425gATtG_yewCRO9Y8OAvxoYG4037p6KxX_81yRoZDGwv7O8FODd6eJ99GMnDNGMBhCvv2kbT9xMKGE7MuEfE6VNqEuy2VGyEwdOPFvynOMGFCurOc5UJGsY60LDRO30Sqv3",
    specs: [
      { label: "Material", value: "Grade 5 Titanium" },
      { label: "Primary Length", value: "425mm Equal-Length" },
      { label: "Collector", value: "6-into-1 Merge" },
      { label: "Peak Gain", value: "+38 HP / +22 TQ" },
    ],
    chips: ["Titanium", "Equal-Length", "+38 HP", "6-into-1 Merge"],
    fitment: ["Audi R8 V10", "Lamborghini Huracan"],
    serialNumber: "TXF-HDR-NA10",
  },
  {
    id: "p10",
    slug: "track-spec-coilovers",
    name: "Track-Spec Coilovers",
    category: categories[1],
    subcategory: "Coilovers",
    price: 3890,
    sku: "TSC-COIL-PRO-01",
    rating: 4.9,
    reviewCount: 56,
    description:
      "3-way adjustable coilover system with remote reservoirs. Designed for dedicated track use with independent compression and rebound tuning.",
    shortDescription: "3-way adjustable coilovers with remote reservoirs.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG_RvxcdGTqdn25rKH_PJERsikBFVViNK8_nYwV7lHbHn3rVE-Ly4LHtorUD96aservabFsJX_pLIWRhWaCmLcRIWykW-SDMgVxq7MrCCaee_oQMOymky5zCI-wbgCl2yMmLMFKqUxZGkGD5CrKjcD_PC9gQaR6gjciDVeBg1dJUiG6h8h0m94zqH1Oyu0O3V7dBf7dh0w5gGkulmX-ULJfvjuOB8TNyFgu3H2NbRDOz8F-yqLbkBFz04hSyf-iFSCOROYGM4CAKh",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgG_RvxcdGTqdn25rKH_PJERsikBFVViNK8_nYwV7lHbHn3rVE-Ly4LHtorUD96aservabFsJX_pLIWRhWaCmLcRIWykW-SDMgVxq7MrCCaee_oQMOymky5zCI-wbgCl2yMmLMFKqUxZGkGD5CrKjcD_PC9gQaR6gjciDVeBg1dJUiG6h8h0m94zqH1Oyu0O3V7dBf7dh0w5gGkulmX-ULJfvjuOB8TNyFgu3H2NbRDOz8F-yqLbkBFz04hSyf-iFSCOROYGM4CAKh",
    badge: "New Arrival",
    badgeColor: "yellow",
    specs: [
      { label: "Adjustment", value: "3-Way (Hi/Lo-Speed Comp, Rebound)" },
      { label: "Spring Rate", value: "12 kg/mm Front / 14 kg/mm Rear" },
      { label: "Ride Height Drop", value: "15mm - 50mm" },
      { label: "Reservoir", value: "Remote Piggyback" },
    ],
    chips: ["3-Way Adjustable", "Remote Reservoir", "12-14 kg/mm", "Track Only"],
    fitment: ["Porsche 911 GT3 (992)", "Porsche 718 Cayman GT4 RS"],
    serialNumber: "TSC-COIL-PRO-01",
  },
  {
    id: "p11",
    slug: "ceramic-spare-pads",
    name: "Ceramic Spare Pads",
    category: categories[2],
    subcategory: "Brake Pads",
    price: 249,
    sku: "CSP-PAD-SP-01",
    rating: 4.4,
    reviewCount: 89,
    description:
      "Spare set of high-performance ceramic brake pads. Quick-change design for track day swaps.",
    shortDescription: "Quick-swap ceramic spare pad set.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJC2XO6E2796bobmdUlb6ygpmssh_UXxr__riZB9-8I4mRUz4YzddQqo8JHZHKOv1s9l6cwuurFIuiypBnIKblsUJFObKRgiKvINqgCV8VC6ENTn3XrFXv6J0y8LaaKryh4uW5CDp_Nvj8_FHgjYFE2ylGTIRqeCwwOVjmYiReG2l5AltoZdhcDTE5imI1O0o79GpkNhhMYwZrliPUxbKD1ATkoU99h6yhMmkiHN87L6PXNhEd8rQyO9v2BYVuqp180GdxFiFnta9x",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJC2XO6E2796bobmdUlb6ygpmssh_UXxr__riZB9-8I4mRUz4YzddQqo8JHZHKOv1s9l6cwuurFIuiypBnIKblsUJFObKRgiKvINqgCV8VC6ENTn3XrFXv6J0y8LaaKryh4uW5CDp_Nvj8_FHgjYFE2ylGTIRqeCwwOVjmYiReG2l5AltoZdhcDTE5imI1O0o79GpkNhhMYwZrliPUxbKD1ATkoU99h6yhMmkiHN87L6PXNhEd8rQyO9v2BYVuqp180GdxFiFnta9x",
    specs: [
      { label: "Compound", value: "Race Ceramic" },
      { label: "Set Includes", value: "Front Axle (4 pads)" },
      { label: "Bite Rating", value: "9/10" },
      { label: "Pad Life", value: "~15,000 miles" },
    ],
    chips: ["Race Ceramic", "Front Axle", "Quick-Swap", "15K Miles"],
    fitment: ["Porsche 911 (991/992)", "Porsche Cayman (981/718)"],
    serialNumber: "CSP-PAD-SP-01",
  },
  {
    id: "p12",
    slug: "dot-5-1-racing-fluid",
    name: "DOT 5.1 Racing Fluid",
    category: categories[2],
    subcategory: "Brake Fluid",
    price: 38,
    sku: "DRF-FLUID-51",
    rating: 4.6,
    reviewCount: 203,
    description:
      "High boiling point racing brake fluid engineered for sustained high-temperature braking without vapor lock.",
    shortDescription: "High boiling point racing brake fluid.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAys7FlXRuQod7YSaSUkRauUWOM2r5bzU_8qcX-Fpg2-nMDVvepAAPxnWADySy-24CgLMq4KkTrFVxV5yObprdQhf8Ysr5Fcqtvx9EjLILi5zeYUVKn2KOhQ7MNuf1oPwg2ZHxbLf_0w3xNiDhmrTzmVdaSrIunwCwEN7N4Rpg199RKNOVuUxcjE8TAs1PpWfKIfMgQAPetv58AFBhsdlI3LmNoTCpWEIsALi4wcu9JyhTN8o_c4hbUmH3sncA7YRln3db1HuhlXl9O",
    ],
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAys7FlXRuQod7YSaSUkRauUWOM2r5bzU_8qcX-Fpg2-nMDVvepAAPxnWADySy-24CgLMq4KkTrFVxV5yObprdQhf8Ysr5Fcqtvx9EjLILi5zeYUVKn2KOhQ7MNuf1oPwg2ZHxbLf_0w3xNiDhmrTzmVdaSrIunwCwEN7N4Rpg199RKNOVuUxcjE8TAs1PpWfKIfMgQAPetv58AFBhsdlI3LmNoTCpWEIsALi4wcu9JyhTN8o_c4hbUmH3sncA7YRln3db1HuhlXl9O",
    specs: [
      { label: "DOT Rating", value: "5.1" },
      { label: "Dry Boiling Point", value: "325°C (617°F)" },
      { label: "Wet Boiling Point", value: "200°C (392°F)" },
      { label: "Volume", value: "500ml" },
    ],
    chips: ["DOT 5.1", "325°C Dry BP", "500ml", "Track Rated"],
    fitment: ["Universal (All Performance Vehicles)"],
    serialNumber: "DRF-FLUID-51",
  },
];

export const heroSlides = [
  {
    desktopImage: "/hero-images/desktop-hero-1.png",
    mobileImage: "/hero-images/mobile-hero-1.png",
    tag: "2024 Drivetrain Collection Live",
  },
  {
    desktopImage: "/hero-images/desktop-hero-2.png",
    mobileImage: "/hero-images/mobile-hero-2.png",
    tag: "New Aero Collection",
  },
  {
    desktopImage: "/hero-images/desktop-hero-3.png",
    mobileImage: "/hero-images/mobile-hero-3.png",
    tag: "Track-Tested Components",
  },
];
