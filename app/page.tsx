import Hr from "@/components/hr";
import Introduce from "@/components/Introduce";
import PersonalDetials from "@/components/PersonalDetials";

export default function Home() {
  return (
    <main className="h-full w-full">
     <div className="flex flex-col">
     <Introduce />
      <Hr />
      <PersonalDetials />
     </div>
    </main>
  );
}
