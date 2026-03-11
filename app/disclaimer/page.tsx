import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroBanner } from "@/components/hero-banner";

export const metadata: Metadata = {
  title: "Disclaimer | Project Globally",
  description:
    "Important legal, risk, and usage information for visitors of Project Globally website.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner
          image="img/privacy.avif"
          alt="Contact Us"
          title={"Disclaimer"}
          description={
            "Please read the following information carefully before using this website."
          }
        />

        <Breadcrumbs />

        <section className="py-12 px-4 md:px-6">
          <div className="container max-w-4xl space-y-6 text-base leading-7 text-muted-foreground">
            <p>
              The information on our site is only directed at professional
              clients and eligible counterparties, and the services or
              investments referred to on our site are only available to
              professional clients and eligible counterparties. Retail clients
              should not rely on the information herein. If you have any doubts
              about your status, you must not access our site.
            </p>

            <p>
              This website is for information purposes only. Nothing herein
              shall be construed as (i) an official confirmation of any
              transaction and/or (ii) investment advice or a recommendation. Any
              offer of securities may be made only by means of formal offering
              documents. Risks are inherent to investments, and engaging in any
              investment activity may expose you to a significant risk of losing
              all of the property or other assets invested.
            </p>

            <p>
              Project Globally does not utilize a UK sustainable investment
              label. Any queries on statements indicating or implying a
              sustainability product should be directed to
              contact@projectglobally.com. We are committed to transparency and
              accountability in our sustainability practices. All statements
              regarding the sustainability benefits of our services are based on
              current data and analysis available at the time of publication.
              However, sustainability performance can be influenced by various
              factors beyond our control, and past performance is not
              necessarily indicative of future results. We encourage
              stakeholders to request further information on our services and
              sustainability practices by contacting
              contact@projectglobally.com.
            </p>

            <p>
              Please note that you are required to have read and accepted the
              terms of our Privacy Policy and Terms of Use before you are able
              to access our website.
            </p>

            <p>
              By accessing this website, you confirm that you have read,
              understood, and agreed to the legal terms and conditions of this
              website. You also: (i) agree that such information will apply to
              any subsequent access to this website by you, and that all such
              subsequent access will be subject to the disclaimers, risk
              warnings, and other information set out herein; and (ii) warrant
              that no other person will access this website from the same
              computer and logon as you are currently using.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
