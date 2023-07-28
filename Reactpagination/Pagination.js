
import './pagination.css';
const Pagination = ({ totalVideos, videoPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalVideos / videoPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className={` ${page === currentPage ? 'active' : ''}`}>{page}</button>
                })
            }
        </div>
    )
}
export default Pagination;
