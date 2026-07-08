import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import EmptyState from "./EmptyState";

export default function PortfolioGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <div id="portfolio-grid-container" className="w-full">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <PortfolioCard project={project} />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
