import { useState } from "react";
import {
  BarChart3, Building2, AlertCircle, Fingerprint, Palette, MessageSquare,
  Target, Users, Swords, Route, Globe, Rocket, TrendingUp, DollarSign,
  Briefcase, CheckSquare, BookOpen, ClipboardCheck, Mic2, Menu, X, Moon, Sun,
  FileText,
} from "lucide-react";
import { Link } from "wouter";
import type { TabId } from "../contexts/NavigationContext";
import type { ReactNode } from "react";

const forest = "var(--phycap-forest)";
const gold = "var(--phycap-gold)";

interface NavItem {
  id: TabId;
  label: string;
  icon: ReactNode;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    label: "FOUNDATION",
    items: [
      { id: "overview", label: "Overview", icon: <BarChart3 size={16} /> },
      { id: "company", label: "Company", icon: <Building2 size={16} /> },
      { id: "gap", label: "Gap Analysis", icon: <AlertCircle size={16} /> },
    ],
  },
  {
    label: "BRAND",
    items: [
      { id: "identity", label: "Identity", icon: <Fingerprint size={16} /> },
      { id: "visual", label: "Visual", icon: <Palette size={16} /> },
      { id: "verbal", label: "Verbal", icon: <MessageSquare size={16} /> },
    ],
  },
  {
    label: "MARKET",
    items: [
      { id: "thesis", label: "Investment Thesis", icon: <Target size={16} /> },
      { id: "audience", label: "Audience", icon: <Users size={16} /> },
      { id: "competitive", label: "Competitive", icon: <Swords size={16} /> },
      { id: "journey", label: "Journey", icon: <Route size={16} /> },
    ],
  },
  {
    label: "BUSINESS",
    items: [
      { id: "digital", label: "Digital", icon: <Globe size={16} /> },
      { id: "gtm", label: "Go-to-Market", icon: <Rocket size={16} /> },
      { id: "product", label: "Strategy", icon: <TrendingUp size={16} /> },
      { id: "revenue", label: "Revenue", icon: <DollarSign size={16} /> },
      { id: "portfolio", label: "Portfolio", icon: <Briefcase size={16} /> },
    ],
  },
  {
    label: "WORKSPACE",
    items: [
      { id: "actions", label: "Actions", icon: <CheckSquare size={16} /> },
      { id: "decisions", label: "Decisions", icon: <BookOpen size={16} /> },
      { id: "reportcard", label: "Report Card", icon: <ClipboardCheck size={16} /> },
      { id: "gpcontent", label: "GP Content", icon: <Mic2 size={16} /> },
    ],
  },
];

interface LayoutProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  children: ReactNode;
}

export default function Layout({ activeTab, onTabChange, children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-56 flex-shrink-0 flex flex-col overflow-y-auto
          transition-transform duration-200
          lg:relative lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ background: forest, borderRight: "1px solid var(--sidebar-border)" }}
      >
        {/* Logo area */}
        <div className="px-4 py-5 flex items-center gap-3">
          <div
            className="w-8 h-8 rounded flex items-center justify-center display-font text-sm font-bold"
            style={{ background: gold, color: forest }}
          >
            PC
          </div>
          <div>
            <div className="display-font text-sm" style={{ color: "var(--sidebar-foreground)" }}>
              PhyCap
            </div>
            <div className="eyebrow" style={{ color: gold, fontSize: "8px" }}>
              BRAND HQ
            </div>
          </div>
        </div>

        {/* Nav sections */}
        <nav className="flex-1 px-2 pb-4">
          {navSections.map((section) => (
            <div key={section.label} className="mb-4">
              <div
                className="eyebrow px-3 py-1.5 mb-1"
                style={{ color: gold, fontSize: "9px" }}
              >
                {section.label}
              </div>
              {section.items.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setMobileOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-left text-[13px] transition-colors"
                    style={{
                      color: isActive ? gold : "var(--sidebar-foreground)",
                      background: isActive ? "oklch(0.28 0.03 163)" : "transparent",
                      opacity: isActive ? 1 : 0.7,
                      borderLeft: isActive ? `2px solid ${gold}` : "2px solid transparent",
                      fontWeight: isActive ? 500 : 400,
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}
          {/* Brand Guide link */}
          <div className="mb-4 mt-2 px-1">
            <div className="h-px mb-3" style={{ background: "var(--sidebar-border)" }} />
            <Link
              href="/brand-guide"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors"
              style={{
                color: gold,
                background: "oklch(0.77 0.07 72 / 0.08)",
                border: "1px solid oklch(0.77 0.07 72 / 0.20)",
              }}
            >
              <FileText size={16} />
              Brand Guide
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t" style={{ borderColor: "var(--sidebar-border)" }}>
          <div className="eyebrow" style={{ color: "var(--sidebar-foreground)", opacity: 0.4, fontSize: "8px" }}>
            Investing with Clinical Precision
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header
          className="h-12 flex items-center justify-between px-4 border-b flex-shrink-0"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-1.5 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "var(--foreground)" }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <span className="display-font text-sm" style={{ color: "var(--foreground)" }}>
              PhyCap Brand HQ
            </span>
            <span
              className="eyebrow px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.20 0.03 163 / 0.1)",
                color: forest,
                fontSize: "8px",
                border: `1px solid oklch(0.20 0.03 163 / 0.2)`,
              }}
            >
              FUND I
            </span>
          </div>
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-md"
            style={{ color: "var(--muted-foreground)" }}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
