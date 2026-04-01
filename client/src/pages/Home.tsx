import { useNavigation, type TabId } from "../contexts/NavigationContext";
import Layout from "../components/Layout";
import DashboardTab from "./tabs/DashboardTab";
import IdentityTab from "./tabs/IdentityTab";
import DesignSystemTab from "./tabs/DesignSystemTab";
import VerbalTab from "./tabs/VerbalTab";
import GapTab from "./tabs/GapTab";
import AudienceJourneyTab from "./tabs/AudienceJourneyTab";
import CompetitiveTab from "./tabs/CompetitiveTab";
import ThesisPortfolioTab from "./tabs/ThesisPortfolioTab";
import GTMDigitalTab from "./tabs/GTMDigitalTab";
import GPContentTab from "./tabs/GPContentTab";
import RevenueTab from "./tabs/RevenueTab";
import ActionsDecisionsTab from "./tabs/ActionsDecisionsTab";
import ReportCardTab from "./tabs/ReportCardTab";

const tabComponents: Record<TabId, React.ComponentType> = {
  dashboard: DashboardTab,
  identity: IdentityTab,
  designsystem: DesignSystemTab,
  voice: VerbalTab,
  gaps: GapTab,
  audiencejourney: AudienceJourneyTab,
  competitive: CompetitiveTab,
  thesisportfolio: ThesisPortfolioTab,
  gtmdigital: GTMDigitalTab,
  gpcontent: GPContentTab,
  revenue: RevenueTab,
  actionsdecisions: ActionsDecisionsTab,
  reportcard: ReportCardTab,
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
