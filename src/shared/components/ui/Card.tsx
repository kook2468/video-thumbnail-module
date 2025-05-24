type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="p-4 border rounded-2xl m-4">
      <h1 className="font-bold text-xl"># {title}</h1>
      <div className="p-2">{children}</div>
    </div>
  );
};
