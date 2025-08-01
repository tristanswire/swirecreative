import Head from "next/head";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Swire Creative",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="bg-brand-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-brand-black">
          <div className="space-y-8 text-sm leading-7">
            <Head>
              <title>Privacy Policy | Swire Creative</title>
            </Head>

            <section className="bg-brand-white py-20 px-6">
              <div className="max-w-3xl mx-auto text-brand-black">
                <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-10">Effective Date: [Insert date]</p>

                <div className="space-y-8 text-sm leading-7">
                  <div>
                    <h2 className="text-lg font-semibold">1. Information We Collect</h2>
                    <p>
                      We may collect your name and email address through forms or newsletter signups. We collect payment data via Stripe and usage data via Google Analytics.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
                    <p>
                      We use your data to provide services, process payments, send email updates via Beehiiv, and track site performance via analytics.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">3. Sharing & Third-Party Tools</h2>
                    <p> We do not sell or rent your data. We may share it with:</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>Stripe (payments)</li>
                        <li>Google Analytics (site tracking)</li>
                        <li>Beehiiv (email delivery)</li>
                      </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">4. Cookies</h2>
                    <p>
                      Our site uses cookies to track usage and remember preferences. You can disable cookies in your browser settings.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">5. Your Rights</h2>
                    <p>
                      You can request to view, correct, or delete your data. You can unsubscribe from emails at any time using the link in the email or by contacting us.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">6. Data Security</h2>
                    <p>
                      We use encrypted tools and secure third-party services to protect your personal information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">7. Contact</h2>
                    <p>Questions about this policy? Email us at <a href="mailto:tristanswire@gmail.com" className="underline">tristanswire@gmail.com</a>.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
