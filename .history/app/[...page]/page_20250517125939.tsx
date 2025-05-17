"use client";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import React, { useState, useEffect } from "react";
// import LocaleSelector from "@/components/Locale/LocaleSelector";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default function Page(props: PageProps) {
  const [locale, setLocale] = useState("en-US"); // Current locale state
  const [content, setContent] = useState<any>(null); // Content from Builder
  const builderModelName = "page";

  //onchange within locale selector
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Only update locale if it is different from the current value
    if (newLocale !== locale) {
      setLocale(newLocale);

      // Update Builder user attributes
      builder.setUserAttributes({
        locale: newLocale,
      });
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch content from Builder based on locale and page path
        const fetchedContent = await builder
          .get(builderModelName, {
            userAttributes: {
              urlPath: "/" + (props?.params?.page?.join("/") || ""),
              locale: [locale],
            },
          })
          .toPromise();

        setContent(fetchedContent); // Set the fetched content in state
      } catch (error) {
        console.error("Error fetching Builder content:", error);
      }
    };

    fetchContent(); // Call fetchContent on dependency change
  }, [locale, props?.params?.page]); // Dependencies: locale and page

  return (
    <>
      {/* Pass current locale and handleChange to LocaleSelector */}
      <LocaleSelector locale={locale} onChange={handleChange} />

      {/* Render Builder content */}
      <RenderBuilderContent content={content} model={builderModelName} options={{ enrich: true }} />
    </>
  );
}