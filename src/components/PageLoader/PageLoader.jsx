import React from 'react';
import { SiReact } from 'react-icons/si';

const PageLoader = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex flex-col justify-center items-center gap-12">
            
                     

            {/* Content Section */}
            <div className="text-center space-y-6">
                {/* Main Title */}
                

                {/* Animated Progress Bars */}
                <div className="flex justify-center items-end gap-1.5 h-16">
                    {[...Array(7)].map((_, i) => (
                        <div
                            key={i}
                            className="w-4 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-t-lg shadow-lg animate-bounce"
                            style={{
                                height: `${24 + i * 8}px`,
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: '1.2s'
                            }}
                        ></div>
                    ))}
                </div>
                {/* Loading Text with Typewriter Effect */}
                <div className="space-y-4">
                    <div className="flex justify-center items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-slate-400 text-sm font-light">Loading assets</span>
                    </div>
                </div>
            </div>

            {/* Background Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Floating Orbs */}
                <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                
                {/* Small Particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* CSS for custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default PageLoader;