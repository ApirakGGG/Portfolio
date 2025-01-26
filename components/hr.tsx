import Image from "next/image"
export default function Hr() {
    return (
        <div className="flex justify-center">
            <Image src={"/question.avif"} alt="src" width={100} height={100} className="object-cover size-24 rounded-lg rotate-45" />
        </div>
    )
}