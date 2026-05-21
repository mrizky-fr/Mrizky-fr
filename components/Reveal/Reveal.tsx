import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Reveal.css';

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

type MotionDivComponent = React.ComponentType<Record<string, unknown>>;
type FramerMotionModule = {
    motion: {
        div: MotionDivComponent;
    };
    useReducedMotion: () => boolean;
};

const classNames = (...values: Array<string | false | null | undefined>) =>
    values.filter(Boolean).join(' ');

let framerLoadPromise: Promise<FramerMotionModule | null> | null = null;

const loadFramerMotion = () => {
    if (!framerLoadPromise) {
        const moduleName = 'framer-motion';

        framerLoadPromise = import(/* @vite-ignore */ moduleName)
            .then((module) => module as FramerMotionModule)
            .catch(() => null);
    }

    return framerLoadPromise;
};

const RevealFallback: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = () => setReduceMotion(mediaQuery.matches);

        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (reduceMotion) {
            setIsVisible(true);
            return;
        }

        const target = wrapperRef.current;
        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    setIsVisible(true);
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -6% 0px',
            },
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [reduceMotion]);

    const transitionDelay = `${Math.max(0, delay)}s`;

    return (
        <div
            ref={wrapperRef}
            className={classNames('reveal', isVisible && 'is-visible', className)}
            style={{ transitionDelay }}
        >
            {children}
        </div>
    );
};

const RevealWithFramer: React.FC<
    RevealProps & {
        MotionDiv: MotionDivComponent;
        useReducedMotionHook: FramerMotionModule['useReducedMotion'];
    }
> = ({ children, delay = 0, className, MotionDiv, useReducedMotionHook }) => {
    const reduceMotion = useReducedMotionHook();
    const safeDelay = Math.max(0, delay);

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12, margin: '0px 0px -6% 0px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: safeDelay }}
            className={className}
        >
            {children}
        </MotionDiv>
    );
};

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
    const [framerModule, setFramerModule] = useState<FramerMotionModule | null>(null);
    const [framerCheckDone, setFramerCheckDone] = useState(false);

    useEffect(() => {
        let isMounted = true;
        loadFramerMotion()
            .then((module) => {
                if (!isMounted) {
                    return;
                }
                setFramerModule(module);
            })
            .finally(() => {
                if (isMounted) {
                    setFramerCheckDone(true);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const fallback = useMemo(
        () => <RevealFallback delay={delay} className={className}>{children}</RevealFallback>,
        [children, className, delay],
    );

    if (!framerCheckDone) {
        return fallback;
    }

    if (!framerModule?.motion?.div || !framerModule.useReducedMotion) {
        return fallback;
    }

    return (
        <RevealWithFramer
            delay={delay}
            className={className}
            MotionDiv={framerModule.motion.div}
            useReducedMotionHook={framerModule.useReducedMotion}
        >
            {children}
        </RevealWithFramer>
    );
};

export default Reveal;
