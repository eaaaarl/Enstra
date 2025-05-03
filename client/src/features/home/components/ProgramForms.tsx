import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, Save, Upload } from "lucide-react";
import { useCwtsForm } from "../hooks/useCwts";
import { Link } from "react-router-dom";
import { SelectBarangays } from "./SelectComponents/SelectBarangay";
import { SelectCitiesMunicipalities } from "./SelectComponents/SelectCitiesAndMunicipalities";
import { SelectProvince } from "./SelectComponents/SelectProvince";
import { useUploadImageCert } from "../hooks/useUploadImageCert";

function ProgramForms() {
  const { form, handleSubmit, isLoading } = useCwtsForm();
  const { handleFileChange, previewUrl, handleImageSubmit, isLoadingSave } =
    useUploadImageCert();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Student ID Section */}
        <div className="mb-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="student_id"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="student_id">Student ID</Label>
                    <FormControl>
                      <Input id="student_id" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical Certificate
          </label>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <input
              type="file"
              id="fileUpload"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              className="hidden"
              accept="image/*,.pdf"
              multiple
            />

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Upload className="h-8 w-8 text-blue-500 mb-2" />
              <span className="text-sm font-medium text-blue-600">
                Upload Medical Certificate
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Supported formats: JPG, PNG, PDF
              </span>
            </label>
          </div>

          {previewUrl && (
            <>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Uploaded Files:
                </p>
                <div>
                  <img src={previewUrl} width={100} height={100} />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  onClick={handleImageSubmit}
                  disabled={isLoadingSave}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center disabled:bg-blue-300"
                >
                  {isLoadingSave ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )}
                  {isLoadingSave ? "Saving..." : "Save Medical Certificate"}
                </Button>
              </div>
            </>
          )}
        </div>

        <Separator className="my-6" />

        {/* Full Name Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Full Name</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="lastname">Lastname</Label>
                    <FormControl>
                      <Input id="lastname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="firstname">Firstname</Label>
                    <FormControl>
                      <Input id="firstname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="middlename"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="middlename">Middlename</Label>
                    <FormControl>
                      <Input id="middlename" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="suffix"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="suffix">Suffix</Label>
                    <FormControl>
                      <Input id="suffix" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Personal Information */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="gender">Gender</Label>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          {["Male", "Female", "Other"].map((g) => (
                            <SelectGroup key={g}>
                              <SelectItem value={g}>{g}</SelectItem>
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="date_birth"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="date_birth">Date Birth</Label>
                    <FormControl>
                      <Input
                        type="date"
                        id="date_birth"
                        value={
                          field.value instanceof Date
                            ? field.value.toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) => {
                          field.onChange(
                            e.target.value ? new Date(e.target.value) : null
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="place_birth"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="place_birth">Place Birth</Label>
                    <FormControl>
                      <Input id="place_birth" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="phone_number">Phone Number</Label>
                    <FormControl>
                      <Input id="phone_number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email">Email</Label>
                    <FormControl>
                      <Input id="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Academic Information */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Academic Information</h3>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="department">Department</Label>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          {["CITE", "CBM", "CTE", "DFIMES"].map((dept) => (
                            <SelectGroup key={dept}>
                              <SelectItem value={dept}>{dept}</SelectItem>
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="course">Course</Label>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Course" />
                        </SelectTrigger>
                        <SelectContent>
                          {["BSIT", "BSCpE", "BSEE", "BSBA"].map((course) => (
                            <SelectGroup key={course}>
                              <SelectItem value={course}>{course}</SelectItem>
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="school">School</Label>
                    <FormControl>
                      <Input id="school" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="religion"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="religion">Religion</Label>
                    <FormControl>
                      <Input id="religion" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* BMI Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">BMI</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="weight">Weight</Label>
                    <FormControl>
                      <Input id="weight" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="height">Height</Label>
                    <FormControl>
                      <Input id="height" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="complexion"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="complexion">Complexion</Label>
                    <FormControl>
                      <Input id="complexion" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="blood_type"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="blood_type">Blood Type</Label>
                    <FormControl>
                      <Input id="blood_types" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Address Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Address</h3>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="street_address"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="street_address">Street Address</Label>
                    <FormControl>
                      <SelectBarangays
                        onChange={field.onChange}
                        value={field.value}
                        name={field.name}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="city">City</Label>
                    <FormControl>
                      <SelectCitiesMunicipalities
                        onChange={field.onChange}
                        value={field.value}
                        name={field.name}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="state_province"
                render={({ field }) => (
                  <FormItem>
                    <Label>State Province</Label>
                    <FormControl>
                      <SelectProvince
                        onChange={(provinceName) => {
                          field.onChange(provinceName);
                          form.setValue("city", "");
                        }}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="postal_code"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="postal_code">Postal / Zip Code</Label>
                    <FormControl>
                      <Input id="postal_code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Parental Information */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Parental Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="mothers_name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="mothers_name">Mothers name</Label>
                    <FormControl>
                      <Input id="mothers_name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="mothers_occupation"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="mothers_name">Mothers Occupation</Label>
                    <FormControl>
                      <Input id="mothers_name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="fathers_name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="state_province">Fathers name</Label>
                    <FormControl>
                      <Input id="state_province" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="fathers_occupation"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="fathers_occupation">
                      Fathers Occupation
                    </Label>
                    <FormControl>
                      <Input id="fathers_occupation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Emergency Contact */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">
            Person to notify in case of emergency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="emergency_name"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="emergency_name">Emergency name</Label>
                    <FormControl>
                      <Input id="emergency_name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="emergency_relationship"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="emergency_relationship">
                      Emergency Relationship
                    </Label>
                    <FormControl>
                      <Input id="emergency_relationship" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="emergency_address"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="emergency_address">Emergency Address</Label>
                    <FormControl>
                      <Input id="emergency_address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="emergency_phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="emergency_phonenumber">
                      Emergency Phone Number
                    </Label>
                    <FormControl>
                      <Input id="emergency_phonenumber" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Academic Details */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Academic Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="semester">Semester</Label>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Semester" />
                        </SelectTrigger>
                        <SelectContent>
                          {["1st", "2nd"].map((sem) => (
                            <SelectGroup key={sem}>
                              <SelectItem value={sem}>{sem}</SelectItem>
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="school_year"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="school_year">School Year</Label>
                    <FormControl>
                      <Input id="school_year" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="grade">Grade</Label>
                    <FormControl>
                      <Input id="grade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="remarks">Remarks</Label>
                    <FormControl>
                      <Input id="remarks" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="gap-2 flex justify-between">
          <Link to={"/home"}>
            <Button variant={"outline"}>Back</Button>
          </Link>
          <Button className="bg-blue-500 text-white hover:bg-blue-400">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ProgramForms;
