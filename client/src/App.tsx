import { Router, Route, Switch } from "wouter";
import { NavigationProvider } from "./contexts/NavigationContext";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import BrandGuide from "./pages/BrandGuide";
import PaulSlosarPage from "./pages/gp/PaulSlosarPage";
import VipulKellaPage from "./pages/gp/VipulKellaPage";
import RobinNoblePage from "./pages/gp/RobinNoblePage";
import TimMartensPage from "./pages/gp/TimMartensPage";
import NotFound from "./pages/NotFound";

// Support GitHub Pages subdirectory deployment
const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

export default function App() {
  return (
    <Router base={base}>
      <NavigationProvider>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/brand-guide" component={BrandGuide} />
          <Route path="/gp/paul-slosar" component={PaulSlosarPage} />
          <Route path="/gp/vipul-kella" component={VipulKellaPage} />
          <Route path="/gp/robin-noble" component={RobinNoblePage} />
          <Route path="/gp/tim-martens" component={TimMartensPage} />
          <Route component={NotFound} />
        </Switch>
        <Toaster position="bottom-right" />
      </NavigationProvider>
    </Router>
  );
}
