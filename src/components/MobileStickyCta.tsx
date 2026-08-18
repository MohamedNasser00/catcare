import { Button } from "@/components/ui/button";
import { ownerFormUrl, sitterFormUrl, trackOwnerCta, trackSitterCta } from "@/utils/leadCta";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <Button variant="hero" size="lg" className="h-12 flex-1 rounded-full" asChild>
          <a
            href={ownerFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOwnerCta("mobile_sticky")}
          >
            I Need a Cat Sitter
          </a>
        </Button>
        <Button variant="soft" size="lg" className="h-12 rounded-full" asChild>
          <a
            href={sitterFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackSitterCta("mobile_sticky")}
          >
            Sitter
          </a>
        </Button>
      </div>
    </div>
  );
}
