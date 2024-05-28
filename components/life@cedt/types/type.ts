export type Thought = {
    thought: string;
    name: string; // who said that
    position: string; // position of the person (Ex. CEDT student)
    image: string; // image of the person
};

export type CourseThought = {
    title: string;
    description: string;
    image: string;
    alignment: "left" | "right";
};