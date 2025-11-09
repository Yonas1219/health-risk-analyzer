"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { ROUTES } from "../constants";
import Button from "../components/ui/Button";

export default function Processing() {
  const [progress, setProgress] = useState(0);
  const [stepProgress, setStepProgress] = useState(33);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const router = useRouter();

  const steps = [
    { id: 1, text: "Collecting data", icon: "✓" },
    { id: 2, text: "Analyzing symptoms", icon: "⏳" },
    { id: 3, text: "Evaluating risk level", icon: "⏳" },
    { id: 4, text: "Generating results", icon: "⏳" },
  ];

  useEffect(() => {
    // Animate step progress bar from 33% to 66% (Step 2 of 3)
    setStepProgress(33); // Start from 33% (Step 1 completion)
    const stepProgressInterval = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 66) {
          clearInterval(stepProgressInterval);
          return 66;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(stepProgressInterval);
  }, []);

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
    router.push(ROUTES.RESULTS);
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
          {/* Progress Stepper */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary-DEFAULT">
                Step 2 of 3
              </span>
              <span className="text-sm text-gray-500">AI Analysis</span>
            </div>

            {/* Progress Stepper with Connecting Line */}
            <div className="relative flex items-center justify-between mb-2">
              {/* Step 1 - Completed */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary-DEFAULT border-2 border-primary-DEFAULT flex items-center justify-center shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs text-primary-DEFAULT font-medium mt-1">
                  Input
                </span>
              </div>

              {/* Connecting Line - Completed */}
              <div className="flex-1 h-0.5 bg-primary-DEFAULT mx-2"></div>

              {/* Step 2 - Active */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary-DEFAULT border-2 border-primary-DEFAULT flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <span className="text-xs text-primary-DEFAULT font-medium mt-1">
                  Analyzing
                </span>
              </div>

              {/* Connecting Line - Pending */}
              <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>

              {/* Step 3 - Pending */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-bold">3</span>
                </div>
                <span className="text-xs text-gray-500 font-medium mt-1">
                  Results
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 relative overflow-hidden">
              <motion.div
                className="h-2 rounded-full"
                style={{ backgroundColor: "#10B981" }}
                initial={{ width: "33%" }}
                animate={{ width: `${stepProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              ></motion.div>
            </div>
            <motion.p
              className="text-sm text-gray-600 text-center font-medium mt-2"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {Math.round(stepProgress)}%
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg"
          >
            {/* Animated Spinner - Enhanced Interactive Design */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                {/* Outer Glow Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Outer Rotating Ring - Emerald */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "4px solid transparent",
                    borderTopColor: "#10B981",
                    borderRightColor: "#10B981",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Middle Rotating Ring - Lime (Counter-clockwise) */}
                <motion.div
                  className="absolute inset-2 sm:inset-3 rounded-full"
                  style={{
                    border: "3px solid transparent",
                    borderBottomColor: "#84CC16",
                    borderLeftColor: "#84CC16",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner Rotating Ring - Light Green */}
                <motion.div
                  className="absolute inset-4 sm:inset-5 md:inset-6 rounded-full"
                  style={{
                    border: "2px solid transparent",
                    borderTopColor: "#34D399",
                    borderRightColor: "#34D399",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Pulsing Center Dot */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #10B981 0%, #84CC16 100%)",
                      boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                    }}
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      boxShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.6)",
                        "0 0 30px rgba(16, 185, 129, 0.9)",
                        "0 0 20px rgba(16, 185, 129, 0.6)",
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Orbiting Particles - Using rotating containers */}
                {[0, 1, 2].map((index) => {
                  const radius = index === 0 ? 40 : index === 1 ? 50 : 60;
                  const initialAngle = index * 120; // 120 degrees apart
                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        marginTop: `-${radius}px`,
                        marginLeft: `-${radius}px`,
                        transform: `rotate(${initialAngle}deg)`,
                      }}
                      animate={{
                        rotate: initialAngle + 360,
                      }}
                      transition={{
                        duration: index === 0 ? 2 : index === 1 ? 2.5 : 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        className="absolute top-0 left-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full -translate-x-1/2"
                        style={{
                          background:
                            index === 0
                              ? "#10B981"
                              : index === 1
                              ? "#84CC16"
                              : "#34D399",
                          boxShadow: `0 0 8px ${
                            index === 0
                              ? "rgba(16, 185, 129, 0.8)"
                              : index === 1
                              ? "rgba(132, 204, 22, 0.8)"
                              : "rgba(52, 211, 153, 0.8)"
                          }`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  );
                })}
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
                  className="h-3 sm:h-4 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT via-accent-DEFAULT to-primary-DEFAULT"
                    animate={{
                      backgroundPosition: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  />
                </motion.div>
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

            {/* Navigation Buttons - Animated entrance */}
            <AnimatePresence>
              {progress >= 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <Button
                    onClick={handleViewResults}
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    See Result
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
