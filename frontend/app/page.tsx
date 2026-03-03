import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import LandingPage from "./landing/LandingPage"

export default async function Home() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (token) {
    redirect("/home")
  }

  return <LandingPage />
}

