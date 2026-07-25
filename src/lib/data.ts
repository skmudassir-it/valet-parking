import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCar, faHotel, faUtensils, faChampagneGlasses,
  faBuilding, faRing, faClipboardList, faBus,
  faStar, faShield, faClock, faCheckCircle,
  faUsers, faCalendarCheck, faHandshake, faThumbsUp,
  faMapPin, faPhone, faEnvelope, faArrowRight,
  faQuoteLeft, faChevronDown, faBars, faTimes,
  faLocationDot, faUserTie, faCarSide, faKey,
  faGaugeHigh, faHeart, faSmile, faAward,
  faFlag, faChartLine, faCity, faCrown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram, faFacebook, faLinkedin, faYelp,
} from "@fortawesome/free-brands-svg-icons";

export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  highlight?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  stats: string;
  location: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const services: ServiceItem[] = [
  {
    title: "Event Valet Parking",
    slug: "event-valet",
    description: "Seamless valet parking for galas, fundraisers, corporate events, and large gatherings. Our trained team handles hundreds of vehicles with precision, ensuring your guests arrive and depart with ease. We provide full parking logistics including signage, traffic flow management, and dedicated attendants.",
    shortDescription: "Premium valet services for events of any scale",
    icon: faChampagneGlasses,
    image: "/images/services/event-valet.jpg",
    features: [
      "Dedicated event coordinator",
      "Traffic flow management",
      "Professional uniformed attendants",
      "Key security systems",
      "Guest greeting and door service",
      "Post-event vehicle staging",
    ],
    highlight: "Trusted by 500+ events annually"
  },
  {
    title: "Restaurant Valet Services",
    slug: "restaurant-valet",
    description: "Elevate your restaurant's curb appeal with professional valet parking. Our attendants greet guests warmly, park vehicles safely, and create a memorable first impression. Available for nightly service or peak hours, with flexible scheduling that adapts to your restaurant's needs.",
    shortDescription: "White-glove valet service for fine dining establishments",
    icon: faUtensils,
    image: "/images/services/restaurant-valet.jpg",
    features: [
      "Nightly and peak-hour scheduling",
      "Branded podium and signage",
      "Insurance-compliant operations",
      "Guest relationship building",
      "Key tracking systems",
      "Coat check add-on available",
    ],
    highlight: "Serving 40+ restaurants weekly"
  },
  {
    title: "Hotel & Resort Valet",
    slug: "hotel-valet",
    description: "First-class valet and parking management for hotels, resorts, and hospitality properties. We create a seamless arrival experience that sets the tone for your guests' stay. Our team manages parking inventory, bell service coordination, and EV charging station logistics.",
    shortDescription: "Complete parking management for hospitality properties",
    icon: faHotel,
    image: "/images/services/hotel-valet.jpg",
    features: [
      "24/7 staffing options",
      "Parking inventory management",
      "Bell service coordination",
      "EV charging management",
      "Guest luggage assistance",
      "Shuttle dispatch integration",
    ],
    highlight: "Partnered with 25+ hotels"
  },
  {
    title: "Private Party Valet",
    slug: "private-party-valet",
    description: "Make your private celebration effortless with dedicated valet parking. From intimate dinner parties to milestone birthdays, we handle every vehicle with care. Our team arrives early to set up and stays until the last guest departs, ensuring a smooth experience for you and your guests.",
    shortDescription: "Personalized valet service for private celebrations",
    icon: faStar,
    image: "/images/services/private-party-valet.jpg",
    features: [
      "Custom arrival experience",
      "Flexible guest count scaling",
      "Lighting and directional signage",
      "Key safekeeping protocols",
      "Late-night staffing available",
      "Coordinated departure timing",
    ],
    highlight: "Perfect for gatherings of 20-500 guests"
  },
  {
    title: "Corporate Valet Parking",
    slug: "corporate-valet",
    description: "Professional valet services tailored for corporate environments — office buildings, business parks, and corporate campuses. We provide daily parking management, visitor validation systems, and executive-level service that reflects your company's standards.",
    shortDescription: "Executive-level parking solutions for businesses",
    icon: faBuilding,
    image: "/images/services/corporate-valet.jpg",
    features: [
      "Daily and monthly contracts",
      "Visitor validation system",
      "Executive reserved parking",
      "Parking utilization reporting",
      "Employee shuttle coordination",
      "Access control integration",
    ],
    highlight: "Reducing parking stress for 15+ corporate campuses"
  },
  {
    title: "Wedding Valet Services",
    slug: "wedding-valet",
    description: "Make your wedding day flawless with our specialized valet parking. We coordinate with your venue and wedding planner to ensure every guest arrives and departs smoothly. Our detail-oriented team handles everything from vintage cars to shuttle buses with equal care.",
    shortDescription: "Picture-perfect parking for your special day",
    icon: faRing,
    image: "/images/services/wedding-valet.jpg",
    features: [
      "Venue site walkthrough",
      "Vendor coordination",
      "Decor-compatible signage",
      "Bridal party priority service",
      "Guest shuttle management",
      "Rain contingency planning",
    ],
    highlight: "Over 300 weddings served"
  },
  {
    title: "Parking Management",
    slug: "parking-management",
    description: "Comprehensive parking management for commercial properties, event venues, and mixed-use developments. We optimize parking utilization, reduce congestion, and improve tenant and visitor satisfaction through technology-driven solutions and expert staffing.",
    shortDescription: "Full-service parking facility management and operations",
    icon: faClipboardList,
    image: "/images/services/parking-management.jpg",
    features: [
      "Utilization analytics and reporting",
      "Revenue optimization strategies",
      "Staff training and supervision",
      "Enforcement and compliance",
      "Technology integration (LPR, apps)",
      "Maintenance and lot upkeep",
    ],
    highlight: "Managing 10,000+ spaces daily"
  },
  {
    title: "Shuttle & Transport",
    slug: "shuttle-coordination",
    description: "End-to-end shuttle and transportation coordination for events, corporate campuses, and hospitality venues. We manage routes, schedules, and vehicle fleets to ensure reliable, comfortable transport for your guests and employees.",
    shortDescription: "Coordinated shuttle and transportation logistics",
    icon: faBus,
    image: "/images/services/shuttle-coordination.jpg",
    features: [
      "Route planning and optimization",
      "Fleet sourcing and management",
      "Real-time GPS tracking",
      "ADA-compliant vehicles available",
      "Driver vetting and training",
      "Emergency backup protocols",
    ],
    highlight: "Moving 5,000+ passengers monthly"
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Grand Marquis Gala",
    category: "Event Valet",
    description: "Valet parking for 800 guests at the annual Grand Marquis Charity Gala. Coordinated 12 attendants, managed a 300-vehicle parking lot, and achieved sub-3-minute average retrieval times.",
    image: "/images/projects/project-1.jpg",
    stats: "800 guests | 12 attendants | 3min avg retrieval",
    location: "Downtown Convention Center"
  },
  {
    title: "The Ritz-Carlton Partnership",
    category: "Hotel Valet",
    description: "Ongoing valet and parking management for a 400-room luxury hotel. 24/7 staffing, bell service coordination, and EV charging management for guest vehicles.",
    image: "/images/projects/project-2.jpg",
    stats: "400 rooms | 24/7 service | 98% guest satisfaction",
    location: "Waterfront District"
  },
  {
    title: "TechSummit Conference",
    category: "Corporate Valet",
    description: "Multi-day valet operation for 2,000+ attendees at the annual TechSummit. Managed parking across three lots with shuttle coordination between venues.",
    image: "/images/projects/project-3.jpg",
    stats: "2,000 attendees | 3 lots | 6 shuttles",
    location: "Convention Center Complex"
  },
  {
    title: "Montgomery Wedding Estate",
    category: "Wedding Valet",
    description: "Valet parking for a 350-guest wedding at a private estate. Coordinated with wedding planner, managed vintage car display, and provided shuttle service for overflow parking.",
    image: "/images/projects/project-4.jpg",
    stats: "350 guests | 8 attendants | 2 shuttles",
    location: "Private Estate, Hillsborough"
  },
  {
    title: "Metro Plaza Office Park",
    category: "Parking Management",
    description: "Full parking management for a 5-building office complex with 1,200 parking spaces. Implemented digital validation and visitor management system, reducing congestion by 40%.",
    image: "/images/projects/project-5.jpg",
    stats: "1,200 spaces | 5 buildings | 40% less congestion",
    location: "Business District"
  },
  {
    title: "Harborview Restaurant Row",
    category: "Restaurant Valet",
    description: "Shared valet program for a row of 6 upscale waterfront restaurants. Rotating attendant coverage during peak dinner hours, shared podium and key management system.",
    image: "/images/projects/project-6.jpg",
    stats: "6 restaurants | 15 attendants | 200+ cars nightly",
    location: "Harborview District"
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Mitchell",
    role: "Event Director",
    company: "Grand Marquis Foundation",
    quote: "Prestige Valet transformed our gala experience. Our guests raved about how smoothly everything ran — from arrival to departure. The team was professional, courteous, and handled 800 cars without a single issue.",
    rating: 5
  },
  {
    name: "James Chen",
    role: "General Manager",
    company: "The Ritz-Carlton",
    quote: "We've trusted Prestige with our valet operations for three years. Their attention to detail and guest-first approach perfectly matches our brand standards. Our guest satisfaction scores for parking are consistently above 95%.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "Owner",
    company: "Casa Bella Restaurant",
    quote: "Adding Prestige Valet was the best decision for our restaurant. Our dinner guests feel like VIPs from the moment they arrive. The team knows our regulars by name and creates a warm, welcoming atmosphere.",
    rating: 5
  },
  {
    name: "Robert Kim",
    role: "Facilities Director",
    company: "Metro Plaza Properties",
    quote: "Prestige took over our parking management and completely turned it around. Tenant complaints dropped to near zero, and their reporting gives us insights we never had before. Truly a partner, not just a vendor.",
    rating: 5
  },
  {
    name: "Emily & David Park",
    role: "Clients",
    company: "Park-Montgomery Wedding",
    quote: "We didn't have to think about parking once on our wedding day. Prestige handled everything — from our vintage getaway car to shuttle buses for guests. It was one less thing to stress about, and they executed flawlessly.",
    rating: 5
  },
  {
    name: "Thomas Wright",
    role: "COO",
    company: "TechSummit Events",
    quote: "Managing parking for 2,000+ tech professionals across multiple venues is no small feat. Prestige's shuttle coordination and digital check-in system made it feel effortless. We've booked them for every conference since.",
    rating: 5
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Event",
    price: "Custom Quote",
    description: "Perfect for one-time events — galas, weddings, corporate gatherings, and private parties.",
    features: [
      "Dedicated event coordinator",
      "Professional uniformed attendants",
      "Key security system",
      "Directional signage",
      "Guest greeting service",
      "Post-event vehicle staging",
      "Rain contingency planning",
    ],
    highlighted: false,
  },
  {
    name: "Restaurant",
    price: "From $149/night",
    description: "Nightly valet service for restaurants, bars, and dining establishments.",
    features: [
      "Nightly or peak-hour coverage",
      "Branded podium and signage",
      "2-4 attendants per shift",
      "Key tracking system",
      "Insurance-compliant operations",
      "Guest relationship building",
      "Coat check add-on available",
    ],
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Commercial",
    price: "From $2,499/mo",
    description: "Ongoing parking management for hotels, offices, and commercial properties.",
    features: [
      "24/7 staffing options",
      "Parking inventory management",
      "Monthly utilization reports",
      "EV charging management",
      "Visitor validation system",
      "Access control integration",
      "Shuttle dispatch coordination",
    ],
    highlighted: false,
  },
];

export const team: TeamMember[] = [
  {
    name: "Michael Preston",
    role: "Founder & CEO",
    image: "/images/team/team-1.jpg",
    bio: "With 20+ years in luxury hospitality and parking management, Michael founded Prestige Valet to bring five-star service standards to every parking experience."
  },
  {
    name: "Angela Torres",
    role: "Operations Director",
    image: "/images/team/team-2.jpg",
    bio: "Angela oversees all field operations, ensuring every event and venue receives flawless execution. Her background in hotel management brings rigor to every detail."
  },
  {
    name: "David Park",
    role: "Client Relations Manager",
    image: "/images/team/team-3.jpg",
    bio: "David is the bridge between our clients and operations teams. He ensures every client's unique needs are captured, communicated, and delivered beyond expectations."
  },
  {
    name: "Lisa Chang",
    role: "Training & Quality Lead",
    image: "/images/team/team-4.jpg",
    bio: "Lisa developed our signature 'Host Mindset' training program that transforms parking attendants into hospitality professionals who create memorable guest experiences."
  },
];

export const faqs = [
  {
    q: "How far in advance should I book valet service for an event?",
    a: "We recommend booking at least 2-4 weeks in advance for events. For weddings and large galas (300+ guests), 4-6 weeks is ideal. We can sometimes accommodate last-minute requests depending on availability."
  },
  {
    q: "Are your valet attendants insured and background-checked?",
    a: "Yes. Every Prestige Valet attendant undergoes a thorough background check, driver's license verification, and is fully covered by our comprehensive liability insurance policy. We carry $5M in general liability coverage."
  },
  {
    q: "What happens if a vehicle is damaged?",
    a: "Safety is our top priority. In the rare event of any incident, our team follows a documented protocol: immediate documentation, client notification, and insurance claim initiation. We maintain a 99.97% incident-free record."
  },
  {
    q: "Do you provide equipment like podiums and signage?",
    a: "Yes! We provide branded podiums, directional signage, traffic cones, key management systems, and lighting as part of our service. For restaurant and hotel partners, we can co-brand materials with your logo."
  },
  {
    q: "Can you handle large events with 500+ guests?",
    a: "Absolutely. We regularly manage events with 300-2,000+ guests. Our scalable staffing model means we can deploy the right number of attendants, coordinators, and supervisors for events of any size."
  },
  {
    q: "What areas do you serve?",
    a: "We serve the greater metropolitan area and surrounding counties within a 50-mile radius. For events outside this area, we offer custom travel arrangements. Contact us to discuss your specific location."
  },
];
