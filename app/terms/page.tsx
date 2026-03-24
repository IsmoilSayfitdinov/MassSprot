"use client"

import Link from "next/link"
import { PageLayout } from "@/components/landing/page-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Server,
  UserCog,
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Mail,
} from "lucide-react"

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: `By accessing or using MassSport AI's platform, mobile applications, APIs, and related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.

These Terms constitute a legally binding agreement between you and MassSport AI, Inc. ("MassSport AI," "we," "our," or "us"). We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the modified Terms.

You must be at least 16 years old to use the Service. If you are under 18, you must have parental or guardian consent to use the Service.`,
  },
  {
    id: "service-description",
    icon: Server,
    title: "2. Service Description",
    content: `MassSport AI provides an AI-powered sports analytics and training optimization platform that includes:

**Training Analytics:** Performance tracking, progress monitoring, and data visualization tools to help you understand your training patterns and improvements.

**AI Recommendations:** Personalized training plans, workout suggestions, recovery guidance, and performance predictions powered by machine learning algorithms.

**Collaboration Tools:** Features that enable trainers and coaches to monitor, analyze, and guide their athletes through a dedicated trainer dashboard.

**Integrations:** Connectivity with third-party fitness devices, wearables, and platforms to aggregate your health and fitness data.

The Service is provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with reasonable notice when possible.`,
  },
  {
    id: "user-accounts",
    icon: UserCog,
    title: "3. User Accounts",
    content: `To access the Service, you must create an account. You agree to:

**Account Information:** Provide accurate, current, and complete information during registration and keep your account information updated.

**Account Security:** Maintain the confidentiality of your password and are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized access.

**One Account Per Person:** Each individual may only maintain one account. Creating multiple accounts may result in termination of all accounts.

**Account Sharing:** Your account is personal and non-transferable. You may not share your login credentials with others or allow others to access your account, except as permitted under Team plans where designated administrators may manage team member access.

We reserve the right to suspend or terminate accounts that violate these Terms, are inactive for extended periods, or pose a security risk.`,
  },
  {
    id: "acceptable-use",
    icon: ShieldCheck,
    title: "4. Acceptable Use",
    content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not:

**Misuse the Service:** Use the Service for any illegal, harmful, or unauthorized purpose, or in any way that could damage, disable, or impair the Service.

**Interfere with Others:** Interfere with or disrupt the Service or servers or networks connected to the Service, or violate any requirements, procedures, policies, or regulations of connected networks.

**Reverse Engineer:** Attempt to decompile, reverse engineer, disassemble, or hack the Service, or defeat or overcome any encryption or security measures.

**Scrape or Harvest:** Use any automated means (bots, scrapers, crawlers) to access the Service or collect data without our express written permission.

**Impersonate:** Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.

**Redistribute:** Resell, redistribute, or sublicense the Service or any data obtained through the Service without our prior written consent.

Violation of these terms may result in immediate termination of your account and may be reported to law enforcement authorities.`,
  },
  {
    id: "intellectual-property",
    icon: Lightbulb,
    title: "5. Intellectual Property",
    content: `**Our Intellectual Property:** The Service, including its original content, features, functionality, design, and underlying technology, is and will remain the exclusive property of MassSport AI and its licensors. The Service is protected by copyright, trademark, patent, and other intellectual property laws.

**Your Content:** You retain ownership of the data and content you submit to the Service. By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, process, and display your content solely for the purpose of providing and improving the Service.

**AI-Generated Content:** Training recommendations, analytics reports, and other outputs generated by our AI based on your data are provided for informational purposes. While you may use these outputs for your personal or authorized team use, the underlying AI models and algorithms remain our intellectual property.

**Feedback:** Any feedback, suggestions, or ideas you provide regarding the Service may be used by us without any obligation to you.

**Trademarks:** "MassSport AI," our logo, and other marks are trademarks of MassSport AI, Inc. You may not use our trademarks without our prior written permission.`,
  },
  {
    id: "limitation-of-liability",
    icon: AlertTriangle,
    title: "6. Limitation of Liability",
    content: `**Disclaimer of Warranties:** THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

**Not Medical Advice:** The Service provides training and fitness recommendations generated by AI algorithms. These are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any exercise program or making changes to your training.

**Limitation of Liability:** TO THE MAXIMUM EXTENT PERMITTED BY LAW, MASSSPORT AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.

**Maximum Liability:** OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

**Assumption of Risk:** You acknowledge that physical exercise carries inherent risks. You assume all risks associated with following training recommendations provided by the Service.`,
  },
  {
    id: "termination",
    icon: XCircle,
    title: "7. Termination",
    content: `**Termination by You:** You may terminate your account at any time by navigating to your account settings and selecting the option to delete your account, or by contacting our support team.

**Termination by Us:** We may suspend or terminate your access to the Service immediately, without prior notice or liability, if you breach these Terms, engage in fraudulent activity, or for any other reason we deem necessary to protect the Service or our users.

**Effect of Termination:** Upon termination, your right to use the Service will immediately cease. We will retain your data for 30 days following termination, during which you may request an export. After 30 days, your data will be permanently deleted, except as required by law.

**Survival:** Provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`,
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "8. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. When we make material changes, we will:

**Notify You:** Provide notice through the Service, via email to the address associated with your account, or through other reasonable means at least 30 days before the changes take effect.

**Update the Date:** Update the "Last Updated" date at the top of these Terms.

**Your Options:** If you disagree with the updated Terms, you may terminate your account before the changes take effect. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes.

We encourage you to review these Terms periodically to stay informed about our requirements and any changes.`,
  },
  {
    id: "contact",
    icon: Mail,
    title: "9. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us:

**Email:** legal@masssportai.com
**Address:** MassSport AI, Inc., 123 Innovation Drive, San Francisco, CA 94105, USA
**Phone:** +1 (555) 123-4567

For general inquiries and support, please visit our Contact page or email support@masssportai.com.`,
  },
]

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Please read these terms carefully before using MassSport AI.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: March 1, 2026
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="bg-card/50 border-border/50 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-foreground hover:bg-muted/10 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{section.title}</span>
                  </a>
                )
              })}
            </nav>
          </Card>

          {/* Sections */}
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className="bg-card/50 border-border/50 rounded-2xl p-8 scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                      >
                        {paragraph.split("**").map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-foreground font-medium">
                              {part}
                            </strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Footer Links */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
