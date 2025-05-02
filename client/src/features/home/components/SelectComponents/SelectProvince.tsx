"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/lib/redux/hooks";
import { usePsgcApi } from "../../hooks/usePsgcApi";
import { setSelectedProvinceCode } from "@/lib/redux/states/psgcSlice";

interface SelectProvinceProps {
  value: string;
  onChange: (value: string) => void;
}

export function SelectProvince({ value, onChange }: SelectProvinceProps) {
  const { provinceData } = usePsgcApi();
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? provinceData?.find((prov) => prov.name === value)?.name
            : "Select Province..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start" sideOffset={4}>
        <Command>
          <CommandInput placeholder="Search province..." className="h-9" />
          <CommandList>
            <CommandEmpty>No province found.</CommandEmpty>
            <CommandGroup>
              {provinceData?.map((prov) => (
                <CommandItem
                  key={prov.code}
                  value={prov.name}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    onChange(newValue);

                    const selectedProvinceCode = provinceData?.find(
                      (province) => province.name === newValue
                    )?.code;

                    dispatch(setSelectedProvinceCode(selectedProvinceCode));

                    setOpen(false);
                  }}
                >
                  {prov.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === prov.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
