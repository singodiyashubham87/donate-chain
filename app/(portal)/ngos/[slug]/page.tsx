import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ngos = [
  {
    slug: "helping-hands",
    name: "Helping Hands",
    description:
      "Helping Hands is committed to educating underprivileged children in rural parts of India.",
    location: "Rajasthan, India",
    impact: "Over 5,000+ children educated across 30+ villages",
    website: "https://helpinghands.org",
  },
  {
    slug: "green-earth",
    name: "Green Earth",
    description:
      "Green Earth works towards reforestation and environmental conservation across urban India.",
    location: "Maharashtra, India",
    impact: "Planted 50,000+ trees and reached 100+ schools",
    website: "https://greenearth.org",
  },
  {
    slug: "swasth-bharat",
    name: "Swasth Bharat",
    description:
      "Swasth Bharat delivers mobile healthcare services to remote tribal villages.",
    location: "Chhattisgarh, India",
    impact: "Served 10,000+ patients with monthly health camps",
    website: "https://swasthbharat.org",
  },
]

export async function generateStaticParams() {
  return ngos.map((ngo) => ({ slug: ngo.slug }))
}

export default function NgoProfile({ params }: { params: { slug: string } }) {
  const ngo = ngos.find((n) => n.slug === params.slug)

  if (!ngo) return notFound()

  return (
    <div className="container py-20 mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{ngo.name}</h1>
        <p className="text-muted-foreground mb-6">{ngo.location}</p>
        <p className="text-lg mb-6">{ngo.description}</p>
        <div className="bg-muted p-4 rounded-lg shadow mb-6">
          <p className="font-medium">Impact:</p>
          <p className="text-muted-foreground">{ngo.impact}</p>
        </div>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href={ngo.website} target="_blank">Visit Website</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/ngos">Back to NGOs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
