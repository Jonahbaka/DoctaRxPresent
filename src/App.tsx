import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Database,
  FileCheck2,
  Gauge,
  HeartPulse,
  Hospital,
  LineChart,
  Network,
  Pill,
  PlayCircle,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Video
} from 'lucide-react';
import PilotMessageGlassCard from './components/PilotMessageGlassCard';
import {
  pilotActors,
  pilotActivity,
  pilotFacilities,
  pilotMetrics,
  requestCategories,
  successIndicators,
  timelinePhases,
  workflowSteps
} from './data/mockDoctaRxData';

const scopeItems = [
  '2 to 3 selected Primary Healthcare Centres',
  '1 General Hospital referral pathway',
  'Participating doctors and PHC officers',
  'Participating pharmacy partners',
  'Ministry/Department oversight dashboard',
  'Monthly reporting and review cadence',
  '3-month active launch window inside a broader 12-month implementation plan'
];

const heroMessages = [
  {
    title: 'Start small',
    body: 'Pilot focus: selected Abuja facilities, clear roles, and measurable operating results.'
  },
  {
    title: 'Connect the journey',
    body: 'DoctaRx connects PHCs, doctors, pharmacies, referrals, and Ministry visibility.'
  },
  {
    title: 'Show evidence',
    body: 'Video consultation, referral tracking, forecasting, and DHIS2-ready reporting support the decision to scale.'
  },
  {
    title: 'Human handover',
    body: 'Next: Pilot roadmap and partnership details with Jonah Baka.'
  }
];

const featurePillars = [
  {
    title: 'Video consultation',
    body: 'Patients and PHC teams can move from intake into a provider-led video review where appropriate.',
    icon: Video
  },
  {
    title: 'Referral follow-up',
    body: 'Hospital, specialist, lab, and follow-up pathways can be tracked from request to documented status.',
    icon: Network
  },
  {
    title: 'Prescription visibility',
    body: 'Doctors keep clinical accountability while pharmacy partners see the right fulfillment workflow.',
    icon: Pill
  },
  {
    title: 'Public-health visibility',
    body: 'Leadership sees aggregate pilot indicators without exposing patient identifiers.',
    icon: BarChart3
  },
  {
    title: 'Operational forecasting',
    body: 'Planning signals help anticipate consultation volume, referral load, and medicine demand.',
    icon: LineChart
  },
  {
    title: 'NHMIS/DHIS2-ready reporting',
    body: 'Mapped, approved, auditable reporting packages can be prepared for official governance review.',
    icon: Database
  }
];

const ministryReadiness = [
  'Aggregate-only executive dashboard',
  'Facility and referral performance indicators',
  'Explainable planning forecasts',
  'Dry-run NHMIS/DHIS2 export readiness',
  'Approval and audit trail workflow',
  'Weekly and monthly pilot review pack'
];

const faqs = [
  {
    question: 'Does this replace PHCs or hospitals?',
    answer: 'No. The pilot adds coordination, documentation, follow-up, and reporting visibility around existing care structures.'
  },
  {
    question: 'Will real patient data be shown in the presentation?',
    answer: 'No. The presentation uses fictional sample data only. Production workflows must remain governed by role access, consent, and official approval.'
  },
  {
    question: 'How does the Ministry measure success?',
    answer: 'The pilot can track completed consultations, video visits, referral closure, prescription routing, response time, follow-up visibility, reporting completeness, and user satisfaction.'
  },
  {
    question: 'What is needed to proceed?',
    answer: 'Facility selection, pilot focal persons, indicator agreement, governance review, training schedule, and a controlled launch window.'
  }
];

const iconMap = [UsersRound, Stethoscope, Hospital, Pill, LineChart, Gauge, Clock3, ClipboardList];

function App() {
  return (
    <main className="siteShell">
      <section className="hero">
        <nav className="topbar" aria-label="Presentation navigation">
          <a className="brand" href="#top" aria-label="DoctaRx Abuja Pilot Briefing">
            <span className="brandMark">D</span>
            <span>
              <strong>DoctaRx</strong>
              <small>Abuja Pilot Briefing</small>
            </span>
          </a>
          <div className="navLinks" aria-label="Page sections">
            <a href="#pilot-program">Pilot</a>
            <a href="#features">Features</a>
            <a href="#dashboard">Dashboard</a>
            <a className="navButton" href="#pilot-ask">Pilot Ask</a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">Federal Ministry of Health and Social Welfare presentation</p>
            <h1>DoctaRx Abuja Pilot Program</h1>
            <p className="lead">
              A measured pilot to connect PHC intake, video consultation, prescriptions,
              referral follow-up, public-health visibility, forecasting, and NHMIS/DHIS2-ready reporting.
            </p>
            <div className="heroActions">
              <a href="#pilot-program" className="primaryAction">
                Review Pilot Scope <ArrowRight size={18} />
              </a>
              <a href="#dashboard" className="secondaryAction">
                View Sample Data
              </a>
            </div>
            <div className="heroStats" aria-label="Pilot summary">
              <span><strong>90 days</strong> controlled launch</span>
              <span><strong>5</strong> demo facilities</span>
              <span><strong>0 PHI</strong> in presentation</span>
            </div>
          </div>

          <div className="videoPanel" aria-label="DoctaRx pre-presentation video">
            <div className="videoFrame">
              <video
                controls
                preload="metadata"
                poster="/media/pilot-video-poster.png"
                src="/presentation/assets/video/pre_presentation_video.mp4"
              />
            </div>
            <PilotMessageGlassCard
              eyebrow="Pre-presentation explainer"
              title="Pilot story before the live briefing"
              messages={heroMessages}
            />
          </div>
        </div>
      </section>

      <section className="signalBand">
        <div className="signalInner">
          <div>
            <p className="eyebrow">Core message</p>
            <h2>Start small. Measure results. Scale after evidence.</h2>
          </div>
          <p>
            The pilot does not replace hospitals, PHCs, doctors, pharmacies, or government systems.
            It adds a calm coordination and visibility layer around the patient journey.
          </p>
        </div>
      </section>

      <section id="pilot-program" className="band">
        <div className="sectionHeader">
          <p className="eyebrow">Pilot program focal point</p>
          <h2>What the Abuja pilot will look like</h2>
          <p>
            A controlled operating model with defined facilities, users, indicators, and Ministry review points.
          </p>
        </div>
        <div className="twoColumn">
          <div className="glassSurface">
            <h3>Pilot Scope</h3>
            <ul className="checkList">
              {scopeItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} />{item}</li>
              ))}
            </ul>
          </div>
          <div className="glassSurface">
            <h3>Pilot Actors</h3>
            <div className="actorList">
              {pilotActors.map((item) => (
                <article className="actorItem" key={item.actor}>
                  <strong>{item.actor}</strong>
                  <span>{item.example}</span>
                  <p>{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band muted journeyBand">
        <div className="sectionHeader">
          <p className="eyebrow">Care journey</p>
          <h2>From patient request to Ministry visibility</h2>
        </div>
        <ol className="workflow">
          {workflowSteps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="features" className="band featureBand">
        <div className="sectionHeader splitHeader">
          <div>
            <p className="eyebrow">Feature pillars</p>
            <h2>Designed for practical public-sector review</h2>
          </div>
          <p>
            The presentation now shows the connected care flow, not only a slide deck:
            consultation, notes, prescriptions, referrals, analytics, forecasting, and reporting readiness.
          </p>
        </div>

        <div className="featureLayout">
          <div className="featureVideo">
            <div className="videoFrame small">
              <video
                controls
                preload="metadata"
                poster="/media/pilot-video-poster.png"
                src="/presentation/assets/video/feature_pillars_video.mp4"
              />
            </div>
            <PilotMessageGlassCard
              compact
              eyebrow="Feature walkthrough"
              title="No frozen consultation ending"
              messages={[
                {
                  title: 'Full journey',
                  body: 'The walkthrough continues past video consultation into referral, analytics, forecasting, DHIS2 readiness, and handover.'
                },
                {
                  title: 'Smooth close',
                  body: 'The final frame prepares the room for the pilot roadmap and partnership details.'
                }
              ]}
            />
          </div>

          <div className="featureGrid">
            {featurePillars.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="featureCard" key={feature.title}>
                  <Icon size={22} />
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dashboard" className="band dashboardBand">
        <div className="sectionHeader">
          <p className="eyebrow">Fictional data for presentation</p>
          <h2>Sample Pilot Dashboard</h2>
          <p>
            These figures are synthetic demonstration data to show what the Ministry can monitor
            during a controlled Abuja pilot. No real patient data is used.
          </p>
        </div>
        <div className="metricsGrid">
          {pilotMetrics.map((metric, index) => {
            const Icon = iconMap[index] || Activity;
            return (
              <article className="metric" key={metric.label}>
                <Icon size={22} />
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="dataGrid">
          <div className="tablePanel">
            <h3>Demo Facility View</h3>
            <table>
              <thead>
                <tr>
                  <th>Facility</th>
                  <th>Requests</th>
                  <th>Consults</th>
                  <th>Referrals</th>
                  <th>Rx</th>
                  <th>Follow-up</th>
                </tr>
              </thead>
              <tbody>
                {pilotActivity.map((row) => (
                  <tr key={row.facility}>
                    <td>{row.facility}</td>
                    <td>{row.requests}</td>
                    <td>{row.consults}</td>
                    <td>{row.referrals}</td>
                    <td>{row.prescriptions}</td>
                    <td>{row.followUp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="categoryPanel">
            <h3>Top request categories</h3>
            {requestCategories.map((item) => (
              <div className="barRow" key={item.category}>
                <span>{item.category}</span>
                <div>
                  <i style={{ width: `${Math.max(18, item.count * 2.2)}%` }} />
                </div>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band readinessBand">
        <div className="sectionHeader splitHeader">
          <div>
            <p className="eyebrow">Analytics, forecasting, reporting</p>
            <h2>Public-health visibility without exposing patient identity</h2>
          </div>
          <p>
            DoctaRx can separate the clinical care workspace from aggregate leadership visibility,
            so decision-makers see trends and readiness without patient-level disclosure.
          </p>
        </div>
        <div className="readinessGrid">
          {ministryReadiness.map((item) => (
            <article className="readinessItem" key={item}>
              <FileCheck2 size={18} />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeader">
          <p className="eyebrow">Implementation timeline</p>
          <h2>Pilot roadmap from approval to scale decision</h2>
        </div>
        <div className="timeline">
          {timelinePhases.map((phase) => (
            <article className="timelineItem" key={phase.title}>
              <span>{phase.phase}</span>
              <h3>{phase.title}</h3>
              <p>{phase.window}</p>
              <ul>
                {phase.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="sectionHeader">
          <p className="eyebrow">Facilities and indicators</p>
          <h2>Useful enough to measure, small enough to approve</h2>
        </div>
        <div className="facilityGrid">
          {pilotFacilities.map((facility) => (
            <article className="facility" key={facility.name}>
              <Building2 size={22} />
              <h3>{facility.name}</h3>
              <span>{facility.type}</span>
              <p>{facility.role}</p>
              <strong>{facility.activity} demo events</strong>
            </article>
          ))}
        </div>
        <div className="indicatorList">
          {successIndicators.map((indicator) => (
            <span key={indicator}><ShieldCheck size={16} />{indicator}</span>
          ))}
        </div>
      </section>

      <section className="band muted faqBand">
        <div className="sectionHeader">
          <p className="eyebrow">Likely Ministry questions</p>
          <h2>Clear answers for the room</h2>
        </div>
        <div className="faqGrid">
          {faqs.map((faq) => (
            <article className="faqItem" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pilot-ask" className="askBand">
        <HeartPulse size={34} />
        <div>
          <p className="eyebrow">Pilot decision needed</p>
          <h2>
            Approval to define pilot modalities, select facilities, align indicators, and proceed
            with technical onboarding.
          </h2>
          <p>
            The live presentation explains the pilot roadmap, partnership structure, and next steps.
          </p>
        </div>
        <a className="askButton" href="#top">
          Rewatch briefing <PlayCircle size={18} />
        </a>
      </section>
    </main>
  );
}

export default App;
