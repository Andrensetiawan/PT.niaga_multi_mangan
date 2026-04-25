export default function Head() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/padi-mobile.avif"
        media="(max-width: 640px)"
        type="image/avif"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/padi.avif"
        media="(min-width: 641px)"
        type="image/avif"
        fetchPriority="high"
      />
    </>
  );
}
