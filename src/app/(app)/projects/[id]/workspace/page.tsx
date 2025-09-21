import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProjectWorkspacePage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="chat" className="w-full">
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Chat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-64 rounded-md border p-3 text-sm text-muted-foreground overflow-auto">
                <div><span className="font-medium text-foreground">Jane:</span> Kicked off the data schema today.</div>
                <div><span className="font-medium text-foreground">Alex:</span> I can take the vector store setup.</div>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="Write a message..." />
                <Button>Send</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <div className="grid gap-4 md:grid-cols-3">
            {["To Do", "In Progress", "Done"].map((col) => (
              <Card key={col}>
                <CardHeader>
                  <CardTitle className="text-base">{col}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-md border p-3 text-sm">Set up DB schema</div>
                  <div className="rounded-md border p-3 text-sm">Design landing page</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Jane Doe (Owner)", "Alex Kim (Developer)", "Sam Patel (Designer)"].map((m) => (
                <div key={m} className="flex items-center justify-between text-sm">
                  <span>{m}</span>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}