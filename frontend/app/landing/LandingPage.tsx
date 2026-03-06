"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "@/components/Footer"

const features = [
    {
        icon: "⚡",
        title: "AI-Powered Autofill",
        description:
            "Let AI fill out job application forms for you. The extension reads your profile and resume, then intelligently fills every field — including dropdowns and React Select components.",
    },
    {
        icon: "📋",
        title: "Job Application Tracking",
        description:
            "Automatically save jobs as you browse. Track every application through your pipeline — from saved to applied to interviewing to offer.",
    },
    {
        icon: "🎯",
        title: "Resume Match Scoring",
        description:
            "See exactly how well your resume matches each job. Get matched and missing keywords so you know where to improve before you apply.",
    },
    {
        icon: "🔌",
        title: "Browser Extension",
        description:
            "Works seamlessly on Lever, Ashby, and Greenhouse job boards. One click to extract a job description, one click to autofill the application form.",
    },
]

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/ApplyAI/ckknfphllkanlgikfaadoikjionkbmpf"

const steps = [
    {
        number: "1",
        title: "Install the Extension",
        description:
            "Add ApplyAI to Chrome from the Web Store. It takes under a minute.",
        href: CHROME_STORE_URL,
    },
    {
        number: "2",
        title: "Connect Your Account",
        description:
            "Sign up, fill in your profile and resume, then pair the extension with your account via a one-time code.",
    },
    {
        number: "3",
        title: "Apply Faster",
        description:
            "Browse to any job posting, click Extract, navigate to the application form, and click Autofill. Done.",
    },
]

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col">
            {/* ── Navbar ── */}
            <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600">
                            <FontAwesomeIcon icon={faCloudBolt} className="text-white text-base" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">ApplyAI</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="relative overflow-hidden">
                {/* Background gradient blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-40 blur-3xl" />
                    <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-100 rounded-full opacity-30 blur-3xl" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
                        AI-powered job application assistant
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        Apply to jobs{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            10× faster
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        ApplyAI autofills your job applications, tracks every application in
                        one dashboard, and scores your resume against each job — all from a
                        lightweight browser extension.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://chromewebstore.google.com/detail/ApplyAI/ckknfphllkanlgikfaadoikjionkbmpf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 px-8 py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg"
                        >
                            {/* Chrome logo */}
                            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="4.5" fill="white" />
                                <path d="M12 7.5h9.196A9.5 9.5 0 0 0 2.804 7.5H12Z" fill="#EA4335" />
                                <path d="M7.5 12a4.5 4.5 0 0 0 2.25 3.897L5.155 7.5A9.5 9.5 0 0 0 12 21.5l4.598-7.964A4.5 4.5 0 0 0 7.5 12Z" fill="#34A853" />
                                <path d="M16.5 12a4.5 4.5 0 0 0-2.25-3.897L18.845 16.5A9.5 9.5 0 0 0 21.5 12H16.5Z" fill="#FBBC05" />
                                <circle cx="12" cy="12" r="2.5" fill="white" />
                            </svg>
                            Add to Chrome — It&apos;s Free
                        </a>
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 px-8 py-3.5 rounded-xl transition-colors shadow-sm"
                        >
                            Get Started Free
                        </Link>
                    </div>

                    {/* Social proof */}
                    <p className="mt-8 text-sm text-gray-400">
                        Free to use · No credit card required · Available on Chrome
                    </p>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="bg-gray-50 border-t border-gray-100 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            Everything you need to land your next job
                        </h2>
                        <p className="text-gray-500 text-lg max-w-xl mx-auto">
                            Built for job seekers who are tired of copy-pasting the same
                            information into every application form.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                            >
                                <span className="text-3xl">{f.icon}</span>
                                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            Up and running in minutes
                        </h2>
                        <p className="text-gray-500 text-lg max-w-xl mx-auto">
                            Three steps and you're autofilling applications.
                        </p>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Connector line (md+) */}
                        <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

                        {steps.map((step) => (
                            <div key={step.number} className="relative flex flex-col items-center text-center gap-4">
                                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white text-2xl font-bold shadow-md">
                                    {step.number}
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
                                {step.href && (
                                    <a
                                        href={step.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                    >
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zm-1 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8h-2v8H5V7h8V5z" /></svg>
                                        Open Chrome Web Store
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                        Ready to apply smarter?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                        Install the extension, create your free account, and start autofilling
                        applications in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://chromewebstore.google.com/detail/ApplyAI/ckknfphllkanlgikfaadoikjionkbmpf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 px-8 py-3.5 rounded-xl transition-colors shadow-md"
                        >
                            <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="4.5" fill="#4285F4" />
                                <path d="M12 7.5h9.196A9.5 9.5 0 0 0 2.804 7.5H12Z" fill="#EA4335" />
                                <path d="M7.5 12a4.5 4.5 0 0 0 2.25 3.897L5.155 7.5A9.5 9.5 0 0 0 12 21.5l4.598-7.964A4.5 4.5 0 0 0 7.5 12Z" fill="#34A853" />
                                <path d="M16.5 12a4.5 4.5 0 0 0-2.25-3.897L18.845 16.5A9.5 9.5 0 0 0 21.5 12H16.5Z" fill="#FBBC05" />
                                <circle cx="12" cy="12" r="2.5" fill="white" />
                            </svg>
                            Add to Chrome
                        </a>
                        <Link
                            href="/signup"
                            className="inline-flex items-center gap-2 text-base font-semibold text-white border-2 border-white/60 hover:bg-white/10 px-8 py-3.5 rounded-xl transition-colors"
                        >
                            Create Free Account
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}
