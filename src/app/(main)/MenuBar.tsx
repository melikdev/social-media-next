import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellIcon, BookmarkIcon, HomeIcon, MailIcon } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
  return (
    <div className={cn("", className)}>
      <Button
        asChild
        title="home"
        variant="ghost"
        className="flex items-center justify-center gap-3"
      >
        <Link href="/">
          <HomeIcon />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
      <Button
        asChild
        title="Notifications"
        variant="ghost"
        className="flex items-center justify-center gap-3"
      >
        <Link href="/notifications">
          <BellIcon />
          <span className="hidden lg:inline">Notifications</span>
        </Link>
      </Button>
      <Button
        asChild
        title="Messages"
        variant="ghost"
        className="flex items-center justify-center gap-3"
      >
        <Link href="/messages">
          <MailIcon />
          <span className="hidden lg:inline">Messages</span>
        </Link>
      </Button>
      <Button
        asChild
        title="Bookmarks"
        variant="ghost"
        className="flex items-center justify-center gap-3"
      >
        <Link href="/">
          <BookmarkIcon />
          <span className="hidden lg:inline">Bookmarks</span>
        </Link>
      </Button>
    </div>
  );
}
