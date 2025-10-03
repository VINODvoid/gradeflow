import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Header = () =>{
    return (
        <section className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Best platform for quality {" "}
            <span className="bg-gradient-to-tr
from-green-600
via-green-400
to-transparent
bg-clip-text
text-transparent">
             educational management system
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto text-balance">
            Join a community of learners where modern teaching meets traditional values. Unlock your potential with
            expert faculty and world-class facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="#admissions">
                <Button
                  size="lg"
                  className="bg-accent-foreground text-black hover:bg-gray-200 rounded-full px-8 h-12 font-semibold btn-primary"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/20 hover:border-primary hover:bg-white/5 rounded-full px-8 h-12 font-semibold bg-transparent "
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8 border-t border-accent-foreground">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-sm text-foreground">Students</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
                <div className="text-sm text-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">25+</div>
                <div className="text-sm text-foreground">Expert Faculty</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
                <div className="text-sm text-foreground">Years Experience</div>
              </div>
            </div>
        </div>
      </div>

    </section>
    )
}