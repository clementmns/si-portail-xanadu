import xanaduLogo from "@/assets/xanadu.svg";
import {Button} from "@/components/ui/button.tsx";
import {openERP} from "@/lib/utils.ts";

function Header() {
  return (
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
  );
}

export default Header;