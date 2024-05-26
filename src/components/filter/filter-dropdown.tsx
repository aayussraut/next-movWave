"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterDropdownProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const FilterDropdown = ({
  options,
  value,
  onChange,
  placeholder,
}: FilterDropdownProps) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-fit gap-2 h-8 outline-none  border-transparent bg-transparent appearance-none rounded-xl text-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="border border-white bg-[#151F30] text-white">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
