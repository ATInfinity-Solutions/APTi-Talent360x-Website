
export const metadata = {
  title: "Privacy Policy",
  description: "How Talent360x collects, uses and protects your information.",
}

export default function PrivacyPage() {
  return (
    <div>
      <div className="py-16">
        <div className="container-site max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 15, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Aptinfinity Solutions LLP (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Talent360x platform.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Educational qualifications and work experience</li>
                <li>Skills, certifications, and professional credentials</li>
                <li>Resume and portfolio documents</li>
                <li>Payment and billing information (for premium services)</li>
              </ul>
              <h3 className="text-xl font-medium mb-2">Usage Data</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information</li>
                <li>Interaction data with jobs, courses, and employers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To match you with relevant job opportunities</li>
                <li>To connect employers with suitable working professionals</li>
                <li>To personalize your experience and recommendations</li>
                <li>To communicate with you about services and updates</li>
                <li>To improve our platform and develop new features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Employers when you apply for jobs</li>
                <li>Training providers when you enroll in courses</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                For any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@talent360x.com
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
