import { useEffect, useRef, useState } from 'react'
import './App.css'

const API_URL = 'https://eradicate-atlantic-setting.ngrok-free.dev'

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Report an issue', page: 'report' },
  { label: 'Track complaint', page: 'tracking' },
]

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    camera: (
      <>
        <path d="M4 7h3l1.5-2h7L17 7h3v11H4Z" />
        <circle cx="12" cy="12.5" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4m0 0L7 9m5-5 5 5" />
        <path d="M5 15v4h14v-4" />
      </>
    ),
    shield: (
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }

  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {icon && <Icon name={icon} size={17} />}
    </button>
  )
}

function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <button
        className="brand"
        onClick={() => navigate('home')}
        aria-label="Go to CivicFix home"
      >
        <span className="brand-mark">
          <Icon name="shield" size={19} />
        </span>

        <span>
          Civic<span>Fix</span>
        </span>
      </button>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>

      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        {navItems.map((item) => (
          <button
            className={page === item.page ? 'active' : ''}
            key={item.page}
            onClick={() => {
              navigate(item.page)
              setOpen(false)
            }}
          >
            {item.label}
          </button>
        ))}

        <span className="nav-divider" />

        <span className="nav-status">
          <i /> Services online
        </span>
      </nav>
    </header>
  )
}

function Footer({ navigate }) {
  return (
    <footer>
      <div className="footer-brand">
        <button className="brand" onClick={() => navigate('home')}>
          <span className="brand-mark">
            <Icon name="shield" size={17} />
          </span>

          <span>
            Civic<span>Fix</span>
          </span>
        </button>

        <p>Make your city better, one report at a time.</p>
      </div>

      <div className="footer-links">
        <span>Built for better neighborhoods</span>
        <span>Privacy · Accessibility · Support</span>
      </div>
    </footer>
  )
}

function Home({ navigate }) {
  const steps = [
    ['01', 'Upload a photo', 'Show us what needs attention.'],
    ['02', 'AI detects the issue', 'We identify the right department.'],
    ['03', 'Location captured', 'Pinpoint the problem in seconds.'],
    ['04', 'Complaint sent', 'Your city takes it from here.'],
  ]

  return (
    <main>
      <section className="hero-section page-pad">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Community-powered city care
          </p>

          <h1>
            Report civic problems <em>easily.</em>
          </h1>

          <p className="hero-lede">
            CivicFix helps you turn a photo of a problem into action.
            Fast, clear, and built for the people who live here.
          </p>

          <div className="hero-actions">
            <Button onClick={() => navigate('report')} icon="arrow">
              Report an issue
            </Button>

            <Button
              variant="secondary"
              onClick={() => navigate('tracking')}
              icon="search"
            >
              Track a complaint
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-card">
            <img
              className="hero-project-image"
              src={`${import.meta.env.BASE_URL}civicfix-hero.jpg`}
              alt="CivicFix AI-powered civic issue reporting"
            />
          </div>
        </div>
      </section>

      <section className="project-info-strip page-pad">
        <div className="project-info-item">
          <span className="project-info-icon">
            <Icon name="camera" size={22} />
          </span>

          <div>
            <strong>AI-Powered Detection</strong>
            <p>
              CivicFix analyzes uploaded photos to identify civic problems
              such as potholes, garbage, damaged roads and water leakage.
            </p>
          </div>
        </div>

        <div className="project-info-item">
          <span className="project-info-icon">
            <Icon name="pin" size={22} />
          </span>

          <div>
            <strong>Smart Location</strong>
            <p>
              The user's location is captured and converted into a readable
              address to make every complaint easier to locate.
            </p>
          </div>
        </div>

        <div className="project-info-item">
          <span className="project-info-icon">
            <Icon name="shield" size={22} />
          </span>

          <div>
            <strong>Smart Complaint Routing</strong>
            <p>
              AI helps identify the issue and route the complaint toward the
              appropriate civic department.
            </p>
          </div>
        </div>
      </section>

      <section className="how-section page-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Simple by design</p>
            <h2>From spotted to solved.</h2>
          </div>

          <p>
            Every report gets the right attention, without the runaround.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map(([number, title, text], index) => (
            <div
              className={`step ${
                index === 1 ? 'step-highlight' : ''
              }`}
              key={number}
            >
              <span className="step-number">{number}</span>

              <div className="step-icon">
                <Icon
                  name={['camera', 'shield', 'pin', 'check'][index]}
                  size={20}
                />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="callout page-pad">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>See something? Say something.</h2>
        </div>

        <Button onClick={() => navigate('report')} icon="arrow">
          Start a report
        </Button>
      </section>
    </main>
  )
}

/* ============================================================
   REPORT PAGE
   ============================================================ */

function Report({ navigate, report, setReport }) {
  const inputRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFile = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    setReport((current) => ({
      ...current,
      file,
      image: URL.createObjectURL(file),
    }))

    setError('')
  }

  const locate = () => {
    setError('')

    if (!navigator.geolocation) {
      setError('Geolocation is not supported on this device.')
      return
    }

    setReport((current) => ({
      ...current,
      location: 'Getting your location...',
    }))

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        setReport((current) => ({
          ...current,
          latitude,
          longitude,
          location: 'Finding address...',
        }))

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
          )

          if (!response.ok) {
            throw new Error('Unable to find address')
          }

          const data = await response.json()
          const address = data.address || {}

          const readableLocation = [
            address.road,
            address.neighbourhood ||
              address.suburb ||
              address.village ||
              address.town ||
              address.city,
            address.state,
            address.postcode,
          ]
            .filter(Boolean)
            .join(', ')

          setReport((current) => ({
            ...current,
            latitude,
            longitude,
            location:
              readableLocation ||
              data.display_name ||
              `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
          }))
        } catch (error) {
          console.error('Reverse geocoding failed:', error)

          setReport((current) => ({
            ...current,
            latitude,
            longitude,
            location: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
          }))
        }
      },
      () => {
        setError('Unable to access your location.')

        setReport((current) => ({
          ...current,
          location: '',
        }))
      }
    )
  }

  /* ============================================================
     WORKING AI CONNECTION — DO NOT REMOVE
     ============================================================ */

  const analyze = async () => {
    if (!report.file) {
      setError('Please upload a photo first.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const formData = new FormData()

      formData.append('image', report.file)

      if (report.description) {
        formData.append('description', report.description)
      }

      if (report.latitude != null) {
        formData.append('latitude', String(report.latitude))
      }

      if (report.longitude != null) {
        formData.append('longitude', String(report.longitude))
      }

      console.log('Sending image to CivicFix AI...')

      const response = await fetch(`${API_URL}/analyze`, {
        method: 'POST',
        body: formData,
      })

      console.log('AI response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('AI server error:', errorText)

        throw new Error(`AI server error: ${response.status}`)
      }

      const data = await response.json()

      console.log('AI response:', data)

      const aiResult = data.result || data.ai || data

      setReport((current) => ({
        ...current,
        ...aiResult,
        aiResponse: data,
        analyzed: true,
      }))

      navigate('result')
    } catch (err) {
      console.error('AI analysis failed:', err)

      setError(
        'AI analysis failed. Please make sure your AI backend is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="subpage">
      <section className="page-pad narrow-header">
        <p className="eyebrow">New report</p>

        <h1>What needs fixing?</h1>

        <p>
          Give us the details and we'll route your report to the right
          people.
        </p>
      </section>

      <section className="report-layout page-pad">
        <div className="form-panel">
          <div
            className={`upload-zone ${
              report.image ? 'has-image' : ''
            }`}
            onClick={() => inputRef.current?.click()}
            role="button"
            tabIndex="0"
            onKeyDown={(event) =>
              event.key === 'Enter' &&
              inputRef.current?.click()
            }
          >
            {report.image ? (
              <img src={report.image} alt="Selected civic issue" />
            ) : (
              <>
                <span className="upload-icon">
                  <Icon name="camera" size={24} />
                </span>

                <strong>Upload a photo</strong>

                <span>
                  Choose from gallery/files or take a photo
                </span>

                <small>JPG, PNG up to 10MB</small>
              </>
            )}

            <input
              ref={inputRef}
              onChange={handleFile}
              type="file"
              accept="image/*"
            />
          </div>

          <div className="location-row">
            <div>
              <label>Location</label>

              <p className={report.location ? 'location-set' : ''}>
                <Icon name="pin" size={16} />
                {report.location || 'No location selected'}
              </p>
            </div>

            <Button
              variant="outline"
              onClick={locate}
              icon="pin"
            >
              Use current location
            </Button>
          </div>

          <label className="field-label" htmlFor="description">
            Tell us more <span>Optional</span>
          </label>

          <textarea
            id="description"
            value={report.description || ''}
            onChange={(event) =>
              setReport((current) => ({
                ...current,
                description: event.target.value,
              }))
            }
            placeholder="Add any helpful details..."
            rows="5"
          />

          {error && <p className="form-error">{error}</p>}

          <Button
            onClick={analyze}
            disabled={loading}
            icon="arrow"
          >
            {loading ? (
              <>
                <span className="spinner" />
                Analyzing with AI...
              </>
            ) : (
              'Analyze issue'
            )}
          </Button>

          <p className="privacy-note">
            <Icon name="shield" size={14} />
            Your report helps improve your neighborhood.
          </p>
        </div>

        <aside className="side-note">
          <span className="side-note-icon">
            <Icon name="shield" size={22} />
          </span>

          <h3>Smart routing</h3>

          <p>
            Our AI looks at your photo and details to identify the issue
            and send it to the right city team.
          </p>

          <div className="side-rule" />

          <p className="small-copy">
            Your location is only used to find the right service area.
          </p>
        </aside>
      </section>
    </main>
  )
      }
/* ============================================================
   RESULT PAGE
   ============================================================ */

function Result({ navigate, report }) {
  if (!report?.analyzed) {
    return (
      <main className="subpage">
        <section className="page-pad empty-state">
          <span className="empty-icon">
            <Icon name="shield" size={26} />
          </span>

          <h1>No analysis yet</h1>

          <p>
            Upload a photo and analyze an issue first.
          </p>

          <Button onClick={() => navigate('report')} icon="arrow">
            Report an issue
          </Button>
        </section>
      </main>
    )
  }

  const category =
    report.category ||
    report.issue ||
    report.type ||
    'Civic Issue'

  const confidence =
    report.confidence != null
      ? `${report.confidence}%`
      : 'Available from AI'

  const priority =
    report.priority ||
    report.severity ||
    'Not specified'

  const description =
    report.description ||
    'AI has analyzed the submitted civic issue.'

  return (
    <main className="subpage">
      <section className="page-pad narrow-header">
        <p className="eyebrow">AI analysis complete</p>

        <h1>Here's what we found.</h1>

        <p>
          Your report has been analyzed and is ready to be submitted.
        </p>
      </section>

      <section className="result-layout page-pad">
        <div className="result-card">
          <div className="result-card-top">
            <div>
              <span className="result-kicker">
                Detected issue
              </span>

              <h2>{category}</h2>
            </div>

            <span className="result-check">
              <Icon name="check" size={22} />
            </span>
          </div>

          <div className="result-grid">
            <div className="result-item">
              <span>Category</span>
              <strong>{category}</strong>
            </div>

            <div className="result-item">
              <span>AI confidence</span>
              <strong>{confidence}</strong>
            </div>

            <div className="result-item">
              <span>Priority</span>
              <strong
                className={
                  String(priority).toLowerCase().includes('high')
                    ? 'priority-high'
                    : String(priority)
                        .toLowerCase()
                        .includes('medium')
                    ? 'priority-medium'
                    : 'priority-low'
                }
              >
                {priority}
              </strong>
            </div>

            <div className="result-item">
              <span>Location</span>
              <strong>
                {report.location || 'Location not provided'}
              </strong>
            </div>
          </div>

          <div className="result-description">
            <span>Description</span>
            <p>{description}</p>
          </div>

          {report.image && (
            <div className="result-image-wrap">
              <img
                src={report.image}
                alt="Reported civic issue"
              />
            </div>
          )}

          <div className="result-actions">
            <Button
              onClick={() => navigate('report')}
              variant="secondary"
            >
              Edit report
            </Button>

            <Button
              onClick={() => navigate('tracking')}
              icon="arrow"
            >
              Continue
            </Button>
          </div>
        </div>

        <aside className="result-side-note">
          <span className="side-note-icon">
            <Icon name="check" size={22} />
          </span>

          <h3>Ready for the next step</h3>

          <p>
            The AI has identified the issue. You can now continue
            through the CivicFix complaint flow.
          </p>

          <div className="side-rule" />

          <p className="small-copy">
            Keep your complaint details available for tracking.
          </p>
        </aside>
      </section>
    </main>
  )
}

/* ============================================================
   TRACKING PAGE
   ============================================================ */

function Tracking({ navigate }) {
  const [complaintId, setComplaintId] = useState('')
  const [searched, setSearched] = useState(false)

  const searchComplaint = (event) => {
    event.preventDefault()

    if (!complaintId.trim()) return

    setSearched(true)
  }

  return (
    <main className="subpage">
      <section className="page-pad narrow-header">
        <p className="eyebrow">Complaint tracking</p>

        <h1>Track your complaint.</h1>

        <p>
          Enter your complaint ID to check its current status.
        </p>
      </section>

      <section className="tracking-page page-pad">
        <div className="tracking-card">
          <form onSubmit={searchComplaint}>
            <label htmlFor="complaint-id">
              Complaint ID
            </label>

            <div className="tracking-input">
              <input
                id="complaint-id"
                value={complaintId}
                onChange={(event) =>
                  setComplaintId(event.target.value)
                }
                placeholder="Enter complaint ID"
              />

              <Button type="submit" icon="search">
                Track
              </Button>
            </div>
          </form>

          {searched && (
            <div className="tracking-status">
              <div className="tracking-status-head">
                <div>
                  <span>Complaint</span>
                  <strong>{complaintId}</strong>
                </div>

                <span className="status-badge">
                  Received
                </span>
              </div>

              <div className="status-timeline">
                <div className="status-step active">
                  <span className="status-dot" />

                  <div>
                    <strong>Complaint received</strong>
                    <small>
                      Your complaint has been recorded.
                    </small>
                  </div>
                </div>

                <div className="status-step">
                  <span className="status-dot" />

                  <div>
                    <strong>Under review</strong>
                    <small>
                      The responsible department will review it.
                    </small>
                  </div>
                </div>

                <div className="status-step">
                  <span className="status-dot" />

                  <div>
                    <strong>In progress</strong>
                    <small>
                      Work will begin after assignment.
                    </small>
                  </div>
                </div>

                <div className="status-step">
                  <span className="status-dot" />

                  <div>
                    <strong>Resolved</strong>
                    <small>
                      The reported issue has been fixed.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!searched && (
            <div className="tracking-empty">
              <span className="empty-icon">
                <Icon name="search" size={23} />
              </span>

              <h3>Enter your complaint ID</h3>

              <p>
                Your complaint ID can be used to check the progress
                of your report.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

/* ============================================================
   APP
   ============================================================ */

function App() {
  const [page, setPage] = useState('home')

  const [report, setReport] = useState({
    file: null,
    image: '',
    description: '',
    location: '',
    latitude: null,
    longitude: null,
    category: '',
    confidence: null,
    priority: '',
    analyzed: false,
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [page])

  const navigate = (nextPage) => {
    setPage(nextPage)
  }

  return (
    <div className="app">
      <Navbar
        page={page}
        navigate={navigate}
      />

      {page === 'home' && (
        <Home navigate={navigate} />
      )}

      {page === 'report' && (
        <Report
          navigate={navigate}
          report={report}
          setReport={setReport}
        />
      )}

      {page === 'result' && (
        <Result
          navigate={navigate}
          report={report}
        />
      )}

      {page === 'tracking' && (
        <Tracking navigate={navigate} />
      )}

      <Footer navigate={navigate} />
    </div>
  )
}

export default App

      
