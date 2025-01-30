import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import ConsultationModal from "./ConsultationModal"

const MainNav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [showConsultation, setShowConsultation] = React.useState(false)

  // Close mobile menu when screen size changes to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          {/* Logo */}
          <div className="flex items-center -translate-x-2 md:-translate-x-0">
            <a href="/" className="flex items-center">
              <img 
                src="/Virsa (500 x 250 px) (600 x 250 px) (3).png"
                alt="Virsa Labs" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href="/about-us"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger
    onClick={(e) => {
      if (e.target.tagName === "BUTTON") {
        window.location.href = "/services";
      }
    }}
  >
    Services
  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
               
               
               
               
                <NavigationMenuItem>
  <NavigationMenuTrigger
    onClick={(e) => {
      if (e.target.tagName === "BUTTON") {
        window.location.href = "/locations";
      }
    }}
  >
    Locations
  </NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {locations.map((location) => (
        <li key={location.title}>
          <NavigationMenuLink asChild>
            <a
              href={location.href}
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">{location.title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {location.description}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

           
           
           
           
           
<NavigationMenuItem>
  <NavigationMenuTrigger
    onClick={(e) => {
      if (e.target.tagName === "BUTTON") {
        window.location.href = "/niches";
      }
    }}
  >
    Niches
  </NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {niches.map((niche) => (
        <li key={niche.title}>
          <NavigationMenuLink asChild>
            <a
              href={niche.href}
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">{niche.title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {niche.description}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

<NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href="/blog"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href="/roi-calculator"
                  >
                    ROI 
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden flex-1 justify-end gap-3">
          <a href="/book-consultation" className="button-glow2" aria-label="Schedule a free consultation">
    <div className="button-glow-inner2">
      Book A Call
    </div>
  </a>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Desktop CTA */}
          
          <div className="hidden md:flex items-center ml-4 gap-3">
            <Button 
              size="sm" 
              className=" text-white bg-transparent"
              asChild
            >
              <a href="http://app.virsalabs.io/"> Login </a>
            </Button>
            <Button 
              size="sm" 
              className=" text-white"
              asChild
            >
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/40">
            <div className="container py-4 space-y-4">
              <a 
                href="/about-us" 
                className="block py-2 text-sm font-medium hover:text-orange-500"
              >
                About
              </a>
              <div className="space-y-2">
                <div className="font-medium text-sm">Services</div>
                <ul className="space-y-2 pl-4">
                  {services.map((service) => (
                    <li key={service.title}>
                      <a
                        href={service.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-orange-500"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
             
              <a 
                href="/locations" 
                className="block py-2 text-sm font-medium hover:text-orange-500"
              >
                Locations
              </a>
              <a 
                href="/niches" 
                className="block py-2 text-sm font-medium hover:text-orange-500"
              >
                Niches
              </a>
              <a 
                href="/blog" 
                className="block py-2 text-sm font-medium hover:text-orange-500"
              >
                Blog
              </a>
              <a 
                href="/roi-calculator" 
                className="block py-2 text-sm font-medium hover:text-orange-500"
              >
                ROI
              </a>
              <div className="pt-4">
                <Button 
                  className="w-full justify-center  text-white"
                  asChild
                >
                  <a href="/contact-us">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)} 
      />
    </>
  )
}

const services = [
  {
    title: "Local SEO",
    description: "Rank in top 3 on Google with our proven track record",
    href: "/services/local-seo",
  },
  {
    title: "Lead Generation",
    description: "Never lose track of potential customers with our advanced CRM",
    href: "/services/lead-generation",
  },
  {
    title: "PPC Management",
    description: "Never lose track of potential customers with our advanced CRM",
    href: "/services/ppc-management",
  },
  {
    title: "Website SEO",
    description: "Never lose track of potential customers with our advanced CRM",
    href: "/services/website-seo",
  },
  {
    title: "Social Media Management",
    description: "Build and maintain your online reputation effectively",
    href: "/services/social-media-management",
  },
  {
    title: "Business Automations",
    description: "Streamline your operations with smart automation tools",
    href: "/services/business-automations",
  },
]

const niches = [
  {
    title: "Roofing Companies",
    description: "Get more roofing jobs with targeted local SEO and automated customer follow-ups.",
    href: "/niches/digital-marketing-for-roofers",
  },
  {
    title: "Moving Companies",
    description: "Keep your trucks booked with lead generation, automated booking, and reputation management.",
    href: "/niches/digital-marketing-for-movers",
  },
  {
    title: "Cleaning Services",
    description: "Turn one-time inquiries into long-term clients with automated lead management and local SEO.",
    href: "/niches/digital-marketing-for-cleaning-services",
  },
  {
    title: "Auto Detailing",
    description: "Stand out in your market with local SEO, social media management, and follow-up automation.",
    href: "/niches/digital-marketing-for-detailers",
  },
  {
    title: "Handyman Services",
    description: "Fill your schedule with local SEO, review automation, and smart lead follow-ups.",
    href: "/niches/digital-marketing-for-handyman-services",
  },
  {
    title: "Mobile Truck Repair",
    description: "Grow your mobile repair business with automated booking and reputation management tools.",
    href: "/niches/digital-marketing-for-mobile-truck-repair",
  },
];

const locations = [
  {
    title: "Allentown PA",
    description: "Helping Allentown businesses rank higher, get more leads, and grow with local SEO and automation.",
    href: "/locations/digital-marketing-allentown-pa",
  },
  {
    title: "Bethlehem PA",
    description: "Boost your online presence in Bethlehem with SEO, social media, and automated follow-ups.",
    href: "/locations/digital-marketing-bethlehem-pa",
  },
  {
    title: "Trenton NJ",
    description: "Drive more leads and revenue in Trenton with local SEO, Google Ads, and automation tools.",
    href: "/locations/digital-marketing-trenton-nj",
  },
  {
    title: "Philadelphia PA",
    description: "Take your business to the next level in Philadelphia with our full-service digital marketing solutions.",
    href: "/locations/digital-marketing-philadelphia-pa",
  },
  {
    title: "Easton PA",
    description: "Improve your online visibility in Easton with local SEO, social media, and Google Business Profile management.",
    href: "/locations/digital-marketing-easton-pa",
  },
  {
    title: "Newark NJ",
    description: "Grow your business in Newark with our local SEO, paid ads management, and business automation tools.",
    href: "/locations/digital-marketing-newark-nj",
  },
];


export default MainNav 