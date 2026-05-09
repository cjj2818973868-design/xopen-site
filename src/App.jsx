import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const COMPANY = {
  name: "Xopengen",
  domain: "https://xopengen.com",
  email: "support@xopengen.com",
  updatedAt: "May 2026",
};

const ROUTES = {
  home: "/",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  contact: "/contact",
  login: "/login",
  tiktokAdsCallback: "/auth/tiktok-ads/callback",
};

const PATH_TO_PAGE = Object.fromEntries(Object.entries(ROUTES).map(([page, path]) => [path, page]));

function pageFromPath(pathname) {
  return PATH_TO_PAGE[pathname] || "home";
}

function isValidPage(page) {
  return Object.prototype.hasOwnProperty.call(ROUTES, page);
}

const i18n = {
  en: {
    nav: { home: "Home", privacy: "Privacy Policy", terms: "Terms", contact: "Contact", login: "Login" },
    subtitle: "TikTok Shop & Ads SaaS",
    badge: "Built for TikTok Shop sellers and advertisers",
    heroTitle: "TikTok Shop automation for listings, ads, and reports.",
    heroDesc:
      "Xopengen is a SaaS platform for TikTok Shop sellers, agencies, and cross-border ecommerce teams. We help merchants automate product listing workflows, order synchronization, affiliate collaboration, TikTok Ads reporting, and business analytics.",
    contactUs: "Contact Us",
    viewPrivacy: "View Privacy Policy",
    dashboard: "Automation Dashboard",
    storePerformance: "Store Performance",
    online: "Online",
    stats: [
      ["Product Drafts", "128", "+24 today"],
      ["Synced Orders", "3,482", "+16.8%"],
      ["Ad Spend", "$2,430", "ACOS 18.6%"],
      ["Net Profit", "$9,842", "+11.2%"],
    ],
    recentWorkflow: "Recent workflow",
    aiAssisted: "AI assisted",
    workflowItems: [
      "Generated product listing draft for tire shine gel",
      "Synced 42 new orders and 8 logistics updates",
      "Flagged 3 low-ROI ad groups for review",
    ],
    whatWeProvide: "What we provide",
    whatWeProvideDesc:
      "A practical automation layer for sellers who need to reduce repetitive work while keeping human confirmation and compliance controls in the workflow.",
    features: [
      ["package", "Product Listing Automation", "Create TikTok Shop product drafts, generate titles and descriptions, map categories and attributes, and publish after merchant confirmation."],
      ["truck", "Order & Logistics Sync", "Synchronize orders, fulfillment status, shipment tracking, and logistics exceptions across stores and connected systems."],
      ["users", "Affiliate Collaboration", "Support creator filtering, collaboration invitations, sample request workflows, and affiliate performance tracking."],
      ["megaphone", "TikTok Ads Automation", "Help sellers manage ad campaigns, download ad reports, identify inefficient campaigns, and generate optimization suggestions."],
      ["chart", "Business Reporting", "Generate daily, weekly, and monthly reports for sales, orders, refunds, ad spend, ROI, ACOS, gross profit, and net profit."],
      ["shield", "Security & Compliance", "Use merchant-authorized data only, protect access tokens, maintain operation logs, and support data deletion requests."],
    ],
    responsibleTitle: "Designed for responsible automation.",
    responsibleDesc:
      "Our platform is built around merchant authorization, human review, data minimization, and audit logs. We do not sell merchant or customer data. We use authorized TikTok Shop and TikTok Ads data only to provide the requested SaaS services.",
    dataPrinciples: "Data protection principles",
    principles: ["HTTPS/TLS transmission", "Encrypted credential storage", "Role-based access control", "Merchant data deletion requests"],
    footerDesc: "TikTok Shop & TikTok Ads SaaS automation platform.",
    loginTitle: "Login",
    loginDesc: "Access is available to approved merchants and partners.",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    signIn: "Sign in",
    loginNote: "For account access, onboarding, or demo requests, contact",
    contactTitle: "Contact Us",
    contactDesc:
      "For product support, privacy requests, data deletion requests, partnership inquiries, or TikTok Shop and TikTok Ads integration questions, please contact us by email.",
    supportEmail: "Support Email",
    contactCards: [
      ["Product Support", "Questions about SaaS features, onboarding, or usage."],
      ["Privacy Requests", "Data access, correction, deletion, or shop disconnection requests."],
      ["Business Inquiry", "Partnerships, platform integrations, and commercial discussions."],
    ],
    callbackTitle: "TikTok Ads Authorization Callback",
    callbackDesc:
      "This page is used to receive TikTok for Business OAuth authorization responses for Xopengen. After authorization, our system will process the authorization result and connect the advertiser account for approved merchants.",
    callbackStatus: "Callback status",
    callbackReady: "No authorization code is present. This page is ready for TikTok Ads OAuth callback traffic.",
    callbackSuccess: "Authorization code received. The connection can now be completed by the backend service.",
    callbackError: "Authorization returned an error:",
    callbackSupport: "For account access or integration support, contact",
    updated: "Last updated",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    privacySections: [
      ["1. Information We Collect", "We may collect account information such as name, email address, login information, company or project details, and support communications. When a merchant connects a TikTok Shop or TikTok Ads account, we may process authorized shop information, product data, order data, logistics data, affiliate collaboration data, advertising data, report data, API logs, and operation logs."],
      ["2. How We Use Information", "We use information to provide product listing automation, order synchronization, logistics tracking, affiliate collaboration, TikTok Ads reporting, business analytics, customer support, system security, troubleshooting, and compliance-related functions."],
      ["3. TikTok Shop and TikTok Ads Data", "We only access TikTok Shop or TikTok Ads data after the merchant authorizes access through the relevant platform authorization process. We use authorized data only to provide the services requested by the merchant. We do not access merchant accounts without authorization."],
      ["4. Data Sharing", "We do not sell merchant data, customer data, or TikTok platform data. We may share limited information with service providers only when necessary to provide the service, such as cloud hosting providers, TikTok APIs, logistics or ERP systems, AI service providers, email providers, and notification providers."],
      ["5. Data Security", "We use HTTPS/TLS for data transmission, protect sensitive credentials, apply role-based access control, maintain audit logs for key operations, and restrict access based on the principle of least privilege."],
      ["6. Data Retention and Deletion", "We retain data only for as long as necessary to provide the service, meet legal requirements, resolve disputes, or maintain security logs. Merchants may request account deletion, shop disconnection, or data deletion by contacting us."],
      ["7. User Rights", "Depending on applicable laws, users may request access, correction, deletion, or restriction of their personal data. We will respond to reasonable requests in accordance with applicable law."],
      ["8. Contact Us", "For privacy questions or data deletion requests, contact us at"],
    ],
    privacyIntro:
      "Xopengen provides SaaS tools for TikTok Shop sellers, agencies, and cross-border ecommerce teams. This Privacy Policy explains what information we collect, how we use it, and how users can contact us about privacy requests.",
    termsIntro: "These Terms of Service govern access to and use of Xopengen. By using our service, you agree to these terms.",
    termsSections: [
      ["1. Service Description", "Xopengen provides SaaS tools for TikTok Shop sellers and advertisers, including product listing automation, order synchronization, logistics tracking, affiliate collaboration, advertising reporting, campaign automation support, and business analytics."],
      ["2. Account Registration", "Users must provide accurate registration information and are responsible for maintaining the security of their account credentials. Users are responsible for activities under their accounts."],
      ["3. Merchant Authorization", "Users must authorize access to TikTok Shop, TikTok Ads, or other connected third-party accounts before using related features. Users may disconnect authorization at any time where supported."],
      ["4. Acceptable Use", "Users may not use the service for illegal activities, spam, unauthorized scraping, platform abuse, fake orders, misleading listings, infringing products, prohibited goods, or any activity that violates TikTok policies or applicable laws."],
      ["5. User Content and Product Data", "Users are responsible for the accuracy, legality, and ownership of product information, images, videos, descriptions, ads, and other content uploaded, imported, generated, or published through the service."],
      ["6. Third-Party Platforms", "Our service may integrate with TikTok Shop, TikTok Business API, logistics providers, ERP systems, AI providers, and other third-party services. Users must comply with the terms and policies of those platforms."],
      ["7. Service Availability", "We make reasonable efforts to keep the service available, but we do not guarantee uninterrupted, error-free, or always-available operation."],
      ["8. Limitation of Liability", "To the maximum extent permitted by law, we are not liable for indirect losses, account penalties, platform suspension, lost profits, business interruption, or issues caused by third-party platform changes, misuse, or inaccurate user-provided information."],
      ["9. Suspension and Termination", "We may suspend or terminate access if a user violates these terms, creates security risks, abuses automation features, or violates platform or legal requirements."],
      ["10. Contact", "For support or legal questions, contact us at"],
    ],
  },
  zh: {
    nav: { home: "首页", privacy: "隐私政策", terms: "服务条款", contact: "联系我们", login: "登录" },
    subtitle: "TikTok Shop 与广告 SaaS",
    badge: "面向 TikTok Shop 商家与广告主",
    heroTitle: "TikTok Shop 商品、广告与报表自动化工具。",
    heroDesc:
      "Xopengen 是面向 TikTok Shop 商家、服务商和跨境电商团队的 SaaS 平台，帮助商家处理商品上架、订单同步、达人协作、TikTok Ads 报表和经营分析等流程。",
    contactUs: "联系我们",
    viewPrivacy: "查看隐私政策",
    dashboard: "自动化看板",
    storePerformance: "店铺表现",
    online: "在线",
    stats: [
      ["商品草稿", "128", "今日 +24"],
      ["同步订单", "3,482", "+16.8%"],
      ["广告花费", "$2,430", "ACOS 18.6%"],
      ["净利润", "$9,842", "+11.2%"],
    ],
    recentWorkflow: "近期流程",
    aiAssisted: "AI 辅助",
    workflowItems: ["已生成轮胎膏商品草稿", "已同步 42 个新订单和 8 条物流更新", "已标记 3 个低 ROI 广告组待复核"],
    whatWeProvide: "我们提供什么",
    whatWeProvideDesc: "为商家提供实用的自动化能力，减少重复操作，同时保留人工确认、合规检查和操作记录。",
    features: [
      ["package", "商品上架自动化", "创建 TikTok Shop 商品草稿，生成标题和描述，匹配类目和属性，并在商家确认后发布。"],
      ["truck", "订单与物流同步", "同步订单、发货状态、物流轨迹和异常信息，连接店铺、ERP 与仓配系统。"],
      ["users", "达人协作管理", "支持达人筛选、合作邀约、样品申请流程和达人表现跟踪。"],
      ["megaphone", "TikTok Ads 自动化", "帮助商家管理广告计划、下载广告报表、识别低效计划并生成优化建议。"],
      ["chart", "数据报表自动化", "自动生成销售额、订单、退款、广告花费、ROI、ACOS、毛利和净利等日报、周报、月报。"],
      ["shield", "安全与合规", "仅使用商家授权数据，保护访问凭证，记录关键操作，并支持数据删除请求。"],
    ],
    responsibleTitle: "为负责任的自动化而设计。",
    responsibleDesc:
      "平台围绕商家授权、人工确认、数据最小化和审计日志进行设计。我们不会出售商家或客户数据，仅使用经授权的 TikTok Shop 和 TikTok Ads 数据来提供用户请求的 SaaS 服务。",
    dataPrinciples: "数据保护原则",
    principles: ["HTTPS/TLS 加密传输", "敏感凭证加密存储", "基于角色的权限控制", "支持商家数据删除请求"],
    footerDesc: "TikTok Shop 与 TikTok Ads SaaS 自动化平台。",
    loginTitle: "登录",
    loginDesc: "仅向已批准的商家和合作伙伴开放访问。",
    emailPlaceholder: "邮箱",
    passwordPlaceholder: "密码",
    signIn: "登录",
    loginNote: "如需账号开通、入驻或演示，请联系",
    contactTitle: "联系我们",
    contactDesc: "如需产品支持、隐私请求、数据删除、商务合作或 TikTok Shop / TikTok Ads 集成咨询，请通过邮箱联系我们。",
    supportEmail: "支持邮箱",
    contactCards: [
      ["产品支持", "关于 SaaS 功能、入驻和使用的问题。"],
      ["隐私请求", "数据访问、更正、删除或店铺解绑请求。"],
      ["商务合作", "合作、平台集成和商业咨询。"],
    ],
    callbackTitle: "TikTok Ads 授权回调",
    callbackDesc:
      "此页面用于接收 TikTok for Business OAuth 授权结果。授权完成后，系统会处理授权结果，并为已批准的商家连接广告账户。",
    callbackStatus: "回调状态",
    callbackReady: "当前未检测到授权 code。此页面已准备好接收 TikTok Ads OAuth 回调请求。",
    callbackSuccess: "已收到授权 code。后端服务可以继续完成账户连接。",
    callbackError: "授权返回错误：",
    callbackSupport: "如需账户或集成支持，请联系",
    updated: "最后更新",
    privacyTitle: "隐私政策",
    termsTitle: "服务条款",
    privacyIntro: "Xopengen 为 TikTok Shop 商家、服务商和跨境电商团队提供 SaaS 工具。本隐私政策说明我们收集哪些信息、如何使用信息以及用户如何联系我们处理隐私请求。",
    privacySections: [
      ["1. 我们收集的信息", "我们可能收集账号信息，例如姓名、邮箱、登录信息、公司或项目信息以及支持沟通记录。当商家连接 TikTok Shop 或 TikTok Ads 账号后，我们可能处理经授权的店铺信息、商品数据、订单数据、物流数据、达人合作数据、广告数据、报表数据、API 日志和操作日志。"],
      ["2. 信息使用方式", "我们使用相关信息来提供商品上架自动化、订单同步、物流跟踪、达人协作、TikTok Ads 报表、经营分析、客户支持、系统安全、故障排查和合规相关功能。"],
      ["3. TikTok Shop 与 TikTok Ads 数据", "我们仅在商家通过相关平台授权后访问 TikTok Shop 或 TikTok Ads 数据。我们仅将授权数据用于提供商家请求的服务，不会在未经授权的情况下访问商家账号。"],
      ["4. 数据共享", "我们不会出售商家数据、客户数据或 TikTok 平台数据。仅在提供服务所必需的情况下，我们可能与云服务、TikTok API、物流或 ERP 系统、AI 服务、邮件服务和通知服务提供商共享有限信息。"],
      ["5. 数据安全", "我们使用 HTTPS/TLS 传输数据，保护敏感凭证，采用基于角色的权限控制，记录关键操作日志，并遵循最小权限原则限制数据访问。"],
      ["6. 数据保留与删除", "我们仅在提供服务、满足法律要求、解决争议或维护安全日志所必需的期限内保留数据。商家可联系我们请求删除账号、解绑店铺或删除相关数据。"],
      ["7. 用户权利", "根据适用法律，用户可以请求访问、更正、删除或限制处理其个人数据。我们会按照适用法律回应合理请求。"],
      ["8. 联系我们", "如有隐私问题或数据删除请求，请联系"],
    ],
    termsIntro: "本服务条款适用于对 Xopengen 的访问和使用。使用我们的服务即表示您同意本条款。",
    termsSections: [
      ["1. 服务说明", "Xopengen 为 TikTok Shop 商家和广告主提供 SaaS 工具，包括商品上架自动化、订单同步、物流跟踪、达人协作、广告报表、广告自动化支持和经营分析。"],
      ["2. 账号注册", "用户必须提供准确的注册信息，并负责维护账号凭证安全。用户对其账号下发生的活动负责。"],
      ["3. 商家授权", "用户在使用相关功能前，必须授权访问 TikTok Shop、TikTok Ads 或其他连接的第三方账号。用户可在支持的情况下随时断开授权。"],
      ["4. 可接受使用", "用户不得将服务用于违法活动、垃圾信息、未经授权的数据抓取、平台滥用、虚假订单、误导性商品、侵权商品、违禁商品，或任何违反 TikTok 政策及适用法律的行为。"],
      ["5. 用户内容与商品数据", "用户对通过本服务上传、导入、生成或发布的商品信息、图片、视频、描述、广告和其他内容的准确性、合法性和权属负责。"],
      ["6. 第三方平台", "我们的服务可能集成 TikTok Shop、TikTok Business API、物流服务商、ERP 系统、AI 服务商和其他第三方服务。用户必须遵守相关平台的条款和政策。"],
      ["7. 服务可用性", "我们会合理努力保持服务可用，但不保证服务始终不中断、无错误或持续可用。"],
      ["8. 责任限制", "在法律允许的最大范围内，我们不对间接损失、账号处罚、平台暂停、利润损失、业务中断，或由第三方平台变更、误用、用户提供信息不准确导致的问题承担责任。"],
      ["9. 暂停与终止", "如果用户违反本条款、造成安全风险、滥用自动化功能或违反平台及法律要求，我们可以暂停或终止其访问权限。"],
      ["10. 联系方式", "如需支持或法律相关咨询，请联系"],
    ],
  },
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
    shield: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>,
    chart: <svg {...common}><path d="M3 3v18h18" /><path d="M7 16V9" /><path d="M12 16V5" /><path d="M17 16v-3" /></svg>,
    package: <svg {...common}><path d="m16.5 9.4-9-5.19" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="M3.29 7 12 12l8.71-5" /><path d="M12 22V12" /><path d="M17 14h-4" /><path d="M15 12v4" /></svg>,
    truck: <svg {...common}><path d="M10 17h4V5H2v12h3" /><path d="M14 17h1" /><path d="M19 17h3v-6l-3-4h-5" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>,
    megaphone: <svg {...common}><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>,
    users: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    mail: <svg {...common}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></svg>,
    check: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>,
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
    globe: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></svg>,
    lock: <svg {...common}><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    file: <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>,
    menu: <svg {...common}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>,
    x: <svg {...common}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
  };

  return icons[name] || icons.check;
}

function NavButtonList({ nav, page, onNavigate }) {
  return (
    <>
      {nav.map(([key, label]) => (
        <button key={key} onClick={() => onNavigate(key)} className={`rounded-full px-4 py-2 text-sm transition ${page === key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
          {label}
        </button>
      ))}
    </>
  );
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="flex rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm">
      <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 font-semibold transition ${lang === "en" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>EN</button>
      <button onClick={() => setLang("zh")} className={`rounded-full px-3 py-1.5 font-semibold transition ${lang === "zh" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>中文</button>
    </div>
  );
}

function Header({ page, setPage, lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const nav = [["home", t.nav.home], ["privacy", t.nav.privacy], ["terms", t.nav.terms], ["contact", t.nav.contact]];

  const goToPage = (key) => {
    const path = ROUTES[key] || "/";
    window.history.pushState({}, "", path);
    setPage(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => goToPage("home")} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm"><Icon name="globe" size={21} /></div>
          <div className="text-left"><div className="text-lg font-bold tracking-tight text-slate-950">{COMPANY.name}</div><div className="text-xs text-slate-500">{t.subtitle}</div></div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          <NavButtonList nav={nav} page={page} onNavigate={goToPage} />
          <LanguageSwitch lang={lang} setLang={setLang} />
          <button onClick={() => goToPage("login")} className="ml-2 rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700">{t.nav.login}</button>
        </nav>

        <button onClick={() => setOpen(!open)} className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden" aria-label="Toggle menu"><Icon name={open ? "x" : "menu"} /></button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden"><div className="flex flex-col gap-2"><NavButtonList nav={nav} page={page} onNavigate={goToPage} /><LanguageSwitch lang={lang} setLang={setLang} /><button onClick={() => goToPage("login")} className="rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white">{t.nav.login}</button></div></div>
      )}
    </header>
  );
}

function Home({ setPage, t }) {
  const stats = useMemo(() => t.stats, [t]);
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"><Icon name="shield" size={16} /> {t.badge}</div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroDesc}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={() => setPage("contact")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-slate-800">{t.contactUs} <Icon name="arrow" size={18} /></button><button onClick={() => setPage("privacy")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50">{t.viewPrivacy}</button></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-teal-100/60 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4"><div><div className="text-sm text-slate-500">{t.dashboard}</div><div className="text-xl font-bold text-slate-950">{t.storePerformance}</div></div><div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{t.online}</div></div>
              <div className="grid gap-4 sm:grid-cols-2">{stats.map(([name, value, sub]) => <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="text-sm text-slate-500">{name}</div><div className="mt-2 text-2xl font-bold text-slate-950">{value}</div><div className="mt-1 text-sm text-teal-700">{sub}</div></div>)}</div>
              <div className="mt-5 rounded-2xl border border-slate-200 p-5"><div className="mb-3 flex items-center justify-between"><div className="font-semibold text-slate-900">{t.recentWorkflow}</div><div className="text-sm text-slate-500">{t.aiAssisted}</div></div>{t.workflowItems.map((item) => <div key={item} className="flex items-start gap-3 py-2 text-sm text-slate-600"><Icon name="check" className="mt-0.5 text-teal-600" size={16} /> {item}</div>)}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16"><div className="max-w-3xl"><h2 className="text-3xl font-bold tracking-tight text-slate-950">{t.whatWeProvide}</h2><p className="mt-4 text-slate-600">{t.whatWeProvideDesc}</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.features.map(([icon, title, desc]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon name={icon} size={24} /></div><h3 className="text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{desc}</p></div>)}</div></section>

      <section className="bg-slate-950 px-5 py-16 text-white"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3"><div className="lg:col-span-2"><h2 className="text-3xl font-bold">{t.responsibleTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-300">{t.responsibleDesc}</p></div><div className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="flex items-center gap-3 font-semibold"><Icon name="lock" className="text-teal-300" /> {t.dataPrinciples}</div><ul className="mt-4 space-y-3 text-sm text-slate-300">{t.principles.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    </main>
  );
}

function PrivacyPolicy({ t }) {
  return <LegalPage title={t.privacyTitle} iconName="shield" updatedAt={COMPANY.updatedAt} t={t}><p>{t.privacyIntro}</p>{t.privacySections.map(([title, text]) => <React.Fragment key={title}><h3>{title}</h3><p>{text} {title.includes("8") || title.includes("联系") ? <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> : null}</p></React.Fragment>)}</LegalPage>;
}

function TermsOfService({ t }) {
  return <LegalPage title={t.termsTitle} iconName="file" updatedAt={COMPANY.updatedAt} t={t}><p>{t.termsIntro}</p>{t.termsSections.map(([title, text]) => <React.Fragment key={title}><h3>{title}</h3><p>{text} {title.includes("10") || title.includes("联系方式") ? <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> : null}</p></React.Fragment>)}</LegalPage>;
}

function Contact({ t }) {
  return <main className="mx-auto max-w-4xl px-5 py-16"><div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon name="mail" size={28} /></div><h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">{t.contactTitle}</h1><p className="mt-4 leading-8 text-slate-600">{t.contactDesc}</p><div className="mt-8 rounded-2xl bg-slate-50 p-6"><div className="text-sm font-medium text-slate-500">{t.supportEmail}</div><a className="mt-2 block text-xl font-bold text-teal-700" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div><div className="mt-8 grid gap-4 md:grid-cols-3">{t.contactCards.map(([title, text]) => <InfoCard key={title} title={title} text={text} />)}</div></div></main>;
}

function Login({ t }) {
  return <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-16"><div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><h1 className="text-3xl font-bold tracking-tight text-slate-950">{t.loginTitle}</h1><p className="mt-3 text-slate-600">{t.loginDesc}</p><div className="mt-8 space-y-4"><input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100" placeholder={t.emailPlaceholder} /><input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100" placeholder={t.passwordPlaceholder} type="password" /><button className="w-full rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800">{t.signIn}</button></div><p className="mt-5 text-sm text-slate-500">{t.loginNote} {COMPANY.email}.</p></div></main>;
}

function TikTokAdsCallback({ t }) {
  const query = typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const code = query.get("code");
  const state = query.get("state");
  const error = query.get("error") || query.get("error_description");
  return <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-16"><div className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon name="shield" size={28} /></div><h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">{t.callbackTitle}</h1><p className="mt-4 leading-8 text-slate-600">{t.callbackDesc}</p><div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="font-semibold text-slate-950">{t.callbackStatus}</div>{error ? <p className="mt-2 text-sm leading-6 text-red-600">{t.callbackError} {error}</p> : code ? <p className="mt-2 text-sm leading-6 text-teal-700">{t.callbackSuccess}</p> : <p className="mt-2 text-sm leading-6 text-slate-600">{t.callbackReady}</p>}{state && <p className="mt-2 break-all text-xs text-slate-500">State: {state}</p>}</div><p className="mt-6 text-sm text-slate-500">{t.callbackSupport} {COMPANY.email}.</p></div></main>;
}

function InfoCard({ title, text }) {
  return <div className="rounded-2xl border border-slate-200 p-5"><div className="font-bold text-slate-950">{title}</div><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>;
}

function LegalPage({ title, iconName, updatedAt, children, t }) {
  return <main className="mx-auto max-w-4xl px-5 py-16"><div className="mb-8 flex items-center gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon name={iconName} size={28} /></div><div><h1 className="text-4xl font-bold tracking-tight text-slate-950">{title}</h1><p className="mt-1 text-sm text-slate-500">{t.updated}: {updatedAt}</p></div></div><article className="prose prose-slate max-w-none rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm prose-h3:mt-8 prose-h3:text-xl prose-p:leading-8 prose-a:text-teal-700">{children}</article></main>;
}

function Footer({ setPage, t }) {
  const goToPage = (key) => { const path = ROUTES[key] || "/"; window.history.pushState({}, "", path); setPage(key); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between"><div><div className="font-bold text-slate-950">{COMPANY.name}</div><div className="mt-1 text-sm text-slate-500">{t.footerDesc}</div></div><div className="flex flex-wrap gap-3 text-sm text-slate-600"><button onClick={() => goToPage("privacy")} className="hover:text-slate-950">{t.nav.privacy}</button><span>/</span><button onClick={() => goToPage("terms")} className="hover:text-slate-950">{t.nav.terms}</button><span>/</span><button onClick={() => goToPage("contact")} className="hover:text-slate-950">{t.nav.contact}</button></div></div></footer>;
}

function runSmokeTests() {
  console.assert(COMPANY.email.includes("@"), "COMPANY.email should be an email address");
  console.assert(isValidPage("home"), "home should be a valid page");
  console.assert(isValidPage("tiktokAdsCallback"), "callback should be a valid page");
  console.assert(!isValidPage("unknown"), "unknown should not be a valid page");
  console.assert(pageFromPath("/") === "home", "Root path should resolve to home");
  console.assert(pageFromPath("/privacy-policy") === "privacy", "Privacy path should resolve to privacy");
  console.assert(pageFromPath("/terms-of-service") === "terms", "Terms path should resolve to terms");
  console.assert(pageFromPath("/auth/tiktok-ads/callback") === "tiktokAdsCallback", "TikTok Ads callback path should resolve to callback page");
  console.assert(i18n.en.features.length === 6 && i18n.zh.features.length === 6, "Both languages should have 6 features");
}

if (typeof window !== "undefined") runSmokeTests();

export default function App() {
  const [page, setPage] = useState(() => (typeof window === "undefined" ? "home" : pageFromPath(window.location.pathname)));
  const [lang, setLangState] = useState(() => (typeof window === "undefined" ? "en" : localStorage.getItem("xopengen_lang") || "en"));
  const t = i18n[lang] || i18n.en;

  const setLang = (nextLang) => {
    setLangState(nextLang);
    localStorage.setItem("xopengen_lang", nextLang);
  };

  React.useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const render = () => {
    if (page === "privacy") return <PrivacyPolicy t={t} />;
    if (page === "terms") return <TermsOfService t={t} />;
    if (page === "contact") return <Contact t={t} />;
    if (page === "login") return <Login t={t} />;
    if (page === "tiktokAdsCallback") return <TikTokAdsCallback t={t} />;
    return <Home setPage={setPage} t={t} />;
  };

  return <div className="min-h-screen bg-white font-sans text-slate-800"><Header page={page} setPage={setPage} lang={lang} setLang={setLang} t={t} />{render()}<Footer setPage={setPage} t={t} /></div>;
}
