import { FormAiAnalyzer } from "./_components/form-ai-analyzer";
import { ChartAiAnalyzer } from "./_components/chart-ai-analyzer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IconGender from "@/components/icons/icon-gender";
export default function AiAnalyzer() {
  return (
    <>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        AI Analyzer
      </h2>
      <p className="mt-3 text-netral-primary font-medium">
        Share your concerns, AI will analyse your mental state
      </p>

      <div className="flex justify-between mt-10">
        <Select>
          <SelectTrigger className="w-[140px] bg-[#272C4D] text-secondary-custom_secondary justify-start gap-2 py-5 rounded-lg">
            <IconGender className="mr-2" />
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="w-[140px]">
            <SelectGroup className="text-center px-2">
              <SelectItem value="apple" className="border-b-2">
                Language
              </SelectItem>
              <SelectItem value="banana" className="border-b-2">
                Indonesian
              </SelectItem>
              <SelectItem value="blueberry">English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Link href="/dashboard-patient/analyzer-detail">
          <Button className="text-white font-semibold bg-[#27374D] rounded-full">
            Analyzer History
          </Button>
        </Link>
      </div>

      <div className="flex gap-5 flex-col lg:flex-row mt-5">
        <div className="bg-secondary-custom_secondary p-5 flex-1 rounded-3xl">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Health Mental Analyzer
            </h3>
          </center>
          <div className="flex flex-col gap-2 mt-5 lg:h-96">
            <FormAiAnalyzer />
          </div>
        </div>

        <div className="bg-secondary-custom_secondary p-5 rounded-2xl flex-1 w-full">
          <center>
            <h3 className="text-2xl font-semibold text-netral-primary">
              Analysis Results
            </h3>
          </center>
          <div className="flex flex-col flex-1 p-3 md:p-10">
            <div className="text-netral-primary">
              <p>Probability of Stress: 65%</p>
              <p>Probability of Anxiety: 40%</p>
              <p>Probability of Depression: 70%</p>
            </div>
            <Separator className="mt-10 border-2" />
            <ChartAiAnalyzer />
          </div>
        </div>
      </div>
    </>
  );
}
