'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="link" 
          className="text-gray-400 hover:text-white p-0 h-auto text-md font-normal cursor-pointer hover:no-underline"
        >
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[98vh] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Privacy Policy
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-NG', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6 text-gray-700">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p>
                Vaib Project Limited ("we", "our", "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or engage our construction services in Nigeria. We comply with 
                the Nigerian Data Protection Regulation (NDPR) 2019 and other applicable laws.
              </p>
              <p className="mt-2">
                As a licensed construction company under the Council for the Regulation of Engineering 
                in Nigeria (COREN) and Corporate Affairs Commission (CAC), we adhere to the highest 
                standards of data protection in our operations.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Personal Identification:</strong> Name, email address, phone number, 
                  government-issued ID (for contract purposes)
                </li>
                <li>
                  <strong>Project Information:</strong> Site addresses, architectural plans, 
                  building specifications, survey data
                </li>
                <li>
                  <strong>Financial Information:</strong> Payment details, bank information 
                  (processed securely through licensed Nigerian banks)
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, 
                  website usage data
                </li>
                <li>
                  <strong>Regulatory Documents:</strong> Building approvals, environmental impact 
                  assessments, COREN certifications
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use collected information for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Processing construction project inquiries and quotations</li>
                <li>Managing building contracts and project documentation</li>
                <li>Complying with Nigerian construction regulations (LASG, FCDA, etc.)</li>
                <li>Obtaining necessary building permits and approvals</li>
                <li>Communicating project updates and safety notifications</li>
                <li>Processing payments through Nigerian financial institutions</li>
                <li>Improving our construction services and website experience</li>
                <li>Maintaining safety records as required by Nigerian law</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Legal Basis for Processing</h2>
              <p>
                Our data processing activities are based on:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <strong>Contractual Necessity:</strong> To fulfill construction contracts 
                  under Nigerian Contract Law
                </li>
                <li>
                  <strong>Legal Obligations:</strong> Compliance with Nigerian building codes, 
                  Urban and Regional Planning Laws, and NDPR
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> Project management, client communication, 
                  and business operations
                </li>
                <li>
                  <strong>Consent:</strong> For marketing communications and non-essential data processing
                </li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Sharing and Disclosure</h2>
              <p className="mb-2">
                We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Regulatory Authorities:</strong> Lagos State Physical Planning Permit Authority (LASPPPA), 
                  Federal Capital Development Authority (FCDA), COREN
                </li>
                <li>
                  <strong>Professional Partners:</strong> Licensed architects, engineers, surveyors, 
                  and subcontractors
                </li>
                <li>
                  <strong>Financial Institutions:</strong> Nigerian banks for payment processing
                </li>
                <li>
                  <strong>Service Providers:</strong> Cloud storage, project management software, 
                  and communication tools
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by Nigerian courts or law enforcement
                </li>
              </ul>
              <p className="mt-2 text-sm italic">
                Note: All third parties must comply with Nigerian data protection laws and 
                sign confidentiality agreements.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Secure document storage compliant with Nigerian standards</li>
                <li>Employee training on data protection and NDPR compliance</li>
                <li>Physical security measures at our construction sites and offices</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Data Retention</h2>
              <p>
                We retain data only as long as necessary:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <strong>Project Documentation:</strong> 10+ years as required by Nigerian 
                  construction regulations
                </li>
                <li>
                  <strong>Financial Records:</strong> 7 years as per Nigerian tax laws
                </li>
                <li>
                  <strong>Client Communications:</strong> 5 years after project completion
                </li>
                <li>
                  <strong>Marketing Data:</strong> Until consent is withdrawn
                </li>
              </ul>
            </section>

            {/* Your Rights Under NDPR */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Your Rights Under NDPR</h2>
              <p className="mb-2">
                As per Nigerian Data Protection Regulation, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge complaints with the National Information Technology Development Agency (NITDA)</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Cookies and Tracking</h2>
              <p>
                Our website uses cookies to improve user experience. We use:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for website functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> To understand website usage (Google Analytics)
                </li>
                <li>
                  <strong>Preference Cookies:</strong> To remember your settings
                </li>
              </ul>
              <p className="mt-2">
                You can manage cookie preferences through your browser settings.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">10. International Data Transfers</h2>
              <p>
                As a Nigerian company, we primarily store data within Nigeria. Any international 
                transfers comply with NDPR requirements and use approved transfer mechanisms.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect 
                data from children under Nigerian law.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this policy periodically. Significant changes will be communicated 
                through our website or direct notification. Continued use of our services constitutes 
                acceptance of updated terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">13. Contact Information</h2>
              <div className="space-y-2">
                <p>
                  <strong>Data Controller:</strong> Vaib Project Limited
                </p>
                <p>
                  <strong>Registered Address:</strong> 25D, Ade Ajayi Street, Zone A4, Ogudu, Lagos Nigeria.
                </p>
                <p>
                  <strong>Email:</strong> info@vaibproject.com
                </p>
                <p>
                  <strong>Phone:</strong> +234 816 081 7698
                </p>
                <p>
                  <strong>Data Protection Officer:</strong> Wole Oni
                </p>
                <p className="mt-4">
                  For complaints or regulatory inquiries, contact:
                  <br />
                  <strong>National Information Technology Development Agency (NITDA)</strong>
                  <br />
                  28, Port Harcourt Crescent, Off Gimbiya Street, Garki, Abuja
                  <br />
                  Email: info@nitda.gov.ng
                </p>
              </div>
            </section>

            {/* Compliance Statement */}
            <section className="border-t pt-4">
              <h3 className="font-semibold text-gray-800 mb-2">Compliance Statement</h3>
              <p className="text-sm">
                Vaib Project Limited complies with:
              </p>
              <ul className="list-disc pl-6 text-sm space-y-1 mt-2">
                <li>Nigerian Data Protection Regulation (NDPR) 2019</li>
                <li>NITDA Implementation Framework</li>
                <li>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</li>
                <li>Building Codes and Construction Regulations</li>
                <li>Corporate Affairs Commission Requirements</li>
              </ul>
            </section>
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center pt-4 border-t">
          <p className="text-[10px] md:text-sm text-gray-600">
            By using our services, you acknowledge reading this Privacy Policy.
          </p>
          <div className="flex gap-2">
            <Button className="cursor-pointer" variant="outline" asChild>
              <a href="/privacy-policy.pdf" download>
                Download PDF
              </a>
            </Button>
            <DialogTrigger asChild>
              <Button className="cursor-pointer hover:text-white">Close</Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}