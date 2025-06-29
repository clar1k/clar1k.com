import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface SocialLinkProps {
  href: string;
  icon?: LucideIcon;
  iconSrc?: string;
  iconAlt?: string;
  children: React.ReactNode;
  className?: string;
}

function SocialLink({
  href,
  icon: Icon,
  iconSrc,
  iconAlt,
  children,
  className,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 transition-all duration-75 ease-in hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {iconSrc && (
        <Image
          alt={iconAlt ?? "Icon"}
          src={iconSrc}
          width={16}
          height={16}
          className="h-4 w-4"
        />
      )}
      {children}
    </Link>
  );
}

export { SocialLink };
