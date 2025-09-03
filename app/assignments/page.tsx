import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, FileText } from "lucide-react"

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: "Database Design Project",
      course: "CS 4320 - Database Systems",
      dueDate: "2024-03-15",
      priority: "high",
      status: "pending",
      description: "Design and implement a relational database for a library management system",
      points: 100,
    },
    {
      id: 2,
      title: "Marketing Strategy Analysis",
      course: "BUS 3200 - Marketing Principles",
      dueDate: "2024-03-18",
      priority: "medium",
      status: "in-progress",
      description: "Analyze the marketing strategy of a Fortune 500 company",
      points: 75,
    },
    {
      id: 3,
      title: "Calculus Problem Set 8",
      course: "MATH 2210 - Calculus III",
      dueDate: "2024-03-20",
      priority: "low",
      status: "pending",
      description: "Complete problems 1-25 from Chapter 12",
      points: 50,
    },
    {
      id: 4,
      title: "Lab Report: Chemical Reactions",
      course: "CHEM 1110 - General Chemistry",
      dueDate: "2024-03-22",
      priority: "medium",
      status: "submitted",
      description: "Write a comprehensive lab report on acid-base reactions",
      points: 80,
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "pending":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="assignments" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground text-balance">Assignments</h1>
          <p className="text-muted-foreground mt-2 text-pretty">
            Track and manage all your course assignments in one place
          </p>
        </div>

        <div className="grid gap-6">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">{assignment.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">{assignment.course}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(assignment.priority)}>{assignment.priority} priority</Badge>
                    <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{assignment.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{assignment.points} points</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {assignment.status !== "submitted" && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Submit Assignment
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
