import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
function ProfilePanel() {
    const [showPanels, setShowPanels] = useState(false);

  // Animation variants
  const panelVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { x: "-100%", transition: { duration: 0.5, ease: "easeIn" } }
  };

  const rightPanelVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.5, ease: "easeIn" } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Add this button somewhere in your component */}
      <button 
        onClick={() => setShowPanels(!showPanels)}
        className="fixed top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg z-50"
      >
        Toggle Panels
      </button>

      <AnimatePresence>
        {showPanels && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowPanels(false)}
          >
            <div className="flex justify-center items-center h-full">
              {/* Left Panel */}
              <motion.div
                key="left-panel"
                variants={panelVariants}
                className="h-full w-1/2 bg-gray-800 p-8 overflow-y-auto"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Left Panel Title
                </h2>
                <p className="text-gray-300">
                  This is the left panel content. You can add any content here.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </motion.div>

              {/* Right Panel */}
              <motion.div
                key="right-panel"
                variants={rightPanelVariants}
                className="h-full w-1/2 bg-gray-800 p-8 overflow-y-auto"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Right Panel Title
                </h2>
                <p className="text-gray-300">
                  This is the right panel content. You can add any content here.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of your existing code */}
    </div>
  )
}

export default ProfilePanel