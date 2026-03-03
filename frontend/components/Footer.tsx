"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import { useAuth } from "@/contexts/AuthContext"

export function Footer() {
    const { user } = useAuth()
    const homeLink = user ? "/home" : "/"

    return (
        <footer className="border-t border-gray-100 bg-white py-4">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <Link href={homeLink} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-600">
                        <FontAwesomeIcon icon={faCloudBolt} className="text-white text-xs" />
                    </div>
                    <span className="font-semibold text-gray-600">ApplyAI</span>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/privacy" className="hover:text-gray-700 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/support" className="hover:text-gray-700 transition-colors">
                        Support
                    </Link>
                    {!user && (
                        <>
                            <Link href="/login" className="hover:text-gray-700 transition-colors">
                                Sign In
                            </Link>
                            <Link href="/signup" className="hover:text-gray-700 transition-colors">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
                <p>© {new Date().getFullYear()} ApplyAI. All rights reserved.</p>
            </div>
        </footer>
    )
}
