import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Permission {
  label: string;
  granted: boolean;
}

interface PermissionCardProps {
  title: string;
  icon: LucideIcon;
  iconColor?: string;
  permissions: Permission[];
  delay?: number;
}

export default function PermissionCard({
  title,
  icon: Icon,
  iconColor = 'text-yellow-500',
  permissions,
  delay = 0,
}: PermissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon className={cn('w-5 h-5', iconColor)} />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {permissions.map((permission, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {permission.label}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}