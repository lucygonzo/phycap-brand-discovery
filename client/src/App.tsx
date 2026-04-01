import { Router, Route, Switch } from "wouter";
import { NavigationProvider } from "./contexts/NavigationContext";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import BrandGuide from "./pages/BrandGuide";
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
          <Route component={NotFound} />
        </Switch>
        <Toaster position="bottom-right" />
      </NavigationProvider>
    </Router>
  );
}
