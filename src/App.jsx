
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
            <Button
              onClick={() => navigate('report')}
              icon="arrow"
            >
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
              CivicFix analyzes uploaded photos to identify civic
              problems such as potholes, garbage, damaged roads and
              water leakage.
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
              Your location is captured and converted into a readable
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
              AI helps identify the issue and route the complaint
              toward the appropriate civic department.
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
            Every report gets the right attention, without the
            runaround.
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

        <Button
          onClick={() => navigate('report')}
          icon="arrow"
        >
          Start a report
        </Button>
      </section>
    </main>
  )
}

/* ============================================================
   REPORT PAGE — CLEANER USER EXPERIENCE
   ============================================================ */

function Report({ navigate, report, setReport }) {
  const inputRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFile = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file.')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Please choose an image smaller than 10MB.')
      return
    }

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
      setError('Location is not supported on this device.')
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
          location: 'Finding your address...',
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
          console.error(
            'Reverse geocoding failed:',
            error
          )

          setReport((current) => ({
            ...current,
            latitude,
            longitude,
            location: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
          }))
        }
      },
      () => {
        setError(
          'Location permission was not granted. You can try again.'
        )

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
        formData.append(
          'description',
          report.description
        )
      }

      if (report.latitude != null) {
        formData.append(
          'latitude',
          String(report.latitude)
        )
      }

      if (report.longitude != null) {
        formData.append(
          'longitude',
          String(report.longitude)
        )
      }

      console.log(
        'Sending image to CivicFix AI...'
      )

      const response = await fetch(
        `${API_URL}/analyze`,
        {
          method: 'POST',
          body: formData,
        }
      )

      console.log(
        'AI response status:',
        response.status
      )

      if (!response.ok) {
        const errorText =
          await response.text()

        console.error(
          'AI server error:',
          errorText
        )

        throw new Error(
          `AI server error: ${response.status}`
        )
      }

      const data = await response.json()

      console.log(
        'AI response:',
        data
      )

      const aiResult =
        data.result ||
        data.ai ||
        data

      setReport((current) => ({
        ...current,
        ...aiResult,
        aiResponse: data,
        analyzed: true,
      }))

      navigate('result')
    } catch (err) {
      console.error(
        'AI analysis failed:',
        err
      )

      setError(
        'AI analysis failed. Please make sure your AI backend is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="subpage report-page">

      <section className="page-pad report-header">
        <div>
          <p className="eyebrow">
            New report
          </p>

          <h1>
            Report a civic problem
          </h1>

          <p className="report-intro">
            Follow these simple steps. Upload a photo,
            add your location, and let CivicFix analyze
            the problem.
          </p>
        </div>

        <div className="report-progress">
          <span className="progress-active">
            1
          </span>

          <span>Photo</span>

          <span className="progress-line" />

          <span>2</span>
          <span>Location</span>

          <span className="progress-line" />

          <span>3</span>
          <span>Analyze</span>
        </div>
      </section>

      <section className="report-clean-layout page-pad">

        <div className="report-main-card">

          <div className="report-step-heading">
            <div className="step-badge">
              1
            </div>

            <div>
              <h2>Upload a photo</h2>

              <p>
                Take a clear photo of the civic problem
                or choose one from your device.
              </p>
            </div>
          </div>

          <div
            className={`upload-zone-clean ${
              report.image
                ? 'has-image'
                : ''
            }`}
            onClick={() =>
              inputRef.current?.click()
            }
            role="button"
            tabIndex="0"
            onKeyDown={(event) => {
              if (
                event.key === 'Enter' ||
                event.key === ' '
              ) {
                inputRef.current?.click()
              }
            }}
          >
            {report.image ? (
              <>
                <img
                  src={report.image}
                  alt="Selected civic issue"
                />

                <div className="upload-overlay">
                  <span>
                    Change photo
                  </span>
                </div>
              </>
            ) : (
              <div className="upload-empty">
                <span className="upload-icon-large">
                  <Icon
                    name="camera"
                    size={30}
                  />
                </span>

                <strong>
                  Tap to upload a photo
                </strong>

                <span>
                  You can also take a photo
                  using your camera
                </span>

                <small>
                  JPG or PNG · Maximum 10MB
                </small>
              </div>
            )}

            <input
              ref={inputRef}
              onChange={handleFile}
              type="file"
              accept="image/*"
            />
          </div>

          <div className="report-divider" />

          <div className="report-step-heading">
            <div className="step-badge">
              2
            </div>

            <div>
              <h2>
                Add your location
              </h2>

              <p>
                This helps us identify where the
                problem is located.
              </p>
            </div>
          </div>

          <div className="location-box-clean">

            <div className="location-information">

              <span className="location-icon-clean">
                <Icon
                  name="pin"
                  size={22}
                />
              </span>

              <div>
                <strong>
                  Your location
                </strong>

                <p
                  className={
                    report.location
                      ? 'location-value-set'
                      : ''
                  }
                >
                  {report.location ||
                    'Location has not been added yet'}
                </p>
              </div>

            </div>

            <Button
              variant="outline"
              onClick={locate}
              icon="pin"
            >
              Use my location
            </Button>

          </div>

          <div className="report-divider" />

          <div className="report-step-heading">
            <div className="step-badge">
              3
            </div>

            <div>
              <h2>
                Add more details
                <span className="optional-label">
                  Optional
                </span>
              </h2>

              <p>
                Tell us anything that may help
                explain the problem.
              </p>
            </div>
          </div>

          <textarea
            className="description-clean"
            id="description"
            value={
              report.description || ''
            }
            onChange={(event) =>
              setReport((current) => ({
                ...current,
                description:
                  event.target.value,
              }))
            }
            placeholder="Example: There is a large pothole near the school entrance..."
            rows="4"
          />

          {error && (
            <div className="form-error-clean">
              <Icon
                name="shield"
                size={17}
              />

              <span>
                {error}
              </span>
            </div>
          )}

          <div className="analyze-area">

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
                'Analyze my report'
              )}
            </Button>

            <p>
              CivicFix will analyze your photo
              and identify the civic issue.
            </p>

          </div>

        </div>

        <aside className="report-help-card">

          <div className="help-card-icon">
            <Icon
              name="shield"
              size={24}
            />
          </div>

          <h3>
            How CivicFix works
          </h3>

          <div className="help-step">
            <span>1</span>

            <div>
              <strong>
                Upload
              </strong>

              <p>
                Add a photo showing the problem.
              </p>
            </div>
          </div>

          <div className="help-step">
            <span>2</span>

            <div>
              <strong>
                Locate
              </strong>

              <p>
                Add the location where it happened.
              </p>
            </div>
          </div>

          <div className="help-step">
            <span>3</span>

            <div>
              <strong>
                Analyze
              </strong>

              <p>
                AI identifies the issue for you.
              </p>
            </div>
          </div>

          <div className="help-note">
            <Icon
              name="check"
              size={16}
            />

            <span>
              You don't need to know the
              technical name of the problem.
              Just show us what you see.
            </span>
          </div>

        </aside>

      </section>
    </main>
  )
}
function Result({ navigate, report, setReport }) {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(
    Boolean(report?.submitted)
  )

  const submitComplaint = () => {
    setSubmitting(true)

    const complaintId =
      report?.id ||
      `CF-${Date.now().toString().slice(-6)}`

    setReport((current) => ({
      ...current,
      submitted: true,
      id: complaintId,
    }))

    setSubmitted(true)
    setSubmitting(false)
  }

  if (!report) {
    return (
      <main className="subpage">
        <section className="empty-state page-pad">
          <div className="empty-icon">
            <Icon name="camera" size={28} />
          </div>

          <h1>No report yet</h1>

          <p>
            Start by uploading a photo of the civic
            problem you want to report.
          </p>

          <Button
            onClick={() => navigate('report')}
            icon="arrow"
          >
            Create a report
          </Button>
        </section>
      </main>
    )
  }

  if (submitted) {
    return (
      <main className="subpage">
        <section className="success-page page-pad">
          <div className="success-icon">
            <Icon name="check" size={34} />
          </div>

          <p className="eyebrow">
            Complaint submitted
          </p>

          <h1>
            Your report is ready.
          </h1>

          <p className="success-message">
            Your complaint has been created successfully.
            Keep your complaint ID so you can track it later.
          </p>

          <div className="complaint-id-card">
            <span>Complaint ID</span>

            <strong>
              {report.id}
            </strong>
          </div>

          <div className="success-actions">
            <Button
              onClick={() => navigate('tracking')}
              icon="search"
            >
              Track complaint
            </Button>

            <Button
              variant="secondary"
              onClick={() => navigate('home')}
            >
              Back to home
            </Button>
          </div>
        </section>
      </main>
    )
  }

  const category =
    report.category ||
    report.issue ||
    'Civic issue detected'

  const confidence =
    report.confidence != null
      ? `${report.confidence}%`
      : 'AI detected'

  const priority =
    report.priority ||
    'Normal'

  const description =
    report.description ||
    report.details ||
    'The AI has analyzed your uploaded image.'

  return (
    <main className="subpage">
      <section className="page-pad result-header">
        <p className="eyebrow">
          AI analysis complete
        </p>

        <h1>
          We found an issue.
        </h1>

        <p>
          Review the information below before submitting
          your complaint.
        </p>
      </section>

      <section className="page-pad result-layout">

        <div className="result-image-card">
          {report.image ? (
            <img
              src={report.image}
              alt="Reported civic issue"
            />
          ) : (
            <div className="result-no-image">
              <Icon
                name="camera"
                size={30}
              />
            </div>
          )}

          <div className="result-image-label">
            Uploaded photo
          </div>
        </div>

        <div className="result-details-card">

          <div className="result-category">
            <span className="result-label">
              Issue detected
            </span>

            <h2>
              {category}
            </h2>
          </div>

          <div className="result-metrics">

            <div>
              <span>
                Confidence
              </span>

              <strong>
                {confidence}
              </strong>
            </div>

            <div>
              <span>
                Priority
              </span>

              <strong>
                {priority}
              </strong>
            </div>

          </div>

          <div className="result-info-block">
            <span>
              Description
            </span>

            <p>
              {description}
            </p>
          </div>

          <div className="result-info-block">
            <span>
              Location
            </span>

            <p>
              {report.location ||
                'Location not added'}
            </p>
          </div>

          <div className="result-submit-box">

            <div>
              <strong>
                Everything looks correct?
              </strong>

              <p>
                Submit this complaint to create
                your CivicFix complaint ID.
              </p>
            </div>

            <Button
              onClick={submitComplaint}
              disabled={submitting}
              icon="arrow"
            >
              {submitting
                ? 'Submitting...'
                : 'Submit complaint'}
            </Button>

          </div>

          <button
            className="text-button"
            onClick={() => navigate('report')}
          >
            ← Go back and edit report
          </button>

        </div>

      </section>
    </main>
  )
}


function Tracking({ navigate, report }) {
  const [complaintId, setComplaintId] =
    useState(report?.id || '')

  const [searched, setSearched] =
    useState(Boolean(report?.submitted))

  const handleSearch = (event) => {
    event.preventDefault()

    if (!complaintId.trim()) {
      return
    }

    setSearched(true)
  }

  return (
    <main className="subpage tracking-page">

      <section className="page-pad tracking-header">
        <p className="eyebrow">
          Complaint tracking
        </p>

        <h1>
          Track your complaint.
        </h1>

        <p>
          Enter your CivicFix complaint ID to
          check your report.
        </p>
      </section>

      <section className="page-pad tracking-content">

        <div className="tracking-card">

          <div className="tracking-icon">
            <Icon
              name="search"
              size={25}
            />
          </div>

          <h2>
            Find your complaint
          </h2>

          <p>
            Your complaint ID looks like
            <strong> CF-123456</strong>.
          </p>

          <form
            className="tracking-form"
            onSubmit={handleSearch}
          >
            <label htmlFor="complaint-id">
              Complaint ID
            </label>

            <input
              id="complaint-id"
              value={complaintId}
              onChange={(event) =>
                setComplaintId(
                  event.target.value.toUpperCase()
                )
              }
              placeholder="Enter your ID"
              autoComplete="off"
            />

            <Button
              type="submit"
              icon="search"
            >
              Track complaint
            </Button>
          </form>

          {searched && complaintId && (
            <div className="tracking-result">

              <div className="tracking-result-top">
                <div>
                  <span>
                    Complaint
                  </span>

                  <strong>
                    {complaintId}
                  </strong>
                </div>

                <span className="status-badge">
                  Submitted
                </span>
              </div>

              <div className="tracking-timeline">

                <div className="timeline-item completed">
                  <span>
                    <Icon
                      name="check"
                      size={15}
                    />
                  </span>

                  <div>
                    <strong>
                      Complaint submitted
                    </strong>

                    <p>
                      Your complaint has been created.
                    </p>
                  </div>
                </div>

                <div className="timeline-line" />

                <div className="timeline-item current">
                  <span>
                    <Icon
                      name="clock"
                      size={15}
                    />
                  </span>

                  <div>
                    <strong>
                      Under review
                    </strong>

                    <p>
                      The complaint is ready for
                      civic department review.
                    </p>
                  </div>
                </div>

                <div className="timeline-line" />

                <div className="timeline-item">
                  <span>
                    <Icon
                      name="check"
                      size={15}
                    />
                  </span>

                  <div>
                    <strong>
                      Resolution
                    </strong>

                    <p>
                      Updates will appear here when
                      the issue is resolved.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        <div className="tracking-help">

          <div className="help-card-icon">
            <Icon
              name="shield"
              size={22}
            />
          </div>

          <h3>
            Don't have a complaint ID?
          </h3>

          <p>
            Create a new report and CivicFix will
            generate an ID after you submit it.
          </p>

          <Button
            variant="secondary"
            onClick={() => navigate('report')}
            icon="arrow"
          >
            Create a report
          </Button>

        </div>

      </section>
    </main>
  )
}


function App() {
  const [page, setPage] =
    useState('home')

  const [report, setReport] =
    useState({
      file: null,
      image: '',
      description: '',
      latitude: null,
      longitude: null,
      location: '',
      category: '',
      confidence: null,
      priority: '',
      analyzed: false,
      submitted: false,
      id: '',
    })

  const navigate = (nextPage) => {
    setPage(nextPage)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    document.title =
      page === 'home'
        ? 'CivicFix'
        : page === 'report'
          ? 'Report an Issue — CivicFix'
          : page === 'tracking'
            ? 'Track Complaint — CivicFix'
            : 'AI Result — CivicFix'
  }, [page])

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
          setReport={setReport}
        />
      )}

      {page === 'tracking' && (
        <Tracking
          navigate={navigate}
          report={report}
        />
      )}

      <Footer navigate={navigate} />

    </div>
  )
}

export default App
      
