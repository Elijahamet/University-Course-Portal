import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Book, Search, Download, ExternalLink, Clock, Users } from "lucide-react"

export default function LibraryPage() {
  const resources = [
    {
      id: 1,
      title: "Database System Concepts",
      author: "Silberschatz, Galvin, Gagne",
      type: "textbook",
      format: "PDF",
      availability: "available",
      dueDate: null,
      description: "Comprehensive guide to database management systems and SQL",
    },
    {
      id: 2,
      title: "Marketing Research Methods",
      author: "Burns & Bush",
      type: "textbook",
      format: "Physical",
      availability: "checked-out",
      dueDate: "2024-03-25",
      description: "Essential methods and techniques for marketing research",
    },
    {
      id: 3,
      title: "IEEE Computer Society Digital Library",
      author: "IEEE",
      type: "database",
      format: "Online",
      availability: "available",
      dueDate: null,
      description: "Access to computer science journals and conference papers",
    },
    {
      id: 4,
      title: "Calculus: Early Transcendentals",
      author: "Stewart",
      type: "textbook",
      format: "E-book",
      availability: "available",
      dueDate: null,
      description: "Complete calculus textbook with interactive examples",
    },
    {
      id: 5,
      title: "Chemistry Lab Manual",
      author: "University Chemistry Dept",
      type: "manual",
      format: "PDF",
      availability: "available",
      dueDate: null,
      description: "Laboratory procedures and safety guidelines for general chemistry",
    },
  ]

  const studySpaces = [
    {
      name: "Group Study Room A",
      capacity: 6,
      equipment: ["Whiteboard", "TV Display", "Power Outlets"],
      availability: "available",
      timeSlot: "2:00 PM - 4:00 PM",
    },
    {
      name: "Silent Study Area",
      capacity: 20,
      equipment: ["Individual Desks", "Power Outlets", "Good Lighting"],
      availability: "available",
      timeSlot: "All Day",
    },
    {
      name: "Computer Lab",
      capacity: 15,
      equipment: ["Desktop Computers", "Printers", "Scanners"],
      availability: "occupied",
      timeSlot: "Available at 3:30 PM",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "textbook":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "database":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "manual":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "checked-out":
        return "bg-red-100 text-red-800 border-red-200"
      case "occupied":
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="library" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground text-balance">Library & Resources</h1>
          <p className="text-muted-foreground mt-2 text-pretty">
            Access digital resources, reserve study spaces, and manage your library account
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input placeholder="Search books, journals, databases..." className="w-full" />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resources Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-balance">Digital Resources</h2>
            <div className="space-y-4">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-balance">{resource.title}</h3>
                        <p className="text-muted-foreground text-sm">by {resource.author}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getTypeColor(resource.type)}>{resource.type}</Badge>
                        <Badge className={getAvailabilityColor(resource.availability)}>{resource.availability}</Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 text-pretty">{resource.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Format: {resource.format}</span>
                        {resource.dueDate && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Due: {new Date(resource.dueDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {resource.availability === "available" && (
                          <>
                            {resource.format === "PDF" || resource.format === "E-book" ? (
                              <Button size="sm" className="bg-primary hover:bg-primary/90">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            ) : (
                              <Button size="sm" className="bg-primary hover:bg-primary/90">
                                <Book className="h-4 w-4 mr-1" />
                                Reserve
                              </Button>
                            )}
                          </>
                        )}
                        {resource.type === "database" && (
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Access
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Study Spaces Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-balance">Study Spaces</h2>
            <div className="space-y-4">
              {studySpaces.map((space, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-balance">{space.name}</CardTitle>
                      <Badge className={getAvailabilityColor(space.availability)}>{space.availability}</Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Capacity: {space.capacity} people
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Equipment:</h4>
                        <div className="flex flex-wrap gap-1">
                          {space.equipment.map((item, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{space.timeSlot}</span>
                      </div>

                      {space.availability === "available" && (
                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                          Reserve Space
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
