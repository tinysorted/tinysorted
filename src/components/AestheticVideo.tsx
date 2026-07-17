interface Props {
  videoUrl: string;
}

export default function AestheticVideo({
  videoUrl,
}: Props) {
  if (!videoUrl) return null;

  return (
    <section className="my-16">
      <div
        className="
          max-w-[600px]
          mx-auto

          overflow-hidden
          rounded-[32px]

          bg-white
          shadow-sm
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            w-full

            aspect-video

            object-cover
          "
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>
      </div>

      <p
        className="
          mt-4

          text-center
          text-sm

          tracking-wide
          text-neutral-500
        "
      >
        Before & After Organization
      </p>
    </section>
  );
}