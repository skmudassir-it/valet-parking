import {
  faCar,
  faHotel,
  faChampagneGlasses,
  faHeart,
  faBuilding,
  faBus,
  faSquareParking,
  faCalendarCheck,
  faShield,
  faBellConcierge,
  faStar,
  faQuoteLeft,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  longDescription: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
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
  popular: boolean;
}

export const siteName = "ParkPro Valet";
export const siteTagline = "Premium Valet Parking & Hospitality Services";
export const siteDescription =
  "ParkPro Valet delivers white-glove valet parking for restaurants, hotels, events, weddings, and corporate venues. Impeccable service, insured professionals, and seamless guest experiences.";

export const services: ServiceItem[] = [
  {
    slug: "restaurant-valet",
    title: "Restaurant Valet Parking",
    description:
      "Elevate your guests' dining experience with professional valet service that sets the tone before they walk through your doors.",
    icon: faUtensils,
    image: "/images/services/restaurant-valet.jpg",
    features: [
      "Trained uniformed attendants",
      "Key security & tracking system",
      "Liability insurance coverage",
      "Custom signage & stanchions",
      "Nightly end-of-shift reports",
      "Flexible scheduling — nightly or weekends",
    ],
    longDescription:
      "First impressions matter. Our restaurant valet service transforms curb-side arrivals into a seamless, luxurious experience. Your guests are greeted by professionally uniformed attendants who handle every vehicle with white-glove care. We manage the entire parking flow — from greeting to retrieval — so your staff can focus on hospitality inside. With key tracking technology, full insurance coverage, and detailed nightly reports, ParkPro gives you peace of mind and your guests a five-star arrival.",
  },
  {
    slug: "event-valet",
    title: "Event Valet Services",
    description:
      "Flawless parking logistics for galas, fundraisers, corporate events, and private parties of any size.",
    icon: faChampagneGlasses,
    image: "/images/services/event-valet.jpg",
    features: [
      "Pre-event logistics planning",
      "Scalable staffing for 50–5000+ guests",
      "Traffic flow management",
      "VIP & priority lanes",
      "Coat check add-on available",
      "Post-event breakdown & cleanup",
    ],
    longDescription:
      "A great event starts at the curb. ParkPro's event valet team handles every aspect of guest arrival — from traffic direction and lane management to vehicle parking and retrieval. We work with your event planner weeks in advance to design an arrival flow that matches your venue layout and guest count. Our scalable staffing model means we bring the right number of attendants whether you're hosting 50 guests or 5,000. Each attendant is trained in hospitality service, vehicle handling, and emergency procedures.",
  },
  {
    slug: "hotel-valet",
    title: "Hotel Valet Parking",
    description:
      "Round-the-clock valet service that enhances your hotel's luxury reputation and guest satisfaction scores.",
    icon: faHotel,
    image: "/images/services/hotel-valet.jpg",
    features: [
      "24/7 staffing with shift rotation",
      "Bellhop & luggage assistance",
      "Digital key tracking system",
      "Overnight vehicle security",
      "EV charging coordination",
      "Branded uniform program",
    ],
    longDescription:
      "Your hotel's valet stand is often the first and last touchpoint for guests. ParkPro's hotel valet program delivers consistent, polished service around the clock. Our attendants are cross-trained in bellhop duties and luggage handling, creating a seamless arrival-to-room experience. Digital key tracking ensures vehicles are always located, and our overnight security patrols give guests peace of mind. We integrate with your existing concierge and front desk systems to provide a unified guest experience.",
  },
  {
    slug: "wedding-valet",
    title: "Wedding Valet",
    description:
      "White-glove valet service that makes every wedding arrival elegant, stress-free, and unforgettable.",
    icon: faHeart,
    image: "/images/services/wedding-valet.jpg",
    features: [
      "Bride & groom priority lane",
      "Decorated welcome podium",
      "Guest shuttle coordination",
      "Vendor access management",
      "End-of-night retrieval system",
      "Rain plan & weather contingencies",
    ],
    longDescription:
      "Your wedding day deserves perfection at every detail — including how guests arrive. ParkPro's wedding valet service brings elegance and efficiency to your venue's curb. We create a dedicated priority lane for the bridal party and immediate family, set up a beautifully decorated welcome podium, and coordinate with shuttle services for remote parking. Our end-of-night retrieval system ensures guests leave as smoothly as they arrived, with minimal wait times even during peak exit. We also prepare a complete rain plan so weather never disrupts your special day.",
  },
  {
    slug: "residential-valet",
    title: "Residential Valet",
    description:
      "Premium valet service for luxury condominiums, high-rise residences, and private estate events.",
    icon: faBuilding,
    image: "/images/services/residential-valet.jpg",
    features: [
      "Dedicated building attendant",
      "Resident & guest vehicle tracking",
      "Monthly reporting & analytics",
      "Package & delivery coordination",
      "Vehicle maintenance reminders",
      "Private event staffing available",
    ],
    longDescription:
      "Luxury living deserves luxury service. ParkPro's residential valet program places dedicated attendants at your condominium or high-rise, managing resident and guest parking with the same precision we bring to five-star hotels. Beyond parking, our attendants coordinate package deliveries, track vehicle maintenance schedules, and provide monthly usage reports to building management. For private resident events, we can scale staffing up to handle guest arrivals seamlessly.",
  },
  {
    slug: "corporate-valet",
    title: "Corporate Valet",
    description:
      "Executive valet services for corporate headquarters, office parks, and business events.",
    icon: faCalendarCheck,
    image: "/images/services/corporate-valet.jpg",
    features: [
      "Executive priority parking",
      "Visitor management system",
      "Daily occupancy tracking",
      "Employee shuttle integration",
      "Security-compliant protocols",
      "Monthly KPI dashboards",
    ],
    longDescription:
      "ParkPro's corporate valet program brings executive-level service to your workplace. We manage visitor and employee parking with efficiency and security, integrating with your building's access control systems. Our visitor management system pre-registers expected guests and assigns parking spots before they arrive. Executive priority lanes ensure leadership teams never wait. Monthly KPI dashboards give facilities managers complete visibility into parking utilization, peak hours, and attendant performance.",
  },
  {
    slug: "shuttle-service",
    title: "Shuttle Service",
    description:
      "Comfortable, reliable shuttle transport for off-site parking, hotel-to-venue routes, and event logistics.",
    icon: faBus,
    image: "/images/services/shuttle-service.jpg",
    features: [
      "Climate-controlled vehicles",
      "ADA-compliant accessible vans",
      "GPS-tracked fleet",
      "Scheduled & on-demand routes",
      "Professional CDL drivers",
      "Event branding wrap available",
    ],
    longDescription:
      "When parking can't be on-site, ParkPro's shuttle service bridges the gap. Our fleet of climate-controlled vehicles provides comfortable, reliable transport between remote lots and your venue. Each vehicle is GPS-tracked so dispatchers can optimize routes in real time. Our CDL-licensed drivers are trained in hospitality and safety. For events, we offer branded vehicle wraps that turn our shuttles into moving billboards for your brand.",
  },
  {
    slug: "parking-management",
    title: "Parking Management",
    description:
      "Full-service parking lot and garage management with revenue optimization, staffing, and technology.",
    icon: faSquareParking,
    image: "/images/services/parking-management.jpg",
    features: [
      "Revenue optimization strategy",
      "Staffing & payroll management",
      "Payment system integration",
      "Lot maintenance & striping",
      "Security patrols & cameras",
      "Monthly P&L reporting",
    ],
    longDescription:
      "ParkPro's parking management service takes full operational responsibility for your lot or garage. We handle everything: staffing, revenue collection, maintenance, security, and financial reporting. Our revenue optimization strategies have consistently increased client parking income by 15-30% within the first quarter. We integrate modern payment systems — tap-to-pay, mobile apps, monthly passes — while maintaining the personal touch of on-site attendants. Monthly profit-and-loss reports give you full transparency into your parking operation's performance.",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "luxury-hotel",
    title: "Grand Paragon Hotel",
    category: "Hotel",
    description:
      "Full-service valet and bellhop integration for a 350-room luxury hotel in the downtown district.",
    image: "/images/projects/project-1.jpg",
    highlights: [
      "42% improvement in guest arrival satisfaction scores",
      "Average vehicle retrieval under 4 minutes",
      "24/7 staffing across three shifts",
      "Integrated with hotel PMS system",
    ],
  },
  {
    slug: "gala-event",
    title: "Annual Arts Foundation Gala",
    category: "Event",
    description:
      "Managed parking for 1,200 guests at the city's premier fundraising gala across three venues.",
    image: "/images/projects/project-2.jpg",
    highlights: [
      "Zero arrival bottlenecks despite 1,200 guests",
      "Valet + shuttle coordinated across 3 venues",
      "VIP lane for 200 major donors",
      "Post-event clearance in under 45 minutes",
    ],
  },
  {
    slug: "restaurant-chain",
    title: "Bella Vita Restaurant Group",
    category: "Restaurant",
    description:
      "Rolled out valet service across 8 restaurant locations with standardized branding and operations.",
    image: "/images/projects/project-3.jpg",
    highlights: [
      "Consistent brand experience across 8 locations",
      "Average table-turns improved by 18%",
      "Centralized scheduling & reporting",
      "Custom stanchions with restaurant branding",
    ],
  },
  {
    slug: "wedding-venue",
    title: "Willow Creek Estate Weddings",
    category: "Wedding",
    description:
      "Exclusive valet partner for a premier wedding venue hosting 150+ ceremonies annually.",
    image: "/images/projects/project-4.jpg",
    highlights: [
      "Dedicated wedding coordinator on every event",
      "Bridal party white-glove arrival experience",
      "Weather contingency plans for all seasons",
      "100% five-star reviews on wedding platforms",
    ],
  },
  {
    slug: "corporate-campus",
    title: "Vertex Tech Corporate Campus",
    category: "Corporate",
    description:
      "Executive valet and visitor management for a 5,000-employee tech headquarters.",
    image: "/images/projects/project-5.jpg",
    highlights: [
      "Visitor pre-registration system reduced wait times 60%",
      "Executive priority lane for C-suite & VIPs",
      "EV charging concierge for 200+ EV spots",
      "Monthly utilization dashboards for facilities team",
    ],
  },
  {
    slug: "concert-arena",
    title: "Metro Arena Concert Series",
    category: "Event",
    description:
      "Parking management for a 15,000-seat arena hosting 50+ major concerts annually.",
    image: "/images/projects/project-6.jpg",
    highlights: [
      "Traffic flow design reduced entry time by 35%",
      "400+ staff deployed across 12 parking zones",
      "Post-event exit cleared in under 30 minutes",
      "Shuttle service for 3 remote lots (2,000+ cars)",
    ],
  },
];

export const team: TeamMember[] = [
  {
    name: "Marcus Chen",
    role: "Founder & CEO",
    bio: "15 years in luxury hospitality management. Former Director of Guest Services at The Ritz-Carlton. Marcus founded ParkPro to bring five-star valet service to every venue.",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "Angela Torres",
    role: "Operations Director",
    bio: "10 years of event logistics and parking operations. Angela manages our team of 200+ attendants and ensures every event runs flawlessly from curb to curb.",
    image: "/images/team/team-2.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Williams",
    role: "General Manager",
    company: "Grand Paragon Hotel",
    quote:
      "ParkPro transformed our arrival experience. Guest satisfaction scores went up 42% in the first quarter. Our valet stand is now a competitive advantage.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Owner",
    company: "Bella Vita Restaurant Group",
    quote:
      "Rolling out ParkPro across all 8 locations was seamless. They standardized everything — from uniforms to signage — and our guests notice the difference.",
    rating: 5,
  },
  {
    name: "Jennifer Hale",
    role: "Event Director",
    company: "Arts Foundation",
    quote:
      "1,200 guests and ZERO complaints about parking. That's never happened before ParkPro. Their pre-event planning and execution are world-class.",
    rating: 5,
  },
  {
    name: "Michael Reeves",
    role: "Facilities Director",
    company: "Vertex Tech",
    quote:
      "The monthly dashboards alone are worth it. We can see exactly how our parking is being used and where we can optimize. Professional, data-driven, and reliable.",
    rating: 5,
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Event",
    price: "Custom Quote",
    description: "For one-time events, galas, and private parties.",
    features: [
      "Pre-event logistics consultation",
      "Scalable staffing for any guest count",
      "Stanchions & signage included",
      "Post-event breakdown",
      "Insurance coverage",
      "48-hour post-event report",
    ],
    popular: false,
  },
  {
    name: "Venue Partner",
    price: "Monthly Retainer",
    description: "For restaurants, hotels, and venues needing ongoing service.",
    features: [
      "Dedicated attendant team",
      "24/7 availability for hotels",
      "Key tracking technology",
      "Monthly performance reports",
      "Branded uniforms & signage",
      "Priority scheduling for special events",
      "Liability insurance",
      "Staff training & development",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Annual Contract",
    description: "For corporate campuses and multi-location operations.",
    features: [
      "Everything in Venue Partner",
      "Multi-location management",
      "Custom KPI dashboards",
      "EV charging concierge",
      "Visitor management system",
      "Shuttle service integration",
      "Dedicated account manager",
      "Quarterly business reviews",
      "Volume pricing discounts",
    ],
    popular: false,
  },
];

export const faqs = [
  {
    q: "Are your valets insured?",
    a: "Yes. ParkPro carries $5 million in general liability insurance and $1 million in garage-keepers coverage. Every attendant is bonded and background-checked.",
  },
  {
    q: "How quickly can you staff an event?",
    a: "For most events, we require 2 weeks' notice for full logistics planning. However, we maintain an on-call roster for urgent needs and can often accommodate short-notice requests.",
  },
  {
    q: "Do you provide the equipment?",
    a: "Yes. We provide all signage, stanchions, key boxes, tablets for digital tracking, and branded podiums. You only need the parking space — we bring everything else.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the greater metropolitan area within a 50-mile radius. For events beyond this range, we offer travel staffing with a surcharge. Contact us for a custom quote.",
  },
  {
    q: "How do you handle inclement weather?",
    a: "Every event includes a weather contingency plan. We provide canopies, umbrella service, and covered walkways as needed. Our attendants are equipped with all-weather uniforms.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely. We've integrated with most major hotel PMS systems, visitor management platforms, and parking payment solutions. Our tech team will work with your IT department during onboarding.",
  },
];
