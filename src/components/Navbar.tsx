
import { Button } from "@/components/ui/button";
import { Home, Menu, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6 text-primary" />
          <span className="hidden md:inline-block">SafetyGuard</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">
            Community
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="default" className="hidden md:flex gap-2">
            <Phone className="h-4 w-4" />
            Emergency Call
          </Button>
        </div>
      </div>
    </nav>
  );
}
