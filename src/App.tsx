import {
  Activity,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Gauge,
  HeartPulse,
  Hospital,
  LineChart,
  Pill,
  ShieldCheck,
  Stethoscope,
  UsersRound
} from 'lucide-react';
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
  'Monthly reporting',
  '3-month active launch window inside a broader 12-month implementation plan'
];

const iconMap = [UsersRound, Stethoscope, Hospital, Pill, LineChart, Gauge, Clock3, ClipboardList];

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="topbar" aria-label="Presentation navigation">
          <div className="brand">
            <span className="brandMark">D</span>
            <span>
              <strong>DoctaRx</strong>
              <small>Abuja Pilot Briefing</small>
            </span>
          </div>
          <a className="navButton" href="#pilot-ask">Pilot Ask</a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Federal Ministry of Health and Social Welfare presentation</p>
            <h1>DoctaRx Abuja Pilot Program</h1>
            <p className="lead">
              A small, measurable, low-risk pilot to connect patient care, referral follow-up,
              pharmacy visibility, and public-health reporting.
            </p>
            <div className="heroActions">
              <a href="#pilot-program" className="primaryAction">Review Pilot Scope</a>
              <a href="#dashboard" className="secondaryAction">View Sample Pilot Data</a>
            </div>
          </div>

          <div className="videoPanel" aria-label="DoctaRx pre-presentation video">
            <video
              controls
              preload="metadata"
              poster="/media/pilot-video-poster.png"
              src="/media/DoctaRx_Pilot_PrePresentation_With_Live_Portal_Walkthrough.mp4"
            />
            <div className="stableCaption">
              <strong>Pre-presentation explainer.</strong>
              <span>
                Calm female narration, actual portal walkthrough, demo data only, and a handover
                to Jonah Baka for the formal PowerPoint.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="band concise">
        <div className="sectionHeader">
          <p className="eyebrow">Core message</p>
          <h2>Start small. Measure results. Scale after evidence.</h2>
        </div>
        <p>
          The pilot does not replace hospitals, PHCs, doctors, pharmacies, or government systems.
          It adds a coordination and visibility layer around the patient journey.
        </p>
      </section>

      <section id="pilot-program" className="band">
        <div className="sectionHeader">
          <p className="eyebrow">Pilot program focal point</p>
          <h2>What the Abuja pilot will look like</h2>
        </div>
        <div className="twoColumn">
          <div>
            <h3>Pilot Scope</h3>
            <ul className="checkList">
              {scopeItems.map((item) => (
                <li key={item}><CheckCircle2 size={18} />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Pilot Actors</h3>
            <div className="actorList">
              {pilotActors.map((item) => (
                <div className="actorItem" key={item.actor}>
                  <strong>{item.actor}</strong>
                  <span>{item.example}</span>
                  <p>{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band muted">
        <div className="sectionHeader">
          <p className="eyebrow">Workflow</p>
          <h2>Simple patient journey from request to follow-up</h2>
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

      <section id="dashboard" className="band dashboardBand">
        <div className="sectionHeader">
          <p className="eyebrow">Fictional data for presentation</p>
          <h2>Sample Pilot Data</h2>
          <p>
            These figures are synthetic demonstration data to show what the Ministry can monitor
            during a controlled Abuja pilot.
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

      <section className="band">
        <div className="sectionHeader">
          <p className="eyebrow">Implementation timeline</p>
          <h2>First week, first month, and first three months</h2>
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

      <section className="band muted">
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
      </section>
    </main>
  );
}

export default App;

