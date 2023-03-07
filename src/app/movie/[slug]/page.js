// app/posts/[...slug]/page.tsx
import { notFound } from 'next/navigation'

function getPostBySlug(slug) {
	// ...
}

export default async function PostPage({ params }) {
	const post = await getPostBySlug(params.slug)

	if (!post) {
		notFound()
	}

	return <div>ok</div>
}
