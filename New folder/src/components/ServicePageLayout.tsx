import * as React from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { motion } from "framer-motion"
import ConsultationModal from "./ConsultationModal"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  benefits: {
    title: string
    description: string
    icon: string
  }[]
  processSteps: {
    title: string
    description: string
    icon: string
  }[]
  testimonials: {
    name: string
    role: string
    company: string
    content: string
    image: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  niches: {
    title: string
    href: string
  }[]
  locations: {
    title: string
    href: string
  }[]
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  subtitle,
  description,
  features,
  benefits,
  processSteps,
  testimonials,
  faq,
  niches,
  locations
}) => {
  const [showConsultation, setShowConsultation] = React.useState(false)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="mb-4">{subtitle}</Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowConsultation(true)}
              >
                Get Started Now
              </Button>

              {/* <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8"
              >
                View Case Studies
              </Button> */}


              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/10" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Key Features
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Everything you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/20 h-full transition-all duration-300 hover:scale-105 hover:border-primary/40">
                  <div className="space-y-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <h3 className="font-bold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background relative overflow-hidden" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
  <div className="absolute inset-0">
    <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
  </div>

  <div className="container px-4 md:px-6 relative z-10">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Why Choose Us
      </h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
        The benefit that sets us apart
      </p>
    </div>

    <div className="max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="p-8 h-full backdrop-blur-sm bg-card/50 border-primary/20 w-full">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-2xl">{benefits[0].icon}</span>
            </div>
            <div className="space-y-4">
              {/* Main Header */}
              <h2 className="font-bold text-3xl leading-tight">
                Market Exclusivity
              </h2>
              {/* Subheader */}
              <h3 className="text-xl font-semibold text-muted-foreground">
              You’re not just another client to us like you are to other agencies. 
              </h3>
              {/* Description */}
              
                <p className="text-muted-foreground">We offer true market exclusivity, meaning we only partner with one business per niche in your area. No competing businesses, no conflicts of interest.</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  </div>
</section>


      {/* Process Section */}
      <section className="py-20 bg-secondary/10" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Process
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              How we deliver results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{step.title}</h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-background" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Client Success Stories
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              What our clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full backdrop-blur-sm bg-card/50 border-primary/20">
                  <div className="space-y-4">
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/10" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Got questions? We have answers
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/20">
                  <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Related Niches Section */}
<section className="py-12 bg-secondary/10"style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
  <div className="container px-4 md:px-6">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Related Niches
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Explore the industries we specialize in to deliver top-notch digital marketing solutions.
      </p>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {niches.map((niche, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-card rounded-md shadow-md hover:bg-primary hover:text-primary-foreground transition-all">
            <a href={niche.href} className="block text-lg font-bold">
              {niche.title}
            </a>
          </Card>
        </motion.li>
      ))}
    </ul>
  </div>
</section>

{/* Related Locations Section */}
<section className="py-12 bg-background" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
  <div className="container px-4 md:px-6">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Related Locations
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Discover the areas we serve with our digital marketing and SEO expertise.
      </p>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {locations.map((location, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-card rounded-md shadow-md hover:bg-primary hover:text-primary-foreground transition-all">
            <a href={location.href} className="block text-lg font-bold">
              {location.title}
            </a>
          </Card>
        </motion.li>
      ))}
    </ul>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-background" style={{
			background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
		  }}>
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto p-8 backdrop-blur-sm bg-card/50 border-primary/20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Take the first step towards transforming your business today
              </p>
              <Button 
                size="lg" 
                className="mt-4 text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowConsultation(true)}
              >
                Book Your Free Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <ConsultationModal 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)} 
      />
    </main>
  )
}

export default ServicePageLayout 