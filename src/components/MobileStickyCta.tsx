import { Button } from "@/components/ui/button";
import { goToOwnerForm, goToSitterForm } from "@/utils/leadCta";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <Button variant="hero" size="lg" className="h-12 flex-1 rounded-full" onClick={() => goToOwnerForm("mobile_sticky")}>
          I Need a Cat Sitter
        </Button>
        <Button variant="soft" size="lg" className="h-12 rounded-full" onClick={() => goToSitterForm("mobile_sticky")}>
          Sitter
        </Button>
      </div>
    </div>
  );
}
