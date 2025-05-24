import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, AlertCircle, Lightbulb, PlusCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, Acme Inc.</h2>
          <p className="text-muted-foreground">
            Prepare your documents and find matching loan options to improve your chances of approval.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/documents">
            <PlusCircle className="mr-2 h-4 w-4" />
            Upload Documents
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Document Completion</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">Overall document completion</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Missing Documents</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Critical documents needed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Matching Loan Options</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Loan options that match your profile</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Match Score</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Your highest loan match score</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Document Status</CardTitle>
            <CardDescription>Status of your document preparation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 text-sm text-muted-foreground">
                <div>Document Category</div>
                <div>Status</div>
                <div>Last Updated</div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Profile Documents</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>Complete</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">May 15, 2023</div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Financial Documents</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Partial</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Apr 22, 2023</div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Collateral Documents</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>Missing</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Not uploaded</div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/documents" className="flex items-center gap-1">
                  Manage Documents
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Document Completion</CardTitle>
            <CardDescription>Progress of your document preparation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Completion</span>
                <span className="font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Documents</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-1.5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Financial Documents</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-1.5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Collateral Documents</span>
                    <span className="font-medium">50%</span>
                  </div>
                  <Progress value={50} className="h-1.5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Business History</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-1.5" />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/documents">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload Documents
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/loan-options" className="flex items-center gap-1">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Loan Options
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Matching Loan Options</CardTitle>
          <CardDescription>Loan options that best match your business profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">SBA Small Business Loan</p>
                <p className="text-sm text-muted-foreground">Up to $150,000 at 7.25% APR</p>
              </div>
              <div className="text-sm font-medium text-green-600">85% Match</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Business Line of Credit</p>
                <p className="text-sm text-muted-foreground">Up to $75,000 at 9.5% APR</p>
              </div>
              <div className="text-sm font-medium text-green-600">78% Match</div>
            </div>
            <Button size="sm" asChild>
              <Link href="/dashboard/loan-options">View All Loan Options</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
