import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';

const pages = ['/', '/ai-agent', '/commercial'];

export function useScrollNavigation() {
  const [, setLocation] = useLocation();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 800) return;
      
      if (isScrollingRef.current) return;
      
      const delta = e.deltaY;
      let newIndex = currentPageIndex;
      
      if (Math.abs(delta) > 30) { // Require significant scroll
        if (delta > 0 && currentPageIndex < pages.length - 1) {
          newIndex = currentPageIndex + 1;
        } else if (delta < 0 && currentPageIndex > 0) {
          newIndex = currentPageIndex - 1;
        }
      }
      
      if (newIndex !== currentPageIndex) {
        isScrollingRef.current = true;
        lastScrollTimeRef.current = now;
        
        setCurrentPageIndex(newIndex);
        setLocation(pages[newIndex]);
        
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1200);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentPageIndex < pages.length - 1) {
        e.preventDefault();
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          const newIndex = currentPageIndex + 1;
          setCurrentPageIndex(newIndex);
          setLocation(pages[newIndex]);
          setTimeout(() => { isScrollingRef.current = false; }, 1000);
        }
      } else if (e.key === 'ArrowUp' && currentPageIndex > 0) {
        e.preventDefault();
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          const newIndex = currentPageIndex - 1;
          setCurrentPageIndex(newIndex);
          setLocation(pages[newIndex]);
          setTimeout(() => { isScrollingRef.current = false; }, 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [currentPageIndex, setLocation]);

  // Update current page index when location changes programmatically
  useEffect(() => {
    const currentPath = window.location.pathname;
    const index = pages.indexOf(currentPath);
    if (index !== -1 && index !== currentPageIndex) {
      setCurrentPageIndex(index);
    }
  }, []);

  return { currentPageIndex, totalPages: pages.length };
}