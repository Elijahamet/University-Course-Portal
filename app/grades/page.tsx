import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export default function GradesPage() {
  const courses = [
    {
      id: 1,
      name: "Database Systems",
      code: "CS 4320",
      currentGrade: 92.5,
      letterGrade: "A-",
      creditHours: 3,
      trend: "up",
      assignments: [
        { name: "Midterm Exam", grade: 88, points: 100, weight: "25%" },
        { name: "Project 1", grade: 95, points: 100, weight: "20%" },
        { name: "Homework 1-5", grade: 94, points: 100, weight: "15%" },
      ],
    },
    {
      id: 2,
      name: "Marketing Principles",
      code: "BUS 3200",
      currentGrade: 87.2,
      letterGrade: "B+",
      creditHours: 3,
      trend: "down",
      assignments: [
        { name: "Case Study Analysis", grade: 85, points: 100, weight: "30%" },
        { name: "Group Project", grade: 90, points: 100, weight: "25%" },
        { name: "Participation", grade: 88, points: 100, weight: "10%" },
      ],
    },
    {
      id: 3,
      name: "Calculus III",
      code: "MATH 2210",
      currentGrade: 78.8,
      letterGrade: "C+",
      creditHours: 4,
      trend: "stable",
      assignments: [
        { name: "Exam 1", grade: 82, points: 100, weight: "20%" },
        { name: "Exam 2", grade: 75, points: 100, weight: "20%" },
        { name: "Problem Sets", grade: 80, points: 100, weight: "25%" },
      ],
    },
    {
      id: 4,
      name: "General Chemistry",
      code: "CHEM 1110",
      currentGrade: 91.3,
      letterGrade: "A-",
      creditHours: 4,
      trend: "up",
      assignments: [
        { name: "Lab Reports", grade: 93, points: 100, weight: "30%" },
        { name: "Midterm", grade: 89, points: 100, weight: "25%" },
        { name: "Quizzes", grade: 92, points: 100, weight: "20%" },
      ],
    },
  ]

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600"
    if (grade >= 80) return "text-blue-600"
    if (grade >= 70) return "text-amber-600"
    return "text-red-600"
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const overallGPA = 3.42

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="grades" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground text-balance">Grades & Performance</h1>
          <p className="text-muted-foreground mt-2 text-pretty">
            Monitor your academic progress and course performance
          </p>
        </div>

        {/* GPA Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Current Semester GPA</CardTitle>
            <CardDescription>Based on current grades and credit hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-2">{overallGPA}</div>
            <Progress value={overallGPA * 25} className="w-full h-3" />
            <p className="text-sm text-muted-foreground mt-2">Excellent performance! Keep up the great work.</p>
          </CardContent>
        </Card>

        {/* Course Grades */}
        <div className="grid gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-balance">{course.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {course.code} • {course.creditHours} Credit Hours
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    {getTrendIcon(course.trend)}
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getGradeColor(course.currentGrade)}`}>
                        {course.currentGrade}%
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        {course.letterGrade}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Recent Assignments
                  </h4>
                  {course.assignments.map((assignment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="font-medium text-pretty">{assignment.name}</p>
                        <p className="text-sm text-muted-foreground">Weight: {assignment.weight}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${getGradeColor(assignment.grade)}`}>
                          {assignment.grade}/{assignment.points}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {((assignment.grade / assignment.points) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
