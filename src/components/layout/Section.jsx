import { useEffect, useRef, useState } from "react";

function Section({ title, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`section ${isVisible ? "section-visible" : ""}`}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
