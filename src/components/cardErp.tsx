import type {JSX} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ExternalLinkIcon} from "lucide-react";
import {openERP} from "@/lib/utils.ts";

function CardErp(): JSX.Element {
    return (
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
    )
}

export default CardErp;