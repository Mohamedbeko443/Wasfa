
interface InstructionsProps {
    instructions: string[];
}

function Instructions({ instructions }: InstructionsProps) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Instructions</h4>

            <div className="space-y-3">
                {instructions.map((item, idx) => (
                    <p key={idx} className="flex items-center gap-3 text-lg">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Instructions