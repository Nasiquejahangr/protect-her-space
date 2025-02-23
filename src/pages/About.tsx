
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="container py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About SafetyGuard</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Dedicated to providing safety and support when you need it most.
        </p>
      </header>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Protection</h3>
            <p className="text-muted-foreground">
              Providing immediate access to emergency services and safety resources.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-muted-foreground">
              Building a caring community that's always ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/50 py-16 -mx-4 px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Support Team</h3>
              <p className="text-muted-foreground">24/7 emergency response and assistance</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Care Coordinators</h3>
              <p className="text-muted-foreground">Dedicated to your well-being</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Crisis Team</h3>
              <p className="text-muted-foreground">Professional crisis intervention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
        <p className="text-muted-foreground mb-6 text-center">
          Have questions or need support? Our team is here to help you 24/7.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:9508904653" className="text-lg hover:text-primary transition-colors">
              +91 950 890 4653
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:nasiquejahangir000@gmail.com" className="text-lg hover:text-primary transition-colors">
              nasiquejahangir000@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
