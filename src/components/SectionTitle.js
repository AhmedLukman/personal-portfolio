function SectionTitle({children}) {
  return (
    <div className="text-center m-20">
      <h2 className="text-center mt-10 text-secondary text-2xl font-serif tracking-widest md:text-3xl lg:text-4xl">
        <span className="line-before-and-after"></span>
        {children}
        <span className="line-before-and-after"></span>
      </h2>
    </div>
  );
}

export default SectionTitle