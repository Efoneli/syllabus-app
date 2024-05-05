export default function Cats({ params}: {
    params: {
        slug: string[];
    }
}) {
    if(params.slug?.length === 2) {
        return <h1>viewing CAtegories for {params.slug[0]} and course {params.slug[1]} home page</h1>

    } else if (params.slug?.length === 1) {
        return <h1>viewing CAtegories for {params.slug[0]} </h1>

    }
    return <h1>CAtegories home page</h1>
}