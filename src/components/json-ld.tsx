import type { Thing, WithContext } from "schema-dts";

interface JsonLdProps {
  schema: WithContext<Thing>;
}

/**
 * JsonLd component for structured data
 * Follows Next.js JSON-LD security best practices
 * https://nextjs.org/docs/app/guides/json-ld
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
