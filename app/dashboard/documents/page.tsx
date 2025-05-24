"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FileUploader } from "@/components/file-uploader"
import { FileText, Building2, CreditCard, Search, Filter, Download, Trash2, Eye, Plus } from "lucide-react"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Document Management</h2>
          <p className="text-muted-foreground">Upload, organize, and manage your business documents</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload New Document
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all" className="flex gap-2">
            <FileText className="h-4 w-4" />
            All Documents
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex gap-2">
            <Building2 className="h-4 w-4" />
            Profile Documents
          </TabsTrigger>
          <TabsTrigger value="financial" className="flex gap-2">
            <CreditCard className="h-4 w-4" />
            Financial Documents
          </TabsTrigger>
          <TabsTrigger value="collateral" className="flex gap-2">
            <Building2 className="h-4 w-4" />
            Collateral Documents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Documents</CardTitle>
              <CardDescription>View and manage all your uploaded documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
                  <div className="col-span-2">Document Name</div>
                  <div>Category</div>
                  <div>Date Uploaded</div>
                  <div>Actions</div>
                </div>

                <div className="grid grid-cols-5 items-center py-3 border-b">
                  <div className="col-span-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Business Registration.pdf</span>
                  </div>
                  <div>Profile</div>
                  <div className="text-sm text-muted-foreground">May 10, 2023</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-5 items-center py-3 border-b">
                  <div className="col-span-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Business License.pdf</span>
                  </div>
                  <div>Profile</div>
                  <div className="text-sm text-muted-foreground">May 10, 2023</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-5 items-center py-3 border-b">
                  <div className="col-span-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Bank Statements - Q1 2023.pdf</span>
                  </div>
                  <div>Financial</div>
                  <div className="text-sm text-muted-foreground">Apr 15, 2023</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-5 items-center py-3 border-b">
                  <div className="col-span-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Financial Statements 2022.pdf</span>
                  </div>
                  <div>Financial</div>
                  <div className="text-sm text-muted-foreground">Mar 20, 2023</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-5 items-center py-3">
                  <div className="col-span-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Property Deed.pdf</span>
                  </div>
                  <div>Collateral</div>
                  <div className="text-sm text-muted-foreground">Feb 05, 2023</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Profile Documents</CardTitle>
              <CardDescription>Upload documents related to your business profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FileUploader
                  label="Business Registration"
                  description="Certificate of incorporation or business registration"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Business License"
                  description="Current business operating license"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Tax ID Documentation"
                  description="EIN or tax identification documents"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Business Plan"
                  description="Current business plan"
                  icon={<FileText className="h-4 w-4" />}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Financial Documents</CardTitle>
              <CardDescription>Upload documents related to your business finances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FileUploader
                  label="Bank Statements"
                  description="Last 6 months of business bank statements"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Financial Statements"
                  description="Balance sheet and income statements"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Tax Returns"
                  description="Last 2 years of business tax returns"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Cash Flow Projections"
                  description="Projected cash flow for next 12 months"
                  icon={<FileText className="h-4 w-4" />}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collateral" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Collateral Documents</CardTitle>
              <CardDescription>Upload documents related to your business collateral</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FileUploader
                  label="Property Documents"
                  description="Deeds, titles, or leases for business property"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Equipment Documentation"
                  description="Proof of ownership for major equipment"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Inventory Records"
                  description="Current inventory valuation and records"
                  icon={<FileText className="h-4 w-4" />}
                />
                <FileUploader
                  label="Other Assets"
                  description="Documentation for any other business assets"
                  icon={<FileText className="h-4 w-4" />}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
