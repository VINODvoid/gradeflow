import { GraduationCap } from "lucide-react"
import Image from "next/image"

export const Footer = () =>{
    return (
        <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src={"/logo.svg"} alt="logo" className="h-5 w-5" width={24} height={24} />
              <span className="font-semibold">GradeFlow</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 GradeFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}
