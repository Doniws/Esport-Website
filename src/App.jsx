import "./all.scss";
import Logo from "./assets/logo.png";
import bg1 from "./assets/bg1.jpg";

import cimg1 from "./assets/cimg1.jpg";
import cimg2 from "./assets/cimg2.jpg";
import cimg3 from "./assets/cimg3.jpg";

function App() {
	const oCimg = [
		{
			id: 1,
			img: cimg1,
		},
		{
			id: 2,
			img: cimg2,
		},
		{
			id: 3,
			img: cimg3,
		},
	];
	return (
		<>
			<main className="home">
				<div className="container-navbar">
					<nav>
						<div className="nav-logo">
							<img src={Logo} alt="logo" />
						</div>
						<ul className="nav-list">
							<li>
								<a href="">MOBILE LEGENDS</a>
							</li>
							<li>
								<a href="">FREE FIRE</a>
							</li>
							<li>
								<a href="">PUBG</a>
							</li>
							<li>
								<a href="">LOL</a>
							</li>
							<li>
								<a href="">ROK</a>
							</li>
							<li>
								<button>JOIN US</button>
							</li>
						</ul>
					</nav>
				</div>
				<section className="background first-main">
					<div className="bg-wrap">
						<img src={bg1} alt="" />
					</div>
					<div className="wrap-content-bg">

					<span className="slide-pagination">
						<b className="active">01</b>
						<b>02</b>
						<b>03</b>
						<b>04</b>
					</span>
					<article className="content">
						<span className="content-text">
							<b>NEVER GIVE UP</b>
							<h1>
								INDONESIA <p>GAMER</p>
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
								voluptatibus provident incidunt perspiciatis totam? Omnis id
								laborum impedit, rem a ipsam, dicta quod atque, incidunt nobis
								illo est iure! Perspiciatis.
							</p>
							<div className="container-button">
								<button>READ MORE</button>
								<button>GET STARTED</button>
							</div>
						</span>
					</article>
					</div>
				</section>

				{/* content  */}
				<section className="we-are second-page">
					<div className="wrap-card-we">
						{oCimg.map((i) => (
							<div className="card-we" key={i.id}>
								<div className="wrap-img">
									<img src={i.img} alt="" />
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
