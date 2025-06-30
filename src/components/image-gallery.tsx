import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image, { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";

export interface ImageItem {
  src: StaticImageData;
  alt: string;
  icon: LucideIcon;
  category: string;
  description: string;
}

interface ImageGalleryProps {
  items: ImageItem[];
  className?: string;
}

export function ImageGallery({ items, className = "" }: ImageGalleryProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {items.map((image) => {
        const IconComponent = image.icon;
        return (
          <HoverCard key={image.alt}>
            <HoverCardTrigger asChild>
              <Card className="group relative aspect-[4/3] overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-fit">
                      <IconComponent className="h-3 w-3 mr-1" />
                      {image.category}
                    </Badge>
                    <p className="text-foreground text-sm font-semibold leading-tight">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <IconComponent className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">{image.alt}</h4>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}
