import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ngos = [
  {
    slug: "helping-hands",
    name: "Helping Hands",
    description:
      "Helping Hands is committed to educating underprivileged children in rural parts of India.",
    location: "Rajasthan, India",
    impact: "Over 5,000+ children educated across 30+ villages",
    website: "#",
  },
  {
    slug: "green-earth",
    name: "Green Earth",
    description:
      "Green Earth works towards reforestation and environmental conservation across urban India.",
    location: "Maharashtra, India",
    impact: "Planted 50,000+ trees and reached 100+ schools",
    website: "#",
  },
  {
    slug: "swasth-bharat",
    name: "Swasth Bharat",
    description:
      "Swasth Bharat delivers mobile healthcare services to remote tribal villages.",
    location: "Chhattisgarh, India",
    impact: "Served 10,000+ patients with monthly health camps",
    website: "#",
  },
];

export async function generateStaticParams() {
  return ngos.map((ngo) => ({ slug: ngo.slug }));
}

export default function NgoProfile({ params }: { params: { slug: string } }) {
  const ngo = ngos.find((n) => n.slug === params.slug);

  if (!ngo) return notFound();

  return (
    <div className="container py-20 mx-auto">
      <section className="relative w-full">
        <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36 lg:py-40">
          <Image
            src="/community.jpg"
            alt="Community"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0 opacity-30 z-[-1]"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {ngo?.name}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              {ngo.description}
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground my-6">{ngo.location}</p>
        <div className="bg-muted p-4 rounded-lg shadow mb-6">
          <p className="font-medium">Impact:</p>
          <p className="text-muted-foreground">{ngo.impact}</p>
        </div>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href={ngo.website}>
              Visit Website
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/ngos">Back to NGOs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
