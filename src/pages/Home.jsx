import {  Flex, Text, Button } from "@radix-ui/themes"
export default function Home(){
    return(
        <div>
            <p className="bg-amber-950 text-shadow-indigo-300 font-extrabold text-9xl font-lato">This is Home</p>
            <Flex direction="column" gap="2">
			<Text className="font-lato text-secondary-text">Hello from Radix Themes :)</Text>
			<button>Let's go</button>
		</Flex>
        </div>
    )
}