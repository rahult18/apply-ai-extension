import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import { Footer } from "@/components/Footer"

export const metadata = {
    title: "Privacy Policy — ApplyAI",
    description: "How ApplyAI collects, uses, and protects your data.",
}

export default function PrivacyPolicyPage() {
    const updated = "March 3, 2026"

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

            {/* Content */}
            <main className="flex-1">
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
                    <p className="text-sm text-gray-400 mb-10">Last updated: {updated}</p>

                    <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

                        {/* 1 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Overview</h2>
                            <p>
                                ApplyAI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website{" "}
                                <a href="https://apply-ai-extension.vercel.app" className="text-blue-600 hover:underline">
                                    apply-ai-extension.vercel.app
                                </a>{" "}
                                and the ApplyAI Chrome browser extension (collectively, the &quot;Service&quot;).
                                This Privacy Policy explains what data we collect, how we use it, and your rights
                                regarding your data.
                            </p>
                            <p className="mt-3">
                                By using the Service, you agree to the collection and use of information in
                                accordance with this policy.
                            </p>
                        </section>

                        {/* 2 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Data We Collect</h2>

                            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2a. Account &amp; Profile Information</h3>
                            <p>
                                When you create an account, we collect your <strong>email address</strong> and
                                authentication credentials. Through the profile page you may optionally provide:
                                full name, phone number, location (city, state, country), LinkedIn / GitHub /
                                portfolio URLs, work authorization status, visa sponsorship preferences, and
                                demographic information (gender, race, veteran status, disability status).
                            </p>
                            <p className="mt-2">
                                This information is used solely to pre-fill job application forms on your behalf
                                via the browser extension.
                            </p>

                            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2b. Resume</h3>
                            <p>
                                If you upload a resume (PDF, DOC, or DOCX), we store the file securely in
                                Supabase Storage and parse it using an AI model (Google Gemini) to extract
                                structured data: summary, skills, experience, education, certifications, and
                                projects. This parsed data is stored in your profile and used to generate
                                autofill answers.
                            </p>

                            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2c. Job Application Data</h3>
                            <p>
                                When you use the extension to extract a job description, we store the job
                                title, company, URL, and parsed job details (skills, requirements, keywords)
                                in your account. We also store autofill run history (which fields were filled
                                and with what values) for tracking and debugging purposes.
                            </p>

                            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2d. Page Content (Temporary)</h3>
                            <p>
                                When you trigger a job extraction or autofill, the extension captures the
                                HTML content of the active browser tab and sends it to our backend API for
                                processing. This DOM content is used only to extract the job description or
                                identify form fields, and is not stored permanently beyond what is needed to
                                generate the autofill plan.
                            </p>

                            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2e. Extension Authentication Token</h3>
                            <p>
                                A JWT authentication token is stored in <code>chrome.storage.local</code> on
                                your device to keep you logged in to the extension. This token is never shared
                                with third parties.
                            </p>
                        </section>

                        {/* 3 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To authenticate you and secure your account</li>
                                <li>To pre-fill job application forms using AI, based on your profile and resume</li>
                                <li>To parse and store job descriptions you extract while browsing</li>
                                <li>To score your resume against job descriptions</li>
                                <li>To track your application pipeline (extracted → autofilled → applied)</li>
                                <li>To improve autofill accuracy over time through internal analysis of run results</li>
                            </ul>
                        </section>

                        {/* 4 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Services</h2>
                            <p>We use the following third-party services to operate the Service:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-3">
                                <li>
                                    <strong>Supabase</strong> — Database, authentication, and file storage.
                                    Data is stored in a Supabase-hosted PostgreSQL database and object storage.
                                </li>
                                <li>
                                    <strong>Google Gemini (generative AI)</strong> — Used to extract job description
                                    data from HTML, parse uploaded resumes, and generate autofill answers.
                                    Content sent to Gemini is subject to{" "}
                                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        Google's Privacy Policy
                                    </a>.
                                </li>
                                <li>
                                    <strong>Vercel</strong> — Hosts the web application. Subject to{" "}
                                    <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        Vercel's Privacy Policy
                                    </a>.
                                </li>
                            </ul>
                            <p className="mt-3">
                                We do <strong>not</strong> use any third-party analytics, advertising, or
                                tracking services (e.g. Google Analytics, Mixpanel, Facebook Pixel).
                            </p>
                        </section>

                        {/* 5 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Sharing</h2>
                            <p>
                                We do <strong>not</strong> sell, trade, or transfer your personal data to
                                third parties. Your data is only shared with the third-party service providers
                                listed in Section 4, and only to the extent necessary to operate the Service.
                            </p>
                        </section>

                        {/* 6 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Remote Code</h2>
                            <p>
                                The ApplyAI browser extension does <strong>not</strong> execute any remote code.
                                All JavaScript executed by the extension is bundled within the extension package
                                itself — no external scripts are loaded or evaluated at runtime.
                            </p>
                        </section>

                        {/* 7 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
                            <p>
                                We retain your data for as long as your account is active. You may delete your
                                account at any time by contacting us (see Section 9). Upon deletion, your profile,
                                resume, and job application data will be removed from our systems within 30 days.
                            </p>
                        </section>

                        {/* 8 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Security</h2>
                            <p>
                                We use industry-standard security practices: HTTPS for all data in transit,
                                Row Level Security (RLS) enforced at the database level so users can only access
                                their own data, and short-lived JWT tokens for session management.
                                No system is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* 9 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Your Rights</h2>
                            <p>
                                You have the right to access, correct, or delete the personal data we hold about
                                you. To exercise these rights, or if you have any questions about this policy,
                                please contact us at:
                            </p>
                            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm">
                                <p><strong>ApplyAI Team</strong></p>
                                <p>
                                    Website:{" "}
                                    <a href="https://apply-ai-extension.vercel.app" className="text-blue-600 hover:underline">
                                        apply-ai-extension.vercel.app
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* 10 */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. When we do, we will update
                                the &quot;Last updated&quot; date at the top of this page. Continued use of the
                                Service after changes are posted constitutes your acceptance of the revised policy.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />

        </div>
    )
}
