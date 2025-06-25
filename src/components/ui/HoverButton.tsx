import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "./button";

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  href: string;
  icon: React.ReactNode;
  text: string;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, href, icon, text, asChild = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <Button
        asChild
        variant="outline"
        className={cn("overflow-hidden", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={ref}
        {...props}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            {icon}
            <motion.div
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{
                width: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
                marginLeft: isHovered ? "0.5rem" : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              {text}
            </motion.div>
          </div>
        </a>
      </Button>
    );
  }
);
HoverButton.displayName = "HoverButton";

export { HoverButton }; 