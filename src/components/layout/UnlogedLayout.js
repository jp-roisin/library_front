import { Card } from "../ui/Card";

export const UnlogedLayout = ({ children }) => {
  return (
    <section className="min-h-[100vh] w-full flex justify-center items-center">
      <Card bgColor="bg-white" color="text-primary" shadow={true}>
        {children}
      </Card>
    </section>
  );
};
