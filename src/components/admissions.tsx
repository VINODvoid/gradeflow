import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"


export const Admissions = () =>{
    return (
        <section id="admissions" className="py-20 border-t border-accent-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Admission Process</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Join our community in four easy steps and begin your path to success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Submit Application</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Complete our simple online form with your academic details and personal information
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Document Verification</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Submit required documents including previous academic records and identification
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Entrance Assessment</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Take a simple assessment to help us understand your academic level and interests
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Welcome Aboard</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Receive confirmation and complete enrollment to start your educational journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 font-semibold btn-primary"
              >
                Begin Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}