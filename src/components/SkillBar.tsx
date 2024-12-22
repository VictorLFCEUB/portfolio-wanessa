import { Progress } from "@/components/ui/progress"

export const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
    <div className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-1" />
    </div>
  )