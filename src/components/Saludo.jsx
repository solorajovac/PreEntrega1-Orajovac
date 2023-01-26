import "./styles/Saludo.css"

const Saludo = ({title}) => {
    return (
<>
<section className="hero hero-slide-1"/>
        <div className="hero-container">
<article className="hero-container__text-box">
    <h1>{title}</h1>
    <p>Auí nos podes encontrar</p>
    <button className="button-primary">Comprar</button>
</article>
        </div>
        <section/>
</>
    );
}

export default Saludo; 