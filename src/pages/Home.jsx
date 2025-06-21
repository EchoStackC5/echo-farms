import {  Flex, Text, Button } from "@radix-ui/themes"
export default function Home(){
    return(
        <div>
            <p className="text-red-400 text-shadow-indigo-300 font-extrabold text-9xl font-poppins">This is Home</p>
            <Flex direction="column" gap="2">
			<Text className="font-lato text-secondary-text">Hello from Radix Themes :)</Text>
			<button>Let's go</button>
		</Flex>
        </div>
    )
}