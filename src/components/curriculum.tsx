import { BookOpen, Users, Award } from "lucide-react"

export const Curriculum = () =>{
    return (
        <section className="py-20 border-t border-accent-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Curriculum</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive programs designed to meet global educational standards while preserving local values.
              </p>
            </div>

            <div>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
              <p className="text-gray-400 leading-relaxed">
                Learn from passionate educators with years of experience and dedication to student success.
              </p>
            </div>

            <div>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Facilities</h3>
              <p className="text-gray-400 leading-relaxed">
                State-of-the-art infrastructure with digital classrooms, labs, and online learning resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}