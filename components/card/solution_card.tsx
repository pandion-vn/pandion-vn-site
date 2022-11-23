import { WithChildren } from '@/types';

interface SolutionCardProps extends WithChildren {
  title: string;
  icon: string;
}

const SolutionCard = ({ title, icon }: SolutionCardProps) => {
  return (
    <div className="col-lg-4 col-md-6 mt-4 pt-2">
        <div className="d-flex key-feature align-items-center p-3 rounded-md shadow">
            <div className="icon text-center rounded-circle me-3">
                <i data-feather={icon} className="fea icon-ex-md text-primary"></i>
            </div>
            <div className="flex-1">
                <h4 className="title mb-0">{title}</h4>
            </div>
        </div>
    </div>
  );
}

export default SolutionCard;
