import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductItems from '../Home/ProductItems';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const AllProducts = ({itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
}
  return (
    <>
    <section>
        <div className="container pt-16 pb-21">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                 {currentItems && currentItems.map((item) => (<ProductItems/>))}
                {/* <items currentItems={currentItems} /> */}
            </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    className='Product_pagination cursor-pointer flex  items-center justify-center gap-[38px] mt-10'
                />
        </div>
    </section>
    </>
  )
}

export default AllProducts