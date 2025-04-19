import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Droplet } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for plants
const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    pin: "A1",
    room: "Living Room",
    lastWatered: "2023-04-12",
    nextWatering: "2023-04-19",
    status: "healthy", // healthy, needs-water, critical
    wateringHistory: [
      { date: "2023-04-12", status: "healthy" },
      { date: "2023-04-05", status: "healthy" },
      { date: "2023-03-29", status: "needs-water" },
      { date: "2023-03-22", status: "healthy" },
    ],
    notes: "Prefers bright, indirect light. Water when top inch of soil is dry.",
  },
  {
    id: 2,
    name: "Snake Plant",
    pin: "B2",
    room: "Bedroom",
    lastWatered: "2023-04-10",
    nextWatering: "2023-04-24",
    status: "healthy",
    wateringHistory: [
      { date: "2023-04-10", status: "healthy" },
      { date: "2023-03-27", status: "healthy" },
      { date: "2023-03-13", status: "healthy" },
      { date: "2023-02-28", status: "needs-water" },
    ],
    notes: "Very drought tolerant. Water only when soil is completely dry.",
  },
  {
    id: 3,
    name: "Peace Lily",
    pin: "C3",
    room: "Office",
    lastWatered: "2023-04-05",
    nextWatering: "2023-04-15",
    status: "needs-water",
    wateringHistory: [
      { date: "2023-04-05", status: "healthy" },
      { date: "2023-03-29", status: "healthy" },
      { date: "2023-03-22", status: "needs-water" },
      { date: "2023-03-15", status: "critical" },
    ],
    notes: "Likes consistently moist soil. Drooping leaves indicate it needs water.",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    pin: "D4",
    room: "Dining Room",
    lastWatered: "2023-04-01",
    nextWatering: "2023-04-14",
    status: "critical",
    wateringHistory: [
      { date: "2023-04-01", status: "needs-water" },
      { date: "2023-03-25", status: "healthy" },
      { date: "2023-03-18", status: "healthy" },
      { date: "2023-03-11", status: "needs-water" },
    ],
    notes: "Sensitive to overwatering and underwatering. Keep soil slightly moist.",
  },
]

export default function PlantDetail({ params }: { params: { id: string } }) {
  const plantId = Number.parseInt(params.id)
  const plant = plants.find((p) => p.id === plantId)

  if (!plant) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Plant Not Found</h1>
        <p className="mb-6">The plant you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{plant.name}</CardTitle>
                <CardDescription>
                  Pin: {plant.pin} • {plant.room}
                </CardDescription>
              </div>
              <StatusBadge status={plant.status} />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last watered:</span>
                <span>{formatDate(plant.lastWatered)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Next watering:</span>
                <span className="font-medium">{formatDate(plant.nextWatering)}</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-2">Care Notes</h3>
              <p className="text-sm text-muted-foreground">{plant.notes}</p>
            </div>

            <div className="pt-4">
              <Button className="w-full">
                <Droplet className="h-4 w-4 mr-2" />
                Water Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Plant History</CardTitle>
            <CardDescription>Track your plant's watering history and health over time</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history">
              <TabsList className="mb-4">
                <TabsTrigger value="history">Watering History</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>

              <TabsContent value="history">
                <div className="space-y-4">
                  {plant.wateringHistory.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <Droplet className={`h-5 w-5 mr-3 ${getStatusColor(entry.status)}`} />
                        <span>{formatDate(entry.date)}</span>
                      </div>
                      <StatusBadge status={entry.status} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="stats">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Average Days Between Watering</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">7.5 days</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Health Status</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">85% Healthy</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function StatusBadge({ status }: { status: string }) {
  if (status === "healthy") {
    return <Badge className="bg-green-500 hover:bg-green-600">Healthy</Badge>
  } else if (status === "needs-water") {
    return <Badge className="bg-yellow-500 hover:bg-yellow-600">Needs Water</Badge>
  } else {
    return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>
  }
}

function getStatusColor(status: string) {
  if (status === "healthy") {
    return "text-green-500"
  } else if (status === "needs-water") {
    return "text-yellow-500"
  } else {
    return "text-red-500"
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}
