import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, LineChart, ShieldCheck, Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6 text-primary" />
            <span>FinCare</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Prepare Better SME Loan Applications
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
              FinCare helps small and medium enterprises organize documents, find matching loan options, and get
              personalized insights to improve loan application success.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Management</h3>
                <p className="text-muted-foreground">
                  Securely upload, organize, and manage all your business documents in one place.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Intelligent Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your documents to match you with suitable loan options based on your business profile.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profile Improvement</h3>
                <p className="text-muted-foreground">
                  Get personalized insights on how to improve your business profile for better loan approval chances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Register</h3>
                <p className="text-muted-foreground">Create your secure account to get started.</p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
                <p className="text-muted-foreground">Upload your business and financial documents.</p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Suggestions</h3>
                <p className="text-muted-foreground">Receive tailored loan options based on your profile.</p>
              </div>

              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply & Improve</h3>
                <p className="text-muted-foreground">Submit applications and get insights to improve your profile.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-10 bg-muted/30">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <Building2 className="h-5 w-5 text-primary" />
            <span>FinCare</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FinCare. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
