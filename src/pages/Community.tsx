
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Heart, Share2 } from "lucide-react";

const Community = () => {
  return (
    <div className="container py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Community Support</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Connect with others, share experiences, and build a supportive network.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Support Groups */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Support Groups</h3>
          <p className="text-muted-foreground mb-6">
            Join local and online support groups to connect with others.
          </p>
          <Button className="w-full">Find Groups</Button>
        </div>

        {/* Discussion Forums */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <MessageCircle className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
          <p className="text-muted-foreground mb-6">
            Participate in moderated discussions about safety and support.
          </p>
          <Button className="w-full">Join Discussions</Button>
        </div>

        {/* Success Stories */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <Heart className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
          <p className="text-muted-foreground mb-6">
            Read and share inspiring stories from our community.
          </p>
          <Button className="w-full">Read Stories</Button>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="mt-12 p-6 rounded-lg border bg-card max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Community Guidelines</h2>
        <p className="text-muted-foreground text-center mb-6">
          Our community is built on respect, support, and understanding. Please review our guidelines to ensure a safe space for all members.
        </p>
        <div className="flex justify-center">
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share Guidelines
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;
