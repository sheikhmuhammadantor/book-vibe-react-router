import { Link } from "react-router-dom"

function Hero() {
    return (
        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse p-12 py-20 gap-10">
                <img
                    src="https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg"
                    className="rounded-lg shadow-2xl max-w-80" />
                <div>
                    <h1 className="text-5xl font-bold">Books To Freshen <br /> up your bookshelf</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to='/'><button className="btn bg-primary text-white text-lg">View The List</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
