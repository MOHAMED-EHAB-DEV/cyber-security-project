import {useLayoutEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'

const ProductDetailsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const featuresLeftRef = useRef<HTMLDivElement>(null);
    const featuresRightRef = useRef<HTMLDivElement>(null);
    const finalContentRef = useRef<HTMLDivElement>(null);

    const isMobile = useMediaQuery({maxWidth: 767});

    useLayoutEffect(() => {
        const start = isMobile ? 'top 20%' : 'top top';
        const loadGSAP = async () => {
            const {gsap} = await import('gsap');
            const {ScrollTrigger} = await import('gsap/ScrollTrigger');

            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                gsap.set([headingRef.current, featuresLeftRef.current, featuresRightRef.current, finalContentRef.current, imageRef.current], {
                    clearProps: "all"
                });

                gsap.set(headingRef.current, {
                    y: 0,
                    opacity: 1,
                    force3D: true
                });
                gsap.set([featuresLeftRef.current, featuresRightRef.current], {
                    y: 0,
                    opacity: 1,
                    x: 0,
                    force3D: true
                });
                gsap.set(imageRef.current, {
                    scale: 1,
                    clipPath: 'circle(25% at center)',
                    force3D: true
                });
                gsap.set(finalContentRef.current, {
                    y: 50,
                    opacity: 0,
                    force3D: true
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start,
                        end: '+=300vh',
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            console.log('Timeline progress:', self.progress);
                        },
                        pinType: "transform"
                    }
                });

                tl.fromTo(headingRef.current,
                    {y: 0, opacity: 1},
                    {
                        y: -150,
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.inOut'
                    }, 0
                )
                    .fromTo(imageRef.current,
                        {scale: 1, clipPath: 'circle(25% at center)'},
                        {
                            scale: 1.8,
                            clipPath: 'circle(150% at center)',
                            duration: 1.5,
                            ease: 'power2.inOut'
                        }, 1
                    )
                    .fromTo(featuresLeftRef.current,
                        {x: 0, opacity: 1},
                        {
                            x: -300,
                            opacity: 0,
                            duration: 1,
                            ease: 'power2.inOut'
                        }, 2
                    )
                    .fromTo(featuresRightRef.current,
                        {x: 0, opacity: 1},
                        {
                            x: 300,
                            opacity: 0,
                            duration: 1,
                            ease: 'power2.inOut'
                        }, 2
                    )
                    .fromTo(finalContentRef.current,
                        {y: 50, opacity: 0},
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.out'
                        }, 3
                    );

                ScrollTrigger.refresh();

            }, sectionRef);

            return () => {
                ctx.revert();
                ScrollTrigger.refresh();
            };
        };

        loadGSAP();
    }, [isMobile]);

    const securityFeatures = [
        "Advanced Threat Detection",
        "Real-time Monitoring",
        "Automated Response",
        "Risk Assessment"
    ];

    const complianceFeatures = [
        "SOC 2 Compliance",
        "GDPR Ready",
        "ISO 27001 Certified",
        "HIPAA Compliant"
    ];

    return (
        <>
            <section
                ref={sectionRef}
                className="relative min-h-screen h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
            >
                <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-emerald-900/20"></div>

                    <h2
                        ref={headingRef}
                        className="absolute top-20 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent z-20"
                    >
                        Security Platform
                    </h2>

                    <div
                        ref={featuresLeftRef}
                        className="absolute left-4 md:left-16 top-[65%] md:top-1/2 w-[90%] md:w-auto transform -translate-y-1/2 space-y-4 z-10"
                    >
                        {securityFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 flex-shrink-0"></div>
                                <p className="text-slate-300 text-base md:text-lg font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        ref={imageRef}
                        className="w-64 h-64 md:w-96 md:h-96 relative overflow-hidden z-30 bg-slate-700 rounded-full will-change-transform transform-gpu"
                        style={{ clipPath: 'circle(25% at center)' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Cybersecurity Dashboard"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20"></div>
                    </div>

                    <div
                        ref={featuresRightRef}
                        className="absolute right-4 md:right-16 top-[75%] md:top-1/2 w-[90%] md:w-auto transform -translate-y-1/2 space-y-4 z-10"
                    >
                        {complianceFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 justify-end">
                                <p className="text-slate-300 text-base md:text-lg font-medium">{feature}</p>
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 flex-shrink-0"></div>
                            </div>
                        ))}
                    </div>

                    <div
                        ref={finalContentRef}
                        className="absolute inset-0 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm z-50"
                    >
                        <div className="text-center max-w-4xl px-6">
                            <h3 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                Enterprise Security, Simplified
                            </h3>
                            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                                Our unified security platform provides comprehensive protection with intelligent
                                automation,
                                giving you complete visibility and control over your digital infrastructure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-semibold rounded-full hover:from-cyan-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Request Demo
                                </button>
                                <button
                                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-slate-800 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-cyan-100 bg-clip-text text-transparent">
                            Complete Protection Suite
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Discover how our integrated security solutions work together to provide unmatched protection
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Endpoint Security",
                                description: "Advanced protection for all devices and endpoints in your network."
                            },
                            {
                                title: "Network Monitoring",
                                description: "Real-time visibility into network traffic and potential threats."
                            },
                            {
                                title: "Data Encryption",
                                description: "Military-grade encryption for data at rest and in transit."
                            },
                            {
                                title: "Identity Management",
                                description: "Secure access controls and identity verification systems."
                            },
                            {
                                title: "Compliance Reporting",
                                description: "Automated compliance reporting for regulatory requirements."
                            },
                            {
                                title: "Incident Forensics",
                                description: "Detailed forensic analysis and threat investigation tools."
                            }
                        ].map((item, index) => (
                            <div key={index}
                                 className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                                <p className="text-slate-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailsSection;

