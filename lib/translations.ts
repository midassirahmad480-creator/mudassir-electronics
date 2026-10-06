export type Lang = 'en' | 'ur'

export const PHONE_DISPLAY = '03469559167'
export const PHONE_TEL = 'tel:+923469559167'
export const WHATSAPP_NUMBER = '923469559167'

export function getWhatsAppUrl(serviceName = '[Service Name]') {
  const message = `AoA Mudassir Electronics! I am booking a service through your website.\n- Selected Service: ${serviceName}\n- Issue Details: [Type your problem here]\n- Location: Kashrote / Gilgit\nPlease confirm technician availability and estimated repair cost.\n\nAssalam-o-Alaikum Mudassir bhai! Main aap ki website se service book kar raha hoon.\n- Chuni hui Service: ${serviceName}\n- Masle ki Tafseel: [Apna masla yahan likhein]\n- Location: Kashrote / Gilgit\nBaraye meharbani technician ki timing aur kitna kharcha aayega bata dein. Shukriya!`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = getWhatsAppUrl()

const en = {
  nav: {
    brand: 'Mudassir Electronics',
    brandSub: 'Repairing Shop',
    callBadge: '24/7 Service',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#modes', label: 'Repair Modes' },
      { href: '#how', label: 'How It Works' },
      { href: '#reviews', label: 'Reviews' },
      { href: '#contact', label: 'Contact' },
    ],
    menu: 'Open menu',
    close: 'Close menu',
    langLabel: 'Switch language',
  },
  hero: {
    eyebrow: 'Airport Road, Kashrote — Gilgit',
    title: '24/7 Professional Home Appliances & Electronics Repairing in Gilgit',
    subtitle:
      'Airport Road, Kashrote — Expert Repairing at Shop, Doorstep Home Service, or Live Video Call Guidance!',
    call: 'Call Now',
    whatsapp: 'Book Home Service (WhatsApp)',
    badges: [
      '24/7 Emergency Service',
      'Doorstep Home Service Available',
      'Live Video Call Support',
    ],
    imageAlt: 'Technician micro-soldering a circuit board at Mudassir Electronics',
    statLabel: 'Devices repaired',
    statOpen: 'Open now',
  },
  services: {
    eyebrow: 'What We Fix',
    title: '10 Specialized Repair Services',
    subtitle:
      'From a single LED bulb to a smart TV motherboard — one trusted shop for every appliance in your home.',
    book: 'Book this repair',
    bookingLabel: 'Booking details',
    bookingMessage: 'Your selected service is ready to book. Contact us to confirm the issue and get the final estimate.',
    serviceType: 'Service type',
    estimatedTime: 'Estimated repair time',
    timeValue: 'Usually 1–3 hours after diagnosis',
    shopAddress: 'Shop address',
    contactInfo: 'Call / WhatsApp',
    phoneValue: PHONE_DISPLAY,
    confirmBooking: 'Confirm booking on WhatsApp',
    items: [
      { title: 'DC & Emergency Lighting', desc: 'LED Lamps, Bulbs, Solar Lights' },
      { title: 'Power Banks & Portable Power', desc: 'Power Banks & Battery Packs' },
      { title: 'Washing Machine Repair', desc: 'Automatic & Semi-Automatic' },
      { title: 'Ceiling & Pedestal Fans', desc: 'DC Inverter Fans & Winding' },
      { title: 'Kitchen Appliances', desc: 'Microwaves, Juicers, Kettles' },
      { title: 'Room Heaters & Blowers', desc: 'Electric & Gas Heaters' },
      { title: 'Water Pumps & Motors', desc: 'Submersible Pumps & Motors' },
      { title: 'Inverters & UPS Systems', desc: 'Inverter Boards & Battery Circuit' },
      { title: 'LED TV & Display Boards', desc: 'Smart TV Panels & Motherboards' },
      { title: 'Custom PCB & Circuit Repair', desc: 'Micro-soldering & Component Fixes' },
    ],
  },
  modes: {
    eyebrow: 'Your Choice',
    title: '3 Unique Repairing Modes',
    subtitle: 'Get your appliance fixed the way that suits you best.',
    items: [
      {
        title: 'Shop Visit',
        desc: 'Bring your device to our Airport Road, Kashrote workshop for full diagnosis and repair with professional tools.',
        cta: 'Get Directions',
      },
      {
        title: 'Home Service',
        desc: 'Our technician comes to your doorstep anywhere in Gilgit — ideal for washing machines, pumps, TVs and heavy appliances.',
        cta: 'Book Home Visit',
      },
      {
        title: 'Video Call Consultancy',
        desc: 'Live video call guidance to diagnose and fix small faults yourself — fast, simple and from anywhere.',
        cta: 'Start Video Call',
      },
    ],
    popular: 'Most Popular',
  },
  how: {
    eyebrow: 'Simple Process',
    title: 'How It Works',
    steps: [
      { title: 'Contact Us', desc: `Call or WhatsApp us at ${PHONE_DISPLAY} — any time, day or night.` },
      { title: 'Choose Service Mode', desc: 'Select Shop Visit, Home Service, or a Live Video Call.' },
      { title: 'Quick Fix & Guarantee', desc: 'Fast, reliable repairing backed by our service warranty.' },
    ],
    step: 'Step',
  },
  why: {
    eyebrow: 'Why Choose Us',
    title: 'Trusted by Families Across Gilgit',
    items: [
      { title: '100% Genuine Spare Parts', desc: 'We only use original and high-quality parts for long-lasting repairs.' },
      { title: 'Experienced Local Technicians', desc: 'Skilled technicians from Gilgit who understand local power conditions.' },
      { title: 'Fair Pricing & Warranty', desc: 'Transparent pricing with no hidden charges, plus warranty on repairs.' },
    ],
  },
  reviews: {
    eyebrow: 'Customer Reviews',
    title: 'What Our Customers Say',
    items: [
      {
        name: 'Ali Raza',
        place: 'Jutial, Gilgit',
        text: 'My washing machine stopped working at night. Mudassir bhai came home the same evening and fixed it in an hour. Very professional and honest pricing!',
      },
      {
        name: 'Sana Karim',
        place: 'Danyore, Gilgit',
        text: 'Our solar UPS board was burnt. They repaired the circuit at chip level instead of asking for a new one. Saved us a lot of money. Highly recommended!',
      },
    ],
    rating: '5 out of 5 stars',
  },
  contact: {
    eyebrow: 'Get In Touch',
    title: 'Need a Repair Right Now?',
    subtitle: 'We are open 24/7 for emergencies. Call, WhatsApp, or visit our shop.',
    addressLabel: 'Address',
    address: 'Airport Road, Kashrote, Gilgit, Pakistan',
    phoneLabel: 'Call / WhatsApp',
    timingLabel: 'Timings',
    timing: '24/7 Open — including holidays',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    map: 'Open in Google Maps',
  },
  footer: {
    tagline: 'Professional electronics & home appliances repairing in Gilgit — 24/7.',
    quick: 'Quick Links',
    follow: 'Follow Us',
    rights: '© 2026 Mudassir Electronics Repairing Shop. All rights reserved.',
  },
  floating: 'Chat on WhatsApp',
}

export type Dictionary = typeof en

const ur: Dictionary = {
  nav: {
    brand: 'Mudassir Electronics',
    brandSub: 'Repairing Shop',
    callBadge: '24 Ghante Service',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#modes', label: 'Repairing Ke Tareeqay' },
      { href: '#how', label: 'Kaise Kaam Karta Hai' },
      { href: '#reviews', label: 'Reviews' },
      { href: '#contact', label: 'Rabta' },
    ],
    menu: 'Menu kholein',
    close: 'Menu band karein',
    langLabel: 'Zabaan tabdeel karein',
  },
  hero: {
    eyebrow: 'Airport Road, Kashrote — Gilgit',
    title: 'Gilgit Mein 24 Ghente Bijli Aur Home Appliances Ki Professional Repairing',
    subtitle:
      'Airport Road, Kashrote — Dukan Par, Ghar Par (Home Service) Ya Live Video Call Par Instant Repairing!',
    call: 'Abhi Call Karein',
    whatsapp: 'Home Service Book Karein (WhatsApp)',
    badges: [
      '24/7 Emergency Service',
      'Ghar Par Service Dastiyab',
      'Live Video Call Support',
    ],
    imageAlt: 'Mudassir Electronics mein technician circuit board ki soldering kar raha hai',
    statLabel: 'Devices repair huay',
    statOpen: 'Abhi khula hai',
  },
  services: {
    eyebrow: 'Hum Kya Theek Karte Hain',
    title: '10 Khaas Repairing Services',
    subtitle:
      'Aik LED bulb se le kar Smart TV motherboard tak — ghar ke har appliance ke liye aik bharosemand dukan.',
    book: 'Yeh repair book karein',
    bookingLabel: 'Booking ki tafseel',
    bookingMessage: 'Aap ki select ki hui service book hone ke liye tayyar hai. Masla confirm karne aur final estimate lene ke liye hum se rabta karein.',
    serviceType: 'Service ki qisam',
    estimatedTime: 'Andazay ka repair time',
    timeValue: 'Checking ke baad aam tor par 1–3 ghante',
    shopAddress: 'Dukan ka pata',
    contactInfo: 'Call / WhatsApp',
    phoneValue: PHONE_DISPLAY,
    confirmBooking: 'WhatsApp par booking confirm karein',
    items: [
      { title: 'DC & Emergency Lighting', desc: 'LED Lamps, Bulbs aur Solar Lights repair' },
      { title: 'Power Banks & Portable Power', desc: 'Power Bank aur battery charging repair' },
      { title: 'Washing Machine Repair', desc: 'Automatic aur Spinner washing machine repair' },
      { title: 'Ceiling & Pedestal Fans', desc: 'Inverter Fans, Speed controller aur winding' },
      { title: 'Kitchen Appliances', desc: 'Microwave Oven, Juicer Blender, Kettle repair' },
      { title: 'Room Heaters & Blowers', desc: 'Electric Heaters aur Blower Fan repair' },
      { title: 'Water Pumps & Motors', desc: 'Domestic Water Motor aur Pump repair' },
      { title: 'Inverters & UPS Systems', desc: 'Solar UPS aur Charging circuit fix' },
      { title: 'LED TV & Display Boards', desc: 'LED TV Panel aur Power board repair' },
      { title: 'Custom PCB & Circuit Repair', desc: 'Chip-level circuit aur PCB welding' },
    ],
  },
  modes: {
    eyebrow: 'Aap Ki Marzi',
    title: 'Repairing Ke 3 Munfarid Tareeqay',
    subtitle: 'Apna appliance us tareeqay se theek karwayein jo aap ke liye behtar ho.',
    items: [
      {
        title: 'Dukan Par Repairing',
        desc: 'Apna device Airport Road, Kashrote wali dukan par layein — professional tools ke saath mukammal checking aur repair.',
        cta: 'Rasta Dekhein',
      },
      {
        title: 'Ghar Par Service',
        desc: 'Hamara technician Gilgit mein aap ke ghar aayega — washing machine, pump, TV aur bhaari appliances ke liye behtareen.',
        cta: 'Ghar Ki Visit Book Karein',
      },
      {
        title: 'Video Call Par Live Guidance',
        desc: 'Live video call par chhoti kharabi khud theek karne ki rehnumai — tez, aasaan aur kahin se bhi.',
        cta: 'Video Call Shuru Karein',
      },
    ],
    popular: 'Sab Se Mashhoor',
  },
  how: {
    eyebrow: 'Aasaan Tareeqa',
    title: 'Kaise Kaam Karta Hai',
    steps: [
      { title: 'Hum Se Rabta Karein', desc: `${PHONE_DISPLAY} par Call ya WhatsApp karein — din ho ya raat.` },
      { title: 'Service Mode Chunein', desc: 'Dukan, Ghar Par Service, ya Live Video Call mein se chunein.' },
      { title: 'Fori Repair & Guarantee', desc: 'Tez aur pakki repairing, warranty ke saath.' },
    ],
    step: 'Qadam',
  },
  why: {
    eyebrow: 'Hamein Kyun Chunein',
    title: 'Gilgit Ke Gharon Ka Bharosa',
    items: [
      { title: '100% Asli Spare Parts', desc: 'Hum sirf original aur aala quality parts istemal karte hain.' },
      { title: 'Tajurbakar Local Technicians', desc: 'Gilgit ke mahir technicians jo yahan ki bijli ke halaat samajhte hain.' },
      { title: 'Munasib Qeemat & Warranty', desc: 'Saaf qeemat, koi chhupi fees nahi, aur repair par warranty.' },
    ],
  },
  reviews: {
    eyebrow: 'Customers Ki Raye',
    title: 'Hamare Customers Kya Kehte Hain',
    items: [
      {
        name: 'Ali Raza',
        place: 'Jutial, Gilgit',
        text: 'Raat ko washing machine band ho gayi thi. Mudassir bhai usi shaam ghar aaye aur aik ghante mein theek kar di. Bohat professional aur imaandar qeemat!',
      },
      {
        name: 'Sana Karim',
        place: 'Danyore, Gilgit',
        text: 'Hamara solar UPS board jal gaya tha. Naya lene ke bajaye unhon ne chip level par circuit repair kar diya. Bohat paise bachay. Zaroor try karein!',
      },
    ],
    rating: '5 mein se 5 sitaray',
  },
  contact: {
    eyebrow: 'Rabta Karein',
    title: 'Abhi Repair Chahiye?',
    subtitle: 'Hum emergency ke liye 24 ghante khule hain. Call, WhatsApp karein ya dukan par tashreef layein.',
    addressLabel: 'Pata',
    address: 'Airport Road, Kashrote, Gilgit, Pakistan',
    phoneLabel: 'Call / WhatsApp',
    timingLabel: 'Auqaat',
    timing: '24/7 Khula — chhutti ke din bhi',
    call: 'Abhi Call Karein',
    whatsapp: 'WhatsApp Karein',
    map: 'Google Maps Par Kholein',
  },
  footer: {
    tagline: 'Gilgit mein electronics aur home appliances ki professional repairing — 24 ghante.',
    quick: 'Quick Links',
    follow: 'Hamein Follow Karein',
    rights: '© 2026 Mudassir Electronics Repairing Shop. Tamam huqooq mehfooz hain.',
  },
  floating: 'WhatsApp par baat karein',
}

export const dictionaries: Record<Lang, Dictionary> = { en, ur }
