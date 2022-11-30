import { dotts } from '@/common/utils';
import Link from 'next/link';
import usePagination from 'hooks/usePagination';
import { WithChildren } from '@/types/shared';

interface PaginationProps extends WithChildren {
  totalItems: number;
  currentPage: number;
  renderPageLink: (page: number) => string;
  itemsPerPage?: number;
};

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
}: PaginationProps) => {
  const pages = usePagination({ currentPage, itemsPerPage, totalItems });

  return (
    <div className="col-12">
      <ul className="pagination justify-content-center mb-0">
        {pages.map((pageNumber, index) =>
          pageNumber === dotts ? (
            <li key={index} className="page-item">
              <span className="page-link">
                {pageNumber}
              </span>
            </li>
          ) : (
            <li key={index} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
              <Link
                href={renderPageLink(pageNumber as number)}
                className="page-link"
              >
                {pageNumber}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
