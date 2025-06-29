import { cn } from "@/lib/utils";

/**
 * Section component for constraining content to a centered, max-width container with responsive padding.
 * @param children - The content to render inside the section.
 * @param className - Additional CSS classes to apply to the section.
 * @param props - Any other HTML section element props.
 */
export default function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto max-w-4xl space-y-4 px-4", className)}
      {...props}
    />
  );
}
