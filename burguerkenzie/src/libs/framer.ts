export const animateHiddenUl = {
  clipPath: "inset(10% 50% 90% 50% round 10px)",
  bounce: 0,
  duration: 0.5,
};
export const animateShownUl = {
  clipPath: "inset(0% 0% 0% 0% round 10px)",
  bounce: 0,
  duration: 0.5,
};
export const animateHiddenLi = {
  opacity: 0,
  scale: 0.3,
  filter: "blur(5px)",
};
export const animateShownLi = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
};
export const animateShownBox = { opacity: 1, scale: 1 };
export const animateHiddenBox = {
  opacity: 0,
  scale: 0.75,
};
export const animateTransitionBox = {
  duration: 1.4,
  ease: [0.6, -0.05, 0.01, 0.99],
};
export const animateShownCard = {
  opacity: 1,
  scale: 1,
  transition: {
    duration: 1.4,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
};
export const animateHiddenCard = {
  opacity: 0,
  scale: 0.75,
};
