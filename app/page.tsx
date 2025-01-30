import Hr from "@/components/hr";
import Introduce from "@/components/Introduce";
import PersonalDetials from "@/components/PersonalDetials";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="h-full w-full">
     <div className="flex flex-col">
     <Introduce />
      <Hr />
      <PersonalDetials />
      <Portfolio />
     </div>
    </main>
  );
}
