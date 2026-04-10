const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-bold text-secondary">{title}</h2>
      <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
    </div>
  );
};

export default SectionTitle;