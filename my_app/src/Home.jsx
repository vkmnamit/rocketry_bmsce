import { useState, useEffect } from "react";
import "./Home.css";
import { initScrollAnimation } from "./scrollAnimation";
import { initGalleryAnimation } from "./galleryAnimation";

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const scrollCleanup = initScrollAnimation();
        const galleryCleanup = initGalleryAnimation();

        return () => {
            scrollCleanup();
            galleryCleanup();
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <div className="header">
                <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059b4ced709fa6285f993_wp-logo.svg" alt="Woodland Logo" />
                <nav>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <nav>
                    <a href="#about" onClick={closeMobileMenu}>About</a>
                    <a href="#services" onClick={closeMobileMenu}>Services</a>
                    <a href="#projects" onClick={closeMobileMenu}>Projects</a>
                    <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
                    <a href="#reviews" onClick={closeMobileMenu}>Reviews</a>
                    <a href="#contact" onClick={closeMobileMenu}>Contact</a>
                </nav>
            </div>

            <div className="Main_img">
                <h1>Woodland</h1>
            </div>

            <div className="body" id="about">
                <h1>About</h1>
                <p>We are a design studio focused on creating beautiful and functional spaces.
                    Our team is dedicated to delivering high-quality design solutions that meet the unique needs of each client.
                    We believe that good design should be accessible to everyone.
                    we strive to blend aesthetics with practicality, ensuring that every project we undertake not only looks stunning but also serves its intended purpose effectively.
                </p>
                <p>we are committed to sustainability and aim to minimize our environmental impact through thoughtful design and material selection.
                    We prioritize eco-friendly practices and strive to create spaces that are not only beautiful but also sustainable.
                    Our goal is to leave a positive legacy for future generations while enhancing the quality of life for our clients.

                </p>
            </div>

            <div className="services" id="services">
                <div className="left_services">
                    <h1>Services</h1>
                </div>
                <div className="right-services">
                    <div className="service-card">
                        <div className="service-1">
                            <div className="service-1-left">
                                <h2>01 Architecture</h2>
                                <p>We design buildings that are not only functional but also aesthetically pleasing.</p>
                                <ul>
                                    <li>Conceptual Design</li>
                                    <li>Design Development</li>
                                    <li>Construction Documentation</li>
                                    <li>Project Management</li>
                                </ul>
                            </div>
                            <div className="service-1-right">
                                <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685286491a3e4ce9a7b39573_service-1-img.webp" alt="Architecture" />
                            </div>
                        </div>

                        <div className="service-2">
                            <div className="service-2-left">
                                <h2>02 Interior Design</h2>
                                <p>Our interior design services focus on creating functional and beautiful spaces.</p>
                                <ul>
                                    <li>Space Planning</li>
                                    <li>Furniture Selection</li>
                                    <li>Color Consultation</li>
                                    <li>Lighting Design</li>
                                </ul>
                            </div>
                            <div className="service-2-right">
                                <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852860d55b59b8474e4a795_service-2-img.webp" alt="Interior Design" />
                            </div>
                        </div>

                        <div className="service-3">
                            <div className="service-3-left">
                                <h2>03 Landscape Design</h2>
                                <p>We create outdoor spaces that are both beautiful and sustainable.</p>
                                <ul>
                                    <li>Site Analysis</li>
                                    <li>Plant Selection</li>
                                    <li>Irrigation Design</li>
                                    <li>Hardscape Design</li>
                                </ul>
                            </div>
                            <div className="service-3-right">
                                <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852855e03e1fcb4ec5b46c3_service-3-img.webp" alt="Landscape Design" />
                            </div>
                        </div>

                        <div className="service-4">
                            <div className="service-4-left">
                                <h2>04 Urban Design</h2>
                                <p>We plan and design urban spaces that are functional, sustainable, and beautiful.</p>
                                <ul>
                                    <li>Urban Planning</li>
                                    <li>Public Space Design</li>
                                    <li>Transportation Planning</li>
                                    <li>Community Engagement</li>
                                </ul>
                            </div>
                            <div className="service-4-right">
                                <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685285ca74c32db80127f923_service-4-img.webp" alt="Urban Design" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project" id="projects">
                <h1>Projects</h1>
                <div className="project1">
                    <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059eeabc4d975b8b5d560_Contemporary%20House%20at%20Dawn_Dusk.jpeg" alt="Modern Villa" />
                    <div className="card1"><h2>Modern Villa</h2>
                        <p>A contemporary villa design that blends luxury with sustainability.</p>
                        <ul>
                            <li>Location: California</li>
                            <li>Size: 4,000 sq ft</li>
                            <li>Features: Solar panels, green roof, open floor plan</li>
                        </ul>
                    </div>
                </div>

                <div className="project2">
                    <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059eeabc4d975b8b5d554_Modern%20Minimalist%20House%20with%20Garden.jpeg" alt="Urban Park" />
                    <div className="card2"><h2>Urban Park</h2>
                        <p>A revitalized urban park that provides green space and recreational facilities for the community.</p>
                        <ul>
                            <li>Location: New York City</li>
                            <li>Size: 10 acres</li>
                            <li>Features: Walking trails, playgrounds, community gardens</li>
                        </ul></div>
                </div>

                <div className="project3">
                    <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529216ec5c928ff5325ff9_project-2-img.webp" alt="Coastal Retreat" />
                    <div className="card3"><h2>Coastal Retreat</h2>
                        <p>A serene coastal retreat designed for relaxation and rejuvenation.</p>
                        <ul>
                            <li>Location: Malibu</li>
                            <li>Size: 3,500 sq ft</li>
                            <li>Features: Ocean views, infinity pool, outdoor living spaces</li>
                        </ul>
                    </div>
                </div>

                <div className="number">
                    <p>BY THE NUMBERS</p>
                    <div className="num">
                        <div className="num-item">
                            <span className="num-value">150+</span>
                            <span className="num-label">Projects Completed</span>
                        </div>
                        <div className="num-item">
                            <span className="num-value">50+</span>
                            <span className="num-label">Happy Clients</span>
                        </div>
                        <div className="num-item">
                            <span className="num-value">10</span>
                            <span className="num-label">Awards Won</span>
                        </div>
                    </div>
                </div>

                <div className="sponser_name">
                    <div className="feature-in-1">
                        <p>AS FEATURED IN</p>
                        <div className="feature-logos">
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059e3d57de667f9baf66f_logo-1.svg" alt="Logo 1" />
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059e3d57de667f9baf671_logo-2.svg" alt="Logo 2" />
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059e3d57de667f9baf670_logo-3.svg" alt="Logo 3" />
                        </div>
                    </div>

                    <div className="feature-in-2" id="gallery">
                        <p>AS FEATURED IN</p>
                        <h1 style={{ fontSize: "150px" }}>GALLERY</h1>
                        <div className="gallery-images">
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3a0bcd445139f318bd_gallery-img-tl.webp" alt="Gallery 1" />
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3b11e36b1678dea751_gallery-img-center.webp" alt="Gallery 2" />
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3a78741023142f8959_gallery-img-tr.webp" alt="Gallery 3" />
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3a0ce1e4a1d6e72db8_gallery-img-bl.webp" alt="Gallery 4" />
                            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3ae74327df7f86a491_gallery-img-br.webp" alt="Gallery 5" />
                        </div>
                        <div className="review_box" id="reviews">
                            <p>HEAR OUR CLIENT</p>
                            <h1 style={{ color: "white" }}>REVIEWS</h1>
                            <div className="review_thought">
                                <p>"Working with Woodland Architects was a blessing for our home. We wanted a space that felt modern but still warm and inviting, and they absolutely nailed it. We highly recommend them for architecture and design projects."</p>
                                <div className="review_controls">
                                    <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6864d4318fa5f868620e795c_left-arrow.svg" alt="Previous" />
                                    <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6864d4f7d089681a5d9efb91_right-arrow.svg" alt="Next" />
                                </div>
                            </div>
                        </div>
                        <div className="partner_box" id="contact">
                            <div className="partner_box_left">
                                <h1>PARTNER WITH</h1>
                                <h1> US</h1>
                                <p>Ready to bring your architectural vision to life? Contact Woodland Architects today to schedule a consultation and take the first step toward creating your dream space.</p>
                                <form>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" required />

                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" required />

                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" required></textarea>

                                    <button type="submit">SUBMIT</button>
                                </form>
                            </div>
                            <div className="partner_box_right">
                                <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6865758e22cd592d1f498c76_Modern%20White%20Building%20(1).jpeg" alt="Modern Building" />
                            </div>
                        </div>
                        <div className="footer">
                            <div className="footer_content1">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Project</a></li>
                                    <li><a href="#about">Gallery</a></li>
                                    <li><a href="#services">Reviews</a></li>

                                </ul>
                            </div>
                            <div className="footer_content2">
                                <h2>Resources</h2>
                                <ul>
                                    <li><a href="#about">Blog</a></li>
                                    <li><a href="#services">FAQs</a></li>
                                    <li><a href="#contact">Support</a></li>
                                    <li><a href="#about">Privacy Policy</a></li>
                                    <li><a href="#services">Terms of Service</a></li>
                                </ul>
                            </div>
                            <div className="footer_content3">
                                <h2>Contact Us</h2>
                                <ul>
                                    <li>Email: info@woodlandarchitects.com</li>
                                    <li>Phone: (123) 456-7890</li>
                                    <li>Address: 1234 Architecture Lane, Design City, DC 56789</li>
                                </ul>
                            </div>
                            <div className="footer_content4">
                                <h2>Newsletter</h2>
                                <p>Subscribe to our newsletter for the latest updates and offers.</p>
                                <form>
                                    <label style={{ fontFamily: "font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;" }} htmlFor="email">Your Email Address</label>
                                    <input style={{ border: "1px solid #ccc", backgroundColor: "#e9e9e9ff", borderRadius: "4px", padding: "0.5rem", width: "100%" }} type="email" id="email" required />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}


