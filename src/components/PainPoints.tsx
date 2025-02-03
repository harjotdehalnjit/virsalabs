import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const painPoints = [
  {
    title: "Your Phone’s Not Ringing",
    description: "You know the customers are out there so why aren’t they calling?",
    icon: "📱",
    color: "from-green-500/10 to-green-500/5"
  },
  {
    title: "Sick of the Excuses",
    description: "You’ve heard it all before — and you’re done waiting for results.",
    icon: "🔄",
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    title: "Your ROI is a Joke",
    description: "You’re spending more on marketing than you’re making back.",
    icon: "💸",
    color: "from-purple-500/10 to-purple-500/5"
  },
  {
    title: "Drowning in Busy Work",
    description: "You’re stuck managing leads instead of growing your business.",
    icon: "⏰",
    color: "from-red-500/10 to-red-500/5"
  }
];

export default function PainPoints() {
  return (
    <section className=" -translate-y-64 -mb-60 md:-mb-20 md:-translate-y-20 py-24 bg-background/50 backdrop-blur-sm relative overflow-hidden" style={{
      background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
    }}>
      <div className="container relative z-10" >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">THE REALITY</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Let's Be Real. You've Probably Experienced This Before:
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            We understand your frustrations because we've helped hundreds of businesses overcome these exact challenges.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${point.color}`} />
              <div className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-2xl">{point.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-destructive/80 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 