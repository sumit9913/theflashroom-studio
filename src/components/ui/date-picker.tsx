'use client';

import * as React from 'react';
import { format, parse, isValid } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  value?: string; // YYYY-MM-DD
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  placeholder?: string;
}

export function DatePicker({ value, onChange, name, className, placeholder = 'Pick a date' }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const selected = React.useMemo(() => {
    if (!value) return undefined;
    const parsed = parse(value, 'yyyy-MM-dd', new Date());
    return isValid(parsed) ? parsed : undefined;
  }, [value]);

  const handleSelect = (day: Date | undefined) => {
    if (day) {
      onChange?.(format(day, 'yyyy-MM-dd'));
    } else {
      onChange?.('');
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background',
            'focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold',
            'hover:border-gold/50 transition-colors',
            !selected && 'text-muted-foreground',
            className
          )}
        >
          {selected ? format(selected, 'dd-MM-yyyy') : <span>{placeholder}</span>}
          <CalendarIcon className="h-4 w-4 opacity-60" />
        </button>
      </PopoverTrigger>
      {/* hidden input to carry the value in forms */}
      {name && <input type="hidden" name={name} value={value ?? ''} />}
      <PopoverContent className="w-auto p-0 bg-card border border-border/60 shadow-xl" align="start">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          defaultMonth={selected}
          showOutsideDays
          classNames={{
            months: 'p-3',
            month: 'space-y-3',
            caption: 'flex justify-center pt-1 relative items-center mb-2',
            caption_label: 'text-sm font-semibold text-foreground',
            nav: 'flex items-center gap-1',
            nav_button: cn(
              'h-7 w-7 bg-transparent rounded-md border border-border/50 flex items-center justify-center',
              'text-muted-foreground hover:text-foreground hover:border-gold/60 transition-colors'
            ),
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse',
            head_row: 'flex mb-1',
            head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center',
            row: 'flex w-full mt-1',
            cell: cn(
              'h-9 w-9 text-center text-sm relative',
              '[&:has([aria-selected])]:bg-gold/10 [&:has([aria-selected])]:rounded-md',
              'first:[&:has([aria-selected])]:rounded-md last:[&:has([aria-selected])]:rounded-md'
            ),
            day: cn(
              'h-9 w-9 p-0 font-normal rounded-md text-foreground',
              'hover:bg-gold/20 hover:text-foreground transition-colors',
              'focus:outline-none focus:ring-1 focus:ring-gold'
            ),
            day_selected: 'bg-gold text-background hover:bg-gold hover:text-background font-semibold',
            day_today: 'border border-gold/60 text-gold font-medium',
            day_outside: 'text-muted-foreground/40 opacity-50',
            day_disabled: 'text-muted-foreground opacity-30',
            day_hidden: 'invisible',
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
