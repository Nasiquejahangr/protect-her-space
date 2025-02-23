
import { BookOpen, ShieldCheck, Users2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="container py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Safety Resources</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Access helpful information and resources to enhance your safety and well-being.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Emergency Guidelines */}
        <div className="p-6 rounded-lg border bg-card">
          <ShieldCheck className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Emergency Guidelines</h3>
          <p className="text-muted-foreground mb-4">
            Step-by-step instructions for various emergency situations.
          </p>
          <Button variant="outline" className="w-full">Learn More</Button>
        </div>

        {/* Support Contacts */}
        <div className="p-6 rounded-lg border bg-card">
          <PhoneCall className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Support Contacts</h3>
          <p className="text-muted-foreground mb-4">
            Directory of emergency services and support organizations.
          </p>
          <Button variant="outline" className="w-full">View Contacts</Button>
        </div>

        {/* Educational Materials */}
        <div className="p-6 rounded-lg border bg-card">
          <BookOpen className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Educational Materials</h3>
          <p className="text-muted-foreground mb-4">
            Safety guides, articles, and educational resources.
          </p>
          <Button variant="outline" className="w-full">Browse Materials</Button>
        </div>

        {/* Community Support */}
        <div className="p-6 rounded-lg border bg-card">
          <Users2 className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Support</h3>
          <p className="text-muted-foreground mb-4">
            Connect with support groups and community resources.
          </p>
          <Button variant="outline" className="w-full">Join Community</Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
