import { FaDesktop, FaSync, FaCode, FaTools } from 'react-icons/fa'
import { GradientHeading, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { Button } from '@/components/ui/Button'

const services = [
  {
    icon: FaDesktop,
    title: 'Business Websites',
    description: 'Professional, mobile-friendly websites that get your business online quickly.',
    pricing: '$1,500 - $3,500'
  },
  {
    icon: FaSync,
    title: 'Website Redesign',
    description: 'Modernize your outdated website with fresh design and improved performance.',
    pricing: '$1,200 - $2,800'
  },
  {
    icon: FaCode,
    title: 'Web Applications',
    description: 'Custom tools and dashboards tailored to your business needs.',
    pricing: 'Starting at $2,500'
  },
  {
    icon: FaTools,
    title: 'Maintenance & Hosting',
    description: 'Keep your site secure, updated, and running smoothly.',
    pricing: '$50 - $100/month'
  }
]

export default function Services() {
  return (
    <div className="min-h-screen pt-40 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <div>
          <GradientHeading as="h1" className="text-5xl md:text-6xl font-bold mb-6 text-center pb-2">
            Services
          </GradientHeading>
        </div>

        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Fast, modern, and affordable web solutions for your business. I help small businesses get online quickly with professional websites and custom tools.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title}>
                <Card variant="interactive" className="border-gray-200">
                  <CardHeader className="flex items-center gap-3">
                    <Icon className="text-blue-600" size={28} />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                    <div className="text-blue-600 font-semibold">
                      {service.pricing}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to Work Together?</h2>
          <p className="text-lg mb-6 text-slate-100">
            Let&apos;s discuss your project and how I can help.
          </p>
          <Button
            href="/contact"
            variant="gradient"
            size="lg"
            className="shadow-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
