import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Data = [
  {
    slug: "item-1",
    trigger: "Bridging the gender digital divide",
    content:
      "Empowering girls and women with equal access to digital tools and skills. We focus on reducing barriers, promoting STEM education, and enabling participation in the digital economy.",
  },
  {
    slug: "item-2",
    trigger: "Education in emergencies",
    content:
      "Providing safe, inclusive, and continued learning during crises. Our programs support displaced children and communities with digital learning tools and trained educators.",
  },
  {
    slug: "item-3",
    trigger: "Inclusive education for children with disabilities",
    content:
      "Creating accessible learning environments through adaptive technologies, teacher training, and community engagement to ensure no child is left behind.",
  },
];

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full font-bold"
      style={{ letterSpacing: "0.09em" }}
    >
      {Data.map((item) => (
        <AccordionItem key={item.slug} value={item.slug}>
          <AccordionTrigger className="lg:text-xl text-lg font-bold">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 lg:text-base text-sm">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
