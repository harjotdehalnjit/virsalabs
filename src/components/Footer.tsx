import { Button } from "./ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Virsa Labs</h3>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative digital marketing and SEO solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Virsa-Labs/61572305030494/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://x.com/virsalabs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/company/virsa-labs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/virsalabs/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.pinterest.com/virsalabs/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-4 19.2c0-.6 0-1.4.2-2 .2-.7 1.4-4.5 1.4-4.5s-.4-.7-.4-1.7c0-1.6 1-2.8 2.2-2.8 1 0 1.5.8 1.5 1.7 0 1-.7 2.5-1 3.9-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4-4.2-4-2.9 0-4.6 2.1-4.6 4.3 0 .9.3 1.8.7 2.3.1.1.1.2 0 .3l-.2.9c0 .2-.2.2-.3.2-1.4-.6-2.2-2.4-2.2-3.9 0-3.1 2.3-6 6.6-6 3.5 0 6.2 2.5 6.2 5.8 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.3c-.2.9-.8 2-1.2 2.7A10 10 0 1 0 12 2z"/></svg>
                <span className="sr-only">Pinterest</span>
              </a>
              <a href="https://www.tiktok.com/@virsalabs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2h-3a5 5 0 0 0-5 5v3.5"/><path d="M17 15.6c-1 .6-2 .4-3-.5"/><path d="M6.5 9a4.5 4.5 0 1 0 .5 9 4.5 4.5 0 0 0-.5-9Z"/><path d="M14 7.5v10"/></svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/local-seo" className="text-muted-foreground hover:text-primary">Local SEO</a></li>
              <li><a href="/services/lead-generation" className="text-muted-foreground hover:text-primary">Lead Generation</a></li>
              <li><a href="/services/ppc-management" className="text-muted-foreground hover:text-primary">PPC Management</a></li>
              <li><a href="/services/website-seo" className="text-muted-foreground hover:text-primary">Website SEO</a></li>
              <li><a href="/services/social-media-management" className="text-muted-foreground hover:text-primary">Social Media Management</a></li>
              <li><a href="/services/business-automations" className="text-muted-foreground hover:text-primary">Business Automations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-us" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="/contact-us" className="text-muted-foreground hover:text-primary">Contact</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Ready to grow your business? Schedule a free consultation today.
            </p>
            <Button asChild>
              <a href="/contact-us">Book a Call</a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/10">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Virsa Labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 