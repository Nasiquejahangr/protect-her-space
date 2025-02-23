
import { EmergencyButton } from "@/components/EmergencyButton";
import { QuickAction } from "@/components/QuickAction";
import { Phone, ShieldAlert, MapPin, Users } from "lucide-react";

const Index = () => {
  const handleEmergency = () => {
    // TODO: Implement emergency action
    console.log("Emergency button pressed");
  };

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Your Safety Companion
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-balance">
          Quick access to emergency services and support when you need them most
        </p>
      </header>

      <main>
        <div className="flex flex-col items-center gap-12">
          {/* Emergency Button Section */}
          <section className="text-center">
            <EmergencyButton onClick={handleEmergency} />
            <p className="mt-4 text-sm text-muted-foreground">
              Press for immediate emergency assistance
            </p>
          </section>

          {/* Quick Actions Grid */}
          <section className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickAction
                icon={Phone}
                label="Emergency Contacts"
                onClick={() => console.log("Emergency contacts")}
              />
              <QuickAction
                icon={ShieldAlert}
                label="Safety Tips"
                onClick={() => console.log("Safety tips")}
              />
              <QuickAction
                icon={MapPin}
                label="Share Location"
                onClick={() => console.log("Share location")}
              />
              <QuickAction
                icon={Users}
                label="Support Network"
                onClick={() => console.log("Support network")}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
