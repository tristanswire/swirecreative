import Head from "next/head";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms of Service | Swire Creative",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <section className="bg-brand-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-brand-black">
          <div className="space-y-8 text-sm leading-7">
            <Head>
              <title>Terms of Service | Swire Creative</title>
            </Head>

            <section className="bg-brand-white py-20 px-6">
              <div className="max-w-3xl mx-auto text-brand-black">
                <h1 className="text-4xl font-semibold mb-8">Terms of Service</h1>
                <p className="text-sm text-gray-500 mb-10">Effective Date: [Insert date]</p>

                <div className="space-y-8 text-sm leading-7">
                  <div>
                    <h2 className="text-lg font-semibold">1. Services</h2>
                    <p>
                      Swire Creative provides website development, maintenance, and related technical services under a subscription-based model. Services are delivered according to the selected plan (Lite, Core, or Custom), and include task prioritization, biweekly sprints (Core/Advanced), and communication via shared tools (email or Trello).
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">2. Payment & Billing</h2>
                    <p>
                      All plans are billed in two equal payments, charged on the 1st and 15th of each month. Payment is required to begin or continue service. No refunds are issued once work has begun or resources have been allocated.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">3. Cancellation</h2>
                    <p>
                      To avoid charges for the next billing cycle, clients must cancel at least 14 days prior to the start of that cycle. Cancellations must be submitted in writing to <a href="mailto:tristanswire@gmail.com" className="underline">tristanswire@gmail.com</a>. Upon cancellation, work will stop at the end of the current paid period.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">4. Work Limits & Scope</h2>
                    <p>
                      Plans include a maximum number of hours per month (25 hrs for Lite, 50 hrs for Core). Work exceeding these limits may be paused, or billed separately at an hourly or fixed rate — determined on a case-by-case basis. Unused hours do not roll over.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">5. Communication</h2>
                    <p>
                      Clients on Lite plans communicate via email only. Core and Advanced plans include access to a shared Trello board for task submission and tracking. Biweekly sprint kickoff meetings are provided for Core and Advanced plans.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">6. Ownership & Deliverables</h2>
                    <p>
                      Upon full payment, all completed work is owned by the client. Swire Creative retains the right to showcase completed projects in portfolios or marketing unless otherwise requested in writing.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">7. Revisions & Approvals</h2>
                    <p>
                      Revisions are included within the scope of each plan and subject to reasonable limits. Delays in client feedback may impact delivery timelines.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">8. Legal Stuff</h2>
                    <p>
                      Swire Creative is not liable for lost revenue, site downtime, or damages resulting from client misuse, third-party services, or force majeure. These terms may be updated periodically. Continued use of the service constitutes acceptance of updated terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">9. Contact</h2>
                    <p>Questions? Contact us at <a href="mailto:tristanswire@gmail.com" className="underline">tristanswire@gmail.com</a>.</p>
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
