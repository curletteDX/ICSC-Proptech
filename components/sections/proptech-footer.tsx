import Link from "next/link"
import Image from "next/image"

interface SocialLink {
  platform: string
  url: string
}

interface ProptechFooterProps {
  logoSrc?: string
  description?: string
  websiteUrl?: string
  socialLinks?: SocialLink[]
}

const defaultSocialLinks: SocialLink[] = [
  { platform: "facebook", url: "https://facebook.com" },
  { platform: "twitter", url: "https://twitter.com" },
  { platform: "instagram", url: "https://instagram.com" },
  { platform: "linkedin", url: "https://linkedin.com" },
  { platform: "tiktok", url: "https://tiktok.com" },
  { platform: "threads", url: "https://threads.net" },
]

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "facebook":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    case "twitter":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    case "instagram":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
        </svg>
      )
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    case "tiktok":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    case "threads":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.108-1.152 3.455-1.187 1.1-.03 2.094.144 2.959.508.029-.588.021-1.21-.024-1.865-.079-1.178-.36-2.063-.84-2.636-.479-.573-1.18-.86-2.086-.853-1.454.012-2.501.623-3.115 1.815l-1.82-.932c.899-1.738 2.52-2.726 4.68-2.852h.14c1.411 0 2.56.426 3.417 1.267.907.89 1.407 2.208 1.487 3.92.035.78.03 1.638-.015 2.556 1.014.669 1.784 1.552 2.244 2.606.776 1.775.756 4.49-1.483 6.686-1.878 1.838-4.182 2.56-7.463 2.586zm-.364-5.377c-1.837.044-2.64.818-2.6 1.549.03.564.48 1.082 1.173 1.35.508.197 1.109.272 1.744.217 1.103-.096 1.956-.473 2.536-1.123.477-.533.785-1.246.921-2.13-.86-.243-1.807-.37-2.774-.363l-1 .5z"/>
        </svg>
      )
    default:
      return null
  }
}

export function ProptechFooter({
  logoSrc = "/icsc-logo.png",
  description = "The member organization for industry advancement, ICSC promotes and elevates the marketplaces and spaces where people shop, dine, work, play, and gather as foundational and vital ingredients of communities and economies. ICSC produces experiences that create connections and catalyze deals; aggressively advocates to shape public policy; develops high-impact marketing and public relations that influence opinion; provides an enduring platform for professional success; and creates forward-thinking content with actionable insights – all of which drive industry innovation and growth.",
  websiteUrl = "https://www.icsc.com",
  socialLinks = defaultSocialLinks
}: ProptechFooterProps) {
  return (
    <footer className="bg-[#266EFF] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-8">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logoSrc}
              alt="ICSC Logo"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          {/* Right - Connect Section */}
          <div className="flex flex-col items-end gap-6">
            <h3 className="text-xl font-bold tracking-widest">CONNECT</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#266EFF] rounded-full p-3 hover:bg-white/90 transition-colors"
                  aria-label={link.platform}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Description Text */}
          <p className="text-sm leading-relaxed max-w-4xl">
            {description} For more information, please visit{" "}
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80 transition-colors"
            >
              www.ICSC.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
