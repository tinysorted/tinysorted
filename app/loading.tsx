export default function Loading() {
return ( <main className="bg-[#F7F6F3] min-h-screen"> <div className="max-w-6xl mx-auto px-6 py-24">


    <div className="animate-pulse">

      <div className="h-4 w-24 bg-neutral-200 rounded mb-6" />

      <div className="h-16 w-3/4 bg-neutral-200 rounded mb-8" />

      <div className="h-6 w-full bg-neutral-200 rounded mb-3" />
      <div className="h-6 w-5/6 bg-neutral-200 rounded mb-12" />

      <div className="w-full h-[500px] bg-neutral-200 rounded-[36px] mb-16" />

      <div className="space-y-4">
        <div className="h-5 bg-neutral-200 rounded" />
        <div className="h-5 bg-neutral-200 rounded" />
        <div className="h-5 bg-neutral-200 rounded w-11/12" />
        <div className="h-5 bg-neutral-200 rounded w-10/12" />
        <div className="h-5 bg-neutral-200 rounded w-8/12" />
      </div>

    </div>

  </div>
</main>

);
}
