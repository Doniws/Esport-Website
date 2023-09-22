import "./all.scss";
import Logo from "./assets/images/logo.png";
import bg1 from "./assets/images/bg1.jpg";
import bg2 from "./assets/images/bg2.jpg";
import bg3 from "./assets/images/bg3.jpg";
import bg4 from "./assets/images/bg4.jpg";

import cimg1 from "./assets/images/cimg1.jpg";
import cimg2 from "./assets/images/cimg2.jpg";
import cimg3 from "./assets/images/cimg3.jpg";

import artic1 from "./assets/images/artic1.jpg";
import artic2 from "./assets/images/artic2.jpg";
import artic3 from "./assets/images/artic3.jpg";

import x from "./assets/images/x.png";
import ig from "./assets/images/ig.png";
import fb from "./assets/images/fb.png";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function App() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isNavResponsive, setIsNavResponsive] = useState(false);
	useEffect(() => {
		const handleScrollNav = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScrollNav);
		return () => {
			window.addEventListener("scroll", handleScrollNav);
		};
	}, []);
	const handleNavResponsive = () => {
		setTimeout(() => {
			setIsNavResponsive(!isNavResponsive);
		}, 300);
	};

	const [activeSlide, setActiveSlide] = useState(0);

	const handleSlideChange = (index) => {
		setActiveSlide(index);
	};
	const oCimg = [
		{
			id: 1,
			img: cimg1,
		},
		{
			id: 2,
			img: cimg2,
		},
	];
	const oBgimg = [
		{
			id: 1,
			img: bg1,
		},
		{
			id: 2,
			img: bg2,
		},
		{
			id: 3,
			img: bg3,
		},
		{
			id: 4,
			img: bg4,
		},
	];
	return (
		<>
			<main className="home">
				<div className={isScrolled ? "scroll-navbar" : "container-navbar"}>
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
								<a href="">LEAGUE OF LEGENDS</a>
							</li>
							<li>
								<a href="">ROK</a>
							</li>
							<li>
								<button>JOIN US</button>
							</li>
						</ul>
						<div id="webapp_cover" onChange={handleNavResponsive}>
							<div id="menu_button">
								<input type="checkbox" id="menu_checkbox" />
								<label for="menu_checkbox" id="menu_label">
									<div id="menu_text_bar"></div>
								</label>
							</div>
						</div>
					</nav>
				</div>

				<div className={`nav-responsive ${isNavResponsive ? "open" : ""}`}>
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
							<a href="">LEAGUE OF LEGENDS</a>
						</li>
						<li>
							<a href="">ROK</a>
						</li>
					</ul>
					<ul className="social-media-list">
						<li>
							<a href="">instagram</a>
						</li>
						<li>
							<a href="">Facebook</a>
						</li>
						<li>
							<a href="">Tweeter X</a>
						</li>
						<li>
							<button>JOIN US</button>
						</li>
					</ul>
				</div>
				<section className="background first-main">
					<Swiper
						className="bg-container"
						modules={[Pagination, Autoplay]}
						pagination={{
							clickable: true,

							el: ".swp-pagination",
						}}
						spaceBetween={50}
						slidesPerView={1}
						autoplay={{
							delay: 3000,
							disableOnInteraction: true,
						}}
						loop={true}
						onSlideChange={(swiper) => handleSlideChange(swiper.realIndex)}
					>
						{oBgimg.map((i) => (
							<SwiperSlide key={i.id} className="bg-wrap">
								<img src={i.img} alt="" />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="wrap-content-bg">
						<span className="slide-pagination">
							<CustomPagination
								totalSlides={oBgimg.length}
								activeSlide={activeSlide}
								onSlideChange={handleSlideChange}
							/>
							<div className="swp-pagination"></div>
						</span>
						<article className="content">
							<span className="content-text">
								<b>NEVER GIVE UP</b>
								<h1>
									INDONESIA <p>GAMER</p>
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat voluptatibus provident incidunt perspiciatis totam?
									Omnis id laborum impedit, rem a ipsam, dicta quod atque,
									incidunt nobis illo est iure! Perspiciatis.
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
						<div className="card-flex">
							<div className="card-we">
								<div className="wrap-img">
									<img src={cimg1} alt="" />
								</div>
								<div className="card-hover">
									<span>
										<h2>ADRENALIN</h2>
										<b>Tantangan</b>
									</span>
									<p>
										Bermain game seringkali menghadirkan ketegangan dan
										tantangan. 
									</p>
									<button>READ MORE</button>
								</div>
							</div>
							<div className="card-we">
								<div className="wrap-img">
									<img src={cimg2} alt="" />
								</div>
								<div className="card-hover">
									<span>
										<h2>HIBURAN</h2>
										<b>Kesenangan</b>
									</span>
									<p>
										Bagi sebagian orang, bermain game adalah cara untuk
										bersantai dan menghilangkan stres.
									</p>
									<button>READ MORE</button>
								</div>
							</div>
						</div>
						<div className="card-we">
							<div className="wrap-img">
								<img src={cimg3} alt="" />
							</div>
							<div className="card-hover">
								<span>
									<h2>PERSAINGAN</h2>
									<b>PENUH KETEGANGAN</b>
								</span>
								<p>
									Dalam game multipemain, pemain dapat merasakan kolaborasi saat
									bekerja sama dengan tim atau persaingan ketika bersaing dengan
									pemain lain.
								</p>
								<button>READ MORE</button>
							</div>
						</div>
					</div>
				</section>
				<section className="about-us">
					<div className="wrap-about-us">
						<h2>SIAPA KAMI</h2>
						<h2>SIAPA KAMI ?</h2>
						<article className="content">
							<span className="text">
								<h3>KAMI PECINTA ESPORT INDONESIA</h3>
								<p>
									Sebagai pecinta esports, kami adalah komunitas yang menghargai
									kemampuan dan semangat bersaing. Kami berkomitmen untuk
									membantu pemain dan tim mencapai potensi tertinggi mereka.
								</p>
								<button>
									<p>READ MORE</p>
								</button>
							</span>
							<div className="wrap-content-img">
								<img src={bg1} alt="" />
							</div>
						</article>
					</div>
				</section>
				<section className="new-article">
					<span className="title-bar">
						<h2>ARTIKEL TERBARU</h2>
						<a href="">
							Artikel Lainnya{" "}
							<img
								src="https://img.icons8.com/ios/50/right--v1.png"
								alt="next"
							/>
						</a>
					</span>
					<div className="wrap-card-article">
						<div className="card-article">
							<div className="wrap-img">
								<img src={artic1} alt="" />
							</div>
							<span>
								<p>1/1/2023</p>▪️
								<p> ESPORT</p>
							</span>
							<h3>
								Kemenangan bigetron yang tidak akan pernah terulang kembali
							</h3>
						</div>
						<div className="card-article">
							<div className="wrap-img">
								<img src={artic2} alt="" />
							</div>
							<span>
								<p>1/1/2023</p>▪️
								<p> ESPORT</p>
							</span>
							<h3>Momen Epik RRQ di MPL4</h3>
						</div>

						<div className="card-article">
							<div className="wrap-img">
								<img src={artic3} alt="" />
							</div>
							<span>
								<p>1/1/2023</p>▪️
								<p> Tips</p>
							</span>
							<h3>
								Tips Menggunakan banedetta hero paling sulit di Mobile legends
							</h3>
						</div>
					</div>
				</section>
				<section className="threed-model">
					{/* <h2 className="title">KEMAJUAN PERMAINAN GAMES</h2> */}
					<div className="content">
						<div className="wrap-iframe">
							<iframe
								title="Mazinkaiser SKL"
								frameBorder="0"
								allowFullScreen
								mozallowfullscreen="true"
								webkitallowfullscreen="true"
								allow="autoplay; fullscreen; xr-spatial-tracking"
								src="https://sketchfab.com/models/f28f58612ff04bdd878dc2868441d6c3/embed"
							></iframe>
						</div>
						<div className="article">
							<h2>
								TEKNOLOGI <p>EIGINE GAMES</p>
							</h2>
							<span className="text">
								<h3>KEMAJUAN DUNIA GAMES</h3>
								<p>
									Dunia games mengalami evolusi besar-besaran. Inovasi teknologi
									membawa grafis memukau, alur cerita mendalam, dan tantangan
									tak terbatas. Pemain beradaptasi dengan cepat dalam dunia
									virtual yang terus berkembang. Jelajahi perkembangan terbaru
									dalam permainan!
								</p>
								<button>
									<p>READ MORE</p>
								</button>
							</span>
						</div>
					</div>
				</section>
				<section className="contact-home">
					<span className="title">
						<h2>KONTAK KAMI</h2>
						<b>
							Kami tersedia untuk menjawab pertanyaan Anda. Silakan hubungi kami
							melalui formulir kontak atau email untuk bantuan dan informasi
							lebih lanjut. Kami menantikan pesan Anda.
						</b>
					</span>
					<form action="submit">
						<input type="email" name="email" placeholder="Email" />
						<input type="text" name="messagge" placeholder="Messagge" />
						<button>
							<p>SUBMIT</p>
						</button>
					</form>
				</section>
				<footer>
					<span className="about-it">
						<h2>INDONESIA GAMER</h2>
						<p>Website by Doni WS 2023</p>
					</span>
					<span className="social-media">
						<div className="wrap-img">
							<img src={x} alt="" />
						</div>
						<div className="wrap-img">
							<img src={ig} alt="" />
						</div>
						<div className="wrap-img">
							<img src={fb} alt="" />
						</div>
					</span>
				</footer>
			</main>
		</>
	);
}

export default App;

const CustomPagination = ({ totalSlides, activeSlide, onSlideChange }) => {
	const paginationItems = [];

	for (let i = 0; i < totalSlides; i++) {
		const isActive = i === activeSlide;

		paginationItems.push(
			<b
				onClick={() => {
					onSlideChange(i);
				}}
				key={i}
				className={`${isActive ? "active" : ""}`}
			>
				0{i + 1}
			</b>
		);
	}

	return <>{paginationItems}</>;
};
