import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, AlertCircle, Lightbulb, PlusCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Acme Inc.</h1>
        <p className="text-muted-foreground">
          Prepare your documents and find matching loan options to improve your chances of approval.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Document Completion */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Document Completion</h3>
          </div>
          <p className="mt-1 text-2xl font-bold">72%</p>
          <p className="text-sm text-muted-foreground">Overall document completion</p>
        </div>

        {/* Missing Documents */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Missing Documents</h3>
          </div>
          <p className="mt-1 text-2xl font-bold">4</p>
          <p className="text-sm text-muted-foreground">Critical documents needed</p>
        </div>

        {/* Matching Loan Options */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Matching Loan Options</h3>
          </div>
          <p className="mt-1 text-2xl font-bold">3</p>
          <p className="text-sm text-muted-foreground">Loan options that match your profile</p>
        </div>

        {/* Best Match Score */}
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Best Match Score</h3>
          </div>
          <p className="mt-1 text-2xl font-bold">92%</p>
          <p className="text-sm text-muted-foreground">Your highest loan match score</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Document Status */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Document Status</h3>
          <p className="text-sm text-muted-foreground">Status of your document preparation</p>
          
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Profile Documents</span>
              </div>
              <span>Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span>Financial Documents</span>
              </div>
              <span>Partial</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span>Collateral Documents</span>
              </div>
              <span>Missing</span>
            </div>
          </div>
        </div>

        {/* Document Completion */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Document Completion</h3>
          <p className="text-sm text-muted-foreground">Progress of your document preparation</p>
          
          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Overall Completion</span>
                <span>72%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[72%] rounded-full bg-primary" />
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Profile Documents</span>
                <span>90%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[90%] rounded-full bg-primary" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Financial Documents</span>
                <span>65%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[65%] rounded-full bg-primary" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Business History</span>
                <span>85%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[85%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
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
