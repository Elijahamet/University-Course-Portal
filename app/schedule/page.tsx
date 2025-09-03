import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users } from "lucide-react"

export default function SchedulePage() {
  const schedule = {
    Monday: [
      {
        time: "9:00 AM - 10:15 AM",
        course: "Database Systems",
        code: "CS 4320",
        location: "Engineering Building 201",
        instructor: "Dr. Johnson",
        type: "lecture",
      },
      {
        time: "2:00 PM - 3:15 PM",
        course: "Marketing Principles",
        code: "BUS 3200",
        location: "Business Building 105",
        instructor: "Prof. Williams",
        type: "lecture",
      },
    ],
    Tuesday: [
      {
        time: "11:00 AM - 12:15 PM",
        course: "Calculus III",
        code: "MATH 2210",
        location: "Mathematics Building 301",
        instructor: "Dr. Chen",
        type: "lecture",
      },
      {
        time: "3:30 PM - 5:00 PM",
        course: "Chemistry Lab",
        code: "CHEM 1110L",
        location: "Science Building Lab 4",
        instructor: "Dr. Rodriguez",
        type: "lab",
      },
    ],
    Wednesday: [
      {
        time: "9:00 AM - 10:15 AM",
        course: "Database Systems",
        code: "CS 4320",
        location: "Engineering Building 201",
        instructor: "Dr. Johnson",
        type: "lecture",
      },
      {
        time: "2:00 PM - 3:15 PM",
        course: "Marketing Principles",
        code: "BUS 3200",
        location: "Business Building 105",
        instructor: "Prof. Williams",
        type: "lecture",
      },
    ],
    Thursday: [
      {
        time: "11:00 AM - 12:15 PM",
        course: "Calculus III",
        code: "MATH 2210",
        location: "Mathematics Building 301",
        instructor: "Dr. Chen",
        type: "lecture",
      },
      {
        time: "1:00 PM - 2:30 PM",
        course: "General Chemistry",
        code: "CHEM 1110",
        location: "Science Building 150",
        instructor: "Dr. Rodriguez",
        type: "lecture",
      },
    ],
    Friday: [
      {
        time: "9:00 AM - 10:15 AM",
        course: "Database Systems",
        code: "CS 4320",
        location: "Engineering Building 201",
        instructor: "Dr. Johnson",
        type: "lecture",
      },
      {
        time: "10:30 AM - 11:45 AM",
        course: "CS Lab Session",
        code: "CS 4320L",
        location: "Computer Lab 3",
        instructor: "TA: Sarah Kim",
        type: "lab",
      },
    ],
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "lab":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "seminar":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="schedule" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground text-balance">Class Schedule</h1>
          <p className="text-muted-foreground mt-2 text-pretty">Your weekly class schedule and important locations</p>
        </div>

        <div className="grid gap-6">
          {Object.entries(schedule).map(([day, classes]) => (
            <Card key={day} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">{day}</CardTitle>
                <CardDescription>{classes.length} classes scheduled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((classItem, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50">
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {classItem.time}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground text-balance">{classItem.course}</h4>
                            <p className="text-sm text-primary font-medium">{classItem.code}</p>
                          </div>
                          <Badge className={getTypeColor(classItem.type)}>{classItem.type}</Badge>
                        </div>

                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{classItem.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{classItem.instructor}</span>
                          </div>
                        </div>
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
