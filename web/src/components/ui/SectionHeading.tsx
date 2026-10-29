import './SectionHeading.css';

type SectionHeadingProps = {
  label: string;
  title: string;
  titleId?: string;
};

/** Label "/ LABEL" lalu judul section, gaya referensi. */
export default function SectionHeading({ label, title, titleId }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading__label">
        <span aria-hidden="true">/</span> {label}
      </p>
      <h2 id={titleId} className="section-heading__title">
        {title}
      </h2>
    </div>
  );
}
