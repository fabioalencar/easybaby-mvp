let easing = [0.175, 0.85, 0.42, 0.96];

export const variants = {
  exit: { y: 0, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};
