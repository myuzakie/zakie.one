'use client'

import { motion, Variants } from 'framer-motion'

interface PlatformIconsProps {
    itemVariants?: Variants;
    className?: string;
}

interface PlatformIconProps {
    delay: number;
    className: string;
    children: React.ReactNode;
}

function PlatformIcon({ delay, className, children }: PlatformIconProps) {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay, duration: 0.6 }}
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 my-2 sm:my-3 md:my-4 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg relative z-10 ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function PlatformIcons({ className = '' }: PlatformIconsProps) {
    return (
        <div className={`flex flex-col items-center h-full justify-between mr-4 sm:mr-6 md:mr-8 relative ${className}`}>
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-8 sm:top-12 md:top-16 bottom-8 sm:bottom-12 md:bottom-16 w-0.5 bg-gray-300 z-0"></div>

            {/* Behance */}
            <PlatformIcon delay={0.2} className="bg-[#04011c]">
                <div className="relative w-fit p-2">
                    <svg width="fit-content" height="fit-content" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </PlatformIcon>

            {/* SourceTree */}
            <PlatformIcon delay={0.2} className="bg-[#04011c]">
                <div className="relative w-10 h-10 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <svg
                        viewBox="0 0 3000 3000"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <title>Figma Logo</title>
                        <desc />
                        <path fill="#0ACF83" d="M1083.333374,2750c230,0,416.666626-186.666748,416.666626-416.666748v-416.666626h-416.666626  c-230.000061,0-416.666687,186.666626-416.666687,416.666626S853.333313,2750,1083.333374,2750z" />
                        <path fill="#A259FF" d="M666.666687,1500c0-230,186.666626-416.666748,416.666687-416.666748H1500v833.333374  h-416.666626C853.333313,1916.666626,666.666687,1730,666.666687,1500z" />
                        <path fill="#F24E1E" d="M666.666687,666.666626C666.666687,436.666656,853.333313,250,1083.333374,250H1500  v833.333252h-416.666626C853.333313,1083.333252,666.666687,896.666626,666.666687,666.666626z" />
                        <path fill="#FF7262" d="M1500,250h416.666626c230.000122,0,416.666626,186.666656,416.666626,416.666626  s-186.666504,416.666626-416.666626,416.666626H1500V250z" />
                        <path fill="#1ABCFE" d="M2333.333252,1500c0,230-186.666504,416.666626-416.666626,416.666626S1500,1730,1500,1500  s186.666626-416.666748,416.666626-416.666748S2333.333252,1270,2333.333252,1500z" />
                    </svg>
                </div>
            </PlatformIcon>

            {/* Dribbble */}
            <PlatformIcon delay={0.2} className="bg-[#ed4a88]">
                <div className="relative w-10 h-10 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <svg fill="#fff" width="fit-content" height="fit-content" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>dribble</title>
                        <path d="M25.916 7.921c-1.881 2.234-4.289 3.965-7.035 5.009l-0.118 0.039c0.3 0.612 0.587 1.231 0.85 1.857 0.1 0.225 0.187 0.45 0.275 0.662 0.927-0.102 2.003-0.16 3.092-0.16 2.063 0 4.077 0.208 6.023 0.605l-0.193-0.033c-0.020-3.040-1.107-5.821-2.904-7.994l0.017 0.021zM13.001 3.569c1.595 2.15 3.176 4.6 4.598 7.151l0.178 0.347c2.712-0.908 4.989-2.511 6.694-4.6l0.021-0.026c-2.247-2.006-5.228-3.232-8.494-3.232-1.063 0-2.096 0.13-3.084 0.375l0.088-0.018zM3.46 13.395c4.219-0.022 8.295-0.59 12.176-1.636l-0.333 0.076c-1.652-2.899-3.222-5.318-4.912-7.644l0.163 0.236c-3.596 1.721-6.227 4.966-7.077 8.875l-0.015 0.085zM6.484 24.585c2.42-3.882 6.010-6.839 10.271-8.408l0.141-0.045c0.169-0.056 0.337-0.105 0.506-0.15-0.325-0.731-0.675-1.458-1.040-2.174-3.888 1.154-8.355 1.819-12.977 1.819-0.066 0-0.131-0-0.196-0l0.010 0-0.005 0.39c0 0.003 0 0.006 0 0.009 0 3.297 1.25 6.302 3.301 8.568l-0.010-0.011zM21.005 27.809c-0.682-3.699-1.63-6.957-2.863-10.070l0.126 0.361-0.082 0.025c-4.314 1.346-7.826 4.192-10.002 7.915l-0.045 0.083c2.145 1.688 4.885 2.707 7.863 2.707 1.805 0 3.522-0.374 5.078-1.049l-0.083 0.032zM28.646 18.052c-1.571-0.474-3.376-0.747-5.245-0.747-0.964 0-1.911 0.073-2.836 0.213l0.104-0.013c0.98 2.564 1.842 5.629 2.436 8.789l0.054 0.344c2.874-1.96 4.893-4.993 5.482-8.51l0.010-0.075zM16 30.996c0 0 0 0-0 0-8.282 0-14.996-6.714-14.996-14.996s6.714-14.996 14.996-14.996c8.282 0 14.996 6.714 14.996 14.996 0 0 0 0 0 0v0c-0.011 8.277-6.718 14.984-14.995 14.996h-0.001z" />
                    </svg>
                </div>
            </PlatformIcon>

            {/* Dice/Gaming */}
            <PlatformIcon delay={0.2} className="bg-[#04011c]">
                <div className="relative w-10 h-10 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <svg fill="#fff" width="fit-content" height="fit-content" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z" />
                        <path d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z" />
                        <path d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z" />
                    </svg>
                </div>
            </PlatformIcon>

            {/* Pinterest */}
            <PlatformIcon delay={0.2} className="bg-[#ab2c09]">
                <div className="relative w-10 h-10 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <svg fill="#fff" width="fit-content" height="fit-content" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>quora</title>
                        <path d="M18.167 26.807c-1.034 0.29-2.221 0.457-3.447 0.457-7.256 0-13.146-5.848-13.215-13.087l-0-0.007c0.052-7.283 5.967-13.166 13.257-13.166s13.206 5.884 13.257 13.163l0 0.005c0 0.031 0 0.067 0 0.103 0 4.118-1.952 7.78-4.982 10.111l-0.030 0.022c0.955 1.435 1.928 2.392 3.314 2.392 0.012 0 0.025 0 0.039 0 1.161 0 2.11-0.91 2.172-2.055l0-0.006h1.946c0.012 0.141 0.019 0.305 0.019 0.471 0 3.197-2.592 5.789-5.789 5.789-0.065 0-0.13-0.001-0.195-0.003l0.009 0c-2.824-0.018-5.251-1.7-6.35-4.115l-0.018-0.044zM16.922 24.374c-1.038-2.043-2.256-4.108-4.634-4.108-0.014-0-0.030-0-0.046-0-0.461 0-0.901 0.096-1.298 0.27l0.021-0.008-0.807-1.611c1.19-0.948 2.715-1.521 4.375-1.521 0.085 0 0.169 0.002 0.252 0.004l-0.012-0c0.061-0.002 0.132-0.003 0.204-0.003 2.53 0 4.735 1.395 5.887 3.458l0.018 0.034c0.724-1.784 1.144-3.853 1.144-6.020 0-0.245-0.005-0.489-0.016-0.731l0.001 0.034c0-6.976-2.179-10.556-7.275-10.556-5.021 0-7.194 3.58-7.194 10.556 0 6.939 2.173 10.483 7.194 10.483 0.036 0.001 0.078 0.001 0.12 0.001 0.736 0 1.447-0.103 2.121-0.295l-0.054 0.013z" />
                    </svg>
                </div>
            </PlatformIcon>
        </div>
    );
}
