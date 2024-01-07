export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: { duration: 0.35 },
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.35 },
    },
};

const transition = {
    duration: 1,
    ease: [0.75, 0, 0.25, 1],
};

export const height = {
    initial: {
        height: 0,
    },
    enter: {
        height: "auto",
        transition,
    },
    exit: {
        height: 0,
        transition,
    },
};

export const blur = {
    initial: {
        opacity: 1,
        filter: "blur(0px)",
    },
    open: {
        opacity: 0.5,
        filter: "blur(4px)",
        transition: { duration: 0.3 },
    },
    closed: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.3 },
    },
};

export const background = {
    initial: {
        height: 0,
    },
    open: {
        height: "100vh",
        transition,
    },
    closed: {
        height: 0,
        transition,
    },
};