import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mail, MailOpen, Reply, Star, Archive } from "lucide-react"

export default function MessagesPage() {
  const messages = [
    {
      id: 1,
      from: "Dr. Johnson",
      fromEmail: "johnson@university.edu",
      subject: "Database Project Feedback Available",
      preview: "Your database design project has been graded. Please review the feedback and...",
      timestamp: "2 hours ago",
      isRead: false,
      isStarred: true,
      category: "academic",
    },
    {
      id: 2,
      from: "Academic Advisor",
      fromEmail: "advisor@university.edu",
      subject: "Course Registration Reminder",
      preview: "Registration for Fall 2024 semester opens next week. Please schedule an appointment...",
      timestamp: "1 day ago",
      isRead: false,
      isStarred: false,
      category: "administrative",
    },
    {
      id: 3,
      from: "Prof. Williams",
      fromEmail: "williams@university.edu",
      subject: "Marketing Group Project Update",
      preview: "The deadline for the marketing strategy analysis has been extended to March 25th...",
      timestamp: "2 days ago",
      isRead: true,
      isStarred: false,
      category: "academic",
    },
    {
      id: 4,
      from: "Library Services",
      fromEmail: "library@university.edu",
      subject: "Book Renewal Notice",
      preview: "Your borrowed books are due for renewal. You can extend the loan period online...",
      timestamp: "3 days ago",
      isRead: true,
      isStarred: false,
      category: "services",
    },
    {
      id: 5,
      from: "Student Activities",
      fromEmail: "activities@university.edu",
      subject: "Spring Career Fair - March 28th",
      preview: "Join us for the annual Spring Career Fair featuring 100+ employers from various...",
      timestamp: "1 week ago",
      isRead: true,
      isStarred: true,
      category: "events",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "administrative":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "services":
        return "bg-green-100 text-green-800 border-green-200"
      case "events":
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="messages" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground text-balance">Messages</h1>
          <p className="text-muted-foreground mt-2 text-pretty">
            Stay connected with faculty, staff, and university services
          </p>
        </div>

        {/* Message Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-blue-900">12</p>
                  <p className="text-sm text-blue-700">Total Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <MailOpen className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-2xl font-bold text-red-900">2</p>
                  <p className="text-sm text-red-700">Unread</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-2xl font-bold text-amber-900">2</p>
                  <p className="text-sm text-amber-700">Starred</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Archive className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-green-900">8</p>
                  <p className="text-sm text-green-700">Archived</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`hover:shadow-md transition-shadow cursor-pointer ${
                !message.isRead ? "bg-blue-50/50 border-blue-200" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(message.from)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-semibold text-balance ${!message.isRead ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {message.from}
                          </h3>
                          <Badge className={getCategoryColor(message.category)}>{message.category}</Badge>
                          {message.isStarred && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                          {!message.isRead && <div className="h-2 w-2 bg-blue-600 rounded-full" />}
                        </div>
                        <p
                          className={`text-sm ${!message.isRead ? "text-muted-foreground" : "text-muted-foreground/80"}`}
                        >
                          {message.fromEmail}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{message.timestamp}</span>
                    </div>

                    <h4
                      className={`font-medium mb-2 text-balance ${!message.isRead ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {message.subject}
                    </h4>
                    <p className="text-sm text-muted-foreground text-pretty line-clamp-2">{message.preview}</p>

                    <div className="flex items-center gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Reply className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Star className="h-4 w-4 mr-1" />
                        Star
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Archive className="h-4 w-4 mr-1" />
                        Archive
                      </Button>
                    </div>
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
