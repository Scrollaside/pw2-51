import Image from "next/image";
import customText from "@/app/customText";

export default function Home() {
  const msg = "hola mundo";
  const [msg2, setMsg] = userState("");
  function handleImput (e) {setMsg(e.target.value);}
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            
            {/* Get started by editing{" "} */}
            <customText>Hola</customText>
            {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code> */}
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
 
      </main>
    </div>
  );
}
