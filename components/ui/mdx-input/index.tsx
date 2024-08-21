import { forwardRef } from "react";

export interface MDXProps {
  label?: string;
  description?: string | React.ReactNode;
  onChange: (newVal: any) => void;
}

const MDXInput = forwardRef<HTMLDivElement, MDXProps>(
  ({ label, description, onChange }, ref) => {
    return null;
  },
);

MDXInput.displayName = "MDXInput";

export default MDXInput;
