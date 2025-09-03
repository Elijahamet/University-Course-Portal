import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, TrendingUp, Users, FileText, CheckCircle, AlertCircle } from "lucide-react"

export default function Dashboard() {
  const upcomingAssignments = [
    {
      id: 1,
      title: "Physics Lab Report",
      course: "PHYS 201",
      courseType: "science",
      dueDate: "2024-01-15",
      priority: "high",
    },
    {
      id: 2,
      title: "History Essay",
      course: "HIST 101",
      courseType: "humanities",
      dueDate: "2024-01-18",
      priority: "medium",
    },
    {
      id: 3,
      title: "Math Problem Set",
      course: "MATH 301",
      courseType: "math",
      dueDate: "2024-01-20",
      priority: "low",
    },
  ]

  const recentGrades = [
    {
      course: "Computer Science 101",
      courseType: "cs",
      assignment: "Midterm Exam",
      grade: "A-",
      gradeType: "a",
      points: "92/100",
    },
    {
      course: "English Literature",
      courseType: "humanities",
      assignment: "Essay #2",
      grade: "B+",
      gradeType: "b",
      points: "87/100",
    },
    { course: "Statistics", courseType: "math", assignment: "Quiz 3", grade: "A", gradeType: "a", points: "95/100" },
  ]

  const enrolledCourses = [
    {
      code: "CS 101",
      name: "Introduction to Computer Science",
      courseType: "cs",
      instructor: "Dr. Johnson",
      progress: 75,
      nextClass: "Mon 10:00 AM",
    },
    {
      code: "MATH 301",
      name: "Calculus III",
      courseType: "math",
      instructor: "Prof. Williams",
      progress: 60,
      nextClass: "Tue 2:00 PM",
    },
    {
      code: "PHYS 201",
      name: "Physics II",
      courseType: "science",
      instructor: "Dr. Chen",
      progress: 80,
      nextClass: "Wed 9:00 AM",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200"
      case "medium":
        return "text-amber-600 bg-amber-50 border-amber-200"
      case "low":
        return "text-green-600 bg-green-50 border-green-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getCourseColor = (courseType: string) => {
    switch (courseType) {
      case "cs":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "math":
        return "text-purple-600 bg-purple-50 border-purple-200"
      case "science":
        return "text-green-600 bg-green-50 border-green-200"
      case "humanities":
        return "text-amber-600 bg-amber-50 border-amber-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getGradeColor = (gradeType: string) => {
    switch (gradeType) {
      case "a":
        return "text-green-700 bg-green-100 px-2 py-1 rounded-md font-semibold"
      case "b":
        return "text-amber-700 bg-amber-100 px-2 py-1 rounded-md font-semibold"
      case "c":
        return "text-red-700 bg-red-100 px-2 py-1 rounded-md font-semibold"
      default:
        return "text-gray-700 bg-gray-100 px-2 py-1 rounded-md font-semibold"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="dashboard" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">Welcome back, John!</h1>
          <p className="text-muted-foreground leading-relaxed">Here's what's happening with your courses today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-blue-600">6</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Assignments</p>
                  <p className="text-2xl font-bold text-amber-600">3</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-full">
                  <FileText className="h-6 w-6 text-amber-600" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current GPA</p>
                  <p className="text-2xl font-bold text-green-600">3.7</p>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Groups</p>
                  <p className="text-2xl font-bold text-purple-600">2</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Assignments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  Upcoming Assignments
                </CardTitle>
                <CardDescription>Stay on top of your deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className={`flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow ${getCourseColor(assignment.courseType)}`}
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${getPriorityColor(assignment.priority)} border`}>
                          {assignment.priority} priority
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">Due {assignment.dueDate}</p>
                          <p className="text-xs text-muted-foreground">3 days left</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  View All Assignments
                </Button>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  Course Progress
                </CardTitle>
                <CardDescription>Track your progress in each course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledCourses.map((course, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${getCourseColor(course.courseType)}`}>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{course.code}</h4>
                          <p className="text-sm text-muted-foreground text-pretty">{course.name}</p>
                          <p className="text-xs text-muted-foreground">Instructor: {course.instructor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{course.progress}%</p>
                          <p className="text-xs text-muted-foreground">Next: {course.nextClass}</p>
                        </div>
                      </div>
                      <Progress
                        value={course.progress}
                        className={`h-3 ${course.progress >= 80 ? "text-green-600" : course.progress >= 60 ? "text-amber-600" : "text-red-600"}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Recent Grades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  Recent Grades
                </CardTitle>
                <CardDescription>Your latest assignment results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGrades.map((grade, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-start p-3 border rounded-lg ${getCourseColor(grade.courseType)}`}
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-foreground">{grade.course}</h4>
                        <p className="text-xs text-muted-foreground">{grade.assignment}</p>
                      </div>
                      <div className="text-right">
                        <p className={getGradeColor(grade.gradeType)}>{grade.grade}</p>
                        <p className="text-xs text-muted-foreground mt-1">{grade.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  View All Grades
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start hover:bg-blue-50 hover:text-blue-700 transition-colors bg-transparent"
                  variant="outline"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Button>
                <Button
                  className="w-full justify-start hover:bg-green-50 hover:text-green-700 transition-colors bg-transparent"
                  variant="outline"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Submit Assignment
                </Button>
                <Button
                  className="w-full justify-start hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent"
                  variant="outline"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Join Study Group
                </Button>
                <Button
                  className="w-full justify-start hover:bg-amber-50 hover:text-amber-700 transition-colors bg-transparent"
                  variant="outline"
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Get Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
