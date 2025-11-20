import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  onEdit?: (row: Record<string, unknown>) => void;
}

export default function DataTable({ columns, data, onEdit }: DataTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="border rounded-lg overflow-hidden bg-white"
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            {columns.map((column) => (
              <TableHead key={column.key} className="font-semibold text-gray-700">
                {column.label}
              </TableHead>
            ))}
            {onEdit && <TableHead className="font-semibold text-gray-700">Ações</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render ? column.render(row[column.key], row) : String(row[column.key] || '')}
                </TableCell>
              ))}
              {onEdit && (
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(row)}
                    className="hover:bg-gray-100"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </TableCell>
              )}
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}