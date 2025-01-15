import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { Shield, Star, Clock, HeartHandshake, ArrowRight } from "lucide-react"

const SatisfactionGuarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our service with an unconditional guarantee. Not happy? We'll make it right."
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "Get priority access to our expert team whenever you need assistance."
    },
    {
      icon: Clock,
      title: "30-Day Risk-Free Trial",
      description: "Experience our full suite of services for 30 days with zero commitment."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Success Manager",
      description: "Your personal guide to ensure you get the most value from our platform."
    }
  ]

  return (
    <section className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_90%)]" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, var(--primary) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">PEACE OF MIND</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
              Our Promise to You
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              We're not just another service provider. We're your dedicated partner in growth, 
              committed to your success every step of the way.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee, i) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <guarantee.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {guarantee.description}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 backdrop-blur-sm bg-card/50">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                "We succeed when you succeed"
              </h3>
              <p className="text-muted-foreground">
                Our commitment goes beyond words. If you're ever unsatisfied with our service, 
                we'll work tirelessly to make it right. Your success is our top priority, and 
                we back that up with concrete actions, not just promises.
              </p>
              <motion.button
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Learn more about our guarantee</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SatisfactionGuarantee 