import {
   Mail
} from "lucide-react";

const Emailcard = () => {
  return (
    <div className="md:col-span-3 lg:col-span-4 md:row-span-1 bg-accent text-accent-foreground border border-accent rounded-lg p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <Mail className="h-8 w-8 mb-4" />
          <div>
            <h3 className="text-sm font-medium mb-2 opacity-90">Email</h3>
            <a
              href="mailto:hello@johnkyleobusan.me"
              className="font-mono text-sm hover:underline"
            >
              johnkyleobusan@gmail.com
            </a>
          </div>
        </div>
  )
}

export default Emailcard