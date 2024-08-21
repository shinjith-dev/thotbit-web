import { forwardRef } from "react";
import { useRemark } from "react-remark";
import Input from "../input";

export interface MDXProps {
  label?: string;
  description?: string | React.ReactNode;
  onChange: (newVal: any) => void;
}

const MDInput = forwardRef<HTMLDivElement, MDXProps>(
  ({ label, description, onChange }, ref) => {
    const [reactContent, setMarkdownSource] = useRemark();

    return (
      <div>
        <Input
          type="text"
          onChange={({ currentTarget }) =>
            setMarkdownSource(currentTarget.value)
          }
        />
        <div className="prose"> {reactContent}</div>
      </div>
    );
  },
);

MDInput.displayName = "MDXInput";

export default MDInput;
