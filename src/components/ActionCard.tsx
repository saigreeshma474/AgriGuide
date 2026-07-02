import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionCardProps {
  title: string;
  icon: LucideIcon;
  to: string;
  color?: string;
}

const ActionCard = ({ title, icon: Icon, to, color = "bg-primary" }: ActionCardProps) => {
  return (
    <Link to={to}>
      <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-xl p-6 flex flex-col items-center gap-4 border border-border shadow-sm active:scale-95">
        <div className={`${color} rounded-full p-4`}>
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-center text-card-foreground">{title}</h3>
      </div>
    </Link>
  );
};

export default ActionCard;
