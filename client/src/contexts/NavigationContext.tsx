import React, { createContext, useContext, useState, type ReactNode } from "react";

export type TabId =
  | "overview"
  | "company"
  | "gap"
  | "identity"
  | "visual"
  | "verbal"
  | "thesis"
  | "audience"
  | "competitive"
  | "journey"
  | "digital"
  | "gtm"
  | "product"
  | "revenue"
  | "portfolio"
  | "actions"
  | "decisions"
  | "reportcard"
  | "gpcontent";

interface NavigationContextType {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
