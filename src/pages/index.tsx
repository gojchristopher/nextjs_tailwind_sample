import { Button } from "@/components/button";

export default function Index() {
	return (
		<div className="p-4 flex flex-col gap-3 items-start">
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
	);
}
