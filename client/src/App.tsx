import { Route, Switch } from "wouter";
import { NavigationProvider } from "./contexts/NavigationContext";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <NavigationProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Toaster position="bottom-right" />
    </NavigationProvider>
  );
}
