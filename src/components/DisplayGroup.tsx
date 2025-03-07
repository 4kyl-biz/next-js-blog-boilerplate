import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva(
  "", // Base styles
  {
    variants: {
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
    },
    defaultVariants: {
      textAlign: "center", // Default alignment
    },
  }
);
type TextProps = VariantProps<typeof textStyles>;

type DisplayItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type DisplayGroupProps = {
  groupTitle?: string;
  textAlign?: TextProps["textAlign"];
  items: DisplayItem[];
};

const DisplayGroup = ({
  groupTitle,
  textAlign = "center",
  items,
}: DisplayGroupProps) => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        {groupTitle && (
          <h2 className="text-4xl font-bold pb-12 mb-6 border-b border-gray-200">
            {groupTitle}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${textStyles({
                textAlign,
              })}`}
            >
              <div className="w-20 h-20 mb-6 mx-auto">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayGroup;
