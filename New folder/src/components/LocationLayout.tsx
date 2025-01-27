import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react"

interface BlogPost {
  title: string
  description: string
  content?: string
  author: {
    name: string
    role: string
    image: string
  }
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}

interface BlogLayoutProps {
  title: string
  description: string
  posts?: BlogPost[]
  post?: BlogPost
  isSinglePost?: boolean
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  description,
  posts,
  post,
  isSinglePost = false
}) => {
  return (
    <main className="flex min-h-screen flex-col bg-background" >
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-background/80" style={{
          background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
          }} >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
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
          </div>
        </div>
      </section>

      {isSinglePost ? (
        // Single Blog Post Layout
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <article className="max-w-3xl mx-auto">
              <div className="mb-10">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={post?.image} 
                  alt={post?.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <Badge variant="secondary" className="px-3 py-1 text-base">
                  {post?.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{post?.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{post?.readTime}</span>
                </div>
              </div>

              <div className="mb-12 pb-8 border-b">
                <div className="flex items-center gap-4">
                  <img 
                    src={post?.author.image}
                    alt={post?.author.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{post?.author.name}</h3>
                    <p className="text-muted-foreground">{post?.author.role}</p>
                  </div>
                </div>
              </div>

              <div 
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-muted-foreground prose-li:marker:text-primary"
                dangerouslySetInnerHTML={{ __html: post?.content || '' }}
              />

              <div className="mt-16 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <button className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        // Blog Listing Layout
        <section className="py-12 bg-background" style={{
          background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 99%)'
          }}>
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="p-6 space-y-4">
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                      <h2 className="text-2xl font-bold leading-tight line-clamp-2">
                        <a 
                          href={`/locations/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </a>
                      </h2>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 pt-4">
                        <img 
                          src={post.author.image}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10"
                        />
                        <div>
                          <p className="font-medium">{post.author.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default BlogLayout 