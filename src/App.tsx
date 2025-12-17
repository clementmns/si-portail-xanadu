import xanaduLogo from './assets/xanadu.svg';
import type { JSX } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ExternalLinkIcon } from "lucide-react";

function App(): JSX.Element {
  const openERP = () => {
    window.open('https://odoo.xanadu.com', '_blank', 'noopener,noreferrer');
  };

  const teamMembers = [
    {
      id: 1,
      firstName: "Antoine",
      lastName: "Pouzoulet",
      role: "Chef de Projet, Administrateur SI",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFT7BhIxS12dA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729884719627?e=1767830400&v=beta&t=XQLmxxGHaa6E9653GDruph-iGlKIZHEQnm1fGdDWdNw"
    },
    {
      id: 2,
      firstName: "Louis",
      lastName: "Le Roux",
      role: "Administrateur SI",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGGBZggti7CzA/profile-displayphoto-shrink_800_800/B4EZQYcGhsHgAc-/0/1735576808548?e=1767830400&v=beta&t=20u8U7snpks61UOxcRZldlcVm992svnF6adbwEmSjeQ"
    },
    {
      id: 3,
      firstName: "Clément",
      lastName: "Omnès",
      role: "Administrateur SI",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFQ3I32X6Thzw/profile-displayphoto-crop_800_800/B4EZnpp3wcGYAM-/0/1760561692275?e=1767830400&v=beta&t=dxXBdVRYwf5tWkgFa4GjBKTk92MvabMuohFTfenH4Qo"
    }
  ];

  return (
    <div className="min-h-screen px-8 py-10">
      <header className="max-w-4xl mx-auto flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <img src={xanaduLogo} alt="Logo Xanadu" className="w-32 h-auto" />
          <div>
            <h1 className="text-2xl font-semibold">Portail d'entreprise Xanadu</h1>
            <p className="text-sm text-muted-foreground">Accès centralisé aux systèmes et outils de l'entreprise</p>
          </div>
        </div>

        <div>
          <Button onClick={openERP}>Accéder à l'ERP</Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto gap-3 flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle>ERP — Odoo</CardTitle>
            <CardDescription>Accès à l'ERP de l'entreprise pour la gestion commerciale, stock, RH et finances.</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex gap-3">
              <Button onClick={openERP}>Ouvrir l'ERP<ExternalLinkIcon /></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entreprise</CardTitle>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="about" className="w-full">
              <TabsList>
                <TabsTrigger value="about">À propos</TabsTrigger>
                <TabsTrigger value="team">Trombinoscope</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-4">
                <div className="text-sm text-foreground">
                  <h2 className="font-semibold mt-2 mb-4">À propos de XANADU</h2>
                  <p>
                    XANADU est un cabinet de services juridiques et de conseil basé à Atlantis,
                    avec un laboratoire à Springfield. Sa mission est d'accompagner les clients via des
                    processus rigoureux et une infrastructure numérique résiliente.
                  </p>

                  <h3 className="font-semibold mt-6 mb-4">Vision</h3>
                  <p>
                    Un système d'information performant comme levier de confiance; continuité
                    d'activité ciblée: reprise ≤ 4 h pour services critiques, ≤ 24 h pour les
                    autres.
                  </p>

                  <h3 className="font-semibold mt-6 mb-4">Organisation</h3>
                  <ul className="list-disc list-inside">
                    <li>60 collaborateurs (50 à Atlantis, 10 à Springfield)</li>
                    <li>Espaces documentaires par service, dossiers personnels avec quotas</li>
                    <li>Accès transverses strictement contrôlés et correspondants informatiques par service</li>
                  </ul>

                  <h3 className="font-semibold mt-6 mb-4">Infrastructure &amp; applications</h3>
                  <p>
                    ERP (Odoo) en architecture 3-tiers avec PostgreSQL, accès sécurisés et
                    authentification renforcée. Suite collaborative basée sur Microsoft 365.
                  </p>

                  <h3 className="font-semibold mt-6 mb-4">Sécurité &amp; sauvegardes</h3>
                  <ul className="list-disc list-inside">
                    <li>Filtrage, cloisonnement réseau, gestion des identités et supervision</li>
                    <li>Plan de sauvegarde structuré (dumps cohérents, rétention, externalisation, tests)</li>
                    <li>Classification des données avec RTO et politiques de sauvegarde adaptées</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="team" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teamMembers.map((member) => (
                    <Card key={member.id} className="overflow-hidden p-2">

                      <CardContent className="flex flex-col gap-4 p-2 items-center">
                        <img
                            src={member.image}
                            alt={`${member.firstName} ${member.lastName}`}
                            className="w-56 h-56 object-cover rounded-full"
                        />
                        <div className="flex flex-col text-center gap-2">
                          <p className="font-semibold text-sm">{member.firstName} {member.lastName}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default App;