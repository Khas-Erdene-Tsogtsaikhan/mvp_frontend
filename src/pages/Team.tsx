import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, CheckCircle2 } from "lucide-react";

const teamMembers = [
  {
    name: "Alice Chen",
    role: "Designer",
    email: "alice@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
    projects: 3,
    tasksCompleted: 24,
    joinDate: "2025-01-15",
  },
  {
    name: "Bob Smith",
    role: "Backend Developer",
    email: "bob@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
    projects: 4,
    tasksCompleted: 38,
    joinDate: "2024-11-20",
  },
  {
    name: "Charlie Davis",
    role: "Backend Developer",
    email: "charlie@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=charlie",
    projects: 2,
    tasksCompleted: 19,
    joinDate: "2025-02-01",
  },
  {
    name: "Diana Lee",
    role: "Frontend Developer",
    email: "diana@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=diana",
    projects: 3,
    tasksCompleted: 31,
    joinDate: "2024-12-10",
  },
  {
    name: "Eve Wilson",
    role: "QA Engineer",
    email: "eve@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eve",
    projects: 5,
    tasksCompleted: 42,
    joinDate: "2024-10-05",
  },
];

const roleColors: Record<string, string> = {
  Designer: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Backend Developer": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Frontend Developer": "bg-green-500/10 text-green-500 border-green-500/20",
  "QA Engineer": "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Team Members</h1>
          <p className="text-muted-foreground">Manage your team and track their progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.email}
              className="animate-fade-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <Badge variant="outline" className={roleColors[member.role]}>
                      {member.role}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="mr-2 h-4 w-4" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    Joined {new Date(member.joinDate).toLocaleDateString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-2xl font-bold text-foreground">{member.projects}</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-2xl font-bold text-foreground">{member.tasksCompleted}</p>
                    <p className="text-xs text-muted-foreground">Tasks Done</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  View Tasks
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Team;
