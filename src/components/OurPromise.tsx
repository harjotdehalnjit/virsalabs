import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const features = [
  {
    title: "We Make You More Money",
    description: "If your marketing doesn’t grow your revenue, we should quit.",
    icon: "📈",
    color: "from-green-500/10 to-green-500/5"
  },
  {
    title: "No Hidden Fees",
    description: "You’ll know exactly what you’re paying for — no surprises, ever.",
    icon: "💎",
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    title: "Hands-Free Automation",
    description: "Our systems  follow up, book appointments, and nurture leads for you.",
    icon: "🤖",
    color: "from-purple-500/10 to-purple-500/5"
  },
  {
    title: "No BS Guarantee",
    description: "If you're not getting results, you shouldn't be paying us.",
    icon: "🎯",
    color: "from-red-500/10 to-red-500/5"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function OurPromise() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" style={{
      background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
    }}>
      <div className="container relative z-10" >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">OUR PROMISE</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Here's What Makes Us Different:
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            We don't just make promises — we deliver results with a proven system that works.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="group relative overflow-hidden h-full">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.color}`} />
                <div className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="font-semibold text-lg mb-2  group-hover:text-primary/80 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {feature.title}
                      </motion.h3>
                      <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 