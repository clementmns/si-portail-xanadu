import type { JSX } from 'react';
import Header from "@/components/header.tsx";
import CardErp from "@/components/cardErp.tsx";
import CardEnterprise from "@/components/cardEnterprise.tsx";

function App(): JSX.Element {

  return (
    <div className="min-h-screen px-8 py-10">
      <Header />
      <main className="max-w-4xl mx-auto gap-3 flex flex-col">
        <CardErp />
        <CardEnterprise />
      </main>
    </div>
  );
}

export default App;