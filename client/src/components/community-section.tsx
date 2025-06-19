import { Users, Handshake, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const apprenticeInquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  ageRange: z.string().min(1, "Age range is required"),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  experience: z.string().optional(),
  goals: z.string().optional(),
  hearAbout: z.string().optional(),
  mailingList: z.boolean().default(false),
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms")
});

type ApprenticeInquiry = z.infer<typeof apprenticeInquirySchema>;

const interestOptions = [
  "Film Production",
  "Audio Engineering", 
  "Camera Operations",
  "Lighting Design",
  "Video Editing",
  "Sound Design",
  "Content Creation",
  "Live Event Production"
];

const hearAboutOptions = [
  "Social Media",
  "Friend/Family",
  "School/Educational Institution", 
  "Community Organization",
  "Industry Professional",
  "Online Search",
  "Other"
];

export default function CommunitySection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ApprenticeInquiry>({
    resolver: zodResolver(apprenticeInquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      ageRange: "",
      interests: [],
      experience: "",
      goals: "",
      hearAbout: "",
      mailingList: false,
      termsAccepted: false
    }
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: ApprenticeInquiry) => {
      const response = await apiRequest("POST", "/api/apprentice-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest. We'll be in touch about future opportunities.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const selectedInterests = form.watch("interests") || [];

  const handleInterestChange = (interest: string, checked: boolean) => {
    const current = selectedInterests;
    if (checked) {
      form.setValue("interests", [...current, interest]);
    } else {
      form.setValue("interests", current.filter(i => i !== interest));
    }
  };

  const onSubmit = (data: ApprenticeInquiry) => {
    submitInquiry.mutate(data);
  };
  return (
    <section id="community" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fostering a diverse and inclusive workforce in Arizona's film and AV sectors, promoting economic growth and authentic storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-glow-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Diverse Talent</h3>
            <p className="text-gray-300">
              Empowering young adults from underserved communities with opportunities in film and AV industries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-electric-blue text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Industry Partnerships</h3>
            <p className="text-gray-300">
              Building connections with industry professionals and organizations to create real opportunities.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-gray-300">
              Celebrating the achievements of our participants as they advance in their creative careers.
            </p>
          </div>
        </div>

        <div className="bg-black p-8 rounded-lg border border-gray-800 mb-16">
          {/* Theater performers collaborating on production */}
          <img 
            src="/images/two-performers-sitting-on-floor-in-theater-2025-03-10-05-13-22-utc.jpg" 
            alt="Theater performers collaborating on production" 
            className="w-full object-contain bg-gray-900 rounded-lg mb-6"
          />
          <h3 className="text-3xl font-bold mb-4">Building Tomorrow's Storytellers</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our participants work on feature films, TV shows, podcasts, and live concerts, gaining valuable insights and mentorship from seasoned experts while building their professional portfolios.
          </p>
        </div>

        {/* Apprentice Interest Inquiry Form */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Apprenticeship Interest Inquiry</CardTitle>
            <p className="text-gray-300">
              Interested in future apprenticeship opportunities? Let us know about your interests and we'll keep you informed about upcoming programs and opportunities.
            </p>
            
            {/* Privacy Disclaimer */}
            <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded-lg">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 mt-0.5 text-electric-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-2">Your Privacy Matters</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Glow Frame Initiative values your privacy and is committed to protecting your personal information. 
                    The data you provide is used solely for our internal contact records and program administration. 
                    We never share your information with third-party sources for any reason. Your information 
                    remains confidential and is used only to support your participation in our programs and to 
                    keep you informed about relevant opportunities.
                  </p>
                </div>
              </div>
            </div>
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
                            <SelectItem value="16-18">16-18</SelectItem>
                            <SelectItem value="19-21">19-21</SelectItem>
                            <SelectItem value="22-24">22-24</SelectItem>
                            <SelectItem value="25+">25+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Areas of Interest */}
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <FormLabel>Areas of Interest *</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={selectedInterests.includes(interest)}
                              onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                              className="border-gray-700 data-[state=checked]:bg-electric-blue data-[state=checked]:border-electric-blue"
                            />
                            <label htmlFor={interest} className="text-sm cursor-pointer">
                              {interest}
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
                      <FormLabel>Relevant Experience (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={3}
                          className="bg-black border-gray-700 focus:border-electric-blue"
                          placeholder="Briefly describe any relevant experience or background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are your career goals? (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={3}
                          className="bg-black border-gray-700 focus:border-electric-blue"
                          placeholder="Tell us about your aspirations in the film and AV industry"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hearAbout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about Glow Frame? (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black border-gray-700 focus:border-electric-blue">
                            <SelectValue placeholder="Select how you heard about us" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {hearAboutOptions.map((source) => (
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
                          Would you like to receive updates about future opportunities?
                        </FormLabel>
                      </div>
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
                          I acknowledge that my information is accurate and will be used in accordance with our privacy policy. *
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={submitInquiry.isPending}
                    className="bg-electric-blue text-black px-8 py-4 text-lg font-bold hover:bg-blue-400 transition-colors duration-200"
                    size="lg"
                  >
                    {submitInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
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
