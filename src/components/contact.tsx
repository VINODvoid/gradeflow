import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

export const Contact = ()=>{
    return (
        <section id="contact" className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Have questions? Our team is here to help you start your educational journey
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Visit Us</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Saptagiri Rural Institute
                      <br />
                      Village Road, District
                      <br />
                      State - 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <p className="text-sm text-gray-400">+91 12345 67890</p>
                    <p className="text-sm text-gray-400">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-sm text-gray-400">info@saptagiri.edu.in</p>
                    <p className="text-sm text-gray-400">admissions@saptagiri.edu.in</p>
                  </div>
                </div>
              </div>

              <Card className="bg-white/5 border-white/10 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium block mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-white focus:border-white/30 focus:outline-none transition-colors placeholder:text-gray-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium block mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-white focus:border-white/30 focus:outline-none transition-colors placeholder:text-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-white resize-none focus:border-white/30 focus:outline-none transition-colors placeholder:text-gray-500"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-200 rounded-lg h-11 font-semibold btn-primary"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
}