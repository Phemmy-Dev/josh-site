import { useEffect, useState, type MouseEvent } from 'react'
import joshuaPortrait from './assets/Joshua2.jpg'
import joshuaEditorial from './assets/Joshua3.jpeg'
import './App.css'

type BookingType = 'intro' | 'consultation' | 'contact' | null

const bookingLinks = {
  intro: '',
  consultation: '',
}

const pillars = [
  { number: '01', title: 'Education', copy: 'Building accessible learning systems that help students grow in confidence, competence, and academic performance.' },
  { number: '02', title: 'Employability', copy: 'Helping students and recent graduates turn education into practical skills, meaningful work, and long-term opportunity.' },
  { number: '03', title: 'Leadership', copy: 'Equipping young people to lead with clarity, character, service, and a deep sense of purpose.' },
]

const lifeFacets = [
  {
    label: 'First-Class Graduate',
    title: 'Scholar',
    copy: 'A First-Class Mathematics graduate from the University of Ilorin, grounded in discipline, curiosity, and academic excellence.',
    image: joshuaPortrait,
    position: '50% 16%',
  },
  {
    label: 'Educator',
    title: 'Educator',
    copy: 'Committed to making excellent learning accessible and helping students develop confidence that travels beyond the classroom.',
    image: joshuaEditorial,
    position: '42% 20%',
  },
  {
    label: 'Education Entrepreneur',
    title: 'Entrepreneur',
    copy: 'Founder and CEO of The Light Tutors, building systems that connect students with quality support and young tutors with meaningful opportunity.',
    image: joshuaEditorial,
    position: '50% 18%',
  },
  {
    label: 'Public Speaker',
    title: 'Speaker',
    copy: 'A thoughtful voice on education, employability, leadership, and the work of preparing young people for purposeful lives.',
    image: joshuaPortrait,
    position: '50% 10%',
  },
  {
    label: 'Devout Christian',
    title: 'Faith',
    copy: 'Rooted in Christian faith and expressed through discipleship, service, excellence, and active community at Citizens of Light Church.',
    image: joshuaEditorial,
    position: '58% 22%',
  },
]

const galleryRows = [
  [
    { image: joshuaPortrait, position: '50% 12%', tone: 'warm' },
    { image: joshuaEditorial, position: '42% 20%', tone: 'natural' },
    { image: joshuaPortrait, position: '50% 34%', tone: 'mono' },
    { image: joshuaEditorial, position: '68% 16%', tone: 'warm' },
    { image: joshuaPortrait, position: '50% 4%', tone: 'natural' },
    { image: joshuaEditorial, position: '30% 24%', tone: 'mono' },
  ],
  [
    { image: joshuaEditorial, position: '58% 8%', tone: 'mono' },
    { image: joshuaPortrait, position: '50% 28%', tone: 'natural' },
    { image: joshuaEditorial, position: '36% 26%', tone: 'warm' },
    { image: joshuaPortrait, position: '50% 8%', tone: 'mono' },
    { image: joshuaEditorial, position: '72% 18%', tone: 'natural' },
    { image: joshuaPortrait, position: '50% 40%', tone: 'warm' },
  ],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingType, setBookingType] = useState<BookingType>(null)
  const [activeFacet, setActiveFacet] = useState(2)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setBookingType(null)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = bookingType || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [bookingType, menuOpen])

  const openBooking = (type: Exclude<BookingType, null>) => {
    const link = type === 'contact' ? '' : bookingLinks[type]
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
      return
    }
    setBookingType(type)
  }

  const closeMenu = () => setMenuOpen(false)

  const navigateFromMenu = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault()
    closeMenu()
    window.setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', target)
    }, 180)
  }

  return (
    <div className="site-shell">
      <header className={menuOpen ? 'site-header menu-active' : 'site-header'}>
        <a className="wordmark" href="#top" aria-label="Joshua Oroge home" onClick={closeMenu}>Joshua<span>Oroge</span></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <div className="nav-list">
            <a href="#about" onClick={(event) => navigateFromMenu(event, '#about')}><span className="nav-number">01</span><span>About</span></a>
            <a href="#impact" onClick={(event) => navigateFromMenu(event, '#impact')}><span className="nav-number">02</span><span>Impact</span></a>
            <a href="#journey" onClick={(event) => navigateFromMenu(event, '#journey')}><span className="nav-number">03</span><span>Journey</span></a>
            <a href="#booking" onClick={(event) => navigateFromMenu(event, '#booking')}><span className="nav-number">04</span><span>Talk to Joshua</span></a>
          </div>
          <div className="mobile-nav-footer">
            <p>Education · Opportunity · Purpose</p>
            <button type="button" onClick={() => { closeMenu(); openBooking('intro') }}>Book a free 15-min call</button>
          </div>
        </nav>
        <button className="header-cta" type="button" onClick={() => openBooking('intro')}>Free 15-min call</button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Education entrepreneur · Speaker · Youth advocate</p>
            <h1 id="hero-title"><span>Joshua</span><span>Oroge</span></h1>
            <div className="hero-summary">
              <p>Building systems that help young people move from education to opportunity—and thrive in life.</p>
              <div className="hero-actions">
                <button className="button button-dark" type="button" onClick={() => openBooking('intro')}>Book a free call</button>
                <a className="text-link" href="#about">Discover his story</a>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={joshuaEditorial} alt="Joshua Oroge seated in an orange suit" />
            <p className="hero-image-caption">Purpose. Service. Excellence.</p>
          </div>
        </section>

        <section className="manifesto" aria-label="Joshua's mission">
          <p className="section-label">The mission</p>
          <p className="manifesto-copy">His work is rooted in a simple belief: every young person deserves the tools, exposure, and support to become who they were created to be.</p>
        </section>

        <section className="about section" id="about">
          <div className="about-image">
            <img src={joshuaPortrait} alt="Professional portrait of Joshua Oroge" />
            <p>First-Class Mathematics graduate<br />University of Ilorin</p>
          </div>
          <div className="about-copy">
            <p className="section-label">Meet Joshua</p>
            <h2>An educator at heart. A builder by conviction.</h2>
            <div className="body-copy">
              <p>Joshua Oroge is an education entrepreneur, youth development advocate, and leader passionate about helping young people unlock their potential academically, professionally, and in life.</p>
              <p>As Founder and CEO of The Light Tutors Limited, he is building a bridge between students who need excellent academic support and talented young Nigerians ready to grow, earn, and make a meaningful contribution.</p>
            </div>
            <a className="text-link text-link-dark" href="#journey">Explore the journey</a>
          </div>
        </section>

        <section className="facets section" id="facets" aria-labelledby="facets-title">
          <div className="facets-heading">
            <div>
              <p className="section-label section-label-light">A life in full</p>
              <h2 id="facets-title">Different expressions.<br />One anchored life.</h2>
            </div>
            <p>Explore the roles that shape Joshua’s work, character, and contribution.</p>
          </div>

          <div className="facets-gallery" aria-label="The different areas of Joshua's life">
            {lifeFacets.map((facet, index) => {
              const isActive = activeFacet === index
              return (
                <button
                  className={isActive ? 'facet-panel is-active' : 'facet-panel'}
                  type="button"
                  key={facet.title}
                  aria-pressed={isActive}
                  onClick={() => setActiveFacet(index)}
                >
                  <img src={facet.image} alt="" style={{ objectPosition: facet.position }} />
                  <span className="facet-overlay" aria-hidden="true"></span>
                  <span className="facet-content">
                    <span className="facet-index">0{index + 1}</span>
                    <span className="facet-label">{facet.label}</span>
                    <span className="facet-title">{facet.title}</span>
                    <span className="facet-copy">{facet.copy}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="photo-gallery section" id="gallery" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <div>
              <p className="section-label">In the frame</p>
              <h2 id="gallery-title">Moments from<br />the journey.</h2>
            </div>
            <p>A moving archive of the people, places, and experiences shaping Joshua’s story.</p>
          </div>

          <div className="gallery-motion" aria-label="Joshua Oroge photo gallery">
            {galleryRows.map((row, rowIndex) => (
              <div className={`gallery-row gallery-row-${rowIndex + 1}`} key={rowIndex}>
                <div className="gallery-track">
                  {[...row, ...row].map((photo, index) => (
                    <figure className={`gallery-card gallery-card-${photo.tone}`} key={`${rowIndex}-${index}`} aria-hidden={index >= row.length}>
                      <img src={photo.image} alt={index < row.length ? 'Joshua Oroge' : ''} style={{ objectPosition: photo.position }} />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="gallery-note">Hover to pause · More moments coming soon</p>
        </section>

        <section className="pillars section" id="impact">
          <div className="section-intro">
            <p className="section-label">Areas of impact</p>
            <h2>Work that turns potential into progress.</h2>
            <p>Joshua’s work sits at the intersection of learning, opportunity, and purpose.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.number}>
                <p className="card-number">{pillar.number}</p>
                <div><h3>{pillar.title}</h3><p>{pillar.copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="ventures section" aria-labelledby="ventures-title">
          <div className="ventures-heading">
            <p className="section-label section-label-light">Building for impact</p>
            <h2 id="ventures-title">Two platforms.<br />One clear purpose.</h2>
          </div>
          <div className="venture-list">
            <article className="venture-item">
              <p className="venture-index">01</p>
              <div>
                <p className="venture-type">Education company</p>
                <h3>The Light Tutors</h3>
                <p>High-quality tutoring for students in the UK, powered by bright university students and graduates in Nigeria.</p>
                <a className="light-link" href="https://thelightutors.com/" target="_blank" rel="noreferrer">Visit The Light Tutors</a>
              </div>
            </article>
            <article className="venture-item">
              <p className="venture-index">02</p>
              <div>
                <p className="venture-type">Career initiative</p>
                <h3>HireGround</h3>
                <p>A career development initiative and annual fair helping students and graduates transition confidently into work.</p>
                <a className="light-link" href="https://hireground.thelightutors.com/" target="_blank" rel="noreferrer">Explore HireGround</a>
              </div>
            </article>
          </div>
        </section>

        <section className="journey section" id="journey">
          <div className="section-intro journey-intro">
            <p className="section-label">The journey so far</p>
            <h2>A life shaped by learning, leadership, and service.</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item"><p className="timeline-marker">Foundation</p><h3>Academic excellence</h3><p>Graduated with First-Class honours in Mathematics from the University of Ilorin.</p></article>
            <article className="timeline-item"><p className="timeline-marker">Building</p><h3>The Light Tutors</h3><p>Founded an education company serving students while creating meaningful pathways for young tutors.</p></article>
            <article className="timeline-item"><p className="timeline-marker">Expanding</p><h3>HireGround</h3><p>Created a platform focused on practical exposure, employability, and successful school-to-work transitions.</p></article>
            <article className="timeline-item"><p className="timeline-marker">Serving</p><h3>Leadership in community</h3><p>Serves as a Trustee with Equipr Youth Partnership and actively at Citizens of Light Church.</p></article>
          </div>
        </section>

        <section className="booking section" id="booking">
          <div className="booking-intro">
            <p className="section-label">Start a conversation</p>
            <h2>Let’s make your next step clearer.</h2>
            <p>Choose the conversation that best fits where you are. i dey wait for link</p>
          </div>
          <div className="booking-options">
            <article className="booking-card booking-card-featured">
              <p className="booking-kicker">A good place to start</p>
              <h3>Free introduction call</h3>
              <p className="booking-duration">15 minutes · Online</p>
              <p>Share what you’re working through and find out whether Joshua is the right person to help.</p>
              <button className="button button-light" type="button" onClick={() => openBooking('intro')}>Choose a time</button>
            </article>
            <article className="booking-card">
              <p className="booking-kicker">For focused guidance</p>
              <h3>Strategy consultation</h3>
              <p className="booking-duration">Duration & fee · To be added</p>
              <p>A deeper, practical session for education, career development, tutoring, or youth-focused initiatives.</p>
              <button className="button button-outline" type="button" onClick={() => openBooking('consultation')}>Book a consultation</button>
            </article>
          </div>
        </section>

        <section className="speaking section">
          <p className="section-label section-label-light">Speaking & partnerships</p>
          <div className="speaking-layout">
            <h2>Looking for a thoughtful voice on education, opportunity, or youth development?</h2>
            <div>
              <p>Invite Joshua to speak, facilitate a conversation, or collaborate on an initiative that equips young people to thrive.</p>
              <button className="button button-orange" type="button" onClick={() => openBooking('contact')}>Make an enquiry</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">Joshua Oroge</a>
        <p>Education · Opportunity · Purpose</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/joshuaioroge/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/imole_yeshua/" target="_blank" rel="noreferrer">Instagram</a>
          <button type="button" onClick={() => openBooking('contact')}>Email</button>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Joshua Oroge</p>
      </footer>

      {bookingType && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setBookingType(null)}>
          <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button autoFocus className="modal-close" type="button" onClick={() => setBookingType(null)} aria-label="Close booking dialog">Close</button>
            <p className="section-label">i dey wait for link</p>
            <h2 id="booking-modal-title">{bookingType === 'intro' ? 'Free 15-minute call' : bookingType === 'consultation' ? 'Strategy consultation' : 'Contact Joshua'}</h2>
            <p>i dey wait for link</p>
            <button className="button button-dark" type="button" onClick={() => setBookingType(null)}>Got it</button>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
