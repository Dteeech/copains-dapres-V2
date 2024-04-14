import AccordeonItem from "./AccordeonItem";

function Accordeon() {
    return (
        <div>
            <AccordeonItem question={1} title='Clique ici' titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description='Les étapes' />
            <AccordeonItem question={2} title='Clique la' titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description='Les étapes' />
            <AccordeonItem question={3} title='Clique ici' titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description='Les étapes' />
            <AccordeonItem question={3} title='Clique ici' titleDescription='Pour la validation de votre colocation elle se fait en 4 étapes très simples.' description='Les étapes' />
        </div>
    )
}

export default Accordeon;