import {  Flex, Text, Button } from "@radix-ui/themes"
export default function Home(){
    return(
        <div>
            <p className="bg-amber-950 text-shadow-indigo-300 font-extrabold text-9xl">This is Home</p>
            <Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
        </div>
    )
}