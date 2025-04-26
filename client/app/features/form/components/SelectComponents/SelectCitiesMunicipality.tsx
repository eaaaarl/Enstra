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
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useGetCityAndMunicipalityQuery } from "../../api/psgcApi";
import { setSelectedCityCode } from "@/lib/redux/state/psgcSlice";

interface SelectCitiesMunicipalitiesProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
}

export function SelectCitiesMunicipalities({
  value,
  onChange,
  name,
  onBlur,
}: SelectCitiesMunicipalitiesProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);

  const selectedProvinceCode = useAppSelector(
    (state) => state.psgc.selectedProvinceCode
  );

  const { data: cityAndMunicipality, isLoading: isLoadingCityAndMunicipality } =
    useGetCityAndMunicipalityQuery(selectedProvinceCode, {
      skip: !selectedProvinceCode,
    });

  console.log("selectedProvinceCode", selectedProvinceCode);

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
          disabled={!selectedProvinceCode || isLoadingCityAndMunicipality}
        >
          {value
            ? cityAndMunicipality?.find((city) => city.name === value)?.name
            : selectedProvinceCode
            ? isLoadingCityAndMunicipality
              ? "Loading..."
              : "Select City/Municipality..."
            : "Select Province First..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start" sideOffset={4}>
        <Command>
          <CommandInput
            placeholder="Search city/municipality..."
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No city/municipality found.</CommandEmpty>
            <CommandGroup>
              {cityAndMunicipality?.map((city) => (
                <CommandItem
                  key={city.code}
                  value={city.name}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    onChange(newValue);

                    const selectedCityCode = cityAndMunicipality?.find(
                      (city) => city.name === currentValue
                    )?.code;

                    dispatch(setSelectedCityCode(selectedCityCode));

                    setOpen(false);
                  }}
                >
                  {city.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === city.name ? "opacity-100" : "opacity-0"
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
