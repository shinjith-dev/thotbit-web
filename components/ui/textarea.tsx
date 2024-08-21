import * as React from "react";

import { cn } from "@/lib/cssClass";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string | React.ReactNode;
}

interface LabelWrapperProps {
  label?: string;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  name?: string;
}

const LabelWrapper = ({
  label,
  children,
  description,
  name,
}: LabelWrapperProps) => {
  if (!(label || description)) return <>{children}</>;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="mb-1 text-subtle">
          {label}
        </label>
      )}
      {children}
      {description && <div className="text-xs">{description}</div>}
    </div>
  );
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, name, description, ...props }, ref) => {
    return (
      <LabelWrapper name={name} label={label} description={description}>
        <textarea
          rows={4}
          name={name}
          id={name}
          className={cn(
            "placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border border-accent bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </LabelWrapper>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
