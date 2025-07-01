"use client"

import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"

type DatepickerProps = {
  value?: Date;
  onDateChange?: (date: Date) => void;
  onDurationChange?: (duration: number) => void;
};

export function Datepicker({ value, onDateChange, onDurationChange }: DatepickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(value);
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:30");

useEffect(() => {
  if (date && startTime && endTime) {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startDate = new Date(date);
    startDate.setHours(startHours);
    startDate.setMinutes(startMinutes);

    const endDate = new Date(date);
    endDate.setHours(endHours);
    endDate.setMinutes(endMinutes);

    const durationMinutes = Math.floor((endDate.getTime() - startDate.getTime()) / 60000);

    onDateChange?.(startDate);
    onDurationChange?.(durationMinutes); 
  }
}, [date, startTime, endTime, onDateChange]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-40 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(d) => {
                setDate(d)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Start Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="60"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          End Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="60"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
    </div>
  )
}
