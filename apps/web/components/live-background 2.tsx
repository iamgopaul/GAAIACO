/**
 * Site-wide live background: a looping ping-pong video (forward then reverse,
 * baked into a single MP4 at encode time) used as a fixed, full-viewport layer
 * behind every page. Grayscale is also baked in, so no runtime CSS filter is
 * needed. A static poster image shows while the video loads. Under
 * `prefers-reduced-motion: reduce` the `.gaaia-bg-video` class is hidden via
 * globals.css and the poster stays visible.
 */
export function LiveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <video
        className="gaaia-bg-video absolute inset-0 h-full w-full object-cover"
        poster="/hero-bg-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Calms the video so content stays readable across every section. */}
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
