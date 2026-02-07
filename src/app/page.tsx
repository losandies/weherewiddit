import Image from "next/image";
import heart from "../assets/heart.jpeg";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans ">
            <Link href="/hellolovergirl">
                <Image
                    src={heart}
                    width={500}
                    height={500}
                    alt="heart"
                    className="heart-beat cursor-pointer select-none active:scale-95 transition-transform"
                />
            </Link>
        </div>
    );
}
