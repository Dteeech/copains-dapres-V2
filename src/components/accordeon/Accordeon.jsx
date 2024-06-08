import AccordeonItem from "./AccordeonItem";

function Accordeon() {
    return (
        <div>
            <AccordeonItem question={1} title='Comment je peux valider ma colocation ?' titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description=
                {`
                    <ul class="list-disc list-inside">
                        <li>Démarcher le propriétaire du bien convoité.</li>
                        <li>Faire une visite du bien avec votre futur colocataire.</li>
                        <li>Ensuite vous avez juste à envoyer votre justificatif d'identité, de domicile, de situation professionnelle et votre justificatif de ressource.</li>
                        <li>Après vous avez juste à réaliser l'état des lieux et vous pouvez emménager !</li>
                    </ul>
                `} />
            <AccordeonItem question={2} title='Comment je peux faire appel à un prestataire ?' titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description= {`
                    <ul class="list-disc list-inside">
                        <li>Démarcher le propriétaire du bien convoité.</li>
                        <li>Faire une visite du bien avec votre futur colocataire.</li>
                        <li>Ensuite vous avez juste à envoyer votre justificatif d'identité, de domicile, de situation professionnelle et votre justificatif de ressource.</li>
                        <li>Après vous avez juste à réaliser l'état des lieux et vous pouvez emménager !</li>
                    </ul>
                `} />
            <AccordeonItem question={3} title="Je n'ai pas encore de coloc, puis-je quand même louer un appartement" titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description= {`
                    <ul class="list-disc list-inside">
                        <li>Démarcher le propriétaire du bien convoité.</li>
                        <li>Faire une visite du bien avec votre futur colocataire.</li>
                        <li>Ensuite vous avez juste à envoyer votre justificatif d'identité, de domicile, de situation professionnelle et votre justificatif de ressource.</li>
                        <li>Après vous avez juste à réaliser l'état des lieux et vous pouvez emménager !</li>
                    </ul>
                `} />
            <AccordeonItem question={4} title="Mon colocataire veux quitter l'appartement, comment se passe les démarches ?" titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description= {`
                    <ul class="list-disc list-inside">
                        <li>Démarcher le propriétaire du bien convoité.</li>
                        <li>Faire une visite du bien avec votre futur colocataire.</li>
                        <li>Ensuite vous avez juste à envoyer votre justificatif d'identité, de domicile, de situation professionnelle et votre justificatif de ressource.</li>
                        <li>Après vous avez juste à réaliser l'état des lieux et vous pouvez emménager !</li>
                    </ul>
                `} />
        </div>
    )
}

export default Accordeon;