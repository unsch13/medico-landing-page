"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Shield, Users, Award, Phone, Mail, MapPin, Star } from "lucide-react"
import { Suspense } from "react"
import MedicalScene3D from "@/components/medical-scene-3d"
import DNAHelix3D from "@/components/dna-helix-3d"

export default function MedicineLandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MediCore Solutions</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("products")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                // Simple login modal or redirect - for demo purposes
                alert("Login functionality would redirect to authentication page")
              }}
            >
              Login
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-card via-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                FDA Approved & HIPAA Compliant
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Advanced Healthcare Solutions for Better Patient Outcomes
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl text-pretty">
                Empowering healthcare providers with cutting-edge pharmaceutical innovations and digital health
                solutions. Trusted by over 10,000 healthcare professionals worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-accent/30 hover:border-accent hover:bg-accent/5 bg-transparent"
                >
                  View Products
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <Suspense fallback={<div className="w-full h-full bg-muted/20 rounded-2xl animate-pulse" />}>
                <MedicalScene3D />
              </Suspense>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-muted-foreground">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                50M+
              </div>
              <div className="text-muted-foreground">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Healthcare Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From pharmaceutical research to patient management systems, we provide end-to-end solutions for modern
              healthcare.
            </p>
            <div className="mt-8 h-[200px] w-full max-w-md mx-auto">
              <Suspense fallback={<div className="w-full h-full bg-muted/20 rounded-lg animate-pulse" />}>
                <DNAHelix3D />
              </Suspense>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Pharmaceutical Research</CardTitle>
                <CardDescription>
                  Advanced drug discovery and development platforms with AI-powered molecular analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">FDA-compliant research protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Real-time data analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Collaborative research tools</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Patient Management</CardTitle>
                <CardDescription>
                  Comprehensive electronic health records and patient care coordination systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">HIPAA-compliant data storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Integrated billing systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Telemedicine capabilities</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Clinical Trials</CardTitle>
                <CardDescription>
                  End-to-end clinical trial management with regulatory compliance and data integrity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">GCP-compliant protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Patient recruitment tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Regulatory reporting</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-to-r from-muted/10 via-accent/5 to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Healthcare Leaders</h2>
            <p className="text-xl text-muted-foreground">
              See what healthcare professionals are saying about our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-all hover:border-accent/30">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "MediCore's research platform has revolutionized our drug discovery process. The AI-powered insights
                  have accelerated our timeline by 40%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                    <span className="text-sm font-semibold text-primary">DR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Sarah Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Chief Research Officer, BioPharma Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all hover:border-accent/30">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The patient management system has streamlined our operations and improved patient satisfaction scores
                  by 35%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                    <span className="text-sm font-semibold text-primary">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Michael Chen</div>
                    <div className="text-sm text-muted-foreground">Hospital Administrator, Metro Health</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all hover:border-accent/30">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding compliance features and support. Our clinical trials are now more efficient and
                  regulatory-ready."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                    <span className="text-sm font-semibold text-primary">EJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Emily Johnson</div>
                    <div className="text-sm text-muted-foreground">Clinical Director, Research Institute</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leading Healthcare Innovation for Over 15 Years
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by a team of medical professionals and technology experts, MediCore Solutions has been at the
                forefront of healthcare innovation, developing solutions that bridge the gap between cutting-edge
                technology and practical medical applications.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">200+</div>
                  <div className="text-muted-foreground">Expert Team</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">25+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Learn About Our Mission
              </Button>
            </div>
            <div className="relative">
              <img
                src="/modern-medical-laboratory-with-scientists-working.jpg"
                alt="Healthcare professionals working in modern medical laboratory"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of healthcare professionals who trust MediCore Solutions for their critical operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-primary-foreground text-foreground">
              <CardHeader>
                <CardTitle>Request a Demo</CardTitle>
                <CardDescription>See our solutions in action with a personalized demonstration.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Organization" />
                <Textarea placeholder="Tell us about your needs" />
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground text-foreground">
              <CardHeader>
                <CardTitle>Get Started Today</CardTitle>
                <CardDescription>Contact our team for immediate assistance and consultation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@medicore.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Boston, MA | San Francisco, CA</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                >
                  Contact Sales Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our healthcare solutions.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="compliance"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How do you ensure regulatory compliance across different regions?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                Our solutions are built with compliance at their core, adhering to FDA, HIPAA, GDPR, and other
                international healthcare regulations. We maintain regular audits, automated compliance monitoring, and
                continuous updates to ensure adherence across all supported regions. Our dedicated compliance team works
                with regulatory bodies to stay ahead of changing requirements and maintains certifications including SOC
                2 Type II, ISO 27001, and HITRUST CSF.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="integration"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">
                  Can your systems integrate with existing healthcare infrastructure?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                Yes, our platforms are designed with interoperability in mind. We support HL7 FHIR R4 standards, DICOM
                for medical imaging, and provide comprehensive REST and GraphQL APIs for seamless integration with
                existing EHR systems (Epic, Cerner, Allscripts), laboratory equipment, pharmacy systems, and other
                healthcare technologies. Our integration team provides white-glove onboarding support with typical
                implementations completed within 2-4 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="security"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What security measures protect patient data?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                We implement enterprise-grade security including AES-256 end-to-end encryption, multi-factor
                authentication, role-based access controls with principle of least privilege, and continuous security
                monitoring. All data is stored in HIPAA-compliant AWS and Azure data centers with 24/7 SOC monitoring,
                automated threat detection, and regular penetration testing. We maintain zero-trust architecture and
                provide detailed audit logs for all system access and data interactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="support"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What kind of support and training do you provide?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                We offer comprehensive onboarding with dedicated implementation specialists, role-based training
                programs (online and on-site), 24/7 technical support with guaranteed response times, and dedicated
                customer success managers. Our support team includes healthcare professionals, clinical informaticists,
                and certified trainers who understand medical workflows. We provide ongoing education through webinars,
                user conferences, and a comprehensive knowledge base with video tutorials.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="pricing"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How is pricing structured for healthcare organizations?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                Our pricing is flexible and scales with your organization's needs. We offer tiered subscription models
                including per-provider licensing, per-facility pricing, and enterprise-wide agreements with volume
                discounts. Pricing includes all core features, regular updates, standard support, and compliance
                maintenance. We also offer flexible payment terms, including annual and multi-year contracts with
                additional savings. Contact our sales team for a customized quote and ROI analysis based on your
                specific requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="uptime"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What is your system uptime and disaster recovery plan?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                We guarantee 99.9% uptime with our redundant cloud infrastructure across multiple availability zones.
                Our disaster recovery plan includes real-time data replication, automated failover systems, and
                comprehensive backup strategies with point-in-time recovery capabilities. In the unlikely event of an
                outage, our systems automatically switch to backup servers within minutes, ensuring continuous access to
                critical patient data and healthcare operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="validation"
              className="border border-border rounded-lg px-6 bg-card hover:bg-accent/5 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How do you handle clinical validation and evidence generation?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                Our solutions undergo rigorous clinical validation through peer-reviewed studies and real-world evidence
                generation. We collaborate with leading academic medical centers and research institutions to validate
                clinical outcomes and safety profiles. All algorithms and decision support tools are validated against
                established clinical guidelines and continuously monitored for performance. We provide detailed clinical
                evidence packages and support regulatory submissions when required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-secondary via-secondary/95 to-accent/10 text-secondary-foreground py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">MediCore Solutions</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advancing healthcare through innovative technology solutions and pharmaceutical research.
              </p>
              <div className="text-sm text-muted-foreground">© 2024 MediCore Solutions. All rights reserved.</div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Research Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Patient Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Clinical Trials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Analytics Suite
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal & Compliance</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    HIPAA Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Regulatory Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              This website and its contents are for informational purposes only. Always consult with qualified
              healthcare professionals for medical advice. MediCore Solutions is committed to regulatory compliance and
              patient data protection.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
