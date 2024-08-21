import { TextareaHTMLAttributes, forwardRef, useEffect, useState } from "react";
import { useRemark } from "react-remark";
import "./style.css";
import { Textarea } from "../textarea";
import { cn } from "@/lib/cssClass";
import { Button } from "../button";
import { IconEye, IconPencil } from "@tabler/icons-react";

export interface MDXProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string | React.ReactNode;
  onChange: (newVal: any) => void;
}

const welcomeText = "# Use markdown to write your content";

const MDInput = forwardRef<HTMLTextAreaElement, MDXProps>(
  ({ className, ...props }, ref) => {
    const [reactContent, setMarkdownSource] = useRemark();
    const [isEditing, setEditing] = useState(true);

    useEffect(() => {
      setMarkdownSource(welcomeText);
    }, []);

    return (
      <div className={cn("relative", className)}>
        {isEditing ? (
          <Textarea
            ref={ref}
            {...props}
            placeholder={welcomeText}
            onChange={({ currentTarget }) =>
              setMarkdownSource(currentTarget.value)
            }
            fullHeight
          />
        ) : (
          <div className="h-full w-full space-y-2">
            <p className="text-subtle">{props.label}</p>
            <div className="w-full overflow-y-auto border-y py-4">
              <div className="prose prose-slate dark:prose-invert">
                {reactContent}
              </div>
            </div>
          </div>
        )}

        <Button
          variant="icon"
          className="absolute right-0 top-0 mr-2 mt-10"
          size="icon"
          onClick={() => setEditing((prev) => !prev)}
        >
          {isEditing ? <IconEye size={24} /> : <IconPencil size={24} />}
        </Button>
      </div>
    );
  },
);

MDInput.displayName = "MDXInput";

export default MDInput;
