import { useNavigation, type TabId } from "../contexts/NavigationContext";
import Layout from "../components/Layout";
import OverviewTab from "./tabs/OverviewTab";
import CompanyTab from "./tabs/CompanyTab";
import IdentityTab from "./tabs/IdentityTab";
import GapTab from "./tabs/GapTab";
import VisualTab from "./tabs/VisualTab";
import VerbalTab from "./tabs/VerbalTab";
import ThesisTab from "./tabs/ThesisTab";
import AudienceTab from "./tabs/AudienceTab";
import CompetitiveTab from "./tabs/CompetitiveTab";
import JourneyTab from "./tabs/JourneyTab";
import DigitalTab from "./tabs/DigitalTab";
import GTMTab from "./tabs/GTMTab";
import ProductTab from "./tabs/ProductTab";
import RevenueTab from "./tabs/RevenueTab";
import PortfolioTab from "./tabs/PortfolioTab";
import ActionsTab from "./tabs/ActionsTab";
import DecisionLogTab from "./tabs/DecisionLogTab";
import ReportCardTab from "./tabs/ReportCardTab";
import GPContentTab from "./tabs/GPContentTab";

const tabComponents: Record<TabId, React.ComponentType> = {
  overview: OverviewTab,
  company: CompanyTab,
  gap: GapTab,
  identity: IdentityTab,
  visual: VisualTab,
  verbal: VerbalTab,
  thesis: ThesisTab,
  audience: AudienceTab,
  competitive: CompetitiveTab,
  journey: JourneyTab,
  digital: DigitalTab,
  gtm: GTMTab,
  product: ProductTab,
  revenue: RevenueTab,
  portfolio: PortfolioTab,
  actions: ActionsTab,
  decisions: DecisionLogTab,
  reportcard: ReportCardTab,
  gpcontent: GPContentTab,
};

export default function Home() {
  const { activeTab, setActiveTab } = useNavigation();
  const ActiveComponent = tabComponents[activeTab];

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <div key={activeTab} className="tab-content-enter">
        <ActiveComponent />
      </div>
    </Layout>
  );
}
