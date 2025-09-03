import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Clock, Users, Star, BookOpen } from "lucide-react"

export default function CourseCatalog() {
  const courses = [
    {
      id: 1,
      code: "CS 201",
      title: "Data Structures and Algorithms",
      instructor: "Dr. Sarah Johnson",
      credits: 3,
      schedule: "MWF 10:00-11:00 AM",
      enrolled: 45,
      capacity: 60,
      rating: 4.8,
      difficulty: "Intermediate",
      department: "Computer Science",
      description:
        "Introduction to fundamental data structures and algorithms with emphasis on problem-solving techniques.",
      prerequisites: ["CS 101"],
      isEnrolled: false,
    },
    {
      id: 2,
      code: "MATH 301",
      title: "Calculus III",
      instructor: "Prof. Michael Williams",
      credits: 4,
      schedule: "TTh 2:00-3:30 PM",
      enrolled: 38,
      capacity: 50,
      rating: 4.5,
      difficulty: "Advanced",
      department: "Mathematics",
      description: "Multivariable calculus including partial derivatives, multiple integrals, and vector calculus.",
      prerequisites: ["MATH 201", "MATH 202"],
      isEnrolled: true,
    },
    {
      id: 3,
      code: "PHYS 201",
      title: "Physics II: Electricity and Magnetism",
      instructor: "Dr. Lisa Chen",
      credits: 4,
      schedule: "MWF 9:00-10:00 AM, Lab: W 2:00-5:00 PM",
      enrolled: 32,
      capacity: 40,
      rating: 4.6,
      difficulty: "Intermediate",
      department: "Physics",
      description: "Study of electric and magnetic phenomena, electromagnetic waves, and modern physics concepts.",
      prerequisites: ["PHYS 101", "MATH 201"],
      isEnrolled: true,
    },
    {
      id: 4,
      code: "ENG 102",
      title: "Advanced Composition",
      instructor: "Prof. Amanda Rodriguez",
      credits: 3,
      schedule: "TTh 11:00 AM-12:30 PM",
      enrolled: 28,
      capacity: 35,
      rating: 4.7,
      difficulty: "Beginner",
      department: "English",
      description: "Advanced writing techniques with focus on research, argumentation, and academic discourse.",
      prerequisites: ["ENG 101"],
      isEnrolled: false,
    },
    {
      id: 5,
      code: "HIST 201",
      title: "World History: 1500-Present",
      instructor: "Dr. Robert Kim",
      credits: 3,
      schedule: "MWF 1:00-2:00 PM",
      enrolled: 42,
      capacity: 55,
      rating: 4.4,
      difficulty: "Beginner",
      department: "History",
      description:
        "Survey of world history from 1500 to present, focusing on global connections and cultural exchange.",
      prerequisites: [],
      isEnrolled: false,
    },
    {
      id: 6,
      code: "BIO 301",
      title: "Molecular Biology",
      instructor: "Dr. Jennifer Park",
      credits: 4,
      schedule: "TTh 9:30-11:00 AM, Lab: F 1:00-4:00 PM",
      enrolled: 25,
      capacity: 30,
      rating: 4.9,
      difficulty: "Advanced",
      department: "Biology",
      description:
        "Detailed study of molecular mechanisms in living organisms, including DNA, RNA, and protein synthesis.",
      prerequisites: ["BIO 201", "CHEM 201"],
      isEnrolled: false,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="courses" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Course Catalog</h1>
          <p className="text-muted-foreground">Discover and enroll in courses for the upcoming semester.</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search courses by title, code, or instructor..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-lg">{course.code}</CardTitle>
                    <CardDescription className="font-medium text-foreground mt-1">{course.title}</CardDescription>
                  </div>
                  {course.isEnrolled && (
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      Enrolled
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{course.instructor}</span>
                  <span>•</span>
                  <span>{course.credits} credits</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{course.schedule}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {course.enrolled}/{course.capacity} enrolled
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-muted-foreground">{course.rating}/5.0</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(course.difficulty)}>{course.difficulty}</Badge>
                  <span className="text-xs text-muted-foreground">{course.department}</span>
                </div>

                {course.prerequisites.length > 0 && (
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Prerequisites:</span> {course.prerequisites.join(", ")}
                  </div>
                )}

                <div className="pt-2">
                  {course.isEnrolled ? (
                    <Button className="w-full bg-transparent" variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Course
                    </Button>
                  ) : (
                    <Button className="w-full">Enroll Now</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Courses
          </Button>
        </div>
      </main>
    </div>
  )
}
