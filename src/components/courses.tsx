import { BookOpen, CheckCircle2, Users, Award } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

export const Courses = () =>{
    return (
        <section id="courses" className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Stream</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our diverse programs designed to unlock your potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/5 border-white/10 rounded-2xl card-hover">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Science Stream</CardTitle>
                <CardDescription className="text-gray-400">Physics, Chemistry, Biology, Mathematics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Advanced laboratory facilities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Hands-on practical learning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Competitive exam preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 rounded-2xl card-hover">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Commerce Stream</CardTitle>
                <CardDescription className="text-gray-400">Accounting, Business Studies, Economics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Industry-relevant curriculum</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Financial literacy programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Entrepreneurship training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 rounded-2xl card-hover">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Arts Stream</CardTitle>
                <CardDescription className="text-gray-400">History, Geography, Political Science</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive humanities education</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Critical thinking development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Cultural enrichment programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}