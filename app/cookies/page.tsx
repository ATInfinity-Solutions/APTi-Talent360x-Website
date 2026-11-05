
export const metadata = {
  title: "Cookie Policy",
  description: "How Talent360x uses cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <div>
      <div className="py-16">
        <div className="container-site max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 15, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device when you visit a website. They help us provide you
                with a better experience by remembering your preferences and understanding how you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
              <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Required for the platform to function properly. These cannot be disabled.
              </p>
              <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Help us understand how visitors interact with our platform to improve user experience.
              </p>
              <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Remember your preferences and settings to personalize your experience.
              </p>
              <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Used to deliver relevant advertisements and track campaign performance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect
                the functionality of our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services like Google Analytics that set their own cookies. Please refer to their
                respective privacy policies for more information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about our Cookie Policy, contact us at:
                <br />
                Email: privacy@talent360x.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
