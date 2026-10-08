// Single source for names, contact details, menus and connector status.
// Every value marked CONFIRM must be checked with Nav before the site goes live.

export const site = {
  name: 'Radlabs', // CONFIRM: final product name; used in all copy
  legalName: 'Radlabs Technologies',
  url: 'https://radlabs.tech', // CONFIRM: production domain
  email: 'hello@radlabs.tech', // CONFIRM: monitored inbox for enquiries
  // Leave empty to use Netlify Forms. Set to a Formspree (or similar) URL for any other host.
  formEndpoint: '',
  foundingPlaces: 10,
};

export const nav = [
  { href: '/integrations', label: 'Integrations' },
  { href: '/accountants', label: 'For accountants' },
  { href: '/india', label: 'India' },
  { href: '/trust', label: 'Trust' },
];

// The "Products" mega menu. Each item must describe something the product does today.
export const productMenu = [
  {
    id: 'ap',
    label: 'AP automation',
    icon: 'inbox',
    href: '/product#payables',
    items: [
      { label: 'Inbox capture for emails and PDFs', icon: 'scan', href: '/product#capture' },
      { label: 'Four-way invoice matching', icon: 'merge', href: '/product#payables' },
      { label: 'Duplicate and already-paid checks', icon: 'shield', href: '/product#payables' },
      { label: 'Legal notice escalation', icon: 'flag', href: '/product#capture' },
      { label: 'Root cause for late invoices', icon: 'search', href: '/product#exceptions' },
    ],
  },
  {
    id: 'ar',
    label: 'AR and collections',
    icon: 'cash',
    href: '/product#receivables',
    items: [
      { label: 'CFO cockpit', icon: 'chart', href: '/product#receivables' },
      { label: 'Payment status from the email trail', icon: 'mail', href: '/product#receivables' },
      { label: '"Client says paid" checks', icon: 'check', href: '/product#receivables' },
      { label: 'Next action for every invoice', icon: 'arrow', href: '/product#receivables' },
      { label: 'Aging and risk views', icon: 'clock', href: '/product#receivables' },
    ],
  },
  {
    id: 'recon',
    label: 'Reconciliation',
    icon: 'scale',
    href: '/product#payables',
    items: [
      { label: 'Vendor reconciliation', icon: 'users', href: '/product#payables' },
      { label: 'Bank and gateway matching', icon: 'bank', href: '/product#receivables' },
      { label: 'Books vs bank checks', icon: 'scale', href: '/product#payables' },
      { label: 'Exception queue with reasons', icon: 'alert', href: '/product#exceptions' },
    ],
  },
  {
    id: 'gst',
    label: 'Compliance and GST',
    icon: 'percent',
    href: '/india',
    items: [
      { label: 'GSTR-2B vs books', icon: 'receipt', href: '/india' },
      { label: 'GSTR-1 vs invoices', icon: 'file', href: '/india' },
    ],
  },
  {
    id: 'controls',
    label: 'Approvals and controls',
    icon: 'lock',
    href: '/product#approvals',
    items: [
      { label: 'Multi-level approval tracking', icon: 'users', href: '/product#approvals' },
      { label: 'Invoice vs email amount check', icon: 'search', href: '/product#approvals' },
      { label: 'Full audit trail', icon: 'file', href: '/trust' },
      { label: 'Nothing posts without a match', icon: 'shield', href: '/trust' },
    ],
  },
  {
    id: 'int',
    label: 'Integrations',
    icon: 'plug',
    href: '/integrations',
    items: [
      { label: 'Xero and Zoho Books', icon: 'plug', href: '/integrations' },
      { label: 'ApprovalMax and Reflex', icon: 'plug', href: '/integrations' },
      { label: 'Microsoft 365 and Gmail', icon: 'mail', href: '/integrations' },
      { label: 'Banks and Razorpay', icon: 'bank', href: '/integrations' },
      { label: 'Tally and SAP (next)', icon: 'plug', href: '/integrations' },
    ],
  },
];

export type Status = 'available' | 'rolling-out' | 'next';

export const statusLabel: Record<Status, string> = {
  available: 'Available now',
  'rolling-out': 'Rolling out',
  next: 'Next',
};

// CONFIRM every status with Shreyas & Varun. Only "available" may be described as live in copy.
// `logo` is a file in src/assets/logos (from Simple Icons); `mono` is a text mark used when no official logo is on file.
export const integrations: {
  name: string;
  group: string;
  status: Status;
  note?: string;
  logo?: string;
  mono?: string;
  color?: string;
  featured?: boolean;
}[] = [
  { name: 'Xero', group: 'Ledgers', status: 'available', logo: 'xero', color: '#13B5EA', featured: true },
  { name: 'Zoho Books', group: 'Ledgers', status: 'available', logo: 'zoho', color: '#E42527', featured: true },
  { name: 'SAP', group: 'Ledgers', status: 'next', logo: 'sap', color: '#0FAAFF', featured: true },
  { name: 'Tally', group: 'Ledgers', status: 'next', mono: 'Tally', color: '#1d3a8a', featured: true },
  { name: 'ApprovalMax', group: 'Approvals and operations', status: 'available', note: 'Invoice approvals', mono: 'AM', color: '#2563eb', featured: true },
  { name: 'Reflex', group: 'Approvals and operations', status: 'available', note: 'Job management', mono: 'R', color: '#0f766e', featured: true },
  { name: 'Microsoft 365', group: 'Email', status: 'available', logo: 'microsoftoutlook', color: '#0078D4', featured: true },
  { name: 'Gmail', group: 'Email', status: 'rolling-out', logo: 'gmail', color: '#EA4335', featured: true },
  { name: 'Razorpay', group: 'Banks and payments', status: 'rolling-out', logo: 'razorpay', color: '#3395FF', featured: true },
  { name: 'ICICI Bank', group: 'Banks and payments', status: 'rolling-out', logo: 'icicibank', color: '#AE282E', featured: true },
  { name: 'RBL Bank', group: 'Banks and payments', status: 'rolling-out', mono: 'RBL', color: '#b91c1c' },
  { name: 'GSTR-2B and GSTR-1', group: 'Tax', status: 'rolling-out' },
];
