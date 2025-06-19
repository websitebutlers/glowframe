import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { APPLICATION_FIELDS } from "@/lib/constants";

const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  ageRange: z.string().min(1, "Age range is required"),
  gender: z.string().min(1, "Gender is required"),
  race: z.string().min(1, "Race/ethnicity is required"),
  professionalBackground: z.string().min(1, "Professional background is required"),
  primaryFields: z.array(z.string()).min(1, "At least one field of interest is required"),
  experience: z.string().min(1, "Experience description is required"),
  portfolioLinks: z.string().optional(),
  workshopGoals: z.string().optional(),
  challenges: z.string().optional(),
  presentWork: z.boolean().default(false),
  workDescription: z.string().optional(),
  connectWith: z.array(z.string()).optional(),
  hearAbout: z.string().optional(),
  mailingList: z.boolean().default(false),
  additionalComments: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function ApplicationSection() {
  const { toast } = useToast();
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedConnections, setSelectedConnections] = useState<string[]>([]);

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      ageRange: "",
      gender: "",
      race: "",
      professionalBackground: "",
      primaryFields: [],
      experience: "",
      portfolioLinks: "",
      workshopGoals: "",
      challenges: "",
      presentWork: false,
      workDescription: "",
      connectWith: [],
      hearAbout: "",
      mailingList: false,
      additionalComments: "",
      termsAccepted: false
    }
  });

  const submitApplication = useMutation({
    mutationFn: async (data: ApplicationForm) => {
      const response = await apiRequest("POST", "/api/applications", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll be in touch soon.",
      });
      form.reset();
      setSelectedFields([]);
      setSelectedConnections([]);
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ApplicationForm) => {
    submitApplication.mutate({
      ...data,
      primaryFields: selectedFields,
      connectWith: selectedConnections
    });
  };

  const handleFieldChange = (field: string, checked: boolean) => {
    if (checked) {
      setSelectedFields([...selectedFields, field]);
    } else {
      setSelectedFields(selectedFields.filter(f => f !== field));
    }
    form.setValue("primaryFields", checked ? [...selectedFields, field] : selectedFields.filter(f => f !== field));
  };

  const handleConnectionChange = (connection: string, checked: boolean) => {
    if (checked) {
      setSelectedConnections([...selectedConnections, connection]);
    } else {
      setSelectedConnections(selectedConnections.filter(c => c !== connection));
    }
    form.setValue("connectWith", checked ? [...selectedConnections, connection] : selectedConnections.filter(c => c !== connection));
  };

  return (
    <section id="apply" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Program</h2>
          <p className="text-xl text-gray-300">
            Ready to take the next step in your creative career? Apply for our workshops and apprenticeship program.
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Participant Application</CardTitle>
            <p className="text-gray-300">
              Complete this application to join the Glow-Frame Initiative. This comprehensive program is designed for individuals aged 16-24, offering hands-on training on actual film sets and behind the scenes at live events.
            </p>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-black border-gray-700 focus:border-electric-blue" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="bg-black border-gray-700 focus:border-electric-blue" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} className="bg-black border-gray-700 focus:border-electric-blue" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="ageRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age Range *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black border-gray-700 focus:border-electric-blue">
                              <SelectValue placeholder="Select age range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {APPLICATION_FIELDS.ageRanges.map((age) => (
                              <SelectItem key={age} value={age}>{age}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black border-gray-700 focus:border-electric-blue">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {APPLICATION_FIELDS.genders.map((gender) => (
                              <SelectItem key={gender} value={gender.toLowerCase()}>{gender}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="race"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Race/Ethnicity *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black border-gray-700 focus:border-electric-blue">
                              <SelectValue placeholder="Select race/ethnicity" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {APPLICATION_FIELDS.races.map((race) => (
                              <SelectItem key={race} value={race.toLowerCase()}>{race}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="professionalBackground"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Background or Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black border-gray-700 focus:border-electric-blue">
                            <SelectValue placeholder="Select background/interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {APPLICATION_FIELDS.professionalBackgrounds.map((bg) => (
                            <SelectItem key={bg} value={bg.toLowerCase().replace(/[^a-z0-9]/g, '-')}>{bg}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Primary Fields of Interest */}
                <FormField
                  control={form.control}
                  name="primaryFields"
                  render={() => (
                    <FormItem>
                      <FormLabel>Primary Fields of Interest *</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {APPLICATION_FIELDS.primaryFields.map((field) => (
                          <div key={field} className="flex items-center space-x-2">
                            <Checkbox
                              id={field}
                              checked={selectedFields.includes(field)}
                              onCheckedChange={(checked) => handleFieldChange(field, checked as boolean)}
                              className="border-gray-700 data-[state=checked]:bg-electric-blue data-[state=checked]:border-electric-blue"
                            />
                            <label htmlFor={field} className="text-sm cursor-pointer">
                              {field}
                            </label>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience & Background *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="bg-black border-gray-700 focus:border-electric-blue"
                          placeholder="Briefly describe your experience and background in your field"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="portfolioLinks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio Links (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="url"
                          className="bg-black border-gray-700 focus:border-electric-blue"
                          placeholder="Links to your work (portfolio, website, social media)"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="workshopGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What do you hope to gain from attending Glow-Frame Workshops?</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={3}
                          className="bg-black border-gray-700 focus:border-electric-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Connect With */}
                <FormField
                  control={form.control}
                  name="connectWith"
                  render={() => (
                    <FormItem>
                      <FormLabel>What types of professionals are you most interested in connecting with?</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {APPLICATION_FIELDS.connectWith.map((connection) => (
                          <div key={connection} className="flex items-center space-x-2">
                            <Checkbox
                              id={connection}
                              checked={selectedConnections.includes(connection)}
                              onCheckedChange={(checked) => handleConnectionChange(connection, checked as boolean)}
                              className="border-gray-700 data-[state=checked]:bg-electric-blue data-[state=checked]:border-electric-blue"
                            />
                            <label htmlFor={connection} className="text-sm cursor-pointer">
                              {connection}
                            </label>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hearAbout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about Glow-Frame?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black border-gray-700 focus:border-electric-blue">
                            <SelectValue placeholder="Select how you heard about us" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {APPLICATION_FIELDS.hearAbout.map((source) => (
                            <SelectItem key={source} value={source.toLowerCase().replace(/[^a-z0-9]/g, '-')}>{source}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mailingList"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-gray-700 data-[state=checked]:bg-electric-blue data-[state=checked]:border-electric-blue"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Would you like to be added to our mailing list to receive updates?
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalComments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Comments or Questions</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={3}
                          className="bg-black border-gray-700 focus:border-electric-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-gray-700 data-[state=checked]:bg-electric-blue data-[state=checked]:border-electric-blue"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I acknowledge that my information is accurate and will be used in accordance with our terms and privacy policy. *
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={submitApplication.isPending}
                    className="bg-glow-gold text-black px-8 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
                    size="lg"
                  >
                    {submitApplication.isPending ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
