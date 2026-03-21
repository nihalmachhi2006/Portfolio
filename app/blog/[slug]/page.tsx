export default async function BlogPostFallbackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <div className="flex h-[calc(100vh-140px)] w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-mono text-zinc-500">Coming Soon</h1>
      <p className="font-mono text-sm text-zinc-400">
        The blog post "{slug.replace(/-/g, ' ')}" will be published shortly.
      </p>
    </div>
  );
}
