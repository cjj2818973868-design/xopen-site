import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const COMPANY = {
  name: "Xopengen",
  domain: "https://xopengen.com",
  email: "support@xopengen.com",
  updatedAt: "May 2026",
};

function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    shield: (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M3 3v18h18" />
        <path d="M7 16V9" />
        <path d="M12 16V5" />
        <path d="M17 16v-3" />
      </svg>
    ),
    package: (
      <svg {...common}>
        <path d="m16.5 9.4-9-5.19" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="M3.29 7 12 12l8.71-5" />
        <path d="M12 22V12" />
        <path d="M17 14h-4" />
        <path d="M15 12v4" />
      </svg>
    ),
    truck: (
      <svg {...common}>
        <path d="M10 17h4V5H2v12h3" />
        <path d="M14 17h1" />
        <path d="M19 17h3v-6l-3-4h-5" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    megaphone: (
      <svg {...common}>
        <path d="m3 11 18-5v12L3 14v-3Z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),
    x: (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

const features = [
  {
    icon: "package",
    title: "Product Listing Automation",
    desc: "Create TikTok Shop product drafts, generate titles and descriptions, map categories and attributes, and publish after merchant confirmation.",
  },
  {
    icon: "truck",
    title: "Order & Logistics Sync",
    desc: "Synchronize orders, fulfillment status, shipment tracking, and logistics exceptions across stores and connected systems.",
  },
  {
    icon: "users",
    title: "Affiliate Collaboration",
    desc: "Support creator filtering, collaboration invitations, sample request workflows, and affiliate performance tracking.",
  },
  {
    icon: "megaphone",
    title: "TikTok Ads Automation",
    desc: "Help sellers manage ad campaigns, download ad reports, identify inefficient campaigns, and generate optimization suggestions.",
  },
  {
    icon: "chart",
    title: "Business Reporting",
    desc: "Generate daily, weekly, and monthly reports for sales, orders, refunds, ad spend, ROI, ACOS, gross profit, and net profit.",
  },
  {
    icon: "shield",
    title: "Security & Compliance",
    desc: "Use merchant-authorized data only, protect access tokens, maintain operation logs, and support data deletion requests.",
  },
];

const ROUTES = {
  home: "/",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  contact: "/contact",
  login: "/login",
};

const PATH_TO_PAGE = Object.fromEntries(Object.entries(ROUTES).map(([page, path]) => [path, page]));

function pageFromPath(pathname) {
  return PATH_TO_PAGE[pathname] || "home";
}

function isValidPage(page) {
  return Object.prototype.hasOwnProperty.call(ROUTES, page);
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ["home", "Home"],
    ["privacy", "Privacy Policy"],
    ["terms", "Terms"],
    ["contact", "Contact"],
  ];

  const goToPage = (key) => {
    const path = ROUTES[key] || "/";
    window.history.pushState({}, "", path);
    setPage(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NavButtons = () => (
    <>
      {nav.map(([key, label]) => (
        <button
          key={key}
          onClick={() => goToPage(key)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            page === key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          {label}
        </button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => goToPage("home")} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <Icon name="globe" size={21} />
          </div>
          <div className="text-left">
            <div className="text-lg font-bold tracking-tight text-slate-950">{COMPANY.name}</div>
            <div className="text-xs text-slate-500">TikTok Shop & Ads SaaS</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          <NavButtons />
          <button onClick={() => goToPage("login")} className="ml-2 rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700">
            Login
          </button>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden" aria-label="Toggle menu">
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <NavButtons />
            <button onClick={() => goToPage("login")} className="rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Home({ setPage }) {
  const stats = useMemo(
    () => [
      ["Product Drafts", "128", "+24 today"],
      ["Synced Orders", "3,482", "+16.8%"],
      ["Ad Spend", "$2,430", "ACOS 18.6%"],
      ["Net Profit", "$9,842", "+11.2%"],
    ],
    []
  );

  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
              <Icon name="shield" size={16} /> Built for TikTok Shop sellers and advertisers
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              TikTok Shop automation for listings, ads, and reports.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {COMPANY.name} is a SaaS platform for TikTok Shop sellers, agencies, and cross-border ecommerce teams. We help merchants automate product listing workflows, order synchronization, affiliate collaboration, TikTok Ads reporting, and business analytics.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setPage("contact")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-slate-800">
                Contact Us <Icon name="arrow" size={18} />
              </button>
              <button onClick={() => setPage("privacy")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50">
                View Privacy Policy
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-teal-100/60 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm text-slate-500">Automation Dashboard</div>
                  <div className="text-xl font-bold text-slate-950">Store Performance</div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Online</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map(([name, value, sub]) => (
                  <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">{name}</div>
                    <div className="mt-2 text-2xl font-bold text-slate-950">{value}</div>
                    <div className="mt-1 text-sm text-teal-700">{sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-semibold text-slate-900">Recent workflow</div>
                  <div className="text-sm text-slate-500">AI assisted</div>
                </div>
                {[
                  "Generated product listing draft for tire shine gel",
                  "Synced 42 new orders and 8 logistics updates",
                  "Flagged 3 low-ROI ad groups for review",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 text-sm text-slate-600">
                    <Icon name="check" className="mt-0.5 text-teal-600" size={16} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">What we provide</h2>
          <p className="mt-4 text-slate-600">A practical automation layer for sellers who need to reduce repetitive work while keeping human confirmation and compliance controls in the workflow.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">Designed for responsible automation.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Our platform is built around merchant authorization, human review, data minimization, and audit logs. We do not sell merchant or customer data. We use authorized TikTok Shop and TikTok Ads data only to provide the requested SaaS services.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 font-semibold">
              <Icon name="lock" className="text-teal-300" /> Data protection principles
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>HTTPS/TLS transmission</li>
              <li>Encrypted credential storage</li>
              <li>Role-based access control</li>
              <li>Merchant data deletion requests</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" iconName="shield" updatedAt={COMPANY.updatedAt}>
      <p>{COMPANY.name} provides SaaS tools for TikTok Shop sellers, agencies, and cross-border ecommerce teams. This Privacy Policy explains what information we collect, how we use it, and how users can contact us about privacy requests.</p>
      <h3>1. Information We Collect</h3>
      <p>We may collect account information such as name, email address, login information, company or project details, and support communications. When a merchant connects a TikTok Shop or TikTok Ads account, we may process authorized shop information, product data, order data, logistics data, affiliate collaboration data, advertising data, report data, API logs, and operation logs.</p>
      <h3>2. How We Use Information</h3>
      <p>We use information to provide product listing automation, order synchronization, logistics tracking, affiliate collaboration, TikTok Ads reporting, business analytics, customer support, system security, troubleshooting, and compliance-related functions.</p>
      <h3>3. TikTok Shop and TikTok Ads Data</h3>
      <p>We only access TikTok Shop or TikTok Ads data after the merchant authorizes access through the relevant platform authorization process. We use authorized data only to provide the services requested by the merchant. We do not access merchant accounts without authorization.</p>
      <h3>4. Data Sharing</h3>
      <p>We do not sell merchant data, customer data, or TikTok platform data. We may share limited information with service providers only when necessary to provide the service, such as cloud hosting providers, TikTok APIs, logistics or ERP systems, AI service providers, email providers, and notification providers.</p>
      <h3>5. Data Security</h3>
      <p>We use HTTPS/TLS for data transmission, protect sensitive credentials, apply role-based access control, maintain audit logs for key operations, and restrict access based on the principle of least privilege.</p>
      <h3>6. Data Retention and Deletion</h3>
      <p>We retain data only for as long as necessary to provide the service, meet legal requirements, resolve disputes, or maintain security logs. Merchants may request account deletion, shop disconnection, or data deletion by contacting us.</p>
      <h3>7. User Rights</h3>
      <p>Depending on applicable laws, users may request access, correction, deletion, or restriction of their personal data. We will respond to reasonable requests in accordance with applicable law.</p>
      <h3>8. Contact Us</h3>
      <p>For privacy questions or data deletion requests, contact us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalPage>
  );
}

function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" iconName="file" updatedAt={COMPANY.updatedAt}>
      <p>These Terms of Service govern access to and use of {COMPANY.name}. By using our service, you agree to these terms.</p>
      <h3>1. Service Description</h3>
      <p>{COMPANY.name} provides SaaS tools for TikTok Shop sellers and advertisers, including product listing automation, order synchronization, logistics tracking, affiliate collaboration, advertising reporting, campaign automation support, and business analytics.</p>
      <h3>2. Account Registration</h3>
      <p>Users must provide accurate registration information and are responsible for maintaining the security of their account credentials. Users are responsible for activities under their accounts.</p>
      <h3>3. Merchant Authorization</h3>
      <p>Users must authorize access to TikTok Shop, TikTok Ads, or other connected third-party accounts before using related features. Users may disconnect authorization at any time where supported.</p>
      <h3>4. Acceptable Use</h3>
      <p>Users may not use the service for illegal activities, spam, unauthorized scraping, platform abuse, fake orders, misleading listings, infringing products, prohibited goods, or any activity that violates TikTok policies or applicable laws.</p>
      <h3>5. User Content and Product Data</h3>
      <p>Users are responsible for the accuracy, legality, and ownership of product information, images, videos, descriptions, ads, and other content uploaded, imported, generated, or published through the service.</p>
      <h3>6. Third-Party Platforms</h3>
      <p>Our service may integrate with TikTok Shop, TikTok Business API, logistics providers, ERP systems, AI providers, and other third-party services. Users must comply with the terms and policies of those platforms.</p>
      <h3>7. Service Availability</h3>
      <p>We make reasonable efforts to keep the service available, but we do not guarantee uninterrupted, error-free, or always-available operation.</p>
      <h3>8. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, we are not liable for indirect losses, account penalties, platform suspension, lost profits, business interruption, or issues caused by third-party platform changes, misuse, or inaccurate user-provided information.</p>
      <h3>9. Suspension and Termination</h3>
      <p>We may suspend or terminate access if a user violates these terms, creates security risks, abuses automation features, or violates platform or legal requirements.</p>
      <h3>10. Contact</h3>
      <p>For support or legal questions, contact us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalPage>
  );
}

function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
          <Icon name="mail" size={28} />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">Contact Us</h1>
        <p className="mt-4 leading-8 text-slate-600">
          For product support, privacy requests, data deletion requests, partnership inquiries, or TikTok Shop and TikTok Ads integration questions, please contact us by email.
        </p>
        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <div className="text-sm font-medium text-slate-500">Support Email</div>
          <a className="mt-2 block text-xl font-bold text-teal-700" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoCard title="Product Support" text="Questions about SaaS features, onboarding, or usage." />
          <InfoCard title="Privacy Requests" text="Data access, correction, deletion, or shop disconnection requests." />
          <InfoCard title="Business Inquiry" text="Partnerships, platform integrations, and commercial discussions." />
        </div>
      </div>
    </main>
  );
}

function Login() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">Login</h1>
        <p className="mt-3 text-slate-600">Access is available to approved merchants and partners.</p>
        <div className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100" placeholder="Email" />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100" placeholder="Password" type="password" />
          <button className="w-full rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800">Sign in</button>
        </div>
        <p className="mt-5 text-sm text-slate-500">For access or demo requests, contact {COMPANY.email}.</p>
      </div>
    </main>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="font-bold text-slate-950">{title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function LegalPage({ title, iconName, updatedAt, children }) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
          <Icon name={iconName} size={28} />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">{title}</h1>
          <p className="mt-1 text-sm text-slate-500">Last updated: {updatedAt}</p>
        </div>
      </div>
      <article className="prose prose-slate max-w-none rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm prose-h3:mt-8 prose-h3:text-xl prose-p:leading-8 prose-a:text-teal-700">
        {children}
      </article>
    </main>
  );
}

function Footer({ setPage }) {
  const goToPage = (key) => {
    const path = ROUTES[key] || "/";
    window.history.pushState({}, "", path);
    setPage(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-bold text-slate-950">{COMPANY.name}</div>
          <div className="mt-1 text-sm text-slate-500">TikTok Shop & TikTok Ads SaaS automation platform.</div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <button onClick={() => goToPage("privacy")} className="hover:text-slate-950">Privacy Policy</button>
          <span>/</span>
          <button onClick={() => goToPage("terms")} className="hover:text-slate-950">Terms of Service</button>
          <span>/</span>
          <button onClick={() => goToPage("contact")} className="hover:text-slate-950">Contact</button>
        </div>
      </div>
    </footer>
  );
}

function runSmokeTests() {
  console.assert(COMPANY.email.includes("@"), "COMPANY.email should be an email address");
  console.assert(features.length === 6, "Expected exactly 6 feature cards");
  console.assert(isValidPage("home"), "home should be a valid page");
  console.assert(isValidPage("privacy"), "privacy should be a valid page");
  console.assert(!isValidPage("unknown"), "unknown should not be a valid page");
  console.assert(pageFromPath("/") === "home", "Root path should resolve to home");
  console.assert(pageFromPath("/privacy-policy") === "privacy", "Privacy path should resolve to privacy");
  console.assert(pageFromPath("/terms-of-service") === "terms", "Terms path should resolve to terms");
}

if (typeof window !== "undefined") {
  runSmokeTests();
}

export default function App() {
  const [page, setPage] = useState(() => (typeof window === "undefined" ? "home" : pageFromPath(window.location.pathname)));

  React.useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const render = () => {
    if (page === "privacy") return <PrivacyPolicy />;
    if (page === "terms") return <TermsOfService />;
    if (page === "contact") return <Contact />;
    if (page === "login") return <Login />;
    return <Home setPage={setPage} />;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header page={page} setPage={setPage} />
      {render()}
      <Footer setPage={setPage} />
    </div>
  );
}
