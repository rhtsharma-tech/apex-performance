import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-1.5 font-mono text-xs">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-on-surface-dim" />
            )}
            {isLast || !item.href ? (
              <span className={isLast ? "text-on-surface" : "text-on-surface-muted"}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-on-surface-muted hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
