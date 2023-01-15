import { useState } from 'react';

export function Button ({onClick}) {

    const [page, setPage] = useState(1);
   
    const handleClick = () => {
        setPage(page + 1)
        return onClick(page);
    }

return <button type='button' className='button-load' onClick={handleClick}>Load more</button>;

}