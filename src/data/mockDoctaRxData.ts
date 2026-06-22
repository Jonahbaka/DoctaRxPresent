export const pilotMetrics = [
  { label: 'Patient requests', value: '128', detail: 'Captured across selected demo facilities' },
  { label: 'Completed consultations', value: '86', detail: 'Remote and facility-supported reviews' },
  { label: 'Referrals created', value: '34', detail: 'Hospital and specialist follow-up pathways' },
  { label: 'Referrals completed', value: '21', detail: 'Tracked to a documented endpoint' },
  { label: 'Prescriptions issued', value: '52', detail: 'Visible to pharmacy workflow where applicable' },
  { label: 'Follow-up visibility', value: '74%', detail: 'Cases with a known next-step status' },
  { label: 'Avg. response time', value: '18 min', detail: 'From request capture to first clinical response' },
  { label: 'Reporting completeness', value: '92%', detail: 'Pilot events represented in dashboard reporting' }
];

export const pilotFacilities = [
  { name: 'Demo PHC Garki', type: 'Primary Healthcare Centre', role: 'Intake and follow-up', activity: 42 },
  { name: 'Demo PHC Wuse', type: 'Primary Healthcare Centre', role: 'Intake and pharmacy routing', activity: 36 },
  { name: 'Demo PHC Lugbe', type: 'Primary Healthcare Centre', role: 'Community access point', activity: 31 },
  { name: 'Demo General Hospital Maitama', type: 'General Hospital', role: 'Referral receiving facility', activity: 24 },
  { name: 'Demo General Hospital Asokoro', type: 'General Hospital', role: 'Backup referral pathway', activity: 18 }
];

export const pilotActors = [
  { actor: 'Patient', example: 'Amina Yusuf', role: 'Requests care and receives follow-up guidance' },
  { actor: 'PHC nurse/officer', example: 'Nurse Grace', role: 'Confirms intake and basic workflow readiness' },
  { actor: 'Remote doctor', example: 'Dr. Musa Ibrahim', role: 'Reviews, consults, documents, prescribes, or refers' },
  { actor: 'Pharmacy partner', example: 'Pharmacist Ada', role: 'Sees prescription visibility and fulfillment status' },
  { actor: 'Referral officer', example: 'Mr. Bello', role: 'Receives referral summary and updates status' },
  { actor: 'Ministry dashboard user', example: 'Department observer', role: 'Reviews aggregate pilot indicators' },
  { actor: 'DoctaRx technical support', example: 'Pilot support desk', role: 'Configuration, training, and issue resolution' }
];

export const workflowSteps = [
  'Patient request is captured at PHC or through DoctaRx.',
  'Nurse or PHC officer confirms basic intake.',
  'Doctor reviews the case and consults remotely where appropriate.',
  'Doctor issues prescription or referral.',
  'Pharmacy sees prescription visibility where applicable.',
  'Hospital or referral officer receives referral summary.',
  'Follow-up status is tracked.',
  'Ministry dashboard shows aggregate activity and pilot indicators.'
];

export const timelinePhases = [
  {
    phase: 'Phase 1',
    title: 'Alignment',
    window: 'Weeks 1 to 2',
    items: ['Ministry approval', 'Facility selection', 'Indicator agreement', 'Stakeholder workshop']
  },
  {
    phase: 'Phase 2',
    title: 'Configuration',
    window: 'Weeks 3 to 4',
    items: ['Set up facilities', 'Set up user roles', 'Configure workflow', 'Test sample cases']
  },
  {
    phase: 'Phase 3',
    title: 'Training',
    window: 'Month 2',
    items: ['Train PHC staff', 'Train doctors', 'Train pharmacy and referral users', 'Train dashboard users']
  },
  {
    phase: 'Phase 4',
    title: 'Controlled Launch',
    window: 'Months 3 to 5',
    items: ['Begin selected-facility pilot', 'Track consultations and referrals', 'Track prescriptions and follow-ups', 'Produce bi-weekly progress notes']
  },
  {
    phase: 'Phase 5',
    title: 'Evaluation and Scale Decision',
    window: 'Month 6 onward',
    items: ['Measure adoption', 'Measure referral completion', 'Measure follow-up visibility', 'Recommend improvement or scale']
  }
];

export const successIndicators = [
  'Referral completion rate',
  'Patient follow-up visibility',
  'Number of completed consultations',
  'Facility response time',
  'Teleconsultation usage',
  'Prescription visibility',
  'Reporting completeness',
  'Dashboard usefulness',
  'Staff adoption feedback'
];

export const requestCategories = [
  { category: 'Fever', count: 31 },
  { category: 'Malaria-like symptoms', count: 27 },
  { category: 'Hypertension follow-up', count: 22 },
  { category: 'Maternal health inquiry', count: 18 },
  { category: 'Respiratory symptoms', count: 16 }
];

export const pilotActivity = [
  { facility: 'Demo PHC Garki', requests: 42, consults: 29, referrals: 9, prescriptions: 17, followUp: '78%' },
  { facility: 'Demo PHC Wuse', requests: 36, consults: 24, referrals: 8, prescriptions: 15, followUp: '72%' },
  { facility: 'Demo PHC Lugbe', requests: 31, consults: 19, referrals: 7, prescriptions: 11, followUp: '69%' },
  { facility: 'Demo General Hospital Maitama', requests: 12, consults: 9, referrals: 6, prescriptions: 6, followUp: '81%' },
  { facility: 'Demo General Hospital Asokoro', requests: 7, consults: 5, referrals: 4, prescriptions: 3, followUp: '75%' }
];

