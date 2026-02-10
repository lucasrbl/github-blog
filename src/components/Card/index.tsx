type CardProps = {} & React.ComponentProps<'div'>;

export function Card({ ...props }: CardProps) {
    return ( 
    <div className="bg-base-post rounded-[10px] border-2 border-transparent hover:border-2 hover:border-base-label cursor-pointer group" {...props} >
        <div className="m-8">
            <div className="mb-11.5 flex justify-between">
                <span className="text-base-title text-link transition-all group-hover:text-medium">JavaScript data types and data structures</span>
                <span className="text-base-span text-small">Há 1 dia</span>
            </div>

            <p className="text-base-text text-medium line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
        </div>
    </div> 
    )
}