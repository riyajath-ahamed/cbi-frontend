export const GalleryImage = ({ src, alt, colSpan, maxHeight }) => (
    <div
      className={`overflow-hidden rounded-xl col-span-${colSpan} max-h-[${maxHeight}] relative`}
    >
      <img className="h-full w-full object-cover" src={src} alt={alt} loading="lazy" />
    </div>
  );