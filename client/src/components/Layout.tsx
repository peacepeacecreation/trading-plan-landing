import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";
import ScrollIndicator from "./ScrollIndicator";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollNavigation();
  
  return (
    <div className="min-h-screen relative noise-texture overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_206_1303)">
                  <path d="M12.1085 17.7465C12.1196 17.7465 12.1252 17.7465 12.1299 17.7463C12.233 17.7414 12.3154 17.659 12.3203 17.5559C12.3205 17.5512 12.3205 17.5457 12.3205 17.5345V5.41193C12.3205 5.33704 12.3205 5.2996 12.32 5.29252C12.3074 5.115 12.1219 5.03898 11.9883 5.15658C11.983 5.16127 11.9537 5.19097 11.8952 5.25036C11.429 5.72356 10.5946 6.43179 9.46751 6.83361C9.37653 6.86604 9.31396 6.95128 9.31396 7.0479V17.5345C9.31396 17.5457 9.31396 17.5512 9.31419 17.5559C9.31905 17.659 9.4014 17.7414 9.50445 17.7463C9.50915 17.7465 9.51478 17.7465 9.52595 17.7465H12.1085Z" fill="black"/>
                  <path d="M10.8307 4.66035L4.58425 4.66035C4.57311 4.66035 4.56754 4.66035 4.56283 4.66057C4.45978 4.66543 4.37734 4.74788 4.37248 4.85093C4.37225 4.85564 4.37225 4.86121 4.37225 4.87235V7.88236C4.37225 8.32769 4.37225 8.55035 4.37287 8.55821C4.39006 8.77588 4.61586 8.83534 4.73802 8.65436C4.74243 8.64783 4.85898 8.44186 5.09208 8.02993C5.34356 7.58552 5.67296 7.10854 6.09822 6.6654C8.32527 4.49326 10.8307 4.66035 10.8307 4.66035Z" fill="black"/>
                  <path d="M16.7969 8.37878C16.9505 8.67062 17.0272 8.81654 17.0315 8.82328C17.1458 9.00393 17.3829 8.94537 17.3999 8.73229C17.4005 8.72434 17.4005 8.56838 17.4005 8.25647V4.87235C17.4005 4.86121 17.4005 4.85564 17.4003 4.85093C17.3954 4.74788 17.313 4.66543 17.2099 4.66057C17.2052 4.66035 17.1997 4.66035 17.1885 4.66035H10.8307C10.8307 4.66035 13.6145 4.60465 15.5632 6.6654C16.1037 7.20611 16.5076 7.82885 16.7969 8.37878Z" fill="black"/>
                  <path d="M12.5084 17.7101C12.4907 17.7145 12.4818 17.7167 12.478 17.7178C12.3903 17.7435 12.3379 17.8105 12.3343 17.9019C12.3341 17.9058 12.3341 17.9132 12.3341 17.928V22.0486C12.3341 22.0533 12.3341 22.0557 12.3343 22.0606C12.3394 22.1633 12.4353 22.2528 12.5382 22.2507C12.5431 22.2506 12.5427 22.2506 12.5429 22.2506C13.4083 22.1903 16.8089 21.7328 19.7938 18.2652C21.8321 15.935 21.9237 12.3658 21.9137 11.4879C21.9136 11.4831 21.9136 11.4807 21.9133 11.476C21.9075 11.3768 21.8223 11.3006 21.7231 11.3064C21.7184 11.3066 21.716 11.3066 21.7111 11.3069H12.5429C12.5382 11.3069 12.5358 11.3069 12.5311 11.3072C12.4319 11.3128 12.3555 11.3979 12.3611 11.4971C12.3613 11.502 12.3613 11.5044 12.3616 11.5093V17.928C12.3616 17.9357 12.3616 17.9395 12.3621 17.9434C12.367 18.0428 12.4522 18.119 12.5516 18.1141C12.5555 18.1139 12.5593 18.1137 12.567 18.1133L12.5084 17.7101Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_206_1303">
                    <rect width="25" height="25" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
              Pricing
            </button>
          </div>
          {/* Language Selector */}
          <div className="text-sm font-medium text-white">
            EN
          </div>
        </div>
      </header>



      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col relative">
        <div className="flex-1 relative z-10">
          {children}
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
}
