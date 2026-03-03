import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "@/components/Footer"

export const metadata = {
    title: "Support — ApplyAI",
    description: "Get help with the ApplyAI browser extension.",
}

const faqs = [
    {
        q: "How do I install and connect the extension?",
        a: "Install the ApplyAI extension from the Chrome Web Store, then open the extension popup and click 'Connect to ApplyAI'. You'll be taken to the ApplyAI website where a one-time code is automatically exchanged to link your account. No copy-pasting required.",
    },
    {
        q: "What job boards does ApplyAI work on?",
        a: "ApplyAI currently supports Lever, Ashby, and Greenhouse job boards — which cover a large portion of tech and startup job applications. It works on any application form hosted on these platforms.",
    },
    {
        q: "The autofill didn't fill all my fields. Why?",
        a: "Some fields may be skipped if they couldn't be matched to data in your profile, or if the field uses an unusual input type. Make sure your profile is fully filled in, including your resume. You can also run autofill again on the same page — it will use a cached plan, so it's instant.",
    },
    {
        q: "How do I upload or update my resume?",
        a: "Go to the ApplyAI website, navigate to Profile → Resume tab, and upload a PDF, DOC, or DOCX file. The system will automatically parse it and extract your skills, experience, and education to improve autofill accuracy.",
    },
    {
        q: "How do I extract a job description?",
        a: "Navigate to the job posting page (the page describing the role), open the ApplyAI popup, and click 'Extract Job'. The extension reads the page and saves the job to your dashboard. Then navigate to the application form page and click 'Generate Autofill'.",
    },
    {
        q: "How do I disconnect or reconnect the extension?",
        a: "Open the extension popup and click 'Disconnect' in the footer. To reconnect, click 'Connect to ApplyAI' and follow the same connection flow as initial setup.",
    },
    {
        q: "Is my data safe?",
        a: "Yes. Your profile and resume data is stored securely in a Supabase-hosted database with row-level security, meaning only you can access your own data. We never sell or share your data with third parties. See our Privacy Policy for full details.",
    },
]

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600">
                            <FontAwesomeIcon icon={faCloudBolt} className="text-white text-base" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">ApplyAI</span>
                    </Link>
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

            {/* Hero */}
            <div className="bg-gray-50 border-b border-gray-100 py-14">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-3">Support</h1>
                    <p className="text-gray-500 text-lg">
                        Answers to common questions about the ApplyAI extension.
                        Can&apos;t find what you need? Open an issue on GitHub.
                    </p>
                </div>
            </div>

            {/* FAQ */}
            <main className="flex-1">
                <div className="max-w-3xl mx-auto px-6 py-14 space-y-6">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                        >
                            <h2 className="font-semibold text-gray-900 mb-2">{item.q}</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                        </div>
                    ))}

                    {/* Contact card */}
                    <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h2>
                        <p className="text-gray-500 text-sm mb-6">
                            Open an issue on GitHub and we&apos;ll get back to you as soon as possible.
                        </p>
                        <a
                            href="https://github.com/rahult18/apply-ai-extension"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-xl transition-colors shadow-sm"
                        >
                            {/* GitHub icon */}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            Open an Issue on GitHub
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
