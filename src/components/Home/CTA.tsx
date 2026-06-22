import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import "./CTA.css";

export default function CTA() {
    return (
        <section className="py-20 cta-section">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div
                    className="relative rounded-3xl overflow-hidden p-14 sm:p-20 text-center cta-container"
                >
                    {/* Glow blobs */}
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none cta-glow-top" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none cta-glow-bottom" />

                    <div className="relative">
                        <div className="mb-6 inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/15 text-red-500 text-[11px] font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">Ready to grow?</div>
                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight font-medium text-gray-900">
                            Automate your social
                            <br />
                            <span className="text-red-400 italic">media today</span>
                        </h2>
                        <p className="mt-6 text-gray-500 max-w-lg mx-auto  text-lg">Join thousands of creators and marketers who trust Scheduler to grow their audience on autopilot.</p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link to="/login" className="bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 hover:shadow-[0_8px_24px_rgba(239,68,68,0.35)] inline-flex items-center gap-2 text-[15px] px-10 py-4 w-full sm:w-auto justify-center">
                                Get Started Free <ArrowRightIcon className="size-4" />
                            </Link>
                            <a href="#pricing" className="bg-transparent text-[#333] border-[1.5px] border-black/10 rounded-full font-medium hover:bg-black/5 hover:border-black/20 inline-flex items-center gap-2 text-[15px] px-10 py-4 w-full sm:w-auto justify-center">
                                View Pricing
                            </a>
                        </div>

                        <p className="mt-6 text-xs text-gray-400">No credit card required · Cancel anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
