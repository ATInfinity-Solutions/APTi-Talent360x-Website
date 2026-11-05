import type { Metadata } from "next"
import { SignUpForm } from "./signup-form"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Talent360x account and join the AI-powered talent ecosystem.",
}

export default function SignUpPage() {
  return (
    <section className="bg-linear-to-br from-background via-background to-primary/5 py-16">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Join <span className="text-gradient-brand">Our</span> Ecosystem
          </h1>
          <p className="text-lg text-muted-foreground">Select your role to get started with the right features for you.</p>
        </div>
        <SignUpForm />
      </div>
    </section>
  )
}
