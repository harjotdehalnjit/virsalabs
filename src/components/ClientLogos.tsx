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
    logo: "/diamond.png",
    industry: "Technology",
    website: "https://example.com/client1"
  },
  
  {
    name: "Gen One Detailing",
    logo: "/genone.png",
    industry: "Analytics",
    website: "https://example.com/client3"
  },
 
  {
    name: "Chapter One Customs",
    logo: "/chapterone.png",
    industry: "AI Solutions",
    website: "https://example.com/client5"
  },
  {
    name: "Detailed By Baker",
    logo: "bake.png",
    industry: "Web Development",
    website: "https://example.com/client6"
  },
  {
    name: "M&M Movers NJ",
    logo: "/mandm.png",
    industry: "Cloud Services",
    website: "https://example.com/client4"
  },
  
  {
    name: "Todd Miller Roofing",
    logo: "/toddmiller.png",
    industry: "Cybersecurity",
    website: "https://example.com/client8"
  },
  {
    name: "Paramount Roofing & Construction",
    logo: "/paramoun.png",
    industry: "Innovation",
    website: "https://example.com/client2"
  },
  {
    name: "PRG LLC",
    logo: "/prg.png",
    industry: "Digital Marketing",
    website: "https://example.com/client7"
  },
];

export default function ClientLogos() {
  return (
    <section className="w-full py-20 relative">
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
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-[700px] text-gray-400 text-base md:text-lg">
            Join the growing list of innovative companies that trust us with their digital presence
          </p>
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