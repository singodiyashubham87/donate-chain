import { testimonials } from "@/app/data/testimonials"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function TestimonialCard() {
    return (
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-2">
        {testimonials?.map((item, idx) => (
          <AccordionItem value={`item-${idx}`} key={item?.id} className="bg-background rounded-md shadow px-4 py-3">
            <AccordionTrigger className="text-lg font-medium">{item?.name}, {item?.location}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item?.feedback}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }