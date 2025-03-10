import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

// Define the client type
interface Client {
  name: string;
  logo: string;
  industry?: string;
  website: string;
}

// Sample client data - this can be moved to a separate data file
const clients: Client[] = [
  {
    name: "Diamond Detailing",
    logo: "/diamon.png",
    industry: "Diamond Detailing",
    website: "https://www.diamonddetailingbethlehem.com"
  },
  
  {
    name: "Gen One Detailing",
    logo: "/genon.png",
    industry: "Gen One Detailing",
    website: "https://genonedetailing.com"
  },
  {
    name: "Paramount Roofing & Construction",
    logo: "/paramounttt.png",
    industry: "Paramount Roofing & Construction",
    website: "https://paramountroofingconstruction.com/home"
  },
  {
    name: "M&M Movers NJ",
    logo: "/mandm.png",
    industry: "M&M Movers",
    website: "https://g.co/kgs/CpdQbEy"
  },

  {
    name: "Detailed By Baker",
    logo: "bake.png",
    industry: "Detailed By Baker",
    website: "https://detailedbybaker.com"
  },
  {
    name: "Chapter One Customs",
    logo: "/chapt1.png",
    industry: "Chapter One Customs",
    website: "https://g.co/kgs/dPKyH9Z"
  },
    
  
  
  {
    name: "Todd Miller Roofing",
    logo: "/toddmiller.png",
    industry: "Todd Miller Roofing",
    website: "https://g.co/kgs/VugMrTy"
  },
  
  {
    name: "PRG LLC",
    logo: "/prg.png",
    industry: "PRG LLC",
    website: "https://maps.app.goo.gl/nbd5WncsN6DP9UeW6"
  },
  {
    name: "Ferarri Beauty Fixations",
    logo: "/ferarri.png",
    industry: "Ferarri Beauty Fixations",
    
  },
  
  {
    name: "NJDC",
    logo: "/NJDC.png",
    industry: "New Jersey Dispatching & Consulting",

  },
  {
    name: "Diploma Diaries",
    logo: "/NJDC (1).png",
    industry: "Diploma Diaries",
    website: "https://app.diplomadiaries.com/sign-in"
  },
  {
    name: "Turban Tying PA",
    logo: "/turban.png",
    industry: "Turban Tying PA",
    website: "https://turbantying.com"
  },
  
];

export default function ClientLogos() {
  return (
    <section className="w-full py-36 md:py-20 relative -translate-y-64 -mb-60 md:-mb-20 md:-translate-y-20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 backdrop-blur-sm"
        style={{
          background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
        }}
      />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge variant="outline" className="mb-2">TRUSTED PARTNERS</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Portfolio
          </h2>
          <p className="max-w-[700px] text-gray-400 text-base md:text-lg">
            Join the growing list of businesses that trust us to grow them online          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <a 
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block group"
            >
              <Card 
                className="relative overflow-hidden border-0 bg-background/5 backdrop-blur-sm hover:bg-background/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-4 flex flex-col items-center justify-center h-full min-h-[100px]">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full max-w-[120px] h-auto object-contain transition-all duration-300 group-hover:scale-105"
                    loading={index > 4 ? "lazy" : undefined}
                  />
                  <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-xs text-muted-foreground">{client.industry}</p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 