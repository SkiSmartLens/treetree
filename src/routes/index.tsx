import { createFileRoute } from "@tanstack/react-router";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import deckPdf from "@/assets/deck_1.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Download Deck PDF" },
      { name: "description", content: "Download the deck PDF." },
      { property: "og:title", content: "Download Deck PDF" },
      { property: "og:description", content: "Download the deck PDF." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Deck PDF
          </h1>
          <p className="text-muted-foreground">
            Click the button below to download your PDF.
          </p>
        </div>
        <Button asChild size="lg" className="gap-2">
          <a href={deckPdf.url} download={deckPdf.original_filename}>
            <FileDown className="h-5 w-5" />
            Download PDF
          </a>
        </Button>
      </div>
    </div>
  );
}
