import { Admissions } from "@/components/admissions";
import { Contact } from "@/components/contact";
import { Courses } from "@/components/courses";
import { Curriculum } from "@/components/curriculum";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";


export default function Home() {
  return (
    <>
    <Header/>
    <Curriculum/>
    <Admissions/>
    <Courses/>
    <Contact/>
    <Footer/>
    </>
  )
}