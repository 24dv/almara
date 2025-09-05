import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Sent",
      description: "We'll be in touch within 24 hours to schedule your call.",
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground font-museo-moderno text-xl">
            Request a Call
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input 
              id="name" 
              required 
              className="bg-background border-border text-foreground"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              className="bg-background border-border text-foreground"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">Company</Label>
            <Input 
              id="company" 
              className="bg-background border-border text-foreground"
              placeholder="Your company name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">What are you building?</Label>
            <Textarea 
              id="message" 
              required 
              className="bg-background border-border text-foreground min-h-[100px]"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};