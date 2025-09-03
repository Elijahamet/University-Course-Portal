import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Camera, Edit3 } from "lucide-react"

export default function Profile() {
  const studentInfo = {
    name: "John Smith",
    email: "john.smith@university.edu",
    studentId: "2021001234",
    phone: "+1 (555) 123-4567",
    address: "123 University Ave, College Town, ST 12345",
    dateOfBirth: "March 15, 2002",
    major: "Computer Science",
    minor: "Mathematics",
    year: "Junior",
    gpa: "3.7",
    expectedGraduation: "May 2025",
  }

  const academicHistory = [
    { semester: "Fall 2023", courses: 5, gpa: "3.8", credits: 15 },
    { semester: "Spring 2023", courses: 4, gpa: "3.6", credits: 12 },
    { semester: "Fall 2022", courses: 5, gpa: "3.7", credits: 15 },
    { semester: "Spring 2022", courses: 4, gpa: "3.5", credits: 12 },
  ]

  const achievements = [
    { title: "Dean's List", semester: "Fall 2023", description: "Academic excellence with GPA above 3.5" },
    {
      title: "Programming Contest Winner",
      semester: "Spring 2023",
      description: "1st place in university coding competition",
    },
    {
      title: "Research Assistant",
      semester: "Fall 2022",
      description: "Assisted in machine learning research project",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="profile" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and academic records.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/student-profile.png" alt="Profile photo" />
                      <AvatarFallback className="text-lg">JS</AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      aria-label="Change profile photo"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-foreground">{studentInfo.name}</h2>
                    <p className="text-muted-foreground">{studentInfo.email}</p>
                    <p className="text-sm text-muted-foreground">ID: {studentInfo.studentId}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">{studentInfo.year}</Badge>
                    <Badge variant="outline">{studentInfo.major}</Badge>
                    <Badge variant="outline">GPA: {studentInfo.gpa}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Academic Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Major:</span>
                  <span className="font-medium">{studentInfo.major}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Minor:</span>
                  <span className="font-medium">{studentInfo.minor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Graduation:</span>
                  <span className="font-medium">{studentInfo.expectedGraduation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current GPA:</span>
                  <span className="font-medium text-accent">{studentInfo.gpa}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="academic">Academic History</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              {/* Personal Information Tab */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Personal Information
                        </CardTitle>
                        <CardDescription>Update your personal details and contact information</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Smith" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </Label>
                      <Input id="email" type="email" defaultValue={studentInfo.email} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </Label>
                      <Input id="phone" type="tel" defaultValue={studentInfo.phone} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Address
                      </Label>
                      <Textarea id="address" defaultValue={studentInfo.address} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Date of Birth
                      </Label>
                      <Input id="dob" type="date" defaultValue="2002-03-15" />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Academic History Tab */}
              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Academic History
                    </CardTitle>
                    <CardDescription>Your semester-by-semester academic performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {academicHistory.map((semester, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium text-foreground">{semester.semester}</h4>
                            <p className="text-sm text-muted-foreground">
                              {semester.courses} courses • {semester.credits} credits
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-accent">GPA: {semester.gpa}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Cumulative GPA:</span>
                        <span className="text-xl font-bold text-accent">{studentInfo.gpa}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Achievements & Awards
                    </CardTitle>
                    <CardDescription>Recognition and accomplishments during your academic journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                          <div className="flex-shrink-0">
                            <Award className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{achievement.semester}</p>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {achievements.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No achievements recorded yet.</p>
                        <p className="text-sm">Keep up the great work!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
