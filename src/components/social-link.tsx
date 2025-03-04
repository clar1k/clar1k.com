import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon?: LucideIcon;
  iconSrc?: string;
  iconAlt?: string;
  children: React.ReactNode;
}

function SocialLink({
  href,
  icon: Icon,
  iconSrc,
  iconAlt,
  children,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 transition-all duration-75 ease-in hover:bg-accent hover:text-accent-foreground"
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
