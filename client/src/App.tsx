import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Landing from "@/pages/landing";
import AIAgent from "@/pages/ai-agent";
import Commercial from "@/pages/commercial";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";

function Router() {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <Layout>
      <div 
        className={`transition-all duration-500 ease-in-out ${
          transitionStage === "fadeOut" 
            ? "opacity-0 transform translate-y-10" 
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <Switch location={displayLocation}>
          <Route path="/" component={Landing} />
          <Route path="/ai-agent" component={AIAgent} />
          <Route path="/commercial" component={Commercial} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
