import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Facebook, 
  Instagram, 
  MessageSquare,
  Home,
  Bell,
  Calendar,
  Settings,
  Star
} from "lucide-react"

const AppShowcase = () => {
  const [activeTab, setActiveTab] = React.useState("unread")
  const [hoveredMessage, setHoveredMessage] = React.useState<number | null>(null)
  const controls = useAnimation()

  const messages = [
    {
      name: "Sarah Johnson",
      avatar: "SJ",
      message: "Thanks for the quick response!",
      time: "2m ago",
      unread: 1,
      channel: "WhatsApp"
    },
    {
      name: "Mike's Restaurant",
      avatar: "MR",
      message: "When can we schedule a demo?",
      time: "5m ago",
      unread: 2,
      channel: "Facebook"
    },
    {
      name: "Emily Davis",
      avatar: "ED",
      message: "The new system works great!",
      time: "15m ago",
      unread: 1,
      channel: "SMS"
    },
    {
      name: "Tom's Auto Shop",
      avatar: "TA",
      message: "Booking confirmed for tomorrow",
      time: "1h ago",
      unread: 3,
      channel: "Instagram"
    },
    {
      name: "Lisa's Boutique",
      avatar: "LB",
      message: "Can you help with our website?",
      time: "2h ago",
      unread: 1,
      channel: "Email"
    }
  ]

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "WhatsApp":
        return <MessageCircle className="w-4 h-4 text-green-500" />
      case "Facebook":
        return <Facebook className="w-4 h-4 text-blue-500" />
      case "Instagram":
        return <Instagram className="w-4 h-4 text-pink-500" />
      case "SMS":
        return <MessageSquare className="w-4 h-4 text-purple-500" />
      case "Email":
        return <Mail className="w-4 h-4 text-yellow-500" />
      default:
        return <MessageCircle className="w-4 h-4" />
    }
  }

  const phoneVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const messageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(var(--primary) / 0.1)",
      transition: { duration: 0.2 }
    }
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 md:px-6" style={{
  background: 'radial-gradient(circle at center, rgba(99, 96, 126, 0.35) 0%, rgba(252, 248, 230, 0.15) 26%, transparent 65%)'
}}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - App Preview */}
          <motion.div
            variants={phoneVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[320px]"
            >
              {/* Phone Frame */}
              <div className="relative rounded-[3rem] border-8 border-gray-800 bg-gray-800 dark:border-gray-700 shadow-2xl">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-background">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-2xl flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full" />
                  </div>
                  
                  {/* App Interface */}
                  <div className="pt-8 pb-2 h-[640px] overflow-hidden">
                    <div className="px-4">
                      {/* Header */}
                      <motion.div 
                        className="flex items-center justify-between mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center space-x-2">
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-medium"
                            whileHover={{ scale: 1.1 }}
                          >
                            VL
                          </motion.div>
                          <div>
                            <div className="text-sm font-medium">Virsa Labs</div>
                            <div className="text-xs text-muted-foreground">Business Suite</div>
                          </div>
                        </div>
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Bell className="w-5 h-5 text-primary" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        </motion.div>
                      </motion.div>

                      {/* Tabs */}
                      <div className="flex space-x-4 border-b mb-4">
                        {["unread", "recent", "all"].map((tab) => (
                          <motion.div
                            key={tab}
                            className={`pb-2 text-sm cursor-pointer ${
                              activeTab === tab 
                                ? "border-b-2 border-primary font-medium" 
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 1 }}
                          >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </motion.div>
                        ))}
                      </div>

                      {/* Messages */}
                      {messages.map((msg, i) => (
                        <motion.div
                          key={i}
                          variants={messageVariants}
                          initial="initial"
                          whileInView="animate"
                          whileHover="hover"
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 py-3 px-2 rounded-lg cursor-pointer"
                          onHoverStart={() => setHoveredMessage(i)}
                          onHoverEnd={() => setHoveredMessage(null)}
                        >
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/40 flex items-center justify-center text-white font-medium"
                            whileHover={{ scale: 1.1 }}
                          >
                            {msg.avatar}
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div className="text-sm font-medium truncate flex items-center gap-2">
                                {msg.name}
                                {getChannelIcon(msg.channel)}
                              </div>
                              <div className="text-xs text-muted-foreground">{msg.time}</div>
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {msg.message}
                            </div>
                          </div>
                          {msg.unread > 0 && (
                            <motion.div 
                              className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <span className="text-[10px] text-white">{msg.unread}</span>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Navigation */}
                    <motion.div 
                      className="absolute bottom-0 inset-x-0 h-16 border-t bg-background/95 backdrop-blur-sm"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="grid grid-cols-5 h-full">
                        {[
                          { icon: Home, label: "Home" },
                          { icon: MessageCircle, label: "Chat" },
                          { icon: Calendar, label: "Calendar" },
                          { icon: Star, label: "Reviews" },
                          { icon: Settings, label: "Settings" }
                        ].map((item, i) => (
                          <motion.div 
                            key={i}
                            className="flex flex-col items-center justify-center gap-1"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 1 }}
                          >
                            <item.icon className="w-5 h-5 text-muted-foreground" />
                            <span className="text-[10px] text-muted-foreground">{item.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-background blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Features */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline">Your Business - One App</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                All Channels in One Place
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Manage all your business communications from a single, powerful platform.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Phone Calls & Recordings",
                  description: "Handle calls and access recordings easily",
                  icon: Phone
                },
                {
                  title: "Text Messages",
                  description: "Send and receive SMS messages",
                  icon: MessageSquare
                },
                {
                  title: "Email",
                  description: "Manage all email communications",
                  icon: Mail
                },
                {
                  title: "Facebook Messenger",
                  description: "Connect with customers on Facebook",
                  icon: Facebook
                },
                {
                  title: "Instagram DMs",
                  description: "Respond to Instagram messages",
                  icon: Instagram
                },
                {
                  title: "WhatsApp",
                  description: "Chat with customers on WhatsApp",
                  icon: MessageCircle
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Card className="p-4 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <motion.div 
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {feature.description}
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase 