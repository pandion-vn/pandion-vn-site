import { BreadCrumb } from '@/types/breadcrumb';
import { WithClassName } from '@/types/shared';
import Link from 'next/link';

interface HeadingProps extends WithClassName {
  title: string;
  breadcrumbs: BreadCrumb[];
}

const Heading = ({ title, breadcrumbs }: HeadingProps) => {
  return (
    <>
      <section className="bg-half bg-light d-table w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="page-next-level">
                <h4 className="title"> {title} </h4>
                <div className="page-next">
                  <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb bg-white rounded shadow mb-0">
                      {breadcrumbs.map((breadcrumb, index) => (
                        <li key={index} className={breadcrumb.active ? "breadcrumb-item active" : "breadcrumb-item"} aria-current={breadcrumb.active && "page"}>
                          <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Heading;
