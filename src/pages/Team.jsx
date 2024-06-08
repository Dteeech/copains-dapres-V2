import isaac from '../../public/assets/images/Team/isaac.png'
import lola from '../../public/assets/images/Team/lola.png'
import anthony from '../../public/assets/images/Team/anthony.png'
import valentin from '../../public/assets/images/Team/valentin.png'
import eva from '../../public/assets/images/Team/eva.png'
import owen from '../../public/assets/images/Team/owen.png' 

/*
const isaac = '/assets/images/Team/isaac.png?url'
const lola = '/assets/images/Team/lola.png?url'
const anthony = '/assets/images/Team/anthony.png?url'
const owen = '/assets/images/Team/owen.png?url'
const valentin = '/assets/images/Team/valentin.png?url'
const eva = '/assets/images/Team/eva.png?url' */

function Team() {
    return (
        <>
            <section className="container flex flex-col">
                <h1 className="text-2xl my-6 p-2">Qui sommes nous ?</h1>
                <p className="text-primary-500 m-4">
                    Copains d'Après est une plateforme de mise en relation pour la création de colocation entre séniors. Cette plateforme est à destination des personnes âgées qui souhaitent se loger ou se reloger, mais aussi à leurs entourages qui souhaitent aider leurs proches à trouver un ou une colocataire. Le site sera également accessible aux professionnels qui souhaitent trouver des locataires séniors pour cohabiter dans leur logement.
                    Copains d'Après se propose d'être la solution permettant de contrer la solitude chez les personnes âgées en trouvant un
                    compagnon d'habitat pour ceux qui ne souhaitent plus, ou ne peuvent plus, vivres seuls.
                </p>


            </section>
            <section className=" flex flex-col bg-secondary_bg-600">
                <div className="container text-2xl text-bold text-primary-600 mt-12">

                    <h3>Les 6 étudiants qui ont imaginé Copains d'après : </h3>
                </div>
                <div className="container justify-center text-center">
                    <div className="flex flex-row justify-center gap-16 my-12">
                        <div className="">
                            <img src={valentin} alt="" />
                            <p>Valentin Arthot</p>
                        </div>
                        <div className="">
                            <img src={anthony} alt="" />
                            <p>Anthony Alves</p>
                        </div>
                        <div className="">
                            <img src={eva} alt="" />
                            <p>Eva Berthomé</p>
                        </div>
                        <div className="">
                            <img src={owen} alt="" />
                            <p>Owen Tanneau</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center my-12 gap-16">

                        <div className="">
                            <img src={lola} alt="" />
                            <p>Lola Heurtevin</p>
                        </div>
                        <div className="">
                            <img src={isaac} alt="" />
                            <p>Isaac Marshall</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Team