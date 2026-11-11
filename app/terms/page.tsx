
export const metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of the Talent360x platform.",
}

export default function TermsPage() {
  return (
    <div>
      <div className="py-16">
        <div className="container-site max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 15, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Talent360x is a talent ecosystem platform that connects working professionals, employers, training providers, and
                strategic partners. Our services include job matching, training marketplace, and workforce management
                tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must be at least 18 years old to create an account</li>
                <li>One person or entity may only maintain one account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Provide false or misleading information</li>
                <li>Use the platform for any illegal purpose</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to the platform</li>
                <li>Scrape or collect data without permission</li>
                <li>Post spam or unauthorized advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on our platform, including text, graphics, logos, and software, is the property of Aptinfinity Solutions LLP and is protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Premium services require payment as specified</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change pricing with notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Our platform is provided &quot;as is&quot; without warranties of any kind. We are not liable for any
                indirect, incidental, or consequential damages arising from your use of the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your account at any time for violations of these terms or for any other
                reason at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
                jurisdiction of courts in Hyderabad, Telangana.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at:
                <br />
                Email: legal@talent360x.com
                <br />
                Phone: +91 9063077729
                <br />
                Address: Aptinfinity Solutions LLP, F405, Pragathi Enclave, Bhagya Nagar Colony, Kukatpally, Hyderabad, Telangana, India - 500072
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
