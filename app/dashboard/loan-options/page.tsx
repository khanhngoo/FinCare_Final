import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, Lightbulb, AlertCircle, CheckCircle2 } from "lucide-react"

export default function LoanOptionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Matching Loan Options</h2>
        <p className="text-muted-foreground">
          Based on your profile and documents, here are loan options that match your business
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search loan options..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 pl-8 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter Options
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all" className="flex gap-2">
            All Options
          </TabsTrigger>
          <TabsTrigger value="best-match" className="flex gap-2">
            Best Matches
          </TabsTrigger>
          <TabsTrigger value="quick-approval" className="flex gap-2">
            Quick Approval
          </TabsTrigger>
          <TabsTrigger value="low-interest" className="flex gap-2">
            Low Interest
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>SBA Small Business Loan</CardTitle>
                  <CardDescription>Small Business Administration backed loan</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">85% Match</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Loan Amount</div>
                  <div className="text-lg font-bold">$50,000 - $150,000</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-bold">7.25% - 8.75%</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Term Length</div>
                  <div className="text-lg font-bold">5 - 10 years</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Processing Time</div>
                  <div className="text-lg font-bold">30 - 90 days</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Profile Match</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Business operating for 2+ years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Good personal credit score (680+)</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Missing 2 years of business tax returns</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Collateral documentation incomplete</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/loan-options/sba-insights">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Detailed Insights
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Business Line of Credit</CardTitle>
                  <CardDescription>Flexible revolving credit line for business needs</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">78% Match</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Credit Line</div>
                  <div className="text-lg font-bold">$25,000 - $75,000</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-bold">9.5% - 12.75%</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Draw Period</div>
                  <div className="text-lg font-bold">1 - 3 years</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Processing Time</div>
                  <div className="text-lg font-bold">7 - 14 days</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Profile Match</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Business operating for 1+ years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Monthly revenue of $10,000+</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Debt-to-income ratio needs improvement</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Missing recent bank statements</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/loan-options/loc-insights">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Detailed Insights
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Equipment Financing</CardTitle>
                  <CardDescription>Financing specifically for business equipment purchases</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">92% Match</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Loan Amount</div>
                  <div className="text-lg font-bold">$10,000 - $50,000</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-bold">6.5% - 10%</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Term Length</div>
                  <div className="text-lg font-bold">2 - 5 years</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Processing Time</div>
                  <div className="text-lg font-bold">2 - 10 days</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Profile Match</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Business operating for 6+ months</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Equipment serves as collateral</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Credit score 650+</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Missing equipment specifications and quotes</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/loan-options/equipment-insights">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Detailed Insights
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="best-match" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Equipment Financing</CardTitle>
                  <CardDescription>Financing specifically for business equipment purchases</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">92% Match</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Loan Amount</div>
                  <div className="text-lg font-bold">$10,000 - $50,000</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-bold">6.5% - 10%</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Term Length</div>
                  <div className="text-lg font-bold">2 - 5 years</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Processing Time</div>
                  <div className="text-lg font-bold">2 - 10 days</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Profile Match</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Business operating for 6+ months</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Equipment serves as collateral</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Credit score 650+</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Missing equipment specifications and quotes</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/loan-options/equipment-insights">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Detailed Insights
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="quick-approval" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Business Line of Credit</CardTitle>
                  <CardDescription>Flexible revolving credit line for business needs</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">78% Match</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Credit Line</div>
                  <div className="text-lg font-bold">$25,000 - $75,000</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-bold">9.5% - 12.75%</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Draw Period</div>
                  <div className="text-lg font-bold">1 - 3 years</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Processing Time</div>
                  <div className="text-lg font-bold">7 - 14 days</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Profile Match</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Business operating for 1+ years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Monthly revenue of $10,000+</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Debt-to-income ratio needs improvement</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Missing recent bank statements</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/loan-options/loc-insights">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Detailed Insights
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="low-interest" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>SBA Small Business Loan</CardTitle>
                  <CardDescription>Small Business Administration backed loan</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">85% Match</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Loan Amount</div>
                  <div className="text-lg font-bold">$50,000 - $150,000</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-bold">7.25% - 8.75%</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Term Length</div>
                  <div className="text-lg font-bold">5 - 10 years</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Processing Time</div>
                  <div className="text-lg font-bold">30 - 90 days</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Your Profile Match</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Business operating for 2+ years</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Good personal credit score (680+)</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Missing 2 years of business tax returns</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <span className="text-sm">Collateral documentation incomplete</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/loan-options/sba-insights">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Detailed Insights
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
