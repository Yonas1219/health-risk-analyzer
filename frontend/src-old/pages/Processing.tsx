import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "../components/LanguageToggle";

const Processing: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const navigate = useNavigate();

  const steps = [
    { id: 1, text: "Collecting data", icon: "✓" },
    { id: 2, text: "Analyzing symptoms", icon: "⏳" },
    { id: 3, text: "Evaluating risk level", icon: "⏳" },
    { id: 4, text: "Generating results", icon: "⏳" },
  ];

  useEffect(() => {
    // Progress animation - Smooth and visible
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 150);

    // Step animation - Staggered completion
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return steps.length - 1;
        }
        const nextStep = prev + 1;
        // Mark previous step as completed
        setCompletedSteps((prevCompleted) => [...prevCompleted, prev]);
        return nextStep;
      });
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [steps.length]);

  const handleViewResults = () => {
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-background-DEFAULT flex flex-col">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-primary-light">
              TriageX
            </span>
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg"
          >
            {/* Animated Spinner */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <motion.div
                  className="absolute inset-0 border-4 border-primary-soft rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-primary-DEFAULT border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-accent-DEFAULT border-r-transparent border-b-transparent rounded-full opacity-50"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center"
            >
              Analyzing your health information...
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-center"
            >
              Please wait while we process your data and assess your risk level.
            </motion.p>

            {/* Animated Progress Bar */}
            <div className="mb-6 sm:mb-8">
              <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT h-3 sm:h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <motion.p
                key={progress}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-sm text-gray-500 text-center font-medium"
              >
                {progress}%
              </motion.p>
            </div>

            {/* Animated Processing Steps */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <AnimatePresence>
                {steps.map((step, index) => {
                  const isCompleted =
                    completedSteps.includes(index) || index < currentStep;
                  const isActive = index === currentStep && progress < 100;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all duration-500 ${
                        isCompleted
                          ? "bg-primary-soft border-l-4 border-primary-DEFAULT border-2 border-primary-DEFAULT shadow-sm"
                          : isActive
                          ? "bg-primary-soft/50 border-l-4 border-primary-DEFAULT border-2 border-primary-DEFAULT/50"
                          : "bg-gray-50 border-l-4 border-gray-200 border-2 border-gray-200"
                      }`}
                    >
                      <motion.div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl ${
                          isCompleted
                            ? "bg-primary-DEFAULT text-white border-2 border-primary-dark shadow-md"
                            : "bg-gray-300 text-gray-600 border-2 border-gray-400"
                        }`}
                        style={
                          isCompleted ? { backgroundColor: "#10B981" } : {}
                        }
                        animate={
                          isCompleted
                            ? { scale: [1, 1.2, 1], rotate: [0, 360] }
                            : isActive
                            ? { scale: [1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {isCompleted ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="text-xl sm:text-2xl font-black"
                          >
                            ✓
                          </motion.span>
                        ) : (
                          <span>{step.icon}</span>
                        )}
                      </motion.div>
                      <span
                        className={`font-medium text-sm sm:text-base flex-1 ${
                          isCompleted ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {step.text}
                      </span>
                      {isActive && (
                        <motion.div
                          className="ml-auto"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-DEFAULT rounded-full"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* View Results Button - Animated entrance */}
            <AnimatePresence>
              {progress >= 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <button
                    onClick={handleViewResults}
                    className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-primary-DEFAULT shadow-md hover:bg-primary-dark hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-primary-soft focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                    style={{ backgroundColor: "#10B981" }}
                  >
                    View Results
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-600 text-center">
            © 2025 TriageX. This tool is for educational and informational
            purposes only. Not intended to replace professional medical
            consultation, diagnosis, or treatment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Processing;
