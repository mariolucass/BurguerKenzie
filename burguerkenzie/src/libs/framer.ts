export const animateHiddenUl = {
  clipPath: "inset(10% 50% 90% 50% round 10px)",
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

export const animateShownUl = {
  clipPath: "inset(0% 0% 0% 0% round 10px)",
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

export const animateHiddenLi = {
  opacity: 0,
  scale: 0.3,
  filter: "blur(20px)",
};

export const animateShownLi = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
};

export const animateShownPresence = { y: 0, opacity: 1 };
export const animateTransitionPresence = {
  duration: 1.2,
  ease: [0.6, -0.05, 0.01, 0.99],
};
export const animateInitialPresence = { y: -20, opacity: 0 };

export const hoverButton = {
  scale: 0.95,
};

export const tapButton = { scale: 0.85 };

export const animateShownItens = { opacity: 1, scale: 1 };
export const animateHiddenItens = {
  opacity: 0,
  scale: 0.75,
};
export const animateTransitionItens = {
  duration: 1.4,
  ease: [0.6, -0.05, 0.01, 0.99],
};

export const ulVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.9,
    },
  },
};

export const liVariants = {
  hidden: { y: 400, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      delay: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
