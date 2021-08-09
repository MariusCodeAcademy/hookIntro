import { useEffect } from 'react';

export default function useDocumentTitle(title) {
    useEffect(() => {
    console.log('useEffect in useDocumentTitle');
    document.title = title
})
}
