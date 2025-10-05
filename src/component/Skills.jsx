import {
  Code2,
  Palette,
  Database,
  Globe,
} from "lucide-react";

const Skills = () => {
  return (
    <div className="md:col-span-3 lg:col-span-4 md:row-span-2 bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors min-h-[280px]">
          <h3 className="text-sm font-medium text-muted-foreground mb-6">
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Code2 className="h-6 w-6 text-accent" />
              <h4 className="font-medium text-sm">Frontend</h4>
              <p className="text-xs text-muted-foreground">
                React, Next.js
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Database className="h-6 w-6 text-accent" />
              <h4 className="font-medium text-sm">Backend</h4>
              <p className="text-xs text-muted-foreground">
                Node.js, Express.js, Mongo DB
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Palette className="h-6 w-6 text-accent" />
              <h4 className="font-medium text-sm">Design</h4>
              <p className="text-xs text-muted-foreground">
                Wordpress, Figma, Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Globe className="h-6 w-6 text-accent" />
              <h4 className="font-medium text-sm">Deployment</h4>
              <p className="text-xs text-muted-foreground">Git, Vercel</p>
            </div>
          </div>
        </div>
  )
}

export default Skills