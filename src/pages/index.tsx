import Button from "@/components/Button";
import { InputField } from "@/components/InputField";

export default function Index() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-start justify-center space-y-5 p-4">
      <div className="flex w-full items-center justify-center space-x-2">
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

        <button className="btn-danger btn">custom</button>
      </div>

      <div className="flex w-full items-center justify-center space-x-2">
        <InputField placeholder="outline" />
        <InputField variants="filled" placeholder="filled" />
        <InputField variants="unstyled" placeholder="unstyled" />
        <InputField variants="flushed" placeholder="flushed" />
      </div>
    </div>
  );
}
