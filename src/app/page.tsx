import { Component } from '@/components/moodChart';
import SpotifyCard from '@/components/songReccomendation';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home () {
    return (
        <div className="h-screen w-full flex flex-row items-stretch gap-5 bg-gray-300 p-5">
            <div className="h-full w-1/5 flex p-5 bg-slate-200 rounded-xl">
                <ul className="w-full flex flex-col gap-5 ">
                    <li className="text-2xl">Home</li>
                    <li className="text-2xl">About</li>
                </ul>
            </div>
            <div className="w-full h-full flex flex-col gap-5">
                <div className="text-6xl">
                    Mentos
                </div>
                <div className="basis-2/6 w-full">
                    <Component />
                </div>
                <div className="basis-3/5 grid grid-cols-3 gap-5">
                    <SpotifyCard url={''} />
                    <Skeleton className="aspect-square w-full" />
                    <Skeleton className="aspect-square w-full" />
                </div>
            </div>
        </div>
    );
}
