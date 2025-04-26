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
import { useGetBarangaysQuery } from "../../api/psgcApi";
import { useAppSelector } from "@/lib/redux/hooks";

interface SelectBarangaysProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

export function SelectBarangays({
  value,
  onChange,
  name,
  onBlur,
}: SelectBarangaysProps) {
  const [open, setOpen] = React.useState(false);

  const selectedCityCode = useAppSelector(
    (state) => state.psgc.selectedCityCode
  );
  const { data: barangays, isLoading: isLoadingBarangays } =
    useGetBarangaysQuery(selectedCityCode, {
      skip: !selectedCityCode,
    });

  console.log("selectedCityCode", selectedCityCode);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          name={name}
          onBlur={onBlur}
          type="button"
          disabled={!barangays || isLoadingBarangays}
        >
          {value
            ? barangays?.find((br) => br.name === value)?.name
            : selectedCityCode
            ? isLoadingBarangays
              ? "Loading..."
              : "Select Barangays..."
            : "Select City/Municipal First..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start" sideOffset={4}>
        <Command>
          <CommandInput placeholder="Search barangays..." className="h-9" />
          <CommandList>
            <CommandEmpty>No barangays found.</CommandEmpty>
            <CommandGroup>
              {barangays?.map((br) => (
                <CommandItem
                  key={br.code}
                  value={br.name}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {br.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === br.name ? "opacity-100" : "opacity-0"
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
