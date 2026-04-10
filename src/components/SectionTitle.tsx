const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center my-10 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">{title}</h2>
      <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mt-2"></div>
    </div>
  );
};

export default SectionTitle;