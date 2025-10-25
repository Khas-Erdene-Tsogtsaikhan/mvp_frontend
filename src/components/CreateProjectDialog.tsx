import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateProjectDialog = ({ open, onOpenChange }: CreateProjectDialogProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!name || !description) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Project created! 🎉",
      description: "AI has generated your roadmap and assigned tasks to team members",
    });
    
    setIsGenerating(false);
    onOpenChange(false);
    
    // Navigate to the new project (mock ID)
    navigate("/project/new");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Sparkles className="mr-2 h-6 w-6 text-accent" />
            Create New Project
          </DialogTitle>
          <DialogDescription>
            Describe your project and let AI generate a complete roadmap with tasks, roles, and deadlines
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              placeholder="e.g., AI Chat Platform"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isGenerating}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what you want to build, key features, target users, and any specific requirements..."
              className="min-h-[150px] resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isGenerating}
            />
            <p className="text-xs text-muted-foreground">
              💡 The more detailed your description, the better AI can generate your roadmap
            </p>
          </div>

          {isGenerating && (
            <div className="bg-gradient-accent rounded-lg p-4 space-y-3">
              <div className="flex items-center text-accent">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                <span className="font-medium">AI is working on your project...</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Analyzing project requirements</p>
                <p>✓ Generating roadmap and milestones</p>
                <p className="animate-pulse">→ Breaking down tasks and assigning roles...</p>
              </div>
            </div>
          )}

          <Button
            onClick={handleCreate}
            disabled={isGenerating}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Create with AI
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
