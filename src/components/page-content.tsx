import { cn } from "@/lib/utils";

/**
 * PageContent component for providing consistent spacing between page sections.
 * Uses space-y utilities to create consistent vertical spacing instead of explicit margins.
 * @param children - The content to render inside the page.
 * @param className - Additional CSS classes to apply.
 * @param spacing - The spacing size between sections. Defaults to "space-y-16".
 * @param props - Any other HTML div element props.
 */
export function PageContent({
  className,
  spacing = "space-y-8",
  ...props
}: React.ComponentProps<"div"> & {
  spacing?: `space-y-${number}`;
}) {
  return <div className={cn("w-full py-12", spacing, className)} {...props} />;
}
