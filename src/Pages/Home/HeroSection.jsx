export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--setion--content">
                <p className="section--title">
                    Hey, I'm Phoenix
                </p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack</span> {" "}
                    <br />
                    Developer
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum quas asperiores nemo eveniet, nisi sit ea illum iusto maiores tenetur provident corporis voluptatibus, eligendi dignissimos impedit ab consequatur et.
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src = "./img/hero_img.png" alt="Hero Section"/>
        </div>
        </section>
    );
}
