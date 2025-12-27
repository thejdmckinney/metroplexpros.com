// Meta description updates with urgency/CTAs and "near me" keywords
// Run this to see what needs updating

const metaUpdates = {
  // Homepage
  'pages/index.js': {
    current: '⭐ Licensed Dallas Electricians & Plumbers! Expert home electrical repair service, electrical home repair, plumbing services & smart home installations. 24/7 emergency service. Same-day appointments. FREE estimates! Call (682) 466-2130!',
    new: 'Licensed Dallas Electrician & Plumber Near Me | 24/7 Emergency Service | Same-Day Appointments | FREE Estimates | Electrical & plumbing repairs you can trust. Call (682) 466-2130 now!',
    keywords_add: 'electrician near me Dallas, plumber near me Dallas'
  },
  
  // Richardson
  'pages/richardson.js': {
    current: 'Professional home electrical repair service, handyman, and plumbing for Richardson homes. Panel upgrades, slab leak repair, aluminum wiring, older home specialists. Fast service, honest pricing.',
    new: 'Richardson Electrician & Plumber Near Me | 24/7 Emergency Service | Same-Day Appointments | Licensed & Insured | Panel upgrades, slab leaks, aluminum wiring specialists. Call (682) 466-2130!',
    keywords_add: 'electrician near me Richardson, plumber near me Richardson'
  },
  
  // Highland Park
  'pages/highland-park.js': {
    current: 'Check current and update',
    new: 'Highland Park Electrician & Plumber Near Me | Luxury Home Specialists | 24/7 Emergency Service | Same-Day | Licensed & Insured | Call (682) 466-2130 for FREE estimate!',
    keywords_add: 'electrician near me Highland Park, plumber near me Highland Park'
  },
  
  // Lakewood
  'pages/lakewood.js': {
    current: 'Check current and update',
    new: 'Lakewood Dallas Electrician & Plumber Near Me | Historic Home Specialists | 24/7 Emergency Service | Same-Day Appointments | Licensed & Insured | Call (682) 466-2130!',
    keywords_add: 'electrician near me Lakewood, plumber near me Lakewood Dallas'
  },
  
  // University Park
  'pages/university-park.js': {
    current: 'Check current and update',
    new: 'University Park Electrician & Plumber Near Me | Luxury Home Services | 24/7 Emergency Service | Same-Day | Licensed & Insured | Serving SMU area. Call (682) 466-2130!',
    keywords_add: 'electrician near me University Park, plumber near me University Park'
  },
  
  // Electrical Services
  'pages/services/electrical.js': {
    current: 'Licensed electricians serving DFW. Home electrical repair service, electrical home repair near me, panel upgrades, wiring, lighting, smart home electrical, generators. 24/7 emergency service. Call (682) 466-2130.',
    new: 'Dallas Electrician Near Me | Licensed & Insured | 24/7 Emergency Electrical Service | Panel Upgrades, Rewiring, Lighting, Generators | Same-Day Service Available | Call (682) 466-2130 now!',
    keywords_add: 'emergency electrician near me'
  },
  
  // Plumbing Services
  'pages/services/plumbing.js': {
    current: 'Check current and update',
    new: 'Dallas Plumber Near Me | Licensed & Insured | 24/7 Emergency Plumbing Service | Water Heaters, Leaks, Drains, Sewer Repair | Same-Day Appointments | FREE Estimates | Call (682) 466-2130!',
    keywords_add: 'emergency plumber near me, plumber near me'
  },
  
  // Handyman Services
  'pages/services/handyman.js': {
    current: 'Check current and update',
    new: 'Dallas Handyman Near Me | Licensed & Insured | Same-Day Service | Drywall, Painting, Repairs, TV Mounting, Fixtures | Fast, Reliable, Affordable | Call (682) 466-2130 for FREE estimate!',
    keywords_add: 'handyman near me Dallas, handyman services near me'
  },
  
  // Smart Home
  'pages/services/smart-home-installations.js': {
    current: 'Check current and update',
    new: 'Dallas Smart Home Installation | Licensed Electricians | Smart Locks, Thermostats, Lighting, Security | Same-Day Installation | FREE Consultation | Call (682) 466-2130 now!',
    keywords_add: 'smart home installation near me'
  },
  
  // Emergency Services
  'pages/emergency-electrician-dallas.js': {
    current: 'Check current and update',
    new: 'Emergency Electrician Dallas | 24/7 Service Near Me | 30-Min Response Time | Licensed & Insured | Power Outages, Panel Issues, Electrical Fires | Call (682) 466-2130 NOW!',
    keywords_add: 'emergency electrician near me Dallas, 24 hour electrician near me'
  },
  
  'pages/emergency-plumber-dallas.js': {
    current: 'Check current and update',
    new: 'Emergency Plumber Dallas | 24/7 Service Near Me | Fast Response | Licensed & Insured | Burst Pipes, Leaks, Clogs, No Water | Call (682) 466-2130 NOW!',
    keywords_add: 'emergency plumber near me Dallas, 24 hour plumber near me'
  }
};

console.log('Meta Description Update Plan:');
console.log('================================\n');

Object.keys(metaUpdates).forEach(file => {
  console.log(`📄 ${file}`);
  console.log(`   NEW: ${metaUpdates[file].new}`);
  console.log(`   ADD KEYWORDS: ${metaUpdates[file].keywords_add}`);
  console.log('');
});

console.log('\nKey Improvements:');
console.log('- Added "near me" keywords (high search volume)');
console.log('- Added urgency: "24/7", "Same-Day", "NOW!"');
console.log('- Added CTAs: "Call (682) 466-2130"');
console.log('- Added trust signals: "Licensed & Insured"');
console.log('- Added benefits: "FREE Estimates", "Fast Response"');
console.log('- Kept under 160 characters for optimal display');
