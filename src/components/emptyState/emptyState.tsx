const EmptyState: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[32px]">
      <h1 className="text-5xl font-headline font-medium text-stone-800">
        No content found
      </h1>
      <p className="text-[20px] text-stone-600">
        Try searching for a topic or a specific author.
      </p>
    </div>
  );
};

export default EmptyState;
