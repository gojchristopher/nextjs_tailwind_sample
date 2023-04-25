import { InputField } from "@/components/InputField";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <div className="flex h-full w-full items-start justify-center space-x-5 p-4">
      <div className="flex flex-col space-y-2">
        <Button size="sm" variant="solid">
          Click me
        </Button>
        <Button size="sm" variant="outline">
          Click me
        </Button>
        <Button size="md" variant="solid">
          Click me
        </Button>
        <Button size="md" variant="outline">
          Click me
        </Button>
      </div>

      <div className="flex flex-col space-y-2">
        <InputField placeholder="outline" />
        <InputField variants="filled" placeholder="filled" />
        <InputField variants="unstyled" placeholder="unstyled" />
        <InputField variants="flushed" placeholder="flushed" />
      </div>
    </div>
  );
}
