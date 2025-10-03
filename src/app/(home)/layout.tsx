import { Navbar } from "@/components/navbar";
import { Squares } from "@/components/sqaure-background";

interface Props {
    children:React.ReactNode
}

const Layout = ({ children }: Props) => {

// <div className="min-h-screen w-full relative">
//   {/* Emerald Void */}
//   <div
//   className="absolute inset-0 z-0"
//   style={{
//     background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
//   }}
// />
// {/* Your Content/Components */}
// </div>

    return (
      <main className="relative flex flex-col min-h-screen">
        {/* Orchid Depths background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #000000 20%, #072607 100%)",
          }}
        />
  
        {/* Navbar */}
        <Navbar />
  
        {/* Squares background (optional, overlayed on top of gradient) */}
        <Squares
          direction="diagonal"
          speed={0.01}
          squareSize={80}
          borderColor="#333"
          hoverFillColor="#222"
          className="absolute inset-0 -z-10 opacity-60 "
          
        />
  
        {/* Page content */}
        <div className="flex-1 flex flex-col px-4 pb-4 relative z-10">
          {children}
        </div>
      </main>
    );
  };
  

export default Layout;