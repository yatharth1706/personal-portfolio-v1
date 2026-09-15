import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type ContactSectionProps = {
  description: string;
  showCaseStudies?: boolean;
  showYouTube?: boolean;
};

export function ContactSection({
  description,
  showCaseStudies = false,
  showYouTube = false,
}: ContactSectionProps) {
  return (
    <section id="contact" className="mt-[clamp(60px,9vw,120px)] bg-ink-night text-paper">
      <div className="v1-wrap py-[clamp(56px,8vw,104px)]">
        <div className="mb-[clamp(22px,3vw,32px)] font-mono text-xs uppercase tracking-[0.06em] text-[#A39A91]">
          Next step
        </div>
        <h2 className="max-w-[20ch] text-[clamp(2rem,5.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          If you&apos;re hiring, email me.
        </h2>
        <div className="mt-[clamp(30px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-end gap-[clamp(28px,4vw,56px)]">
          <p className="m-0 max-w-[44ch] text-[clamp(1rem,1.2vw,1.1875rem)] leading-[1.65] text-[#C9C1B8]">
            {description}
          </p>
          <div>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-block break-all border-b border-[#5C544C] pb-1 font-mono text-[clamp(0.95rem,1.7vw,1.25rem)] text-paper transition-colors hover:border-rust hover:text-[#E9A184]"
            >
              {SITE.email}
            </a>
            <div className="mt-[clamp(24px,3vw,32px)] flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center rounded-full bg-paper px-[22px] py-[13px] text-[15px] font-semibold text-ink-night transition-colors hover:bg-rust hover:text-paper"
              >
                Email me
              </a>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#4A423B] px-[21px] py-3 text-[15px] font-semibold text-paper transition-colors hover:border-paper"
              >
                Résumé (PDF)
              </a>
              {showCaseStudies ? (
                <a
                  href="/#work"
                  className="inline-flex items-center rounded-full border border-[#4A423B] px-[21px] py-3 text-[15px] font-semibold text-paper transition-colors hover:border-paper"
                >
                  See the case studies
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-[clamp(48px,7vw,88px)] flex flex-wrap items-center gap-[clamp(16px,2.4vw,30px)] border-t border-[#3A332D] pt-[clamp(22px,3vw,28px)]">
          <span className="mr-auto font-mono text-xs text-[#A39A91]">
            {SITE.name} · {SITE.role} · {SITE.phone}
          </span>
          <FooterLink href={SITE.github}>GitHub</FooterLink>
          <FooterLink href={SITE.linkedin}>LinkedIn</FooterLink>
          {showYouTube ? (
            <FooterLink href={SITE.youtube}>YouTube</FooterLink>
          ) : null}
          <FooterLink href={SITE.website}>{SITE.website.replace("https://", "")}</FooterLink>
        </div>
      </div>
    </section>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-[14.5px] font-medium text-[#C9C1B8] transition-colors hover:text-paper"
      )}
    >
      {children}
    </a>
  );
}
